import styled from "styled-components"
import { FlexCol, FlexRow } from "../../../../Global"
import { FoodTag } from "./components/FoodTag"
import { RestoNavTabs } from "./components/RestoNavTabs"
import { Favorite } from "./components/Favorite"


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

export const InfosSections = () => {
  return (
    <Wrap >
      <LeftBar>
        <TagsCont>
          {
            tags.map(el => (
              <FoodTag tag={el} key={el} />
            ))
          }
        </TagsCont>

        <RestoNavTabs/>

      </LeftBar>

      <CenterView>
          <Favorite/>
      </CenterView>


    </Wrap>
  )
}

