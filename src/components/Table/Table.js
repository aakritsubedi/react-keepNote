import React,{Component}from 'react';
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import styles from './Table.module.css';

class Table extends Component {
        render(){
            let table=(
                <div>
                    <ReactTable columns={this.props.columns} data={this.props.data} defaultPageSize={10} className={styles.table} showPagination={true} resizable={false} previousText='Previous' nextText='Next' pageSizeOptions={[5, 10, 20, 40, 80, 160]}  />
                </div>
            );
            return table;
        }
    }

export default Table;