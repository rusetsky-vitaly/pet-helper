import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/Header';
import Unit from '../components/Unit';

const units = [
  {
    title: 'Animal Medicine',
    image: './src/images/Stuff_Avatars/Pic_5.png',
    name: '“Sirius” Shelter',
    description: 'Medicine is the science' +
                 ' and practice of the' +
                 ' diagnosis, treatment,' +
                 ' and prevention of ' +
                 'disease.',
    likesImg: [
      './src/images/Friends_Avatars/Pic_17.png',
      './src/images/Friends_Avatars/Pic_18.png',
      './src/images/Friends_Avatars/Pic_19.png'
    ],
    friends: '3',
    donations: '25',
    likes: '364',
    lastTwoLike: ['Dasha Rogoza', 'Olga Bobona'],
    left: '486',
    percent: '81%'
  },
  {
    title: 'Animal Medicine',
    image: './src/images/Stuff_Avatars/Pic_6.png',
    name: '“Sirius” Shelter',
    description: 'Humans often build' +
                 ' "houses" for domestic' +
                 ' animals, often ' +
                 'resembling smaller' +
                 ' versions of human ' +
                 'domiciles.',
    likesImg: [
      './src/images/Friends_Avatars/Pic_20.png',
      './src/images/Friends_Avatars/Pic_21.png',
      './src/images/Friends_Avatars/Pic_22.png',
      './src/images/Friends_Avatars/Pic_19.png'
    ],
    friends: '4',
    donations: '15',
    likes: '253',
    lastTwoLike: ['Dasha Rogoza', 'Olga Bobona'],
    left: '4286',
    percent: '60%'
  }
];

class Stuff extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    ReactDOM.findDOMNode(document.querySelector('#page')).scrollTop = 0;
  }
  render() {
    return (
      <div className='wrapper'>
        <Header title='Stuff' />
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

export default Stuff;
