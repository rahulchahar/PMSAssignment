import React from 'react';
import { Link } from 'react-router';

 class Comments extends React.Component{
  constructor(props){
    super(props);
    this.state={
      Desc: this.props.postComments[0].Desc,
      Price: this.props.postComments[0].Price
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.id]:[event.target.value]
    })
  }
  onSubmit(event){
    event.preventDefault();
    const { postId } = this.props.params;
    this.props.editProductDetails(postId, this.state.Desc,this.state.Price );
    alert('Saved Successfully');
  }
  render() {
    return (

      <div className="comments">
        <form ref="commentForm" className="comment-form" >
          <input type="text" id="Desc"  value={this.state.Desc} onChange={event => this.handleChange(event)}/>
          <input type="text" id="Price" value={this.state.Price} onChange={event => this.handleChange(event)}/>
          <input type="submit" onClick={event => this.onSubmit(event)}/>
        </form>
      </div>
    )
  }  
 }
 export default Comments;
