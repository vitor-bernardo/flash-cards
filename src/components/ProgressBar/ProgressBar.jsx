export const ProgressBar = ({ currentIndex, totalCards }) => {
    const progressPorcentagem = ((currentIndex + 1)) / totalCards * 100
    const porcentagemFormatada = progressPorcentagem.toFixed(0)

    return (
        <div className="progress-container">
            <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${porcentagemFormatada}%` }}>
                    <p className="porcentagem">
                        {porcentagemFormatada}%</p>
                </div>
            </div>

            <div className="progress-counter">{currentIndex + 1} de {totalCards}</div>
        </div>
    );
};


