import React, { useState } from 'react';
import './LoginForm.scss';
import { loginUser } from '../../api/userApi'; // Import function to check login from your API

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData); // Gọi hàm API để kiểm tra đăng nhập
      if (response.success) {
        console.log('Đăng nhập thành công!');
        // Redirect to dashboard or perform other actions for successful login
      } else {
        console.log('Đăng nhập thất bại:', response.message);
        // Hiển thị thông báo lỗi hoặc thực hiện các hành động khác cho đăng nhập thất bại
      }
    } catch (error) {
      console.error('Lỗi khi đăng nhập:', error);
      // Xử lý lỗi nếu có
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Mật khẩu:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
