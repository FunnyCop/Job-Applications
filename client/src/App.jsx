import React from "react"
import { Router } from "@reach/router"

import Home from "./components/Home.jsx"

const App = () => {

  return (

    <div id = "App">
      <Router id = "Router">
        <Home path = "/" />
      </Router>
    </div>

  )

}

export default App