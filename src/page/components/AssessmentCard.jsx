import jobIcon from "../../assets/job.svg";
import settings from "../../assets/settings.svg";
import calender from "../../assets/calender.svg";
import  share from "../../assets/share.svg";
import { Fragment } from "react";


export const AssessmentCard = ({card}) => {
    
    // get first 3 users from attempeted users
    const users=card.attemptedUsers.slice(0,3)||[];

  return (
    <div className="card flex">
        <div className="card-body">
            <div className="flex">
                <img src={jobIcon} alt={card.name}/>
                <img src={settings} alt={`${card.name} settings`}/>
            </div>
            <div className="flex card-detail">
                <p className="card-heading">{card.name}</p>
                <div className="card-type">
                    <p className="card-purpose">{card.purpose}</p>
                    <div className="inline-flex">
                        <img src={calender} alt="calender"/>
                        <span className="card-date">{card.date}</span>
                    </div>
                </div>
            </div>
        </div>
        <span className="horizontal-line"></span>
        <div className="card-footer flex">
            <div className="flex">
                <div className="footer-detail">
                    <p>{card.duration}</p>
                    <p>Duration</p>
                </div>
                <div className="footer-detail">
                    <p>{card.question}</p>
                    <p>Questions</p>
                </div>
            </div>
            <div className="flex">
                <button className="inline-flex btn btn-share">
                    <img src={share} alt="share"/>
                    <span>Share</span>
                </button>
                <div className="users-avatar-box">
                {
                    users.length>0 && users.map(user=>{
                        const firstName=user.name.split(' ')[0];
                        const lastName=user.name.split(' ')[0];
                        return (
                            <Fragment key={user.id}>
                                    <div className="userAvatar">{firstName[0]+''+lastName[0]}</div>
                            </Fragment>)
                    })
                }
                </div>
                <span className="users-count">{card.attemptedUsers.length-users.length>0?"+"+(card.attemptedUsers.length-users.length):''}</span>
            </div>
        </div>
    </div>
  )
}
