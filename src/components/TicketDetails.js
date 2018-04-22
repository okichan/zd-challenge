import React from 'react'

function TicketsDetails({ ticket }) {
   return (
      <div className="ticket-details">
         <span>Requester ID: {ticket.requester_id}</span>
         <span className="right">Ticket ID: {ticket.id}</span>

         <hr />
         <p className="capitalize" key={ticket.id}>{ticket.description}</p>
         <hr />
         <p>Status: {ticket.status}</p>

      </div>
   )
}

export default TicketsDetails
