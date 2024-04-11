import { Col, Flex, Row, Typography } from 'antd'
import { getNewProducts } from 'api/productsApi'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { formatMoney } from 'utils'
import ImgForMen from 'assets/img/hinhdoc1.jpg'

const HomePage = () => {
  const [products, setProducts] = useState([])
  const cx = classNames.bind(styles)

  useEffect(() => {
    getNewProducts().then((res) => {
      setProducts(res.data.newestProducts)
    })
  }, [])
  console.log(products)
  return (
    <>
      <div className={cx('banner')}>
        <video className={cx('banner-video')} autoPlay loop muted>
          <source
            src="MO&Co. _ China Power _ Spring 2023.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className={cx('content')}>
        <Flex vertical align="center">
          <Typography
            style={{
              fontWeight: 500,
              fontSize: '40px',
            }}
          >
            NEW COLLECTION
          </Typography>
          <Typography
            style={{
              fontWeight: 300,
              fontSize: '25px',
            }}
          >
            Luxurious design, soft material, simple colors
          </Typography>
        </Flex>
      </div>
      {products ? 
      (<Row>
        {products.map((item, index) => {
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
      </Row>) : <></>
      }
      <div className={cx('section-for-men')}>
        <img src={ImgForMen} alt="" />
        <Flex vertical align="center">
          <Typography
            style={{
              fontWeight: 500,
              fontSize: '40px',
            }}
          >
            FOR MEN
          </Typography>
          <Typography
            style={{
              fontWeight: 300,
              fontSize: '25px',
            }}
          >
            Minimalist design specifically for men
          </Typography>
        </Flex>
      </div>
    </>
  )
}

export default HomePage
