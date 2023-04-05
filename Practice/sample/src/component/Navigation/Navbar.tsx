import { Avatar, Menu, Space } from 'antd';
import React from 'react';
import type { MenuProps } from 'antd/es/menu';
import '../../styles/navabar.css';
import logo from '../../assets/logo.svg';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key?: React.Key | null): MenuItem {
  return {
    key,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Home', '1'),
  getItem('About Me', '2'),
  getItem('Project', '3'),
  getItem('Contact', '4'),
];
export default function Navbar() {
  return (
    <>
      <Space>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          overflowedIndicator
        />
      </Space>
    </>
  );
}
