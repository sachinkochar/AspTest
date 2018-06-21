import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import PaySlipForm from './Components/PaySlipForm'
import axios from 'axios';


class App extends Component {
   constructor(){
      super();
      this.state={
        CommentComp:'addComment'
      }
      this.handleCompChange=this.handleCompChange.bind(this);
      this.getIncomeTax=this.getIncomeTax.bind(this);

    }
    handleCompChange(comp){
      this.setState({CommentComp:comp})
    }
    getIncomeTax(income,superRate){
      axios.get('http://localhost:3000/tax/?income='+income+'&superRate='+superRate)
      .then((res)=>{
        console.log(res)
      })
    }

  render() {
    return (
      <div className="">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pay Slip Generator</h1>
        </header>
        <div className="container m-8">
          <PaySlipForm compChange={this.handleCompChange} calculateIncome={this.getIncomeTax}/>
        </div>
      </div>
    );
  }
}

export default App;
