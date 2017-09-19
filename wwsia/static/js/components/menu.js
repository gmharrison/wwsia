import React from 'react'
import {Link} from 'react-router-dom'

export class Menu extends React.Component{
    render () {
        return (
            <ul className="nav-list">
                <li className="nav-link">
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="/work">
                        Artists
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="/roulette">
                        Buy Tickets
                    </Link>
                </li>
            </ul>
        )
    }
}