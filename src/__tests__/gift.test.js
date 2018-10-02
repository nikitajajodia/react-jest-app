import React from 'react';

import { Gift } from '../components';

describe('Gift-->', () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: { id }, removeGift: mockRemove };
  const gift = shallow(<Gift {...props} />);

  it('renders properly', () => {
    expect(gift).toMatchSnapshot();
  });

  it('initialises a person and present in the state', () => {
    expect(gift.state()).toEqual({ person: '', present: '' });
  });

  describe('when typing into the person input', () => {
    const person = 'Unlce';
    beforeEach(() => {
      gift.find('.input-person').simulate('change', { target: { value: person } });
    });

    it('updates the person in state', () => {
      expect(gift.state().person).toEqual(person);
    });
  });

  describe('when typing into the present input', () => {
    const present = 'Golf Clubs';
    beforeEach(() => {
      gift.find('.input-present').simulate('change', { target: { value: present } });
    });

    it('updates the present in state', () => {
      expect(gift.state().present).toEqual(present);
    });
  });

  describe('when user clicks the remove gift button', () => {
    beforeEach(() => {
      gift.find('.remove-gift').simulate('click');
    });

    it('calls the removeGift callback', () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});
