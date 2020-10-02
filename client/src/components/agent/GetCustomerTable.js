import React, {useState, useEffect } from "react";
import Datatable from './Datatable';

require('es6-promise').polyfill();
require('isomorphic-fetch');

export default function GetCustomerTable() {
    useEffect(() => {
        fetchData();
    }, []);

    const [data, setData] = useState([]);
    // const [q, setQ] = useState("");

    const fetchData = async () => {
        const alldata = await fetch("/api/");
        const data = await alldata.json();
        console.log(data);
        setData(data);
    }


    return (
        <div>
        <div className="input-group mb-3">
        <input type="text" class="form-control"/>
        <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">Button</button>
        </div>
        </div>
        <Datatable 
        data={data}
        />
        </div>
    )
}