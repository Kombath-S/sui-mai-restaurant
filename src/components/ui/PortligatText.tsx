import styled from 'styled-components';
import { ReactNode } from 'react';
import { PortLigaText as PLtext } from '../Global';

interface PortLigaTextProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key:string] : string | ReactNode | any;
}

interface PortLigaTextComponentProps extends PortLigaTextProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children?: string | ReactNode;
}


const PortLigaText = styled(PLtext)`

`


export const PortLigatText: React.FC<PortLigaTextComponentProps> = ({  children ,...other}) => (
    <PortLigaText {...other}>
        {children}
    </PortLigaText>
);


