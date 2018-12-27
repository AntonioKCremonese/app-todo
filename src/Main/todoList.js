import React from 'react';

export default props => (

    <table className="table table-striped table-dark">
        <thead>
            <tr>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{props.item}</td>
                <td>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa fa-trash" aria-hidden="true"></i></button>
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fa fa-undo" aria-hidden="true"></i></button>
                </td>
                
            </tr>
            
        </tbody>
    </table>
)