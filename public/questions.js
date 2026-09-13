const questions = [

  // ==== Đố vui, đố mẹo, chơi chữ - 100 câu mới ====

{ q: "Cái gì có cổ nhưng không có đầu, có bụng nhưng không có chân?", answers: ["Cái chai", "Cái áo", "Cái bàn"], correct: 0, explain: "Chai có cổ chai và thân chai nhưng không có đầu hay chân." },

{ q: "Cái gì có nhiều phím nhưng không mở được ổ khóa?", answers: ["Đàn piano", "Chìa khóa", "Máy tính"], correct: 0, explain: "Đàn piano có rất nhiều phím nhưng không dùng để mở khóa." },

{ q: "Cái gì có nhiều trang nhưng không phải là cây?", answers: ["Quyển sách", "Tờ báo", "Cuốn lịch"], correct: 0, explain: "Sách có nhiều trang giấy, chơi chữ với 'trang'." },

{ q: "Cái gì có chân mà không biết đi, có mặt mà không biết cười?", answers: ["Cái bàn", "Con búp bê", "Cái gương"], correct: 0, explain: "Bàn có chân bàn và mặt bàn nhưng không thể đi hay cười." },

{ q: "Cái gì có kim nhưng không dùng để khâu?", answers: ["Đồng hồ", "Kim tiêm", "Cây thông"], correct: 0, explain: "Đồng hồ có kim giờ, kim phút, kim giây." },

{ q: "Cái gì có hàng nghìn chữ nhưng không biết đọc?", answers: ["Quyển sách", "Máy in", "Tờ báo"], correct: 1, explain: "Máy in có thể tạo ra hàng nghìn chữ nhưng bản thân nó không biết đọc." },

{ q: "Cái gì càng đầy thì càng nhẹ?", answers: ["Bong bóng khí heli", "Cái xô", "Cặp sách"], correct: 0, explain: "Bóng càng chứa nhiều khí heli thì lực nâng càng lớn." },

{ q: "Cái gì có thể chạy vòng quanh sân mà không hề di chuyển?", answers: ["Hàng rào", "Con chó", "Cái bóng"], correct: 0, explain: "Hàng rào chạy vòng quanh sân theo cách nói hình tượng nhưng luôn đứng yên." },

{ q: "Cái gì có đầu, có đuôi nhưng không có thân?", answers: ["Đồng xu", "Con rắn", "Cái kim"], correct: 0, explain: "Đồng xu có mặt đầu và mặt đuôi theo cách gọi trong trò tung đồng xu." },

{ q: "Cái gì có mặt nhưng không có mắt, có tay nhưng không có ngón?", answers: ["Đồng hồ", "Búp bê", "Robot"], correct: 0, explain: "Đồng hồ có mặt đồng hồ và kim đồng hồ được ví như tay." },

{ q: "Cái gì có lưỡi nhưng không biết nếm?", answers: ["Con dao", "Con người", "Con mèo"], correct: 0, explain: "Dao có lưỡi dao nhưng không có vị giác." },

{ q: "Cái gì có mũi nhưng không biết ngửi, có cánh nhưng không biết bay?", answers: ["Máy bay", "Con chim", "Cái thuyền"], correct: 0, explain: "Máy bay có mũi máy bay và cánh máy bay." },

{ q: "Cái gì có cổ áo nhưng không có cái đầu?", answers: ["Cái áo", "Cái chai", "Cái bình"], correct: 0, explain: "Áo có cổ áo nhưng dĩ nhiên không có đầu." },

{ q: "Cái gì có nhiều mắt nhưng không nhìn thấy?", answers: ["Củ khoai tây", "Con nhện", "Quả dứa"], correct: 0, explain: "Khoai tây có những chồi được gọi là mắt khoai." },

{ q: "Cái gì có rễ mà không phải cây?", answers: ["Chiếc răng", "Ngọn núi", "Con sông"], correct: 0, explain: "Răng có chân răng hay rễ răng nằm trong xương hàm." },

{ q: "Cái gì có thể leo lên nhưng không bao giờ leo xuống?", answers: ["Tuổi", "Cầu thang", "Nhiệt độ"], correct: 0, explain: "Tuổi của con người chỉ tăng lên theo thời gian." },

{ q: "Cái gì luôn tăng nhưng không bao giờ giảm theo thời gian?", answers: ["Tuổi đời", "Tiền lương", "Cân nặng"], correct: 0, explain: "Tuổi đời luôn tăng theo thời gian." },

{ q: "Cái gì bạn càng chạy nhanh thì nó càng khó đuổi kịp?", answers: ["Hơi thở", "Cái bóng", "Gió"], correct: 0, explain: "Chạy càng nhanh bạn càng thở gấp và có cảm giác hụt hơi." },

{ q: "Cái gì có thể đi khắp thế giới nhưng luôn nằm ở một góc?", answers: ["Con tem", "Tấm bản đồ", "Chiếc vali"], correct: 0, explain: "Con tem nằm ở góc phong bì nhưng có thể theo thư đi khắp thế giới." },

{ q: "Cái gì có thể bay quanh thế giới mà vẫn nằm trong túi?", answers: ["Hộ chiếu", "Máy bay", "Chim"], correct: 0, explain: "Hộ chiếu theo người đi khắp thế giới nhưng thường nằm trong túi." },

{ q: "Cái gì có thể mở ra nhưng không có cửa?", answers: ["Cuốn sách", "Cái hộp", "Ngôi nhà"], correct: 0, explain: "Sách có thể mở ra để đọc nhưng không có cửa." },

{ q: "Cái gì có thể đóng lại nhưng không cần khóa?", answers: ["Đôi mắt", "Cánh cửa", "Cái két"], correct: 0, explain: "Bạn có thể nhắm hay đóng mắt mà không cần khóa." },

{ q: "Cái gì có thể dài ra khi bị kéo nhưng ngắn lại khi buông?", answers: ["Dây thun", "Sợi dây thép", "Cái thước"], correct: 0, explain: "Dây thun co giãn theo lực kéo." },

{ q: "Cái gì càng thổi càng lớn?", answers: ["Bong bóng", "Ngọn lửa", "Cái còi"], correct: 0, explain: "Bong bóng được bơm hoặc thổi càng nhiều thì càng lớn." },

{ q: "Cái gì càng thổi càng nhỏ?", answers: ["Ngọn nến", "Bong bóng", "Cái còi"], correct: 0, explain: "Thổi vào ngọn nến có thể làm lửa nhỏ dần rồi tắt." },

{ q: "Thứ gì bạn phải đập vỡ trước khi dùng?", answers: ["Quả trứng", "Cái bát", "Hộp sữa"], correct: 0, explain: "Muốn dùng phần bên trong quả trứng thường phải đập vỏ." },

{ q: "Cái gì có thể ăn được nhưng không thể nuốt nguyên cả cái?", answers: ["Cái bánh lớn", "Nước", "Kẹo"], correct: 0, explain: "Một chiếc bánh lớn thường phải cắn hoặc chia nhỏ trước khi ăn." },

{ q: "Cái gì càng gọt càng nhỏ?", answers: ["Bút chì", "Quả dưa", "Cây gỗ"], correct: 0, explain: "Bút chì càng gọt thì càng ngắn và nhỏ đi." },

{ q: "Cái gì càng đào càng sâu?", answers: ["Cái hố", "Cái giếng", "Cả hai"], correct: 2, explain: "Cả hố và giếng đều sâu thêm khi tiếp tục đào." },

{ q: "Cái gì càng kéo càng dài?", answers: ["Sợi dây", "Câu chuyện", "Cả hai"], correct: 2, explain: "Dây có thể được kéo dài, còn câu chuyện cũng có thể bị 'kéo dài'." },

{ q: "Con gì ngủ mà vẫn đứng?", answers: ["Ngựa", "Mèo", "Khỉ"], correct: 0, explain: "Ngựa có thể ngủ đứng nhờ cấu tạo đặc biệt ở chân." },

{ q: "Con gì vừa sinh ra đã biết bơi?", answers: ["Cá", "Gà", "Mèo"], correct: 0, explain: "Cá con có bản năng bơi ngay sau khi nở." },

{ q: "Con gì có nhà riêng trên lưng?", answers: ["Rùa", "Chó", "Thỏ"], correct: 0, explain: "Mai rùa giống như ngôi nhà luôn mang theo trên lưng." },

{ q: "Con gì có tám chân nhưng không phải nhện?", answers: ["Bạch tuộc", "Cua", "Kiến"], correct: 0, explain: "Bạch tuộc có tám xúc tu thường được ví như tám chân." },

{ q: "Con gì có ba tim?", answers: ["Bạch tuộc", "Cá mập", "Cá voi"], correct: 0, explain: "Bạch tuộc có ba trái tim." },

{ q: "Con gì có thể đổi màu để ngụy trang?", answers: ["Tắc kè hoa", "Cá heo", "Chim sẻ"], correct: 0, explain: "Tắc kè hoa nổi tiếng với khả năng thay đổi màu sắc." },

{ q: "Con gì có thể bay lùi?", answers: ["Chim ruồi", "Đại bàng", "Chim sẻ"], correct: 0, explain: "Chim ruồi có cấu tạo cánh cho phép bay lùi." },

{ q: "Con gì mang con trong túi trước bụng?", answers: ["Kangaroo", "Gấu", "Ngựa"], correct: 0, explain: "Kangaroo cái nuôi con non trong túi trước bụng." },

{ q: "Con gì có chiếc cổ dài nhất trong các động vật trên cạn?", answers: ["Hươu cao cổ", "Đà điểu", "Lạc đà"], correct: 0, explain: "Hươu cao cổ nổi tiếng với chiếc cổ rất dài." },

{ q: "Loài vật nào có vân tay gần giống con người?", answers: ["Gấu koala", "Chó", "Ngựa"], correct: 0, explain: "Vân tay của koala có hoa văn rất giống vân tay người." },

{ q: "Con gì đực lại mang thai?", answers: ["Cá ngựa", "Cá mập", "Cá heo"], correct: 0, explain: "Cá ngựa đực mang trứng trong túi ấp và sinh con." },

{ q: "Con gì có máu màu xanh?", answers: ["Bạch tuộc", "Cá voi", "Cá chép"], correct: 0, explain: "Máu bạch tuộc có màu xanh do chứa hemocyanin giàu đồng." },

{ q: "Loài chim nào không bay nhưng bơi rất giỏi?", answers: ["Chim cánh cụt", "Đà điểu", "Gà"], correct: 0, explain: "Chim cánh cụt dùng cánh như mái chèo để bơi dưới nước." },

{ q: "Loài chim nào chạy nhanh nhất trên mặt đất?", answers: ["Đà điểu", "Gà rừng", "Chim công"], correct: 0, explain: "Đà điểu có thể chạy với tốc độ rất cao." },

{ q: "Cái gì càng đứng lâu càng mỏi nhưng không có chân?", answers: ["Cái cột", "Người", "Cái cây"], correct: 0, explain: "Đây là đố vui nhân hóa: cái cột phải 'đứng' suốt ngày." },

{ q: "Cái gì cứ quay mãi nhưng không bao giờ chóng mặt?", answers: ["Cánh quạt", "Con quay", "Cả hai"], correct: 2, explain: "Cả cánh quạt và con quay đều có thể quay liên tục mà không chóng mặt." },

{ q: "Cái gì càng chạy nhanh càng nóng?", answers: ["Động cơ", "Nước đá", "Tủ lạnh"], correct: 0, explain: "Động cơ hoạt động mạnh thường sinh nhiều nhiệt hơn." },

{ q: "Cái gì càng lạnh càng cứng?", answers: ["Nước đá", "Gỗ", "Giấy"], correct: 0, explain: "Nước khi đông lạnh chuyển thành băng rắn." },

{ q: "Cái gì có thể tan mà không cần lửa?", answers: ["Băng", "Sắt", "Đá granite"], correct: 0, explain: "Băng có thể tan ở nhiệt độ thường mà không cần lửa." },

{ q: "Cái gì có thể biến mất chỉ bằng một câu nói?", answers: ["Sự im lặng", "Ánh sáng", "Cái bóng"], correct: 0, explain: "Chỉ cần ai đó lên tiếng thì sự im lặng lập tức biến mất." },

{ q: "Cái gì càng cho đi càng dễ nhận lại?", answers: ["Nụ cười", "Tiền", "Quần áo"], correct: 0, explain: "Bạn mỉm cười với người khác thường sẽ nhận lại một nụ cười." },

{ q: "Cái gì càng học càng thấy mình biết ít?", answers: ["Kiến thức", "Thể thao", "Nấu ăn"], correct: 0, explain: "Càng học nhiều, ta càng nhận ra thế giới kiến thức còn rất rộng." },

{ q: "Cái gì nếu bạn nói tên nó ra thì nó biến mất?", answers: ["Sự im lặng", "Bóng tối", "Bí mật"], correct: 0, explain: "Nói ra bất cứ điều gì thì không còn im lặng nữa." },

{ q: "Cái gì càng cố quên lại càng dễ nhớ?", answers: ["Một kỷ niệm", "Một con số", "Một món ăn"], correct: 0, explain: "Càng cố ép mình quên một ký ức, nhiều khi ta lại càng nghĩ đến nó." },

{ q: "Cái gì có thể cho người khác mà bạn vẫn giữ được?", answers: ["Lời khuyên", "Tiền", "Chiếc áo"], correct: 0, explain: "Cho lời khuyên không làm bạn mất đi kiến thức hay kinh nghiệm của mình." },

{ q: "Cái gì càng nhiều người dùng thì càng có giá trị?", answers: ["Ngôn ngữ", "Một chiếc bánh", "Một cái ghế"], correct: 0, explain: "Ngôn ngữ càng nhiều người sử dụng thì khả năng giao tiếp càng lớn." },

{ q: "Cái gì bạn không nhìn thấy nhưng có thể cảm nhận khi nó thổi?", answers: ["Gió", "Ánh sáng", "Bóng tối"], correct: 0, explain: "Gió không nhìn thấy trực tiếp nhưng có thể cảm nhận được." },

{ q: "Cái gì không có màu nhưng có thể làm mọi thứ ướt?", answers: ["Nước", "Gió", "Không khí"], correct: 0, explain: "Nước tinh khiết không màu và làm vật khác bị ướt." },

{ q: "Cái gì ở trong phòng nhưng có thể nhìn thấy cả thế giới?", answers: ["Tivi", "Cái bàn", "Đèn ngủ"], correct: 0, explain: "Tivi có thể hiển thị hình ảnh và thông tin từ khắp thế giới." },

{ q: "Cái gì nhỏ hơn căn phòng nhưng có thể chứa hàng nghìn căn phòng?", answers: ["Ổ cứng", "Cái hộp", "Tủ quần áo"], correct: 0, explain: "Ổ cứng có thể lưu hàng nghìn hình ảnh hoặc bản thiết kế căn phòng." },

{ q: "Cái gì có thể nghe tiếng bạn nhưng không có tai?", answers: ["Micro", "Cái ghế", "Đèn"], correct: 0, explain: "Micro thu nhận âm thanh dù không có tai." },

{ q: "Cái gì có thể nói lại lời bạn nhưng không có miệng?", answers: ["Máy ghi âm", "Cái gương", "Cây bút"], correct: 0, explain: "Máy ghi âm phát lại chính lời nói đã thu." },

{ q: "Cái gì có thể nhớ hàng triệu thứ nhưng không có bộ não?", answers: ["Máy tính", "Cái bàn", "Tờ giấy"], correct: 0, explain: "Máy tính lưu được lượng dữ liệu rất lớn trong bộ nhớ." },

{ q: "Cái gì có thể nhìn bạn nhưng không có mắt?", answers: ["Camera", "Cái ghế", "Đồng hồ"], correct: 0, explain: "Camera ghi hình bạn mà không có mắt thật." },

{ q: "Cái gì có thể gọi cho bạn nhưng không có miệng?", answers: ["Điện thoại", "Cái loa", "Cái chuông"], correct: 0, explain: "Điện thoại có thể phát cuộc gọi đến mà không có miệng." },

{ q: "Thứ gì có thể thức bạn dậy nhưng bản thân không bao giờ ngủ?", answers: ["Đồng hồ báo thức", "Con mèo", "Người hàng xóm"], correct: 0, explain: "Đồng hồ báo thức luôn sẵn sàng reo đúng giờ." },

{ q: "Cái gì càng bấm nhiều càng mòn?", answers: ["Nút bàn phím", "Cái bàn", "Tờ giấy"], correct: 0, explain: "Các phím thường xuyên được bấm có thể mòn theo thời gian." },

{ q: "Cái gì có cửa sổ nhưng không có ngôi nhà?", answers: ["Máy tính Windows", "Ô tô", "Cả hai"], correct: 2, explain: "Máy tính có Windows, còn ô tô có cửa sổ; đều không phải ngôi nhà." },

{ q: "Cái gì có chuột mà không cần nuôi?", answers: ["Máy tính", "Nhà kho", "Cánh đồng"], correct: 0, explain: "Chuột máy tính là thiết bị điều khiển, không phải con vật." },

{ q: "Mạng gì không bắt được cá?", answers: ["Mạng Internet", "Mạng lưới đánh cá", "Lưới rê"], correct: 0, explain: "Mạng Internet là hệ thống kết nối thông tin, không dùng để bắt cá." },

{ q: "Bàn gì có rất nhiều chữ nhưng không dùng để ăn?", answers: ["Bàn phím", "Bàn ăn", "Bàn trà"], correct: 0, explain: "Bàn phím có rất nhiều chữ cái và ký hiệu." },

{ q: "Ổ gì không dùng để chim làm tổ?", answers: ["Ổ cứng", "Ổ rơm", "Ổ chim"], correct: 0, explain: "Ổ cứng là thiết bị lưu trữ dữ liệu." },

{ q: "Web gì không phải mạng nhện?", answers: ["Website", "Mạng nhện", "Tổ nhện"], correct: 0, explain: "Web trong công nghệ là hệ thống các trang trên Internet." },

{ q: "Cloud gì không tạo ra mưa?", answers: ["Cloud computing", "Đám mây", "Mây đen"], correct: 0, explain: "Cloud computing là điện toán đám mây, không phải mây thật." },

{ q: "Pin gì không dùng để cài áo?", answers: ["Pin điện thoại", "Kim băng", "Pin cài áo"], correct: 0, explain: "Pin điện thoại là nguồn năng lượng, không phải vật để ghim." },

{ q: "Ram gì không phải con dê?", answers: ["RAM máy tính", "Ram thịt", "Cừu đực"], correct: 0, explain: "RAM là bộ nhớ truy cập ngẫu nhiên của máy tính." },

{ q: "Chip gì không ăn được?", answers: ["Chip máy tính", "Khoai tây chiên", "Snack"], correct: 0, explain: "Chip máy tính là linh kiện điện tử." },

{ q: "File gì không phải cái giũa?", answers: ["File máy tính", "Giũa sắt", "Dũa móng"], correct: 0, explain: "File trong máy tính là tập tin dữ liệu." },

{ q: "Virus gì không làm bạn sốt?", answers: ["Virus máy tính", "Virus cúm", "Virus sốt xuất huyết"], correct: 0, explain: "Virus máy tính gây hại cho hệ thống chứ không gây sốt cho người." },

{ q: "Chuỗi gì không đeo trên cổ?", answers: ["Chuỗi ký tự", "Dây chuyền", "Chuỗi hạt"], correct: 0, explain: "Chuỗi ký tự là dãy chữ hoặc ký hiệu trong tin học." },

{ q: "Ô gì không che được nắng?", answers: ["Ô tính trong Excel", "Ô dù", "Ô che"], correct: 0, explain: "Ô trong bảng tính là một cell dữ liệu." },

{ q: "Sheet gì không phải tấm ga giường?", answers: ["Spreadsheet", "Ga giường", "Tấm vải"], correct: 0, explain: "Sheet trong bảng tính là một trang dữ liệu." },

{ q: "Mouse gì không ăn phô mai?", answers: ["Chuột máy tính", "Chuột đồng", "Chuột nhà"], correct: 0, explain: "Mouse máy tính là thiết bị ngoại vi." },

{ q: "Tab gì không phải viên thuốc?", answers: ["Tab trình duyệt", "Viên thuốc", "Kẹo ngậm"], correct: 0, explain: "Tab trình duyệt là một thẻ mở trang web." },

{ q: "Link gì không phải dây xích?", answers: ["Đường liên kết", "Mắt xích", "Sợi xích"], correct: 0, explain: "Link trong Internet là đường liên kết đến một tài nguyên khác." },

{ q: "Post gì không phải bưu điện?", answers: ["Bài đăng", "Bưu kiện", "Bưu điện"], correct: 0, explain: "Post trên mạng xã hội là một bài đăng." },

{ q: "Story gì không nhất thiết là truyện?", answers: ["Tin trên mạng xã hội", "Truyện ngắn", "Tiểu thuyết"], correct: 0, explain: "Story trên mạng xã hội là nội dung tạm thời, không nhất thiết là một câu chuyện." },

{ q: "Reel gì không phải cuộn dây?", answers: ["Video ngắn", "Cuộn phim", "Cuộn dây"], correct: 0, explain: "Reel trên mạng xã hội là dạng video ngắn." },

{ q: "Live gì không phải đang sống?", answers: ["Livestream", "Sinh vật sống", "Cuộc sống"], correct: 0, explain: "Live trong livestream nghĩa là phát trực tiếp." },

{ q: "Comment gì không phải lời bình trong sách?", answers: ["Bình luận mạng xã hội", "Chú thích", "Lời tựa"], correct: 0, explain: "Comment là bình luận mà người dùng để lại trên nội dung số." },

{ q: "Follow gì không nhất thiết phải đi phía sau?", answers: ["Theo dõi tài khoản", "Đi theo người khác", "Bám đuôi"], correct: 0, explain: "Follow trên mạng xã hội nghĩa là theo dõi một tài khoản." },

{ q: "Like gì không phải thích bằng miệng?", answers: ["Nút thích", "Lời khen", "Nụ cười"], correct: 0, explain: "Like là hành động bấm nút thể hiện sự yêu thích." },

{ q: "Share gì cho đi mà vẫn còn nguyên?", answers: ["Chia sẻ bài viết", "Chia đôi cái bánh", "Cho tiền"], correct: 0, explain: "Chia sẻ nội dung số không làm mất bản gốc." },

{ q: "Save gì không phải cứu người?", answers: ["Lưu tệp", "Cứu hộ", "Cứu nạn"], correct: 0, explain: "Save trong máy tính nghĩa là lưu dữ liệu." },

{ q: "Download gì đi xuống mà không cần cầu thang?", answers: ["Tải xuống", "Rơi tự do", "Đi thang máy"], correct: 0, explain: "Download nghĩa đen là 'tải xuống' nhưng không phải chuyển động vật lý." },

{ q: "Upload gì đi lên mà không cần leo?", answers: ["Tải lên", "Leo núi", "Đi cầu thang"], correct: 0, explain: "Upload nghĩa là đưa dữ liệu lên hệ thống hoặc Internet." },

{ q: "Folder gì chứa nhiều thứ nhưng không phải cái tủ?", answers: ["Thư mục máy tính", "Cặp hồ sơ", "Tủ sách"], correct: 0, explain: "Folder máy tính chứa nhiều tệp và thư mục con." },

{ q: "Trash gì chứa rác mà không bốc mùi?", answers: ["Thùng rác máy tính", "Thùng rác nhà bếp", "Xe rác"], correct: 0, explain: "Thùng rác máy tính chỉ chứa các tệp đã xóa." },

{ q: "Home gì không phải nhà để ở?", answers: ["Trang chủ", "Ngôi nhà", "Căn hộ"], correct: 0, explain: "Home trên website thường là trang chủ." },

{ q: "Page gì không nhất thiết là trang giấy?", answers: ["Trang web", "Trang sách", "Tờ giấy"], correct: 0, explain: "Page có thể là một trang trên website hoặc mạng xã hội." },

{ q: "Cookie gì không ăn được?", answers: ["Cookie trình duyệt", "Bánh quy", "Bánh ngọt"], correct: 0, explain: "Cookie trình duyệt là dữ liệu nhỏ được website lưu trên thiết bị." },
  { q: "Cái gì luôn tăng lên mà không bao giờ giảm xuống?", answers: ["Tuổi tác", "Cân nặng", "Tiền bạc"], correct: 0, explain: "Tuổi tác theo thời gian chỉ có tăng chứ không thể giảm." },
  { q: "Cái gì chặt không đứt, bứt không rời, phơi không khô, đốt không cháy?", answers: ["Nước", "Tình yêu", "Sợi chỉ"], correct: 0, explain: "Nước là chất lỏng, không thể chặt đứt hay bứt rời." },
  { q: "Càng cạo thì nó lại càng to ra là cái gì?", answers: ["Cái râu", "Cái hố đất", "Cái đầu"], correct: 1, explain: "Hố đất càng cạo, bới thì miệng hố càng mở rộng." },
  { q: "Cái gì có răng nhưng không bao giờ cắn ai?", answers: ["Cái cưa", "Cái kéo", "Cái lược"], correct: 2, explain: "Răng lược dùng để chải tóc, hoàn toàn vô hại." },
  { q: "Con gì sáng đi 4 chân, trưa đi 2 chân, chiều đi 3 chân?", answers: ["Con người", "Con vượn", "Con chó"], correct: 0, explain: "Câu đố Nhân sư: con người nhỏ bò 4 chân, lớn đi 2 chân, già chống gậy 3 chân." },
  { q: "Cái gì có chìa mà không có ổ khóa?", answers: ["Đàn piano", "Cái hòm", "Xe máy"], correct: 0, explain: "Phím đàn piano tiếng Anh gọi là 'keys' (chìa khóa)." },
  { q: "Cái gì lúc lên lúc xuống nhưng không bao giờ di chuyển?", answers: ["Cầu thang", "Thang máy", "Chiếc xe"], correct: 0, explain: "Cầu thang nằm cố định một chỗ nhưng dẫn người đi lên và xuống." },
  { q: "Bàn nào không có chân mà vẫn ăn được cơm?", answers: ["Bàn tay", "Bàn thắng", "Bàn cờ"], correct: 0, explain: "Bàn tay dùng để cầm đũa thìa gắp cơm ăn." },
  { q: "Cái gì chứa nhiều từ ngữ nhất trên thế giới?", answers: ["Từ điển", "Bách khoa toàn thư", "Trang web"], correct: 0, explain: "Quyển từ điển gom góp hầu hết mọi từ vựng của một ngôn ngữ." },
  { q: "Cái gì có cổ mà không có đầu?", answers: ["Cái chai", "Cái bàn", "Cái quạt"], correct: 0, explain: "Cái chai có phần cổ chai nhô lên nhưng không có đầu." },

  { q: "Bánh gì ăn vào mà không no bụng chút nào?", answers: ["Bánh vẽ", "Bánh bao", "Bánh rán"], correct: 0, explain: "Bánh vẽ chỉ là lời hứa suông hoặc hình ảnh tượng trưng." },
  { q: "Cái gì có thể cắt được mà không cần dao kéo?", answers: ["Cơn mưa", "Lời nói", "Thời gian"], correct: 1, explain: "Cắt lời người khác khi họ đang phát biểu." },
  { q: "Xe nào không bao giờ chở được người?", answers: ["Xe rùa", "Xe chỉ", "Xe lu"], correct: 1, explain: "Xe chỉ là một hành động se sợi chỉ trong may vá." },
  { q: "Hoa gì biết chạy nhảy, leo trèo?", answers: ["Hoa khôi", "Hoa văn", "Hoa quả"], correct: 0, explain: "Hoa khôi là danh hiệu dành cho người đẹp đạt giải." },
  { q: "Con gì đực cũng như cái, tên gọi nghe như giống cái?", answers: ["Con bò cái", "Con cua cái", "Con sáo cái"], correct: 0, explain: "Con bò cái thì luôn mang từ 'cái' trong tên phân loại." },
  { q: "Đường nào không có xe cộ lưu thông bao giờ?", answers: ["Đường chỉ tay", "Đường đất", "Đường hầm"], correct: 0, explain: "Đường chỉ tay nằm trong lòng bàn tay mỗi người." },
  { q: "Cây gì không trồng từ đất mà mọc ra từ người?", answers: ["Cây bàng", "Cây nấm", "Cây số"], correct: 2, explain: "Cây số (km) là đơn vị đo đạc do con người quy định." },
  { q: "Cái gì càng thổi thì nó lại càng to?", answers: ["Quả bóng bay", "Ngọn nến", "Nồi cơm"], correct: 0, explain: "Bóng bay nhận thêm hơi thổi vào thì sẽ phồng to lên." },
  { q: "Chuột nào biết bay như chim trên trời?", answers: ["Chuột đồng", "Chuột dơi", "Chuột chù"], correct: 1, explain: "Dơi thường được dân gian ví von là loài 'chuột có cánh'." },
  { q: "Trái gì nhiều mắt nhất?", answers: ["Trái ổi", "Trái dứa", "Trái bơ"], correct: 1, explain: "Quả dứa (thơm) có chi chít các hốc mắt bên ngoài vỏ." },

  { q: "Bút gì có thể tẩy xóa chữ trên bảng?", answers: ["Bút chì", "Bút lông bảng", "Bút bi"], correct: 1, explain: "Bút lông bảng viết mực lau được trên bề mặt kính/bảng trắng." },
  { q: "Quạt gì không tạo ra gió mát?", answers: ["Quạt trần", "Quạt giấy", "Quạt mo"], correct: 1, explain: "Quạt giấy gấp lại để trang trí hoặc chưa xòe ra thì không có gió." },
  { q: "Vườn gì rộng nhất trên thế giới?", answers: ["Vườn thú", "Vườn quốc gia", "Vườn địa đàng"], correct: 2, explain: "Vườn địa đàng là khái niệm huyền thoại vô biên trong truyền thuyết." },
  { q: "Đồng nào không thể tiêu được bằng tiền?", answers: ["Đồng hồ", "Đồng xu", "Đồng bạc"], correct: 0, explain: "Đồng hồ là vật dụng đo thời gian chứ không phải tiền tệ." },
  { q: "Nhà nào không có mái che và tường vôi?", answers: ["Nhà lá", "Nhà xe", "Nhà nước"], correct: 2, explain: "Nhà nước là một thể chế chính trị, bộ máy quản lý xã hội." },
  { q: "Mặt gì sáng nhất nhưng không ai dám nhìn thẳng lâu?", answers: ["Mặt trời", "Mặt trăng", "Mặt nước"], correct: 0, explain: "Ánh sáng mặt trời quá chói chang có thể làm hại mắt." },
  { q: "Cái gì ban đêm sinh ra, ban ngày biến mất?", answers: ["Mặt trời", "Sao trên trời", "Cầu vồng"], correct: 1, explain: "Các ngôi sao phát sáng ban đêm và chìm vào ánh sáng ban ngày." },
  { q: "Cái gì bay lên khi trời đổ mưa?", answers: ["Cái dù (ô)", "Con chim", "Chiếc lá"], correct: 0, explain: "Khi trời mưa thì người ta bung dù bật lên trên đầu." },
  { q: "Cái gì càng lau chùi thì càng sáng bóng?", answers: ["Tấm gương", "Cái giẻ lau", "Bức tường"], correct: 0, explain: "Mặt gương lau sạch bụi bẩn thì phản chiếu càng sáng rõ." },
  { q: "Cái gì có thể đi vòng quanh thế giới mà vẫn ở yên một góc?", answers: ["Con tem", "Bưu tá", "Chiếc máy bay"], correct: 0, explain: "Con tem dán cố định ở góc phong bì bay đi khắp địa cầu." },

  { q: "Cái gì có chân nhưng không biết đi, có mặt nhưng không biết cười?", answers: ["Cái đồng hồ", "Cái bàn", "Cái ghế"], correct: 0, explain: "Đồng hồ có mặt số và chân đế đứng nhưng không chuyển động cơ thể." },
  { q: "Con gì chỉ ăn giấy và mực suốt ngày?", answers: ["Máy in", "Con gián", "Con chuột"], correct: 0, explain: "Máy in cần nạp giấy và mực in để hoạt động." },
  { q: "Cái gì chặt đầu vẫn sống, bứt đuôi vẫn bơi?", answers: ["Con thằn lằn", "Con giun", "Con cá"], correct: 1, explain: "Loài giun đất có khả năng tái sinh mạnh mẽ các đốt cơ thể." },
  { q: "Cái gì biết nhại lại mọi âm thanh bạn nói ra?", answers: ["Tiếng vọng (echo)", "Gió thổi", "Dòng suối"], correct: 0, explain: "Tiếng vọng trong hang hoặc vách núi dội lại lời nói của bạn." },
  { q: "Cái gì không có mùi vị nhưng không ai sống thiếu nó?", answers: ["Nước lọc", "Cơm trắng", "Muối"], correct: 0, explain: "Nước nguyên chất không màu, không mùi, không vị nhưng duy trì sự sống." },
  { q: "Cái gì luôn có hai mặt: một mặt đen và một mặt trắng?", answers: ["Bàn cờ vây", "Trang sách", "Đồng tiền"], correct: 0, explain: "Cờ vây sử dụng các quân cờ màu đen và trắng đối nghịch." },
  { q: "Cái gì chỉ nở vào ban đêm mà không nở ban ngày?", answers: ["Hoa quỳnh", "Hoa hồng", "Hoa mai"], correct: 0, explain: "Hoa quỳnh đặc tính nở hoa thơm ngát vào lúc đêm muộn." },
  { q: "Cái gì càng đập mạnh thì càng nảy cao?", answers: ["Quả bóng rổ", "Hòn đá", "Quả dưa"], correct: 0, explain: "Độ đàn hồi của quả bóng rổ giúp nó bật nảy theo lực tác động." },
  { q: "Bữa nào trong ngày không bao giờ ăn được vào buổi sáng?", answers: ["Bữa trưa và tối", "Bữa phụ", "Bữa lỡ"], correct: 0, explain: "Bữa trưa và bữa tối theo thời gian diễn ra vào buổi trưa và chiều tối." },
  { q: "Cái gì bạn có thể cầm bằng tay trái nhưng không bao giờ cầm bằng tay phải?", answers: ["Khuỷu tay phải", "Cổ tay trái", "Ngón tay cái trái"], correct: 0, explain: "Tay phải không thể tự với tới để cầm chặt khuỷu tay của chính nó." },

  { q: "Con đường nào dài nhất mà không ai đo được?", answers: ["Đường đời", "Đường cao tốc", "Đường xích đạo"], correct: 0, explain: "Đường đời là hành trình sống của mỗi con người, vô định và dài lâu." },
  { q: "Thứ gì luôn chạy nhưng không bao giờ mỏi chân?", answers: ["Dòng thời gian", "Vận động viên", "Con suối"], correct: 0, explain: "Thời gian trôi liên tục không bao giờ ngừng nghỉ." },
  { q: "Cái gì nằm sâu dưới lòng đất mà ai cũng muốn đào bới?", answers: ["Kho báu", "Củ khoai", "Rễ cây"], correct: 0, explain: "Kho báu, vàng bạc châu báu chôn giấu luôn thu hút con người." },
  { q: "Cái gì càng nhiều người biết thì càng nhanh hỏng?", answers: ["Bí mật", "Cái máy móc", "Căn nhà"], correct: 0, explain: "Bí mật bị lộ cho nhiều người thì không còn là bí mật nữa." },
  { q: "Trái gì ăn vào cay xè mà ai cũng thích nếm?", answers: ["Trái ớt", "Trái chanh", "Trái cóc"], correct: 0, explain: "Quả ớt có vị cay nồng đặc trưng dùng làm gia vị khoái khẩu." },
  { q: "Cái gì có thể rơi xuống nước mà không phát ra tiếng động?", answers: ["Ánh trăng", "Viên đá", "Chiếc lá"], correct: 0, explain: "Bóng trăng soi bóng rọi xuống mặt nước tĩnh lặng không tiếng vang." },
  { q: "Con gì lúc nào cũng mang theo túi xách phía trước bụng?", answers: ["Chuột túi (Kangaroo)", "Gấu trúc", "Hươu cao cổ"], correct: 0, explain: "Kangaroo có chiếc túi trước bụng để mang và bảo vệ con non." },
  { q: "Cái gì mở ra thì đón sáng, đóng lại thì tối om?", answers: ["Cửa sổ", "Cái hộp", "Quyển sách"], correct: 0, explain: "Cánh cửa sổ mở ra đưa ánh sáng tự nhiên tràn vào căn phòng." },
  { q: "Bức tường nào dài nhất hành tinh?", answers: ["Vạn Lý Trường Thành", "Bức tường Berlin", "Bức tường thành nhà Hồ"], correct: 0, explain: "Vạn Lý Trường Thành ở Trung Quốc dài hàng nghìn km." },
  { q: "Cái gì bạn có thể mượn của người khác nhưng phải trả bằng hành động?", answers: ["Lời hứa", "Sự giúp đỡ", "Nụ cười"], correct: 1, explain: "Khi nhận ơn nghĩa giúp đỡ, ta thường đền đáp bằng hành động tương xứng." },

  { q: "Tháng nào trong năm mọi người ngủ ít nhất?", answers: ["Tháng 2", "Tháng 1", "Tháng 12"], correct: 0, explain: "Tháng 2 chỉ có 28 hoặc 29 ngày, ít ngày nhất nên tổng giờ ngủ ít nhất." },
  { q: "Cái gì thuộc về bạn nhưng bạn bè dùng để gọi bạn?", answers: ["Tên gọi", "Quần áo", "Điện thoại"], correct: 0, explain: "Tên riêng của bạn do người khác xướng lên để xưng hô." },
  { q: "Cái gì bạn có thể tạo ra nhưng mắt thường không thể thấy?", answers: ["Suy nghĩ", "Bức tranh", "Bàn ghế"], correct: 0, explain: "Suy nghĩ và ý tưởng nảy sinh trong não bộ vô hình với mắt thường." },
  { q: "Cái gì không cánh mà bay, không chân mà chạy, không tay mà bò?", answers: ["Mây", "Thời gian", "Con rắn"], correct: 0, explain: "Đám mây lững lờ trôi trên bầu trời theo làn gió cuốn." },
  { q: "Con gì càng già càng trẻ?", answers: ["Con tôm", "Con cua", "Con người"], correct: 0, explain: "Con tôm khi lột xác thì lớp vỏ mới mềm và non hơn." },
  { q: "Cái gì mất rồi bạn mới biết mình từng có nó?", answers: ["Cơ hội", "Tiền bạc", "Đồ chơi"], correct: 0, explain: "Cơ hội vụt qua thường để lại nuối tiếc cho người bỏ lỡ." },
  { q: "Vua ở trong cung gọi là gì?", answers: ["Hoàng thượng", "Vua chúa", "Ở nhà"], correct: 2, explain: "Đố mẹo: Vua ở trong cung điện thì thực chất là đang ở nhà của mình." },
  { q: "Cái gì càng thổi càng tắt?", answers: ["Ngọn đèn dầu", "Quả bóng", "Ống sáo"], correct: 0, explain: "Ngọn lửa đèn dầu bị luồng gió thổi mạnh sẽ bị dập tắt." },
  { q: "Hạt gì không bao giờ mọc thành cây?", answers: ["Hạt cát", "Hạt dưa", "Hạt thóc"], correct: 0, explain: "Hạt cát là khoáng chất vô cơ nghiền vụn, không có phôi sinh học." },
  { q: "Cái gì nối hai bờ sông nhưng không chạm xuống nước?", answers: ["Cây cầu", "Cầu vồng", "Con đò"], correct: 1, explain: "Cầu vồng bắc ngang chân trời sau cơn mưa, không chạm mặt nước." },

  { q: "Con sông nào chảy qua nhiều quốc gia nhất ở Đông Nam Á?", answers: ["Sông Mê Kông", "Sông Hồng", "Sông Đồng Nai"], correct: 0, explain: "Sông Mê Kông chảy qua 6 nước: Trung Quốc, Myanmar, Lào, Thái Lan, Campuchia, VN." },
  { q: "Cái gì bạn có thể phá vỡ mà không cần chạm vào nó?", answers: ["Sự im lặng", "Cái ly", "Cửa kính"], correct: 0, explain: "Chỉ cần cất tiếng nói là bạn đã phá vỡ bầu không khí im lặng." },
  { q: "Cái gì không có chân mà leo lên đỉnh núi?", answers: ["Sương mù", "Người leo núi", "Con dê núi"], correct: 0, explain: "Màn sương mù bốc lên bao phủ đỉnh núi cao." },
  { q: "Cái gì luôn đến vào ban đêm và tan biến vào ban ngày?", answers: ["Giấc mơ", "Bóng tối", "Cả hai đáp án"], correct: 2, explain: "Cả giấc mộng và màn đêm đều phai nhạt khi ánh bình minh ló rạng." },
  { q: "Cái gì bạn cho đi mà vẫn giữ lại được?", answers: ["Lời khuyên", "Tiền bạc", "Cuốn sách"], correct: 0, explain: "Khi đưa lời khuyên cho ai đó, tri thức và lời nói đó vẫn nằm trong tâm trí bạn." },
  { q: "Loài hoa nào tượng trưng cho sự thuần khiết vươn lên từ bùn lầy?", answers: ["Hoa sen", "Hoa súng", "Hoa cúc"], correct: 0, explain: "Hoa sen gần bùn mà chẳng hôi tanh mùi bùn." },
  { q: "Cái gì càng bóc vỏ thì càng cay xè mắt?", answers: ["Củ hành tây", "Quả cam", "Quả chuối"], correct: 0, explain: "Chất khí lưu huỳnh thoát ra khi thái hành tây kích ứng tuyến lệ." },
  { q: "Con gì kêu meo meo nhưng không bắt chuột?", answers: ["Mèo máy Doraemon", "Mèo mướp", "Mèo rừng"], correct: 0, explain: "Doraemon là chú mèo máy hoạt hình sợ chuột." },
  { q: "Cái gì nằm im một chỗ mà biết chỉ đường đi?", answers: ["Biển chỉ dẫn", "Tài xế", "Cảnh sát"], correct: 0, explain: "Biển báo giao thông cắm ven đường để hướng dẫn lộ trình." },
  { q: "Thứ gì cắt đôi ra lại dài hơn lúc ban đầu?", answers: ["Cái que", "Sợi dây thừng", "Chiếc đũa"], correct: 1, explain: "Chơi chữ: Sợi dây cắt đôi ra thì thành hai đoạn dây nối lại dài ra." },

  { q: "Bệnh gì người mắc phải luôn muốn tìm chỗ ngủ?", answers: ["Bệnh lười", "Bệnh cảm", "Bệnh đau đầu"], correct: 0, explain: "Người lười biếng thường thích nằm dài ngủ nướng." },
  { q: "Cái gì của bạn người ta hay hỏi nhất khi mới gặp?", answers: ["Tên tuổi", "Số tài khoản", "Mật khẩu"], correct: 0, explain: "Chào hỏi làm quen thì câu hỏi đầu tiên luôn là tên tuổi." },
  { q: "Con gì có mai mà không có nhà lầu?", answers: ["Con rùa", "Con ốc", "Con cua"], correct: 0, explain: "Rùa mang chiếc mai cứng trên lưng để bảo vệ cơ thể." },
  { q: "Cái gì không có cánh mà vẫn lượn lờ giữa bầu trời?", answers: ["Cánh diều", "Khí cầu", "Cả hai đáp án"], correct: 2, explain: "Diều và khinh khí cầu bay lượn nhờ lực nâng của gió và khí quyển." },
  { q: "Thứ gì đánh mất rồi khó lòng lấy lại niềm tin?", answers: ["Chữ tín", "Ví tiền", "Chìa khóa"], correct: 0, explain: "Một lần bất tín thì vạn lần bất tin." },
  { q: "Cái gì nằm giữa trán và cằm?", answers: ["Cái mũi", "Cái tai", "Đôi mắt"], correct: 0, explain: "Vị trí giải phẫu khuôn mặt: trán -> mũi -> miệng -> cằm." },
  { q: "Cái gì luôn chảy xuôi mà không bao giờ chảy ngược?", answers: ["Dòng thác", "Chiếc xe", "Máy bơm"], correct: 0, explain: "Trọng lực kéo nước thác luôn đổ từ trên cao xuống vực sâu." },
  { q: "Cái gì càng kéo dài thì càng nhanh hết?", answers: ["Tuổi thọ", "Sợi dây thun", "Thời gian làm bài"], correct: 2, explain: "Kéo dài thời gian chần chừ thì hạn nộp bài càng đến nhanh." },
  { q: "Vật gì giúp con người nhìn thấu qua những bức tường bê tông?", answers: ["Cửa sổ kính", "Cái kính lúp", "Máy soi"], correct: 0, explain: "Khung cửa sổ mở ra cho phép nhìn xuyên qua giới hạn của bức tường." },
  { q: "Cái gì bay đi xa mãi không quay về điểm xuất phát?", answers: ["Mũi tên bắn đi", "Hòn đá ném", "Cả hai"], correct: 2, explain: "Vật phóng đi theo quán tính không thể tự lộn về tay người ném." },

  { q: "Cái gì càng gọt vỏ thì ruột càng nhỏ đi?", answers: ["Quả táo", "Cây nến", "Cục tẩy"], correct: 0, explain: "Gọt bỏ lớp vỏ ngoài thì khối lượng quả giảm dần." },
  { q: "Thứ gì giữ ấm cho bạn vào mùa đông giá rét?", answers: ["Chiếc chăn bông", "Cây quạt", "Băng đá"], correct: 0, explain: "Chăn bông giữ nhiệt độ cơ thể không bị thoát ra ngoài." },
  { q: "Cái gì kêu tích tắc suốt ngày đêm?", answers: ["Đồng hồ quả lắc", "Chiếc bút", "Cái quạt trần"], correct: 0, explain: "Bộ đếm nhịp cơ học của đồng hồ phát ra âm thanh tích tắc." },
  { q: "Cái gì bạn không thể nhìn thấy bằng mắt thường nhưng cảm nhận được làn gió mát?", answers: ["Không khí", "Ánh sáng", "Nước"], correct: 0, explain: "Không khí vô hình chuyển động tạo thành những cơn gió mát." },
  { q: "Cái gì dùng để hứng nước mưa từ mái nhà?", answers: ["Máng xối", "Cái xô", "Cái chậu"], correct: 0, explain: "Máng xối dẫn dòng nước mưa từ mái tôn xuống bể trữ." },
  { q: "Con gì ban ngày ngủ đứng, ban đêm thức kiếm mồi?", answers: ["Con dơi", "Con ngựa", "Con cú mèo"], correct: 0, explain: "Loài dơi treo ngược mình ngủ cả ngày và kiếm ăn ban đêm." },
  { q: "Cái gì soi vào thấy hình ảnh của chính mình?", answers: ["Tấm gương", "Bức ảnh", "Mặt đất"], correct: 0, explain: "Gương phẳng phản chiếu nguyên vẹn hình ảnh đối diện nó." },
  { q: "Cái gì có ngọn nhưng không có gốc?", answers: ["Ngọn nến", "Ngọn núi", "Ngọn đèn"], correct: 0, explain: "Phần lửa cháy trên cây nến được gọi là 'ngọn nến'." },
  { q: "Con gì biết lặn dưới nước sâu mà không phải là cá?", answers: ["Cá voi", "Chim bói cá", "Con ếch"], correct: 0, explain: "Cá voi là động vật có vú thở bằng phổi nhưng lặn rất sâu." },
  { q: "Cái gì dùng để đo độ dài của cuốn tập?", answers: ["Thước kẻ", "Cái cân", "Nhiệt kế"], correct: 0, explain: "Thước kẻ có chia vạch centimet dùng đo kích thước độ dài." },

  { q: "Cái gì chứa mực nhưng không phải là con mực?", answers: ["Ống mực bút bi", "Bình hoa", "Cái ly"], correct: 0, explain: "Ruột bút bi chứa đầy dung dịch mực để viết chữ." },
  { q: "Cái gì giúp thuyền bè cập bến an toàn trong đêm tối?", answers: ["Ngọn hải đăng", "Ánh trăng", "Ngôi sao"], correct: 0, explain: "Hải đăng phát tín hiệu đèn biển dẫn đường cho thủy thủ." },
  { q: "Thứ gì càng mài sắc bén thì cắt gọt càng nhanh?", answers: ["Lưỡi dao", "Cái muỗng", "Cái đũa"], correct: 0, explain: "Dao mài sắc giúp giảm lực cản và cắt thái ngọt lịm." },
  { q: "Cái gì luôn đồng hành cùng chân bạn khi chạy bộ?", answers: ["Đôi giày", "Chiếc nón", "Cái áo mưa"], correct: 0, explain: "Giày chạy bộ ôm sát bàn chân bảo vệ bước chạy." },
  { q: "Cái gì dùng để gõ bàn phím nhập liệu cho máy tính?", answers: ["Các ngón tay", "Bàn chân", "Khuỷu tay"], correct: 0, explain: "Mười đầu ngón tay gõ phím thao tác trên máy vi tính." },
  { q: "Thứ gì tan nhanh trong miệng mang lại cảm giác mát lạnh ngọt ngào?", answers: ["Cây kem", "Miếng bánh mì", "Viên kẹo cay"], correct: 0, explain: "Kem làm từ sữa đông lạnh tan chảy tức thì khi gặp nhiệt cơ thể." },
  { q: "Cái gì dùng để bấm ghim giấy tờ lại thành tập?", answers: ["Cái bấm kim", "Cái kéo", "Cây thước"], correct: 0, explain: "Kìm bấm kim giữ chặt các mép giấy ngăn nắp." },
  { q: "Cái gì che nắng che mưa cho ngôi nhà?", answers: ["Mái nhà", "Bức tường", "Nền gạch"], correct: 0, explain: "Mái nhà là kết cấu phía trên cùng bảo vệ toàn bộ không gian sống." },
  { q: "Vật dụng nào phát ra âm nhạc khi bật nguồn?", answers: ["Chiếc loa thùng", "Cái bàn", "Cái quạt"], correct: 0, explain: "Loa chuyển đổi tín hiệu điện tử thành sóng âm nhạc lan tỏa." },
  { q: "Cái gì có nhiều trang sách chứa đầy kiến thức bổ ích?", answers: ["Quyển sách", "Tờ rơi", "Tấm danh thiếp"], correct: 0, explain: "Sách là kho tàng tri thức vô tận của nhân loại." },
  
  { q: "Con gì mang được cả ngôi nhà?", answers: ["Ốc sên", "Rùa", "Kiến"], correct: 0, explain: "Ốc sên mang cái vỏ trên lưng như ngôi nhà." },
  { q: "Cái gì càng lau càng ướt?", answers: ["Khăn", "Áo mưa", "Giấy"], correct: 0, explain: "Khăn lau thì bản thân nó càng ngày càng ướt." },
  { q: "Cái gì luôn đi mà chẳng bao giờ đến?", answers: ["Ngày mai", "Ngày hôm qua", "Xe buýt"], correct: 0, explain: "Ngày mai luôn ở phía trước, không bao giờ đến được." },
  { q: "Một con vịt đi trước, hai con vịt đi sau. Hỏi có mấy con vịt?", answers: ["Ba", "Hai", "Năm"], correct: 0, explain: "Có 3 con vịt: 1 trước và 2 sau." },
  { q: "Con gì đập thì sống, không đập thì chết?", answers: ["Trái tim", "Cái trống", "Cái trứng"], correct: 0, explain: "Trái tim phải đập mới sống." },
  { q: "Cái gì có đầu mà không có cổ?", answers: ["Cái gối", "Cái bút", "Cái bàn"], correct: 0, explain: "Cái gối có 'đầu gối' nhưng không có cổ." },
  { q: "Cái gì càng lấy đi thì càng to?", answers: ["Cái hố", "Cái túi", "Cái ao"], correct: 0, explain: "Đào đất đi thì hố càng to." },
  { q: "Con gì nhỏ bằng ngón tay mà ai cũng sợ?", answers: ["Muỗi", "Kiến lửa", "Gián"], correct: 0, explain: "Muỗi nhỏ nhưng gây bệnh, ai cũng sợ." },
  { q: "Cái gì đựng đầy nước mà không ướt?", answers: ["Đám mây", "Cái xô", "Cái ao"], correct: 0, explain: "Đám mây chứa nước nhưng không ướt." },
  { q: "Cái gì đi thì nằm, đứng thì ngồi?", answers: ["Cái xe", "Cái ghế", "Cái giường"], correct: 0, explain: "Xe chạy thì bánh nằm, dừng lại thì ngồi trên ghế." },

  { q: "Cái gì càng cao càng thấp?", answers: ["Cái thang", "Ngọn núi", "Bóng đèn"], correct: 0, explain: "Thang càng cao thì bậc càng thấp xuống đất." },
  { q: "Cái gì luôn ở phía trước bạn mà bạn không bao giờ thấy?", answers: ["Tương lai", "Cái mũi", "Cái bóng"], correct: 0, explain: "Tương lai luôn ở phía trước." },
  { q: "Cái gì khi cần thì vứt đi, khi không cần thì nhặt lại?", answers: ["Neo tàu", "Tiền", "Áo mưa"], correct: 0, explain: "Neo tàu lúc thả thì vứt xuống biển, lúc cần thì kéo lên." },
  { q: "Có cái gì bạn chỉ có 1 mà ai cũng có 2?", answers: ["Cái mũi", "Cái tai", "Con mắt"], correct: 0, explain: "Mũi ai cũng chỉ có một." },
  { q: "Cái gì bạn càng giữ càng mất?", answers: ["Bí mật", "Tiền", "Nước"], correct: 0, explain: "Bí mật càng giữ thì càng dễ mất." },
  { q: "Cái gì bạn có mà người khác dùng nhiều hơn?", answers: ["Tên", "Tiền", "Điện thoại"], correct: 0, explain: "Tên của bạn được người khác gọi nhiều hơn bạn tự gọi." },
  { q: "Cái gì bạn càng chia sẻ càng nhiều?", answers: ["Niềm vui", "Cơm", "Nước"], correct: 0, explain: "Niềm vui càng chia sẻ thì càng lan tỏa." },
  { q: "Trên trời có gì mà dưới đất cũng có?", answers: ["Ngôi sao", "Nước", "Không khí"], correct: 0, explain: "Ngôi sao trên trời và cũng có hoa sao dưới đất." },
  { q: "Cái gì không bao giờ hỏi nhưng ai cũng trả lời?", answers: ["Điện thoại", "Cái chuông", "Cái đồng hồ"], correct: 0, explain: "Chuông điện thoại reo thì ai cũng trả lời." },
  { q: "Cái gì có một mắt nhưng không thấy?", answers: ["Kim tiêm", "Cái kim", "Cơn bão"], correct: 2, explain: "Cơn bão có 'mắt bão' nhưng không nhìn thấy gì." },

  { q: "Một năm có bao nhiêu tháng có 28 ngày?", answers: ["Một", "Mười hai", "Sáu"], correct: 1, explain: "Tháng nào cũng có ít nhất 28 ngày." },
  { q: "Cái gì càng nóng càng lạnh?", answers: ["Tủ lạnh", "Máy điều hòa", "Băng"], correct: 0, explain: "Tủ lạnh càng nóng thì càng làm lạnh nhiều." },
  { q: "Cái gì sinh ra thì nhỏ, càng sống lâu càng to?", answers: ["Ngọn lửa", "Cái cây", "Con người"], correct: 0, explain: "Ngọn lửa càng cháy thì càng lan to." },
  { q: "Cái gì bạn chỉ có một lần trong đời?", answers: ["Tuổi trẻ", "Sinh nhật", "Cái chết"], correct: 0, explain: "Tuổi trẻ chỉ có một lần." },
  { q: "Cái gì nằm giữa biển khơi?", answers: ["Chữ 'ê'", "Cái đảo", "Con cá"], correct: 0, explain: "Chữ 'ê' nằm giữa chữ 'biển'." },
  { q: "Cái gì càng nhiều răng càng ít ăn?", answers: ["Cái lược", "Cái cưa", "Cái kìm"], correct: 0, explain: "Lược có nhiều răng nhưng không ăn được gì." },
  { q: "Cái gì càng đi càng ngắn?", answers: ["Cái nến", "Con đường", "Sợi dây"], correct: 0, explain: "Nến cháy càng đi thì càng ngắn." },
  { q: "Cái gì có thể bị bẻ nhưng không bao giờ chạm vào?", answers: ["Lời hứa", "Cái que", "Bánh tráng"], correct: 0, explain: "Lời hứa có thể bị bẻ gãy nhưng không chạm vào được." },
  { q: "Cái gì đầy lỗ nhưng vẫn chứa được nước?", answers: ["Miếng bọt biển", "Cái rổ", "Cái xô"], correct: 0, explain: "Miếng bọt biển đầy lỗ nhưng vẫn hút nước tốt." },
  { q: "Cái gì mọc lên khi trời mưa, biến mất khi trời nắng?", answers: ["Cầu vồng", "Mưa", "Mây"], correct: 0, explain: "Cầu vồng chỉ xuất hiện sau mưa và biến mất khi trời nắng." },
  { q: "Cái gì có thể đi xuyên qua cửa mà không cần mở?", answers: ["Ánh sáng", "Gió", "Âm thanh"], correct: 0, explain: "Ánh sáng đi xuyên cửa kính mà không cần mở." },
  { q: "Cái gì ai cũng có nhưng ít ai dám khoe?", answers: ["Giấc mơ", "Nỗi sợ", "Nợ"], correct: 2, explain: "Ai cũng có nợ ít nhiều, nhưng ít ai muốn khoe." },
  { q: "Cái gì dài như con rắn, không xương mà vẫn bò đi?", answers: ["Dòng sông", "Sợi dây", "Đường ray"], correct: 0, explain: "Dòng sông uốn lượn như con rắn, không xương mà vẫn chảy." },
  { q: "Cái gì càng già càng ngắn?", answers: ["Bút chì", "Nến", "Đũa"], correct: 0, explain: "Bút chì càng dùng thì càng ngắn." },
  { q: "Cái gì có tai mà không nghe?", answers: ["Cái nồi", "Cái ly", "Cái bình"], correct: 0, explain: "Nồi có tai nồi, nhưng không nghe được." },
  { q: "Cái gì có miệng mà không nói?", answers: ["Con sông", "Con cá", "Cái cốc"], correct: 0, explain: "Sông có cửa sông (miệng) nhưng không nói." },
  { q: "Cái gì càng chặt càng lỏng?", answers: ["Lời hứa", "Nút chai", "Dây thun"], correct: 0, explain: "Lời hứa chặt chẽ quá thì thường dễ lỏng lẻo." },
  { q: "Cái gì khi sinh ra thì nằm, khi sống thì đứng, khi chết thì nằm?", answers: ["Con người", "Cái cây", "Con cá"], correct: 1, explain: "Cây khi mọc thì đứng, khi bị đốn thì nằm." },
  { q: "Cái gì cứng ngoài mềm trong, ăn vào giòn rụm?", answers: ["Bánh mì", "Ổ bánh quy", "Kẹo cứng"], correct: 0, explain: "Ổ bánh mì vỏ cứng, ruột mềm." },

  { q: "Con gì càng to càng bé?", answers: ["Con cua", "Con voi", "Con tép"], correct: 0, explain: "Trong đố vui: cua to thì càng (cặp càng) bé." },
  { q: "Cái gì đứng mà không ngồi, ngồi mà không đứng?", answers: ["Cái bóng", "Ngọn núi", "Bàn ghế"], correct: 0, explain: "Bóng đứng nhưng không ngồi, ngồi nhưng không đứng." },
  { q: "Cái gì chỉ có trong cổ tích mà ai cũng tin?", answers: ["Bụt tiên", "Tình yêu sét đánh", "Đèn thần"], correct: 2, explain: "Đèn thần thường chỉ có trong truyện cổ tích." },
  { q: "Cái gì vừa là cha vừa là mẹ?", answers: ["Gà trống", "Đất", "Nước"], correct: 1, explain: "Người ta hay gọi 'mẹ đất cha trời'." },
  { q: "Cái gì luôn phải đi qua cửa mà không bao giờ bước?", answers: ["Khói", "Ánh sáng", "Gió"], correct: 2, explain: "Gió đi qua cửa mà không có chân bước." },
  { q: "Cái gì bay mà không bao giờ rơi?", answers: ["Thời gian", "Âm nhạc", "Tin đồn"], correct: 2, explain: "Tin đồn bay đi khắp nơi nhưng không rơi." },
  { q: "Cái gì người nghèo có, người giàu cần, mà nếu ăn vào sẽ chết?", answers: ["Không khí", "Không có gì", "Nước"], correct: 1, explain: "Không có gì thì ai cũng có, ăn vào sẽ chết." },
  { q: "Cái gì có thể viết nhưng không đọc?", answers: ["Bút chì", "Máy in", "Mưa"], correct: 2, explain: "Mưa viết chữ trên mặt đất nhưng không đọc được." },
  { q: "Cái gì luôn ở sau lưng bạn mà bạn không bao giờ thấy?", answers: ["Cái bóng", "Quá khứ", "Cái ba lô"], correct: 1, explain: "Quá khứ luôn ở phía sau lưng." },
  { q: "Cái gì càng cũ càng quý?", answers: ["Đồ cổ", "Người yêu cũ", "Rượu vang"], correct: 0, explain: "Đồ cổ càng cũ càng có giá trị." },

  { q: "Cái gì không bao giờ bị ướt dù đi dưới mưa?", answers: ["Bóng", "Xe tăng", "Gió"], correct: 0, explain: "Bóng không bao giờ bị ướt." },
  { q: "Cái gì đứng yên mà vẫn quay?", answers: ["Trái đất", "Cái quạt", "Đồng hồ"], correct: 0, explain: "Trái đất quay quanh trục mà vẫn đứng yên." },
  { q: "Cái gì bé bằng hạt vừng, có thể chứa cả thế giới?", answers: ["Con mắt", "Hạt giống", "Cái gương"], correct: 2, explain: "Trong gương có thể thấy cả thế giới." },
  { q: "Cái gì nặng như đá mà nổi như bọt?", answers: ["Khói", "Lời nói", "Bong bóng"], correct: 1, explain: "Lời nói có sức nặng, nhưng cũng nhẹ nhàng trôi đi." },
  { q: "Cái gì không có cánh mà vẫn bay, không có mắt mà vẫn khóc?", answers: ["Đám mây", "Thời gian", "Gió"], correct: 0, explain: "Mây bay, mây khóc thành mưa." },
  { q: "Cái gì không bao giờ ngủ nhưng luôn mơ?", answers: ["Biển", "Thời gian", "Trái tim"], correct: 0, explain: "Biển lúc nào cũng sóng vỗ như đang mơ." },
  { q: "Cái gì khi sinh ra thì to, khi sống thì nhỏ?", answers: ["Ngọn lửa", "Trái bóng", "Em bé"], correct: 0, explain: "Ngọn lửa lúc mới bùng to, sau cháy nhỏ dần." },
  { q: "Cái gì càng rỗng thì càng kêu to?", answers: ["Cái trống", "Cái nồi", "Cái ly"], correct: 0, explain: "Trống rỗng thì kêu to." },
  { q: "Cái gì không chân mà chạy, không miệng mà nói?", answers: ["Đồng hồ", "Điện thoại", "Sóng radio"], correct: 0, explain: "Đồng hồ chạy, kim 'nói' giờ nhưng không chân miệng." },
  { q: "Cái gì mất đi nhưng bạn vẫn còn?", answers: ["Ký ức", "Tiền", "Bạn bè"], correct: 0, explain: "Ký ức có thể mất đi nhưng vẫn còn dấu ấn." },

  { q: "Cái gì chỉ có một mà chia cho ai cũng đủ?", answers: ["Nụ cười", "Tình yêu", "Không khí"], correct: 0, explain: "Nụ cười bạn chia sẻ thì ai cũng đủ." },
  { q: "Cái gì không bao giờ ngã mà vẫn đổ?", answers: ["Mưa", "Nước", "Tình yêu"], correct: 0, explain: "Mưa đổ xuống nhưng không ngã." },
  { q: "Cái gì có thể che giấu nhưng không bao giờ biến mất?", answers: ["Ánh sáng", "Sự thật", "Nỗi đau"], correct: 1, explain: "Sự thật có thể bị che giấu nhưng không mất." },
  { q: "Cái gì càng nói dối càng dài?", answers: ["Mũi Pinocchio", "Lưỡi", "Câu chuyện"], correct: 0, explain: "Pinocchio nói dối thì mũi dài ra." },
  { q: "Cái gì luôn ở trên bàn mà không ai ăn?", answers: ["Bàn tay", "Bàn phím", "Cái bóng"], correct: 1, explain: "Bàn phím luôn ở trên bàn, không ai ăn." },
  { q: "Cái gì không ai muốn nhưng ai cũng nhận?", answers: ["Tuổi già", "Thuế", "Bệnh tật"], correct: 0, explain: "Tuổi già ai cũng phải nhận." },
  { q: "Cái gì có thể treo mà không ai thấy?", answers: ["Không khí", "Lời hứa", "Sợi dây"], correct: 1, explain: "Lời hứa treo lơ lửng, không ai thấy." },
  { q: "Cái gì có thể tỏa sáng nhưng không có lửa?", answers: ["Mặt trăng", "Đèn điện", "Kim cương"], correct: 0, explain: "Mặt trăng sáng mà không cần lửa." },
  { q: "Cái gì sinh ra từ đất nhưng lại bay lên trời?", answers: ["Khói", "Cây", "Cát bụi"], correct: 0, explain: "Khói sinh từ đất và bay lên trời." },
  { q: "Cái gì càng dùng càng rách?", answers: ["Tờ giấy", "Quần áo", "Tình yêu"], correct: 0, explain: "Giấy càng dùng càng rách." },

  { q: "Cái gì có thể khóa mà không có chìa?", answers: ["Nụ cười", "Môi", "Lời hứa"], correct: 1, explain: "Đôi môi có thể 'khóa' lại mà không cần chìa." },
  { q: "Cái gì đứng thì cao, nằm thì thấp, nhưng không bao giờ đi?", answers: ["Ngọn núi", "Cái cột", "Bức tường"], correct: 2, explain: "Bức tường đứng cao, nằm thấp, không đi." },
  { q: "Cái gì càng chia càng ít?", answers: ["Bánh", "Tiền", "Đất"], correct: 0, explain: "Bánh chia thì mỗi phần ít đi." },
  { q: "Cái gì bạn không thể giữ quá 5 phút?", answers: ["Hơi thở", "Nước", "Sự im lặng"], correct: 0, explain: "Bạn không thể nín thở quá 5 phút." },
  { q: "Cái gì không bao giờ cũ dù đã xưa?", answers: ["Âm nhạc", "Tình yêu", "Ký ức"], correct: 0, explain: "Âm nhạc hay thì không bao giờ cũ." },
  { q: "Cái gì mất đi thì mới thấy quý?", answers: ["Sức khỏe", "Tiền", "Bạn bè"], correct: 0, explain: "Sức khỏe mất rồi mới thấy quý." },
  { q: "Cái gì có thể nổ nhưng không gây thương tích?", answers: ["Tiếng cười", "Bong bóng", "Pháo giấy"], correct: 0, explain: "Cười nổ giòn tan mà không ai bị thương." },
  { q: "Cái gì có thể bị vỡ nhưng không bao giờ chạm?", answers: ["Trái tim", "Tinh thần", "Bí mật"], correct: 0, explain: "Trái tim có thể tan vỡ mà không chạm." },
  { q: "Cái gì có thể mua được bằng tiền nhưng không giữ được lâu?", answers: ["Niềm vui", "Thức ăn", "Thời gian"], correct: 2, explain: "Thời gian không thể giữ lâu." },
  { q: "Cái gì ai cũng muốn nghe nhưng ít ai nói thật?", answers: ["Lời khen", "Sự thật", "Lời hứa"], correct: 0, explain: "Ai cũng thích nghe lời khen." },
  { q: "Cái gì có thể rơi từ trên trời xuống mà không bao giờ vỡ?", answers: ["Mưa", "Ánh sáng", "Bóng tối"], correct: 2, explain: "Bóng tối buông xuống nhưng không bao giờ vỡ." },

// ==== Đố vui, đố mẹo, đố chữ (Phần 2) ====
  { q: "Quần rộng nhất là quần gì?", answers: ["Quần đùi", "Quần đảo", "Quần ống loe"], correct: 1, explain: "Quần đảo là tập hợp các hòn đảo, chữ 'quần' ở đây có nghĩa là quần thể." },
  { q: "Xã nào đông dân nhất?", answers: ["Xã hội", "Xã đàn", "Xã giao"], correct: 0, explain: "Xã hội bao gồm tất cả mọi người trên thế giới." },
  { q: "Bệnh gì bác sĩ bó tay?", answers: ["Bệnh gãy tay", "Bệnh nan y", "Bệnh hói đầu"], correct: 0, explain: "Gãy tay thì bác sĩ phải dùng thạch cao để bó tay lại." },
  { q: "Con trai có gì quý nhất?", answers: ["Sự nghiệp", "Ngọc trai", "Tính cách"], correct: 1, explain: "Con trai (loài nhuyễn thể) nhả ngọc tạo ra ngọc trai rất quý giá." },
  { q: "Cổ gì dài nhất?", answers: ["Cổ cò", "Cổ hươu", "Cổ đại"], correct: 2, explain: "Cổ đại là một thời kỳ lịch sử kéo dài hàng nghìn năm." },
  { q: "Trái gì không thể ăn được?", answers: ["Trái cấm", "Trái đất", "Trái đắng"], correct: 1, explain: "Trái đất là hành tinh chúng ta đang sống, không thể ăn được." },
  { q: "Tay trái cầm được cái gì mà tay phải không bao giờ cầm được?", answers: ["Tay trái", "Cùi chỏ tay phải", "Tay phải"], correct: 2, explain: "Tay phải không thể tự cầm chính nó." },
  { q: "Môn gì càng thắng càng thua?", answers: ["Kéo co", "Đua xe đạp", "Cờ vua"], correct: 1, explain: "Trong đua xe, 'thắng' (phanh lại) thì sẽ đi chậm và bị thua." },
  { q: "Từ nào trong tiếng Việt có 9 chữ 'H'?", answers: ["Học", "Chính", "Hành"], correct: 1, explain: "Chữ 'Chính' bao gồm chữ 'Chín' (9) và chữ 'H'." },
  { q: "Bỏ ngoài nướng trong, ăn ngoài bỏ trong là gì?", answers: ["Bắp ngô", "Củ khoai", "Quả nhãn"], correct: 0, explain: "Nướng bắp ngô: lột vỏ (bỏ ngoài), nướng hạt (nướng trong), ăn hạt (ăn ngoài), bỏ cùi (bỏ trong)." },

  { q: "Cái gì người mua biết, người bán biết, người dùng không bao giờ biết?", answers: ["Quan tài", "Thuốc độc", "Hàng giả"], correct: 0, explain: "Người dùng quan tài là người đã khuất nên không thể biết." },
  { q: "Nắng ba năm ta chưa hề bỏ bạn, mưa một ngày bạn lại bỏ ta là cái gì?", answers: ["Cái ô", "Cái bóng", "Cái áo mưa"], correct: 1, explain: "Cái bóng luôn theo ta khi có nắng, nhưng khi trời mưa không có nắng thì cái bóng biến mất." },
  { q: "Hai người đào trong hai giờ được một cái hố. Vậy một người đào trong một giờ được mấy cái hố?", answers: ["Nửa cái hố", "Một cái hố", "Không được cái nào"], correct: 1, explain: "Một cái hố dù to hay nhỏ thì vẫn được gọi là một cái hố." },
  { q: "Làm sao để cái cân tự cân chính nó?", answers: ["Lật ngược cái cân lại", "Để lên một cái cân khác", "Không thể cân được"], correct: 0, explain: "Khi lật ngược lại, trọng lượng của cái cân sẽ ép lên đĩa cân." },
  { q: "Câu chữ nào mà những người vui sướng khi nhìn thấy nó sẽ trở nên buồn bã, và ngược lại?", answers: ["Mọi thứ rồi sẽ qua", "Đừng khóc", "Cố lên"], correct: 0, explain: "Câu nói này nhắc nhở niềm vui sẽ không kéo dài mãi, và nỗi buồn rồi cũng sẽ kết thúc." },
  { q: "Cái gì của người con gái lúc nào cũng ẩm ướt?", answers: ["Đôi mắt", "Cái lưỡi", "Mái tóc"], correct: 1, explain: "Cái lưỡi của ai cũng luôn được làm ẩm bởi nước bọt." },
  { q: "Từ nào trong tiếng Việt có 100% chữ 'O'?", answers: ["Oong", "Xoong", "Boong"], correct: 1, explain: "Từ 'Xoong' (cái xoong) có chứa 2 chữ o, khi viết ra là xoong (trong câu đố vui X-o-o-n-g -> xoong)." },
  { q: "Con chó đen gọi là chó mực, chó vàng gọi là chó phèn. Vậy chó đỏ gọi là gì?", answers: ["Chó đỏ", "Chó lửa", "Chó mực đỏ"], correct: 0, explain: "Đơn giản nó chỉ là con chó có lông màu đỏ." },
  { q: "Bạn đang tham gia một cuộc đua chạy bộ. Bạn vượt qua người thứ 2, vậy bạn đang ở vị trí thứ mấy?", answers: ["Thứ nhất", "Thứ hai", "Thứ ba"], correct: 1, explain: "Bạn vượt qua người thứ 2 thì bạn chiếm vị trí của họ, tức là vị trí thứ 2." },
  { q: "Tháng nào ngắn nhất trong năm?", answers: ["Tháng Hai", "Ba", "Tháng Ba"], correct: 1, explain: "Từ 'Ba' có ít chữ cái nhất (2 chữ)." },

  { q: "Cái gì đen khi bạn mua nó, đỏ khi dùng nó và xám xịt khi vứt nó đi?", answers: ["Đôi giày", "Viên than", "Bút chì"], correct: 1, explain: "Than lúc mua màu đen, đốt lên màu đỏ, cháy xong thành tro màu xám." },
  { q: "Có ba quả táo trên bàn, bạn lấy đi hai quả. Hỏi bạn còn bao nhiêu quả táo?", answers: ["Một quả", "Hai quả", "Ba quả"], correct: 1, explain: "Bạn đã lấy đi hai quả thì trong tay bạn có hai quả táo." },
  { q: "Cửa hàng nào có nhiều đồ nhưng không ai muốn mua?", answers: ["Cửa hàng đồ cũ", "Cửa hàng bán quan tài", "Cửa hàng cầm đồ"], correct: 1, explain: "Không ai muốn mua quan tài cho chính mình." },
  { q: "Con chuột nào đi bằng hai chân?", answers: ["Chuột túi", "Chuột Mickey", "Chuột đồng"], correct: 1, explain: "Chuột Mickey là nhân vật hoạt hình luôn đi bằng hai chân." },
  { q: "Con vịt nào đi bằng hai chân?", answers: ["Vịt Donald", "Vịt trời", "Tất cả các con vịt"], correct: 2, explain: "Bản chất con vịt nào cũng đi bằng hai chân." },
  { q: "Sở thú bị cháy, con gì chạy ra đầu tiên?", answers: ["Con chim", "Con báo", "Con người"], correct: 2, explain: "Con người (bảo vệ, khách tham quan) sẽ chạy ra đầu tiên." },
  { q: "Cắm vào run rẩy toàn thân. Rút ra nước chảy từ chân xuống sàn là đang làm gì?", answers: ["Cắm sạc điện thoại", "Giặt máy giặt", "Tắm vòi sen"], correct: 2, explain: "Khi tắm vòi sen, cắm phích nước nóng lạnh, rút vòi ra nước chảy xuống sàn." },
  { q: "Một kẻ giết người bị kết án tử hình. Hắn ta phải chọn một trong ba căn phòng: Phòng 1 lửa cháy dữ dội, Phòng 2 đầy kẻ ám sát đang giương súng, Phòng 3 đầy sư tử nhịn đói trong 3 năm. Hắn nên chọn phòng nào?", answers: ["Phòng 1", "Phòng 2", "Phòng 3"], correct: 2, explain: "Sư tử nhịn đói 3 năm thì đã chết hết rồi, nên phòng 3 là an toàn nhất." },
  { q: "Bức tranh nàng Mona Lisa không có cái gì?", answers: ["Lông mày", "Mũi", "Miệng"], correct: 0, explain: "Nếu quan sát kỹ, nàng Mona Lisa không có lông mày." },
  { q: "Có 1 đàn chim đậu trên cành, người thợ săn bắn cái rằm. Hỏi chết mấy con?", answers: ["1 con", "15 con", "Chết hết"], correct: 1, explain: "Rằm là ngày 15, theo nghĩa đố vui là bắn chết 15 con." },

  { q: "Bên trái đường có một căn nhà xanh, bên phải đường có một căn nhà đỏ. Vậy nhà trắng ở đâu?", answers: ["Ở giữa", "Ở Mỹ", "Không có nhà trắng"], correct: 1, explain: "Nhà Trắng (White House) là phủ tổng thống nằm ở nước Mỹ." },
  { q: "Hoa gì biết ăn, biết nói, biết hát?", answers: ["Hoa hậu", "Hoa hướng dương", "Hoa hồng"], correct: 0, explain: "Hoa hậu là con người nên biết ăn, nói, hát." },
  { q: "Quả gì có 5 múi, 4 khe, ăn vào có vị chua chua ngọt ngọt?", answers: ["Quả khế", "Quả cam", "Quả bưởi"], correct: 0, explain: "Quả khế có 5 múi đặc trưng." },
  { q: "Cây gì không có lá, không có rễ, mọc trên tay?", answers: ["Cây bút", "Cây nấm", "Cây đàn"], correct: 0, explain: "Cây bút thường được cầm trên tay để viết." },
  { q: "Hạt gì dài nhất?", answers: ["Hạt đậu", "Hạt mưa", "Hạt lúa"], correct: 1, explain: "Hạt mưa kéo dài từ trên trời rơi xuống đất." },
  { q: "Nơi nào có đường sá, nhưng không có xe cộ; có nhà ở, nhưng không có người; có siêu thị, công ty nhưng không có hàng hóa?", answers: ["Trên bản đồ", "Trong giấc mơ", "Trong phim"], correct: 0, explain: "Trên bản đồ chỉ có các ký hiệu và hình vẽ." },
  { q: "Tôi có 4 cái chân, 1 cái lưng, nhưng không có cơ thể. Tôi là ai?", answers: ["Cái bàn", "Cái ghế", "Con vật"], correct: 1, explain: "Cái ghế có 4 chân và 1 lưng tựa." },
  { q: "Mắt gì không bao giờ nhắm?", answers: ["Mắt bão", "Mắt cá chân", "Mắt dứa"], correct: 1, explain: "Mắt cá chân là một bộ phận cơ thể, không có mi mắt để nhắm." },
  { q: "Đảo gì không bao giờ chìm?", answers: ["Đảo Cát Bà", "Đảo quốc", "Đảo chính"], correct: 2, explain: "Đảo chính là một hành động lật đổ chính quyền, chơi chữ từ 'đảo'." },
  { q: "Hồ gì lớn nhất Việt Nam?", answers: ["Hồ Tây", "Hồ Ba Bể", "Hồ Chí Minh"], correct: 2, explain: "Chủ tịch Hồ Chí Minh là vĩ nhân lớn nhất của Việt Nam." },

  { q: "Núi nào bị chặt ra từng khúc?", answers: ["Núi Thái Sơn", "Núi lửa", "Núi Thái Tuế"], correct: 0, explain: "Thái là cắt ra thành từng miếng/khúc (chơi chữ Thái Sơn)." },
  { q: "Con gì đập thì chết, không đập thì sống?", answers: ["Con tim", "Con muỗi", "Con trâu"], correct: 1, explain: "Con muỗi đập trúng thì chết, không đập thì nó bay đi." },
  { q: "Quần gì rộng nhất?", answers: ["Quần đùi", "Quần đảo", "Quần áo"], correct: 1, explain: "Quần đảo là tập hợp các hòn đảo trải dài trên biển." },
  { q: "Bánh gì đi lại mệt mỏi?", answers: ["Bánh bò", "Bánh xe", "Bánh cuốn"], correct: 0, explain: "Bò (đi bằng 4 chân/tay) thì rất mệt mỏi." },
  { q: "Trái gì không hái được?", answers: ["Trái đất", "Trái sầu riêng", "Trái tim"], correct: 0, explain: "Trái đất là nơi chúng ta sống." },
  { q: "Trái gì nằm trong lồng ngực?", answers: ["Trái tim", "Trái cây", "Trái táo"], correct: 0, explain: "Trái tim nằm trong lồng ngực của mỗi người." },
  { q: "Tôi luôn đi theo bạn dù bạn ở đâu trong ánh sáng, nhưng lại bỏ rơi bạn trong bóng tối. Tôi là ai?", answers: ["Cái bóng", "Đôi giày", "Người yêu"], correct: 0, explain: "Cái bóng chỉ xuất hiện khi có ánh sáng." },
  { q: "Người đàn ông duy nhất trên thế giới có sữa là ai?", answers: ["Không có ai", "Ông Thọ", "Người chuyển giới"], correct: 1, explain: "Sữa Ông Thọ là một thương hiệu sữa đặc rất nổi tiếng." },
  { q: "Cái gì đánh cha, đánh má, đánh anh, đánh chị, đánh em?", answers: ["Đánh răng", "Cây roi", "Đánh vần"], correct: 0, explain: "Mỗi ngày mọi người đều phải đánh răng." },
  { q: "Trò gì càng chơi càng ra nước?", answers: ["Đua thuyền", "Cờ vua", "Bơi lội"], correct: 2, explain: "Chơi bơi lội thì phải ở dưới nước." },

  { q: "Tên tôi là 1 con vật nhưng tôi lại là 1 loài cây. Tôi là ai?", answers: ["Cây bàng", "Cây chó đẻ", "Cây chuối"], correct: 1, explain: "Cây chó đẻ (diệp hạ châu) là một loại cây thuốc nam." },
  { q: "Có cổ nhưng không có đầu, có hai cánh tay nhưng không có bàn tay. Tôi là ai?", answers: ["Cái áo", "Cái chai", "Bức tượng"], correct: 0, explain: "Cái áo có cổ áo và hai ống tay áo." },
  { q: "Biển nào nhỏ nhất?", answers: ["Biển Đỏ", "Biển báo", "Biển Chết"], correct: 1, explain: "Biển báo giao thông chỉ có kích thước rất nhỏ gọn." },
  { q: "Khi Beckham thực hiện quả đá phạt đền, anh ta sẽ sút vào đâu?", answers: ["Góc chết", "Vào bóng", "Khung thành"], correct: 1, explain: "Đá phạt thì dĩ nhiên phải sút vào quả bóng trước tiên." },
  { q: "Lịch nào dài nhất?", answers: ["Lịch vạn niên", "Lịch sử", "Lịch trình"], correct: 1, explain: "Lịch sử kéo dài từ khi hình thành trái đất đến nay." },
  { q: "Cây gì càng đốt càng dài?", answers: ["Cây tre", "Cây nến", "Cây nhang"], correct: 0, explain: "Cây tre có nhiều đốt, càng mọc nhiều đốt thì cây càng dài." },
  { q: "Vua gọi hoàng hậu bằng gì?", answers: ["Ái phi", "Bằng miệng", "Bà xã"], correct: 1, explain: "Đố mẹo: Vua hay ai đi nữa thì cũng phải gọi người khác bằng cái miệng." },
  { q: "Bệnh gì bác sỹ phải nhổ răng?", answers: ["Bệnh sâu răng", "Bệnh yếu sinh lý", "Bác sỹ tự nhổ răng của mình"], correct: 2, explain: "Bác sỹ bị sâu răng thì phải nhờ người khác nhổ hoặc tự nhổ răng của mình." },
  { q: "Môn thể thao nào càng lùi càng thắng?", answers: ["Kéo co", "Bơi ngửa", "Nhảy xa"], correct: 0, explain: "Kéo co đòi hỏi hai đội phải kéo lùi về phía mình để giành chiến thắng." },
  { q: "Làm thế nào để qua mặt được mặt trời?", answers: ["Đi máy bay", "Đeo kính râm", "Đi vào ban đêm"], correct: 2, explain: "Ban đêm không có mặt trời nên ta dễ dàng đi qua nó." },

  { q: "Bỏ ngoài nướng trong, ăn ngoài bỏ trong là gì?", answers: ["Bắp ngô", "Củ khoai", "Hạt dẻ"], correct: 0, explain: "Bắp ngô: bóc vỏ ngoài nướng bắp trong, ăn hạt bên ngoài bỏ lõi bên trong." },
  { q: "Bạn làm việc gì đầu tiên mỗi buổi sáng?", answers: ["Đánh răng", "Mở mắt", "Thức dậy"], correct: 1, explain: "Để thức dậy và làm mọi việc khác, bạn phải mở mắt ra trước." },
  { q: "Có 1 đàn chuột điếc đi ngang qua, hỏi có mấy con?", answers: ["24 con", "1 con", "Không có con nào"], correct: 0, explain: "Điếc là hư tai, hư tai là hai tư (24)." },
  { q: "Từ nào trong tiếng Việt có 12 chữ M?", answers: ["Mười hai", "Mường mán", "Mắm muối"], correct: 0, explain: "Từ 'Mười hai' có âm 'M'." },
  { q: "Nhà nào lạnh nhất?", answers: ["Nhà băng", "Nhà đá", "Nhà ma"], correct: 0, explain: "Nhà băng (ngân hàng) đọc theo nghĩa đen là nơi chứa băng nên rất lạnh." },
  { q: "Có 1 người đứng ở chân cầu. Có 1 con gấu tiến lại gần anh ta. Hỏi anh ta làm sao để sống sót?", answers: ["Chạy trốn", "Giả vờ chết", "Đi lên cầu"], correct: 1, explain: "Gấu thường không ăn thịt những con vật đã chết." },
  { q: "Cái gì mà bạn có thể nuốt nó nhưng nó cũng có thể nuốt bạn?", answers: ["Nước", "Bóng tối", "Lửa"], correct: 0, explain: "Bạn uống nước, nhưng nếu đuối nước thì nước sẽ nuốt chửng bạn." },
  { q: "Tôi có các thành phố nhưng không có nhà ở, có núi nhưng không có cây, có nước nhưng không có cá. Tôi là gì?", answers: ["Bản đồ", "Quả địa cầu", "Hình vẽ"], correct: 0, explain: "Trên bản đồ chỉ có các đường vẽ thể hiện địa hình." },
  { q: "Bằng cái vung, vùng xuống ao. Đào không thấy, lấy chẳng được. Là cái gì?", answers: ["Mặt trăng", "Bóng mặt trời", "Cái nón"], correct: 1, explain: "Bóng mặt trời tròn như cái vung in dưới ao, không thể bắt được." },
  { q: "Đang đi trên đường, bỗng thấy một con bò ngang qua, bạn sẽ làm gì?", answers: ["Bóp còi", "Đợi nó đi qua", "Đạp phanh"], correct: 2, explain: "Thấy chướng ngại vật thì phản xạ đầu tiên là phải đạp phanh." },

  { q: "Trời đang mưa, có 3 người đi chung một cây dù nhỏ xíu nhưng không ai bị ướt. Vì sao?", answers: ["Vì mưa nhỏ", "Vì họ đứng im", "Vì trời không mưa"], correct: 2, explain: "Trời đang mưa ở nơi khác, còn nơi họ đứng thì trời không mưa." },
  { q: "Tại sao con chó không cắn được đuôi của chính nó?", answers: ["Vì đuôi quá ngắn", "Vì đuôi ở phía sau", "Cả 2 lý do trên"], correct: 2, explain: "Cấu tạo cơ thể khiến chó rất khó quay đầu lại để cắn đúng cái đuôi ngắn của mình." },
  { q: "Mẹ của Nam có 3 người con. Người thứ nhất tên là Nhất, người thứ hai tên là Nhị. Hỏi người thứ ba tên gì?", answers: ["Tam", "Ba", "Nam"], correct: 2, explain: "Người thứ ba chính là Nam (theo câu 'Mẹ của Nam có 3 người con')." },
  { q: "Bức tranh nào đắt giá nhất?", answers: ["Tranh Mona Lisa", "Tranh sơn mài", "Bức tranh biếm họa"], correct: 0, explain: "Mona Lisa được coi là bức tranh vô giá và nổi tiếng nhất thế giới." },
  { q: "Con gì đẻ bằng miệng?", answers: ["Con ếch", "Con cá", "Con lươn"], correct: 0, explain: "Loài ếch Darwin ấp trứng trong túi âm thanh và đẻ con ra bằng đường miệng." },
  { q: "Làm sao để một người không ngủ trong 7 ngày mà vẫn sống khỏe?", answers: ["Ngủ vào ban ngày", "Uống thuốc", "Ngủ vào ban đêm"], correct: 2, explain: "Chỉ cần ngủ vào ban đêm thì ban ngày thức đủ 7 ngày cũng không sao." },
  { q: "Tài sản lớn nhất của đời người là gì?", answers: ["Tiền bạc", "Sức khỏe", "Gia đình"], correct: 1, explain: "Có sức khỏe là có tất cả." },
  { q: "Quốc gia nào trên thế giới không có thủ đô?", answers: ["Nauru", "Monaco", "Singapore"], correct: 0, explain: "Cộng hòa Nauru là quốc gia duy nhất trên thế giới không có thủ đô chính thức." },
  { q: "Bộ phận nào trên cơ thể người không có mạch máu?", answers: ["Móng tay", "Tóc", "Giác mạc"], correct: 2, explain: "Giác mạc mắt lấy oxy trực tiếp từ không khí chứ không qua mạch máu." },
  { q: "Nơi nào lạnh nhất trên Trái đất?", answers: ["Bắc Cực", "Nam Cực", "Đỉnh Everest"], correct: 1, explain: "Nam Cực là lục địa lạnh nhất, khô nhất và nhiều gió nhất." },

  // ==== Đố vui, đố mẹo, chơi chữ (Phần 3) ====
  { q: "Cầu gì không bắc qua sông?", answers: ["Cầu Sài Gòn", "Cầu lông", "Cầu Rồng"], correct: 1, explain: "Cầu lông là một môn thể thao, không phải là công trình giao thông." },
  { q: "Kiến gì không bao giờ ngủ?", answers: ["Kiến lửa", "Kiến ba khoang", "Kiến trúc"], correct: 2, explain: "Kiến trúc là một ngành nghề xây dựng, thiết kế (chơi chữ 'kiến')." },
  { q: "Bánh gì không nhai được mà chỉ để lăn?", answers: ["Bánh xe", "Bánh bò", "Bánh tiêu"], correct: 0, explain: "Bánh xe được làm từ cao su, kim loại dùng để giúp xe di chuyển." },
  { q: "Hoa gì luôn luôn ở phía sau?", answers: ["Hoa hồng", "Hoa hậu", "Hoa hướng dương"], correct: 1, explain: "Hoa 'hậu' mang ý nghĩa là phía sau (ví dụ: hậu phương, hậu vệ)." },
  { q: "Cây gì không có lá, cũng chẳng có cành?", answers: ["Cây bàng", "Cây cau", "Cây cột điện"], correct: 2, explain: "Cột điện đứng thẳng vút, không cành không lá nhưng vẫn được gọi là 'cây'." },
  { q: "Mũi gì không bao giờ biết ngửi?", answers: ["Mũi thuyền", "Mũi tẹt", "Mũi dọc dừa"], correct: 0, explain: "Mũi thuyền là phần đầu nhô ra của chiếc thuyền, hoàn toàn không có khứu giác." },
  { q: "Răng gì nhiều nhất nhưng không bao giờ biết nhai?", answers: ["Răng hàm", "Răng lược", "Răng nanh"], correct: 1, explain: "Chiếc lược có rất nhiều 'răng' dùng để chải tóc chứ không dùng để ăn." },
  { q: "Chân gì không bao giờ bước đi được?", answers: ["Chân chim", "Chân nhện", "Chân bàn"], correct: 2, explain: "Chân bàn là bộ phận nâng đỡ mặt bàn, cố định một chỗ." },
  { q: "Sông gì không có nước mà đầy sao?", answers: ["Sông Ngân Hà", "Sông Hồng", "Sông Cửu Long"], correct: 0, explain: "Sông Ngân Hà (dải Ngân Hà) là một dải sao sáng rực trên bầu trời đêm." },
  { q: "Biển gì không có tôm cá cũng chẳng có nước?", answers: ["Biển Đông", "Biển báo", "Biển Đen"], correct: 1, explain: "Biển báo giao thông được đặt trên bờ để hướng dẫn người đi đường." },
  
  { q: "Kem gì không bao giờ lạnh?", answers: ["Kem ốc quế", "Kem tươi", "Kem đánh răng"], correct: 2, explain: "Kem đánh răng dùng để vệ sinh răng miệng hàng ngày." },
  { q: "Đàn gì không thể gảy ra tiếng nhạc?", answers: ["Đàn bò", "Đàn tranh", "Đàn guitar"], correct: 0, explain: "Đàn bò là một nhóm các con bò tập hợp lại với nhau." },
  { q: "Áo gì không bao giờ dùng để mặc lên người?", answers: ["Áo mưa", "Áo gối", "Áo phao"], correct: 1, explain: "Áo gối (vỏ gối) dùng để bọc bên ngoài ruột gối cho êm và sạch." },
  { q: "Lòng gì không bao giờ ăn được?", answers: ["Lòng lợn", "Lòng bò", "Lòng tốt"], correct: 2, explain: "Lòng tốt là phẩm chất cao đẹp của con người, không phải thức ăn." },
  { q: "Đường gì ngọt nhất?", answers: ["Đường cát", "Đường cao tốc", "Đường làng"], correct: 0, explain: "Đường cát (đường mía) là một loại gia vị tạo vị ngọt." },
  { q: "Chả gì không bao giờ ăn được?", answers: ["Chả cá", "Chả vờ", "Chả lụa"], correct: 1, explain: "Chả vờ (giả vờ) là một từ chỉ hành động, đố chữ vui với món 'chả'." },
  { q: "Sách gì không có một chữ nào?", answers: ["Sách giáo khoa", "Sách tiểu thuyết", "Sách bò"], correct: 2, explain: "Sách bò là một bộ phận trong dạ dày của con bò, dùng làm thức ăn." },
  { q: "Quả gì không có hột mà bay được trên trời?", answers: ["Quả bóng bay", "Quả dừa", "Quả bưởi"], correct: 0, explain: "Quả bóng bay chứa khí nhẹ nên có thể bay vút lên cao." },
  { q: "Hành gì không bao giờ cay mắt?", answers: ["Hành tây", "Hành lý", "Hành lá"], correct: 1, explain: "Hành lý là đồ đạc bạn mang theo khi đi du lịch." },
  { q: "Lá gì không bao giờ rụng?", answers: ["Lá bàng", "Lá mai", "Lá cờ"], correct: 2, explain: "Lá cờ làm bằng vải, bay phấp phới trên cột chứ không rụng như lá cây." },
  
  { q: "Canh gì không dùng để ăn?", answers: ["Canh gác", "Canh chua", "Canh khổ qua"], correct: 0, explain: "Canh gác là hành động bảo vệ, trông coi một khu vực." },
  { q: "Vịt gì không có lông?", answers: ["Vịt quay", "Vịt Donald", "Vịt xiêm"], correct: 1, explain: "Vịt Donald là một nhân vật hoạt hình vô cùng nổi tiếng." },
  { q: "Kéo gì không bao giờ cắt được đồ vật?", answers: ["Kéo cắt giấy", "Kéo cắt tóc", "Kéo co"], correct: 2, explain: "Kéo co là một môn thể thao rèn luyện sức mạnh và tinh thần đồng đội." },
  { q: "Sâu gì không bao giờ ăn lá cây?", answers: ["Sâu răng", "Sâu róm", "Sâu xanh"], correct: 0, explain: "Sâu răng là tình trạng răng bị vi khuẩn làm hỏng." },
  { q: "Chuột gì không sợ mèo?", answers: ["Chuột đồng", "Chuột máy tính", "Chuột cống"], correct: 1, explain: "Chuột máy tính là một thiết bị điện tử, hoàn toàn không sợ mèo." },
  { q: "Ốc gì không có vỏ ngoài?", answers: ["Ốc bươu", "Ốc hương", "Ốc vít"], correct: 2, explain: "Ốc vít là vật dụng bằng kim loại dùng để ghép nối các chi tiết." },
  { q: "Cá gì không bơi lội dưới nước?", answers: ["Cá gỗ", "Cá voi", "Cá chép"], correct: 0, explain: "Cá gỗ là một vật dụng được đẽo từ gỗ, gắn với giai thoại của người xưa." },
  { q: "Kính gì không dùng để đeo lên mắt?", answers: ["Kính râm", "Kính thưa", "Kính cận"], correct: 1, explain: "Kính thưa là một lời chào trang trọng khi bắt đầu phát biểu." },
  { q: "Cửa gì không bao giờ khép lại được?", answers: ["Cửa sổ", "Cửa sắt", "Cửa miệng"], correct: 2, explain: "Cửa miệng là bộ phận trên cơ thể con người." },
  { q: "Nước gì không dùng để uống hay tắm rửa?", answers: ["Nước cờ", "Nước suối", "Nước dừa"], correct: 0, explain: "Nước cờ chỉ những bước đi chiến thuật trên bàn cờ tướng hoặc cờ vua." },
  
  { q: "Mắt gì chi chít trên thân mà không nhìn được?", answers: ["Mắt bão", "Mắt dứa", "Mắt cá chân"], correct: 1, explain: "Mắt dứa là những điểm lõm chi chít trên vỏ quả dứa." },
  { q: "Xe gì không bao giờ có bánh?", answers: ["Xe đạp", "Xe máy", "Xe cờ tướng"], correct: 2, explain: "Quân Xe trên bàn cờ tướng chỉ là một khối tròn, không có bánh xe." },
  { q: "Báo gì không thể đọc được bằng mắt?", answers: ["Báo thức", "Báo điện tử", "Báo giấy"], correct: 0, explain: "Báo thức là chuông đồng hồ hoặc điện thoại reo lên để đánh thức bạn." },
  { q: "Chim gì nặng nhất?", answers: ["Chim đà điểu", "Chim yến", "Chim cánh cụt"], correct: 1, explain: "Chơi chữ: 1 'yến' là đơn vị đo lường tương đương với 10kg." },
  { q: "Lưng gì không cõng được người?", answers: ["Lưng ngựa", "Lưng trâu", "Lưng đồi"], correct: 2, explain: "Lưng đồi chỉ phần sườn thoải của một ngọn đồi." },
  { q: "Đầu gì không bao giờ có tóc?", answers: ["Đầu đình", "Đầu bếp", "Đầu người"], correct: 0, explain: "Đầu đình là phần phía trước của ngôi đình làng." },
  { q: "Đuôi gì không ngoe nguẩy được?", answers: ["Đuôi cá", "Đuôi mắt", "Đuôi chó"], correct: 1, explain: "Đuôi mắt là phần đuôi của đôi mắt trên khuôn mặt." },
  { q: "Trà gì không bao giờ pha được bằng nước?", answers: ["Trà đá", "Trà sữa", "Trà trộn"], correct: 2, explain: "Trà trộn là một động từ chỉ sự len lỏi, hòa lẫn vào đám đông." },
  { q: "Đậu gì không bao giờ nảy mầm?", answers: ["Đậu xe", "Đậu xanh", "Đậu đen"], correct: 0, explain: "Đậu xe là hành động dừng và đỗ xe lại." },
  { q: "Bàn gì không có 4 chân?", answers: ["Bàn ăn", "Bàn tay", "Bàn học"], correct: 1, explain: "Bàn tay là bộ phận cơ thể, gồm lòng bàn tay và các ngón tay." },
  
  { q: "Thư gì không cần tem, không cần phong bì?", answers: ["Thư tình", "Thư tay", "Thư giãn"], correct: 2, explain: "Thư giãn là trạng thái nghỉ ngơi, thoải mái của cơ thể và tinh thần." },
  { q: "La gì không bao giờ cất tiếng kêu được?", answers: ["La bàn", "La mắng", "La hét"], correct: 0, explain: "La bàn là dụng cụ dùng để xác định phương hướng." },
  { q: "Bút gì không bao giờ viết ra chữ?", answers: ["Bút bi", "Bút thử điện", "Bút chì"], correct: 1, explain: "Bút thử điện dùng để kiểm tra xem có dòng điện chạy qua hay không." },
  { q: "Gà gì không biết đi cũng chẳng biết gáy?", answers: ["Gà rừng", "Gà trống", "Gà bông"], correct: 2, explain: "Gà bông là một món đồ chơi nhồi bông vô cùng dễ thương." },
  { q: "Nón gì không dùng để đội lên đầu?", answers: ["Hình nón", "Nón lá", "Nón quai thao"], correct: 0, explain: "Hình nón là một khối hình học trong không gian." },
  { q: "Quần gì đông người nhất?", answers: ["Quần short", "Quần chúng", "Quần dài"], correct: 1, explain: "Quần chúng là từ dùng để chỉ tập thể rất đông người." },
  { q: "Quả gì để đá chứ không để ăn?", answers: ["Quả sầu riêng", "Quả mít", "Quả bóng"], correct: 2, explain: "Quả bóng dùng để chơi trong các môn thể thao như bóng đá." },
  { q: "Gấu gì không bao giờ ăn mật ong?", answers: ["Gấu bông", "Gấu trúc", "Gấu nâu"], correct: 0, explain: "Gấu bông chỉ là thú nhồi bông nên không thể ăn uống." },
  { q: "Đảo gì không có đất cát, nước biển?", answers: ["Đảo Phú Quốc", "Đảo lộn", "Đảo Cát Bà"], correct: 1, explain: "Đảo lộn là từ chỉ sự xáo trộn, mất trật tự." },
  { q: "Bò gì không bao giờ ăn cỏ?", answers: ["Bò sữa", "Bò tót", "Bò lúc lắc"], correct: 2, explain: "Bò lúc lắc là tên một món ăn ngon được làm từ thịt bò xắt khối vuông." },

  { q: "Trong bảng chữ cái tiếng Việt, chữ nào luôn đứng một mình?", answers: ["Chữ I", "Chữ A", "Chữ Ê"], correct: 0, explain: "Chữ I ngắn thường được phát âm độc lập thành một từ có nghĩa (ví dụ: họ I, ý)." },
  { q: "Nơi nào thời gian trôi qua chậm nhất?", answers: ["Trong tù", "Khi chờ đợi", "Gần lỗ đen vũ trụ"], correct: 2, explain: "Theo thuyết tương đối của Einstein, lực hấp dẫn khổng lồ của lỗ đen làm thời gian trôi chậm lại." },
  { q: "Từ nào trong tiếng Việt bỏ dấu sắc thì thành vũ khí, bỏ dấu nặng thì thành loài hoa?", answers: ["Súng", "Kiếm", "Báo"], correct: 2, explain: "Báo (con báo/tờ báo) - bỏ dấu sắc thành Bao (không phải), đáp án vui là Đào (Hoa đào, đao là vũ khí)." },
  { q: "Tôi có 3 con mắt, 1 chân, tôi đứng ở ngã tư đường. Tôi là ai?", answers: ["Đèn giao thông", "Cảnh sát giao thông", "Cột điện"], correct: 0, explain: "Đèn giao thông có 3 đèn (đỏ, vàng, xanh) và 1 cột trụ." },
  { q: "Con gì sinh ra đã có râu?", answers: ["Con dê", "Con mèo", "Con rết"], correct: 0, explain: "Dê sinh ra thường đã có chỏm râu đặc trưng." },
  { q: "Bạn không thể chạm vào tay phải của mình bằng cái gì?", answers: ["Tay trái", "Khuỷu tay phải", "Mũi"], correct: 1, explain: "Bạn không thể dùng khuỷu tay phải để tự chạm vào bàn tay phải của mình." },
  { q: "Thứ gì bạn có thể ném đi nhưng nó sẽ luôn quay trở lại với bạn?", answers: ["Cái bóng", "Boomerang", "Ký ức"], correct: 1, explain: "Boomerang là vũ khí ném đặc biệt có thiết kế khí động học để bay vòng trở lại." },
  { q: "Có 1 bà lão đi mua mèo. Bà thấy 1 cái bàn tròn. Hỏi tại sao bà lão lại quay về?", answers: ["Bàn tròn là bàn không méo", "Bà không mang tiền", "Bà sợ mèo"], correct: 0, explain: "Bàn tròn = bàn không méo = mèo không bán. Đố chữ tiếng Việt." },
  { q: "Từ nào trong tiếng Việt có 3 chữ I?", answers: ["Bỉ bỉ", "Bí kíp", "Bí rì rì"], correct: 2, explain: "Bí rì rì có 3 âm 'i'." },
  { q: "Bạn đi về phía trước, nhưng tôi lại ở phía sau lưng bạn. Tôi là gì?", answers: ["Cái bóng", "Quá khứ", "Gót chân"], correct: 0, explain: "Khi đi ngược nguồn sáng, cái bóng sẽ in phía sau lưng bạn." }

];


