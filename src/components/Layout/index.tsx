import { NavLink, Outlet } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import "primeicons/primeicons.css";
import "./styles.css";
import { ILinkItem } from "./types";
import { Sidebar } from "primereact/sidebar";
import { Avatar } from "primereact/avatar";
import { LINK_ITEMS } from "./constants";
import { useState } from "react";
import LoginFrame from "../LoginFrame";
import useAuth from "../../hooks/useAuth";

function renderMenuItem(item: ILinkItem) {
  return (
    <NavLink to={item.url} className="p-menuitem-link menu-item">
      {item.icon && <span className={item.icon}></span>}
      <span>{item.title}</span>
    </NavLink>
  );
}

const TITLE = (
  <div style={{ display: "flex", alignItems: "center" }}>
    <img
      src="./logo.svg"
      style={{ blockSize: "2em", display: "inline-block" }}
    />
    <span>React - Typescript - Redux Toolkit - RTK Query - PrimeReact UI </span>
  </div>
);

export default function Layout() {
  const [isVisibleAuthFrame, setIsVisibleAuthFrame] = useState<boolean>(false);
  const { isAuthorized, email } = useAuth();

  return (
    <>
      <header className="wrapper p-menubar">
        <Menubar
          model={LINK_ITEMS.map((item) => ({ template: renderMenuItem(item) }))}
          start={TITLE}
          end={
            <div
              onClick={() => setIsVisibleAuthFrame(true)}
              style={{
                cursor: "pointer",
                display: "flex",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <span>{isAuthorized ? `${email?.split("@")[0]}` : "Аноним"}</span>
              <Avatar
                icon={isAuthorized ? "pi pi-user" : "pi pi-question"}
                style={{ backgroundColor: "#2196F3", color: "#ffffff" }}
              />
            </div>
          }
        />
      </header>
      <main>
        <Outlet />
      </main>
      <Sidebar
        position="right"
        className="login-sidebar"
        visible={isVisibleAuthFrame}
        onHide={() => setIsVisibleAuthFrame(false)}
      >
        <LoginFrame />
      </Sidebar>
    </>
  );
}
