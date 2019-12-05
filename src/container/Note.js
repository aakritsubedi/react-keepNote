import React, { Component } from 'react';

import Nav from './../components/Nav/Nav';
import AddNoteForm from './../components/AddNoteForm/AddNoteForm';
import Table from './../components/Table/Table';
import Btn from './../components/Btn/Btn';
import NoteBox from '../components/Note/NoteBox';

import moment from 'moment';
import makeData from './../constants/createData';

class Note extends Component {
  constructor() {
    super();
    this.note=[];
    this.state = {
      addForm: false,
      data: this.note
    }
    this.allData();
  }
  componentDidMount() {
    this.allNote = makeData(15)
    this.note = this.allNote;
    this.setState({
      data: this.note
    })
  }
  allData() {
    this.columns = [
      {
        Header: "Id",
        accessor: "id",
        filterable: false,
        width:50,
        maxWidth:75,
        minWidth:40
      },
      {
        Header: "Title",
        accessor: "title",
        sortable: false
      },
      {
        Header: "Content",
        accessor: "content",
        sortable: false
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
        sortable: false,
        Cell: row => <div className='myProgress' title={row.value + '% Completed'}><div className='myBar' style={{ width: row.value + '%' }}>{row.value + '%'}</div></div>
      },
      {
        Header: "Status",
        accessor: "status",
        sortable: false,
        width:175,
        maxWidth:200,
        minWidth:150,
        Cell: row => (row.value === 'Pending' ? <span className='pending'>{row.value}</span> : (row.value === 'Working on it') ? <span className='danger'>{row.value}</span> : <span className='success'>{row.value}</span>),
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
          else {
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
      },
      {
        Header: "Deleted",
        accessor: 'deleted',
        show: false
      },
      {
        Header: "Edit",
        accessor: 'edit',
        show: false
      },{
        Header: "Options",
        Cell: row => {
          return (
            <Btn title='Delete' onClick={()=>this.deleteNote(row.original)}/>
          )
        },
        sortable:false,
        filterable:false,
        width:100,
        maxWidth:100,
        minWidth:100,
        style:{
          textAlign: 'center'
        }
      }
    ];
    this.navItems = [
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
  change() {
    this.setState({
      addForm: !this.state.addForm
    })
  }
  searchNote(e) {
    let keyword = e.target.value;
    this.getNote(keyword);
  }
  deleteNote(items) {
    let indexOfItems = this.state.data.indexOf(items);
    this.note.splice(indexOfItems, 1)
    this.setState({
      data: [...this.note]
    })
  }
  editNote(items) {
    let indexOfItems = this.note.indexOf(items);
    this.note[indexOfItems].edit = true;
    this.setState({
      data : this.note
    });
  }
  saveEdit(items, e) {
    const div = e.target.parentElement.parentElement.children;
    const title = div[1].innerText;
    const content= div[2].innerText === '' ? null : div[2].innerText;
    let indexOfItem = this.note.indexOf(items);
    this.note[indexOfItem].title = title;
    this.note[indexOfItem].content = content;
    this.note[indexOfItem].edit = false;
    this.setState({
      data: [...this.note]
    })
  }
  addNote(e) {
    const inputs = e.target.parentElement.children;
    let items = {
      id: this.note.length + 1,
      title: inputs[0].children[1].value,
      content: inputs[1].children[1].value,
      date: moment(Date.now()).format("Do MMM YYYY"),
      progress: 0.6 * 100,
      status: 'Pending',
      deleted: false, edit: false
    }
    this.note.push(items);
    this.setState({
      addForm: !this.state.addForm,
      data: this.note
    })
  }
  getNote(keyword) {
    if (keyword === 'all') {
      this.allNote.forEach(items => {
        if (items.deleted === false) {
          this.note.push(
            items
          );
        }
      });
    }
    else {
      this.note = [];
      this.allNote.forEach(items => {
        let title = items.title.toLowerCase();
        if (title.includes(keyword.toLowerCase()) && items.deleted === false) {
          this.note.push(
            items
          );
        }
      })
    }
    this.setState({
      data: this.note
    })
  }
  render() {
    let noteBox = this.state.data.map(item => {
      return <NoteBox key={item.id} title={item.title} content={item.content} date={item.date} delete={() => this.deleteNote(item)} edit={() => this.editNote(item)} save={(e) => this.saveEdit(item, e)} editStatus={item.edit} />
    })
    let note = (
      <>
        <Nav companyName='Keep Note' items={this.navItems} search={(e) => this.searchNote(e)} />
        <AddNoteForm change={() => this.change()} displayOpt={this.state.addForm} save={(e) => this.addNote(e)} />
        <Table columns={this.columns} data={this.state.data} tblTitle='My Note' />
        <hr />
        <div className='noteContainer'>
          <h2>My Notes</h2>
          {noteBox} 
        </div>

      </>
    );
    return note;
  }
}
export default Note;