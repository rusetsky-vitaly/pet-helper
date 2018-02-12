import React from 'react';
import Header from '../components/Header';
import Shelter from '../components/Shelter';

const shelters = [
  {
    name: 'Sirius',
    image: './src/images/sirius_ava.png',
    description: 'Each year Sirius dog Shelter in Kiev rescues ' +
                 'hundreds of dogs and cats who have been lost, discarded, abandoned, injured or neglected. ' +
                 'Sirius sta...',
    likesImg: [
      './src/images/Friends_Avatars/Pic_17.png',
      './src/images/Friends_Avatars/Pic_18.png',
      './src/images/Friends_Avatars/Pic_19.png',
      './src/images/Friends_Avatars/Pic_20.png',
      './src/images/Friends_Avatars/Pic_21.png',
      './src/images/Friends_Avatars/Pic_22.png'
    ],
    friends: '10',
    donations: '634',
    likes: '364',
    lastTwoLike: ['Dasha Rogoza', 'Olga Bobona']
  }
];

class Shelters extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <Header title='Shelters' />
        <div className='content'>
          {shelters.map((shelter, i) =>
            <Shelter key={i}
              name={shelter.name}
              image={shelter.image}
              description={shelter.description}
              likesImg={shelter.likesImg}
              friends={shelter.friends}
              donations={shelter.donations}
              likes={shelter.likes}
              lastTwoLike={shelter.lastTwoLike}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Shelters;
