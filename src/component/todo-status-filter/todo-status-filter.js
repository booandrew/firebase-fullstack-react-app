import React from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { FilterOutlined } from '@ant-design/icons';

const TodoStatusFilter = ({ onToggleFilter }) => {

  const buttons = [
    { label: 'Active' },
    { label: 'All' },
    { label: 'Done' }
  ].map(({ label }) => <Menu.Item
    value={label}
    key={label}
    onClick={() => onToggleFilter(label)} >{label}</Menu.Item>)


  const menu = (
    <Menu>
      {buttons}
    </Menu>
  );

  return (
    <Dropdown overlay={menu}>
      <Button size='large' icon={<FilterOutlined />} />
    </Dropdown>
  );
}

export default TodoStatusFilter;