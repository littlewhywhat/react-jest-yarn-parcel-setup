import React from 'react';
import { shallow } from 'enzyme';
import App from '../main/components/App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders the title', () => {
    expect(app.find('h1').exists()).toBe(true);
  });
});