import React from 'react';

export default class Button extends React.Component {
  prettify() {
    
  }

  render() {
    const { clickHandle } = this.props;

    return (<div className="button-container">
      <button type="button" className="button" onClick={clickHandle}>Ya Basic.</button>
    </div>);
  }
}
