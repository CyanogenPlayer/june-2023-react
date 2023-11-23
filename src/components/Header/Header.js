import {Component} from "react";
import {Link} from "react-router-dom";

import css from './Header.module.css'

class Header extends Component {
    render() {
        return (
            <div className={css.Header}>
                <Link to={'/posts'}>Posts</Link>
                <Link to={'/comments'}>Comments</Link>
                <Link to={'/cars'}>Cars</Link>
            </div>
        )
    }
}

export {
    Header
}