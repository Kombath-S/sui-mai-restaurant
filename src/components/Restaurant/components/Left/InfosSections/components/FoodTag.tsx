import { Crown, Greenherb, NoGluten, Piment } from "../../../../../../assets"
import { IconCont, SpanFlexAcRow, Tfouteen } from "../../../../../Global"



export const FoodTag = ({tag}:{tag:string}) => {
  return (
    <SpanFlexAcRow style={{gap: 8,minWidth: 120}}>
        {
              (tag == "Spicy") && <IconCont src={Piment} />
            
        }
        {
              (tag == "Gluten Free") && <IconCont src={NoGluten} />
            
        }
        {
              (tag == "Vegan") && <IconCont src={Greenherb} />
            
        }
        {
              (tag == "Top Rated") && <IconCont src={Crown} />
            
        }
        
        <Tfouteen>{tag}</Tfouteen>
    </SpanFlexAcRow>
  )
}
