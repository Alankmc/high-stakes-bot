import React from 'react';
import fl0 from './Flourish_borders.0.svg';
import fl1 from './Flourish_borders.1.svg';
import fl2 from './Flourish_borders.2.svg';
import ReactSVG from 'react-svg';

const BORDERS = [fl0, fl1, fl2];
const PALETTE = [
  '#a83859',
  '#240d39',
  '#363813',
  '#848c57',
  '#981826',
  '#6b3603',
  '#d96c87',
];

export default class Flourish extends React.Component {
  render() {
    const { svgClass, type, range, palette } = this.props;
    console.log(PALETTE[palette])
    if (type === 'border') {
      return (<ReactSVG src={BORDERS[Math.floor(BORDERS.length * range)]} svgStyle={{ fill: PALETTE[palette] }} className={`flourish ${svgClass}`} />);
    }
    return null;
  }
}
