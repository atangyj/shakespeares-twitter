import React from 'react';

const style = {
    position: 'absolute',
    bottom: '1.5rem',
    right: '1.25rem',
    border: '0',
    borderRadius: '.2rem',
    height: '2.2rem',
    width: '6rem',
    fontSize: '.875rem'
}

export class RandomButton extends React.Component {
  render(){
    return (
      <button style = {style} onClick = {this.props.onClick}> New Quote</button>
    )
  }
}
