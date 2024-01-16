import styled from "styled-components"
import {
  FlexCol, FlexRow, FlexRowAc,
  IconCont, SpanFlexCol,
  AvatarC, SpanFlexAcRow
} from "../Global"
import {
  AngleDown, BurgerMenu, Heart,
  ProfileA, RestoLocation
} from "../../assets"
import { SearchBar } from "../ui/SearchBar"
import { BPoints, PortLigatText } from "../ui"

import { animated, useTrail } from '@react-spring/web';

const Wrap = styled(FlexRow)`
  justify-content: space-between;
  margin-bottom: 18px;
  @media screen and (max-width: ${BPoints[1]}px) and ( min-width:${BPoints[0]}px){
      margin-bottom: 8px
    }

    .hide-on-mobile{
      @media screen and (max-width: ${BPoints[0]}px){
      display:none;
    }
    }
`
const Left = styled(FlexRowAc)`
  gap: 24px;
`
const Right = styled(FlexRowAc)`
  gap: 1rem;


  #top-like{
    
  }
`

const Menu = styled.img`
  cursor:pointer;
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
  padding: 6px;
  border-radius: 8px;
  &:hover{
    background: #00000025;
  }
  &:active{
    scale: .8 ;
    transition: 0.9s ease-out;
  }
  @media screen and (max-width: ${BPoints[0]}px) {
    /* background: red; */
    display:none;
  }
`

const SearcCont = styled(SpanFlexAcRow)`

`

const items = [
  <Left>
    <LinkIcon href="#">
      <IconCont src={RestoLocation} />
    </LinkIcon>
    <Menu src={BurgerMenu} id="menu-toggler"/>

  </Left>,
  <Right>
    <SearcCont id="searchCont">
      <SearchBar  />
    </SearcCont>

    <Circle id="top-like" className="hide-on-mobile">
      <IconCont src={Heart} />
    </Circle>
    <ProfileImg src={ProfileA} id="profileImg" className="hide-on-mobile" />
    <UserSettings id="userSettingsBtn">
      <FlexRowAc style={{ gap: 4 }}>
        <SpanFlexCol>
          <PortLigatText size="10px">Welcome!</PortLigatText>
          <PortLigatText size="16px">Emily Collins</PortLigatText>
        </SpanFlexCol>
        <IconCont src={AngleDown} />
      </FlexRowAc>
    </UserSettings>
  </Right>

]

export const Navbar = () => {



  // return (
  //   <Wrap>
  //     <Left>
  //       <LinkIcon href="#">
  //         <IconCont src={RestoLocation} />
  //       </LinkIcon>
  //       <LinkIcon href="#">
  //         <IconCont src={BurgerMenu} />
  //       </LinkIcon>

  //     </Left>

  //     <Right>
  //       <SearcCont>
  //         <SearchBar />
  //         {/* <IconCont src={Search} /> */}
  //       </SearcCont>

  //       <Circle>
  //         <IconCont src={Heart} />
  //       </Circle>
  //       <ProfileImg src={ProfileA} />
  //       <UserSettings>
  //         <FlexRowAc style={{ gap: 4 }}>
  //           <SpanFlexCol>
  //             <PortLigatText size="10px">Welcome!</PortLigatText>
  //             <PortLigatText size="16px">Emily Collins</PortLigatText>
  //           </SpanFlexCol>
  //           <IconCont src={AngleDown} />
  //         </FlexRowAc>
  //       </UserSettings>
  //     </Right>
  //   </Wrap>
  // )
  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: {
      duration: 300,
      delay: (index: number) => index * 100,
    }
  });


  return (
    <Wrap>
      {trail.map(({ opacity, transform }, index) => (
        <animated.div key={index} style={{ opacity, transform }}>
          {items[index]}
        </animated.div>
      ))}
    </Wrap>
  )
}
