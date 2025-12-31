import "./App.css"
import Maplist from "./components/maplist/Maplist"
import StudentList from "./components/maplist/StudentList"
import Conditional from "./components/Conditional"
import Home from "./components/conditionaleg/Home"
import PropsHome from "./components/propseg/PropsHome"
import { Link, Route, Routes } from "react-router-dom"
import TeamMembers from "./components/maplist/TeamMembers"
import MemberDetails from "./components/maplist/MemberDetails"
export default function App() {  
  return (
    <>
    <h1>here nav bar will come </h1>
    <Link to="/">MapEg</Link>
    <Link to="/home">Home</Link>
    <Link to="/teamMembers">Team Members</Link>

    <Routes>
      <Route path="/" element={<Maplist></Maplist>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/teamMembers" element={<TeamMembers></TeamMembers>}></Route>
      <Route path="/memberdetails/:name" element={<MemberDetails></MemberDetails>}></Route>
    </Routes>
   <h1>
    here footer will come 
   </h1>
 </>
  )
}


