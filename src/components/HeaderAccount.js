import React from 'react';
import PropTypes from 'prop-types';

function HeaderAccount(props) {
  return (
    <header style={{backgroundImage: `url(${props.background})`}} className='account'>
      <span style={{backgroundImage: `url(${props.avatar})`}}>&nbsp;</span>
      <span>{props.name}</span>
    </header>
  );
}

HeaderAccount.propTypes = {
  name: PropTypes.string,
  background: PropTypes.string,
  avatar: PropTypes.string
};

export default HeaderAccount;
