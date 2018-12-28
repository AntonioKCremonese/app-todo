import React from 'react';

export default props => {

    const renderizaRows = () => {

        const list = props.list || [];

        return list.map(todo => (

            <tr key={todo._id}>
                <td className={todo.done ?'markedAsDone':''}>{todo.description}</td>

                <td>
                    <button onClick={()=>props.handleDone(todo)} className={!todo.done ? 'btn btn-outline-success showDone':'btn btn-outline-success hideDone'} type="button" id="btn-done"><i className="fa fa-check" aria-hidden="true"></i></button>
                    <button onClick={()=>props.handleDelete(todo)} className={todo.done?'btn btn-outline-danger showDanger':'btn btn-outline-danger hideDanger'} type="button" id="btn-delete"><i className="fa fa-trash" aria-hidden="true"></i></button>
                    <button onClick={()=>props.handlePut(todo)} className={todo.done?'btn btn-outline-warning showWarning':'btn btn-outline-warning hideWarning'} type="button" id="btn-back"><i className="fa fa-undo" aria-hidden="true"></i></button>
                </td>

            </tr>
        ));
    }
    return (
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {renderizaRows()}
            </tbody>
        </table>
    )
}