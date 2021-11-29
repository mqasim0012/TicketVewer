import { React, useEffect, useState } from "react";

import getTickets from "../../getTickets";
import Ticket from "../Ticket";
import Error from "../Error";

// import LoadingButton from '@mui/lab/LoadingButton';

const TicketView = ({props}) => {
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        console.log("Content changed:")
        console.log(content)
    }, [content])

    useEffect(() => {
        setLoading(true);
        getTickets()
            .then(res => {
                console.log("Successful response communicated to ticketViewer")
                console.log(res.data.requests)
                setContent(res.data.requests);
            })
            .catch(err => {
                console.log("Error communicated to ticketViewer")
                setError(err)
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, []);

    return (
        <div>
            <h1>Ticket view</h1><br/>
            {!loading && !error && <p>Click on any ticket to view</p>}
            {loading &&
                "Loading..."
            }
            {
                error && <Error error={error.error} description={error.error_description} />
            }
            {
                content.map(ticket => (
                    <Ticket description={ticket.description} />
                ))
            }
        </div>
    )
};

export default TicketView;