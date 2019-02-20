import START_TOKENS from '../data/start';
import STOP_TOKENS from '../data/stop';
import SEQUENCE from '../data/sequence';

function getWeightedRandom(obj) {
  const thisRand = Math.random();
  return obj.tokens[obj.probs.findIndex(el => el > thisRand)]
}

export default class QuoteBuilder {
  static getQuote() {
    let currState;
    currState = getWeightedRandom(START_TOKENS);
    let quote = '';
    while (!STOP_TOKENS.tokens.includes(currState)) {
      quote += `${currState} `;
      currState = getWeightedRandom(SEQUENCE[currState]);
    }
    quote += `${currState}`;
    console.log(quote);
  }
}
