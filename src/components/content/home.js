import React from 'react';

class Home extends React.Component {
  render(){
    return (
        <div className = "container rp-page">
            <div className="awf-header">
                <h1>Welcome to Redux state shape template designer</h1>
            </div>
            <p>Design actions, reducers, the store and a form to define to input data and conform the shape of your app's state</p>
        </div>
    );
  }
}

export default Home;