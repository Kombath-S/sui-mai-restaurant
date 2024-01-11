import styled from "styled-components"
import {
  FlexCol, FlexRow, FlexRowAc,
  IconCont, Tsixteen, Ttiny, SpanFlexCol,
   AvatarC, SpanFlexAcRow
} from "../Global"
import { AngleDown, BurgerMenu, Heart,
   ProfileA, RestoLocation } from "../../assets"
import { SearchBar } from "../ui/SearchBar"



const Wrap = styled(FlexRow)`
  justify-content: space-between;
  margin-bottom: 18px;
`
const Left = styled(FlexRowAc)`
  gap: 24px;
`
const Right = styled(FlexRowAc)`
  gap: 1rem;
`

const LinkIcon = styled.a`

`

const Circle = styled(FlexRowAc)`
  background-color: #FE49491A;
  padding: 4px;
  border-radius: 100%;
  position:relative;
  cursor:pointer;
  &:before{
    position:absolute;
    content: "";
    width: 8px;
    aspect-ratio: 1/1;
    background-color: #FE4949;
    top: 0;
    right: 0px;
    border-radius: 50%;
  }
  &:active{
    scale:.7;
    transition:.6s ease;
  }
`

const ProfileImg = styled(AvatarC)`
  cursor:pointer;
`

const UserSettings = styled(FlexCol)`
  cursor:pointer;
`

const SearcCont = styled(SpanFlexAcRow)`

`


export const Navbar = () => {



  return (
    <Wrap>
      <Left>
        <LinkIcon href="#">
          <IconCont src={RestoLocation} />
        </LinkIcon>
        <LinkIcon href="#">
          <IconCont src={BurgerMenu} />
        </LinkIcon>

      </Left>

      <Right>
        <SearcCont>
          <SearchBar/>
          {/* <IconCont src={Search} /> */}
        </SearcCont>

        <Circle>
          <IconCont src={Heart} />
        </Circle>
        <ProfileImg src={ProfileA} />
        <UserSettings>
          <FlexRowAc style={{ gap: 4 }}>
            <SpanFlexCol>
              <Ttiny>Welcome!</Ttiny>
              <Tsixteen>Emily Collins</Tsixteen>
            </SpanFlexCol>
            <IconCont src={AngleDown} />
          </FlexRowAc>
        </UserSettings>
      </Right>
    </Wrap>
  )
}
