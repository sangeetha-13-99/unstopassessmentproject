import dashboard from "../../assets/dashboard.svg";
import admin from "../../assets/admin.svg";
import library from "../../assets/library.svg";
import assessment from "../../assets/assessment.svg";
import { Link } from "react-router-dom";
import closeIcon from "../../assets/close.svg"
import { useAssessmentContext } from "../../store/Context";

export const SideBar = () => {
    const {dispatch}=useAssessmentContext();

  return (
    <section className="side-bar">
        <div className="side-bar-heading">
            <p>Menu</p>
            <img src={closeIcon} alt="close" onClick={()=>dispatch({type:'setSidebarToggling',payload:false})}/>
        </div>
        <div className="side-bar-links">
            <Link to="/" className="side-bar-link" onClick={()=>dispatch({type:'setSectionTab',payload:'dashboard'})}>
            <div className="side-bar-item">
                <img src={dashboard} alt="dashboard"/>
                <p>DashBoard</p>
            </div>
            </Link>
            <Link to="/assessment" className="side-bar-link"  onClick={()=>dispatch({type:'setSectionTab',payload:'assessment'})}>
            <div className="side-bar-item">
                <img src={assessment} alt="assessment"/>
                <p>Assessment</p>
            </div>
            </Link>
            <Link to="/library" className="side-bar-link"  onClick={()=>dispatch({type:'setSectionTab',payload:'library'})}>
            <div className="side-bar-item">
                <img src={library} alt="library"/>
                <p>Library</p>
            </div>
            </Link>
            
        </div>
        <span className="horizontal-line"></span>
        <div className="side-bar-status">
            <p  className="tag">Admin</p>
            <Link to="/status" className="side-bar-link"  onClick={()=>dispatch({type:'setSectionTab',payload:'round status'})}>
                <div className="side-bar-item ">
                    <img src={admin} alt="admin"/>
                    <p>Round Status</p>
                </div>
            </Link>
        </div>
    </section>
  )
}
