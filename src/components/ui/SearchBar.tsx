import styled from "styled-components"
import { useSpring, animated } from '@react-spring/web'
import { IconCont } from "../Global"
import { Search } from "../../assets"
import { useEffect, useState } from "react"


const SearchInput = styled(animated.input)`
    border:none;
    height: 32px;
    width: 0px;
    border-radius: 18px;
    padding-left: 0px;
    translate: 36px 0;
`

export const SearchBar = () => {

    const [isfocused, setfocused] = useState(false)
    const [searchText, setSearchText] = useState("")

    const [props, api] = useSpring(
        () => ({
            from: { width: 0, paddingLeft: 0 },
            config: {
                duration: 600
            }
        }),
        []
    )

    const handle = () => {
        if (!isfocused) {
            api.start({ width: 200, paddingLeft: 12 })
            setfocused(true)
            return
        }

        api.start({ width: 36, paddingLeft: 0 })
        setfocused(false)

    }

    useEffect(() => {
        if (!isfocused) {
            setTimeout(() => {
                setSearchText("")
            }, 550);
        }
    }, [isfocused])


    return (
        <>
            <animated.span >
                <SearchInput style={props} value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            </animated.span>
            <IconCont src={Search} onClick={handle} style={{ zIndex: 2 ,background: "#fff", borderRadius: "50%"}} />
        </>
    )

}
