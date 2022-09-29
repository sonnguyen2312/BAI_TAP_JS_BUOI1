//Bài tập 1: Tính tiền lương nhân viên
document.getElementById('btnTinhLuong').onclick = function () {
    var heSoLuong = 100000;
    var soNgayLam = Number(document.getElementById('soNgayLam').value);
    var tienLuong = soNgayLam * heSoLuong;
    document.getElementById('ketQuaBai1').innerHTML = tienLuong + ' VND';
}
//Bài 2: Tính giá trị trung bình
document.getElementById('btnTinhGiaTriTrungBinh').onclick = function () {
    var soThu1 = Number(document.getElementById('soThu1').value);
    var soThu2 = Number(document.getElementById('soThu2').value);
    var soThu3 = Number(document.getElementById('soThu3').value);
    var soThu4 = Number(document.getElementById('soThu4').value);
    var soThu5 = Number(document.getElementById('soThu5').value);
    var giaTriTrungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
    document.getElementById('ketQuaBai2').innerHTML = giaTriTrungBinh;
}
//Bài tập 3: Quy đổi tiền
document.getElementById('btnQuyDoi').onclick = function () {
    var tyGia = 23500;
    var soTienUsd = Number(document.getElementById('soTienUsd').value);
    var tienQuyDoi = soTienUsd * tyGia;
    document.getElementById('ketQuaBai3').innerHTML = tienQuyDoi + ' VND';
}
//Bài 4: Tính Diện tích, chu vi hình chữ nhật
document.getElementById('btnTinhChuViDienTich').onclick = function () {
    var chieuDai = Number(document.getElementById('chieuDai').value);
    var chieuRong = Number(document.getElementById('chieuRong').value);
    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;
    document.getElementById('ketQuaBai4').innerHTML = 'Diện Tích HCN: ' + dienTich + '<hr /> Chu Vi HCN: ' + chuVi;
}
//Bài 5: Tính tổng 2 ký số
document.getElementById('btnTinhTongKySo').onclick = function () {
    var kySo = Number(document.getElementById('kySo').value);
    var hangChuc = Math.floor(kySo / 10); 
    var hangDonVi = kySo % 10;
    var tongKySo = hangChuc + hangDonVi;
    document.getElementById('ketQuaBai5').innerHTML = tongKySo;
}