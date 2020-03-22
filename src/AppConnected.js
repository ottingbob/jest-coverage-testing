import React from 'react';
import {connect} from 'react-redux';
import {fetchData} from './actions';

class AppC extends React.Component {
  constructor(props) {
    super(props);

    this.sendAction= this.sendAction.bind(this);
  }

  sendAction() {
    this.props.fetchData();
  }

  render() {
    const data = this.props.data;
    
    return (
      <div className="App">
        Welcome buddy!
        <div className="data-msg">
          {data.success}
        </div>
        <button className="btn" onClick={() => this.sendAction()}>
          Click Me
        </button>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    data: state.dataReducer
  };
};

export default connect(mapStateToProps, {fetchData})(AppC);
