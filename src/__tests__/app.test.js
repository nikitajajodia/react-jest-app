import React from 'react';

import { App } from '../components';

describe('App', () => {
  const app = shallow(<App />);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('initialises the state with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when clicking on add gift button', () => {
    const id = 1;

    // is executed before each test running in this block
    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    // is executed after each test running in this block
    afterEach(() => {
      app.setState({ gifts: [] });
    });

    it('adds a new gift to state', () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    it('addas a new gift to the rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });

    it('creates a gift component', () => {
      expect(app.find('Gift').exists()).toBe(true);
    });

    describe('and the user wants to remove the added gift', () => {
      beforeEach(() => {
        app.instance().removeGift(id);
      });

      it('removes the gift from state', () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  });
});
