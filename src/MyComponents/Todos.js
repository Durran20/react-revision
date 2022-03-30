import React from 'react'
import PropTypes from 'prop-types'
import Todo from "./Todo.js";

function Todos(props) {
  return (
    <div>
      <Todo/>
      ToDos List
    </div>
  )
}

Todos.propTypes = {

}

export default Todos

