const express = require('express');   // nạp thư viện express vào biến
const app = express();      // trả về các phương thức
const port = 3000;   // cổng mạng


// định nghĩa route(tuyến đường) cho phương thức HTTP GET
// '/' là đường dẫn của trang web để hiện thị
app.get('/', (req, res) => {
  // gửi yêu cầu lên máy chủ
  // máy chủ sẽ phản hồi bằng chuỗi 'Hello Kain!'
  res.send('Hello Kain');  
})

// lắng nghe kết nối từ các yêu cầu HTTP đến máy chủ
app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`)
})

