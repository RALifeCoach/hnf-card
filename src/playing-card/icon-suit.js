import React from 'react';
import styled from 'styled-components';

export default function IconSuit({card, imageLocation, reversed, config}) {
    const SuitBase = styled.div`
        font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
        position: absolute;
        font-weight: bold;
    `;
    const Suit = styled(SuitBase)`
        top: ${card.suit === 'J'
            ? config.baseTopMark
            : imageLocation === 'below'
                ? config.belowOffsetTop
                : config.baseTopSuit};
        left: ${card.suit === 'J'
            ? config.baseLeftMark
            : imageLocation === 'below'
                ? config.baseLeftMark
                : config.besideOffsetLeft};
    `;
    const SuitReversed = styled(SuitBase)`
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
        bottom: ${card.suit === 'J'
            ? config.baseTopMark
            : imageLocation === 'below'
                ? config.belowOffsetTop
                : config.baseTopSuit};
        right: ${card.suit === 'J'
            ? config.baseLeftMark
            : imageLocation === 'below'
                ? config.baseLeftMark
                : config.besideOffsetLeft};
    `;

    const image = config.suitConstants[card.suit].image;
    if (reversed) {
        return (
            <SuitReversed>{image}</SuitReversed>
        );
    }
    return (
        <Suit>{image}</Suit>
    );
}

IconSuit.defaultProps = {
    card: null,
    imageLocation: 'below',
    reversed: false
};
