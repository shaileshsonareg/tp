import { Add } from "./Add"
import { Layout } from "./Layout";
import { Sqr } from "./Sqr"
import { Users } from "./Users"


//npm install react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/home" element={<h1>Hello From Home</h1>}/>
            <Route path="/aboutus" element={<h1>Hello From About US</h1>}/>
            <Route path="/add" element={<Add />}/>
            <Route path="/sqr" element={<Sqr />}/>
          </Route>
      </Routes>
    </BrowserRouter>
      
      {/* <Users /> */}
    </>
  )
}

export default App
