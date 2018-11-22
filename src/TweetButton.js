import React from 'react';
import tweet from './Twitter_Social_Icon_Rounded_Square_White.png';

const style = {
    position: 'absolute',
    bottom: '1.5rem',
    left: '1.25rem',

}

const styleBtn = {
  borderRadius: '.2rem',
  width: '2.4rem',
  height: '2.4rem'
}

export class TweetButton extends React.Component{
  render(){
    return (

        <a id="tweet-btn" onClick = {this.props.onClick} style={style}><img src={tweet} alt="shit" style={styleBtn}/></a>

    )
  }
}
