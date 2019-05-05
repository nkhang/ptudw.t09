const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.redirect("/");
});

router.get("/article-demo", function(req, res) {
  var a_data = {
    a_title: "5 tính năng hay nhất của MIUI 10 trên máy Xiaomi",
    a_author: "Khang Nguyen",
    a_date: "20/04/2019",
    a_abstract:
      "6 cái này là những tính năng mình hay sử dụng nhất, và nó giúp mình rất nhiều trong việc dùng con Redmi Note 7 (cũng như nhiều dòng smartphone Xiaomi khác) một cách hiệu quả. Mời anh em đang dùng Xiaomi tham khảo nhé.",
    a_content:
      "<h2> Hãy quên hàng phím ảo đi, vuốt hết</h2><p>Xiaomi tới giờ là hãng làm thao tác đa nhiệm bằng cảm ứng ngon nhất trong thế giới Android, gần ngang với iPhone. Bạn có thể ẩn hoàn toàn phím điều hướng trên màn hình, để dành đất cho việc hiển thị nội dung. Thay vào đó bạn sẽ:</p><ul><li>Vuốt trái, phải để back</li><li>Vuốt lên để về home</li><li>Vuốt lên và giữ để hiển thị giao diện đa nhiệm</li></ul><p>Những chức năng này nhìn vầy thôi chứ nó cực kì hữu ích và bạn sẽ nhận thấy rõ sự khác biệt do đây là các thao tác bạn làm cực kì thường xuyên, nhiều (chục) lần mỗi khi bạn cầm điện thoại lên.</p><p>Cách bật: Vào Cài đặt > Màn hình tràn cạnh > Cử chỉ màn hình tràn cạnh</p><h2>Cầm máy lên là bật màn hình</h2><p>Trên đa số những chiếc điện thoại Xiaomi đều có cảm biến vân tay, nhưng nó lại nằm sau lưng nên không phải ai cũng thích dùng (do phải với tay ra sau). Bạn cứ setup cảm biến vân tay đi, nhưng song song đó thì cài đặt thêm nhận diện gương mặt nữa. MIUII 10 có tính năng nhận diện rất tốt: đưa lên là bắt đầu quét ngay, khi bạn chưa kịp nhận ra thì máy đã unlock xong và sẵn sàng cho bạn sử dụng. Đôi khi hơi giật mình tí, nhưng vẫn tiết kiệm thời gian hơn và bạn bớt được thao tác so với cảm biến vân tay.</p><p>Cách bật: Cài đặt > Màn hình khóa & mật khẩu > Quản lý dữ liệu khuôn mặt</p><p>Lưu ý: trừ một số dòng điện thoại Mi cao cấp, ví dụ như Mi 8 Explorer Edition, thì các smartphone Mi chỉ nhận diện gương mặt bằng hình ảnh 2D, tức là kém an toàn hơn so với quét 3D hồng ngoại. Những tấm ảnh chụp giả mặt bạn hoàn toàn có thể đánh lừa điện thoại unlock nếu đủ tinh vi. Nếu bạn không ngại lắm về vụ này và ưu tiên sự tiện lợi thì hãy dùng chức năng nhận diện gương mặt.</p>",
  };
  res.render("general-article-detail", {
    data: a_data,
    title: a_data.a_title,
    extra: '<link rel="stylesheet" href="/stylesheets/writer.css">',
  });
});

