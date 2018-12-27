import React from 'react';

export default props => (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><i className="fa fa-tasks"></i> Todo</a>
        <div className="navbar-expand" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#tasks">Tarefas </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about">Sobre</a>
                </li>
            </ul>
        </div>
    </nav>
)