//ToggleableTimerForm.js

//sebagai container bagi form utk create new Timer
//child component : TimerForm

import React from 'react';
import TimerForm from './TimerForm';

class ToggleableTimerForm extends React.Component {
  state = {
    isOpen: false,
  };

  //ingat pakai fat-arrow function biar auto bind dgn this pada komponen ini
  handleFormOpen = () => {
    this.setState({isOpen: true});
  };

  handleFormClose = () => {
    this.setState({isOpen: false});
  };

  handleFormSubmit = (timer) => {
    this.props.onFormSubmit(timer);
    this.setState({isOpen: false});
  };

  render() {
    if (this.state.isOpen) {
      return (
        <TimerForm 
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        /*menampilkan tombol + (plus), jika mau ini bisa dibuat komponen terpisah*/
        <div className='ui basic content center aligned segment'>
          <button 
            className='ui basic button icon'
            onClick={this.handleFormOpen}
          >
            <i className='plus icon' />
          </button>
        </div>
      );
    }
  }
}

export default ToggleableTimerForm;
