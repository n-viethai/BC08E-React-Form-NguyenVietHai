import React, { Component } from "react";
import { connect } from "react-redux";
import {
  chinhSuaSinhVienAction,
  handleSearchInput,
  timKiemSinhVien,
  xoaSinhVienAction,
} from "../../redux/actions/QuanLySinhVienAction";
import TimKiemSinhVien from "./TimKiemSinhVien";

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

  handleInputSearch = (event) => {
    let { name, value } = event.target;
    let newSinhVienTimKiem = { ...this.props.sinhVienTimKiem };
    newSinhVienTimKiem[name] = value;
    this.props.dispatch(handleSearchInput(newSinhVienTimKiem));
  };
  render() {
    return (
      <div className="mt-5 overflow-hidden">
        <div className="row bg-dark p-2 py-3">
          <div className="col-6">
            <div className="input-group">
              <input
                name="maSV"
                type="text"
                className="form-control"
                placeholder="Nhập mã sinh viên"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                onChange={this.handleInputSearch}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => {
                  this.props.dispatch(timKiemSinhVien(this.props.sinhVienTimKiem));
                }}
              >
                Tìm kiếm
              </button>
            </div>
          </div>
        </div>
        <table className="table">
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
        <TimKiemSinhVien />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien,
    sinhVienTimKiem: state.QuanLySinhVienReducer.sinhVienTimKiem,
  };
};

export default connect(mapStateToProps)(DanhSachSinhVien);
