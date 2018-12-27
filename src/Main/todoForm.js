import React from 'react';

export default props => (

    <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Digite uma descrição" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa fa-plus" aria-hidden="true"></i></button>
            </div>
    </div>
)