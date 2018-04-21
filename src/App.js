import React, { Component } from 'react'
import './App.css'
import { listProducts } from './api/zdClient'

class App extends Component {
   state = {
      products: null,
      error: null
   }

   componentDidMount() {
      listProducts()
         .then(res => this.setState({ products: res }))
         .catch(error => this.setState({ error }))
   }

   render() {
      return (
         <div className="App">
            <h1>Ticket Viewer</h1>
            <a href="https://tomomioki.zendesk.com/oauth/authorizations/new">
               hit
            </a>
         </div>
      )
   }
}

export default App
