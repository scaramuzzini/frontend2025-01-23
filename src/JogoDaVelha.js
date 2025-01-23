import './Jogo.css'


export default function JogoDaVelha() {
    return <>
        <p>Este é o jogo da velha</p>
        <Tabuleiro />
    </>
}
import { useState } from 'react'
function Quadrado() {
    const [valor, setValor] = useState('')

    function handleClick() {
        setValor('X')
    }
    return <button className="q" onClick={handleClick}>{valor}</button>
}

function Tabuleiro() {
    return <>
    <div className="linha">
        <Quadrado/>
        <Quadrado/>
        <Quadrado/>
    </div>
    <div className="linha">
        <Quadrado/>
        <Quadrado/>
        <Quadrado/>
    </div>
    <div className="linha">
        <Quadrado/>
        <Quadrado/>
        <Quadrado/>
    </div>
    </>
}