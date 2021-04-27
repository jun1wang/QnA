import React from 'react';
import { UserIcon } from './Icons';
import styles from './Header.module.css';

export const Header = () => {
  const handleSearchInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };
  return (
    <div className={styles.container}>
      <a href="./"> Q&A Knowledge Project </a>
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
