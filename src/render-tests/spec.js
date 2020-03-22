import React from 'react';
import {Provider} from 'react-redux';
import {shallow, mount} from 'enzyme';
import App from '../App';
import AppC from '../AppConnected';
import configureStore from '../store/configureStore';

describe('Non-Coverage test suite', () => {

  it('Renders app', () => {
    const wrapper = shallow(<App />);
    const comp = wrapper.find('.App');
    expect(comp.length).toBe(1);
  });

  it('Renders connected app', () => {
    let initialState = {
      dataReducer: {
        success: false
      }
    };
    const wrapper = mount(
      <Provider store={configureStore(initialState)}>
        <AppC />
      </Provider>);
    const comp = wrapper.find('.App');
    expect(comp.length).toBe(1);
  });

});
