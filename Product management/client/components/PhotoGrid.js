import React from 'react';
import Photo from './Photo';

class PhotoGrid extends React.Component{
	constructor(props){
		super(props);
			this.state={
				showForm:false
			};
		this.showAddForm= this.showAddForm.bind(this);
		this.saveProduct= this.saveProduct.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	showAddForm(event){
		event.preventDefault();{
			this.setState({
				showForm:true
			});
		}
	}
	saveProduct(event){
		event.preventDefault();
		this.props.addProduct(this.state.pname,`prod${this.props.posts.length+1}`);
		this.props.editProductDetails(`prod${this.props.posts.length+1}`, this.state.Desc, this.state.Price)
			this.setState({
				showForm:false
			});
		

	}
	handleChange(event) {
    this.setState({
      [event.target.id]:[event.target.value]
    })
  }
	render(){
		return(
			<div>
            	<button className="addPrButton" onClick={event => this.showAddForm(event)}>+ ADD A PRODUCT</button>
          		<div className="formGrid">
          		{this.state.showForm &&
          		    <form className="pform">
          		    <div className="form-group">
			            <label className="label">Product Name:</label>
			            <input type="text" className="form-control" id="pname" onChange={event => this.handleChange(event)}/>
			          </div>
			          <div className="form-group">
			            <label className="label">Product Description:</label>
			            <input type="text" className="form-control" id="Desc" onChange={event => this.handleChange(event)}/>
			          </div>
			          <div className="form-group">
			            <label className="label">Product Price:</label>
			            <input type="text" className="form-control" id="Price" onChange={event => this.handleChange(event)}/>
			          </div>
			        <button className="savePrButton" onClick={event => this.saveProduct(event)}>Save</button>
			       </form>
          		}
          		</div>
			<div className="photo-grid">
        		{this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}
      		 </div>
      		 </div>
			);
	}
}
export default PhotoGrid;
