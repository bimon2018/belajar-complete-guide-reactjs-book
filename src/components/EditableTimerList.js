// EditableTimerList.js

//merupakan container dari setiap Timer yg ada
//berfungsi sebagai container saja
//daftar child components : EditableTimer

import React from 'react';
import EditableTimer from './EditableTimer';

class EditableTimerList extends React.Component {
  render() {
    /*
    ini adalah hal yg masih aku bingungkan, di bawah adalah contoh callback function (fungsi dengan 3 argumen)
    atau disebut high-order function atau fat arrow function
    biasanya setelah fat-arrow adalah expression yg diapit oleh tanda "{}" (bracket)
    tp di contoh kode di bawah jika pakai kurung bracket malah tidak jalan, jika pakai kurung bisa baru jalan
    */
    const timers = this.props.timers.map((timer) => (
      <EditableTimer
        key={timer.id}
        id={timer.id}
        title={timer.title}
        project={timer.project}
        elapsed={timer.elapsed}
        runningSince={timer.runningSince}
        onFormSubmit={this.props.onFormSubmit}
        onTrashClick={this.props.onTrashClick}
      />
    ));
    
    return (
      <div id='timers'>
        {timers}
      </div>
    );
  }
}

export default EditableTimerList;
