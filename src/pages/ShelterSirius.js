import React from 'react';
import DetailShelter from '../components/DetailShelter';
import Header from '../components/Header';
import Unit from '../components/Unit';

const shelter = [
  {
    shelter: '“Sirius” Shelter',
    image: '../src/images/sirius_ava.png',
    about: 'Each year Sirius dog Shelter in Kiev ' +
    'rescues hundreds of dogs and cats who have ' +
    'been lost, discarded, abandoned, injured or ' +
    'neglected. Sirius sta...',
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
    shelterPets: [
      '../src/images/Sirius_Our-Pets_List/Pic_7.png',
      '../src/images/Sirius_Our-Pets_List/Pic_8.png',
      '../src/images/Sirius_Our-Pets_List/Pic_9.png',
      '../src/images/Sirius_Our-Pets_List/Pic_10.png'
    ]
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

class ShelterSirius extends React.Component {
  render() {
    return (
      <div className='pet-detail'>
        <Header title={shelter[0].shelter} />
        <DetailShelter shelter={shelter[0].shelter}
          name={shelter[0].name}
          age={shelter[0].age}
          breed={shelter[0].breed}
          sex={shelter[0].sex}
          image={shelter[0].image}
          likesImg={shelter[0].likesImg}
          friends={shelter[0].friends}
          donations={shelter[0].donations}
          likes={shelter[0].likes}
          lastTwoLike={shelter[0].lastTwoLike}
          curator={shelter[0].curator}
          about={shelter[0].about}
          phone={shelter[0].phone}
          fb={shelter[0].fb}
          photos={shelter[0].photos}
          videos={shelter[0].videos}
          shelterPets={shelter[0].shelterPets}
        />
        <div className='detail-header'>This Shelter also need:</div>
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

export default ShelterSirius;

