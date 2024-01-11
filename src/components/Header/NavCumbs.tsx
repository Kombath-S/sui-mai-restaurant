import { AngleRight } from "../../assets"
import { FlexRowAc, IconCont, NavCumbLink, NavCumbLinkOff } from "../Global"



const path = [
    "Home",
    "Cuisines",
    "Chinese",
    "Restaurants",
    "Sui Mai Restaurant",
]

export const NavCumbs = () => {
    return (
        <FlexRowAc>
            {
                path.map((el, id) => (
                    (id < path.length - 1) ? (

                        <NavCumbLinkOff href="#" key={id}>
                            <FlexRowAc>
                                <span>{el}</span>


                                {(id < path.length - 2) && <IconCont src={AngleRight} />}
                            </FlexRowAc>
                        </NavCumbLinkOff>

                    ) :

                        <FlexRowAc key={id}>
                            <IconCont src={AngleRight} />
                            <NavCumbLink> {el}</NavCumbLink>
                        </FlexRowAc>
                ))
            }
        </FlexRowAc>
    )
}
