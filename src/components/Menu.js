import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { link: '/',
    title: 'Home',
    menuClass: 'home'
  },
  { link: '/stuff',
    title: 'Stuff',
    menuClass: 'stuff'
  },
  { link: '/shelters',
    title: 'Shelters',
    menuClass: 'shelters'
  },
  { link: '/account',
    title: 'Account',
    menuClass: 'account'
  }
];

function Menu() {
  return (
    <footer>
      <nav>
        <ul>
          {menuItems.map((item, i) =>
            (<li className={item.menuClass + (location.pathname === item.link ? ' active' : '')} key={i}>
              <Link to={item.link}>&nbsp;</Link>
            </li>)
          )}
        </ul>
      </nav>
    </footer>
  );
}

export default Menu;
