import React from 'react';
import Debounce from '../utils/debounce';
import styled from 'styled-components';

export default function IconMove({showIcons, selected, onMoved, config}) {
    const Move = styled.i`
        position: absolute;
        top: ${config.moveOffsetTop};
        left: ${config.baseLeftMark};
    `;

    const moveDebounce = new Debounce(onMoved, 300, true);

    const showMove = onMoved && selected && showIcons;

    if (!showMove) {
        return null;
    }
    return (
        <Move className="glyphicon glyphicon-move"
            onClick={onMoved ? event => moveDebounce.debounce(event) : null}
        />
    );
}

IconMove.defaultProps = {
    showIcons: false,
    selected: false,
    onMoved: null
};
