import React from 'react';
import { format, addMinutes } from 'date-fns';
import _ from 'lodash';
import Card from './Card';

export default class Cards extends React.Component {
  getDestinationTime = (date, value) => addMinutes(date, value);

  countTime = (value) => {
    const hours = Math.trunc(value / 60);
    const minutes = value - hours * 60;
    return `${hours}ч ${minutes}м`;
  };

  getWord = (value) => {
    if (value === 0) return 'НЕТ ПЕРЕСАДОК';
    if (value === 1) return '1 ПЕРЕСАДКА';
    return `${value} ПЕРЕСАДКИ`;
  };

  render() {
    const { tickets } = this.props;
    console.log(tickets[0], tickets[1], tickets[2], tickets[3], tickets[4]);
    const tick = tickets.splice(0, 5);
    return tick.map((el) => (
      <Card
        key={_.uniqueId()}
        price={el.price}
        carrier={el.carrier}
        forwardRoute={`${el.segments[0].origin} - ${el.segments[0].destination}`}
        timeForwardStart={format(new Date(el.segments[0].date), 'kk:mm')}
        timeForwardDestination={format(
          addMinutes(new Date(el.segments[0].date), el.segments[0].duration),
          'kk:mm'
        )}
        timeFlightForward={this.countTime(el.segments[0].duration)}
        stopsForward={el.segments[0].stops.join(', ')}
        // countStopsForward={el.segments[0].stops.length}
        countStopsPhrase={this.getWord(el.segments[0].stops.length)}
        backRoute={`${el.segments[1].origin} - ${el.segments[1].destination}`}
        timeBackdStart={format(new Date(el.segments[1].date), 'kk:mm')}
        timeBackDestination={format(
          addMinutes(new Date(el.segments[1].date), el.segments[1].duration),
          'kk:mm'
        )}
        timeFlightBack={this.countTime(el.segments[1].duration)}
        stopsBack={el.segments[1].stops.join(', ')}
        // countStopsBack={el.segments[1].stops.length}
        countStopsPhraseBack={this.getWord(el.segments[1].stops.length)}
      />
    ));
  }
}
