import classNames from 'classnames/bind'
import styles from './style.module.scss'
// import { Row, Col, Flex, Input } from 'antd'
import React from 'react'
const cx = classNames.bind(styles)
function Footer() {
  return (
    <footer className={cx('footer')} >
      <h1> Avocado</h1>
      <h2>Shop System</h2>
      <p>hgehdf</p>
    </footer>
  );
};


export default Footer
