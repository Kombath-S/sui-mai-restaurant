import styled from "styled-components"
import { AngleRight, Meal, MealBack } from "../../../../../../assets"
import {
    FlexCol, FlexRow, FlexRowAc,
    IconCont,
    PortLigaText,
    SpanFlexAcRow,
} from "../../../../../Global"
import { ReviewsBtn, StarBtn } from "../../../../../ui/Buttons"
import { softgreen } from "../../../../../../utils/colors"
import { PortLigatText } from "../../../../../ui"
import { useSpring, animated, easings } from "@react-spring/web"
import { useState } from "react"


const Wrappper = styled(FlexCol)`
    position:relative;
    flex: 1;
    /* background: purple; */
    @media screen and (min-width:906px) {
    margin-left: 24px;
  }
`


const MealCont = styled.div`
    position:relative;
    /* background: blue; */
    max-height: 450px;
    overflow:hidden;
    @media screen and (max-width:906px) {
        align-self:center;
    }
`
const Img = styled.img`

`
const MealImg = styled(Img)`
    /* position: absolute !important; */
    position:relative;
    transform: translateY(-500px);
    /* top: 100%; */
    left:13%;
    width: min-content;
    height: unset;
    /* background: red; */
    @media screen and (max-width:906px) {
        /* left: 0px;
        background: orange; */
    }
`
const BottomInfo = styled(FlexCol)`
    position:absolute !important;
    bottom: 10%;
    left: 31%;
    min-width: 160px;
    /* gap: 8px; */
    /* background: yellow; */
    /* translate: -50% 0; */
`
const MealName = styled(PortLigaText)`
    color: #fff;
    font-size: 24px;
`

const StepperCont = styled(FlexRowAc)`
    gap: 8px;
    position: absolute;
    left: 40%;
    bottom: -5%;
    @media screen and (max-width:906px){
        /* left: 34%; */
    }
    @media screen and (min-width:906px){
        left: 34%;
    }
    
    @media screen and (min-width:1206px){
        left: 32%;
    }
    
`
const Stepper = styled.span`
    width: 32px;
    height: 4px;
    background: ${softgreen};
    border-radius: 8px;
    cursor:pointer;
    padding: 3px 0;
    &.current{
        background: #ff00c3;
    }
`


export const Favorite = () => {

    const images = ["a", "b", "c", "d"];

    const BackSpring = useSpring({
        from: { opacity: 0, transform: "scale(0) rotateZ(120deg)" },
        to: { opacity: 1, transform: "scale(1) rotateZ(0deg)" },
        duration: 900,
        delay: 1000,
        config: {
            easing: easings.easeOutSine,
        }
    })
    const InfosSpring = useSpring({
        from: { opacity: 0, transform: "translateY(20px)" },
        to: { opacity: 1, transform: "translateY(20px)" },
        duration: 900,
        delay: 1000,
        config: {
            easing: easings.easeOutSine,
        }
    })


    const MealSpring = useSpring({
        from: { opacity: 0, x: 100 },
        to: { opacity: 1, x: 0 },
        duration: 900,
        delay: 1000,
        config: {
            easing: easings.easeOutBounce,
        }
    })


    const [current, setCurrent] = useState(0)

    return (
        <Wrappper>
            <FlexRow style={{ justifyContent: "space-between" }}>
                <PortLigaText size="32px" weight={"bold"}>Chef's Favourite</PortLigaText>
                <PortLigatText>
                    <SpanFlexAcRow >
                        <span style={{cursor:"pointer"}}>View all</span>
                        <IconCont src={AngleRight} />
                    </SpanFlexAcRow>
                </PortLigatText>
            </FlexRow>
            <MealCont>
                <animated.div style={BackSpring}>
                    <Img src={MealBack}></Img>
                </animated.div>
                <animated.div style={MealSpring}>
                    <MealImg src={Meal}></MealImg>
                </animated.div>

                <BottomInfo>
                    <animated.div style={{ ...InfosSpring, }}>
                        <MealName style={{ marginBottom: 8 }}>Hongsui Dimsum</MealName>
                        <FlexRow style={{ justifyContent: "space-between" }}>
                            <StarBtn />
                            <ReviewsBtn />
                        </FlexRow>
                    </animated.div>
                </BottomInfo>


            </MealCont>
            <StepperCont>
                {
                    images.map((el, id) => (
                        <Stepper className={current == id ? "current" : ""} key={el} onClick={() => setCurrent(id)} />
                    ))
                }
            </StepperCont>

        </Wrappper>
    )
}
