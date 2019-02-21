import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quote from './quote/Quote';
import Button from './button/Button';
import QuoteBuilder from './logic/QuoteBuilder';

class App extends Component {
  state = {
    quoteText: null,
  }

  changeQuote = () => {
    this.setState({ quoteText: QuoteBuilder.getQuote() })
  }

  render() {
    const { quoteText } = this.state;
    return (
      <div className="app">
        <Quote text={quoteText}/>
        <Button clickHandle={this.changeQuote} />
      </div>
    );
  }
}

export default App;
