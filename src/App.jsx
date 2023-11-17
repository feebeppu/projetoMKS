import Footer from "./components/Footer/Footer.jsx"
import Header from "./components/Header/Header.jsx"
import Products from "./components/Products/Products.jsx"
import Cart from "./components/Cart/Cart.jsx"
import Provider from "./Context/AppContext.jsx"

function App() {

  return (
    <div>
      <Provider>
        <Header />
        <Products />
        <Cart />
        <Footer />
      </Provider>
    </div>
  )
}

export default App
