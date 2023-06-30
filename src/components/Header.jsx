import React from 'react';

function Header()
{
    return(
        <div>
            <nav className="navbar navbar-expand-lg mnc py-lg-4 fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">NoteStack</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto px-2 mx-auto">
                            <li className="nav-item px-2">
                                <a className="nav-link " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item px-2">
                              <a class="nav-link" href="#">Projects</a>
                            </li>
                            <li className="nav-item px-2">
                              <a className="nav-link" href="#">Education</a>
                            </li>
                            <li className="nav-item px-2">
                              <a className="nav-link" href="#">Skills</a>
                            </li>
            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;