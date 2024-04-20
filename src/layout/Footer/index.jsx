import classNames from 'classnames/bind'
import styles from './style.module.scss'
import React from 'react'
import { Typography } from 'antd'
import { Flex } from 'antd'
import { MapPinArea } from '@phosphor-icons/react'
const cx = classNames.bind(styles)

const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <h1>AVACADO SHOP</h1>
      <Flex vertical>
        <Typography>Shop System</Typography>
        <Flex gap={10}>
          <MapPinArea size={20} />
          <Typography>Ho Chi Minh Branch</Typography>
        </Flex>
        <Flex gap={10}>
          <MapPinArea size={20} />
          <Typography>
            100 Le Trong Tan Street, Tay Thanh Ward, Tan Phu District
          </Typography>
        </Flex>
        <Flex gap={10}>
          <MapPinArea size={20} />
          <Typography>
            50 Nguyen Hong Dao Street, Ward 14, Tan Binh District
          </Typography>
        </Flex>
      </Flex>
    </footer>
  )
}

export default Footer
