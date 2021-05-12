import React, { useState } from "react";
import { Menu } from "antd";

import Logo from "../assets/img/logo.png";

export const HeaderMenu = () => {
  return (
    <React.Fragment>
      <div className="logo">
        <img src={Logo} alt="booking-app-logo" />
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </React.Fragment>
  );
};
