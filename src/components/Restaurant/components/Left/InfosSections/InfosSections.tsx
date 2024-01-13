import styled from "styled-components"
import { FlexCol, FlexRow } from "../../../../Global"
import { FoodTag } from "./components/FoodTag"
import { RestoNavTabs } from "./components/RestoNavTabs"
import { Favorite } from "./components/Favorite"
import { useTrail, animated, easings } from "@react-spring/web"
import { useMediaQuery } from 'react-responsive'

const Wrap = styled(FlexRow)`
  margin-top: 32px;
  @media screen and (max-width:906px) {
      flex-direction:column;
  }
`

const LeftBar = styled(FlexCol)`

`
const CenterView = styled(FlexCol)`

`
const TagsCont = styled(FlexCol)`
  gap:16px;
  @media screen and (max-width:906px) {
      flex-direction:row;
      justify-content: space-evenly;
      gap: 0px;
  }
`

const tags = ["Spicy", "Vegan", "Gluten Free", "Top Rated"]

const tagsItems = tags.map(el => (
  <FoodTag tag={el} key={el} />
))

export const InfosSections = () => {

  const isMobile = useMediaQuery({ maxWidth: 906 })

  const Tagstrail = useTrail(tagsItems.length, {
    from: { opacity: 0, transform: isMobile ? "translateX(-20px)" : "translateY(20px)" },
    to: { opacity: 1, transform: isMobile ? "translateX(0px)" : "translateY(0px)" },
    delay: 800,
    config:{
      duration: 200,
      delay: (d:number)=> d + 100,
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

