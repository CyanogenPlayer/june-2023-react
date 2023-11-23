import {Component} from "react";
import {Outlet} from "react-router-dom";

import {Header} from "../components";

class MainLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Outlet/>
            </div>
        )
    }
}

export {
    MainLayout
}