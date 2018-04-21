import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { listTickets } from './api/zendesk'
import TicketsData from './components/TicketsData'
import TicketDetails from './components/TicketDetails'

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
                        render={() => <TicketsData {...tickets} />}
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
