import React from 'react';
import styles from './AddNoteForm.module.css';

import Btn from '../Btn/Btn';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
function AddNoteFrom(props){
    let addForm = (
        <div className={styles.addFormContainer}>
            <Input title='Title' id='new-title' placeholder='Enter title'/>
            <Textarea title='Content' id='new-content' placeholder='Enter description' />
            <Btn title='Add' onClick={props.addNew}  />
            <Btn title='Cancel' onClick={props.change}  />
        </div>
    );
    let addBtn = (
        <Btn title='+' onClick={props.change}  />
    );
    
    return props.displayOpt ? addForm : addBtn;
}

export default AddNoteFrom;