import React,{Component} from 'react';
import Nav from './../components/Nav/Nav';
import AddNoteForm from './../components/AddNoteForm/AddNoteForm';
import Table from './../components/Table/Table';
import NoteBox from '../components/Note/NoteBox';

import moment from 'moment';
import makeData from './../constants/createData';

class Note extends Component{
    constructor(){
      super();
      this.note=[];
      this.state={
        addForm : false,
        data : this.note
      }
      this.allData();
    }
    allData(){
      this.data = makeData(10);
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
                    Cell: row => <div className='myProgress' title={row.value+'% Completed'}><div className='myBar' style={{width:row.value+'%'}}>{row.value+'%'}</div></div>
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
                },
                {
                  Header: "Deleted",
                  accessor: 'deleted',
                  show: false
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
    componentDidMount(){
      this.getNote('all');
    }
    change(){
        this.setState({
          addForm: !this.state.addForm
        })
    }
    searchNote(e){
      let keyword=e.target.value;
      console.log(keyword);
      this.getNote(keyword);
    }
    deleteNote(items){
      let indexOfItems=this.note.indexOf(items);
      console.log(indexOfItems);  
      this.note.splice(indexOfItems,1);
      this.setState({
          data: this.note
      })
      }
      editNote(items){
          let indexOfItems=this.note.indexOf(items);
          this.note[indexOfItems].edit=true;
          this.setState({
              data: this.note
          })
      }
      saveEdit(items,e){
        const div =e.target.parentElement.parentElement.children;
        console.log(div);
        const title=div[1].innerText;
        const content=div[2].innerText;
        
        let indexOfItem=this.note.indexOf(items);
        this.note[indexOfItem].title=title;
        this.note[indexOfItem].content=content;
        this.note[indexOfItem].edit=false;
        this.setState({
            data: this.note
        })
    }
    addNote(e){
      const inputs = e.target.parentElement.children;
      let items ={id: this.note.length+1,
      title: inputs[0].children[0].value,
      content: inputs[1].children[0].value,
      date:moment(Date.now()).format("Do MMM YYYY"),
      progress:0.6*100,
      status:'Pending',
      deleted:false,edit:false}
      this.note.push(items);
      this.setState({
          addForm: !this.state.addForm,
          data: this.note
      })
    }
    getNote(keyword){
      if(keyword === 'all'){
          this.data.forEach(items=>{
              if(items.deleted === false){
                  this.note.push(
                      items
                  );
              }
          }); 
      }
      else{
              this.note = [];
              this.data.forEach(items=>{
                  let title= items.title.toLowerCase();
                  if(title.includes(keyword.toLowerCase()) && items.deleted === false){
                      this.note.push(
                         items
                      );
                  } 
              })
      }
      this.setState({
          data : this.note
      })
    }
    render(){
        let noteBox = this.state.data.map(item => {
            return <NoteBox key={item.id} title={item.title} content={item.content} date={item.date} delete={()=>this.deleteNote(item)} edit={()=>this.editNote(item)} save={(e)=>this.saveEdit(item,e)} editStatus={item.edit}/>
        })
        let note = (
            <>
                <Nav companyName='Keep Note' items={this.navItems} search={(e)=>this.searchNote(e)}/>
                <AddNoteForm change={()=>this.change()} displayOpt={this.state.addForm} save={(e)=>this.addNote(e)}/>
                <Table columns={this.columns} data={this.data} tblTitle='My Note'/>
                <hr/>
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