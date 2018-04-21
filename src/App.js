import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { listTickets } from './api/zendesk'
import TicketsData from './components/TicketsData'
import TicketDetails from './components/TicketDetails'

class App extends Component {
   state = {
      tickets: null,
      ticketsPerPage: 10,
      currentPage: 1,
      error: null
   }

   componentDidMount() {
      listTickets()
         .then(res => this.setState({ tickets: res, error: null }))
         .catch(error => {
            this.setState({ error })
         })
   }

   handleClick = event => {
      this.setState({
         currentPage: Number(event.target.id)
      })
   }

   render() {
      const { tickets, ticketsPerPage, currentPage, error } = this.state

      // Logic for displaying current todos
      const indexOfLastTicket = currentPage * ticketsPerPage
      const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage
      let currentTickets

      // Logic for displaying page numbers
      const pageNumbers = []

      if (tickets) {
         currentTickets = tickets.requests.slice(indexOfFirstTicket, indexOfLastTicket)
         for (let i = 1; i <= Math.ceil(tickets.requests.length / ticketsPerPage); i++) {
            pageNumbers.push(i)
         }
      }

      const renderPageNumbers = pageNumbers.map(number => {
         return (
            <li key={number} id={number} onClick={this.handleClick}>
               {number}
            </li>
         )
      })

      return (
         <Router>
            <div className="App">
               <div className="header">
                  <Link to="/">
                     <h1>Ticket Viewer</h1>
                  </Link>
               </div>
               {error ? (
                  <p className="my-2">
                     <span role="img" aria-label="loading error">
                        😓
                     </span>Oops something went wrong.. → {error.message}
                  </p>
               ) : (
                  ''
               )}

               {!!tickets ? (
                  <Switch>
                     <Route
                        path="/"
                        exact
                        render={() => (
                           <Fragment>
                              <p className="ticket-total">
                                 {tickets.count} tickets in total
                              </p>
                              <ul id="page-numbers">{renderPageNumbers}</ul>
                              <ul>
                                 {currentTickets.map(ticket => {
                                    return <TicketsData ticket={ticket} key={ticket.id} />
                                 })}
                              </ul>
                              <ul id="page-numbers">{renderPageNumbers}</ul>
                           </Fragment>
                        )}
                     />

                     {tickets.requests.map(ticket => {
                        return (
                           <Route
                              path={`/${ticket.id}`}
                              exact
                              key={ticket.id}
                              render={() => <TicketDetails ticket={ticket} />}
                           />
                        )
                     })}
                  </Switch>
               ) : (
                  <div className="my-2 loader" />
               )}
            </div>
         </Router>
      )
   }
}

export default App
