export const FlashCard = ({ question, answer, isFlipped, onFlip }) => {
    return (
        <div className="flashcard" onClick={onFlip}>
            {isFlipped ? (
                <div className="answer">
                    <span className="card-label">Resposta</span>
                    {answer}
                </div>
            ) : (
                <div className="question">
                    <span className="card-label">Pergunta</span>
                    {question}
                </div>
            )}
        </div>
    )
}