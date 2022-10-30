/**
 * Bài tập 1: Quản lý tuyển sinh
 * 
 * Đầu vào:
 *  - Nhập điểm chuẩn hội đồng
 *  - Nhập điểm môn thứ 1
 *  - Nhập điểm môn thứ 2
 *  - Nhập điểm môn thứ 3
 *  - Nhập khu vực ưu tiên
 *  - Nhập đối tượng ưu tiên
 * 
 * Xử lý:
 *  - Tạo hàm check status đối tượng ưu tiên và trả về điểm cộng tương ứng.
 *  - Tạo hàm check status khu vực ưu tiên và trả về điểm cộng tương ứng.
 *  - Tính điểm tổng kết = tổng 3 môn + thêm điểm ưu tiên tương ứng
 *  - Tạo hàm so sánh điểm và xuất ra kết quả đậu rớt onclick (if else)
 * 
 * Đầu ra:
 *  - Xuất ra màn hình kết quả đậu / rớt và tổng số điểm
 */

function checkKhuVuc(a) {
    var diemKhuVuc;
    if (a == "A") {
        diemKhuVuc = 2;
    }
    else if (a == "B") {
        diemKhuVuc = 1;
    }
    else if (a == "C") {
        diemKhuVuc = 0.5;
    }
    else {
        diemKhuVuc = 0;
    }

    return diemKhuVuc;
}

function checkDoiTuong(a) {
    var diemDoiTuong;
    if (a == 1) {
        diemDoiTuong = 2.5;
    }
    else if (a == 2) {
        diemDoiTuong = 1.5;
    }
    else if (a == 3) {
        diemDoiTuong = 1;
    }
    else {
        diemDoiTuong = 0;
    }

    return diemDoiTuong;
}

function tuyenSinh() {
    var diemChuan = document.getElementById("diemChuan").value * 1;
    var diem_1 = document.getElementById("diem_1").value * 1;
    var diem_2 = document.getElementById("diem_2").value * 1;
    var diem_3 = document.getElementById("diem_3").value * 1;
    var khuVuc = document.getElementById("khuVuc").value;
    var doiTuong = document.getElementById("doiTuong").value * 1;

    var diemCong_1 = checkKhuVuc(khuVuc);
    var diemCong_2 = checkDoiTuong(doiTuong);

    var tongDiem = diem_1 + diem_2 + diem_3 + diemCong_1 + diemCong_2;

    var kqTuyenSinh = "";

    if (diem_1 == 0 || diem_2 == 0 || diem_3 == 0) {
        kqTuyenSinh += "<p>Có môn bị điểm 0. Kết quả: Rớt</p>"
    }
    else if (diemChuan > tongDiem) {
        kqTuyenSinh += "<p>Kết quả: Rớt. Số điểm là: " + tongDiem + "</p>";
    }
    else {
        kqTuyenSinh += "<p>Kết quả: Đậu. Số điểm là: " + tongDiem + "</p>";
    }

    document.getElementById("kqTuyenSinh").innerHTML = kqTuyenSinh;
}


/**
 * Bài tập 2: Tính tiền điện
 * 
 * Đầu vào:
 *  - Tên người nộp tiền
 *  - Nhập số điện tiêu thụ = soKW
 * 
 * Xử lý:
 *  - Tạo hàm tính giá điện theo các trường hợp sau:
 *          >0 <= 50 : 500*soKW;
 *          >50 <=100 : 500*50 + 650*(soKW - 50);
 *          >100 <=200 : 500*50 + 650*50 + 850*(soKW - 100);
 *          >200 <=350 : 500*50 + 650*50 + 850*100 + 1100*(soKW - 200);
 *          >350 : 500*50 + 650*50 + 850*100 + 1100*150 + 1300*(soKW -350);
 * 
 * Đầu ra:
 *  - Xuất kq tiền ra màn hình
 */

function tienDien(a) {
    var tinhTien;

    if (a > 0 && a <= 50) {
        tinhTien = 500 * a;
    }
    else if (a > 50 && a <= 100) {
        tinhTien = 500 * 50 + 650 * (a - 50);
    }
    else if (a > 100 && a <= 200) {
        tinhTien = 500 * 50 + 650 * 50 + 850 * (a - 100);
    }
    else if (a > 200 && a <= 350) {
        tinhTien = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * (a - 200);
    }
    else {
        tinhTien = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + 1300 * (a - 350);
    }

    return tinhTien;
}

function kqDien() {
    var soKW = document.getElementById("soKW").value;
    var kqTinhTien = tienDien(soKW);

    var currentFormat = Intl.NumberFormat("VN-vn");

    var tongTien = "";

    tongTien += "<p>Tổng số tiền điện là: " + currentFormat.format(kqTinhTien) + "vnđ</p>";

    document.getElementById("tongTien").innerHTML = tongTien;
}



