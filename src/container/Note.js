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
                    accessor: "title"
                },
                {
                    Header: "Content",
                    accessor: "content"
                },
                {
                    Header: "Date",
                    accessor: "date"
                },
                {
                    Header: "Progress",
                    accessor: "progress"
                },
                {
                    Header: "Status",
                    accessor: "status"
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