import  testIcon from "../../assets/test.svg";
import  web from "../../assets/web.svg";
import  link from "../../assets/link.svg";
import  people from "../../assets/people.svg";
import stats from "../../assets/stats.svg";
import filter from "../../assets/filter.svg";
import search from "../../assets/search.svg";

import { useAssessmentContext } from "../../store/Context";
import { AssessmentCard } from "./AssessmentCard";
import { NewAssessment } from "./NewAssessment";
import { useState } from "react";
import Overlay from "./Overlay";
import { AssessmentForm } from "./AssessmentForm";


export const MyAssessment = () => {
    const {data:{assessmentData,}}=useAssessmentContext();
    const [isOpen,setIsOpen]=useState(false);
    const [toggleStats,setToggleStats]=useState(false);
    
    // close form overlay
    const closeOverlay=()=>{
        document.querySelector('.modal').classList.add('close');
        document.querySelector('body').classList.remove('overflow-hidden');
        setTimeout(()=>{
            setIsOpen(false);
        },[1000]);
    }
    
    // open form overlay
    const openOverlay=()=>{
        document.querySelector('body').classList.add('overflow-hidden');
        setIsOpen(true);
    }

    // toggle stats/assessment overview handler
    const toggleStatsHandler=()=>{
        setToggleStats(prev=>!prev)
    }
    
  return (
    <section className="tab-section">
        {isOpen && <Overlay close={closeOverlay} open={isOpen}>
                <AssessmentForm close={closeOverlay}/>
        </Overlay>}
        <div className={`tab-overview ${toggleStats?'mobile-stats-overview':''}`}>
            <h2 className="tab-header">Assessments Overview</h2>
            <div className="overview-content">
                    <div className="overview-detail ">
                        <h3 className="detail-heading">Total Assessment</h3>
                        <div className="detail-content flex">
                            <img className="detail-content-image" src={testIcon} alt="test"/>
                            <div className="detail-content-values flex">
                                <p className="primary-value">34</p>
                            </div>
                        </div>
                    </div>
                    <div className="overview-detail ">
                        <h3 className="detail-heading">Candidates</h3>
                        <div className="detail-content flex">
                            <img className="detail-content-image" src={people} alt="test"/>
                            <div className="detail-content-values flex">
                                <div className="flex">
                                    <p className="primary-value">11,1145</p>
                                    <p className="secondary-value">+89</p>
                                </div>
                                <p className="detail-content-name">Total Candidate</p>
                            </div>
                            <div className="detail-content-values flex">
                                <div className="flex">
                                    <p className="primary-value">1,14</p>
                                    <p className="secondary-value">+89</p>
                                </div>
                                <p className="detail-content-name">Who Attempted</p>
                            </div>
                        </div>
                    </div>
                    <div className="overview-detail ">
                        <h3 className="detail-heading">Candidates Source</h3>
                        <div className="detail-content flex">
                            <img className="detail-content-image" src={web} alt="test"/>
                            <div className="detail-content-values flex">
                                <div className="flex">
                                    <p className="primary-value">11,000</p>
                                    <p className="secondary-value">+89</p>
                                </div>
                                <p className="detail-content-name">Email</p>
                            </div>
                            <div className="detail-content-values flex">
                                <div className="flex">
                                    <p className="primary-value">145</p>
                                    <p className="secondary-value">+89</p>
                                </div>
                                <p className="detail-content-name">Social Share</p>
                            </div>
                            <div className="detail-content-values flex">
                                <div className="flex">
                                    <p className="primary-value">145</p>
                                    <p className="secondary-value">+89</p>
                                </div>
                                <p className="detail-content-name">unique Link</p>
                            </div>
                        </div>
                    </div>
                    <div className="overview-detail ">
                        <h3 className="detail-heading">Total Assessment</h3>
                        <div className="detail-content flex">
                            <img className="detail-content-image" src={link} alt="test"/>
                            <div className="detail-content-values">
                                <p className="primary-value">34</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <div className={`tab-content-div ${toggleStats?'mobile-stats-overview':''}`}>
            <div className="flex tab-content">
                <h2 className="tab-header">My Assessment</h2>
                <div className="mobile-view">
                    <img  src={search} alt="search"/>
                    <img src={filter} alt="filter"/>
                    <img className={toggleStats?'active':''} onClick={toggleStatsHandler} src={stats} alt="stats"/>
                </div>
            </div>
            {/* assessment cards */}
            <div className="cards flex">
                <NewAssessment open={openOverlay}/>
                {assessmentData.map((ass,ind)=>{
                    // using index as of now for sake of viewing cards with no operations
                    return <AssessmentCard key={ind} card={ass}/>
                })}
            </div>
        </div>
    </section>
  )
}
