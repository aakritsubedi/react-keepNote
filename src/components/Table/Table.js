import React,{Component}from 'react';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

import styles from './Table.module.css';
import makeData from './../../constants/createData';

class Table extends Component {
        render(){
            let data = makeData(50);
            const columns=[
                {
                    Header: "Age",
                    accessor: "age"
                },
                {
                    Header: "Name",
                    accessor: "name"
                },
                {
                    Header: "Visits",
                    accessor: "visits"
                },
                {
                    Header: "Status",
                    accessor: "status"
                },
                {
                    Header: "Progress",
                    accessor: "progress"
                }
            ];
            console.log(columns);
            console.log(data);
            let table=(
                <div>
                    <ReactTable columns={columns}/>
                </div>
            );
            return table;
        }
    }

export default Table;