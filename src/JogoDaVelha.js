import './Jogo.css'

export default function JogoDaVelha() {
    return <>
        <p>Este é o jogo da velha</p>
        <Tabuleiro />
    </>
}

function Tabuleiro() {
    return <>
    <div className="linha">
        <button className="q">X</button>
        <button className="q">X</button>
        <button className="q">X</button>
    </div>
    <div className="linha">
        <button className="q">X</button>
        <button className="q">X</button>
        <button className="q">X</button>
    </div>
    <div className="linha">
        <button className="q">X</button>
        <button className="q">X</button>
        <button className="q">X</button>
    </div>
    </>
}