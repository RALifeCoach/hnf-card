import React, { useState } from 'react';
import Debounce from './../utils/debounce';
import styled from 'styled-components';
import CardIcons from './card-icons';

const DEFAULTS = {
    buttonHighlight = '#f00',
    cardBackground = '#CCC5B3',
    cardMarkFontSize = '20px',
    baseTopMark = '3%',
    baseTopSuit = '1%',
    baseLeftMark = '9%',
    baseLeftSuit = '5%',
    belowOffsetTop = '30%',
    pinOffsetTop = '60%',
    moveOffsetTop = '80%',
    besideOffsetLeft = '30%',
    suitConstants = {
        C: {
            image: String.fromCharCode(9827),
            color: '#000'
        },
        D: {
            image: String.fromCharCode(9830),
            color: '#F00'
        },
        H: {
            image: String.fromCharCode(9829),
            color: '#F00'
        },
        S: {
            image: String.fromCharCode(9824),
            color: '#000'
        },
        J: {
            image: String.fromCharCode(9733),
            color: '#00F'
        }
    }
};

export default function PlayingCard({card, left, onSelect, cardSelected, styling, ...props}) {
    const config = Object.assign({}, DEFAULTS, styling);
    const [ selected, setSelect ] = useState(cardSelected);
    const selectDebounce = new Debounce(() => {
        setSelect(!selected);
        onSelect();
    }, 300, true);

    const Card = styled.div`
        position: absolute;
        left: ${left};
        width: 70px;
        height: 98px;
        overflow: hidden;
        margin-top: ${selected ? 0 : '10px'};
        background: ${Config.cardBackground};
        -moz-border-radius: 12px;
        -webkit-border-radius: 12px;
        border-radius: 12px;
        -moz-box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);
        -webkit-box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);
        color: ${Config.suitConstants[card.suit].color}
    `;

    return (
        <Card
            onClick={onSelect ? event => selectDebounce.debounce(event) : null}
        >
            {card.cardText &&
                <div className="s-card-text">
                    {card.cardText}
                </div>
            }
            {!card.cardText && (
                <CardIcons
                    card={card}
                    selected={selected}
                    config={config}
                    {...props}
                />
            )}
        </Card>
    );
}

PlayingCard.defaultProps = {
    card: null,
    imageLocation: 'below',
    left: 0,
    cardSelected: false,
    showIcons: false,
    onSelect: null,
    onPinned: null,
    onMoved: null
};
