import React, { useRef, useState, useEffect } from "react";
import styles from './Board.module.css';

import Coordinates from "./Coordinates/Coordinates";



// type Point = {
//     x: number,
//     y: number,
// }

export default () => {

    const [piecesPlace, setPiecesPlace] = useState([
        ['br', 'bn', 'bb', 'bq', 'bk', 'bb', 'bn', 'br'],
        ['bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp', 'bp'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp', 'wp'],
        ['wr', 'wn', 'wb', 'wq', 'wk', 'wb', 'wn', 'wr'],
    ]);
    // const handleDragStart = () => {
    //     setIsDragging(true);
    // };

    // // const handleDragEnd = () => {
    // //     console.log('its end');
    // //     setIsDragging(false);
    // // };


    // const handleDragEnd = (e) => {
    //     console.log('its over');
    //     const rect = e.target.parentNode.getBoundingClientRect();
    //     const gridSize = rect.width / 8;
    //     if (isDragging) {
    //         setPosition({
    //             //позиция курсора 
    //             x: Math.floor((e.clientX - rect.left) / gridSize) * gridSize, // Центрирование фигуры под курсором
    //             y: Math.floor((e.clientY - rect.top) / gridSize) * gridSize,
    //         });
    //     }
    // };

    // const handleDragOver = (e) => {
    //     e.preventDefault();
    //     return true;
    //     // e.preventDefault
    // }

    /*
        MouseMove - use on window
        MouseUp - use on window
        MouseDown - use on piece
    */

    const handleMouseDown = (e) => {
        const piece = e.target; //piece
        piece.style.left = e.clientX - piece.offsetWidth / 2 + 'px';
        piece.style.top = e.clientY - piece.offsetHeight / 2 + 'px';
        piece.style.position = 'fixed';

        const mouseUp = (e) => {
            window.removeEventListener('mousemove', mouseMove);
            window.removeEventListener('mouseup', mouseUp);

            const board = e.target.parentNode.getBoundingClientRect(); //board data
            const gridSize = board.width / 8; //size of single cell
            const pieceOnBoardX = e.clientX - board.left;//current coordinate X (left) - left distance from border screen to board
            const pieceOnBoardY = e.clientY - board.top;//current coordinate Y (top) - top distance from border screen to board

            const pieceX = Math.floor((pieceOnBoardX) / gridSize) * gridSize;
            const pieceY = Math.floor((pieceOnBoardY) / gridSize) * gridSize;
            piece.style.left = pieceX + 'px';
            piece.style.top = pieceY + 'px';

            piece.style.position = 'absolute';           
        }
        
        const mouseMove = (e) => {
            const onMovePieceX = e.clientX - piece.offsetWidth / 2;
            const onMovePieceY = e.clientY - piece.offsetHeight / 2;
            piece.style.left = onMovePieceX + 'px';
            piece.style.top = onMovePieceY + 'px';


        }
        
        window.addEventListener('mousemove', mouseMove)
        window.addEventListener('mouseup', mouseUp)

    }

    const setPiecesOnBoard = () => {
        return (
            <div className={`${styles.piece} ${styles.wk}`} onMouseDown={handleMouseDown}/>
        )
    }

    return (
        <div className={styles.board}>
            <Coordinates />
            {setPiecesOnBoard()}
            {/* <div className={`${styles.piece} ${styles.wk}`} onMouseDown={handleMouseDown}/> */}
        </div>
    )
}

/*

                className={`${styles.piece}${isDragging ? styles.dragging : ''}`}
                style={{ left: position.x, top: position.y }}
*/