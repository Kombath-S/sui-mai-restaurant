import styled from "styled-components"
import { AngleRight, Food3, Food4, Food5, Meal, MealBack } from "../../../../../../assets"
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
    justify-content: space-between;
    
    flex: 1;
    width: 100%;
    /* background-color: purple; */
    @media screen and (min-width:${BPoints[1]}px) {
    margin-left: 24px;
  }
  @media screen and (min-width:${BPoints[0]}px) and (max-width:${BPoints[1]}px) {
    /* background: blue; */
    gap: calc(100px - 7vw);
  }
  
`


const MealCont = styled.div`
    position:relative;
    overflow:hidden;
    padding: 0px 20px;
    display:flex;
    flex:1;
    padding: 12px auto; 
    /* background-color: red; */
    @media screen and (max-width:${BPoints[1]}px) {
        align-self:center;
        width: 100%;
        align-items:center;
    }
    @media screen and (min-width:${BPoints[0]}px) and (max-width:${BPoints[1]}px) {
    /* background: blue; */
    margin: 0 auto;
  }
`

const BackImgAnim = styled(animated.img)`
    left: 50%;
    right:50%;
    margin: 0 auto;;
    width: 80%;
    @media screen and (max-width:${BPoints[0]}px) {
    max-width: 400px;
  }
  @media screen and (min-width:${BPoints[0]}px) and (max-width:${BPoints[1]}px) {
    width: 100% !important;
    top: 0;
    translate: 0 -2vh;
  }
`
const MealImgAnim = styled(animated.img)`
    position: absolute !important;
    position:relative;
    transform: translateY(-500px);
    left:50%;
    translate: -42% -10%;
    height: unset;
    width: 70%;
    aspect-ratio:1/1;
    @media screen and (max-width:${BPoints[0]}px) {
         max-width: 400px;
        max-height: 400px;
    }
    @media screen and (min-width:${BPoints[0]}px) and (max-width:${BPoints[1]}px) {
        margin-top: -6vh;
    }
     @media screen and (min-width:${BPoints[1]}px){
         margin-top: 4vh;
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
    @media screen and (min-width:${BPoints[0]}px) and (max-width:${BPoints[1]}px) {
        margin-bottom: 6vh;
    }
     @media screen and (min-width:${BPoints[1]}px){
         margin-bottom: 6vh;
     }
`
const MealName = styled(animated.span)`
    color: #fff;
    font-size: 24px;
    min-width: 300px;
    text-align:center;
    text-shadow: 
    0px 0px 2px #000,
    0px 0px 4px #000,
    0px 0px 8px #000,
    0px 0px 12px #000,
    0px 0px 16px #000
    ;
`
const BtnsRow = styled(animated.span)`
    display:flex;
    max-width: 200px;
    justify-content:space-between;
    gap: 12px;
    
    .cbutton{
        box-shadow:  0px 0px 2px #000,
                0px 0px 4px #000
    }
`

const StepperCont = styled(FlexRowAc)`
    gap: 8px;
    position: absolute;
    left: 50%;
    translate: -50% 0;
    bottom: -5%;
    @media screen and (min-width:${BPoints[0]}px) {
        bottom: 0%;
    }

`
const Stepper = styled.span`
    width: 32px;
    height: 8px;
    background: ${softgreen};
    border-radius: 8px;
    cursor:pointer;
    &.current{
        background: #ff00c3;
    }
`

const favoriteData = [
    { img: Meal, name: "Hongsui Dimsum", stars: 8, reviews: 13 },
    { img: Food3, name: "Sugnam Dimsum", stars: 11, reviews: 62 },
    { img: Food4, name: "Varmik Dimsum", stars: 24, reviews: 28 },
    { img: Food5, name: "Songai Dimsum", stars: 18, reviews: 21 },
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
                <BackImgAnim style={BackSpring} src={MealBack} alt={MealBack}/>

                {transitions((style, item) => (
                    <MealImgAnim
                        style={{ ...style }}
                        src={item.img} 
                        alt={item.name}
                        />
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
                        <Stepper
                            className={current == id ? "current" : ""}
                            key={el.name}
                            onClick={() => handleClick(id)} />
                    ))
                }
            </StepperCont>

        </Wrappper>
    )
}
