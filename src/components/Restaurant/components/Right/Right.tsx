import styled from "styled-components"
import { FlexCol, Tsixteen } from "../../../Global"
import { Illustration } from "../../../../assets"

const Wrap = styled(FlexCol)`
    margin-top: 32px;
`


const Imagec = styled.img`
    /* scale: .8; */
`
const Texts = styled(Tsixteen)`
`


export const Right = () => {
    return (
        <Wrap>
            <Imagec src={Illustration} />
            <Texts>
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
            </Texts>
        </Wrap>
    )
}
