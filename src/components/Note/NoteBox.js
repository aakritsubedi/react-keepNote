import React from 'react';
import styles from './NoteBox.module.css';
// import { FaTrashAlt, FaEdit, FaCheckDouble} from 'react-icons/fa';

import Btn from './../Btn/Btn';

function NoteBox(props){
    let note=(
        <div className={styles.noteBox+' '+styles.cleafix}>
            <span className={styles.date}>{props.date}</span>
            <span className={styles.title} contentEditable={props.editStatus} >{props.title}</span>
            <p className={styles.content} contentEditable={props.editStatus} >
                {props.content}
            </p>
            <div className={styles.optBtn}>
                {
                    !props.editStatus ? <Btn title='Edit' onClick={props.edit}/> : 
                    <Btn title='Save' onClick={props.save}/>

                }
                {/* <Btn title='Delete' onClick={props.delete}/> */}
            </div>
        </div>
    );
    return note;
}

export default NoteBox;