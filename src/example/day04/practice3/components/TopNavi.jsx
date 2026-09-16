import { NavLink } from "react-router-dom";
import "./Practice3.css";

export default function TopNavi(){
    return(<>
        <div className="topNavi">
            <NavLink to="/"> 홈(공통) </NavLink>
            <NavLink to = "/Seokam"> 주석암 </NavLink>
            <NavLink to = "/Jin"> 정형진 </NavLink>
            <NavLink to = "/LimJunHee"> 임준희 </NavLink>
            <NavLink to = "/Hyunmin"> 박현민 </NavLink>
        </div>
    </>)
}