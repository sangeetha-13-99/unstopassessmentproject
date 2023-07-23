import { useEffect, useState } from "react"
import desktop from "../../assets/desktop.svg";
import mobile from "../../assets/mobile.svg";
import hamburger from "../../assets/hamburger.svg";
import { useAssessmentContext } from "../../store/Context";

export const Header = () => {
    const [deviceType,setDeviceType]=useState('');
    const {data:{assessmentType,sectionTab},dispatch}=useAssessmentContext();

    
    const windowWidth=()=>{
        if(window.innerWidth>=1200){
            setDeviceType("mobile");
        }
        else{
            setDeviceType("desktop");
        }
    }

    useEffect(()=>{
        if(window.innerWidth>1200){
            setDeviceType("mobile");
        }
        else{
            setDeviceType("desktop");
        }
        window.addEventListener("resize",windowWidth);
        return ()=>{
            window.removeEventListener("resize",windowWidth);
        }
    },[]);

    //  device toggling working with developer  tools open,
    const toggleViewHandler=()=>{
        if(deviceType==="mobile"){
            document.getElementsByTagName("meta")["viewport"].content="width=599px";
            // console.log(document.querySelector("html").innerWidth);
            setDeviceType("desktop");
        }
        else{
            document.getElementsByTagName("meta")["viewport"].content="width=1400px";
            setDeviceType("mobile");
        }
    }
    // implemented heaader for only assessment 
    return (
    <div className="header">
        <div className="header-content order-0">
            <img className="hamburger-image cursor" src={hamburger} alt="hamburger" onClick={()=>dispatch({type:'setSidebarToggling',payload:true})}/>
            <h1 className="header-text">{sectionTab.toUpperCase()[0]+""+sectionTab.slice(1)}</h1>
        </div>
        <span className="vertical-line"></span>
        {sectionTab==="assessment" && <div className="header-content order-1">
            <ul className="header-links">
                <li className={assessmentType==="myAssessment"?"active header-link":"header-link"}
                onClick={()=>dispatch({type:"setAssessmentType",payload:"myAssessment"})}
                >My Assesments</li>
                <li className={assessmentType==="unStopAssessment"?"active header-link":"header-link"}
                onClick={()=>dispatch({type:"setAssessmentType",payload:"unStopAssessment"})}
                >unstop Assessments</li>
            </ul>
        </div>}
        <div className="header-content order-2">
            <img src={deviceType==="mobile"?mobile:desktop} alt="device icon" onClick={toggleViewHandler}/>
        </div>
    </div>
  )
}
