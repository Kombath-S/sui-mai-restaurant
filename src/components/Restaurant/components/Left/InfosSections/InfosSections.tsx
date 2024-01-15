import styled from "styled-components"
import { FlexCol, FlexRow } from "../../../../Global"
import { FoodTag } from "./components/FoodTag"
import { RestoNavTabs } from "./components/RestoNavTabs"
import { Favorite } from "./components/Favorite"
import { useTrail, animated, easings } from "@react-spring/web"
import { useMediaQuery } from 'react-responsive'
import { BPoints } from "../../../../ui"

const Wrap = styled(FlexRow)`
  margin-top: 32px;
  @media screen and (max-width:${BPoints[0]}px) {
      flex-direction:column;
  }
  @media screen and (min-width:${BPoints[0]}px) and (max-width:${BPoints[1]}px) {
      margin-top: 12px;
  }
  
  
`

const LeftBar = styled(FlexCol)`
/* background: red; */
   @media screen and (min-width:${BPoints[0]}px) and (max-width:${BPoints[1]}px) {
     /* gap: 0px; */
  }

`
const CenterView = styled(FlexCol)`
  /* background: blue; */
   @media screen and (min-width:${BPoints[0]}px) and (max-width:${BPoints[1]}px) {
    scale: .9;
    margin-top: -18px;
  }
`
const TagsCont = styled(FlexCol)`
  gap:16px;
  @media screen and (max-width:${BPoints[0]}px) {
      flex-direction:row;
      justify-content: space-evenly;
      gap: 0px;
  }
   @media screen and (min-width:${BPoints[0]}px) and (max-width:${BPoints[1]}px) {
     gap: 8px;
  }
`

const tags = ["Spicy", "Vegan", "Gluten Free", "Top Rated"]

const tagsItems = tags.map(el => (
  <FoodTag tag={el} key={el} />
))

export const InfosSections = () => {

  const isMobile = useMediaQuery({ maxWidth: BPoints[0] })

  const Tagstrail = useTrail(tagsItems.length, {
    from: { opacity: 0, transform: isMobile ? "translateX(-20px)" : "translateY(20px)" },
    to: { opacity: 1, transform: isMobile ? "translateX(0px)" : "translateY(0px)" },
    delay: 800,
    config: {
      duration: 200,
      delay: (d: number) => d + 100,
      easing: easings.easeOutSine,
    },
  })

  return (
    <Wrap >
      <LeftBar>


        <TagsCont>
          {
            Tagstrail.map(({ opacity, transform }, index) => (
              <animated.span key={index} style={{ opacity, transform }}>
                {tagsItems[index]}
              </animated.span>
            ))
          }
        </TagsCont>


        <RestoNavTabs />

      </LeftBar>

      <CenterView>
        <Favorite />
      </CenterView>


    </Wrap>
  )
}

