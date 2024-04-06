import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link if you are using React Router
import './Dropdown.css'
import { participarDropdown } from './Dropdown-items'


function ParticipaDropdown() {
    const [dropdown, setDropdown] = useState(false);

    return (
        <>
            <ul className={dropdown ? "about-submenu clicked" : "about-submenu"}  onClick={() => setDropdown(!dropdown)}>
                {participarDropdown.map(item => {
                    return (
                        <li key={item.id}>
                            <Link to={item.path} className={item.cName} onClick={() => setDropdown(false)}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    );
}



export default ParticipaDropdown