import React from 'react';
import Gift from './Gift';

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

    this.setState({
      gifts,
    });
  }

  removeGift = (id) => {
    const {
      gifts,
    } = this.state;
    const newGifts = gifts.filter(gift => gift.id !== id);
    this.setState({
      gifts: newGifts,
    });
  }

  render() {
    const {
      gifts,
    } = this.state;
    return (
      <div>
        <h2>
          Gift Giver
        </h2>
        <div className="gift-list">
          {
            gifts.map(gift => (
              <div key={gift.id}>
                <Gift
                  gift={gift}
                  removeGift={this.removeGift}
                />
              </div>
            ))
          }
        </div>
        <button className="btn-add" onClick={this.addGift} type="button">
          Add Gift
        </button>
      </div>
    );
  }
}

export default App;
