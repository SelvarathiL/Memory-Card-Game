
export default function GameHeader({ level, setLevel, Hint, moves, points, isWin,seconds,minutes }) {
    return (
        <header className="game-header">
            <div className="header-left">
                <h1 className="logo">🧠 Memory Card Game</h1>
            </div>

            <div className="header-right">
                <div className="controls">
                <select
                    name="difficult-level"
                    id="difficult-level"
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                >
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <button onClick={Hint}>Hint</button>
                </div>
                
                <div className="stats">
                <p>Moves: <strong>{moves}</strong></p>
                <p>Points: <strong>{points}</strong></p>
                {level === "hard" && (
                    <p className="time-left">⏳ Time Left: {minutes}:{seconds < 10 ? "0" : ""}{seconds}</p>
                )}
                </div>
            </div>
        </header>
    );
}