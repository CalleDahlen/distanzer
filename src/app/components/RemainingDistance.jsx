'use client'

import { useState } from 'react';

export function RemainingDistance(props) {
    const [distanceGoal, setDistanceGoal] = useState();

    return (
        <div>
            {props.distanceRemaining > 0 ? <p>LET'S  GO</p> : <p>Start your new goal</p>}
        </div>
    );
}