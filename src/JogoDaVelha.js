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

    function reiniciarJogo() {
        setQuadrados(Array(9).fill(''));
        setVezDoX(true);
    }

    return <>
    <p>{msg}</p>
    <button onClick={reiniciarJogo}>Reiniciar jogo</button>
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
    /*
        0 1 2
        3 4 5
        6 7 8
    */ 
   /*
       00 01 02
       10 11 12
       20 21 22 dp i == j ds i + j == len-1
   */

       const combinacoesVencedoras = [
        // linhas
        [0, 1, 2], //linha1
        [3, 4, 5], //linha2
        [6, 7, 8], //linha3

        //colunas
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        //dp e ds
        [0, 4, 8],
        [6, 4, 2]
    ]

    for (let i=0; i < combinacoesVencedoras.length; i++) {
        const [p1,p2,p3] = combinacoesVencedoras[i];
        if (quadrados[p1] && 
            quadrados[p1] == quadrados[p2] &&
            quadrados[p2] == quadrados[p3]) { 
    
                return quadrados[p1];
        }
    }
    return null;
}

