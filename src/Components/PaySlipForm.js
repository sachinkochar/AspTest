import React ,{Component} from 'react';

class PaySlipForm extends Component{
	constructor(props){
		super(props);
		this.state={
			first_name:'',
			last_name:'',
			annual_salary:'',
			super_rate:'',
			payment_start_date:'',
			error:''
		}
		this.handleChange=this.handleChange.bind(this)
		this.handleSubmit=this.handleSubmit.bind(this)
	}
	handleChange(e){
		var name= e.target.name;
		var value = e.target.value;
		this.setState({[name]:value})
	}

	handleSubmit(e){
		e.preventDefault(); 
		if(this.state.first_name==='' || this.state.last_name===''  || this.state.annual_salary==='' || this.state.super_rate==='' || this.state.super_rate===''  ){
			this.setState({error:'All fields are required'})
		}else{
			this.props.calculateIncome(this.state.annual_salary,this.state.super_rate)
			this.props.compChange('addComment')
		}
	}

	render(){
		return(
		<div className="row">
		    <div className="col">
		    	{this.state.error !== '' && (
				      <div className="alert alert-danger" role="alert">
				        {this.state.error}
				      </div>
		    		)}
		      
		      <form>
		        <div className="form-group">
		          <label htmlFor="name">First Name</label>
		          <input type="text" className="form-control" name="first_name" onChange={this.handleChange} id="name" aria-describedby="emailHelp" placeholder="Enter First Name" />
		        </div>
		        <div className="form-group">
		          <label htmlFor="name">Last Name</label>
		          <input type="text" className="form-control" name="last_name" onChange={this.handleChange} id="name" aria-describedby="emailHelp" placeholder="Enter Last Name" />
		        </div>
		        <div className="form-group">
		          <label htmlFor="title">Annual Salary</label>
		          <input type="number" className="form-control" name="annual_salary" onChange={this.handleChange} id="title" placeholder="Enter Annual Salary" />
		        </div>
		        <div className="form-group">
		          <label htmlFor="super_rate">Super Rate</label>
		          <input className="form-control" type="number" name="super_rate" onChange={this.handleChange} placeholder="Enter Super Rate" />
		        </div>
		         <div className="form-group">
		          <label htmlFor="payment_start_date">Payment Start Date</label>
		          <input className="form-control" type="date" name="payment_start_date" onChange={this.handleChange} placeholder="Enter Start Date" />
		        </div>

		        <div className="text-right">
		          <button type="button" className="btn btn-secondary" onClick={this.props.compChange.bind(this,'addComment')}>Cancel</button>
		          &nbsp;
		          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
		        </div>
		      </form>
	    </div>
  	</div>
			)
	}

}

export default PaySlipForm;