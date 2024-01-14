import { useTrail, animated,easings } from "@react-spring/web"
import { AngleRight } from "../../assets"
import { FlexRowAc, IconCont, NavCumbLink, NavCumbLinkOff } from "../Global"



const path = [
    "Home",
    "Cuisines",
    "Chinese",
    "Restaurants",
    "Sui Mai Restaurant",
]

const items = path.map((el, id) => (
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

export const NavCumbs = () => {
    const trail = useTrail(items.length, {
        from: { opacity: 0, transform: 'translateY(0px) translateX(-30px)' },
        to: { opacity: 1, transform: 'translateY(0) translateX(0)' },
        config: {
            duration: 200,
            delay: (index: number) => index * 25,
            easing: easings.easeOutSine,
        }
    })
    return (
        <FlexRowAc>

            {
                trail.map(({ opacity, transform }, index) => (
                    <animated.div key={index} style={{ opacity, transform }}>
                        {items[index]}
                    </animated.div>
                ))
            }

        </FlexRowAc>
    )
}
