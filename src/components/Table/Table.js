import React,{Component} from 'react';
import styles from './Table.module.css';
// import {
//     useTable,
//     useGroupBy,
//     useFilters,
//     useSortBy,
//     useExpanded,
//     usePagination
//   } from 'react-table';

import makeData from './../../constants/createData';
class Table extends Component{
    
    render(){
        let data = makeData(50);
        let i=0;
        let tblData = data.map(item=>{
            let myBarStyle = {width: item.progress+'%'}
            return (
                <tr key={i++}>
                    <td>{item.age}</td>
                    <td>{item.firstName+' '+item.lastName}</td>
                    <td>{item.visits}</td>
                    <td>{item.status}</td>
                    <td>
                        <div className={styles.myProgress} title={item.progress+'%'}>
                            <div className={styles.myBar} style={myBarStyle}></div>
                        </div>
                    </td>
                </tr>
            );
        })
        let table=(
            <div>
                <h3>{this.props.tblTitle}</h3>
                <table className={styles.table}>
                    <thead>
                        <tr key={0}><th>Age</th><th>Name</th><th>Visits</th><th>Status</th><th>Progress</th></tr>
                    </thead>
                    <tbody>
                        {tblData}
                    </tbody>
                </table>
            </div>
        );
        return table;
    }
}

export default Table;