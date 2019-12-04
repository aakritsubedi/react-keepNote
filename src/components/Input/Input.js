import React from 'react';
import styles from './Input.module.css';

function Input(props){
        let input = (
            <div className={props.isInline ? styles.formInline : styles.formBlock}>
                {
                    props.title  ? <label>{props.title}:</label>  : ''
                }
                <input type={props.type} placeholder={props.placeholder} className={styles.simple} onChange={props.onChange} id={props.id} onBlur={props.onBlur} />
            </div>
        );
        return input;
}

export default Input;