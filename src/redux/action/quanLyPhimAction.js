import toast from "react-hot-toast";
import { adminService } from "../../services/service";
import { SET_DANH_SACH_PHIM } from "./quanLyPhimType";

export const quanLyPhimAction = {
  layDanhSachPhimAction: (tenPhim = "") => {
    return async (dispatch) => {
      try {
        const result = await adminService.layDanhSachPhim(tenPhim);
        dispatch({
          type: SET_DANH_SACH_PHIM,
          payload: result.data.content,
        });
      } catch (errors) {
        console.log("errors: ", errors);
      }
    };
  },
  themPhimUploadHinh: (formData) => {
    return async (dispatch) => {
      try {
        let result = await adminService.themPhimUploadHinh(formData);
        toast.success("Thêm phim thành công!");
        console.log("result: ", result.data.content);
        dispatch(quanLyPhimAction.layDanhSachPhimAction());
      } catch (errors) {
        console.log("errors: ", errors.reponse?.data);
      }
    };
  },
};
