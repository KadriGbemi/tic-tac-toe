import { ReactNode } from "react";

export type GameHistory = {
    moveTime?: Date,
    move?: string,
    win?: string
}

export type GameContextInterface = {
    players?: {
        player1?: string,
        player2?: string,
    },
    isPlayerOne: Boolean;
    winner?: string,
    setPlayers: Function,
    setWinner: Function,
    playersName?: {
        [type: string]: string,
    },
    setPlayersName: Function,
    setIsPlayerOne: Function,
    gameHistory: GameHistory[],
    setGameHistory: Function
}

export type GameContextProps = {
    children?: ReactNode;
}

