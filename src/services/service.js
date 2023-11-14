import { https } from "./config";

export let userService = {
  login: (valueForm) => {
    return https.post("/api/QuanLyNguoiDung/DangNhap", valueForm);
  },
  register: (valueForm) => {
    return https.post("/api/QuanLyNguoiDung/DangKy", valueForm);
  },
};

export let movieService = {
  getList: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP14");
  },
  getDetail: (id) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
  },
  getMovieByTheather: () => {
    return https.get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap");
  },
  getDetailBooking: (id) => {
    return https.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
  },
  getToPurchase: (idBooking) => {
    return https.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idBooking}`
    );
  },
  bookingTicket: (ticket) => {
    return https.post("/api/QuanLyDatVe/DatVe", ticket);
  },
};
export let adminService = {
  getUserList: (query = "") => {
    return https.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung${query}`);
  },
  deleteUser: (taiKhoan) => {
    return https.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  },
  getUserDetailById: (taiKhoan) => {
    return https.post(
      `/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`
    );
  },
  updateUser: (payload) => {
    return https.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, payload);
  },
  addUser: (thongTinNguoiDung) => {
    return https.post(`/api/QuanLyNguoiDung/ThemNguoiDung`, thongTinNguoiDung);
  },

  layDanhSachPhim: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP14");
  },
  layThongTinPhimEdit: (maPhim) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  },
  capNhatPhimUpload: (formData) => {
    return https.post("/api/QuanLyPhim/CapNhatPhimUpload", formData);
  },
  xoaPhim: (maPhim) => {
    return https.delete(`/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  },
  getList: () => {
    return https.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP14");
  },
  getDetail: (id) => {
    return https.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
  },
  themPhimUploadHinh: (formData) => {
    return https.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData);
  },
};
