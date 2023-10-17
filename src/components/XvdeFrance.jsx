import './XvdeFrance.css'
import React from 'react';

function XvdeFrance({ player }) {
    console.log(player);

    return (
        <div>
            <img src={player.imgSrc} />
            <h1>{player.name}</h1>
            <p>POSTE : {player.poste}</p>
            <p>CLUB : {player.club}</p>
        </div>
    );
}

export default XvdeFrance;
