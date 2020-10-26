import React from 'react';
import styled from 'styled-components'

const Header = ({ doneCount, todoCount }) => {

  return (
      <Navbar>
        <Title>TodoApp</Title>
        <Text>{`${todoCount} more todo, ${doneCount} done`}</Text>
      </Navbar>
  );
}

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;  
  width: 100%;
  margin-top: 15px;
`

const Title = styled.h1`
  margin: 0px 0px;
  `

const Text = styled.p`
  font-size: 16px;
  color: #898B8C;
`

export default Header;