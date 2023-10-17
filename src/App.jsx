import React, { useState } from 'react';
import XvdeFrance from './components/XvdeFrance';
import './App.css';

const playerList = [
  {
    name: "DUPONT Antoine",
    poste: "Demi de mêlée",
    club: "Stade Toulousain",
    imgSrc: "https://api.www.ffr.fr/wp-content/uploads/2019/01/dupont-antoine-3-674x1024.jpg",
  },
  {
    name: "MAUVAKA Peato",
    poste: "Talonneur",
    club: "Stade Toulousain",
    imgSrc: "https://api.www.ffr.fr/wp-content/uploads/2019/07/mauvaka-peato-1-765x1024.jpg",
  },
  {
    name: "MARCHAND Julien",
    poste: "Talonneur",
    club: "Stade Toulousain",
    imgSrc: "https://api.www.ffr.fr/wp-content/uploads/2019/01/marchand-julien1-706x1024.jpg",
  },
  {
    name: "BAILLE Cyril",
    poste: "Pilier",
    club: "Stade Toulousain",
    imgSrc: "https://api.www.ffr.fr/wp-content/uploads/2019/01/baille_cyril.jpg",
  },
  {
    name: "ALLDRITT Grégory",
    poste: "3ème ligne",
    club: "Stade Rochelais",
    imgSrc: "https://api.www.ffr.fr/wp-content/uploads/2019/02/alldritt-gregory-1-693x1024.jpg",
  },
  {
    name: "JAMINET Melvyn",
    poste: "Arrière",
    club: "Stade Toulousain",
    imgSrc: "https://api.www.ffr.fr/wp-content/uploads/2021/06/jaminet_melvin-715x1024.jpg",
  },
];

function App() {

  const [playerIndex, setPlayerIndex] = useState(0);

  const handlePrecedent = () => {
    if (playerIndex > 0) {
      setPlayerIndex(playerIndex - 1);
    }
  };

  const handleSuivant = () => {
    if (playerIndex < playerList.length - 1) {
      setPlayerIndex(playerIndex + 1);
    }

  };



  return (

    <>
      <XvdeFrance player={playerList[playerIndex]} />
      <button onClick={handlePrecedent} style={{ display: playerIndex === 0 ? 'none' : 'inline-block' }}>PRECEDENT</button>
      <button onClick={handleSuivant} style={{ display: playerIndex === playerList.length - 1 ? 'none' : 'inline-block' }}>SUIVANT</button>
    </>


  );
}

export default App;
