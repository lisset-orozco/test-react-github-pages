import React, {Component} from 'react';
import PropTypes from 'prop-types';

// class App extends React.Component {
class App extends Component {
  constructor(...props) { // spread operator
    super(...props);

    this.state = {
      courses: [
        {id: 1, name: 'React desde Cero', teacher: 'Jonathan Mircha'},
        {id: 2, name: 'Drupal 8 desde cero', teacher: 'Alberto Quiroga'}
      ]
    }
  }

  render() { // sólo debe retornar un nodo hijo
    return(
      <div>
        <form>
          <input type="text" placeholder="Nombre del Curso" name="name" id="" required/>
          <input type="text" placeholder="Profesor" name="teacher" id="" required/>
          <input type="hidden" name="" id="" value={Math.floor(Math.random()*100)}/>
          <input type="submit" value="Guardar"/>
        </form>
        <ul>
          <li>Curso 1</li>
          <li>Curso 2</li>
        </ul>
      </div>
    ) 
  }
}

App.propTypes = {}
App.defaultProps = {}

export default App
