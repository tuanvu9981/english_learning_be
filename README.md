## Web học tiếng Anh 

### Chức năng: 
1. Flashcard 
2. Story 

### Cấu trúc thư mục 
1. **code**: chứa các mã báo hiệu (OBJ_NOT_FOUND: không tìm thấy đối tượng ...)
2. **constant**: Chứa các hằng số dùng nhiều lần 
3. **controller**: Chứa hàm, request và response trả về 
4. **model**: Định nghĩa các model tương tác với DB 
5. **routes**: Chứa các URL ứng với các method trong controller. Frontend sẽ gọi các route này và truyền vào các tham số tương ứng 
6. **service**: Xử lý logic & lấy dữ liệu từ model 
7. **utils**: 1 số hàm tiện ích dùng sau này 
8. **index.js**: File gốc 

### Khởi động: 
1. Clone repository về 
2. ```npm i``` 
3. ```$ cd src```
4. ```/src $ node index.js```


