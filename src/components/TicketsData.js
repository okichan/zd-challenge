import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function TicketsData({ count, requests }) {
   return (
      <Fragment>
         <p className="ticket-total">Total: {count} tickets</p>
         <ul className="my-2">
            {requests.map(ticket => {
               return (
                  <Link to={String(ticket.id)} key={ticket.id}>
                     <li className="ticket-list capitalize" key={ticket.id}>
                        {ticket.subject}
                        <small className="date right">
                           {Date(ticket.created_at).substring(3, 24)}
                        </small>
                     </li>
                  </Link>
               )
            })}
         </ul>
      </Fragment>
   )
}

export default TicketsData
