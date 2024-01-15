import styled from "styled-components"
import { Crown, Greenherb, NoGluten, Piment } from "../../../../../../assets"
import { IconCont, PortLigaText, SpanFlexAcRow, } from "../../../../../Global"
import { BPoints } from "../../../../../ui"


const Wrap = styled(SpanFlexAcRow)`
      cursor:pointer;
      gap: 8px;
      min-width:  120px;
      &:hover{

            .tagIcon{
                  rotate: 360deg;
                  transition: .9s ease-out;
            }
      }
      @media screen and (max-width: ${BPoints[0]}px) {
            flex-direction: column;
            min-width: 80px;
      }
`

export const FoodTag = ({ tag }: { tag: string }) => {
      return (
            <Wrap style={{ }}>
                  {
                        (tag == "Spicy") && <IconCont className="tagIcon" src={Piment} />

                  }
                  {
                        (tag == "Gluten Free") && <IconCont className="tagIcon" src={NoGluten} />

                  }
                  {
                        (tag == "Vegan") && <IconCont className="tagIcon" src={Greenherb} />

                  }
                  {
                        (tag == "Top Rated") && <IconCont className="tagIcon" src={Crown} />

                  }

                  <PortLigaText size="14px">{tag}</PortLigaText>
            </Wrap>
      )
}
