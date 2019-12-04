import React from 'react';
import styles from './Nav.module.css';

import Input from './../Input/Input';

function Nav(props){
        let navItems=props.items.map(element => {
            return <li key={props.items.indexOf(element)} className={styles.navList}><a href={element.link} title={element.title}> {element.title}</a></li>
        });
        let nav = (
            <ul className={styles.nav+' '+styles.clearfix}>
                <li key={props.items.length} className={styles.navList}>
                    <a href='http://localhost:3000/' title={props.companyName}>
                        <span className={styles.logo}>{props.companyName}</span>
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

export default Nav;