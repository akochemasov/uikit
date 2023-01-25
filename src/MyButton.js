import React from 'react';

import './MyButton.css';
const MyButton = ({title = ''}) =>
  <button className={'btn'}>{title}</button>;

export default MyButton;
