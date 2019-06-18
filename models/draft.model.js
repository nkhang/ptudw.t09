var db = require("../utils/db.util");

module.exports = {
  add: article => {
    return db.insert("drafts", article);
  },

  detailById: id => {
    var sql = `SELECT dr.Id, dr.Title, dr.Date, dr.Cover, dr.Abstract, dr.Content, wr.Alias FROM drafts as dr, writers as wr WHERE dr.Id = ${id} AND dr.Author = wr.Id`;
    return db.load(sql);
  },

  loadByUser: id => {
    var sql = `SELECT dr.Id, dr.Title, dr.Date, dr.Cover, dr.Abstract, dr.Content, wr.Alias, ca.Name as Category, states.Status
    FROM drafts as dr, writers as wr, subcategories as ca, states
    WHERE dr.Author = ${id} AND dr.Author = wr.Id AND ca.Id = dr.Category and dr.State = states.Id`;
    return db.load(sql);
  },

  ByEditor: id => {
    var sql = `SELECT drafts.Id, drafts.Title, drafts.Date, drafts.Cover, drafts.Content, drafts.Abstract, subcategories.Name as "Category", writers.Alias
    FROM drafts JOIN writers on drafts.Author = writers.Id AND drafts.State = 1
    JOIN subcategories ON subcategories.Id = drafts.Category
    JOIN editors ON subcategories.Category = editors.ManagedCate AND editors.Id = ${id}`
    return db.load(sql);
  },

  PublishByEditor: id => {
    var sql = `SELECT drafts.Id, drafts.Title, drafts.Date, drafts.Cover, drafts.Content, drafts.Abstract, subcategories.Name as "Category", writers.Alias
    FROM drafts JOIN writers on drafts.Author = writers.Id AND drafts.State = 4
    JOIN subcategories ON subcategories.Id = drafts.Category
    JOIN editors ON subcategories.Category = editors.ManagedCate AND editors.Id = ${id}`
    return db.load(sql);
  },
  getAllForAdminWC: () => {
    var sql = ` select drafts.Id,drafts.Title,wt.Alias as Author,drafts.Abstract,date_format(drafts.Date,"%d-%c-%Y") as Date,drafts.Category,drafts.State,atc.Premium,date_format(atc.PublishTime,"%d-%c-%Y %k:%i:%s") as PublishTime
                from drafts
                left join (
                select Id,Draft,Premium,PublishTime
                from articles
                group by Id,Draft,Premium,PublishTime) atc on atc.Draft = drafts.Id 
                
                left join (
                  select Id,Alias
                  from writers
                  group by Id,Alias) wt on wt.Id = drafts.Author
                  
                group by drafts.Id,Author,atc.Premium,PublishTime
                order by drafts.Id ASC
                `;
    return db.load(sql);
  },
  listByTag: id => {
    return db.load(`
    select drafts.Id,drafts.Title,drafts.Abstract,drafts.Date,wt.Alias as Author,states.Status as State,subcategories.Name as SubCategory,categories.Name as Category
    from drafts 
    inner join drafts_tags on drafts.Id = drafts_tags.idTag and drafts_tags.idTag = ${id}
    inner join states on states.Id = drafts.State
    inner join subcategories on subcategories.Id = drafts.Category
    inner join categories on subcategories.Category = categories.Id
    left join (
      select Id,Alias
      from writers
      group by Id) wt on wt.Id = drafts.Author `);
  }
};