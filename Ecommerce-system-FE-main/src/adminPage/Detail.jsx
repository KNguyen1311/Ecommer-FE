import React, { useState, useEffect } from 'react';
import axios from 'axios';



const DetailView = ({ detail, type, onClose }) => {
    if (!detail) return null; // Không hiển thị nếu chưa có dữ liệu
  
    return (
      <div className="detail-view bg-white shadow-lg p-4 rounded fixed top-1/4 left-1/4 w-1/2 z-50">
        <h2 className="text-lg font-semibold mb-4">
          Chi tiết {type === "user" ? "Người dùng" : "Shop"}
        </h2>
  
        {type === "user" && (
          <div>
            <p><strong>Tên:</strong> {detail.name}</p>
            <p><strong>Email:</strong> {detail.email}</p>
            <p><strong>Số điện thoại:</strong> {detail.phone}</p>
            <p><strong>Địa chỉ:</strong> {detail.address ? detail.address: 'Chưa cập nhật'}</p>
            
          </div>
        )}
        {type === "shop" && (
          <div>
            <p><strong>Tên Shop:</strong> {detail.name}</p>
            <p><strong>Số điện thoại:</strong> {detail.phone}</p>
            <p><strong>Địa chỉ:</strong> {detail.address ? detail.address : 'Đang cập nhật' }</p>
          </div>
        )}
  
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-600"
        >
          Đóng
        </button>
      </div>
    );
  };
  
  export default DetailView;