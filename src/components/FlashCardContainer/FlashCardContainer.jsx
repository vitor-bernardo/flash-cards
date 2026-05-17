import { useState } from "react"
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { flashCardsContent } from "../../data/flashcards-content";
import { FlashCard } from "../FlashCard/FlashCard";

export const FlashCardContainer = () => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashCardsContent.length)
        setIsFlipped(false)
    }
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + flashCardsContent.length) % flashCardsContent.length)
        setIsFlipped(false)
    }
    const handleFlip = () => {
        setIsFlipped((prev) => !prev)
    }

    return (
        <>
            <div className="flashcard-container">
                <ProgressBar currentIndex={currentIndex} totalCards={flashCardsContent.length} />
                <div className="flashcard-div"></div>
            </div>
            <FlashCard
                question={flashCardsContent[currentIndex].question}
                answer={flashCardsContent[currentIndex].answer}
                isFlipped={isFlipped}
                onFlip={handleFlip}
            />

            <div className="botoes">
                <div
                    className={`anterior-proximo ${currentIndex === 0 ? 'disabled' : ''}`}
                    onClick={currentIndex === 0 ? undefined : handlePrevious}
                >
                    <p>Anterior</p>
                </div>
                <button className="mostrar-resposta" onClick={handleFlip}>{isFlipped ?
                    ("Esconder Resposta") : ("Mostrar Resposta")
                }
                </button>
                <div className="anterior-proximo" onClick={handleNext}>
                    <p>Próximo</p>
                </div>
            </div>

        </>

    )


}