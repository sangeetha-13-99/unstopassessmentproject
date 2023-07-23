import { Outlet } from "react-router"
import { SideBar } from "./components/SideBar"
import { Header } from "./components/Header"
import { useAssessmentContext } from "../store/Context";

// view for sidebar ,header, main sections of the sidebar content
export const Home = () => {
  const {data:{isSideBarOpen}}=useAssessmentContext();

  return (
    <div className="home-grid">
        <aside className={`side ${isSideBarOpen?'open':''}`}>
          <SideBar/>
        </aside>
        <main className="main">
          <Header/>
          <Outlet/>
        </main>
        <div id="overlay"></div>
    </div>
  )
}
