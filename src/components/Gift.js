import React from 'react';

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
    console.log(person, present);
    return (
      <div>
        <form>
          <input
            type="text"
            className="input-person"
            onChange={event => this.setState({ person: event.target.value })}
          />
          <input
            type="text"
            className="input-present"
            onChange={event => this.setState({ present: event.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default Gift;
