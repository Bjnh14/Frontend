import { MagnifyingGlass, ShoppingCart, User } from '@phosphor-icons/react'
import { Col, Flex, Input, Menu, Row } from 'antd'
import classNames from 'classnames/bind'
import { useState } from 'react'
import styled from 'styled-components'
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom'
import { searchProducts } from 'api/productsApi';
// import Icon from '@ant-design/icons/lib/components/Icon'

const cx = classNames.bind(styles)

const MenuCustom = styled(Menu)`
  border-bottom: none;
  .ant-menu-title-content {
    font-weight: 500;
    font-size: 25px;
  }
  .ant-menu-item {
    &:hover::after {
      border-bottom-color: #514949 !important;
    }
  }
  .ant-menu-submenu:hover::after {
    border-bottom-color: #514949 !important;
  }
`

function Header({ onSearch }) {
  // let [searchParams, setSearchParams] = useSearchParams()
  const [current, setCurrent] = useState('mail')
  const navigate = useNavigate()

  const items = [
    {
      label: 'HOME',
      key: 'home',
      onClick: () => navigate('/'),
    },
    {
      label: 'PRODUCTS',
      key: 'products',
      children: [
        {
          label: 'FOR MEN',
          onClick: () => navigate('/'),
        },
        {
          label: 'FOR WOMEN',
          onClick: () => navigate('/'),
        },
      ],
    },
    {
      label: 'CONTACT',
      key: 'contact',
      onClick: () => navigate('/contact'),
    },
    {
      label: 'ABOUT',
      key: 'about',
      onClick: () => navigate('/aboutUs'),
    },
    // {
    //   Icon: User,
    //   key: 'user',
    //   onClick: () => navigate('/login'),
    // },
  ]

  const onClick = (e) => {
    setCurrent(e.key)
  }


  const [searchValue, setSearchValue] = useState('');
  // const navigate = useNavigate()
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
  };

  return (
    <div className={cx('container')}>
      <div className={cx('navigation-container')}>
        <div className={cx('navigation')}>
          <Row align="middle">
            <Col span={12}>
              <MenuCustom
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
              />
            </Col>
            {/* <Col span={12}>
              <Flex align="center" gap={10} justify="flex-end">
                <Input
                  style={{ width: 300 }}
                  size="large"
                  placeholder="Search..."
                  suffix={<MagnifyingGlass size={32} />}
                />
                <User size={32} />
                <ShoppingCart size={32} />
              </Flex>
            </Col> */}
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
                <User size={32}
                  onClick={() => navigate('/auth/log-in')}
                  style={{ cursor: 'pointer' }}
                />
                <ShoppingCart size={32} />
              </Flex>
            </Col>
          </Row>
        </div>
      </div>
      <div className={cx('name-shop')}>AVACADO SHOP</div>
    </div>
  )
}

export default Header
