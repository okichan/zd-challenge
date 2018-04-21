import React, { Component, Fragment } from 'react'
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link,
   Redirect
} from 'react-router-dom'
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
               <Switch>
                  <Route
                     path="/"
                     exact
                     render={() => (
                        <Fragment>
                           {!!tickets ? (
                              <TicketsData {...tickets} />
                           ) : (
                              <div className="my-2 loader" />
                           )}
                        </Fragment>
                     )}
                  />

                  {!!tickets &&
                     tickets.requests.map(ticket => {
                        return (
                           <Route
                              path={`/${ticket.id}`}
                              exact
                              render={() => (
                                 <Fragment>
                                    <p>{ticket.description}</p>
                                 </Fragment>
                              )}
                           />
                        )
                     })}
               </Switch>
            </div>
         </Router>
      )
   }
}

export default App