router.get("/article-03", function(req, res) {
  var a_data = {
    a_title: 'YouTube đã "sát hại" Internet Explorer 6 như thế nào?',
    a_author: "Khang Nguyen",
    a_date: "20/04/2019",
    a_abstract:
      "Thay vì bị chỉ trích, YouTube lại được tôn vinh như cứu tinh của web khi khuyến khích mọi người từ bỏ trình duyệt già cỗi này để chuyển sang các trình duyệt khác, tốt hơn, an toàn hơn.",
    a_content:
      '<p>Vào năm 2009, Internet là thế giới hoàn toàn khác bây giờ. iPhone mới hai năm tuổi và chiếc Android đầu tiên, T-Mobile G1 mới chỉ chào đời. Đa số mọi người truy cập web qua máy tính và một phần đáng kể trong số họ còn không bận tâm đến việc cập nhật trình duyệt già cỗi của mình, Internet Explorer 6 – phần nhiều là vì những nhà phát triển web cũng chẳng quan tâm đến nó.</p><p>Nhưng đột nhiên, Google ra thông báo dừng hỗ trợ trình duyệt này và điều này gây ra tác động mạnh đến IE6. Từ chỗ chiếm 25% lượng người dùng toàn cầu vào giữa năm 2009, nó tụt xuống chỉ còn chưa đầy 10% trong một năm sau đó.</p><p>Tuy nhiên, mới đây một cựu phát triển web của YouTube, Chris Zacharias đã tiết lộ câu chuyện đằng sau sự sụt giảm đột ngột lượng người dùng của IE6. Theo anh cho biết, việc Google dừng hỗ trợ IE6 không phải là quyết định của đội ngũ quản lý, mà là do anh và các kỹ sư còn lại của YouTube đã âm mưu "sát hại" trình duyệt này.</p><div class="VCSortableInPreviewMode active" style="" type="Photo"><div><a href="https://kenh14cdn.com/2019/5/4/photo-1-15569778026991546204914.jpg" data-fancybox-group="img-lightbox" title="Lượng người dùng IE6 (màu xanh dương nhạt) tụt dốc đột ngột vào giữa năm 2009." target="_blank" class="detail-img-lightbox"><img style="width:100%;max-width:100%;" src="https://kenh14cdn.com/2019/5/4/photo-1-15569778026991546204914.jpg" id="img_86f2e330-6e73-11e9-8ac3-8f428c4c855b" w="660" h="307" alt="YouTube đã sát hại Internet Explorer 6 như thế nào? - Ảnh 1." title="YouTube đã sát hại Internet Explorer 6 như thế nào? - Ảnh 1." rel="lightbox" photoid="86f2e330-6e73-11e9-8ac3-8f428c4c855b" type="photo" data-original="https://kenh14cdn.com/2019/5/4/photo-1-15569778026991546204914.jpg" width="" height="" class="lightbox-content"></a></div><div class="PhotoCMS_Caption"><p data-placeholder="[nhập chú thích]">Lượng người dùng IE6 (màu xanh dương nhạt) tụt dốc đột ngột vào giữa năm 2009.</p></div></div><p><b style="font-size: 20px;">Một kế hoạch đơn giản</b><br></p><p>Vào thời điểm đó, cho dù IE6 đang có thị phần cao trên thế giới, nói chung nó bị mọi người ghét bỏ và thường xuyên chế nhạo. Trình duyệt này được phát triển vào thời điểm Microsoft chẳng có đối thủ thực sự nào trên thị trường, vì vậy nó có thể phá vỡ mọi quy ước về web khi nó muốn. Tồi tệ hơn, công nghệ web bên dưới nó lạc hậu đến không tưởng so với các trình duyệt hiện đại, được cập nhật thường xuyên như Chrome hay Firefox.</p><p>Trong khi đó, các kỹ sư YouTube lại không được bỏ qua trình duyệt này, nó chiếm đến hơn 20% thị phần vào thời điểm đó và 18% lượng người dùng YouTube đến từ IE6. Nhưng theo Zacharis, lúc đó IE6 đã trở thành "<i>thuốc độc cho sự tồn tại của nhóm phát triển web</i>." Sau nhiều đêm mất ngủ để sửa gấp các lỗi có liên quan đến IE6, nhóm YouTube quyết định thế là quá đủ và tự mình lên một kế hoạch đơn giản để hạ gục nó.</p><p>Họ thêm vào một banner nhỏ trên YouTube chỉ hiển thị với người dùng IE6, tuyên bố rằng trình duyệt này sẽ không được hỗ trợ trong tương lai và người dùng nên đổi sang trình duyệt khác hiện đại hơn. Banner nhỏ đó khuyến khích người dùng cài đặt Firefox 3.5, IE8 hoặc Google Chrome.</p><div class="VCSortableInPreviewMode active" style="" type="Photo"><div><a href="https://kenh14cdn.com/2019/5/4/photo-1-1556977804768857680948.jpg" data-fancybox-group="img-lightbox" title="Banner trên YouTube khuyến khích người dùng IE6 chuyển sang các trình duyệt mới hơn." target="_blank" class="detail-img-lightbox"><img style="width:100%;max-width:100%;" src="https://kenh14cdn.com/2019/5/4/photo-1-1556977804768857680948.jpg" id="img_8877ae70-6e73-11e9-8ac3-8f428c4c855b" w="660" h="495" alt="YouTube đã sát hại Internet Explorer 6 như thế nào? - Ảnh 2." title="YouTube đã sát hại Internet Explorer 6 như thế nào? - Ảnh 2." rel="lightbox" photoid="8877ae70-6e73-11e9-8ac3-8f428c4c855b" type="photo" data-original="https://kenh14cdn.com/2019/5/4/photo-1-1556977804768857680948.jpg" width="" height="" class="lightbox-content"></a></div><div class="PhotoCMS_Caption"><p data-placeholder="[nhập chú thích]">Banner trên YouTube khuyến khích người dùng IE6 chuyển sang các trình duyệt mới hơn.</p></div></div><p><span style="">Thông thường trong công ty sẽ còn có hàng loạt quy trình kiểm tra nhằm cản trở các nhà phát triển thực hiện bất cứ thay đổi nào về code mà họ muốn, vì vậy việc đưa vào một cảnh báo đi ngược lại chính sách của công ty là điều gần như không thể.</span><br></p><div id="admzone474524" class="wp100 fl mt-10"><div id="ads_zone474524"><div id="ads_zone474524_slot1"><div id="ads_zone474524_banner553409" class="banner0"><div id="sspbid_3185"></div></div></div><div id="ads_zone474524_slot2" style="display: none;"></div></div></div><p>Tuy nhiên, lúc đó YouTube lại có một vị trí đặc biệt trong Google. Sau khi được Google thâu tóm với số tiền 1,65 tỷ USD mới chỉ 3 năm trước, những nhà phát triển từ thuở đầu của YouTube, hay các "OldTubers", lại được phép đưa vào các thay đổi mà không cần bất kỳ sự kiểm tra bổ sung nào.</p><p>Chừng nào những thay đổi mà họ đưa vào không làm hỏng bộ mặt đẹp đẽ của trang web thì không có vấn đề gì xảy ra cả. Hơn nữa, gần như không ai ở YouTube còn dùng IE6 nữa, nên họ cho rằng việc làm của họ sẽ không thể sớm phát hiện.</p><h3><b>Vị cứu tinh của web</b></h3><p>Quả thật, phải đến hai ngày sau khi đoạn banner trên xuất hiện, trưởng phòng nhân sự mới tìm đến cả nhóm. Ông cho biết, mình nhận được email từ mọi tạp chí công nghệ trên thế giới, tất cả đều hỏi tại sao YouTube lại đe dọa tiêu diệt một trình duyệt với thị phần đáng kể như vậy.</p><p>May mắn thay, hóa ra mọi người đều ủng hộ điều này. Họ xem YouTube như là vị cứu tinh của web vào thời điểm đó, khi nó thúc đẩy mọi người hướng tới các trình duyệt an toàn hơn và tốt hơn, trong khi tăng tốc phát triển web. Chuyến viếng thăm tiếp theo là của các luật sư, những người muốn đảm bảo rằng các trình duyệt được lựa chọn trong banner là hoàn toàn ngẫu nhiên và sẽ không gặp vấn đề với các quy định chống lại cạnh tranh ở EU đối với Chrome.</p><div class="VCSortableInPreviewMode active noCaption" style="" type="Photo"><div><a href="https://kenh14cdn.com/2019/5/4/photo-1-1556977838922774498833.jpg" data-fancybox-group="img-lightbox" title="" target="_blank" class="detail-img-lightbox"><img style="width:100%;max-width:100%;" src="https://kenh14cdn.com/2019/5/4/photo-1-1556977838922774498833.jpg" id="img_9c87f140-6e73-11e9-aa9c-dbccfc311fd7" w="660" h="371" alt="YouTube đã sát hại Internet Explorer 6 như thế nào? - Ảnh 3." title="YouTube đã sát hại Internet Explorer 6 như thế nào? - Ảnh 3." rel="lightbox" photoid="9c87f140-6e73-11e9-aa9c-dbccfc311fd7" type="photo" data-original="https://kenh14cdn.com/2019/5/4/photo-1-1556977838922774498833.jpg" width="" height="" class="lightbox-content"></a></div><div class="PhotoCMS_Caption"></div></div><p>Và những tư tưởng lớn gặp nhau. Không lâu sau khi banner của YouTube xuất hiện trên IE6, Zacharias phát hiện ra một banner tương tự cũng xuất hiện trên Google Docs khi mở bằng IE6. Hóa ra các kỹ sư của Google Docs khi đang thử nghiệm ứng dụng này trên IE6 đã nhìn thấy banner trên YouTube và ngay lập tức yêu cầu làm một banner tương tự trên Docs.</p><p>Zacharias nhớ lại: "<i>Không lâu sau đó, các kỹ sư Google Docs lấy banner về IE6 của chúng tôi và đưa nó vào sản phẩm của họ, có lẽ họ tưởng nhầm rằng chúng tôi làm vậy vì đã nhận được mọi sự chấp thuận cần thiết</i>."</p><p>Trên thực tế, đội ngũ lãnh đạo Google sẽ không bao giờ chấp nhận thay đổi đó, nhưng khi họ thấy banner đó đã được đưa vào phần lớn các sản phẩm của Google, họ chấp nhận điều đó như một sự đã rồi.</p><p>"<i>Khi YouTube, Google Docs và nhiều sản phẩm khác của Google đều đăng tải banner trên IE6, Google đã cho phép mọi trang web khác được thêm banner đó vào trang web của họ. Banner trên IE6 đột nhiên xuất hiện ở khắp mọi nơi. Trong vòng một tháng, lượng người dùng YouTube trên IE6 chỉ còn một nửa và lượng băng thông của IE6 trên toàn cầu đột ngột giảm hơn 10% trong khi các trình duyệt khác đều tăng tương ứng. Kết quả còn tốt hơn nhóm phát triển web dự định</i>."</p><p>Có lẽ Microsoft cũng cần cảm ơn các nhà phát triển của YouTube và Google khi đã thuyết phục được người dùng IE6 từ bỏ nó và nâng cấp lên các trình duyệt mới hơn, trước khi công ty ra mắt trang đếm ngược cho ngày tồn tại của IE6 vào năm 2011. Đến thời điểm đó, lượng người dùng của IE6 chỉ còn chưa đến 1% trên toàn cầu.</p><p style="text-align: right;"><i><b>Tham khảo AndroidPolice, ZDNet</b></i></p>',
  };
  res.render("general-article-detail", {
    data: a_data,
    title: a_data.a_title,
    extra: '<link rel="stylesheet" href="/stylesheets/writer.css">',
  });
});

