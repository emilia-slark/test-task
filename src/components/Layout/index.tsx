import { NavLink, Outlet } from "react-router-dom";
import { Menubar } from 'primereact/menubar';
import 'primeicons/primeicons.css';
import './styles.css';
import { ILinkItem } from "./types";
import { LINK_ITEMS } from "./constants";

function renderMenuItem(item: ILinkItem) {
  return (
    <NavLink to={item.url} className="p-menuitem-link menu-item">
      {item.icon && <span className={item.icon}></span>}
      <span>{item.title}</span>
    </NavLink>
  )
}

const TITLE = <div style={{display: "flex", alignItems: "center"}}>
  <img src="./logo.svg" style={{ blockSize: '2em', display: 'inline-block' }} />
  <span>React - Typescript - Redux Toolkit - RTK Query - PrimeReact UI </span>
</div>

export default function Layout() {
  return (
    <>
      <header className="wrapper p-menubar">
        <Menubar
          model={LINK_ITEMS.map(item => ({ template: renderMenuItem(item) }))}
          start={TITLE}
        />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}