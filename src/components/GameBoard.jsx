export default function GameBoard({ level, cards, HandleClick }) {
    return (
        <div>
            <div className="board" style={{gridTemplateColumns: level === "easy" ? "repeat(4, 1fr)" : "repeat(6, 1fr)"}}>
                {cards.map((card) => (
                    <div key={card.id} onClick={() => HandleClick(card)}
                        className={`card ${card.isFlipped || card.isMatched ? "flipped" : ""}`}
                        style={{ "--rotate": card.isFlipped || card.isMatched ? "180deg" : "0deg" }}
                        data-content={card.isFlipped || card.isMatched ? card.content : ""}
                    />
                ))}
            </div>
        </div>
    );
}
