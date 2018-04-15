import React from 'react';
import Helpers from '../js/helpers';

class TimerActionButton extends React.Component{

  render(){
  	if (this.props.timerIsRunning){
			return(
				<div
					className='ui bottom attached red basic button'
					onClick={this.props.onStopClick}
				>
					Stop
				</div>
			);
    }else{
			return(
				<div
					classname='ui bottom attached green basic button'
					onClick={this.props.onStartClick}
				>
					Start
				</div>
			);
    }        
  }
}

export default TimerActionButton;