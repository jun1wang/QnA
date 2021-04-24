import React from 'react';
import { UserIcon } from './Icons';

export const Header = () => {
  const handleSearchInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };
  return (
    <div>
      <a href="./"> Q & A </a>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchInputChanged}
      />
      <a href="./signin">
        <UserIcon />
        <span>Sign In</span>
      </a>
    </div>
  );
};
