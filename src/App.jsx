import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Footer  from './Components/Footer/Footer'
import Plans from './Components/Plans/Plans'


function App() {
  return (
    <>
    
    <div>
      <Navbar />
    </div>
    
    <div>
    <Hero />
    </div>

    <div>
      <Services />
    </div>

    <div>
    <Plans />
    </div>

    <div>
      <Footer />
    </div>
    
    </>
    
  )
}

export default App