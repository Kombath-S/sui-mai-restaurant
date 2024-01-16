import styled from "styled-components"
import { FlexCol, FlexRowAc, IsLink, NavCumbLink, PortLigaText } from "../../../../../Global"
import { black, darkRed, softPink, } from "../../../../../../utils/colors"
import { useMediaQuery } from "react-responsive"
import { useTrail, animated, easings, useSpring, config } from "@react-spring/web";
import { useState } from "react";
import { BPoints } from "../../../../../ui";



const Wrapper = styled(FlexRowAc)`
    gap: 40px;
    margin-top: 64px;
    width: 100%;
    /* background: red; */
    flex-direction: row !important;
    @media screen and (max-width:${BPoints[0]}px){
        margin-top: 32px;
        margin-bottom: 24px;
        justify-items:center;
        text-align:center;
    }
    
`

const Bar = styled('div')`
    width: 4px;
    height: 100%;
    background: ${softPink};
    border-radius: 8px;
    position:relative;
    display:flex;
`
const Track = styled.span`
    position:absolute;
    width: 6px;
    height: 32px;
    content: "";
    background: red;
    transition: unset !important;
`

const Tabs = styled(FlexCol)`
    gap: 20px;
    /* background: blue; */
    /* width: 100%; */
    @media screen and (max-width: ${BPoints[0]}px){
        width: 100%;
        display: grid !important;
        grid-template-columns: repeat(2,1fr); 
        grid-template-rows: repeat(3, auto);

    }
    @media screen and (max-width: ${BPoints[0] - 200}px){
    }

@media screen and (max-width:${BPoints[0]}px) {
    flex-direction:row;
    justify-content: space-evenly;
    gap: 8px;
  }
  @media screen and (max-width: 300px) {

  }
`

const Tab = styled(NavCumbLink)`

`

const TabLinks = [
    ["Overview", "./#"],
    ["Ingredients", "./#"],
    ["Recipe", "./#"],
    ["Nutition facts", "./#"],
    ["Reviews", "./#"],
    ["Similar", "./#"]
]

const TablinksItems = TabLinks.map(el => (
    <Tab key={el[0]} href={el[1]}>
        <PortLigaText size="14px">{el[0]}</PortLigaText>
    </Tab>
))
const SpanLink = styled(IsLink)`
    color: ${black};
    &.activeLink {
        color:${darkRed};
        font-weight: bold;
        text-decoration: underline;
    }
`

export const RestoNavTabs = () => {
    const isMobile = useMediaQuery({ maxWidth: BPoints[0] })

    const Tagstrail = useTrail(TablinksItems.length, {
        from: { opacity: 0, transform: isMobile ? "translateX(40px)" : "translateY(20px)" },
        to: { opacity: 1, transform: isMobile ? "translateX(0px)" : "translateY(0px)" },
        delay: 800,
        config: {
            duration: 200,
            delay: (d: number) => d + 100,
            easing: easings.easeOutSine,
        },
    })

    const [isActive, setIsactive] = useState(0)
    const [indicatorPosition, setIndicatorPosition] = useState(0);


    const indicatorAnimation = useSpring({
        y: `${indicatorPosition * 34}px`,
        config: config.slow,
    });


    const goToItem = (newIndex: number) => {
        setIndicatorPosition(newIndex);
    };

    const hanleChangeTab = (index: number) => {
        setIsactive(index)
        goToItem(index)
    }

    return (
        <Wrapper>
            {
                !isMobile &&
                <Bar>
                    <animated.span style={{ ...indicatorAnimation }}>
                        <Track className="track" />
                    </animated.span>
                </Bar>
            }

            <Tabs>
                {
                    Tagstrail.map(({ opacity, transform }, index) => (
                        <animated.span key={index} style={{ opacity, transform }} >
                            <SpanLink
                                href={TabLinks[index][1]}
                                className={isActive == index ? "activeLink" : ""}
                                onClick={() => hanleChangeTab(index)}
                            >{TabLinks[index][0]}</SpanLink>
                        </animated.span>
                    ))
                }
            </Tabs>

        </Wrapper>
    )
}


