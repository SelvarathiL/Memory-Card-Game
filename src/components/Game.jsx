import { useState, useEffect } from "react";
import GameHeader from "./GameHeader";
import GameBoard from "./GameBoard";
import GameResult from "./GameResult";
import './Game.css';

export default function Game() {
    const cardEmojies1 = ["🌸", "🌹", "🌺", "🌻", "🌼", "🌷", "🪻", "💐"];
    const cardEmojies2 = [
        "🌸","🌹","🌺","🌻","🌼","🌷","🪻","🥀",
        "💐","🍁","🍀","🍄","🪷","🌈","✨","⭐",
        "💎","🦋"
    ];

    const [level,setLevel] = useState("easy");
    const [cards,setCards] = useState(SuffleCards(cardEmojies1));
    const [selectedCards,setSelectedCards] = useState([]);
    const [moves,setMoves] = useState(0);
    const [points,setPoints] = useState(0);
    const [timeLeft, setTimeLeft] = useState(180);
    const [hintCount, setHintCount] = useState(0);
    const [showHintPopup, setShowHintPopup] = useState(false);

    function SuffleCards(cardEmojies) {
        const cards = [...cardEmojies, ...cardEmojies].map((emoji, index) => ({
            id: index,
            content: emoji,
            isFlipped: false,
            isMatched: false
        }));
        return cards.sort(() => Math.random() - 0.5);
    }

    function HandleClick(card) {
        if (card.isFlipped || card.isMatched || selectedCards.length === 2) return;
        const newCards = cards.map(c =>
            c.id === card.id ? { ...c, isFlipped: true } : c
        );
        const clickedCard = newCards.find(c => c.id === card.id);
        setCards(newCards);
        setSelectedCards([...selectedCards, clickedCard]);
    }

    function Hint() {
        if (hintCount >= 3) {
            setShowHintPopup(true);
            setTimeout(() => setShowHintPopup(false), 1000); // hide after 2 seconds
            return;
        }
        setHintCount(prev => prev + 1);

        setCards(prevCards => {
        const flippedCards = prevCards.map(c => ({ ...c, isFlipped: true }));

        setTimeout(() => {
            setCards(currentCards =>
                currentCards.map(c =>
                    c.isMatched ? c : { ...c, isFlipped: false }
                )
            )}, 2000);

            return flippedCards;
        });
    }

    // score update
    useEffect(() => {
        const maxScore = level === "easy" ? 500 : 1000;
        const penalty = level === "easy" ? 10 : 20;
        let point = Math.max(0, maxScore - (moves * penalty));
        setPoints(point);
    }, [moves, level]);

    // timer
    const isWin = cards.every(c => c.isMatched);
    useEffect(() => {
        if (timeLeft <= 0 || isWin) return;
        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft, isWin]);

    // level change
    useEffect(() => {
        setCards(SuffleCards(level === "easy" ? cardEmojies1 : cardEmojies2));
        setSelectedCards([]);
        setMoves(0);
        setTimeLeft(180);
    }, [level]);

    useEffect(() => {
        if (selectedCards.length === 2) 
        {
            setMoves(t => t + 1);
            const [first, second] = selectedCards;
            if (first.content === second.content) 
            {
                const newCards = cards.map(c =>
                    c.content === first.content ? { ...c, isMatched: true } : c
                );
                setCards(newCards);
                setSelectedCards([]);
            } 
            else 
            {
                setTimeout(() => {
                    const newCards = cards.map(c =>
                        c.id === first.id || c.id === second.id
                            ? { ...c, isFlipped: false }
                            : c
                    );
                    setCards(newCards);
                    setSelectedCards([]);
                }, 1000);
            }
        }
    }, [selectedCards, cards]);

    function resetGame() {
        setCards(SuffleCards(level === "easy" ? cardEmojies1 : cardEmojies2));
        setSelectedCards([]);
        setMoves(0);
        setTimeLeft(180);
        setHintCount(0);
    }

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div>
            <GameHeader level={level} setLevel={setLevel} Hint={Hint} moves={moves} points={points} isWin={isWin} seconds={seconds} minutes={minutes}/>
            <div className="game-container">
                <GameBoard level={level} cards={cards} HandleClick={HandleClick} />
                <GameResult isWin={isWin} points={points} resetGame={resetGame} timeLeft={timeLeft} />
            </div>
            {showHintPopup && (
                <div className="hint-popup">
                    3 hints only available!
                </div>
            )}
        </div>
    );
}
