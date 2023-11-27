import { useEffect, useState } from "react"
import styled from "styled-components"
import NavGreaterThen from "./NavScreenGreater";
import NavLessThen from "./NavLessThen";

export default function Navbar() {
    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 481px)").matches
    )
    useEffect(() => {
        window
            .matchMedia("(min-width: 481px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    return (
        <>
            <Navbarstyle>

                {matches ? <NavGreaterThen/>: <NavLessThen/>}
                
            </Navbarstyle>
        </>
    )
}

const Navbarstyle = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    flex-shrink: 0;
    width: 100vw;
    height:50px;
    position:fixed;
    top:0;
    background-color: #252F3D;
    font-family: 'Manrope', sans-serif;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        svg{
            cursor: pointer;
        }
    }

    h1{
        color: #FFFFFF;
        font-size: 12px;
        font-weight: 500;
        margin-left: 8px;
        cursor: pointer;
    }

    @media Screen and (max-width: 480px) {
        width: calc(100vw - 40px);
        align-items: center;
        justify-content:space-between; 
        height: 22px;
        padding: 10px 20px;
    }
`