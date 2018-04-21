import React, { Component } from 'react'
import './App.css'
import { listTickets } from './api/zendesk'

class App extends Component {
   state = {
      tickets: null,
      error: null
   }

   componentDidMount() {
      listTickets()
         .then(res => this.setState({ tickets: res, error: null }))
         .catch(error => {
            this.setState({ error: error.message })
            // console.log('Error loading quote!', error)
         })
   }

   render() {
      const { tickets, error } = this.state
      return (
         <div className="App">
            <h1>Ticket Viewer</h1>
            <p>{error}</p>
            {/* {tickets && tickets.map(ticket => {
               <p>{ticket.id}</p>
            })} */}
         </div>
      )
   }
}

export default App
