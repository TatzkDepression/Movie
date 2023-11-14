import toast from "react-hot-toast";
import { adminService } from "../../services/service";

export const themNguoiDung = {
  themNguoiDungAction: (thongTinNguoiDung) => {
    return async (dispatch) => {
      try {
        const result = await adminService.addUser(thongTinNguoiDung);
        if (result.data.statusCode === 200) {
          // console.log('result: ', result.data.content);
          toast.success("Thêm Người Dùng Thành Công");
        }
      } catch (errors) {
        console.log("errors: ", errors.reponse?.data);
      }
    };
  },
};
