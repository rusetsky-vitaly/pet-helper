import React from 'react';

const tags = [
  { tag: 'all',
    active: false
  },
  { tag: 'dogs',
    active: true
  },
  { tag: 'cats',
    active: false
  },
  { tag: 'puppies',
    active: false
  },
  { tag: 'kittens',
    active: false
  },
  { tag: 'black',
    active: false
  },
  { tag: 'white',
    active: false
  },
  { tag: 'red',
    active: false
  },
  { tag: 'brown',
    active: false
  },
  { tag: 'striped',
    active: false
  },
  { tag: 'spotty',
    active: false
  }
  // { tag: 'purebread',
  //   active: false
  // },
  // { tag: 'all',
  //   active: false
  // }
];

function Tags() {
  return (
    <div className='tags-wrap'>
      <p>Please swipe tags and choose categories that you need:</p>
      <ul>
        {tags.map((item, i) =>
          <li key={i}><span className={item.active === true ? 'active' : 'tag'}>{item.tag}</span></li>
        )}
      </ul>
    </div>
  );
}

export default Tags;
