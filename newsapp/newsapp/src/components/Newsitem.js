
import React, { Component } from 'react'

export default class Newsitem extends Component {
  

  render() {
    let {title,description,imageurl,newsurl} = this.props;
    

    return (
     <>
     <div class="card my-3" style={{width: "18rem",
    height:"430px"}}>
        <img  style={{
    height:"180px"}}src={imageurl} class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>
          <a  href={newsurl} target="_blank" class="btn btn-sm btn-dark" rel="noreferrer">Read more</a>
        </div>
      </div>
     </>
    )
  }
}
