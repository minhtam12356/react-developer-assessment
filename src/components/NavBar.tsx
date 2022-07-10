import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src="/favicon.ico" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                        Home
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default NavBar