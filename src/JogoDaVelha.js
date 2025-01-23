import './Jogo.css'
import { useState } from 'react'


export default function JogoDaVelha() {
    return <>
        <p>Este é o jogo da velha</p>
        <Tabuleiro />
    </>
}
function Quadrado({valor, handleClick}) {
    return <button className="q" onClick={handleClick}>{valor}</button>
}

function Tabuleiro() {

    const [quadrados,setQuadrados] = useState(Array(9).fill(''))
    const [vezDoX, setVezDoX] = useState(true)
    let msg = '';
    let vencedor = verificaVencedor(quadrados);
    if (vencedor) {
        msg = `O vencedor é ${vencedor}`
    } else {
        if (vezDoX) {
            msg = 'Vez do jogador X';
        } else {
            msg = 'Vez do jogador O';
        }
    }
    
    function handleClickQuadrado(i) {
        if (verificaVencedor(quadrados)) {
            msg = 'Temos um vencedor!!!';
            return;
        }
        console.log(i);
        
        if (quadrados[i] == '') {
            console.log(quadrados[i]);
            const quadradosCopia = quadrados.slice();
            if (vezDoX) {
                quadradosCopia[i] = 'X'; 
                setVezDoX(false);
            } else {
                quadradosCopia[i] = 'O';
                setVezDoX(true);
            }
            setQuadrados(quadradosCopia);
            
        }
    }

    return <>
    <p>{msg}</p>
    <div className="linha">
        <Quadrado valor={quadrados[0]} handleClick={() => handleClickQuadrado(0)}/>
        <Quadrado valor={quadrados[1]} handleClick={() => handleClickQuadrado(1)}/>
        <Quadrado valor={quadrados[2]} handleClick={() => handleClickQuadrado(2)}/>
    </div>
    <div className="linha">
        <Quadrado valor={quadrados[3]} handleClick={() => handleClickQuadrado(3)}/>
        <Quadrado valor={quadrados[4]} handleClick={() => handleClickQuadrado(4)}/>
        <Quadrado valor={quadrados[5]} handleClick={() => handleClickQuadrado(5)}/>
    </div>
    <div className="linha">
        <Quadrado valor={quadrados[6]} handleClick={() => handleClickQuadrado(6)}/>
        <Quadrado valor={quadrados[7]} handleClick={() => handleClickQuadrado(7)}/>
        <Quadrado valor={quadrados[8]} handleClick={() => handleClickQuadrado(8)}/>
    </div>
    </>
}

function verificaVencedor(quadrados) {
    if (quadrados[0] == quadrados[1] 
        && quadrados[1] == quadrados[2]
        && quadrados[0] != '') {
            console.log('Temos um vencedor!!!');
            return quadrados[0];
        } 
    return null;
}