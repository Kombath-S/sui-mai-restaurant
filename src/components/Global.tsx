import styled from "styled-components";
import { black, darkRed } from "../utils/colors";
import { ReactNode } from "react";


export const GlobalWrapper = styled.div`
    /* width: 90rem; */
    font-family:'PortLligat' ;
`

////////////////////////////////////
//////////    FONT SIZEZ STYLE         
////////////////////////////////////

interface IStyledProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: string | ReactNode | any; 
}

export const XText = styled.p<IStyledProps>`
    font-size: ${(props) => props.size + " !important" || '10px'} ;
    font-family:${(props) => props.family || 'serif'};
    font-weight:${(props) => props.weight || 'auto'};
    color: ${(props) => props.color || '#000'};
    padding: ${(props) => props.padding || '0px'};
`
export const PortLigaText = styled(XText)`
    font-family: PortLligat;
`
export const XTBlur = styled(XText)`
    opacity: 50%;
`

////////////////////////////////////
//////////    FONT SIZEZ STYLE LINK
////////////////////////////////////


export const IsLink = styled.a`
`

export const NavCumbLink = styled(IsLink)`
    font-size: 12px;
    color: ${black} ;
    text-decoration-line:none;
    cursor:pointer;
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