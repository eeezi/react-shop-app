import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import styles from './Layout.module.scss'
import Footer from '../footer/Footer'

const Layout = () => {
    return (
        <div className={styles.layout}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout