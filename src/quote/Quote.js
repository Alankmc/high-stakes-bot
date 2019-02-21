import React from 'react';
import HASHTAGS from '../data/hashtags';

const NUM_FONTS = 13;
const HASHTAG_CHANCE = 0.4;
const NUM_HASHTAGS = HASHTAGS.length;

export default class Quote extends React.Component {
  prettify() {

  }

  getHastag() {
    if (Math.random() < HASHTAG_CHANCE) {
      return (
        <div>
        {`#${HASHTAGS[Math.floor(NUM_HASHTAGS * Math.random())]}`}
        </div>);
    }
    return null;
  }

  getSize(strLen, font = 0) {
    const size = strLen > 180
    ? (1 - (strLen - 180) / 300) * 520
    : 520;
    if (font === 1) {
      return size * 0.8;
    }
    return size;
  }

  render() {
    const { text } = this.props;
    const thisHashtag = this.getHastag();
    const thisFont = Math.floor(Math.random() * NUM_FONTS);
    return (<div className="quote-container">
      <span
        style={{fontSize: text ? `${this.getSize(text.length, thisFont)}%`: '4rem'}}
        className={`quote quote-font_${thisFont}`}
      >
        {text}
        {text ? this.getHastag() : null}
      </span>
    </div>);
  }
}
