import styled from "styled-components"
import { InfosSections } from "./InfosSections/InfosSections"
import { TopBar } from "./TopBar"

const Wrap = styled.div`
  flex:1;
`


export const Left = () => {
  return (
    <Wrap>
       <TopBar/> 
       <InfosSections/> 
    </Wrap>
  )
}
