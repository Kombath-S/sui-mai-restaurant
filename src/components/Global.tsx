import styled from "styled-components";
import { black, darkRed } from "../utils/colors";


export const GlobalWrapper = styled.div`
    /* width: 90rem; */
    font-family:'PortLligat' ;
`

////////////////////////////////////
//////////    FONT SIZEZ STYLE         
////////////////////////////////////

export const Ttiny = styled.span`
    font-size: 10px;
    font-family: PortLligat;
`
export const TtinySec = styled(Ttiny)`
    font-size: 11px;
`
export const TTextNorm = styled(Ttiny)`
    font-size: 12px;
`
export const TtinyTres = styled(Ttiny)`
    font-size: 16px;
`
export const TtinyQuat = styled(Ttiny)`
    font-size: 20px;
`

export const Tfouteen = styled(Ttiny)`
    font-size: 14px;
`
export const Tsixteen = styled(Ttiny)`
    font-size: 16px;
`
export const Teigteen = styled(Ttiny)`
    font-size: 18px;
`


export const TTitleOne = styled(Ttiny)`
    font-size: 32px;
    font-weight:bold;
`
export const TTitleSec = styled(Ttiny)`
    font-size: 30px;
`
export const TTitleTres = styled(Ttiny)`
    font-size: 24px;
`
export const TBlur = styled('span')`
    opacity: 50%;
`


////////////////////////////////////
//////////    FONT SIZEZ STYLE LINK
////////////////////////////////////


export const IsLink = styled.a`
`

export const NavCumbLink =  styled(IsLink)`
    font-size: 12px;
    color: ${black} ;
    text-decoration-line:none;
    &:hover{
        color: ${darkRed} ;
    }
    &:active{
        color: ${black};
    }
`

export const NavCumbLinkOff = styled(NavCumbLink)`
    opacity: 50%;
`



////////////////////////////////////
//////////    DIV STYLE
////////////////////////////////////


export const FlexRow = styled.div`
    display:flex;
    flex-direction:row;
`
export const FlexRowAc = styled(FlexRow)`
    align-items: center;
`
export const FlexCol = styled(FlexRow)`
    flex-direction: column;
`



////////////////////////////////////
//////////    SPAN STYLE
////////////////////////////////////


export const SpanFlexRow = styled.span`
    display:flex;
    flex-direction:row;
`
export const SpanFlexCol = styled(SpanFlexRow)`
    flex-direction:column;
`

export const SpanFlexAcCol = styled(SpanFlexCol)`
    align-items:center;
`
export const SpanFlexAcRow = styled(SpanFlexRow)`
    align-items:center;
`


////////////////////////////////////
//////////    IMG STYLE
////////////////////////////////////


export const IconCont = styled.img``

export const AvatarC = styled.img`
  width: 48px;
  aspect-ratio: 1/1;
  border-radius: 100%;
`