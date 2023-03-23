import style from './LayoutStyle.module.css';
import { GlobalNav } from './GlobalNav';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return <>
        <article>
            <header className={style.header}>
                <p>Welcome !</p>
            </header>
        </article>

        <section className={style.nav}>
            <GlobalNav />
        </section>
    </>
}