import React, { Fragment } from 'react'

function TicketsData({ count, requests }) {
   return (
      <Fragment>
         <p className="my-2">Total: {count} tickets</p>
         <ul>
            {requests.map(ticket => {
               return (
                  <a href="">
                  <li className='ticket-list' key={ticket.id}>
                     {ticket.subject}
                     <small className="date">{ticket.created_at}</small>
                  </li>
                  </a>
               )
            })}
         </ul>
      </Fragment>
   )
}

export default TicketsData
