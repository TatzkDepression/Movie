import React from "react";
import { FileOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
const { Content, Sider } = Layout;
const items = [FileOutlined, HomeOutlined, UserOutlined].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));
const AdminPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  let user = JSON.parse(localStorage.getItem("USER"));
  if (user?.maLoaiNguoiDung == "KhachHang") {
    window.location.href = "/";
  }
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <div className="logo p-5">
          <img
            src="https:cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
            alt="..."
          />
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
            <Menu.Item key="8" icon={<UserOutlined />}>
              <NavLink to="/admin/users">Users</NavLink>
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />}>
              <NavLink to="/admin/users/adduser">Add user</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<FileOutlined />} title="Films">
            <Menu.Item key="10" icon={<FileOutlined />}>
              <NavLink to="/admin/films">Films</NavLink>
            </Menu.Item>
            <Menu.Item key="11" icon={<FileOutlined />}>
              <NavLink to="/admin/films/addnew">Add new</NavLink>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="99" icon={<HomeOutlined />}>
            <NavLink to="/">Back to home</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout
        className="site-layout"
        style={{
          padding: 0,
        }}
      >
        <Header className="" style={{ padding: 0 }}></Header>
        <Content
          style={{
            margin: " 16px 0",
            overflow: "initial",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminPage;
