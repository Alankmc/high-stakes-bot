import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quote from './quote/Quote';
import Button from './button/Button';
import QuoteBuilder from './logic/QuoteBuilder';
import Flourish from './flourish/Flourish';

const NUM_PALETTES = 7;

class App extends Component {
  state = {
    quoteText: null,
    palette: 0,
  }

  changeQuote = () => {
    this.setState({ quoteText: QuoteBuilder.getQuote(), palette: Math.floor(Math.random() * NUM_PALETTES) })
  }

  render() {
    const { quoteText, palette } = this.state;
    const borderRange = Math.random();
    return (
      <div className={`wrapper palette_${palette}`}>
        <div className="app-container">
          <div className="flourish-container-left">
            {quoteText
              ? (<Flourish svgClass="flourish-left" type="border" range={borderRange} palette={palette} />)
              : null}
          </div>
          <div className="flourish-container-right">
          {quoteText
              ? (<Flourish svgClass="flourish-right" type="border" range={borderRange} palette={palette} />)
              : null}
            
          </div>
          <Quote text={quoteText} palette={palette} />
          <Button clickHandle={this.changeQuote} />
        </div>
      </div>
    );
  }
}

export default App;
