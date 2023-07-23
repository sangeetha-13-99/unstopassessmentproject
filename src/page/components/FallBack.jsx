import fallback from "../../assets/fallback.svg";

export const FallBack = () => {
  return (
    <div>
      <img className="fallback-image" src={fallback} alt="under development"/>
      <p className="fallback-text">Under Development</p>
    </div>
  )
}
