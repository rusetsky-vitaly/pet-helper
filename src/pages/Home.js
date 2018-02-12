import React from 'react';

import Header from '../components/Header';
import Tags from '../components/Tags';
import Pet from '../components/Pet';

const pets = [
  {
    name: 'Dido',
    tags: ['dogs', 'puppies', 'male', 'purebread', 'brown', 'grafted'],
    image: './src/images/Pets_Avatars/Pic_1.png',
    shelter: 'Sirius',
    age: '4 months',
    breed: 'Labrador',
    sex: 'Male'
  },
  {
    name: 'Boba',
    tags: ['dogs', 'puppies', 'male', 'purebread'],
    image: './src/images/Pets_Avatars/Pic_4.png',
    shelter: 'Sirius',
    age: '2 years',
    breed: 'Labrador',
    sex: 'Male'
  }
];

class Home extends React.Component {
  render() {
    return (
      <div className='wrapper'>
        <Header title='Pets' />
        <Tags />
        <div className='content'>
          {pets.map((item, i) =>
            <Pet key={i}
              name={item.name}
              tags={item.tags}
              image={item.image}
              shelter={item.shelter}
              age={item.age}
              breed={item.breed}
              sex={item.sex} />
          )}
        </div>
      </div>
    );
  }
}

export default Home;
