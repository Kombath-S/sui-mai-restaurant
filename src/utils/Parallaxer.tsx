import './App.css'
import { useSpring, animated } from '@react-spring/web';
import { useGesture } from 'react-use-gesture';


function App() {
    const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0, config: { mass: 5, tension: 350, friction: 40 } }));

    const bind = useGesture({
        onMove: ({ xy }) => set({ x: -xy[0] / 10, y: xy[1] }),
    });
    return (
        <>
            <h1>Welcom</h1>
            <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }} {...bind()}>
                <animated.div
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: 'lightblue',
                        borderRadius: '50%',
                        transform: x.to((val) => `translateX(${val}px)`),
                    }}
                />
                <animated.div
                    style={{
                        width: '150px',
                        height: '150px',
                        backgroundColor: 'lightcoral',
                        borderRadius: '50%',
                        transform: y.to((val) => `translateY(${val}px)`),
                    }}
                />
            </div>
        </>
    )
}

export default App
