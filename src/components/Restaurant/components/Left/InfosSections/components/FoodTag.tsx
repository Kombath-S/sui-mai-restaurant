import styled from "styled-components"
import { Crown, Greenherb, NoGluten, Piment } from "../../../../../../assets"
import { IconCont, PortLigaText, SpanFlexAcRow, } from "../../../../../Global"
import { BPoints } from "../../../../../ui"


const Wrap = styled(SpanFlexAcRow)`
      cursor:pointer;

      &:hover{

            .tagIcon{
                  rotate: 360deg;
                  transition: .9s ease-out;
            }
      }
      @media screen and (max-width: ${BPoints[0]}px) {
            /* background: red !important; */
            flex-direction: column;
      }
`

export const FoodTag = ({ tag }: { tag: string }) => {
      return (
            <Wrap style={{ gap: 8, minWidth: 120 }}>
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
