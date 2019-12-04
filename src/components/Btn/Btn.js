import React from 'react';
import styles from './Btn.module.css';

function Btn(props){
        let additionalClass = (props.title === 'Delete') ? styles.btnDanger : styles.btnSuccess;
        let btn = (
            <button className={styles.btn+' '+additionalClass} onClick={props.onClick}>{props.title}</button>
        );
        let btnAdd = (
            <button className={styles.btn+' '+styles.add} onClick={props.onClick}>{props.title}</button>
        )
        return (props.title === '+') ? btnAdd : btn;
}

export default Btn;