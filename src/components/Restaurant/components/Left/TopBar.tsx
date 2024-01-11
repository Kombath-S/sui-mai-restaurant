import styled from "styled-components"
import {
  AvatarC, FlexCol, FlexRowAc,
  IconCont, SpanFlexAcRow, SpanFlexCol, TBlur, TTitleOne, Teigteen, TtinyQuat, TtinyTres
} from "../../../Global"
import { ArrowRight, ProfileB, } from "../../../../assets"
import { black,  } from "../../../../utils/colors"
import { LikesBtn, ReviewsBtn, StarBtn } from "../../../ui/Buttons"


const FirstRow = styled(FlexRowAc)`
   justify-content: space-between;
    margin-bottom: 32px;
    margin-top: 32px;
`
const SecRow = styled(FlexRowAc)`
   justify-content: space-between;
`

const RestoName = styled(TTitleOne)`

`
const RType = styled(TtinyTres)`
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
// const LikeBtn = styled(ReactionBtn)`
//   background-color: ${softPink};
//   align-items: center;
//   *{
//     font-size: 14px !important;
//   }
// `
// const StarBtn = styled(ReactionBtn)`
//   background: #f3e6d3;
// `
// const ReviewBtn = styled(ReactionBtn)`
//   background: #e2eae1;
//   /* width: 86px; */
//   flex-wrap:no-wrap;

// `
const ProfileImg = styled(AvatarC)`
  width: 85px;
`
const DirectionBtn = styled(ReactionBtn)`
  border-radius: 18px;
  background: ${black};
  gap: 18px;
  height: min-content;
`
const ArrowCont = styled.span`
  background-color: #fff;
  border-radius: 12px;
`
const Eigtheen = styled(Teigteen)`
  font-size: 18px !important;
  color: #fff;
  padding:24px;
`

export const TopBar = () => {
  return (
    <FlexCol>

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

      <SecRow>
        <SpanFlexAcRow style={{ gap: 12 }}>
          <ProfileImg src={ProfileB} />
          <SpanFlexCol style={{ gap: 8 }}>
            <TtinyQuat>{"Diedra Watson"}</TtinyQuat>
            <TtinyTres>
              <TBlur>{"Michelin-star Chef"}</TBlur>
            </TtinyTres>
          </SpanFlexCol>
        </SpanFlexAcRow>
        <DirectionBtn>
          <Eigtheen>Directions</Eigtheen>
          <ArrowCont>
            <IconCont src={ArrowRight} />
          </ArrowCont>
        </DirectionBtn>
      </SecRow>

    </FlexCol>
  )
}
