import styled from "styled-components"
import {  FlexRow } from "../Global"
import { Left } from "./components"
import { Right } from "./components/Right"
import { BPoints } from "../ui"

const Wrap = styled(FlexRow)`
  gap: 24px;
  /* display: inline-flex; */
  @media screen and (max-width:${BPoints[0]}px) {
      flex-direction:column;
  }
`


export const RestaurantPage = () => {
  return (
    <Wrap>
        <Left/>
        <Right/>
    </Wrap>
  )
}
