import React from 'react'
import NavBar from './Components/navbar/Navbar'
import Loader from './Components/loader/Loader'
import Page2  from './Components/Page2/Page2'
import Page3 from './Components/Page3/Page3'
import Faq from './Components/FAQ/Faq'
import JoinUs from './Components/div/Joinus'
import Footer from './Components/Footer/Footer'
function App() {
  return (
    <>
    <div>
        <NavBar/>
    </div>
    <div>
          <Loader/>
    </div>
    <div>
      <Page2/>
    </div>
    <div>
      <Page3/>
    </div>
    <div>
      <Faq/>
    </div>
    <div>
      <JoinUs/>
    </div>
     <div>
      <Footer/>
     </div>
    </>
  )
}

export default App