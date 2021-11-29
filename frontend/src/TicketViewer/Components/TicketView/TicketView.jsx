import { React, useEffect, useState } from "react";

import getTickets from "../../getTickets";
import Ticket from "../Ticket";
import Error from "../Error";

// import LoadingButton from '@mui/lab/LoadingButton';

const TicketView = ({props}) => {
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState([]);
    const [error, setError] = useState();
    const [currTicketCount, setCurrTicketCount] = useState(1);
    const [totalTicketCount, setTotalTicketCount] = useState(0);

    useEffect(() => {
        console.log("Content changed:")
        console.log(content)
    }, [content])

    useEffect(() => {
        window.scrollTo(0,0);
    }, [currTicketCount]);

    useEffect(() => {
        setLoading(true);
        getTickets()
            .then(res => {
                console.log("Successful response communicated to ticketViewer")
                setContent(res.data.requests);
                setTotalTicketCount(res.data.count);
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
            <h1>Ticket view</h1>
            {loading &&
                "Loading..."
            }
            {
                error && <Error error={error.error} description={error.error_description} />
            }
            {!loading && !error && <p>Click on any ticket to view</p>}
            {
                !loading && !error && <p>Showing {currTicketCount}-{Math.min(currTicketCount+24,totalTicketCount)} of {totalTicketCount} tickets</p>
            }
            {
                content.map(ticket => {
                        if (ticket.id > currTicketCount+24)
                            return null;
                        if (ticket.id < currTicketCount)
                            return null;
                        return (
                            <Ticket
                                status={ticket.status}
                                subject={ticket.subject}
                                description={ticket.description}
                            />
                        )
                    }
                )
            }
            {(currTicketCount > 1) && <button onClick={() => setCurrTicketCount(prev => prev-25)}>Previous</button>}
            {(currTicketCount < (totalTicketCount-24)) && <button onClick={() => setCurrTicketCount(prev => prev+25)}>Next</button>}
        </div>
    )
};

export default TicketView;