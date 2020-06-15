import React from 'react';
import { format, addMinutes } from 'date-fns';
import PropTypes from 'prop-types';
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
    const tick = tickets.slice(0, 5);
    return tick.map(({
      id, price, carrier,
      segments: [{
        origin, destination, date, duration, stops
      },
        {
          origin: origin1, destination: destination1, date: date1, duration: duration1, stops: stops1
        }]
    }) => (
        <Card
          key={id}
          price={price}
          carrier={carrier}
          forwardRoute={`${origin} - ${destination}`}
          timeForwardStart={format(new Date(date), 'kk:mm')}
          timeForwardDestination={format(
            addMinutes(new Date(date), duration),
            'kk:mm'
          )}
          timeFlightForward={this.countTime(duration)}
          stopsForward={stops.join(', ')}
          countStopsPhrase={this.getWord(stops.length)}
          backRoute={`${origin1} - ${destination1}`}
          timeBackdStart={format(new Date(date1), 'kk:mm')}
          timeBackDestination={format(
            addMinutes(new Date(date1), duration1),
            'kk:mm'
          )}
          timeFlightBack={this.countTime(duration1)}
          stopsBack={stops1.join(', ')}
          countStopsPhraseBack={this.getWord(stops1.length)}
        />
      ));
  }
}

Cards.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
};
