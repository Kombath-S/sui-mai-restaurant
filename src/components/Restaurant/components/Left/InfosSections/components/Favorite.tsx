import styled from "styled-components"
import { AngleRight, Meal, MealBack } from "../../../../../../assets"
import { FlexCol, FlexRow, FlexRowAc, IconCont, SpanFlexAcRow, TTitleOne, Tfouteen } from "../../../../../Global"
import { ReviewsBtn, StarBtn } from "../../../../../ui/Buttons"
import { softgreen } from "../../../../../../utils/colors"


const Wrappper = styled(FlexCol)`
    flex: 1;
    @media screen and (min-width:906px) {
    margin-left: 24px;
  }
`


const MealCont = styled.div`
    position:relative;
`
const Img = styled.img`

`
const MealImg = styled(Img)`
    position: absolute !important;
    top: -8%;
    left:13%;
`
const BottomInfo = styled(FlexCol)`
    position:absolute !important;
    bottom: 10%;
    left: 31%;
    min-width: 160px;
    gap: 8px;
    /* translate: -50% 0; */
`
const MealName = styled(TTitleOne)`
    color: #fff;
    font-size: 24px;
`

const StepperCont = styled(FlexRowAc)`
    gap: 8px;
    position: absolute;
    left: 30%;
    bottom: -5%;
`
const Stepper = styled.span`
    width: 32px;
    height: 4px;
    background: ${softgreen};
    border-radius: 8px;
`


export const Favorite = () => {

    const images = ["a", "b", "c", "d"];
    return (
        <Wrappper>
            <FlexRow style={{ justifyContent: "space-between" }}>
                <TTitleOne>Chef's Favourite</TTitleOne>
                <Tfouteen>
                    <SpanFlexAcRow>
                        <span>View all</span>
                        <IconCont src={AngleRight} />
                    </SpanFlexAcRow>
                </Tfouteen>
            </FlexRow>
            <MealCont>
                <Img src={MealBack}></Img>
                <MealImg src={Meal}></MealImg>
                <BottomInfo>
                    <MealName>Hongsui Dimsum</MealName>
                    <FlexRow style={{ justifyContent: "space-between" }}>
                        <StarBtn />
                        <ReviewsBtn />
                    </FlexRow>
                </BottomInfo>
                <StepperCont>
                    {
                        images.map(el => (
                            <Stepper key={el} />
                        ))
                    }
                </StepperCont>
            </MealCont>

        </Wrappper>
    )
}
