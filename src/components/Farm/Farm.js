import React, { Component } from "react";
import './Farm.css';

class Farm extends Component {
  render() {
    return(
      <div className="farm">
        <h1>Производство на ферме</h1>
        <button disabled>Отправить урожай клиенту</button>

      </div>
    );
  }
}

export default Farm;