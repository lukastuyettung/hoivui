const questions = [
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



  
];
