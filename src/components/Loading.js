import React from "react";
import "./Loading.css";

export default function Loading({ isLoading }) {
  return (
    <div
      className='loadingio-spinner-spinner-j2k3qldj4n'
      style={isLoading ? { display: "block" } : { display: "none" }}>
      <div className='ldio-dqv824t303l'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

Loading.defaultProps = {
  isLoading: false,
}