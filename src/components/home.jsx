import React from 'react';
import Counter from '../containers/Counter';

class Home extends React.Component {
  render() {
    return(
      <div>
        <h1>This is my cool React page</h1>
        <Counter />
      </div>
    );
  }
}

export default Home;
