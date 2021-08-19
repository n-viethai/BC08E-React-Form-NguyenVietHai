import React, { Component } from "react";
import { connect } from "react-redux";
import {
  chinhSuaSinhVienAction,
  xoaSinhVienAction,
} from "../../redux/actions/QuanLySinhVienAction";

class DanhSachSinhVien extends Component {
  renderTableSinhVien = () => {
    let { mangSinhVien } = this.props;
    return mangSinhVien.map((sinhVien, index) => {
      return (
        <tr key={index}>
          <td>{sinhVien.maSV}</td>
          <td>{sinhVien.hoTenSV}</td>
          <td>{sinhVien.soDienThoai}</td>
          <td>{sinhVien.email}</td>
          <td>
            <button
              className="btn btn-outline-danger mx-3"
              onClick={() => {
                this.props.dispatch(xoaSinhVienAction(sinhVien.maSV));
              }}
            >
              Xóa
            </button>
            <button
              className="btn btn-outline-warning"
              onClick={() => {
                this.props.dispatch(chinhSuaSinhVienAction(sinhVien));
              }}
            >
              Chỉnh sửa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <table className="table mt-5">
          <thead className="bg-dark text-white">
            <tr>
              <th>Mã sinh viên</th>
              <th>Họ và tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderTableSinhVien()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien,
  };
};

export default connect(mapStateToProps)(DanhSachSinhVien);
