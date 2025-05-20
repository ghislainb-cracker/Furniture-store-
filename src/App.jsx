import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./navigations/Home";
import Living from "./navigations/Living"


export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/living" element={<Living/>}/>
      </Routes>
    </Router>
  )
}