import {
  CAP_NHAT_SINH_VIEN,
  CHINH_SUA_SINH_VIEN,
  // HANDLE_INPUT,
  THEM_SINH_VIEN,
  XOA_SINH_VIEN,
} from "../types/QuanLySinhVienType";

const initialState = {
  mangSinhVien: [
    // {
    //   maSV: "111",
    //   hoTenSV: "nguyễn văn A",
    //   soDienThoai: "13312321321",
    //   email: "hahahah@gmail.com",
    // },
    // {
    //   maSV: "222",
    //   hoTenSV: "nguyễn văn B",
    //   soDienThoai: "13312321321",
    //   email: "hahahah@gmail.com",
    // },
  ],
  sinhVien: {
    maSV: "",
    hoTenSV: "",
    soDienThoai: "",
    email: "",
  },
  sinhVienChinhSua: {
    maSV: "",
    hoTenSV: "",
    soDienThoai: "",
    email: "",
  },
};

export const QuanLySinhVienReducer = (state = initialState, action) => {
  switch (action.type) {
    // case HANDLE_INPUT: {
    //   state.sinhVien = action.sinhVien;
    //   return { ...state };
    // }
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
      state.sinhVienChinhSua = action.sinhVien;
      state.sinhVienChinhSua = { ...state.sinhVienChinhSua };
      return { ...state };
    }
    case CAP_NHAT_SINH_VIEN: {
      let index = [
        state.mangSinhVien.findIndex(
          (sinhVien) => sinhVien.maSV === action.sinhVien.maSV
        ),
      ];
      state.mangSinhVien[index] = action.sinhVien;
      state.mangSinhVien = [...state.mangSinhVien];
      return { ...state };
    }
    default:
      return { ...state };
  }
};
