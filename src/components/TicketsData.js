import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function TicketsData({ ticket }) {
   return (
      <Link to={String(ticket.id)} >
         <li className="ticket-list capitalize" >
            {ticket.subject}
            <small className="date right">
               {String(ticket.created_at).replace(/[A-Z]/g, ' ')}
            </small>
         </li>
      </Link>
   )
}

export default TicketsData
