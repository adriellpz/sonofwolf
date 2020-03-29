import React, { Component } from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import "../index.css";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  TeamOutlined,
  CameraOutlined,
  CommentOutlined
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

class menu extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <div className="logo" />
            <img src={logo} class="App-logo" alt="logo"></img>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <HomeOutlined />
                <Link to="/" className="nav-text">
                  Home
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <CameraOutlined />
                <Link to="/photography" className="nav-text">
                  Photography
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <AppstoreOutlined />
                <Link to="/gallery" className="nav-text">
                  Gallery
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <TeamOutlined />
                <Link to="/About" className="nav-text">
                  About
                </Link>
              </Menu.Item>
              <Menu.Item key="5">
                <CommentOutlined />
                <Link to="/contact" className="nav-text">
                  Contact Us
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header
              className="site-layout-sub-header-background"
              style={{ padding: 0 }}
            />
            <Content />
            <Footer style={{ textAlign: "center" }}>
              Son of Wolf Photography
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default menu;
