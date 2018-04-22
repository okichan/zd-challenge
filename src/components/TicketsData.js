import React from 'react'
import { Link } from 'react-router-dom'

function TicketsData({ ticket }) {
   return (
      <Link to={String(ticket.id)} className="ticket-conteiner">
         <li className="ticket-list capitalize">
            {ticket.subject}
            <small className="date right">
               {String(ticket.created_at).replace(/[A-Z]/g, ' ')}
            </small>
         </li>
      </Link>
   )
}

export default TicketsData
