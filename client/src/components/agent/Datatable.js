import React from 'react';
import {Link} from 'react-router-dom';


export default function Datatable({data}){
    const columns = data[0] && Object.keys(data[0]);
    return (
        <div className="row">
        <div className="col-12" style={{fontSize: "12px"}}>
        <table className="table table-striped table-dark">
          <thead>
            <tr>{data[0] && columns.map(heading => <th scope="col">{heading}</th>)}<th></th><th></th></tr>
           </thead>
           <tbody>
             {data.map(row => <tr>{columns.map(column => <td>{row[column]}</td>)}
             <td>
             <button 
             type="button" 
             className="btn btn-primary"
             >
             edit
             </button></td>
             <td>
             <Link to={`/${data._id}`}>
             <button type="button" className="btn btn-danger">
             delete
             </button>
             </Link>
             </td>
             </tr>)}
            </tbody>
        </table>
        </div>
        </div>
    )
}
