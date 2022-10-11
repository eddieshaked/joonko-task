import {useState} from "react";
import {TitleContainer} from "./Accordion.styles";
import Arrow from "assets/arrow.svg";

const Accordion = ({name, location, department, applyUrl, requirements}) => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <TitleContainer>
        <h3>{name}</h3>
        <img src={Arrow} alt="arrow" />
      </TitleContainer>
    </div>
  )
}

export default Accordion