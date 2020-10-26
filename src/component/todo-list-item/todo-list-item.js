import { Button, Dropdown, Input, List, Menu } from 'antd';
import Text from 'antd/lib/typography/Text';
import React, { useState } from 'react';
import styled from 'styled-components';
import { EllipsisOutlined } from '@ant-design/icons';

const TodoListItem = ({
  label,
  onDeleted,
  onToggleImportant,
  onToggleDone,
  done,
  important,
  id,
  onEditSubmit}) => {


  const [isEdited, setIsEdited] = useState(false)
  const [value, setValue] = useState(label)

  const onValueChange = (e) => {
    setValue(e.target.value)
  }

  const onEdit = () => {
    setIsEdited(true)
  }

  const onSubmit = () => {
    onEditSubmit(value, id)
    setIsEdited(false)
  }

  const buttons = [
    { label: 'Important', purpose: onToggleImportant },
    { label: 'Edit', purpose: onEdit },
    { label: 'Delete', purpose: onDeleted }
  ].map(({ label, purpose }) => <Menu.Item
    key={label}
    onClick={purpose} >{label}</Menu.Item>)


  const menu = (
    <Menu>
      {buttons}
    </Menu>
  );

  return (
    <List.Item>
      <Item>

        <TextWrapper>
          {isEdited ?
            <Input placeholder="type new task" onBlur={onSubmit} onChange={onValueChange} value={value} size="middle" />
            :
            <CustomText
              delete={done}
              strong={important}
              mark={important}
              onClick={onToggleDone}>
              {label}
            </CustomText>
          }

        </TextWrapper>

        <ButtonWrapper>
          <Dropdown overlay={menu}>
            <Button size='large' icon={<EllipsisOutlined />} />
          </Dropdown>
        </ButtonWrapper>

      </Item>
    </List.Item>
  );
}

const TextWrapper = styled.div`
  word-wrap: break-word;
  width: 250px;
  @media (max-width: 480px) {
    width: 200px;
  }
  
`

const CustomText = styled(Text)`
  font-size: 1.2rem;
  cursor: pointer;

  @media (max-width: 992px) {
    font-size: 1rem;
  }
`

const ButtonWrapper = styled.span`
  display: flex;
  justify-content: flex-end;
  width: 50px;
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export default TodoListItem;