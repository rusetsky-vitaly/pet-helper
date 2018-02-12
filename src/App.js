import React from 'react';

import Menu from './components/Menu';
import Login from './components/Login';
import Main from './containers/Main';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }
  componentWillMount() {
    if (!localStorage.getItem('firstVisit')) {
      this.setState({redirect: true});
    }
  }
  render() {
    const { redirect } = this.state;
    return (
      <div id='page' className='page'>
        {!!redirect &&
          <Login />
        }
        {!redirect &&
          <div id='page' className='page'>
            <Main />
            <Menu />
          </div>
        }
      </div>
    );
  }
}

export default App;
