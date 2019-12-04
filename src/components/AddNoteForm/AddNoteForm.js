import React from 'react';
import styles from './AddNoteForm.module.css';

import Btn from '../Btn/Btn';

function AddNoteFrom(){
    function showForm(){
        console.log("Clicked");
    }
    let addForm = (
        <div className={styles.addFormContainer}>

        </div>
    );
    let addBtn = (
        <Btn title='+' onClick={()=>showForm()}  />
    );

    return addBtn;
}

export default AddNoteFrom;