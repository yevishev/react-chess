import React from 'react';
import styles from './Home.module.css';

import Board from './Board/Board';

export default () => {
    return (
        <div className={styles.container}>
            <Board />
        </div>
    )
}