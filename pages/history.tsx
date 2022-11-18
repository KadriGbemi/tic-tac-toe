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
          <small>
            <Link href="/game">Back to game board</Link>
          </small>
          <h2 className="title">Game history details</h2>
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1">Player name</div>
              <div className="col col-2">Player's move</div>
              <div className="col col-3">Time</div>
              <div className="col col-4">Winner</div>
            </li>
            <div>
              {gameHistory.map((history) => (
                <li className="table-row">
                  <div className="col col-1" data-label="Player name">
                    {history?.move && (playersName?.[history?.move] || "-")}
                  </div>
                  <div className="col col-2" data-label="Player's move">
                    {history?.move}
                  </div>
                  <div className="col col-3" data-label="Time">
                    {history?.moveTime &&
                      dateTimeFormat.format(history?.moveTime)}
                  </div>
                  <div className="col col-4" data-label="Winner">
                    {history.win}
                  </div>
                </li>
              ))}
            </div>
          </ul>
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
