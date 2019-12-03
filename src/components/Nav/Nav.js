import React, {Component} from 'react';
import styles from './Nav.module.css';

import Input from './../Input/Input';

class  Nav extends Component{
    
    render(){
        let navItems=this.props.items.map(element => {
            return <li key={this.props.items.indexOf(element)} className={styles.navList}><a href={element.link} title={element.title}> {element.title}</a></li>
        });
        let nav = (
            <ul className={styles.nav+' '+styles.clearfix}>
                <li key={this.props.items.length} className={styles.navList}>
                    <a href='http://localhost:3000/' title={this.props.companyName}>
                        <span className={styles.logo}>{this.props.companyName}</span>
                    </a>
                </li>
                {navItems}
                <li className={styles.navItemsRight}>
                    <Input type='text' isInline={true}  placeholder="Search ..." id="search-box"/>
                </li>
            </ul>
        );
        return nav;
    }
}

export default Nav;