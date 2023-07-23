import { MyAssessment } from "./MyAssessment";
import { UnstopAssessments } from "./UnstopAssessments";
import { useAssessmentContext } from "../../store/Context";

export const Assesment = () => {
  const {data:{assessmentType}}=useAssessmentContext();
  return (
    <div className="main-section">
      {assessmentType=="myAssessment"?
        <MyAssessment/>:<UnstopAssessments/>
      }
    </div>
  )
}