router.get("/article-04", function(req, res) {
  var a_data = {
    a_title:
      "Trải nghiệm Google Assistant tiếng Việt: Thông minh, được việc, giọng êm nhưng đôi lúc đùa hơi nhạt",
    a_author: "Khang Nguyen",
    a_date: "20/04/2019",
    a_abstract:
      "Ở thời điểm hiện tại, Google Assistant là trợ lý ảo đầu tiên và duy nhất mà người Việt có thể sử dụng và được hưởng lợi.",
    a_content:
      '<p>Như thông tin đã đưa, Google mới đây đã chính thức bổ sung tiếng Việt vào danh sách những ngôn ngữ được hỗ trợ của trợ lý ảo Google Assistant.</p><p>Mặc dù phải đến ngày 06/05 thì buổi họp báo của Google chính thức ra mắt Assistant tiếng Việt mới diễn ra, tuy nhiên ngay từ ngày hôm nay (01/05), nhiều người dùng cho biết họ đã có thể sử dụng trợ lý ảo này. Chúng tôi cũng đã có dịp trải nghiệm Google Assistant tiếng Việt và sau đây là một số nhận xét sơ bộ:</p><p><b>Không phải ai cũng được trải nghiệm sớm Google Assistant tiếng Việt</b></p><p>Để có thể kích hoạt trợ lý ảo Google Assistant tiếng Việt, người dùng sẽ vào ứng dụng Google &gt; Thêm &gt; Cài đặt &gt; Trợ lý Google &gt; Trợ lý &gt; Ngôn ngữ và thêm vào "Tiếng Việt". Sau đó, người dùng chỉ cần giữ phím Home để gọi Google Assistant và bắt đầu nói câu lệnh.</p><div class="VCSortableInPreviewMode" style="" type="Photo"><div><a href="https://kenh14cdn.com/2019/5/3/photo-1-1556873443789981486748.jpg" data-fancybox-group="img-lightbox" title="Thiết lập để kích hoạt Google Assistant tiếng Việt" target="_blank"><img style="width:100%rout" src="https://kenh14cdn.com/2019/5/3/photo-1-1556873443789981486748.jpg" id="img_8adef5e0-6d80-11e9-ab6b-21bdf57d4377" w="660" h="357" alt="Trải nghiệm Google Assistant tiếng Việt: Thông minh, được việc, giọng êm nhưng đôi lúc đùa hơi nhạt - Ảnh 1." title="Trải nghiệm Google Assistant tiếng Việt: Thông minh, được việc, giọng êm nhưng đôi lúc đùa hơi nhạt - Ảnh 1." rel="lightbox" photoid="8adef5e0-6d80-11e9-ab6b-21bdf57d4377" type="photo" data-original="https://kenh14cdn.com/2019/5/3/photo-1-1556873443789981486748.jpg" width="" height="" class="lightbox-content"></a></div><div class="PhotoCMS_Caption"><p data-placeholder="[nhập chú thích]">Thiết lập để kích hoạt Google Assistant tiếng Việt</p></div></div><p><span style="">Mặc dù đã có một lượng lớn người dùng có thể sử dụng Google Assistant tiếng Việt, tuy nhiên cũng có không ít người cho biết họ không tìm thấy tùy chọn ngôn ngữ tiếng Việt. Đây là điều hoàn toàn bình thường, do tính đến thời điểm này Google vẫn chưa chính thức tung ra Assistant tiếng Việt trên diện rộng.</span><br></p><p>Sau một thời gian thử nhiều cách khác nhau như đổi ngôn ngữ hệ thống, đổi vùng, khởi động lại, cập nhật ứng dụng... chúng tôi nhận thấy yếu tố quyết định việc có kích hoạt được Assistant hay không là tài khoản Google. Nếu như tài khoản Google của bạn may mắn được Google lựa chọn thì việc kích hoạt Assistant tiếng Việt sẽ hết sức đơn giản, còn nếu không thì cho dù bạn có thử cách nào thì nó cũng sẽ không chịu xuất hiện.</p><p>Trên đây là đối với người dùng Android, còn nếu bạn sử dụng iOS, bạn sẽ cần một tài khoản Apple ID Mỹ thì mới có thể tải về ứng dụng Google Assistant trên App Store. Sau đó, bạn sẽ cần đăng nhập vào tài khoản Google và trông cậy vào độ may mắn để xem tài khoản đó có nằm trong danh sách thử nghiệm của Google hay không, tương tự như trường hợp của Android.</p><p>Một lần nữa, tất cả những vấn đề trên sẽ được khắc phục khi Google chính thức công bố Assistant tại Việt Nam trong vài ngày tới.</p><p><b>Thông minh, được việc</b></p><p>Vậy rốt cục thì Google Assistant làm được gì? Thực tế là khá nhiều việc.</p><p>Google Assistant có thể thực hiện cuộc gọi và gửi tin nhắn rảnh tay. Tính năng này khá hữu ích, đặc biệt là với những tài xế ô tô.</p><div class="VCSortableInPreviewMode" style="" type="Photo"><div><a href="https://kenh14cdn.com/2019/5/3/photo-1-1556873446693294207993.jpg" data-fancybox-group="img-lightbox" title="Sử dụng Google Assistant để gọi điện và nhắn tin" target="_blank" class="detail-img-lightbox"><img style="width:100%;max-width:100%;" src="https://kenh14cdn.com/2019/5/3/photo-1-1556873446693294207993.jpg" id="img_8c62fdd0-6d80-11e9-9caa-5381ada2910c" w="660" h="491" alt="Trải nghiệm Google Assistant tiếng Việt: Thông minh, được việc, giọng êm nhưng đôi lúc đùa hơi nhạt - Ảnh 2." title="Trải nghiệm Google Assistant tiếng Việt: Thông minh, được việc, giọng êm nhưng đôi lúc đùa hơi nhạt - Ảnh 2." rel="lightbox" photoid="8c62fdd0-6d80-11e9-9caa-5381ada2910c" type="photo" data-original="https://kenh14cdn.com/2019/5/3/photo-1-1556873446693294207993.jpg" width="" height="" class="lightbox-content"></a></div><div class="PhotoCMS_Caption"><p data-placeholder="[nhập chú thích]">Sử dụng Google Assistant để gọi điện và nhắn tin</p></div></div><p><span style="">Những công việc cơ bản của các trợ lý ảo hiện nay như nhắc việc, báo thức, hẹn giờ, dự báo thời tiết và chỉ đường cũng được Google Assistant đảm nhiệm.</span><br></p><div class="VCSortableInPreviewMode" style="" type="Photo"><div><a href="https://kenh14cdn.com/2019/5/3/photo-2-1556873446694429523127.jpg" data-fancybox-group="img-lightbox" title="Những công việc cơ bản mà mọi trợ lý ảo phải làm được" target="_blank" class="detail-img-lightbox"><img style="width:100%;max-width:100%;" src="https://kenh14cdn.com/2019/5/3/photo-2-1556873446694429523127.jpg" id="img_8cf86000-6d80-11e9-8b73-033df4394fc3" w="660" h="373" alt="Trải nghiệm Google Assistant tiếng Việt: Thông minh, được việc, giọng êm nhưng đôi lúc đùa hơi nhạt - Ảnh 3." title="Trải nghiệm Google Assistant tiếng Việt: Thông minh, được việc, giọng êm nhưng đôi lúc đùa hơi nhạt - Ảnh 3." rel="lightbox" photoid="8cf86000-6d80-11e9-8b73-033df4394fc3" type="photo" data-original="https://kenh14cdn.com/2019/5/3/photo-2-1556873446694429523127.jpg" width="" height="" class="lightbox-content"></a></div><div class="PhotoCMS_Caption"><p data-placeholder="[nhập chú thích]">Những công việc cơ bản mà mọi trợ lý ảo phải làm được</p></div></div><p><span style="">Đương nhiên, với thế mạnh về tìm kiếm, Google Assistant có thể trả lời những câu hỏi đến từ nhiều lĩnh vực trong đời sống. Kiến thức của Google Assistant được tổng hợp từ nhiều nguồn khác nhau, trong đó có Wikipedia và các kết quả tìm kiếm.</span><br></p><div class="VCSortableInPreviewMode" style="" type="Photo"><div><a href="https://kenh14cdn.com/2019/5/3/photo-3-15568734466961346636576.jpg" data-fancybox-group="img-lightbox" title="Tra cứu thông tin là thế mạnh của Assistant" target="_blank" class="detail-img-lightbox"><img style="width:100%;max-width:100%;" src="https://kenh14cdn.com/2019/5/3/photo-3-15568734466961346636576.jpg" id="img_8c735180-6d80-11e9-b708-771d46e0f7b3" w="660" h="279" alt="Trải nghiệm Google Assistant tiếng Việt: Thông minh, được việc, giọng êm nhưng đôi lúc đùa hơi nhạt - Ảnh 4." title="Trải nghiệm Google Assistant tiếng Việt: Thông minh, được việc, giọng êm nhưng đôi lúc đùa hơi nhạt - Ảnh 4." rel="lightbox" photoid="8c735180-6d80-11e9-b708-771d46e0f7b3" type="photo" data-original="https://kenh14cdn.com/2019/5/3/photo-3-15568734466961346636576.jpg" width="" height="" class="lightbox-content"></a></div><div class="PhotoCMS_Caption"><p data-placeholder="[nhập chú thích]">Tra cứu thông tin là thế mạnh của Assistant</p></div></div><p><span style="">Google Assistant còn có thể điều khiển trạng thái hệ thống như bật/tắt Bluetooth, chế độ im lặng, đèn pin... và khởi chạy ứng dụng được cài đặt trên smartphone.</span><br></p><div id="admzone474524" class="wp100 fl mt-10"><div id="ads_zone474524"><div id="ads_zone474524_slot1"><div id="ads_zone474524_banner553409" class="banner0"><div id="sspbid_3185"></div></div></div><div id="ads_zone474524_slot2" style="display: none;"></div></div></div><div class="VCSortableInPreviewMode" style="" type="Photo"><div><a href="https://kenh14cdn.com/2019/5/3/photo-4-15568734466982032111122.jpg" data-fancybox-group="img-lightbox" title="Google Assistant có thể bật/tắt, điều chỉnh nhanh một số tính năng của smartphone" target="_blank" class="detail-img-lightbox"><img style="width:100%;max-width:100%;" src="https://kenh14cdn.com/2019/5/3/photo-4-15568734466982032111122.jpg" id="img_8c4ed990-6d80-11e9-b708-771d46e0f7b3" w="660" h="358" alt="Trải nghiệm Google Assistant tiếng Việt: Thông minh, được việc, giọng êm nhưng đôi lúc đùa hơi nhạt - Ảnh 5." title="Trải nghiệm Google Assistant tiếng Việt: Thông minh, được việc, giọng êm nhưng đôi lúc đùa hơi nhạt - Ảnh 5." rel="lightbox" photoid="8c4ed990-6d80-11e9-b708-771d46e0f7b3" type="photo" data-original="https://kenh14cdn.com/2019/5/3/photo-4-15568734466982032111122.jpg" width="" height="" class="lightbox-content"></a></div><div class="PhotoCMS_Caption"><p data-placeholder="[nhập chú thích]">Google Assistant có thể bật/tắt, điều chỉnh nhanh một số tính năng của smartphone</p></div></div><p><span style="">Về âm nhạc, bạn có thể ra lệnh cho Google Assistant chơi nhạc trên Spotify (thực tế là Google Assistant hỗ trợ cả Google Play Music, nhưng dịch vụ nhạc này không có mặt ở VN). Không chỉ có vậy, bạn có thể yêu cầu Google Assistant nhận dạng bài hát mà bạn đang nghe ở môi trường xung quanh.</span><br></p><div class="VCSortableInPreviewMode" style="" type="Photo"><div><a href="https://kenh14cdn.com/2019/5/3/photo-5-1556873446701970388673.jpg" data-fancybox-group="img-lightbox" title="Sử dụng Google Assistant để chơi nhạc trên Spotify và nhận diện bài hát" target="_blank" class="detail-img-lightbox"><img style="width:100%;max-width:100%;" src="https://kenh14cdn.com/2019/5/3/photo-5-1556873446701970388673.jpg" id="img_8c6ce8e0-6d80-11e9-8457-8fbdcbd35d2c" w="660" h="499" alt="Trải nghiệm Google Assistant tiếng Việt: Thông minh, được việc, giọng êm nhưng đôi lúc đùa hơi nhạt - Ảnh 6." title="Trải nghiệm Google Assistant tiếng Việt: Thông minh, được việc, giọng êm nhưng đôi lúc đùa hơi nhạt - Ảnh 6." rel="lightbox" photoid="8c6ce8e0-6d80-11e9-8457-8fbdcbd35d2c" type="photo" data-original="https://kenh14cdn.com/2019/5/3/photo-5-1556873446701970388673.jpg" width="" height="" class="lightbox-content"></a></div><div class="PhotoCMS_Caption"><p data-placeholder="[nhập chú thích]">Sử dụng Google Assistant để chơi nhạc trên Spotify và nhận diện bài hát</p></div></div><p><span style="">Người dùng cũng có thể yêu cầu Google Assistant dịch thuật trực tiếp từ giọng nói. So với việc phải khởi chạy ứng dụng Google Translate, sử dụng Google Assistant để dịch một số từ và câu nói đơn giản thuận tiện và nhanh chóng hơn nhiều.</span><br></p><div class="VCSortableInPreviewMode" style="" type="Photo"><div><a href="https://kenh14cdn.com/2019/5/3/photo-6-15568734467031556174419.jpg" data-fancybox-group="img-lightbox" title="Dịch thuật bằng giọng nói" target="_blank" class="detail-img-lightbox"><img style="width:100%;max-width:100%;" src="https://kenh14cdn.com/2019/5/3/photo-6-15568734467031556174419.jpg" id="img_8c6c4ca0-6d80-11e9-b447-a33d39161639" w="660" h="388" alt="Trải nghiệm Google Assistant tiếng Việt: Thông minh, được việc, giọng êm nhưng đôi lúc đùa hơi nhạt - Ảnh 7." title="Trải nghiệm Google Assistant tiếng Việt: Thông minh, được việc, giọng êm nhưng đôi lúc đùa hơi nhạt - Ảnh 7." rel="lightbox" photoid="8c6c4ca0-6d80-11e9-b447-a33d39161639" type="photo" data-original="https://kenh14cdn.com/2019/5/3/photo-6-15568734467031556174419.jpg" width="" height="" class="lightbox-content"></a></div><div class="PhotoCMS_Caption"><p data-placeholder="[nhập chú thích]">Dịch thuật bằng giọng nói</p></div></div><p><span style="">Đối với người dùng các thiết bị Smart Home (đèn, ổ cắm, camera giám sát, loa...), Google Assistant cũng có thể điều khiển các thiết bị này bằng giọng nói. Với việc hỗ trợ của tiếng Việt, việc vận hành Smart Home sẽ trở nên dễ dàng và chính xác hơn nhiều. Để thảo luận về tiềm năng của Google Assistant trong việc vận hành Smart Home, các bạn có thể tham gia group Smart Home Việt trên Facebook.</span><br></p><p><b>Tai tương đối thính, giọng êm</b></p><p>Khả năng nhận dạng ngôn ngữ tiếng Việt của Google Assistant rất tốt. Chúng tôi đã thử nghiệm với nhiều chất giọng khác nhau (nam/nữ, miền Bắc/Trung/Nam, sử dụng tiếng địa phương) và Google Assistant vẫn có thể nhận dạng và hiểu chuẩn xác.</p><p> Cách đây khoảng hơn 1 tháng, Google đã thay đổi giọng đọc tiếng Việt ở hầu hết các sản phẩm chủ chốt của mình (bao gồm Google Translate và chỉ đường trong Google Maps), và nay nó cũng được sử dụng trên Assistant tiếng Việt. Chúng tôi đánh giá chất giọng của Assistant tiếng Việt rất tốt: nó tương đối tự nhiên, không máy móc, có nhấn nhá và trầm bổng. Thứ duy nhất tôi nghĩ Google cần điều chỉnh là cách thức ngắt câu, đặc biệt khi có dấu phẩy hay dấu chấm.</p><p><b>Đôi lúc đùa hơi nhạt</b></p><p>Bên cạnh cải thiện trí thông minh, các hãng công nghệ còn cố gắng phát triển khía cạnh cảm xúc cho trợ lý ảo của mình để nó trở nên giống một trợ lý thật hơn. Để đạt được điều này, một trong những cách phổ biến nhất là thêm những trò đùa và câu nói vui vẻ để tăng tính hài hước và bớt gượng gạo.</p><div class="VCSortableInPreviewMode" style="" type="Photo"><div><a href="https://kenh14cdn.com/2019/5/3/photo-7-1556873446704388100042.jpg" data-fancybox-group="img-lightbox" title="Những câu trả lời hóm hỉnh của Google Assistant" target="_blank" class="detail-img-lightbox"><img style="width:100%;max-width:100%;" src="https://kenh14cdn.com/2019/5/3/photo-7-1556873446704388100042.jpg" id="img_8c76fb00-6d80-11e9-8b73-033df4394fc3" w="660" h="253" alt="Trải nghiệm Google Assistant tiếng Việt: Thông minh, được việc, giọng êm nhưng đôi lúc đùa hơi nhạt - Ảnh 8." title="Trải nghiệm Google Assistant tiếng Việt: Thông minh, được việc, giọng êm nhưng đôi lúc đùa hơi nhạt - Ảnh 8." rel="lightbox" photoid="8c76fb00-6d80-11e9-8b73-033df4394fc3" type="photo" data-original="https://kenh14cdn.com/2019/5/3/photo-7-1556873446704388100042.jpg" width="" height="" class="lightbox-content"></a></div><div class="PhotoCMS_Caption"><p data-placeholder="[nhập chú thích]">Những câu trả lời hóm hỉnh của Google Assistant</p></div></div><p><span style="">So sánh với Google Assistant tiếng Anh, một hạn chế mà người dùng có thể nhận ra của Assistant tiếng Việt là nó không thể... hát. Thay vào đó, nó chỉ có thể đọc được lời bài hát mà thôi.</span><br></p><div class="VCSortableInPreviewMode" style="" type="Photo"><div><a href="https://kenh14cdn.com/2019/5/3/photo-8-15568734467071223238942.jpg" data-fancybox-group="img-lightbox" title="Tiếc rằng, Google Assistant tiếng Việt chưa biết hát như phiên bản tiếng Anh" target="_blank" class="detail-img-lightbox"><img style="width:100%;max-width:100%;" src="https://kenh14cdn.com/2019/5/3/photo-8-15568734467071223238942.jpg" id="img_8cea7d50-6d80-11e9-9109-7ff2eb6418e1" w="660" h="422" alt="Trải nghiệm Google Assistant tiếng Việt: Thông minh, được việc, giọng êm nhưng đôi lúc đùa hơi nhạt - Ảnh 9." title="Trải nghiệm Google Assistant tiếng Việt: Thông minh, được việc, giọng êm nhưng đôi lúc đùa hơi nhạt - Ảnh 9." rel="lightbox" photoid="8cea7d50-6d80-11e9-9109-7ff2eb6418e1" type="photo" data-original="https://kenh14cdn.com/2019/5/3/photo-8-15568734467071223238942.jpg" width="" height="" class="lightbox-content"></a></div><div class="PhotoCMS_Caption"><p data-placeholder="[nhập chú thích]">Tiếc rằng, Google Assistant tiếng Việt chưa biết hát như phiên bản tiếng Anh</p></div></div><p><span style="">Google Assistant cũng có thể kể chuyện cười. Tiếc rằng, đa số những chuyện cười của Google Assistant là những truyện dân gian mà chúng ta đều không còn xa lạ và cảm thấy buồn cười được nữa. Một số chuyện cười hiện đại còn lại của Assistant không biết được Google góp nhặt từ đầu, tuy nhiên nó khá kỳ quặc và có phần nhạt nhẽo.</span><br></p><div class="VCSortableInPreviewMode" style="" type="Photo"><div><a href="https://kenh14cdn.com/2019/5/3/photo-9-1556873446708853127343.jpg" data-fancybox-group="img-lightbox" title="Những truyện cười dân gian của Google Assistant" target="_blank" class="detail-img-lightbox"><img style="width:100%;max-width:100%;" src="https://kenh14cdn.com/2019/5/3/photo-9-1556873446708853127343.jpg" id="img_8cca9940-6d80-11e9-b447-a33d39161639" w="660" h="367" alt="Trải nghiệm Google Assistant tiếng Việt: Thông minh, được việc, giọng êm nhưng đôi lúc đùa hơi nhạt - Ảnh 10." title="Trải nghiệm Google Assistant tiếng Việt: Thông minh, được việc, giọng êm nhưng đôi lúc đùa hơi nhạt - Ảnh 10." rel="lightbox" photoid="8cca9940-6d80-11e9-b447-a33d39161639" type="photo" data-original="https://kenh14cdn.com/2019/5/3/photo-9-1556873446708853127343.jpg" width="" height="" class="lightbox-content"></a></div><div class="PhotoCMS_Caption"><p data-placeholder="[nhập chú thích]">Những truyện cười dân gian của Google Assistant</p></div></div><div class="VCSortableInPreviewMode active" style="" type="Photo"><div><a href="https://kenh14cdn.com/2019/5/3/photo-10-15568734467091127468471.jpg" data-fancybox-group="img-lightbox" title="Google Assistant còn có những " truyện="" cười"="" kỳ="" quặc="" và="" nhạt="" nhẽo"="" target="_blank" class="detail-img-lightbox"><img style="width:100%;max-width:100%;" src="https://kenh14cdn.com/2019/5/3/photo-10-15568734467091127468471.jpg" id="img_8cc78c00-6d80-11e9-9caa-5381ada2910c" w="660" h="893" alt="Trải nghiệm Google Assistant tiếng Việt: Thông minh, được việc, giọng êm nhưng đôi lúc đùa hơi nhạt - Ảnh 11." title="Trải nghiệm Google Assistant tiếng Việt: Thông minh, được việc, giọng êm nhưng đôi lúc đùa hơi nhạt - Ảnh 11." rel="lightbox" photoid="8cc78c00-6d80-11e9-9caa-5381ada2910c" type="photo" data-original="https://kenh14cdn.com/2019/5/3/photo-10-15568734467091127468471.jpg" width="" height="" class="lightbox-content"></a></div><div class="PhotoCMS_Caption"><p data-placeholder="[nhập chú thích]">Google Assistant còn có những "truyện cười" kỳ quặc và nhạt nhẽo</p></div></div><p><b style="font-size: 13pt;">Tổng kết: Cuối cùng, người Việt đã có cơ hội được sử dụng một trợ lý ảo thực thụ</b><br></p><p>Cuộc đua trợ lý ảo giữa các hãng công nghệ lớn như Apple, Google, Amazon hay Microsoft đã diễn ra từ cách đây nhiều năm, tuy nhiên Việt Nam và tiếng Việt vẫn luôn nằm ngoài "vùng phủ sóng" của trào lưu này, dẫn đến việc người Việt phải chịu nhiều thiệt thòi. Với sự có mặt của Google Assistant, cuối cùng, người Việt đã có cơ hội không chỉ trải nghiệm, mà còn sử dụng thực tế một trợ lý ảo thông minh, nhanh nhạy và có ích trong nhiều khía cạnh của cuộc sống.</p><p>Đây mới chỉ là sự khởi đầu, và chúng ta sẽ còn rất nhiều điều để kỳ vọng ở Google Assistant cũng như các trợ lý ảo khác trong thời gian tới.</p>',
  };
  res.render("general-article-detail", {
    data: a_data,
    title: a_data.a_title,
    extra: '<link rel="stylesheet" href="/stylesheets/writer.css">',
  });
});

module.exports = router;
