//Timer.js

//komponen utk menampilkan Timer itu sendiri

import React from 'react';
import Helpers from '../js/helpers';
import TimerActionButon from './TimerActionButton';

class Timer extends React.Component{  
  handleTrashClick = () => {
    this.props.onTrashClick(this.props.id);
  };

  handleStartClick = () => {
    this.props.onStartClick(this.props.id);
  };

  handleStopClick = () => {
    this.props.onStopClick(this.props.id);
  };

  //memerintahkan komponen melakukan re-render setiap 50 ms
  //setInterval memiliki 2 argumen, pertama adalah sesuatu/fungsi yg akan dijalankan selama interval tsb berulangkali
  //argumen kedua adalah intervalnya (dlm milisecond)
  //setInterval mengembalikan ID interval yg unik yg bisa dilewatkan ke fungsi clearInterval() utk proses stop nya
  componentDidMount(){
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50)
  };

  //memanggil method clearInterval untuk menghentikan interval pada this.forceUpdateInterval
  //componentWillMount ini akan dijalankan dulu sebelum komponen dihapus dr app (jika timer dihapus)
  //memastikan tidak lagi melakukan pemanggilan forceUpdate setelah timer dihapus dr page, jika tidak akan error
  componentWillUnmount(){
    clearInterval(this.forceUpdateInterval);
  };
  
  render(){
    const elapsedString = Helpers.renderElapsedString(
      this.props.elapsed, this.props.runningSince
    );      

    return(
      <div className='ui centered card'>
        <div className='content'>
          <div className='header'>
            {this.props.title}
          </div>
          <div className='meta'>
            {this.props.project}
          </div>
          <div className='center aligned description'>
            <h2>
              {elapsedString}
            </h2>
          </div>
          <div className='extra content'>
            <span 
              className='right floated edit icon'
              onClick={this.props.onEditClick}
            >
              <i className='edit icon' />
            </span>
            <span 
              className='right floated trash icon'
              onClick={this.handleTrashClick}
            >
              <i className='trash icon' />
            </span>
          </div>
        </div>
        <div className='ui bottom attached blue basic button'>
          {/* !! berarti menghasilkan false jika nilai runningSince=null */}
          <TimerActionButon
            timerIsRunning={!!this.props.runningSince}
            onStartClick={this.handleStartClick}
            onStopClick={this.handleStopClick}
          />
        </div>
      </div>
    );
    
  }
}

export default Timer;
