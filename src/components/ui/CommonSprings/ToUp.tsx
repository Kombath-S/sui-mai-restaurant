import { easings } from '@react-spring/web';
import { useSpring, animated,
    SpringConfig,EasingFunction,
 } from '@react-spring/web';
import { ReactNode } from 'react';


interface CustomSpringConfigProps {
    duration?: number ;
    easing?: string | EasingFunction
}

const defaultprosp: CustomSpringConfigProps  = {
    // // from: { opacity: 0, transform: 'translateY(20px)' },
    // // to: { opacity: 1, transform: 'translateY(0)' },
    // config: {
    //     duration:  400,
    //     easing:  easings.easeOutBack,
    // },
    
}

const getConfig = (props: CustomSpringConfigProps): Partial<SpringConfig> =>{
    if(!props)
        return defaultprosp

    return {
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: {
            duration: props.duration || 400,
            easing: props.easing || easings.easeOutBack,
        },
    };
}

const ToUp = ({ children,props }: { props?: CustomSpringConfigProps ,children: ReactNode}) => {

    const springProps = useSpring(props ? getConfig(props): defaultprosp);

    return <animated.div style={springProps}>{children}</animated.div>;
};

export default ToUp;