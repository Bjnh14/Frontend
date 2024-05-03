import { Col, Flex, Row, Typography, Button } from 'antd'
import { getNewProducts } from 'api/productsApi'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import { formatMoney } from 'utils'
import ImgForMen from 'assets/img/hinhdoc1.jpg'
import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom'
import PageForMen from '../home/path/forMen'
import PageForWomen from '../home/path/forWomen'

const ButtonCustom = styled(Button)`
  background-color: #756d6d;
  padding: 20px;
  color: #fff;
  width: 300px;
  height: 100%;
  font-size: 30px;
  border-radius: 30px;
`

const HomePage = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState([])
  const cx = classNames.bind(styles)

  useEffect(() => {
    getNewProducts().then((res) => {
      setProducts(res.data.newestProducts)
    })
  }, [])
  return (
    <>
      {!searchParams.get('type') && (
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
          <Row gutter={[8, 24]}>
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
          </Row>
          <div className={cx('section-for-men')}>
            <img src={ImgForMen} alt="" />
            <Flex
              vertical
              align="center"
              gap={10}
              style={{
                padding: '40px',
              }}
            >
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
              <ButtonCustom
                onClick={() => {
                  setSearchParams({
                    type: 'for-men',
                  })
                }}
              >
                See Details
              </ButtonCustom>
            </Flex>
          </div>
          <div className={cx('section-for-men')}>
            <img src={ImgForMen} alt="" />
            <Flex
              vertical
              align="center"
              gap={10}
              style={{
                padding: '40px',
              }}
            >
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
              <ButtonCustom
                onClick={() => {
                  setSearchParams({
                    type: 'for-women',
                  })
                }}
              >
                See Details
              </ButtonCustom>
            </Flex>
          </div>
        </>
      )}
      {searchParams.get('type') === 'for-men' && <PageForMen />}
      {searchParams.get('type') === 'for-women' && <PageForWomen />}
    </>
  )
}

export default HomePage
