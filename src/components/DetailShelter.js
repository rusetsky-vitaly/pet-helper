import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PopUp from '../components/PopUp';
import Dropdown from '../components/Dropdown';

const cards = [
  {
    name: '...3231'
  }, {
    name: '...4532'
  }
];

class DetailShelter extends React.Component {
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
      <div className='page-detail shelter pet-wrap tile'>
        <div className='header-detail tile-header'>
          <h3>Main Information</h3>
          <div className='shares'>
            <i>share</i>
            <i>like</i>
          </div>
        </div>
        <div className='about'>
          <img src={this.props.image} alt={this.props.name} />
          <div className='about_item'>{this.props.about}</div>
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
        <table className='contact-info'>
          <tbody>
            <tr>
              <td className='curator'>
                <span>Curator -</span> {this.props.curator}
              </td>
            </tr>
            <tr>
              <td className='phone-icon'>
                <div>{this.props.phone}</div>
              </td>
              <td className='fb-icon'>
                <div><Link to={this.props.fb} target='_blank'>Facebook Page</Link></div>
              </td>
            </tr>
          </tbody>
        </table>
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
        <span className='check-payments'>
          <span>You can check your payment details about donations in the </span>
          <Link to='/history'>History</Link>
        </span>
        <table className='gallery'>
          <tbody>
            <tr>
              <td>
                <div className='photo-gal'>Photo Reports</div>
                <div className='mini'>
                  {this.props.photos.map((item, i) => <img key={i} src={item} alt={i} />)}
                </div>
              </td>
              <td>
                <div className='video-gal'>Video Reports</div>
                <div className='mini'>
                  {this.props.videos.map((item, i) => <img key={i} src={item} alt={i} />)}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='our-pets'>
          <h5>Our Pets:</h5>
          <div>
            {this.props.shelterPets.map((item, i) => <img key={i} src={item} alt={i} />)}
          </div>
        </div>
        <div className='address'>
          <h6>Address and Map</h6>
          <div className='address_details'>
            Oleksandra Pyrohovs'koho St, 19/4
            Kyiv, 02000
          </div>
          <div className='map'>
            <i>&nbsp;</i>
          </div>
        </div>
      </div>
    );
  }
}

DetailShelter.propTypes = {
  shelter: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.string,
  breed: PropTypes.string,
  sex: PropTypes.string,
  image: PropTypes.string,
  likesImg: PropTypes.array,
  friends: PropTypes.string,
  donations: PropTypes.string,
  likes: PropTypes.string,
  lastTwoLike: PropTypes.array,
  curator: PropTypes.string,
  about: PropTypes.string,
  phone: PropTypes.string,
  fb: PropTypes.string,
  photos: PropTypes.array,
  videos: PropTypes.array,
  generalInformation: PropTypes.string,
  medicalCard: PropTypes.array,
  shelterPets: PropTypes.array
};

export default DetailShelter;

