import React from 'react'
import About from './componet/about/about'
import Pricing from './componet/pricing/pricing'
import Login from ',/componet/login/login'
import Movies from './componet/movies/movies'
import Blog from ''
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const Layout = () => {
  return (
    <div>
       <BrowserRouter>
     <Routes>
     <Route path= "/" element={<About />}>
      <Route index element={<Blog />}/>
       <Route path="pricing" element={<Pricing/>}/>
       <Route path="login" element={<Login />}/>
       <Route path="movies" element={<Movies />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Layout
