import START_TOKENS from '../data/start';
import STOP_TOKENS from '../data/stop';
import SEQUENCE from '../data/sequence';

const PUNCTUATION = ['.', '!', '?'];

function getWeightedRandom(obj) {
  const thisRand = Math.random();
  return obj.tokens[obj.probs.findIndex(el => el > thisRand)]
}

function spliceAndJoin(str, next) {
  const split = str.split(' ');
  split.splice(0, 1);
  return split.join(' ') + ' ' + next;
}

function capitalize(str) {
  let currStr = str;
  let pieces;
  PUNCTUATION.forEach(punc => {
    pieces = currStr.split(punc + ' ');
    currStr = pieces.map(el => `${el.charAt(0).toUpperCase()}${el.slice(1)}`).join('. ');
  })
  return currStr;
}

export default class QuoteBuilder {
  static getQuote() {
    let currState;
    let nextState;
    currState = getWeightedRandom(START_TOKENS);
    let quote = currState;
    
    while (!STOP_TOKENS.tokens.includes(currState)) {
      nextState = getWeightedRandom(SEQUENCE[currState]);
      quote += ' ' + nextState;
      currState = spliceAndJoin(currState, nextState)
    }
    return capitalize(quote);
  }
}
