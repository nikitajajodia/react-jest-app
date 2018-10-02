import React from 'react';
import PropTypes from 'prop-types';

class Gift extends React.Component {
  constructor() {
    super();
    this.state = {
      person: '',
      present: '',
    };
  }

  render() {
    const {
      person, present,
    } = this.state;
    const {
      removeGift,
      gift,
    } = this.props;
    console.log(person, present);
    return (
      <div>
        <form>
          Person
          <input
            type="text"
            className="input-person"
            onChange={event => this.setState({ person: event.target.value })}
          />
          Present
          <input
            type="text"
            className="input-present"
            onChange={event => this.setState({ present: event.target.value })}
          />
        </form>
        <button
          onClick={() => removeGift(gift.id)}
          type="button"
          className="remove-gift"
        >
            Remove Gift
        </button>
      </div>
    );
  }
}

export default Gift;

Gift.propTypes = {
  removeGift: PropTypes.func.isRequired,
  gift: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};
