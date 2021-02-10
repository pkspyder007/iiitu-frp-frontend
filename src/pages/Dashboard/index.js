import React, {useState, useEffect} from 'react'
import axios from "axios";

export default function Dashboard() {
    const [state, setState] = useState([]);

    useEffect(() => {
        axios.get("/users/getAllApplications")
            .then(({data}) => {
                setState(data);
                console.log(data);
            }).catch(err => {

            })
    }, [])
    return (
        <div>
            DAshboard
        </div>
    )
}
