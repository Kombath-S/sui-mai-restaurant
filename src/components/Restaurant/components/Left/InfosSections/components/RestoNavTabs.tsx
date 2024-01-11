import styled from "styled-components"
import { FlexCol, FlexRowAc, NavCumbLink, Tfouteen } from "../../../../../Global"
import { softPink, } from "../../../../../../utils/colors"

const Wrapper = styled(FlexRowAc)`
    gap: 20px;
    margin-top: 64px;
    @media screen and (max-width:906px){
        margin-top: 32px;
        margin-bottom: 24px;
    }
`

const Bar = styled('span')`
    width: 4px;
    height: 100%;
    background: ${softPink};
    border-radius: 8px;
    position:relative;
`
// const Tracker = styled('span')`
//    height: 30px;
//    width: 6px;
//    background: red;
// `

const Tabs = styled(FlexCol)`
    gap: 20px;

    @media screen and (max-width:906px) {
    flex-direction:row;
    justify-content: space-evenly;
  }
`

const Tab = styled(NavCumbLink)`

`

const TabLinks = [
    ["Overview", "#"],
    ["Ingredients", "#"],
    ["Recipe", "#"],
    ["Nutition facts", "#"],
    ["Reviews", "#"],
    ["Similar", "#"]
]


export const RestoNavTabs = () => {
    return (
        <Wrapper>
            <Bar>

                {/* <Tracker></Tracker> */}
            </Bar>

            <Tabs>
                {
                    TabLinks.map(el => (
                        <Tab key={el[0]} href={el[1]}>
                            <Tfouteen>{el[0]}</Tfouteen>
                        </Tab>
                    ))
                }

            </Tabs>

        </Wrapper>
    )
}


