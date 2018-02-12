import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MenuAccount(props) {
  return (
    <li>
      <Link className={props.menuClass} to={'/account'}>{props.linkTitle}</Link>
    </li>
  );
}

MenuAccount.propTypes = {
  title: PropTypes.string,
  menuClass: PropTypes.string,
  link: PropTypes.string,
  linkTitle: PropTypes.string
};

export default MenuAccount;
