import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <header className='page_header'>{props.title}</header>
  );
}

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
