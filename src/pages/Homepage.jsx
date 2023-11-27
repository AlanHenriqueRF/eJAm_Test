import { styled } from "styled-components"
import logoClarifion from "../assets/600a41c73b670a97ae1d4f47_Clarifion_Logo 1.png"
import logoClarifionLower from "../assets/logo_lower_600a41c73b670a97ae1d4f47_Clarifion_Logo 1.png"
import mcAfee from '../assets/Frame 1484578055.svg'
import mcAfeeless from '../assets/Frame less then original.svg'
import norton from '../assets/norton-antivirus-logo 1.png'
import nortonLower from '../assets/norton-antivirus-logo-Lower.svg'
import { useEffect, useState } from "react"

function NormalScreen() {
    return (
        <>
            <Logos>
                <img src={logoClarifion} alt="Logo" />
                <div>
                    <img src={mcAfee} alt="McAfee Secure" />
                    <img src={norton} alt="Norton by symantec" />

                </div>
            </Logos>
            <Titles>
                <h1>Wait ! your order in progress.</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
            </Titles>

            <Steps>
                <div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                            <path d="M1.99977 9L8.65859 16L21.9998 2" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                            <circle cx="20.6667" cy="20" r="19" fill="#85BF55" stroke="#85BF55" stroke-width="2" />
                        </svg>
                    </div>

                    <h1>Step 1 : Cart Review</h1>
                </div>
                <div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                            <path d="M1.99977 9L8.65859 16L21.9998 2" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                            <circle cx="20.6667" cy="20" r="19" fill="#85BF55" stroke="#85BF55" stroke-width="2" />
                        </svg>
                    </div>
                    <h1>Step 2 : Checkout</h1>
                </div>
                <div>
                    <div>
                        <h2>3</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                            <circle cx="20.3333" cy="20" r="19" fill="#2C7EF8" stroke="#2C7EF8" stroke-width="2" />
                        </svg>
                    </div>

                    <h1>Step 3 : Special Offer</h1>
                </div>

                <div>
                    <div>
                        <h3>4</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <circle cx="20" cy="20" r="19" stroke="#2C7EF8" stroke-width="2" />
                        </svg>
                    </div>

                    <h1>Step 4 : Confirmation</h1>
                </div>
            </Steps>
        </>
    )
}

function MobileScreen() {
    return (
        <>
            <Logos>
                <img src={logoClarifionLower} alt="Logo" />
                <div>
                    <img src={mcAfeeless} alt="McAfee Secure" />
                    <img src={nortonLower} alt="Norton by symantec" />

                </div>
            </Logos>
            <Titles>
                <h1>Wait ! your order in progress.</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
            </Titles>

        </>
    )
}

export default function HomePage() {
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
            <Container>
                {matches ? <NormalScreen /> : <MobileScreen />}
            </Container>
        </>
    )
}

const Container = styled.div`
    background-color: #ffffff;
    padding: 50px 0 88px 0;
    font-family: 'Manrope', sans-serif;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 42px 0 102px 0;
    }

`

const Logos = styled.div`
    width: 100vw;
    height: 36px;
    padding: 30px 127px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
        :first-child{
            margin-right: 32px;
        }
    }

    @media screen and (max-width: 480px) {
        padding: 20px 0;
        justify-content: space-around;
        div{
            :first-child{
                margin-right: 16px;
            }
        }
    }
`

const ContainerInfo = styled.div`
    padding-top: 135px;
`

const Titles = styled.div`
    font-family: 'Manrope', sans-serif;
    position: absolute;
    top:135px;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    h1{
        color: #000;
        font-size: 48px;
        font-weight: 400;
        margin-bottom: 24px;
        text-align: center;
    }

    h2{
        color: #4D5254;
        font-size: 24px;
        font-weight: 400;
        text-align: center;
    }

    @media Screen and (max-width: 480px) {
        h1{
            font-size: 32px;
        }

        h2{
            font-size: 16px;
        }
    }
`

const Steps = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100vw;
    padding: 125px 127px 0 127px;

    :nth-child(3){
        h1{
            color: #000;
            font-size: 20px;
            font-weight: 700;
            font-family: 'Manrope', sans-serif;
        }
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Manrope', sans-serif;

        h1{
            color: #000;
            font-size: 20px;
            font-weight: 400;
        }
        div{
            display: flex;
            justify-content: center;
            align-items: center;
            padding-right: 20px;
            :first-child{
                position: absolute;
            }
            h2{
                color: #FFF;
                font-size: 20px;
                font-weight: 400;
            }
            h3{
                color: #2C7EF8;
                font-size: 20px;
                font-weight: 400;
            }
        }
        

    }

`
