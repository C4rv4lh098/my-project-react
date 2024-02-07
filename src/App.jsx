import DataSearch from "./components/DataSearch"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  return (
    <div className="content">
      <div className="header">
        <Header />
      </div>
      <div className="line"></div>
      <div className="main">
        <DataSearch />
      </div>
      <div className="line"></div>
      <div className="footer">
      <div className="line"></div>
        <Footer />
      </div>
    </div>
  )
}

export default App
