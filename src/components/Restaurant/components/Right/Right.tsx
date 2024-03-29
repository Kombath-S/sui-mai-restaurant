import styled from "styled-components"
import { FlexCol } from "../../../Global"
import { Illustration } from "../../../../assets"
import {  easings, } from '@react-spring/web'
import { BPoints, PortLigatText } from "../../../ui"
import { useSpring, animated } from "@react-spring/web"

const Wrap = styled(FlexCol)`
    min-height: 100%;
    max-height: 100%;
    gap: 12px;
    position:relative;
    flex:1;

    @media screen and (max-width:${BPoints[0]}px){

    }
    @media screen and (max-width:${BPoints[0]}px){
        margin-top: 48px;
        gap: 38px;
    }
    

`


const Imagec = styled.img`
    width: 100%;
    max-height: 500px;
    flex:1;
`
const TCont = styled.div`
    margin-top:auto ;
`


// const Trail: React.FC<{ open: boolean, children: ReactNode }> = ({ open, children }) => {
//     const items = React.Children.toArray(children)
//     const trail = useTrail(items.length, {
//         config: { mass: 50, tension: 2000, friction: 200 },
//         opacity: open ? 1 : 0,
//         x: open ? 0 : 20,
//         height: open ? 110 : 0,
//         from: { opacity: 0, x: 20, height: 0 },
//     })
//     return (
//         <div>
//             {trail.map(({ height, ...style }, index) => (
//                 <a.div key={index} style={style}>
//                     <a.div style={{ height }}>{items[index]}</a.div>
//                 </a.div>
//             ))}
//         </div>
//     )
// }

export const Right = () => {
    // const [open, toggle] = useState(false)
    // useEffect(() => {
    //     setTimeout(() => {
    //         toggle(true)
    //     }, 1000);
    // }, [])

    const RightSpring = useSpring({
        from: { filter: "blur(30px)", },
        to: { filter: "blur(0px)", },
        duration: { transform: 300, filter: 6000 },
        delay: 1200,
        config: {
            easing: easings.easeOutSine
        }
    })

    return (
        <Wrap>
            <animated.span style={RightSpring}>
                <Imagec src={Illustration} />
            </animated.span>


            <TCont>
                {/* <Trail open={open} > */}
                    <PortLigatText size="20px">
                        Shumai is a type of
                        traditional Chinese dumpling.
                        In Cantonese cuisine, it is usually
                        served as a dim sum snack.
                        In addition to accompanying
                        the Chinese diaspora, a variation of shumai
                        also appears in Japan as and various southeast
                        Asian countries. The wrapping is a very thin,
                        round sheet of unleavened dough, with a pleat
                        border. There is only one kind of filling,
                        which mainly consists of chopped or minced
                        mutt            on, scallion and ginger. Hohhot shaomai
                    </PortLigatText>

                {/* </Trail> */}
            </TCont>
        </Wrap>
    )
}
