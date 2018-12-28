import React from 'react';

export default props => (

    <div className="input-group mb-3">
        <input onChange={props.handleChange} value={props.description} type="text" className="form-control" placeholder="Digite uma descrição" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <div className="input-group-append">
                <button onClick={props.adicionaNaLista} className="btn btn-outline-primary" type="button" id="button-addon2"><i className="fa fa-plus" aria-hidden="true"></i></button>
            </div>
    </div>
)