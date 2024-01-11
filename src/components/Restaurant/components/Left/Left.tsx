import styled from "styled-components"
import { InfosSections } from "./InfosSections/InfosSections"
import { TopBar } from "./TopBar"

const Wrap = styled.div``

export const Left = () => {
  return (
    <Wrap>
       <TopBar/> 
       <InfosSections/> 
    </Wrap>
  )
}
