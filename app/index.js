import React from 'react'
//var React = require('react')
import ReactDOM from 'react-dom'


class App extends React.Component {

  render(){
    return(
      <div>
        <div className="container">
          <h1>Welcome to your React App</h1>
        </div>
      </div>
    )
  }

}


ReactDOM.render(<App />, document.getElementById('app'));
