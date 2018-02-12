import React from 'react';
import PropTypes from 'prop-types';
import PopUp from '../components/PopUp';
import Dropdown from '../components/Dropdown';
import { Redirect  } from 'react-router-dom';

const cards = [
  {
    name: '...3231'
  }, {
    name: '...4532'
  }
];

class Shelter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      materialsPopup: false,
      successPopup: false,
      redirect: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({redirect: true});
  }
  render() {
    const { materialsPopup } = this.state;
    const { successPopup } = this.state;
    const OpenPopup = () =>
      <button className='btn main' onClick={() => this.setState({ materialsPopup: !materialsPopup })}>
        Donate
      </button>;
    const OpenSuccessPopup = () =>
      <button className='btn main' onClick={() => this.setState({ successPopup: !successPopup })}>
        Donate
      </button>;

    if (this.state.redirect) {
      return <Redirect to={`/shelters/${this.props.name.toLocaleLowerCase()}`} />;
    }

    return (
      <div className='shelter-wrap tile'>
        <div className='tile-header'>
          <h3>“{this.props.name}” Shelter</h3>
          <div className='shares'>
            <i>share</i>
            <i>like</i>
          </div>
        </div>
        <div onClick={this.handleClick} className='about'>
          <img src={this.props.image} alt={this.props.name} />
          <div className='description'>{this.props.description}</div>
        </div>
        <div className='donations'>
          <ul className='avatars'>
            {this.props.likesImg.map((img, i) =>
              <li key={i}><i style={{ backgroundImage: `url(${img})` }}>ava</i></li>
            )}
          </ul>
          <ul className='counts'>
            <li>{this.props.friends} friends</li>
            <li>{this.props.donations} donations</li>
          </ul>
        </div>
        <div className='likes'>
          <i>like</i>
          <span>{this.props.lastTwoLike.join(', ')}</span>
          <span>and another {this.props.likes}</span>
        </div>
        <OpenPopup />
        { !!materialsPopup && <div>
          <PopUp className='materialsPopUp' onClose={() => this.setState({ materialsPopup: false })}>
            <div className='container'>
              <h3>Donation</h3>
              <div className='amount'>
                <label name='amount'>You want to donate:</label>
                <input id='amount' name='amount' type='text'/>
              </div>
              <div className='card-details'>
                <div className='card'>
                  <label name='card'>From Card</label>
                  <Dropdown list={cards} selected={cards[0]} />
                </div>
                <div className='cvv'>
                  <label name='cvv'>CVV</label>
                  <input id='cvv' name='cvv' type='password'/>
                </div>
              </div>
              <OpenSuccessPopup />
            </div>
          </PopUp>
          <div className='popup-bg'>bg</div>
        </div>
        }
        { !!successPopup && <div>
          <PopUp action='success' className='successPopup' onClose={() => this.setState({ successPopup: false })}>
            <div className='container'>
              <h3>Donation</h3>
              <span className='done'>&nbsp;</span>
            </div>
          </PopUp>
        </div>
        }
      </div>
    );
  }
}

Shelter.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  likesImg: PropTypes.array,
  friends: PropTypes.string,
  donations: PropTypes.string,
  lastTwoLike: PropTypes.array,
  likes: PropTypes.string
};

export default Shelter;
