import styled from "styled-components"
import { IconCont, SpanFlexAcRow, TTitleTres } from "../Global"
import { softPink } from "../../utils/colors"
import { Heart, Message, Star } from "../../assets"

interface IBtnProps {
  num?: number
}

const ReactionBtn = styled(SpanFlexAcRow)`
  cursor:pointer;
  padding: 4px 8px;
  border-radius:8px;
  gap: 4px;
  &:active{
    scale:.7 !important;
    transition: .9s ease;
  }
  *{
    font-size: 11px !important;
  }
  
`

const LikeBtn = styled(ReactionBtn)`
  background-color: ${softPink};
  align-items: center;
  *{
    font-size: 14px !important;
  }
`
const Starbtn = styled(ReactionBtn)`
  background: #f3e6d3;
`
const ReviewBtn = styled(ReactionBtn)`
  background: #e2eae1;
  /* width: 86px; */
  flex-wrap:no-wrap;
  
`

export const LikesBtn = ({ num = 124 }: IBtnProps) => {
  return (
    <LikeBtn>
      <IconCont src={Heart} />
      <TTitleTres>{num}</TTitleTres>
    </LikeBtn>)
}



export const StarBtn = ({ num = 124 }: IBtnProps) => {
  return (
    <Starbtn>
      <IconCont src={Star} style={{ width: 18 }} />
      <TTitleTres>{num} </TTitleTres>
    </Starbtn>
  )
}

export const ReviewsBtn = ({ num = 124 }: IBtnProps) => {
  return (
    <ReviewBtn>
      <IconCont src={Message} style={{ width: 18 }} />
      <TTitleTres>{num}  Reviews</TTitleTres>
    </ReviewBtn>
  )
}



