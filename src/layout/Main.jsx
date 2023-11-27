import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../index.css"


export default function Main() {
    return (
        <div className="font-maven">
            <Navbar />
            <Outlet />
        </div>
    )
}
