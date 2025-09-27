import { useState, useEffect } from "react";

export default function Game()
{
    const cardEmojies = ["🐼","🐯","🦁","🦄","🐶","🐱","🐧","🐥"];
    function SuffleCards()
    {
        const cards = [...cardEmojies,...cardEmojies].map((emoji,index)=>({
            id:index,
            content: emoji,
            isFlipped : False,
            isMatched : False
        }))
        return cards.sort(()=>{Math.random()-0.5})
    }
    const [cards,setCards] = useState(SuffleCards());
    const [selectedCards,setSelectedCards] = useState([]);
    const [moves,setMoves] = useState(0);

    function HandleClick(card)
    {
        if(card.isFlipped || card.isMatched || selectedCards.length===2) return;

        const newCards = cards.map(c=>
            c.id===card.id ? {...c,isFlipped:True} : c
        )
        const newSelectedCards = [...selectedCards,card];
        setCards(newCards);
        setSelectedCards(newSelectedCards);
    }

    useEffect(()=>{
        if(selectedCards.length===2)
        {
            setMoves(t=>t+1);
            const [first,second] = selectedCards;
            if(first.content===second.content)
            {
                const newCards = cards.map(c=>
                    c.content===first.content ? {...c,isMatched:True} :c
                )
                setCards(newCards);
                setSelectedCards([]);
            }
            else
            {
                setTimeout(()=>
                {
                    const newCards = cards.map(c=>
                        c.id===first.id || c.id===second.id ? {...c,isFlipped:false}:c
                    )
                    setCards(newCards);
                },2000);
                setSelectedCards([]);
            }
        }
    },[selectedCards,cards])

    function resetGame()
    {
        setCards(SuffleCards);
        setSelectedCards([]);
        setMoves(0);
    }

    cosnt [level,setLevel] = useState(Easy);

    const isWin = cards.every(c=>c.isMatched);

    return(
        <div>
            <h1>Memory Card Game</h1>
            <p>Total moves : {moves}</p>
            <select name="difficult-level" id="difficult-level" required onChange={(e)=>{setLevel(e.target.value)}}>
                <option value="easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            {cards.map((card)=>(
                <div key={card.id} onClick={HandleClick(card)}>
                    {(card.isFlipped || card.isMatched) && card.content}
                </div>
            ))}
            {isWin && (
                <div>
                    <h2>You Win</h2>
                    <button onClick={resetGame()}>Play Again</button>
                </div>
            )}
            
        </div>
    )
}