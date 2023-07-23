import { useEffect, useRef, useState } from "react";
import { useAssessmentContext } from "../../store/Context";
import closeIcon from "../../assets/close.svg"

export const AssessmentForm = ({close}) => {
  const {dispatch}=useAssessmentContext();
  const [skills,setSkills]=useState([]);
  const formRef=useRef(null);

  // reset the form on render
  useEffect(()=>{
    setSkills([]);
  },[])

  // save form
  const saveFormHandler=(e)=>{
    
    e.preventDefault();
    const dateContructor=new Date();
    const date=dateContructor.getDate()+"-"+dateContructor.getMonth()+"-"+dateContructor.getFullYear();
    const formDom=formRef.current;
    const name=formDom.querySelector("#name").value;
    const purpose=formDom.querySelector("#purpose").value;
    const description=formDom.querySelector("#description").value;
    const duration=formDom.querySelector("#duration").value;

    dispatch({type:"setAssessmentData",payload:{name,purpose,description,duration,skills,question:10,date,attemptedUsers:[]}});
    close();

  }
  // skill tag functionality  of the form
  const skillsHandler=(e)=>{
    if(e.keyCode==13 || e.which==13){
      e.preventDefault()
      if(e.target.value.trim()!==""){
        if(!skills.find(skill=>skill.toLowerCase()==e.target.value.toLowerCase())){
          setSkills(prev=>{
            return [...prev,e.target.value];
          });
        }
      }
    }
  }
  
  // skill tag remove handler
  const removeSkill=(value)=>{
    setSkills(prev=>(prev.filter(skill=>skill.toLowerCase()!==value.toLowerCase())));
  }

  return (
    <form className="form" ref={formRef} onSubmit={saveFormHandler}>
        <div className="form-header">
          <h2>Create New Assessment</h2>
        </div>
        <div className="form-body flex">
          <div className="form-field">
            <label htmlFor="name">Name of the assessment</label>
            <input id="name" type="text" placeholder="Type Here"/>
          </div>
          <div className="form-field">
            <label htmlFor="purpose">Purpose of the test is</label>
            <select id="purpose" defaultValue="">
              <option value="" disabled>Select</option>
              <option>Job</option>
              <option>Education</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="description">Description</label>
            <select id="description" defaultValue="">
              <option value="">Select</option>
              <option>English Language Proficiency Test</option>
              <option>Logical Skill Building Test</option>
              <option>Programming Language Proficiency Test</option>
              <option>Test on DSA</option>
            </select>
          </div>
          <div className="form-field">
             <label htmlFor="skill">Skills</label>
            { skills.length>0 && <div className="skill-tags flex">
              {skills.map((skill)=>{
                return (<button className="skill-tag inline-flex" key={skill}>
                  <span >{skill}</span>
                  <img className="cursor" src={closeIcon} onClick={(e)=>{
                    e.preventDefault();
                    removeSkill(skill)}}/>
                </button>)}
              )}
            </div>}
            <input id="skill" type="text" onKeyDown={skillsHandler} placeholder="Type Here"/>
          </div>
          <div className="form-field">
            <label htmlFor="duration">Duration of Assessment</label>
            <input id="duration" type="text"  placeholder="HH:MM:SS"/>
          </div>
        </div>
        <div className="form-footer">
          <button className="btn btn-form" >Save</button>
        </div>
    </form>
  )
}
