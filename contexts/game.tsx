import { createContext, useState, useEffect } from "react";

import {
  GameContextInterface,
  GameContextProps,
  GameHistory,
} from "../types/game";

export const GameContext = createContext<GameContextInterface>({
  players: {
    player1: "",
    player2: "",
  },
  isPlayerOne: false,
  setPlayers: () => {},
  setIsPlayerOne: () => {},
  setPlayersName: () => {},
  setWinner: () => {},
  gameHistory: [],
  setGameHistory: () => {},
});

export const GameProvider = ({ children }: GameContextProps) => {
  const [players, setPlayers] = useState({});
  const [isPlayerOne, setIsPlayerOne] = useState(false);
  const [gameHistory, setGameHistory] = useState<GameHistory[]>([]);

  useEffect(() => {
    const player1 = localStorage.getItem("X") || "";
    const player2 = localStorage.getItem("O") || "";
    const isPlayerOne = !!localStorage.getItem("isPlayerOne");

    setIsPlayerOne(isPlayerOne);

    setPlayers({
      player1: player1 ? "X" : "O",
      player2: player2 ? "O" : "X",
    });

    setPlayersName({
      X: player1,
      O: player2,
    });
  }, []);

  const [playersName, setPlayersName] = useState({
    X: "",
    O: "",
  });

  const [winner, setWinner] = useState("");

  return (
    <GameContext.Provider
      value={{
        isPlayerOne,
        setIsPlayerOne,
        players,
        setPlayers,
        winner,
        setWinner,
        playersName,
        gameHistory,
        setGameHistory,
        setPlayersName,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
