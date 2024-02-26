# WebShoppingCart

- Cách thức khởi chạy lại dự án:<br>
B1: Bật Terminal và gõ dòng lệnh 'npm i' để hệ thống tiến hành cài đặt các gói cần thiết.<br>
B2: Gõ lệnh 'npm start' để tiến hành chạy chương trình.

- Link Demo sản phẩm: https://shoppingcart1.onrender.com/

- Mô tả cấu trúc các Folder:
  - SRC: chứa toàn bộ source code và các tài nguyên liên quan.
  - app: Chứa các model và controller.
  - config/db: Nơi kết nối database.
  - Routes: Nơi chứa các định tuyến đường dẫn API (index.js là file định tuyến tổng ).
  - ultil: Chứa file định dạng đối tượng thành kiểu object.
  - Resouses: Chứa các folder tài nguyên và giao diện (views).
  - Resouses/public: Chứa các file css và hình ảnh.
  - Resouses/Views: Chứa các giao diện người dùng.

- Các tính năng:
  <ul>
    <li>
     Hiển thị các sản phẩm của cửa hàng.
    </li>
     <li>
     Thêm sản phẩm giỏ hàng.
    </li>
    <li>
    Tăng giảm số lượng sản phẩm trong giỏ hàng.
    </li>
     <li>
     Xóa sản phẩm ra khỏi giỏ hàng.
    </li>
     <li>
     Tính tổng giá trị hóa đơn khi người dùng thêm hoặc bỏ bớt hàng.
    </li>
  </ul>
  
- Công nghệ sử dụng:
  - front-end:HTML,CSS,JS, TEMPLATE-ENGINE(HANDLEBARJS).
  - Back-end:Nodejs-Express.
  - Database:MongoDB.

- Mô tả API:
  - GET /api/v1/products: lấy tất cả sản phẩm được người dùng chọn trước đó từ database khi người dùng truy cập vào web.
  - GET /api/v1/products/:id: lấy các sản phẩm được người dùng chọn.
  - POST /api/v1/products: Tạo mới các sản phẩm để lưu trữ những sản phẩm người dùng đã chọn vào database.
  - PUT /api/v1/products/:id: Cập nhật số lượng sản phẩm trong database khi người dùng có sự thay đổi (tăng hoặc giảm số lượng).
  - DELETE /api/v1/products/:id: Xóa sản phẩm người dùng muốn xóa (click button xóa), hoặc khi số lượng sản phẩm đó đã bị người dùng giảm về 0.
