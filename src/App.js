import React, { Component } from 'react'
import { listTickets } from './api/zendesk'
import TicketsData from './components/TicketsData'

class App extends Component {
   state = {
      tickets: null,
      error: null
   }

   componentDidMount() {
      listTickets()
         .then(res => this.setState({ tickets: res, error: null }))
         .catch(error => {
            this.setState({ error })
         })
   }

   render() {
      const { tickets, error } = this.state
      return (
         <div className="App">
            <div className="header">
               <h1>Ticket Viewer</h1>
            </div>
            {error ? (
               <p className="my-2">
                  <span role="img" aria-label="loading error">
                     😓
                  </span>Oops something went wrong.. → {error.message}
                  {error.response}
               </p>
            ) : (
               ''
            )}
            {!!tickets ? (
               <TicketsData {...tickets} />
            ) : (
               <div className="my-2 loader" />
            )}
         </div>
      )
   }
}

export default App
