import './Jogo.css'
import { useState } from 'react'


export default function JogoDaVelha() {
    return <>
        <p>Este é o jogo da velha</p>
        <Tabuleiro />
    </>
}
function Quadrado({valor}) {
    return <button className="q">{valor}</button>
}

function Tabuleiro() {

    const [quadrados,setQuadrados] = useState(Array(9).fill(''))
    const [vezDoX, setVezDoX] = useState(true)
    let msg = '';
    if (vezDoX) {
        msg = 'Vez do jogador X';
    } else {
        msg = 'Vez do jogador O';
    }

    function handleClick() {
        if (vezDoX) {
            //setValor('X')
        } else {
            //setValor('O')
        }
    }

    return <>
    <p>{msg}</p>
    <div className="linha">
        <Quadrado valor={quadrados[0]}/>
        <Quadrado valor={quadrados[1]}/>
        <Quadrado valor={quadrados[2]}/>
    </div>
    <div className="linha">
        <Quadrado valor={quadrados[3]}/>
        <Quadrado valor={quadrados[4]}/>
        <Quadrado valor={quadrados[5]}/>
    </div>
    <div className="linha">
        <Quadrado valor={quadrados[6]}/>
        <Quadrado valor={quadrados[7]}/>
        <Quadrado valor={quadrados[8]}/>
    </div>
    </>
}