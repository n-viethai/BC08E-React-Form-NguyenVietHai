import {
  CHINH_SUA_SINH_VIEN,
  HANDLE_INPUT,
  THEM_SINH_VIEN,
  XOA_SINH_VIEN,
} from "../types/QuanLySinhVienType";

const initialState = {
  mangSinhVien: [],
  sinhVien: {
    maSV: "",
    hoTenSV: "",
    soDienThoai: "",
    email: "",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_INPUT: {
      state.sinhVien = action.sinhVien;
      return { ...state };
    }
    case THEM_SINH_VIEN: {
      state.mangSinhVien = [...state.mangSinhVien, action.sinhVien];
      return { ...state };
    }
    case XOA_SINH_VIEN: {
      state.mangSinhVien = [
        ...state.mangSinhVien.filter(
          (sinhVien) => sinhVien.maSV !== action.maSV
        ),
      ];
      return { ...state };
    }
    case CHINH_SUA_SINH_VIEN: {
      return { ...state };
    }
    default:
      return { ...state };
  }
};
