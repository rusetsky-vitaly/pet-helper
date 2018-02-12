import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    localStorage.setItem('firstVisit', true);
  }
  handleClick() {
    window.location.reload();
  }
  render() {
    return (
      <div className='login-wrap'>
        <i className='pet_helper_logo'>&nbsp;</i>
        <button className='btn fb'>Sign In with Facebook</button>
        <form action=''>
          <input placeholder='Email' type='text' />
          <input placeholder='Password' type='password' />
        </form>
        <div className='forgot'>Forgot your password?</div>
        <Link onClick={this.handleClick} className='btn main' to='/'>Sign In</Link>
        <div className='sign-up'>Don’t have an account? <span>Sign Up</span>.</div>
      </div>
    );
  }
}

export default Login;
