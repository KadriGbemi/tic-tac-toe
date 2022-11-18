export const isPlayerAWinnerHorizontal = (data: string[], player: string) => {
    return data.every((value) => value === player);
};

export const isPlayerAWinnerVertical = (
    boardData: Array<string>[],
    player: string,
    currentBoardItemIndex: number
) => {
    return boardData.every(
        (boardItemData) => boardItemData[currentBoardItemIndex] === player
    );
};

export const isPlayerAWinnerRightDiagonal = (
    boardData: Array<string>[],
    player: string,
    boardItemCount: number
) => {
    return boardData.every(
        (boardItemData, index) => boardItemData[boardItemCount - index] === player
    );
};

export const isPlayerAWinnerLeftDiagonal = (
    boardData: Array<string>[],
    player: string
) => {
    return boardData.every(
        (boardItemData, index) => boardItemData[index] === player
    );
};

export const getWinner = (
    boardData: Array<string>[],
    currentBoardIndex: number,
    currentBoardItemIndex: number,
    player: string,
    allPlayersCurrentMoves: string[],
) => {
    if (isPlayerAWinnerVertical(boardData, player, currentBoardItemIndex))
        return player;

    if (isPlayerAWinnerHorizontal(boardData[currentBoardIndex], player))
        return player;

    if (
        isPlayerAWinnerRightDiagonal(
            boardData,
            player,
            boardData[currentBoardIndex]?.length - 1
        )
    )
        return player;

    if (isPlayerAWinnerLeftDiagonal(boardData, player)) return player;

    return allPlayersCurrentMoves?.length === 8 ? "noWinner" : "";
};

export const showWinner = (nextPlayer: string) => {
    let result;

    switch (nextPlayer) {
        case "":
            result = " ";
            break;
        case "noWinner":
            result = "No winner it is a tie";
            break;
        default:
            result = nextPlayer && `Next player: ${nextPlayer}`;
            break;
    }
    return result;
};

let scores: { [type: string]: number } = {
    X: 1,
    O: -1,
    noWinner: 0,
};

export const minimax = (
    board: Array<string>[],
    depth: number,
    isMaximizing: Boolean,
    boardIndex: number,
    boardItemIndex: number,
    player: string,
    allPlayersCurrentMoves: string[]
) => {


    const data = [...board];

    const winner = getWinner(
        data,
        boardIndex,
        boardItemIndex,
        player,
        allPlayersCurrentMoves
    );

    if (winner) {
        return scores?.[winner];
    }

    if (isMaximizing) {
        let bestScore = -Infinity;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (data[i][j] === "") {
                    data[i][j] = "X";

                    let score = minimax(
                        data,
                        depth + 1,
                        false,
                        i,
                        j,
                        "O",
                        allPlayersCurrentMoves
                    );


                    bestScore = Math.max(score, bestScore);

                    data[i][j] = "";
                }
            }
        }

        return bestScore;

    } else {
        let bestScore = Infinity;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (data[i][j] === "") {
                    data[i][j] = "O";

                    let score = minimax(
                        data,
                        depth + 1,
                        true,
                        i,
                        j,
                        "X",
                        allPlayersCurrentMoves
                    );

                    bestScore = Math.min(score, bestScore);
                    data[i][j] = "";
                }
            }
        }

        return bestScore;
    }
};

export const handleAIMove = (
    board: Array<string>[],
    isPlayerOne: Boolean,
    allPlayersCurrentMoves: string[]
) => {
    let bestScore = -Infinity;
    let bestMove;
    const data = [...board];

    if (isPlayerOne) {
        for (let i = 0; i < 3; i++) {

            for (let j = 0; j < 3; j++) {
                if (data[i][j] === "") {
                    data[i][j] = "O";

                    let score = minimax(
                        data,
                        0,
                        true,
                        i,
                        j,
                        "O",
                        allPlayersCurrentMoves
                    );

                    data[i][j] = "";

                    if (score > bestScore) {
                        bestScore = score;
                        bestMove = { i, j };
                    }
                }
            }
        }
    }
    return bestMove;
};
