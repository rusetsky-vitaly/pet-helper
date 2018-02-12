import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class PopUp extends React.Component {
  constructor() {
    super();
    this.onDocumentClick = this.onDocumentClick.bind(this);
  }
  componentDidMount() {
    document.addEventListener('click', this.onDocumentClick);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick);
  }
  onDocumentClick(event) {
    let pointer = event.target;
    const element = ReactDOM.findDOMNode(this);

    while (pointer !== document && pointer) {
      if (pointer === element) {
        return;
      }

      pointer = pointer.parentNode;
    }
    this.props.onClose();
  }
  render() {
    let popupType = 'popUpContainer';

    if (this.props.action === 'success') {
      popupType += ' hide';
    }
    return (
      <div className={popupType}>
        {this.props.children}
        { !(this.props.action === 'success') &&
        <button className='negative btn' onClick={() => this.props.onClose && this.props.onClose()}>Cancel</button>
        }
      </div>
    );
  }
}

PopUp.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.any,
  action: PropTypes.string
};

export default PopUp;
