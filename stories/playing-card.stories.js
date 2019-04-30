import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PlayingCard from '../src/playing-card/playing-card';

const card = {
    suit: 'C',
    rank: 'A',
    cardId: '1',
    value: 13,
    selected: false
};
const pinned = {
    suit: 'C',
    rank: 'A',
    cardId: '1',
    value: 13,
    selected: false,
    pinValue: 2
};
const joker = {
    suit: 'J',
    rank: 'A',
    cardId: '1',
    value: 13,
    selected: false
};

storiesOf('PlayingCard', module)
  .add('not selected', () => <PlayingCard
                                card={card}
                                imageLocation={'below'}
                                left={(0 * 25) + 'px'}
                                cardSelected={false}
                                showIcons={true}
                                onSelect={action('selected')}
                                onPinned={action('pinned')}
                                onMoved={action('moved')}
                            />)
  .add('selected', () => <PlayingCard
                                card={card}
                                imageLocation={'below'}
                                left={(0 * 25) + 'px'}
                                cardSelected={true}
                                showIcons={true}
                                onSelect={action('selected')}
                                onPinned={action('pinned')}
                                onMoved={action('moved')}
                            />)
  .add('pinned', () => <PlayingCard
                            card={pinned}
                            imageLocation={'below'}
                            left={(0 * 25) + 'px'}
                            cardSelected={false}
                            showIcons={true}
                            onSelect={action('selected')}
                            onPinned={action('pinned')}
                            onMoved={action('moved')}
                        />)
  .add('joker below', () => <PlayingCard
                                card={joker}
                                imageLocation={'below'}
                                left={(0 * 25) + 'px'}
                                cardSelected={false}
                                showIcons={true}
                                onSelect={action('selected')}
                                onPinned={action('pinned')}
                                onMoved={action('moved')}
                            />)
  .add('joker beside', () => <PlayingCard
                                card={joker}
                                imageLocation={'beside'}
                                left={(0 * 25) + 'px'}
                                cardSelected={false}
                                showIcons={true}
                                onSelect={action('selected')}
                                onPinned={action('pinned')}
                                onMoved={action('moved')}
                            />)
.add('no icons', () => <PlayingCard
                            card={card}
                            imageLocation={'below'}
                            left={(0 * 25) + 'px'}
                            cardSelected={true}
                            showIcons={true}
                            onSelect={action('selected')}
                            onPinned={null}
                            onMoved={null}
                        />)
  .add('image beside', () => <PlayingCard
                                card={card}
                                imageLocation={'beside'}
                                top={0}
                                cardSelected={false}
                                showIcons={false}
                                onSelect={action('selected')}
                                onPinned={action('pinned')}
                                onMoved={action('moved')}
                                />)
  .add('image top', () => <PlayingCard
                                card={card}
                                imageLocation={'beside'}
                                top='15px'
                                cardSelected={false}
                                showIcons={false}
                                onSelect={action('selected')}
                                onPinned={action('pinned')}
                                onMoved={action('moved')}
                                />)
  .add('image top', () => <PlayingCard
                                card={{cardText: 'here is some text'}}
                                top='15px'
                                onSelect={action('selected')}
                                onPinned={action('pinned')}
                                onMoved={action('moved')}
                            />);
