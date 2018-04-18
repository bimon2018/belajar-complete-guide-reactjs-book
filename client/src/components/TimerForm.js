//TimerForm.js

//komponen yang menampilkan form create new Timer atau edit Timer

import React from 'react';

class TimerForm extends React.Component{

  //inisialisasi state untuk 2 komponen form input, title dan project
  //sebuah komponen form selalu bersifat STATEFUL (berubah2 bergantung state)
  state = {
    title: this.props.title || '',   //If TimerForm is creating a new timer as opposed to editing an existing one, those props would be undefined. In that case, we initialize both to a blank string ('')
    project: this.props.project || '',
    //nilai sebuah komponen form input secara teknis tidak bisa diisi undefined
    //sementara jika TimerForm ini berada pada mode create artinya tidak ada props dr parent yg dilewatkan, jd undefined
  };
  
  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };
  
  handleProjectChange = (e) => {
    this.setState({ project: e.target.value });
  };
  
  
  handleSubmit = () => {
    this.props.onFormSubmit({
      id: this.props.id,
      title: this.state.title,
      project: this.state.project,
    });
  };

  render(){
    //berikut adalah salah satu ternary operator : condition ? expression1 : expression2;
    //jika title berisi text (tidak empty) maka submitText = 'Update',selain itu 'Create'
    //hebatnya JS pada proses condition tidak perlu statement spt delphi  : variableName <> '' ? exp1 : exp2
    //JS otomatis bisa mendeteksi apa yg dimaksud pd kondisi, meski hanya diberikan namaVariabel saja,
    //artinya itu jika tidak null atau undefined bila tanpa expresi kondisi lain2
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <div className='ui centered card'>
        <div className='content'>
          <div className='ui form'>
            <div className='field'>
              <label>Title</label>
              <input 
                type='text'                 
                value={this.state.title} 
                onChange={this.handleTitleChange} 
              />
              {/* sebagai ganti kode di bawah*/ }
              {/* defaultValue={this.props.title}   // defaultValue hanya digunakan untuk mengeset nilai input field pada saat initial render saja*/}
            </div>
            <div className='field'>
              <label>Project</label>
              <input 
                type='text'  
                value={this.state.project}
                onChange={this.handleProjectChange} 
              />
              {/* kode sebelumnya untuk field input project: defaultValue={this.props.project}*/}
            </div>
            <div className='ui two bottom attached buttons'>
              <button 
                className='ui basic blue button'
                onClick={this.handleSubmit}
              >
                {submitText}
              </button>
              <button 
                className='ui basic red button'
                onClick={this.props.onFormClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimerForm;
