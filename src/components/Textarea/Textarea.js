import React from 'react';
import styles from './Textarea.module.css';

function Textarea(props){
        let textarea = (
            <div className={props.isInline ? styles.formInline : styles.formBlock}>
                {
                    props.title  ? <label>{props.title}:</label>  : ''
                }
                <textarea type={props.type} placeholder={props.placeholder} className={styles.simple}  id={props.id}  ></textarea>
            </div>
        );
        return textarea;
}

export default Textarea;