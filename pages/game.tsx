import { useState, useContext } from "react";
import { GameContext } from "../contexts/game";
import { useRouter } from "next/router";
import Link from "next/link";
import { getWinner, showWinner, handleAIMove } from "../utils";

export default function Home() {
  const router = useRouter();
  const emptyData = Array.from({ length: 3 }, () => Array(3).fill(""));

  const {
    players,
    isPlayerOne,
    winner = "",
    setWinner,
    setPlayers,
    setPlayersName,
    playersName,
    gameHistory,
    setGameHistory,
    setIsPlayerOne,
  } = useContext(GameContext);

  const [boardData, setBoardData] = useState(emptyData);
  const [allPlayersCurrentMoves, setCurrentPlayerMoves] = useState<string[]>(
    []
  );
  const [player1WinsHistory, setPlayer1WinsHistory] = useState<string[]>([]);
  const [player2WinsHistory, setPlayer2WinsHistory] = useState<string[]>([]);
  const [playerDrawHistory, setPlayerDrawHistory] = useState<string[]>([]);

  const [player, setPlayer] = useState("");
  const [nextPlayer, setNextPlayer] = useState("");

  const winnerName = playersName?.[winner] || winner;
  const nextPlayerName = playersName?.[nextPlayer] || nextPlayer;

  const setWinCount = (currentWinner?: string) => {
    switch (currentWinner) {
      case "X":
        setPlayer1WinsHistory([...player1WinsHistory, currentWinner]);
        break;
      case "O":
        setPlayer2WinsHistory([...player2WinsHistory, currentWinner]);
        break;
      case "noWinner":
        setPlayerDrawHistory([...playerDrawHistory, currentWinner]);
        break;
    }
  };

  return (
    <div className="container">
      <Link href="/">Go to edit players</Link>
      <Link href="/history">Go to game history</Link>

      <button
        onClick={() => {
          localStorage.removeItem("X");
          localStorage.removeItem("O");
          localStorage.removeItem("isPlayerOne");

          setBoardData(emptyData);
          setWinner("");
          setCurrentPlayerMoves([]);
          setNextPlayer("");

          setPlayers();
          setPlayersName();
          setIsPlayerOne(false);
          router.push("/");
        }}
      >
        End Game
      </button>

      <main className="main">
        <div>
          <p>
            {winnerName ? (
              <span>{`${winnerName} wins`} </span>
            ) : (
              showWinner(nextPlayerName)
            )}
          </p>
          {winner || nextPlayer === "noWinner" ? (
            <button
              onClick={() => {
                setBoardData(emptyData);
                setWinner("");
                setCurrentPlayerMoves([]);
                setNextPlayer("");
              }}
            >
              Restart Game
            </button>
          ) : null}
        </div>

        <div>Player wins count: {player1WinsHistory?.length} </div>
        <div>Opponent wins count: {player2WinsHistory?.length} </div>
        <div>Draw count: {playerDrawHistory?.length}</div>

        {boardData?.map((item, boardIndex) => {
          return (
            <div className="board-row" key={boardIndex}>
              {item?.map((value, boardItemIndex) => (
                <button
                  className="board-item"
                  key={boardItemIndex}
                  onClick={() => {
                    if (!winner && !boardData?.[boardIndex]?.[boardItemIndex]) {
                      const data = [...boardData];

                      const defaultPlayer = players?.player1 || "";

                      const getPreviousPlayer = player === "O" ? "X" : "O";

                      const getCurrentPlayer = player
                        ? getPreviousPlayer
                        : defaultPlayer;

                      const getNextPlayer =
                        getCurrentPlayer === "O" ? "X" : "O";

                      setPlayer(getCurrentPlayer);

                      data[boardIndex][boardItemIndex] = isPlayerOne
                        ? "X"
                        : getCurrentPlayer;

                      setBoardData(data);

                      setNextPlayer(getNextPlayer);

                      let getCurrentPlayerMoves = allPlayersCurrentMoves.concat(
                        [getCurrentPlayer]
                      );

                      let isPlayerWinner = getWinner(
                        data,
                        boardIndex,
                        boardItemIndex,
                        getCurrentPlayer,
                        allPlayersCurrentMoves
                      );

                      const moves = handleAIMove(
                        data,
                        isPlayerOne,
                        allPlayersCurrentMoves
                      );

                      let isComputerWinner = "";

                      if (isPlayerOne) {
                        setNextPlayer("X");

                        if (moves) {
                          data[moves.i][moves.j] = "O";

                          isComputerWinner = getWinner(
                            data,
                            moves.i,
                            moves.j,
                            "O",
                            allPlayersCurrentMoves
                          );

                          getCurrentPlayerMoves = getCurrentPlayerMoves.concat([
                            "O",
                          ]);

                          setGameHistory([
                            ...gameHistory,
                            {
                              moveTime: new Date(),
                              move: isComputerWinner ? "O" : "X",
                              win:
                                isComputerWinner || isPlayerWinner
                                  ? "Yes"
                                  : "No",
                            },
                          ]);
                        }
                      } else {
                        setGameHistory([
                          ...gameHistory,
                          {
                            moveTime: new Date(),
                            move: getCurrentPlayer,
                            win: isPlayerWinner ? "Yes" : "No",
                          },
                        ]);
                      }

                      let currentWinner = isPlayerWinner || isComputerWinner;
                      setWinCount(currentWinner || isComputerWinner);

                      if (currentWinner) {
                        if (currentWinner !== "noWinner") {
                          setWinner(currentWinner);
                          setPlayers({
                            player1: currentWinner,
                          });
                        } else {
                          setWinner("");
                          setPlayers({
                            player1: "X",
                          });
                        }

                        setNextPlayer(currentWinner);
                        setPlayer("");
                      }

                      setCurrentPlayerMoves(getCurrentPlayerMoves);
                    }
                  }}
                >
                  <span className={`player--color-${value}`}>{value}</span>
                </button>
              ))}
            </div>
          );
        })}
      </main>
    </div>
  );
}
