import React from 'react';
import DetailInfo from '../components/DetailInfo';
import Header from '../components/Header';
import Unit from '../components/Unit';

const pet = [
  {
    shelter: '“Sirius” Shelter',
    name: 'Dido',
    age: '2 years',
    breed: 'Labrador',
    sex: 'Male',
    image: '../src/images/Pets_Avatars/Pic_1.png',
    likesImg: [
      '../src/images/Friends_Avatars/Pic_17.png',
      '../src/images/Friends_Avatars/Pic_18.png',
      '../src/images/Friends_Avatars/Pic_19.png',
      '../src/images/Friends_Avatars/Pic_20.png',
      '../src/images/Friends_Avatars/Pic_21.png',
      '../src/images/Friends_Avatars/Pic_22.png'
    ],
    friends: '10',
    donations: '634',
    likes: '364',
    lastTwoLike: ['Dasha Rogoza', 'Olga Bobona'],
    curator: 'Oleksii Bulat',
    about: 'Adopt Dido',
    phone: '(063) 356 35 67',
    fb: 'https://www.facebook.com/',
    photos: [
      '../src/images/Photo_Reports/Pic_11.png',
      '../src/images/Photo_Reports/Pic_12.png',
      '../src/images/Photo_Reports/Pic_13.png'
    ],
    videos: [
      '../src/images/Video_Reports/Pic_14.png',
      '../src/images/Video_Reports/Pic_15.png',
      '../src/images/Video_Reports/Pic_16.png'
    ],
    generalInformation: 'Dido cute and mobile 4 months ' +
    'Labrador puppy who long text kfkdh gjfjf kfkfk ' +
    'long long long long long long long long long ' +
    'long really needs a house text text text text.',
    medicalCard: ['Treated from lice', 'Vaccination against mites', 'Cured of worms']
  }
];

const units = [
  {
    title: 'Animal Medicine',
    image: '../src/images/Stuff_Avatars/Pic_5.png',
    name: '“Sirius” Shelter',
    description: 'Medicine is the science' +
    ' and practice of the' +
    ' diagnosis, treatment,' +
    ' and prevention of ' +
    'disease.',
    likesImg: [
      '../src/images/Friends_Avatars/Pic_17.png',
      '../src/images/Friends_Avatars/Pic_18.png',
      '../src/images/Friends_Avatars/Pic_19.png'
    ],
    friends: '3',
    donations: '25',
    likes: '364',
    lastTwoLike: ['Dasha Rogoza', 'Olga Bobona'],
    left: '486',
    percent: '81%'
  }
];

class PetDido extends React.Component {
  render() {
    return (
      <div className='pet-detail'>
        <Header title={pet[0].name} />
        <DetailInfo shelter={pet[0].shelter}
          name={pet[0].name}
          age={pet[0].age}
          breed={pet[0].breed}
          sex={pet[0].sex}
          image={pet[0].image}
          likesImg={pet[0].likesImg}
          friends={pet[0].friends}
          donations={pet[0].donations}
          likes={pet[0].likes}
          lastTwoLike={pet[0].lastTwoLike}
          curator={pet[0].curator}
          about={pet[0].about}
          phone={pet[0].phone}
          fb={pet[0].fb}
          photos={pet[0].photos}
          videos={pet[0].videos}
          generalInformation={pet[0].generalInformation}
          medicalCard={pet[0].medicalCard}
        />
        <div className='detail-header'>This Pet also need:</div>
        <div className='content'>
          {units.map((item, i) =>
            <Unit key={i}
              title={item.title}
              name={item.name}
              image={item.image}
              description={item.description}
              likesImg={item.likesImg}
              friends={item.friends}
              donations={item.donations}
              likes={item.likes}
              lastTwoLike={item.lastTwoLike}
              left={item.left}
              percent={item.percent} />
          )}
        </div>
      </div>
    );
  }
}

export default PetDido;

