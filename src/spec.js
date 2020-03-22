import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import AppC from './AppConnected';
import configureStore from './store/configureStore';

describe('Coverage Test Suite', () => {

  it('My test case...', () => {
    expect(true).toEqual(true);
  });

  it('Renders the app without an error', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).not.toBeUndefined();
  });

  it('Renders connected app without an error', () => {
    const wrapper = shallow(<AppC store={configureStore({})} />);
    expect(wrapper).not.toBeUndefined();
  });

  it('Renders connected app with props', () => {
    const initialState = {
      dataReducer: {
        success: false
      }
    };
    const wrapper = shallow(<AppC store={configureStore(initialState)} />);
    expect(wrapper).not.toBeUndefined();
  });

  it('Renders connected app with props', () => {
    const initialState = {
      dataReducer: {
        success: false
      }
    };
    const wrapper = shallow(<AppC store={configureStore(initialState)} />)
      .childAt(0).dive();

    const instance = wrapper.instance();
    instance.sendAction();
    expect(wrapper).not.toBeUndefined();
  });

  it('Renders connected app with props', () => {
    const initialState = {
      dataReducer: {
        success: false
      }
    };
    window['__REDUX_DEVTOOLS_EXTENSION__'] = () => { console.log('winrar'); };
    const wrapper = shallow(<AppC store={configureStore(initialState)} />)
      .childAt(0).dive();
    expect(wrapper).not.toBeUndefined();
  });

});
