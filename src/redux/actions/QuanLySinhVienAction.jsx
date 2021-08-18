import {
  CHINH_SUA_SINH_VIEN,
  HANDLE_INPUT,
  THEM_SINH_VIEN,
  XOA_SINH_VIEN,
} from "../types/QuanLySinhVienType";

export const handleInputAction = (sinhVien) => {
  return {
    type: HANDLE_INPUT,
    sinhVien,
  };
};

export const themSinhVenAction = (sinhVien) => {
  return {
    type: THEM_SINH_VIEN,
    sinhVien,
  };
};

export const xoaSinhVienAction = (maSV) => {
  return {
    type: XOA_SINH_VIEN,
    maSV,
  };
};

export const chinhSuaSinhVienAction = () => {
  return {
    type: CHINH_SUA_SINH_VIEN,
  };
};
