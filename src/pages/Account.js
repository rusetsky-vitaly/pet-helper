import React from 'react';
import HeaderAccount from '../components/HeaderAccount';
import MenuAccount from '../components/MenuAccount';

const user = [
  {
    avatar: './src/images/Menu/Pic_23.png',
    background: './src/images/Menu/Pic_30.png',
    name: 'Gustav Klimt'
  }
];
const menuItems = [
  { link: '/favourite',
    title: 'Favourite',
    menuClass: 'favourite'
  },
  { link: '/cards',
    title: 'Cards',
    menuClass: 'cards'
  },
  { link: '/history',
    title: 'History of Payments',
    menuClass: 'history'
  },
  { link: '/reports',
    title: 'Reports of your Donations',
    menuClass: 'reports'
  },
  { link: '/settings',
    title: 'Settings',
    menuClass: 'settings'
  },
  { link: '/sign-out',
    title: 'Sign out',
    menuClass: 'sign-out'
  }
];

class Account extends React.Component {
  render() {
    return (
      <div className='acc-container'>
        <HeaderAccount
          avatar={user[0].avatar}
          background={user[0].background}
          name={user[0].name} />
        <ul>
          {menuItems.map((item, i) => (
            <MenuAccount key={i}
              link={item.link}
              linkTitle={item.title}
              menuClass={item.menuClass}/>)
          )}
        </ul>
      </div>
    );
  }
}

export default Account;

