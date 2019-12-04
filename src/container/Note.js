import React,{Component} from 'react';
import Nav from './../components/Nav/Nav';
import AddNoteForm from './../components/AddNoteForm/AddNoteForm';

class Note extends Component{

    render(){
        let navItems=[
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
        let note = (
            <>
                <Nav companyName='Aakrit Subedi' items={navItems} />
                <AddNoteForm/>
            </>
        );
        return note;
    }
}
export default Note;