import React,{Component} from 'react';
import Nav from './../components/Nav/Nav';
import AddNoteForm from './../components/AddNoteForm/AddNoteForm';
import Table from './../components/Table/Table';
import makeData from './../constants/createData';

class Note extends Component{
    constructor(){
      super();
      this.state={
        addForm : false
      }
      this.allData();
    }
    allData(){
      this.data = makeData(50);
      this.columns=[
                {
                    Header: "Id",
                    accessor: "id"
                },
                {
                    Header: "Title",
                    accessor: "title",
                },
                {
                    Header: "Content",
                    accessor: "content"
                },
                {
                    Header: "Date",
                    accessor: "date",
                    style: {
                      textAlign: 'center'
                    }
                },
                {
                    Header: "Progress",
                    accessor: "progress",
                    Cell: row => <div className='myProgress'><div className='myBar' style={{width:row.value+'%'}}>{row.value+'%'}</div></div>
                },
                {
                    Header: "Status",
                    accessor: "status",
                    Cell: row => (row.value === 'Pending' ? <span className='pending'>{row.value}</span> : (row.value === 'Working on it') ? <span className='danger'>{row.value}</span> : <span className='success'>{row.value}</span> ),
                    filterMethod: (filter, row) => {
                      if (filter.value === "all") {
                        return true;
                      }
                      if (filter.value === "Completed") {
                        return row[filter.id] === 'Completed';
                      }
                      else if (filter.value === "Pending") {
                        return row[filter.id] === 'Pending';
                      }
                      else{
                        return row[filter.id] === 'Working on it';
                      }
                    },
                    Filter: ({ filter, onChange }) =>
                      <select
                        onChange={event => onChange(event.target.value)}
                        style={{ width: "100%" }}
                        value={filter ? filter.value : "all"}
                      >
                        <option value="all">Show All</option>
                        <option value="Completed">Completed</option>
                        <option value="Pending">Pending</option>
                        <option value="Working on it">Working on it</option>
                      </select>
                }
      ];
      this.navItems=[
        {
          title: 'About Us',
          link: '#'
        },
        {
          title: 'Contact Us',
          link: '#'
        },
        {
          title: 'Location',
          link: '#'
        }
    ];
    }
    change(){
        this.setState({
          addForm: !this.state.addForm 
        })
    }
    render(){
        let note = (
            <>
                <Nav companyName='Aakrit Subedi' items={this.navItems} />
                <AddNoteForm change={()=>this.change()} displayOpt={this.state.addForm}/>
                <Table columns={this.columns} data={this.data} />
            </>
        );
        return note;
    }
}
export default Note;