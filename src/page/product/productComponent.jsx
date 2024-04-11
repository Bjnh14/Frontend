import React from 'react';
import { Col, Flex, Row, Typography } from 'antd'
import { formatMoney } from 'utils'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'


const ProductsComponent = ({ products }) => {
  console.log(products)
  const cx = classNames.bind(styles)
  return (
    <Row>
    {products.map((item, index) => {
      console.log(item)
      return (
        <Col span={8} key={index}>
          <Flex vertical align="center">
            <div
              className={cx('img-product')}
              style={{
                transform: 'scale(1)',
                transition: 'transform 0.5s',
                cursor: 'pointer',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(0.8)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
            >
              <img src={item.product_size[0].images} alt="" />
            </div>

            <Typography
              style={{
                fontWeight: 300,
                fontSize: '30px',
              }}
            >
              {item.product_name}
            </Typography>
            <Typography>
              {item.price ? formatMoney(item.price) : 'N/A'}
            </Typography>
          </Flex>
        </Col>
      )
    })}
  </Row>
  )
};

export default ProductsComponent;