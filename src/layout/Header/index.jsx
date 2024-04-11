import classNames from 'classnames/bind';
import styles from './style.module.scss';
import { Row, Col, Flex, Input } from 'antd';
import React, { useState } from 'react';
import { MagnifyingGlass, User, ShoppingCart } from '@phosphor-icons/react';
import { searchProducts } from 'api/productsApi';
import {Link, useNavigate} from "react-router-dom"

const cx = classNames.bind(styles);

function Header({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate()
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    // setSearchValue(useState);
    console.log(event.target.value)

  };

  const handleSearchSubmit = (value) => {
    const result = searchProducts(value).then(res => {
      console.log(res.data)
      navigate('/products/search',{state: res.data})
    // setSearchValue('') //set giá trị ban đầu

    })
  

    // if (event.key === 'Enter') {
    //   // Gọi hàm xử lý tìm kiếm từ khóa từ component cha
    //   onSearch(searchValue.trim());
    //   setSearchValue(''); // Xóa nội dung ô tìm kiếm sau khi gửi
    // }
  };

  return (
    <div className={cx('container')}>
      <div className={cx('navigation-container')}>
        <div className={cx('navigation')}>
          <Row align="middle">
            <Col span={12}>
              <Flex align="item" gap={10} style={{ minHeight: 40 }}>
                <Link to='/' className={cx('menu-item')}>HOME</Link>
                <Link to='/products' className={cx('menu-item')}>PRODUCT</Link>
                <Link to='/contact' className={cx('menu-item')}>CONTACT</Link>
                <Link to='/aboutUs' className={cx('menu-item')}>ABOUT US</Link>
              </Flex>
            </Col>
            <Col span={12}>
              <Flex align="center" gap={10} justify="flex-end">
                <Input
                  style={{ width: 300 }}
                  size="large"
                  placeholder="Search..."
                  suffix={
                    <MagnifyingGlass
                      size={32}
                      onClick={() =>handleSearchSubmit(searchValue)}
                      style={{ cursor: 'pointer' }}
                    />
                  }
                  value={searchValue}
                  onChange={handleSearchChange}
                 // call back
                  onPressEnter={() => handleSearchSubmit(searchValue)}
                />
                <User size={32} />
                <ShoppingCart size={32} />
              </Flex>
            </Col>
          </Row>
        </div>
      </div>
      <div className={cx('name-shop')}>AVACADO SHOP</div>
    </div>
  );
}

export default Header;
