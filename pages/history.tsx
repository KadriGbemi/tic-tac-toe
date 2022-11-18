import { useContext } from "react";
import { GameContext } from "../contexts/game";
import Link from "next/link";

export default function GameHistory() {
  const { gameHistory, playersName } = useContext(GameContext);
  const dateTimeFormat = new Intl.DateTimeFormat("en-US", {
    timeStyle: "medium",
    dateStyle: "short",
  });

  return (
    <div className="container">
      {gameHistory?.length ? (
        <div className="history">
          <p>
            <Link href="/game">Back to game board</Link> Game History
          </p>
          <div>
            {gameHistory.map((history) => (
              <p>
                <span>
                  Player name:{" "}
                  {history?.move && (playersName?.[history?.move] || "-")}
                </span>
                ,<span>Move: {history?.move}</span>,
                <span>
                  Time:{" "}
                  {history?.moveTime &&
                    dateTimeFormat.format(history?.moveTime)}
                </span>
                ,<span>Winner: {history.win}</span>
              </p>
            ))}
          </div>
        </div>
      ) : (
        <div>
          There is no game history available, win a game to view game history,{" "}
          <Link href="/game">Check game board</Link>
        </div>
      )}
    </div>
  );
}
