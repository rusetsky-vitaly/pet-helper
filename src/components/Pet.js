import React from 'react';
import PropTypes from 'prop-types';
import { Redirect  } from 'react-router-dom';

class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({redirect: true});
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={`/pets/${this.props.name.toLocaleLowerCase()}`} />;
    }
    return (
      <div className='pet-wrap tile'>
        <div className='tile-header'>
          <h3>{this.props.name}</h3>
          <div className='shares'>
            <i>share</i>
            <i>like</i>
          </div>
        </div>
        <ul className='tags'>
          {this.props.tags.map((tag, i) =>
            <li key={i}><span>{tag}</span></li>
          )}
        </ul>
        <div onClick={this.handleClick} className='about'>
          <img src={this.props.image} alt={this.props.name} />
          <ul>
            <li>“{this.props.shelter}” Shelter</li>
            <li><span>Age</span> - {this.props.age}</li>
            <li><span>Breed</span> - {this.props.breed}</li>
            <li><span>Sex</span> - {this.props.sex}</li>
          </ul>
        </div>
      </div>
    );
  }
}

Pet.propTypes = {
  name: PropTypes.string,
  tags: PropTypes.array,
  image: PropTypes.string,
  shelter: PropTypes.string,
  age: PropTypes.string,
  breed: PropTypes.string,
  sex: PropTypes.string
};

export default Pet;
