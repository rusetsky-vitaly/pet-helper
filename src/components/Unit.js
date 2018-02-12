import React from 'react';
import PropTypes from 'prop-types';
import PopUp from '../components/PopUp';
import Dropdown from '../components/Dropdown';

const cards = [
  {
    name: '...3231'
  }, {
    name: '...4532'
  }
];

class Unit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      materialsPopup: false,
      successPopup: false
    };
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

    return (
      <div className='unit-wrap tile'>
        <div className='tile-header'>
          <h3>{this.props.title}</h3>
          <div className='shares'>
            <i>share</i>
            <i>like</i>
          </div>
        </div>
        <div className='about'>
          <div className='image-wrap'>
            <img src={this.props.image} alt={this.props.name} />
          </div>
          <div className='description'>
            <h4>{this.props.name}</h4>
            {this.props.description}
          </div>
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
        <div className='pr_bar'>
          <span>
            It remains to collect {this.props.left} UAH
          </span>
          <div className='meter'>
            <span style={{width: this.props.percent}}><span className='progress'>&nbsp;</span></span>
          </div>
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

Unit.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  likesImg: PropTypes.array,
  friends: PropTypes.string,
  donations: PropTypes.string,
  lastTwoLike: PropTypes.array,
  likes: PropTypes.string,
  left: PropTypes.string,
  percent: PropTypes.string
};

export default Unit;
