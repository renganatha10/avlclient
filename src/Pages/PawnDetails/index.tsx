import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const PawnDetails: React.FC = () => {
  return (
    <div>
      <Search placeholder="Search By Pawn" enterButton />
    </div>
  );
};

export default PawnDetails;
