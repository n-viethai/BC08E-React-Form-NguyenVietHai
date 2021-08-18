import React, { Component } from 'react'
import DangKySinhVien from './DangKySinhVien'
import DanhSachSinhVien from './DanhSachSinhVien'

export default class QuanLySinhVien extends Component {
    render() {
        return (
            <div className="container">
                <DangKySinhVien />
                <DanhSachSinhVien />
            </div>
        )
    }
}
