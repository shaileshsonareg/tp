import Add from "./Add"
import Cube from "./Cube"
import Header from "./Header"
import Home from "./Home"
import Layout from "./Layout"
import Posts from "./Posts"
import Sqr from "./Sqr"
import Users from "./Users"
//npm install react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/home" element={<Home />} />
            <Route path="/hello" element={<h1>Hello from hello route</h1>} />
            <Route path="/about" element={<h1>Hello from about route</h1>} />
            <Route path="/users" element={<Users />} />
            <Route path="/posts" element={<Posts />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Header />
      <Posts />
      <Users /> */}
      {/* <Add /> */}
      {/* <Sqr  />
      <Cube name="A" num={5}/>
      <Cube name="B" num={6}/>
      <Cube name="C" num={7}/>
      <h1>Hello World</h1> */}
    </>
  )
}

export default App
