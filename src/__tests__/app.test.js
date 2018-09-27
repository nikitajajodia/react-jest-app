import React from 'react';
import { App } from '../components';

const app = shallow(<App />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});

it('initialises the state with an empty list of gifts', () => {
  expect(app.state().gifts).toEqual([]);
});

it('adds a new gift to state when clicking the add button', () => {
  app.find('.btn-add').simulate('click');
  expect(app.state().gifts).toEqual([{ id: 1 }]);
});
