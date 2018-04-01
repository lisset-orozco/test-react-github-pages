import React, {Component, PropTypes} from 'react';

// class App extends React.Component {
class App extends Component {
  constructor(...props) { // spread operator
    super(...props);

    this.state = {}
  }

  render() { // sólo debe retornar un nodo hijo
    return(
      <div>Hola React</div>
    ) 
  }
}

App.protoTypes = {}
App.defaultProps = {}

export default App