import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'

function TicketsData({ count, requests }) {
   return (
      <Fragment>
         <p className="ticket-total">Total: {count} tickets</p>
         <ul>
            {requests.map(ticket => {
               return (
                  <li className="ticket-list" key={ticket.id}>
                     <Link to={String(ticket.id)}>{ticket.subject}</Link>
                     <small className="date">
                        {Date(ticket.created_at).substring(3, 24)}
                     </small>
                  </li>
               )
            })}
         </ul>
      </Fragment>
   )
}

export default TicketsData
