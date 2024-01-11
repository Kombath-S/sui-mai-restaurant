/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

interface RectangleProps {
    left: number;
    width: number;
}

const Rectangle = styled.span<RectangleProps>`
  position: absolute;
  height: 30px;
  width: 100px;
  background-color: #00f;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${(props) => props.left}px) scaleX(${(props) => props.width / 100});
  z-index: 2;
  left:0;
`;



export const Tracker = () => {
    const [position, setPosition] = useState({ left: 0, width: 0 });
    const links = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e:any) => {
        const rect = e.target.getBoundingClientRect();
        setPosition({
            left: 0,
            width: rect.width,
        });
    };

    useEffect(() => {
        if (links.current) {
            links.current.addEventListener('mousemove', handleMouseMove);
        }
        return () => {
            if (links.current) {
                links.current.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);
    return (
        <Rectangle left={0} width={5} ref={links} />
    )
}
