import React from "react";
import styles from './Coordinates.module.css';

export default () => {
    return (
        <svg viewBox="0 0 100 100" className={styles.coordinates}>
            <text x="0.75" y="3.5" fontSize="2.8" className={styles.coordinateLight}>8</text>
            <text x="0.75" y="15.75" fontSize="2.8" className={styles.coordinateDark}>7</text>
            <text x="0.75" y="28.25" fontSize="2.8" className={styles.coordinateLight}>6</text>
            <text x="0.75" y="40.75" fontSize="2.8" className={styles.coordinateDark}>5</text>
            <text x="0.75" y="53.25" fontSize="2.8" className={styles.coordinateLight}>4</text>
            <text x="0.75" y="65.75" fontSize="2.8" className={styles.coordinateDark}>3</text>
            <text x="0.75" y="78.25" fontSize="2.8" className={styles.coordinateLight}>2</text>
            <text x="0.75" y="90.75" fontSize="2.8" className={styles.coordinateDark}>1</text>
            <text x="10" y="99" fontSize="2.8" className={styles.coordinateDark}>a</text>
            <text x="22.5" y="99" fontSize="2.8" className={styles.coordinateLight}>b</text>
            <text x="35" y="99" fontSize="2.8" className={styles.coordinateDark}>c</text>
            <text x="47.5" y="99" fontSize="2.8" className={styles.coordinateLight}>d</text>
            <text x="60" y="99" fontSize="2.8" className={styles.coordinateDark}>e</text>
            <text x="72.5" y="99" fontSize="2.8" className={styles.coordinateLight}>f</text>
            <text x="85" y="99" fontSize="2.8" className={styles.coordinateDark}>g</text>
            <text x="97.5" y="99" fontSize="2.8" className={styles.coordinateLight}>h</text>
        </svg>
    )
}