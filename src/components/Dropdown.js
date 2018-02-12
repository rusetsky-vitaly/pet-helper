import React from 'react';
import PropTypes from 'prop-types';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listVisible: false,
      selected: this.props.selected
    };
    this.handleShow = this.handleShow.bind(this);
    this.hide = this.hide.bind(this);
    this.select = this.select.bind(this);
  }
  handleShow() {
    this.setState({listVisible: true});
    document.addEventListener('click', this.hide);
  }
  select(item) {
    this.setState({selected: item});
  }
  hide() {
    this.setState({listVisible: false});
    document.removeEventListener('click', this.hide);
  }
  renderListItems() {
    const items = [];
    for (let i = 0; i < this.props.list.length; i++) {
      const item = this.props.list[i];
      items.push(<div key={i} onClick={this.select.bind(null, item)}>
        <span key={i}>{item.name}</span>
      </div>);
    }
    return items;
  }
  render() {
    const dropContainer = 'dropdown-container';

    return (
      <div onClick={this.handleShow} className={dropContainer + (this.state.listVisible ? ' show' : '')}>
        <div className={this.state.listVisible ? ' clicked' : ''}>
          <span className='card-short'>{this.state.selected.name}</span>
        </div>
        <div className='dropdown-list'>
          <div>
            {this.renderListItems()}
          </div>
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  selected: PropTypes.object,
  list: PropTypes.array
};

export default Dropdown;
