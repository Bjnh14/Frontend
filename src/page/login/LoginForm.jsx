import React, { useState } from 'react';
import './LoginForm.scss';
import { loginUser } from 'api/userApi';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null); // Add a new state variable for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
     ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await loginUser(formData);

      if (response) {
        setSuccess('Đăng nhập thành công!'); // Set success message
        console.log('Đăng nhập thành công!');
        // Redirect to dashboard or perform other actions for successful login
      } else {
        setError(response.message); // Set error message only when login fails
        console.log('Đăng nhập thất bại:', response.message);
      }
    } catch (error) {
      setError(error.message); // Set error message
      console.error('Lỗi khi đăng nhập:', error);
    } finally {
      setLoading(false);
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
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>} { /*Display success message*/ }
      <button type="submit" disabled={loading}>Login</button>
    </form>
  );
};

export default LoginForm;