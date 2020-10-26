import { Input } from 'antd';
import React from 'react';

const SearchPanel = ({onSearch, value}) => {

  return (
    <>
      <Input
        placeholder="type to search"
        size='large'
        onChange={onSearch}
        value={value}
      />
    </>
  );
}

export default SearchPanel;