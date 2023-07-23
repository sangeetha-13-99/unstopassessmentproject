import plus from "../../assets/plus.svg";

export const NewAssessment = ({open}) => {
  return (
    <div className="card new-card">
         <div className="card-body">
            <div className="flex ">
                <img className="cursor" src={plus} alt="new Assessment" onClick={open}/>
            </div>
            <div className="flex card-detail">
                <p className="card-heading">New Assessment</p>
                <div className="card-type">
                    <p className="card-purpose">From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>
                </div>
            </div>
        </div>
    </div>
  )
}
