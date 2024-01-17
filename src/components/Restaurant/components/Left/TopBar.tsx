import styled from "styled-components"
import {
  AvatarC, FlexCol, FlexRowAc,
  IconCont, PortLigaText as PLtext, SpanFlexAcRow, SpanFlexCol, XTBlur,

} from "../../../Global"
import { ArrowRight, ProfileB, } from "../../../../assets"
import { black, } from "../../../../utils/colors"
import { LikesBtn, ReviewsBtn, StarBtn } from "../../../ui/Buttons"
import { useSpring, animated, easings } from "@react-spring/web"
import { BPoints, PortLigatText } from "../../../ui"
 


const FirstRow = styled(FlexRowAc)`
   justify-content: space-between;
    margin-bottom: 32px;
    margin-top: 32px;
    @media screen and (max-width: ${BPoints[1]}px) and ( min-width:${BPoints[0]}px){
      margin-top: 12px;
      margin-bottom: 0px;
    }
`
const SecRow = styled(FlexRowAc)`
   justify-content: space-between;
`

const RestoName = styled(PLtext)`
  font-size: 32px;
  font-weight: bold;
`
const RType = styled(PLtext)`
  font-size: 20px;
  opacity: 50%;
 `
const ReactionBtn = styled(SpanFlexAcRow)`
  cursor:pointer;
  padding: 4px 8px;
  border-radius:8px;
  gap: 4px;

  *{
    font-size: 11px !important;
  }
`

const ProfileImg = styled(AvatarC)`
  width: 85px;
`
const DirectionBtn = styled(ReactionBtn)`
  border-radius: 18px;
  background: ${black};
  gap: 18px;
  height: min-content;
  *{
    font-size: 16px !important;
  }
  @media screen and (max-width: ${BPoints[0]}px) {
    scale: .8;
  }
`
const ArrowCont = styled.div`
  background-color: #fff;
  border-radius: 12px;
  min-height: 32px !important;
  &:active{
    scale: .8;
    transition: .6s ease-out;
  }
`


export const TopBar = () => {

  const BtnSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 200,
    duration: 900,
    easing: easings.easeOutSine,
  })


  const ArrowSpring = useSpring({
    from: { x: -70, height: "fit-content" },
    to: { x: 0 },
    delay: 400,
  })

  const TitleSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 200,
  })

  const AvatarSpring = useSpring({
    from: { opacity: 0, transform: "scale(0) rotate(-120deg)" },
    to: { opacity: 1, transform: "scale(1)  rotate(0deg)" },
    delay: 400,
  })

  const ChefSpring = useSpring({
    from: { opacity: 0, transform: "translateX(-20px)" },
    to: { opacity: 1, transform: "translateX(0px)" },
    delay: 700,
    duration: 900,
    easing: easings.easeOutSine,
  })






  return (
    <FlexCol>

      <animated.div style={TitleSpring}>
        <FirstRow style={{}}>

          <FlexCol>
            <RestoName>Sui Mai Restaurant</RestoName>
            <RType>Fine Dining</RType>
          </FlexCol>

          <FlexCol style={{ gap: 8, alignItems: "flex-end" }}>
            <LikesBtn />

            <SpanFlexAcRow style={{ gap: 8 }}>
              <StarBtn />
              <ReviewsBtn />
            </SpanFlexAcRow>

          </FlexCol>
        </FirstRow>

      </animated.div>

      <SecRow>
        <SpanFlexAcRow style={{ gap: 12 }}>
          <animated.div style={AvatarSpring}>
            <ProfileImg src={ProfileB} />
          </animated.div>
          <animated.div style={ChefSpring}>
            <SpanFlexCol style={{ gap: 8 }}>
              <PLtext size={"20px"}>{"Diedra Watson"}</PLtext>
              <XTBlur size="16px" family="PortLligat">{"Michelin-star Chef"}</XTBlur>
            </SpanFlexCol>
          </animated.div>
        </SpanFlexAcRow>
        <animated.div style={BtnSpring}>
          <DirectionBtn>
            <PortLigatText padding="4px" color="#fff">
              Directions
            </PortLigatText>
            <animated.span style={{ ...ArrowSpring, minHeight: "50px" }}>
              <ArrowCont>
                <IconCont src={ArrowRight} />
              </ArrowCont>
            </animated.span>
          </DirectionBtn>
        </animated.div>

      </SecRow>

    </FlexCol>
  )
}
