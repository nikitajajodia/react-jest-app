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
    // is executed before each test running in this block
    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    // is executed after each test running in this block
    afterEach(() => {
      app.setState({ gifts: [] });
    });

    it('adds a new gift to state', () => {
      expect(app.state().gifts).toEqual([{ id: 1 }]);
    });

    it('addas a new gift to the rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1);
    });
  });
});
