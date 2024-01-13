import styled from "styled-components"
import { Crown, Greenherb, NoGluten, Piment } from "../../../../../../assets"
import { IconCont, PortLigaText, SpanFlexAcRow, } from "../../../../../Global"


const Wrap = styled(SpanFlexAcRow)`
      cursor:pointer;

      &:hover{

            .tagIcon{
                  rotate: 360deg;
                  transition: .9s ease-out;
            }
      }
`

export const FoodTag = ({tag}:{tag:string}) => {
  return (
    <Wrap style={{gap: 8,minWidth: 120}}>
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
