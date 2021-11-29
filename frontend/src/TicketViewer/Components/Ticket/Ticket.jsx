import { React, useState } from 'react'
import './Ticket.css'

const Ticket = (props) => {
    const [showDetails, setShowDetails] = useState(false);
    const [buttonContent, setButtonContent] = useState("View Details");

    const buttonCallBack = () => {
        setShowDetails(!showDetails);
        if (buttonContent === "View Details")
            setButtonContent("Go back to all tickets");
        else
            setButtonContent("View Details")
    }

    return (
        <div className={`ticket ${showDetails ? "expanded" : ""}`}>
            <div className='status'>Status: {props.status}</div>
            <div className='subject'>Subject: {props.subject}</div>
            {showDetails && <div className='details'><b>Description:</b> {props.description}</div>}
            <button className='view-more' onClick={buttonCallBack}>{buttonContent}</button>
        </div>
    );
}

export default Ticket;