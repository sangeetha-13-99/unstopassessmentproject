import { createContext, useContext, useReducer } from "react";
import { AssessmentsData } from "../data";

const AssessmentContext=createContext({
    assessmentData:[]
});

const reducerFunction=(state,action)=>{
    switch (action.type) {
        case 'setAssessmentData':
            return {...state,assessmentData:[action.payload,...state.assessmentData]};
        case 'setAssessmentType':
            return {...state,assessmentType:action.payload};
        case 'setSidebarToggling':
            return {...state,isSideBarOpen:action.payload};
        default:
            break;
    }
}

const initialData={
    assessmentData:AssessmentsData,
    assessmentType:'myAssessment',
    isSideBarOpen:false
}
export const AssessmentContextProvider=({children})=>{
    const [data,dispatch]=useReducer(reducerFunction,initialData);
    return (
        <AssessmentContext.Provider value={{data,dispatch}}>
            {children}
        </AssessmentContext.Provider>
    )
}

export const useAssessmentContext=()=>{
    return useContext(AssessmentContext);
}

