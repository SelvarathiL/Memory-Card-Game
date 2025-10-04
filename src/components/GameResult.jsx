export default function GameResult({ isWin, points, resetGame, timeLeft }) {
    return (
        <div>
            {timeLeft === 0 && !isWin && (
                <div className="game-result">
                    <h2>You Lose!</h2>
                    <p>Your Score: {points}</p>
                    <button onClick={resetGame}>Play Again</button>
                </div>
            )}
            {isWin && (
                <div className="game-result">
                    <h2>You Win!</h2>
                    <p>Your Score: {points}</p>
                    <button onClick={resetGame}>Play Again</button>
                </div>
            )}
        </div>
    );
}
