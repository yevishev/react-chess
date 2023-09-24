import React, { useRef, useState, useEffect } from "react";
import styles from './Board.module.css';

import Coordinates from "./Coordinates/Coordinates";

import brPicture from '../../static/img/br.png';
import bnPicture from '../../static/img/bn.png';
import bbPicture from '../../static/img/bb.png';
import bqPicture from '../../static/img/bq.png';
import bkPicture from '../../static/img/bk.png';
import bpPicture from '../../static/img/bp.png';
import wrPicture from '../../static/img/wr.png';
import wnPicture from '../../static/img/wn.png';
import wbPicture from '../../static/img/wb.png';
import wqPicture from '../../static/img/wq.png';
import wkPicture from '../../static/img/wk.png';
import wpPicture from '../../static/img/wp.png';
//
//let arr = [1,2,3,4,5];
//let f =  (num) => {
//    return new Promise(resolve => {
//        setTimeout(() => {
//            resolve(num * 2)
//        }, Math.random() * 2000)
//    })
//} //вызывать f только после прохождения таймаута последовательно для к
//

// type Point = {
//     x: number,
//     y: number,
// }
//цвет, название, картинка и матрица ходов


export default () => {
    const [boardRect, setBoardRect] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [pieceMap, setPieceMap] = useState([
        [
            {'pic' : brPicture,},
            {'pic' : bnPicture,},
            {'pic' : bbPicture,},
            {'pic' : bqPicture,},
            {'pic' : bkPicture,},
            {'pic' : bbPicture,},
            {'pic' : bnPicture,},
            {'pic' : brPicture,},
        ],
        [
            {
                'pic' : bpPicture,
//                'movement' : pawnMovement,
            },
            {'pic' : bpPicture,},
            {'pic' : bpPicture,},
            {'pic' : bpPicture,},
            {'pic' : bpPicture,},
            {'pic' : bpPicture,},
            {'pic' : bpPicture,},
            {'pic' : bpPicture,},
        ],
        [{},{},{},{},{},{},{},{},],
        [{},{},{},{},{},{},{},{},],
        [{},{},{},{},{},{},{},{},],
        [{},{},{},{},{},{},{},{},],
        [
            {'pic' : wpPicture,},
            {'pic' : wpPicture,},
            {'pic' : wpPicture,},
            {'pic' : wpPicture,},
            {'pic' : wpPicture,},
            {'pic' : wpPicture,},
            {'pic' : wpPicture,},
            {'pic' : wpPicture,},
            ],
        [
            {'pic' : wrPicture,},
            {'pic' : wnPicture,},
            {'pic' : wbPicture,},
            {'pic' : wqPicture,},
            {'pic' : wkPicture,},
            {'pic' : wbPicture,},
            {'pic' : wnPicture,},
            {'pic' : wrPicture,},
        ],
    ]);


    useEffect(() => {
        const board = document.querySelector(`.${styles.board}`);
        const updateBoardRect = () => {
            setIsLoading(false);
            const newRectData = board.getBoundingClientRect();
            setBoardRect(newRectData);
            setIsLoading(true);
        }
        updateBoardRect();
        window.addEventListener('resize', updateBoardRect);
        return () => {
            window.removeEventListener('resize', updateBoardRect)
        }
    }, []);
    /*
        MouseMove - use on window
        MouseUp - use on window
        MouseDown - use on piece
    */

    const handleMouseDown = (e) => {
        const piece = e.target; //piece
        const board = e.target.parentNode.getBoundingClientRect();
        piece.style.left = e.clientX - piece.offsetWidth / 2 + 'px';
        piece.style.top = e.clientY - piece.offsetHeight / 2 + 'px';
        piece.style.position = 'fixed';

        const mouseUp = (e) => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseup', mouseUp);

            const gridSize = board.width / 8; //size of single cell
            const pieceOnBoardX = e.clientX - board.left;//current coordinate X (left) - left distance from border screen to board
            const pieceOnBoardY = e.clientY - board.top;//current coordinate Y (top) - top distance from border screen to board

            if (pieceOnBoardX < 0) {
                piece.style.left = 0 + '%';
                piece.dataset.column = '0';
            } else if (pieceOnBoardX + board.left > board.right) {
                piece.style.left = 87.5 + '%';
                piece.dataset.column = '7';
            } else {
                const pieceX = Math.floor((pieceOnBoardX) / gridSize) * 100/8;
                const pieceXtoFixed = pieceX.toFixed(1); 
                piece.style.left = pieceXtoFixed + '%';
                piece.dataset.column = (pieceXtoFixed / 12.5).toString();
            }

            if (pieceOnBoardY < 0) {
                piece.style.top = 0 + '%';
                piece.dataset.row = '0';
            } else if (pieceOnBoardY + board.top > board.bottom) {
                piece.style.top = 87.5 + '%';
                piece.dataset.row = '7';
            } else {
                const pieceY = Math.floor((pieceOnBoardY) / gridSize) * 100/8;
                const pieceYtoFixed = pieceY.toFixed(1); 
                piece.style.top = pieceYtoFixed + '%';
                piece.dataset.row = (pieceYtoFixed / 12.5).toString();
            }

            piece.style.position = 'absolute';       
            console.log(piece.dataset.row, piece.dataset.column);    
        }

        const mouseMove = (e) => {
            const onMovePieceX = e.clientX - piece.offsetWidth / 2;
            const onMovePieceY = e.clientY - piece.offsetHeight / 2;
            if (onMovePieceX >= (board.right - piece.offsetWidth)) {
                piece.style.left = board.right - piece.offsetWidth + 'px';
            } else if (onMovePieceX <= board.left) {
                piece.style.left = board.left + 'px';
            } else {
                piece.style.left = onMovePieceX + 'px';
            }

            if (onMovePieceY >= (board.bottom - piece.offsetWidth)) {
                piece.style.top = board.bottom - piece.offsetWidth + 'px';
            } else if (onMovePieceY <= board.top) {
                piece.style.top = board.top + 'px';
            } else {
                piece.style.top = onMovePieceY + 'px';
            }
        }
        
        window.addEventListener('mousemove', mouseMove)
        window.addEventListener('mouseup', mouseUp)


    }

    return (
        <div className={styles.board}>
            <Coordinates />
            {isLoading &&
            pieceMap.map((pieces, rowIndex) => {
                return pieces.map((value, columnIndex) => {
                    if ('pic' in value) {
                        return (
                            <div
                                key={`${rowIndex}-${columnIndex}`}
                                data-row={rowIndex}
                                data-column={columnIndex}
                                style= {{
                                    backgroundImage: `url("${value.pic}")`,
                                    left: `${columnIndex * 12.5}%`,
                                    top: `${rowIndex * 12.5}%`
                                }}
                                className={`${styles.piece}`}
                                onMouseDown={handleMouseDown} />
                                );
                    }
             })
        })}
        </div>
    )
}