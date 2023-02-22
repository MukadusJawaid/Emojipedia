import React from "react";

export default function Entry(props){
    return <div className="term">
    <dt>
      <span className="emoji" role="img" aria-label="Slightly Smiling Face">{props.emoji}</span>
      <span>{props.name}</span>
    </dt>
    <dd>{props.description}</dd>
  </div>
}