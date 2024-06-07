import { FiLogIn, FiShoppingCart, FiUser } from "react-icons/fi";
import { GoSignOut } from "react-icons/go";
import styles from "./Nav.module.scss";
import { useAppSelector } from "../../../hooks/redux";
import NavCartBlock from "./nav-cart-block/NavCartBlock"
import { useAuth } from '../../../hooks/useAuth'
import { Link } from "react-router-dom";

const Nav = () => {
    const { isAuth } = useAuth();
    const { products } = useAppSelector((state) => state.cart);

    const handleSignOut = () => {

    }
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <div className={styles.counter}>
                        <Link to={"/cart"}>
                            {" "}
                            <FiShoppingCart />
                        </Link>
                        {products.length > 0 && <b>{products.length}</b>}
                        {products.length > 0 &&
                            <div className={styles.nav_hover_cart}>
                                <NavCartBlock />
                            </div>}
                    </div>
                </li>
                <li>
                    <div className={styles.counter}>
                        <Link to={"/order"}>
                            {" "}
                            <FiUser title="주문" />
                        </Link>
                    </div>
                </li>
                <li>
                    {isAuth ?
                        <GoSignOut
                            className={styles.nav_sign_out}
                            onClick={handleSignOut}
                            title="로그아웃"
                        />
                        :
                        <Link to={"/login"}>
                            <FiLogIn title="로그인" />
                        </Link>
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Nav