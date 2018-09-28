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
    return (
      <div>
        <form>
          <input
            type="text"
            className="input-person"
            onChange={event => this.setState({ person: event.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default Gift;
