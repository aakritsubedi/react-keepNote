import React, {Component} from 'react';
import styles from './Input.module.css';

function Textarea(props){
        let textarea = (
            <div className={props.isInline ? styles.formInline : styles.formBlock}>
                {
                    props.title  ? <label>{props.title}:</label>  : ''
                }
                <textarea type={props.type} placeholder={props.placeholder} className={styles.simple} onChange={props.onChange} id={props.id} onBlur={props.onBlur} ></textarea>
            </div>
        );
        return textarea;
}

export default Textarea;