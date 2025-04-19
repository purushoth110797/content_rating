
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        totalRatings: 0,
        handlelike: () =>{
            this.setState((prevState)=> ({
                likes: prevState.likes + 1,
                totalRatings: prevState.totalRatings + 1
            }));
        },
        handledislike: () => {
            this.setState((prevState) => ({
                dislikes: prevState.dislikes + 1,
                totalRatings: prevState.totalRatings + 1

            }));
        },
        
    }
  }
  render() {
    return (
     <div className='content-rating'>
        <p>
            sss React, a JavaScript library developed by facebook, has revolutiomized the landscape of front-end web development with its component-based architecture. At it core, React enables developers to break down complex user interfaces into reusable, encapsulated components, eah managing itsown state and behaviour.
        </p>
        <div className='rating-buttons'>
            <button className='like-button' onClick={this.state.handlelike}>Like ({this.state.likes})</button>
            <button className='dislike-button' onClick={this.state.handledislike}>Dislike ({this.state.dislikes})</button>
        </div>
        <div className='total-rating'>
            <p>Total Ratings: {this.state.totalRatings}</p>
        </div>

     </div>
    );
  }
}

export default ContentRating;
