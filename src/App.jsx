import React from 'react'
import {CartProvider} from "./context"
import { Navigation } from "./routes";

const App = () => {
  return (
    <CartProvider>
      <Navigation />
    </CartProvider>
  )
}

export default App