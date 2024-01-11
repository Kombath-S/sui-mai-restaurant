import styled from "styled-components"
import { FlexCol } from "../Global"
import { NavCumbs } from "./NavCumbs"
import { Navbar } from "./Navbar"

const Wrap = styled(FlexCol)`
`
export const Header = () => {
  return (
    <Wrap>
        <Navbar/>
        <NavCumbs/>
    </Wrap>
  )
}
