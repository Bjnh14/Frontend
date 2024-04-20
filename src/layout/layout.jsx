import { UserOutlined } from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import React from 'react'
const { Header, Content, Sider } = Layout

const menu = [
  {
    key: 1,
    name: 'User',
    icon: UserOutlined,
  },
  {
    key: 2,
    name: 'Product',
    icon: UserOutlined,
  },
  {
    key: 3,
    name: 'Order',
    icon: UserOutlined,
  },
]
const items2 = menu.map((menu, index) => {
  const key = String(index)
  return {
    key: `sub${key}`,
    icon: React.createElement(menu.icon),
    label: menu.name,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1
      return {
        key: subKey,
        label: `option${subKey}`,
      }
    }),
  }
})

const LayoutDashboard = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      ></Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
              }}
              items={items2}
            />
          </Sider>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Content>
    </Layout>
  )
}
export default LayoutDashboard
