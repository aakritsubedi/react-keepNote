import React from 'react';
import styles from './Btn.module.css';

function Btn(props){
        let additionalClass=''
        if(props.title === 'Delete') additionalClass = styles.btnDanger
        else if(props.title === 'Cancel') additionalClass = styles.btnWarning
        else if(props.title === '+') additionalClass = styles.btnAdd
        else additionalClass = styles.btnSuccess 
        let btn = (
            <button className={styles.btn+' '+additionalClass} onClick={props.onClick}>{props.title}</button>
        );
        
        
        return btn
}

export default Btn;