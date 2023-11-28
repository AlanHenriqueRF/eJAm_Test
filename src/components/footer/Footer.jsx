import { useEffect, useState } from "react"
import styled from "styled-components"

export default function Footer() {
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
            <Footerstyle>
                <div>
                    <h1>Copyright (c) 2023</h1>
                    <h1>|</h1>
                    <h1>Clarifionsupport@clarifion.com</h1>
                </div>

                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M12.1667 7.33203H2.83333C2.09695 7.33203 1.5 7.92898 1.5 8.66536V13.332C1.5 14.0684 2.09695 14.6654 2.83333 14.6654H12.1667C12.903 14.6654 13.5 14.0684 13.5 13.332V8.66536C13.5 7.92898 12.903 7.33203 12.1667 7.33203Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.16797 7.33203V4.66536C4.16797 3.78131 4.51916 2.93346 5.14428 2.30834C5.7694 1.68322 6.61725 1.33203 7.5013 1.33203C8.38536 1.33203 9.2332 1.68322 9.85832 2.30834C10.4834 2.93346 10.8346 3.78131 10.8346 4.66536V7.33203" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h1>Secure 256-bit SSL encryption.</h1>
                </div>
            </Footerstyle>
        </>
    )
}

const Footerstyle = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width: calc(100vw - calc(127px + 119px));
    height:40px;
    position:fixed;
    bottom:0;
    background-color: #252F3D;
    font-family: 'Manrope', sans-serif;
    padding: 24px 119px 24px 127px;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        :first-child{
            margin-left: 0;
        }
        svg{
            cursor: pointer;
        }
    }

    h1{
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 400;
        margin-left: 16px;
        cursor: pointer;

    }

    @media (max-width: 700px) {
        width: calc(100vw - 40px);
        padding-left: 20px;
        padding-right: 20px;
    }

    @media (max-width: 480px) {
        padding: 20px;
        width: calc(100vw - 40px);
        flex-direction: column;
        height: 62px;
    }
`