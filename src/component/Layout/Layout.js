import { React } from "react";
import "./Layout.scss";

let Layout = ({ children }) => {
    return (
        <div className="app-layout">
            {children}
        </div>
    )
}

export default Layout;