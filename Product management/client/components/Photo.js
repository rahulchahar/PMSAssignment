import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
  render() {
    const { post, i, comments } = this.props;
    const { postId } = this.props.params;
    return (
       <figure className="grid-figure">
        <div className="grid-photo-wrap">
            <img src={post.display_src} className="grid-photo" />
        </div>
        {
          postId === undefined &&
          <figcaption>
          <label className="labelgrid">Product:</label>
          <p>{post.pname}</p>
          <label className="labelgrid">Description:</label>
          <p>{comments[post.code][0].Desc}</p>
          <label className="labelgrid">Price</label>
          <p>{comments[post.code][0].Price}</p>
            <div className="control-buttons">
            <button className="likes" onClick={() => this.props.deleteProduct(i)}>DELETE</button>
            <Link className="button" to={`/view/${post.code}`}>
              <span className="comment-count">
                EDIT
              </span>
            </Link>
          </div>
        </figcaption>  
        }
        

      </figure>
    )
  }
});

export default Photo;