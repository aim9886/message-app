// Props in CBC

import React from "react";

class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
      </div>
    );
  }
}

class ParentComponent extends React.Component {
  render() {
    return (
      <div>
        <ChildComponent name="John" age="30" />
        <ChildComponent name="Mary" age="25" />
      </div>
    );
  }
}

export default ParentComponent