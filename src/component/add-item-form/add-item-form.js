import { Input, Button} from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

const AddItemForm = ({ onAdded }) => {

  const [label, setLabel] = useState('')

  const onLabelChange = (e) => {
    setLabel(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault(e)
    if (label) {
      onAdded(label)
      setLabel('')
    } else {
      alert('Эх, если бы можно было ничего не делать...')
    }
  }


  return (
    <CustomForm onSubmit={onSubmit}>
        <InputWrapper>
          <Input placeholder="type new task" onChange={onLabelChange} value={label} size="large" />
        </InputWrapper>
        <Button
          type="primary"
          size='large'
          onClick={onSubmit}>
          Add Task
      </Button>
    </CustomForm>
  );
}

const InputWrapper = styled.div`
  flex: .97;
  font-size: 16px;
`

const CustomForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

export default AddItemForm;