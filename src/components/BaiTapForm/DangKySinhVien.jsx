import React, { Component } from "react";
import { connect } from "react-redux";
import {
  capNhatSinhVienAction,
  // handleInputAction,
  themSinhVenAction,
} from "../../redux/actions/QuanLySinhVienAction";

class DangKySinhVien extends Component {
  constructor(props){
    super(props)
    this.state = {
      sinhVien: {
        maSV: "111",
        hoTenSV: "",
        soDienThoai: "",
        email: "",
      },
      validation: {
        maSV: "",
        hoTenSV: "",
        soDienThoai: "",
        email: "",
      },
    }
  }
  handleChangeInput = (event) => {
    let { name, value } = event.target;
    let newSinhVien = this.state.sinhVien;
    newSinhVien[name] = value;
    let attrValue = "";
    let regex;

    switch (event.target.getAttribute("validation")) {
      case "maSV": {
        attrValue = "Mã SV";
        regex = /^[0-9]+$/;
        break;
      }
      case "soDienThoai": {
        attrValue = "Số điện thoại";
        regex = /^[0-9]+$/;
        break;
      }
      case "email": {
        attrValue = "Email";
        regex =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        break;
      }
      case "hoTenSV": {
        attrValue = "Họ tên";
        regex =
          /^[a-z A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/;
        break;
      }
      default:
        return "";
    }

    let newValidaiton = { ...this.state.validation };
    let messageError = "";

    if (value === "") {
      messageError = attrValue + " không được bỏ trống!";
    } else {
      if (regex) {
        if (attrValue === "Mã SV") {
          if (!regex.test(value) || value.length > 3 || value.length < 3) {
            messageError = "Mã SV là số có 3 chữ số! Ví dụ : 123";
          }
        }
        if (attrValue === "Họ tên") {
          if (!regex.test(value.trim())) {
            messageError = "Họ tên SV chỉ bao gồm ký tự!";
          }
        }
        if (attrValue === "Số điện thoại") {
          if (!regex.test(value) || value.length > 10 || value.length < 10) {
            messageError = "Số điện thoại là số có 10 chữ số!";
          }
        }
        if (attrValue === "Email") {
          if (!regex.test(value)) {
            messageError = "Email không đúng định dạng!";
          }
        }
      }
    }
    newValidaiton[name] = messageError;
    this.setState({
      sinhVien: newSinhVien,
      validation: newValidaiton,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;
    for (let key in this.state.sinhVien) {
      if (this.state.sinhVien[key] === "") {
        valid = false;
        break;
      }
    }
    for (let key in this.state.validation) {
      if (this.state.validation[key] !== "") {
        valid = false;
        break;
      }
    }
    if (!valid) {
      alert("Dữ liệu nhập không hợp lệ!");
      return;
    }
    this.props.dispatch(themSinhVenAction({ ...this.state.sinhVien }));
  };

  // cách 1
  static getDerivedStateFromProps(newProps, currentState) {
    if (newProps.sinhVienChinhSua.maSV !== currentState.sinhVien.maSV) {
      // return về state mới
      return {
        ...currentState,
        sinhVien: newProps.sinhVienChinhSua,
      };
    }
    return currentState;
  }

  // cách 2 : dễ hơn nhưng không tối ưu performance bằng cách 1
  // chạy trước render, chạy sau khi props thay đổi
  // componentWillReceiveProps(newProps) {
  //   this.setState ({
  //     sinhVien : newProps.sinhVienChinhSua
  //   })
  // }
  render() {
    let { maSV, hoTenSV, soDienThoai, email } = this.state.sinhVien;
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
                    validation="maSV"
                    value={maSV}
                    name="maSV"
                    type="text"
                    className="form-control"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger mt-2">
                    {this.state.validation.maSV}
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>Số điện thoại</p>
                  <input
                    validation="soDienThoai"
                    value={soDienThoai}
                    name="soDienThoai"
                    type="text"
                    className="form-control"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger mt-2">
                    {this.state.validation.soDienThoai}
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <div className="form-group">
                  <p>Họ và tên</p>
                  <input
                    validation="hoTenSV"
                    value={hoTenSV}
                    name="hoTenSV"
                    type="text"
                    className="form-control"
                    onChange={this.handleChangeInput}
                  />
                  <p className="text-danger mt-2">
                    {this.state.validation.hoTenSV}
                  </p>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <p>Email</p>
                  <input
                    validation="email"
                    value={email}
                    name="email"
                    type="email"
                    className="form-control"
                    onChange={this.handleChangeInput}
                  />
                  <p className="mt-2 text-danger">
                    {this.state.validation.email}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <button type="submit" className="btn btn-success">
                Thêm sinh viên
              </button>
              <button
                type="button"
                className="btn btn-warning text-white mx-3"
                onClick={() => {
                  this.props.dispatch(
                    capNhatSinhVienAction(this.state.sinhVien)
                  );
                }}
              >
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
    sinhVienChinhSua: state.QuanLySinhVienReducer.sinhVienChinhSua,
  };
};
export default connect(mapStateToProps)(DangKySinhVien);
