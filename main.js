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
