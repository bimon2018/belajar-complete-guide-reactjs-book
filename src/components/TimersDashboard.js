//TimersDashboard.js

//merupakan komponen induk, sebagai container utama
// dari list timer, berfungsi sebagai widget dan create new timer

//child components: EditableTimerList and ToggleableTimerForm

import React from 'react';
import Helpers from '../js/helpers';
//import uuid from '../js/uuid';
//import uuid from 'uuid';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

//cara penggunaan uuid , ternyata tidak perlu install npm uuid, spt doc di sini : https://www.npmjs.com/package/uuid
//di docs nya tertulis : npm install uuid (install dulu package nya baru bisa digunakan dgn cara spt di bawah)
// react sudah include secara default
const uuidv4 = require('uuid/v4');

class TimersDashboard extends React.Component {  
  state = {
    timers: [
      {
        title: 'Practice squat',
        project: 'Gym Chores',
        id: uuidv4(),
        //id: require('uuid/v4'), //id: uuidv4,  //gantinya uuid.v4() --> tidak direkomendasikan https://github.com/broofa/node-uuid
        //id: uuid.v4(), // eslint-disable-line no-undef
        elapsed: 5456099,
        runningSince: Date.now(),
      },
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuidv4(),      
        //id: require('uuid/v4'),  //gantinya uuid.v4()
        //id: uuid.v4(), // eslint-disable-line no-undef
        elapsed: 1273998,
        runningSince: null,
      },
    ],
  }

  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer);
  };

  handleEditFormSubmit = (attrs) => {
    this.updateTimer(attrs);
  };

  handleTrashClick = (timerId) => {
    this.deleteTimer(timerId);
  };

  handleStartClick = (timerId) => {
    this.startTimer(timerId);
  };

  handleStopClick = (timerId) => {
    this.stopTimer(timerId);
  };

  createTimer = (timer) => {
    const t = Helpers.newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(t),
    });
    //console.log(this.state.timers);  // jika aku taruh log di sini utk cek nilai timers, isinya masih object yg lama (cuma 2)
  };


  /*
    Note that we can call map() on this.state.timers 
    from within the JavaScript object we’re passing to setState(). 
    This is an often used pattern. The call is evaluated and then 
    the property timers is set to the result.
  */
  updateTimer = (attrs) => {
    this.setState({
      timers: this.state.timers.map((timer) => {
        if (timer.id === attrs.id){
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project,
          });
        }else{
          return timer;          
        }
      }),
    });
  };

  deleteTimer = (timerId) => {
    this.setState({
      timers: this.state.timers.filter(t => t.id !== timerId),
    });
  };

  startTimer = (timerId) => {
    const now = Date.now();
    
    this.setState({
      timers: this.state.timers.map((timer) =>{
        if (timer.id === timerId){
          return Object.assign({},timer,{
            runningSince: now,
          });
        }else{
          return timer;
        }
      }),
    });
  };

  stopTimer = (timerId) => {
    const now = Date.now();

    this.setState({
      timers: this.state.timers.map((timer) =>{
        if (timer.id === timerId){
          const lastElapsed = now - timer.runningSince;
          return Object.assign({},timer,{
            elapsed: timer.elapsed + lastElapsed,
            runningSince: null,
          });
        }else{
          return timer;
        }
      }),
    });  
  };

  componentDidUpdate(){
    console.log(this.state.timers);   // yg bener jika mau cek niisi object timers lakukan di sini, ketika state telah diupdate
  };

  // componentDidMount(){
  //   console.log(this.state.timers);
  // };

  render() {
    return (
      <div className='ui three column centered grid'>
        <div className='column'>
          <EditableTimerList
            timers={this.state.timers}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
            onStartClick={this.handleStartClick}
            onStopClick={this.handleStopClick}
          />
          <ToggleableTimerForm 
            onFormSubmit={this.handleCreateFormSubmit}
          />                    
        </div>
      </div>
    );
  }
}

export default TimersDashboard;
