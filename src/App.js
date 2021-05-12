import React, { useState } from "react";
import { Layout, Menu } from "antd";

import { HeaderMenu } from "./component/HeaderMenu";

import "./styles/App.css";
import "antd/dist/antd.css";

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  return (
    <Layout className="App">
      <Sider>Sider</Sider>
      <Layout>
        <Header className="header">
          <HeaderMenu />
        </Header>

        <Content>Content</Content>

        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
