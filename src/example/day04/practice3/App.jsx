import { Route, Routes } from "react-router-dom";
import Seokam from "./components/Seokam";
import Jin from "./components/Jin";
import LimJunHee from "./components/LimJunHee";
import Hyunmin from "./components/Hyunmin";
import TopNavi from "./components/TopNavi";

export default function App( props ){
    return(<>
    <div className="layout">
        <TopNavi/>
        <main className="content">
        <Routes>
            <Route path="/Seokam" element={ <Seokam/> }></Route>
            <Route path="/Jin" element={ <Jin/> }></Route>
            <Route path="/LImJunHee" element={ <LimJunHee/> }></Route>
            <Route path="/Hyunmin" element={ <Hyunmin/> }></Route>
        </Routes>
        </main>
        </div>
    </>)
}