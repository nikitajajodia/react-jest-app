import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gifts: [],
    };
  }

  addGift = () => {
    const {
      gifts,
    } = this.state;

    const ids = gifts.map(gift => gift.id);
    const maxId = ids.length > 0 ? Math.max(...ids) : 0;

    gifts.push({
      id: maxId + 1,
    });
  }

  render() {
    return (
      <div>
        <h2>
          Gift Giver
          <button className="btn-add" onClick={this.addGift} type="button">
            Add Gift
          </button>
          {' '}
        </h2>
      </div>
    );
  }
}

export default App;
