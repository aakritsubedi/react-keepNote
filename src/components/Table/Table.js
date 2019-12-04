import React,{Component}from 'react';
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import styles from './Table.module.css';

class Table extends Component {
        render(){
            let table=(
                <div className={styles.tblContainer}>
                    <h3 className={styles.tblTitle}>{this.props.tblTitle}</h3>
                    <ReactTable columns={this.props.columns} data={this.props.data} defaultPageSize={5} className={styles.table} showPagination={true} resizable={false} previousText='Previous' nextText='Next' pageSizeOptions={[5, 10, 20, 40, 80, 160]} filterable={true} loading={false} sortable={true} minRows={1}/>
                </div>
            );
            return table;
        }
    }

export default Table;