import React from 'react';
import styled from 'styled-components';

export default function IconRank({card, reversed, config}) {
    const RankBase = styled.div`
        font-size: ${config.cardMarkFontSize};
        position: absolute;
        font-weight: bold;
    `;
    const Rank = styled(RankBase)`
        top: ${config.baseTopMark};
        left: ${config.baseLeftMark};
    `;
    const RankReversed = styled(RankBase)`
        -moz-transform: rotate(180deg);
        -ms-transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
        bottom: ${config.baseTopMark};
        right: ${config.baseLeftMark};
    `;

    if (card.suit === 'J') {
        return null;
    }
    if (reversed) {
        return (
            <RankReversed>{card.rank}</RankReversed>
        );
    }
    return (
        <Rank>{card.rank}</Rank>
    );
}

IconRank.defaultProps = {
    card: null,
    reversed: false
};
