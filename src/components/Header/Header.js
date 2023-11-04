import css from './Header.module.css'
import {NavLink, useNavigate} from "react-router-dom";
import {useAppContext} from "../../hooks";
import {authService} from "../../services";

const Header = () => {
    const {isAuth, me, setIsAuth, setMe} = useAppContext();
    const navigate = useNavigate();

    const logout = () => {
        authService.deleteToken();
        setIsAuth(null);
        setMe(null);
        navigate('/login');
    }

    return (
        <div className={css.Header}>
            <h2>Cars</h2>
            {
                isAuth ?
                    <div>
                        {me.username}
                        <button onClick={logout}>logout</button>
                    </div>
                    :
                    <div>
                        <NavLink to={'login'}>Login</NavLink>
                        <NavLink to={'register'}>Register</NavLink>
                    </div>
            }
        </div>
    );
};

export {
    Header
}