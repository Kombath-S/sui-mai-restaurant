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
import { BPoints, PortLigatText } from "../../../../../ui"
import { useSpring, animated, easings, useTransition, } from "@react-spring/web"
import { useState, } from "react"


const Wrappper = styled(FlexCol)`
    position:relative;
    flex: 1;
    width: 100%;
    @media screen and (min-width:${BPoints[1]}px) {
    margin-left: 24px;
  }
  /* background: red; */
  @media screen and (min-width:${BPoints[0]}px) and (max-width:${BPoints[1]}px) {
    /* background: blue; */
  }
  
`


const MealCont = styled.div`
    position:relative;
    overflow:hidden;
    padding: 0px 20px;
    display:flex;
    @media screen and (max-width:${BPoints[1]}px) {
        align-self:center;
        width: 100%;
        align-items:center;
    }
    @media screen and (min-width:${BPoints[0]}px) and (max-width:${BPoints[1]}px) {
    flex:1;
  }
`

const BackImgAnim = styled(animated.img)`
    left: 50%;
    right:50%;
    justify-self: center;
    margin: auto;
    width: 100%;
    @media screen and (max-width:${BPoints[0]}px) {
    max-width: 400px;
  }
`
const MealImgAnim = styled(animated.img)`
    position: absolute !important;
    position:relative;
    transform: translateY(-500px);
    left:50%;
    translate: -42% -10%;
    height: unset;
    width: 80%;
    aspect-ratio:1/1;
    
     @media screen and (max-width:${BPoints[0]}px) {
    max-width: 400px;
    max-height: 400px;
    }
`
const BottomInfo = styled(FlexCol)`
    position:absolute !important;
    bottom: 6%;
    left: 50%;
    min-width: 10px;
    translate: -50% 0;
    align-items:center;
    justify-content: flex-end;
    gap: 12px;
    /* background: red; */
`
const MealName = styled(animated.span)`
    color: #fff;
    font-size: 24px;
    min-width: 300px;
    text-align:center;
`
const BtnsRow = styled(animated.span)`
    display:flex;
    max-width: 200px;
    justify-content:space-between;
    gap: 12px;
`

const StepperCont = styled(FlexRowAc)`
    gap: 8px;
    position: absolute;
    left: 50%;
    translate: -50% 0;
    bottom: -5%;
    @media screen and (min-width:${BPoints[0]}px) and (max-width:${BPoints[1]}px) {
        bottom: 0%;
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

const favoriteData = [
    { img: Meal, name: "Hongsui Dimsum", stars: 8, reviews: 13 },
    { img: Meal, name: "Marchi Dimsum", stars: 54, reviews: 62 },
    { img: Meal, name: "Supappa Dimsum", stars: 19, reviews: 30 },
]


export const Favorite = () => {

    const BackSpring = useSpring({
        from: { opacity: 0, transform: "scale(0) rotateZ(120deg)" },
        to: { opacity: 1, transform: "scale(1) rotateZ(0deg)" },
        duration: 900,
        delay: 1000,
        config: {
            easing: easings.easeOutSine,
        }
    })



    const [current, setCurrent] = useState(0)

    const handleClick = (index: number) => {
        setCurrent(index);
    };

    const transitions = useTransition(favoriteData[current], {
        from: { opacity: 0, x: 200, y: -20 },
        enter: { opacity: 1, x: 0, y: 0 },
        leave: { opacity: 0, x: -200, y: 20 },
        config: {
            easing: easings.easeOutSine
        }
    });

    const kktransitions = useTransition(favoriteData[current], {
        from: { opacity: 0, x: -30, },
        enter: { opacity: 1, x: 0, },
        leave: { opacity: 0, x: 30, },
        config: {
            easing: easings.easeOutSine,
        }
    });



    return (
        <Wrappper>
            <FlexRow style={{ justifyContent: "space-between" }}>
                <PortLigaText size="32px" weight={"bold"}>Chef's Favourite</PortLigaText>
                <PortLigatText>
                    <SpanFlexAcRow >
                        <span style={{ cursor: "pointer" }}>View all</span>
                        <IconCont src={AngleRight} />
                    </SpanFlexAcRow>
                </PortLigatText>
            </FlexRow>

            <MealCont>
                <BackImgAnim style={BackSpring} src={MealBack}></BackImgAnim>

                {transitions((style, item) => (
                    <MealImgAnim
                        style={{ ...style }}
                        src={item.img} />
                ))}
                {kktransitions((style, item) => (

                    <animated.div>

                        <BottomInfo>
                            <MealName
                                style={{ ...style, }}
                            >{item.name}
                            </MealName>

                            <BtnsRow style={{ justifyContent: "space-between", ...style }}>
                                <StarBtn num={item.stars} />
                                <ReviewsBtn num={item.reviews} />
                            </BtnsRow>

                        </BottomInfo>
                    </animated.div>
                ))}


            </MealCont>
            <StepperCont>
                {
                    favoriteData.map((el, id) => (
                        <Stepper className={current == id ? "current" : ""}
                            key={el.name}
                            onClick={() => handleClick(id)} />
                    ))
                }
            </StepperCont>

        </Wrappper>
    )
}
