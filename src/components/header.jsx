import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <h1>User Registration Page</h1>
      <p>This user registration page, by Alexander Zou, shows a list of users. You can register, update, and delete users. Through the beauty of React, you can do all these at the same time without (hopefully!) any problems.</p>
      <p>This page uses a mock back-end provided by <a href="https://reqres.in/" target="_blank">Req | Res</a>. This means that when you refresh the page, the data will be reset back to the original version.</p>
      <p>Enjoy!</p>
    </div>
  )
};

export default Header;