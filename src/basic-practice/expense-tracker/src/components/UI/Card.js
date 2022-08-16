import React from 'react';
import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;

  // return React.createElement('div', {className:classes}, props.children) -> w/out JSX
  return <div className={classes}>{props.children}</div>
}

export default Card;