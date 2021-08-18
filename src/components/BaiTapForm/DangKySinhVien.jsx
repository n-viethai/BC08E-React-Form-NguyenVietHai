import React, { Component } from "react";
import { connect } from "react-redux";
import {
  handleInputAction,
  themSinhVenAction,
} from "../../redux/actions/QuanLySinhVienAction";

class DangKySinhVien extends Component {
//   state = {
//     sinhVien: {
//       maSV: "",
//       hoTenSV: "",
//       soDienThoai: "",
//       email: "",
//     },
//   };
  handleChangeInput = (event) => {
    let { name, value } = event.target;
    let newSinhVien = {...this.props.sinhVien};
    newSinhVien[name] = value;
    this.props.dispatch(handleInputAction(newSinhVien));
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(themSinhVenAction(this.props.sinhVien));
  };
  render() {
    return (
      <div>
        <form className="card" onSubmit={this.handleSubmit}>
          <div className="p-3 bg-dark text-white fs-4 fw-bold">
            Thông tin sinh viên
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <p>Mã sinh viên</p>
                  <input
                    name="maSV"
                    type="text"
                    className="form-control"
                    onChange={this.handleChangeInput}
                  />
                </div>
                <div className="form-group mt-3">
                  <p>Số điện thoại</p>
                  <input
                    name="soDienThoai"
                    type="text"
                    className="form-control"
                    onChange={this.handleChangeInput}
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>Họ và tên</p>
                  <input
                    name="hoTenSV"
                    type="text"
                    className="form-control"
                    onChange={this.handleChangeInput}
                  />
                </div>
                <div className="form-group mt-3">
                  <p>Email</p>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    onChange={this.handleChangeInput}
                  />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <button type="submit" className="btn btn-success">
                Thêm sinh viên
              </button>
              <button type="button" className="btn btn-warning text-white mx-3">
                Cập nhật sinh viên
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sinhVien: state.QuanLySinhVienReducer.sinhVien,
  };
};
export default connect(mapStateToProps)(DangKySinhVien);