/**
 * Bài tập 3 :  Tính thuế thu nhập cá nhân
 * 
 * Đầu vào:
 *  Nhập họ tên người lao động : hoTen
 *  Nhập tổng thu nhập : tongThuNhap
 *  Nhập số người phụ thuộc : nguoiPhuThuoc
 * 
 * Xử lý:
 *  Gọi thu nhập chịu thuế : chiuThue
 *  -> chiuThue = tongThuNhap - 4000000 - nguoiPhuThuoc*1600000
 *  
 *  Tạo hàm kiểm tra và tính thuế suất với điều kiện sau:
 *      Nếu chiuThue <= 60 -> thueSuat = 5%;
 *      Nếu chiuThue >60 <= 120 -> thueSuat = 10;
 *      Nếu chiuThue >120 <= 210 -> thueSuat = 15;
 *      Nếu chiuThue >210 <= 384 -> thueSuat = 20;
 *      Nếu chiuThue >384 <= 624 -> thueSuat = 25;
 *      Nếu chiuThue >624 <= 960 -> thueSuat = 30;
 *      Nếu chiuThue >960 -> thueSuat = 35;
 *      -> return thueSuat
 * 
 *  Tạo hàm tính thuế thu nhập:
 *      thueThuNhap = chiuThue * thueSuat/100;
 * 
 * Đầu ra:
 *   Xuất kết quả thueThuNhap ra màn hình;     
 */

function checkThueSuat(a) {
    var thueSuat = 0;

    if (a <= 60000000) {
        thueSuat = 5;
    }
    else if (a > 60000000 && a <= 120000000) {
        thueSuat = 10;
    }
    else if (a > 120000000 && a <= 210000000) {
        thueSuat = 15;
    }
    else if (a > 210000000 && a <= 384000000) {
        thueSuat = 20;
    }
    else if (a > 384000000 && a <= 624000000) {
        thueSuat = 25;
    }
    else if (a > 624000000 && a <= 960000000) {
        thueSuat = 30;
    }
    else {
        thueSuat = 35;
    }
    return thueSuat;
}

function tinhThueThuNhap() {
    var tongThuNhap = document.getElementById("tongThuNhap").value * 1;
    var nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;
    var chiuThue = tongThuNhap - 4000000 - (nguoiPhuThuoc * 1600000);

    var kqThueSuat = checkThueSuat(chiuThue);

    var result = "";
    var currentFormat = Intl.NumberFormat("VN-vn");

    var thueThuNhap = chiuThue * kqThueSuat / 100;

    result += "<p>Thuế thu nhập cá nhân phải trả là: " + currentFormat.format(thueThuNhap) + "vnđ</p>";

    document.getElementById("thueThuNhap").innerHTML = result;
}



/**
 * Bài 4: Tính tiền cáp
 * 
 * Đầu vào:
 *  Nhập mã khách hàng = customerID
 *  Chọn Loại khách hàng = customerType
 *  Số kết nối = connectionCount
 *  Số kênh cao cấp = premiumChannel
 * 
 * Xử lý:
 *  Kiểm tra xứ lý ẩn hiện số kết nối -> tạo hàm hiddenCheck
 *      -> Tại html cho display:none là giá trị default
 *      -> Nếu customerType = "ND"
 *          hiddenCheck = display block;
 *         else
 *          hiddenCheck = display none;
 * 
 *  Viết hàm tính tổng tiền 
 *      customerType ="ND"
 *          processPrice = 4.5$;
 *          servicePrice = 20.5$;
 *          premiumChannelPrice = 7.5$ / channel;
 * 
 *      customerType = "DN"
 *          processPrice = 15$;
 *          servicePrice = 75$ /kết nối cho 10 kết nối đầu + 5$ * số kết nối (từ thứ 11 trở đi);
 *          premiumChannelPrice = 50$ / channel;
 * 
 *  totalBill = processPrice + servicePrice + premiumChannelPrice
 * 
 *  Kết quả:
 *   Xuất tổng tiền cáp totalBill
 */


// Ẩn hiện số kết nối 

function hiddenCheck() {
    if (document.getElementById("customerType").value == "DN") {
        document.getElementById("hiddenContent").style.display = "block";
    }
    else{
        document.getElementById("hiddenContent").style.display = "none";
    }
}

function billCalculate(){
    var processPrice = 0;
    var servicePrice = 0;
    var premiumChannelPrice = 0;
    var connectionCountPrice = 0;

    var premiumChannelCount = document.getElementById("premiumChannelCount").value*1;

    if(customerType == "ND"){
        processPrice = 4.5;
        servicePrice = 20.5;
        premiumChannelPrice = 7.5*premiumChannelCount;
    }
    else{
        processPrice = 15;
        premiumChannelPrice = 50*premiumChannelCount;

        var connectionCount = document.getElementById("connectionCount").value*1;
        if(connectionCount <= 10){
            servicePrice = 75;
        }
        else{
            servicePrice = 75 + (connectionCount - 10)*5;
        }
    }

    var currentFormat = Intl.NumberFormat("en-US");
    var result = "";

    var totalBill = processPrice + servicePrice + premiumChannelPrice;
    
    result += "<p>Tổng số tiền cáp là: " + currentFormat.format(totalBill) + "$</p>";
    document.getElementById("totalBill").innerHTML = result;
}