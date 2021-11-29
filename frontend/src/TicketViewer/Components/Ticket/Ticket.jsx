import { React } from 'react'
import './Ticket.css'

const Ticket = (props) => {
    return (
        <div className='ticket'>
            {props.description}
        </div>
    );
}

export default Ticket;