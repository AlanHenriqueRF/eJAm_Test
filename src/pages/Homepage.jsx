import { styled } from "styled-components"
import logoClarifion from "../assets/600a41c73b670a97ae1d4f47_Clarifion_Logo 1.png"
import logoClarifionLower from "../assets/logo_lower_600a41c73b670a97ae1d4f47_Clarifion_Logo 1.png"
import mcAfee from '../assets/Frame 1484578055.svg'
import mcAfeeless from '../assets/Frame less then original.svg'
import norton from '../assets/norton-antivirus-logo 1.png'
import nortonLower from '../assets/norton-antivirus-logo-Lower.svg'
import satisfactionImage from '../assets/image 4.png'
import perfiImage from '../assets/Rectangle 1127.png'
import litleImage from '../assets/image-removebg-preview (12) 1.png'
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

            <ContainerInfo>
                <Rightside>
                    <img src={satisfactionImage} alt="Satisfaction Image" />
                    <BoxMensage>
                        <div>
                            <img src={perfiImage} alt=" Perfil image" />
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="79" height="13" viewBox="0 0 79 13" fill="none">
                                    <path d="M2.28466 12.2974L3.67338 7.75793L0 5.12982H4.53946L5.97297 0.35144L7.40649 5.12982H11.9459L8.27257 7.75793L9.66128 12.2974L5.97297 9.49009L2.28466 12.2974Z" fill="#FBBC04" />
                                    <path d="M18.8257 12.2975L20.2144 7.75805L16.5411 5.12994H21.0805L22.514 0.351562L23.9475 5.12994H28.487L24.8136 7.75805L26.2023 12.2975L22.514 9.49021L18.8257 12.2975Z" fill="#FBBC04" />
                                    <path d="M35.3669 12.2975L36.7556 7.75805L33.0823 5.12994H37.6217L39.0552 0.351562L40.4887 5.12994H45.0282L41.3548 7.75805L42.7435 12.2975L39.0552 9.49021L35.3669 12.2975Z" fill="#FBBC04" />
                                    <path d="M51.9061 12.2975L53.2948 7.75805L49.6214 5.12994H54.1609L55.5944 0.351562L57.0279 5.12994H61.5674L57.894 7.75805L59.2827 12.2975L55.5944 9.49021L51.9061 12.2975Z" fill="#FBBC04" />
                                    <path d="M68.4473 12.2975L69.836 7.75805L66.1626 5.12994H70.7021L72.1356 0.351562L73.5691 5.12994H78.1086L74.4352 7.75805L75.8239 12.2975L72.1356 9.49021L68.4473 12.2975Z" fill="#FBBC04" />
                                </svg>
                                <PerfilName>
                                    <h1>Ken T.</h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                        <g clip-path="url(#clip0_1_205)">
                                            <path d="M15.64 7.64093L14.5523 6.37725C14.3443 6.13731 14.1764 5.68942 14.1764 5.3695V4.00984C14.1764 3.16205 13.4805 2.46623 12.6327 2.46623H11.2731C10.9612 2.46623 10.5053 2.29827 10.2653 2.09032L9.00164 1.00259C8.44978 0.530711 7.54601 0.530711 6.98615 1.00259L5.73046 2.09832C5.49052 2.29827 5.03463 2.46623 4.72271 2.46623H3.33906C2.49127 2.46623 1.79544 3.16205 1.79544 4.00984V5.3775C1.79544 5.68942 1.62749 6.13731 1.42754 6.37725L0.347806 7.64893C-0.116078 8.20079 -0.116078 9.09657 0.347806 9.64843L1.42754 10.9201C1.62749 11.1601 1.79544 11.6079 1.79544 11.9199V13.2875C1.79544 14.1353 2.49127 14.8311 3.33906 14.8311H4.72271C5.03463 14.8311 5.49052 14.9991 5.73046 15.207L6.99414 16.2948C7.54601 16.7667 8.44978 16.7667 9.00964 16.2948L10.2733 15.207C10.5133 14.9991 10.9612 14.8311 11.2811 14.8311H12.6407C13.4885 14.8311 14.1843 14.1353 14.1843 13.2875V11.9279C14.1843 11.6159 14.3523 11.1601 14.5603 10.9201L15.648 9.65643C16.1119 9.10457 16.1119 8.1928 15.64 7.64093ZM11.3211 7.13706L7.45803 11.0001C7.34606 11.1121 7.1941 11.1761 7.03414 11.1761C6.87418 11.1761 6.72221 11.1121 6.61024 11.0001L4.67472 9.06458C4.44278 8.83264 4.44278 8.44873 4.67472 8.21679C4.90667 7.98485 5.29057 7.98485 5.52251 8.21679L7.03414 9.72841L10.4733 6.28927C10.7052 6.05733 11.0891 6.05733 11.3211 6.28927C11.553 6.52121 11.553 6.90512 11.3211 7.13706Z" fill="#5BB59A" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_205">
                                                <rect width="16" height="16" fill="white" transform="translate(-0.000137329 0.648621)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <h2>Verified Customer</h2>
                                </PerfilName>
                            </div>
                        </div>
                        <p>“As soon as the Clarifions arrived I put one in my bedroom. This was late
                            in the afternoon. When I went to the bedroom in the evening it smelled
                            clean. When I went to bed I felt I could breathe better. Wonderful.”</p>
                    </BoxMensage>
                </Rightside>
                <LeftSide>
                    <h1>
                        <span>ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span>$14 each</span> ($84.00 total!)
                    </h1>
                    <Product>
                        <BlocImage><img src={litleImage} alt="Product Image" /></BlocImage>
                        <BlocProduct>
                            <ContainerPrice>
                                <h1>Clarifion Air Ionizer</h1>
                                <div>
                                    <h2>$180</h2>
                                    <h3>$84</h3>
                                </div>
                            </ContainerPrice>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M15.9636 6.2066L11.5005 5.55797L9.5054 1.51325C9.4509 1.4025 9.36126 1.31285 9.25051 1.25836C8.97278 1.12125 8.63528 1.23551 8.49641 1.51325L6.50129 5.55797L2.03821 6.2066C1.91516 6.22418 1.80266 6.28219 1.71653 6.37008C1.6124 6.47711 1.55502 6.6211 1.557 6.77041C1.55897 6.91972 1.62015 7.06214 1.72707 7.16637L4.95618 10.3146L4.19329 14.7601C4.1754 14.8635 4.18684 14.9699 4.22632 15.0671C4.2658 15.1644 4.33173 15.2486 4.41665 15.3103C4.50156 15.3719 4.60206 15.4086 4.70674 15.4161C4.81142 15.4235 4.9161 15.4015 5.00891 15.3525L9.0009 13.2537L12.9929 15.3525C13.1019 15.4105 13.2284 15.4298 13.3497 15.4088C13.6556 15.356 13.8613 15.066 13.8085 14.7601L13.0456 10.3146L16.2747 7.16637C16.3626 7.08024 16.4206 6.96774 16.4382 6.84469C16.4857 6.53707 16.2712 6.25231 15.9636 6.2066Z" fill="#FFC000" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M15.9611 6.2066L11.498 5.55797L9.50289 1.51325C9.4484 1.4025 9.35875 1.31285 9.24801 1.25836C8.97028 1.12125 8.63278 1.23551 8.49391 1.51325L6.49879 5.55797L2.03571 6.2066C1.91266 6.22418 1.80016 6.28219 1.71403 6.37008C1.6099 6.47711 1.55252 6.6211 1.55449 6.77041C1.55647 6.91972 1.61764 7.06214 1.72457 7.16637L4.95367 10.3146L4.19078 14.7601C4.17289 14.8635 4.18434 14.9699 4.22382 15.0671C4.2633 15.1644 4.32923 15.2486 4.41415 15.3103C4.49906 15.3719 4.59956 15.4086 4.70424 15.4161C4.80892 15.4235 4.9136 15.4015 5.00641 15.3525L8.9984 13.2537L12.9904 15.3525C13.0994 15.4105 13.2259 15.4298 13.3472 15.4088C13.6531 15.356 13.8588 15.066 13.806 14.7601L13.0431 10.3146L16.2722 7.16637C16.3601 7.08024 16.4181 6.96774 16.4357 6.84469C16.4832 6.53707 16.2687 6.25231 15.9611 6.2066Z" fill="#FFC000" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M15.9611 6.2066L11.498 5.55797L9.50289 1.51325C9.4484 1.4025 9.35875 1.31285 9.24801 1.25836C8.97028 1.12125 8.63278 1.23551 8.49391 1.51325L6.49879 5.55797L2.03571 6.2066C1.91266 6.22418 1.80016 6.28219 1.71403 6.37008C1.6099 6.47711 1.55252 6.6211 1.55449 6.77041C1.55647 6.91972 1.61764 7.06214 1.72457 7.16637L4.95367 10.3146L4.19078 14.7601C4.17289 14.8635 4.18434 14.9699 4.22382 15.0671C4.2633 15.1644 4.32923 15.2486 4.41415 15.3103C4.49906 15.3719 4.59956 15.4086 4.70424 15.4161C4.80892 15.4235 4.9136 15.4015 5.00641 15.3525L8.9984 13.2537L12.9904 15.3525C13.0994 15.4105 13.2259 15.4298 13.3472 15.4088C13.6531 15.356 13.8588 15.066 13.806 14.7601L13.0431 10.3146L16.2722 7.16637C16.3601 7.08024 16.4181 6.96774 16.4357 6.84469C16.4832 6.53707 16.2687 6.25231 15.9611 6.2066Z" fill="#FFC000" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M15.9636 6.2066L11.5005 5.55797L9.5054 1.51325C9.4509 1.4025 9.36126 1.31285 9.25051 1.25836C8.97278 1.12125 8.63528 1.23551 8.49641 1.51325L6.50129 5.55797L2.03821 6.2066C1.91516 6.22418 1.80266 6.28219 1.71653 6.37008C1.6124 6.47711 1.55502 6.6211 1.557 6.77041C1.55897 6.91972 1.62015 7.06214 1.72707 7.16637L4.95618 10.3146L4.19329 14.7601C4.1754 14.8635 4.18684 14.9699 4.22632 15.0671C4.2658 15.1644 4.33173 15.2486 4.41665 15.3103C4.50156 15.3719 4.60206 15.4086 4.70674 15.4161C4.81142 15.4235 4.9161 15.4015 5.00891 15.3525L9.0009 13.2537L12.9929 15.3525C13.1019 15.4105 13.2284 15.4298 13.3497 15.4088C13.6556 15.356 13.8613 15.066 13.8085 14.7601L13.0456 10.3146L16.2747 7.16637C16.3626 7.08024 16.4206 6.96774 16.4382 6.84469C16.4857 6.53707 16.2712 6.25231 15.9636 6.2066Z" fill="#FFC000" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M15.9611 6.2066L11.498 5.55797L9.50289 1.51325C9.4484 1.4025 9.35875 1.31285 9.24801 1.25836C8.97028 1.12125 8.63278 1.23551 8.49391 1.51325L6.49879 5.55797L2.03571 6.2066C1.91266 6.22418 1.80016 6.28219 1.71403 6.37008C1.6099 6.47711 1.55252 6.6211 1.55449 6.77041C1.55647 6.91972 1.61764 7.06214 1.72457 7.16637L4.95367 10.3146L4.19078 14.7601C4.17289 14.8635 4.18434 14.9699 4.22382 15.0671C4.2633 15.1644 4.32923 15.2486 4.41415 15.3103C4.49906 15.3719 4.59956 15.4086 4.70424 15.4161C4.80892 15.4235 4.9136 15.4015 5.00641 15.3525L8.9984 13.2537L12.9904 15.3525C13.0994 15.4105 13.2259 15.4298 13.3472 15.4088C13.6531 15.356 13.8588 15.066 13.806 14.7601L13.0431 10.3146L16.2722 7.16637C16.3601 7.08024 16.4181 6.96774 16.4357 6.84469C16.4832 6.53707 16.2687 6.25231 15.9611 6.2066Z" fill="#FFC000" />
                                </svg>
                            </div>

                            <ContainerStock>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <ellipse cx="7.99996" cy="7.99999" rx="7.99996" ry="7.99999" fill="#E3EEFF" />
                                    <ellipse cx="8.05925" cy="8.05899" rx="4.26664" ry="4.26666" fill="#2C7EF8" />
                                </svg>
                                <h2>12 left in Stock</h2>
                            </ContainerStock>
                        </BlocProduct>

                    </Product>

                </LeftSide>
            </ContainerInfo>
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

const ContainerInfo = styled.div`
    margin-top: 40px;
    margin-bottom: 61px;
    /* margin: 40px 127px 61px 127px;
    width: 100vw; */
    height: 879px;
    background-color: #FAFAFA;
    border-radius: 10px;
    display: flex;
`

const Rightside = styled.div`
    margin: 40px 40px 0 40px;
    img{
        margin-bottom: 24px;
    }

`

const BoxMensage = styled.div`
    background-color: #ffffff;
    max-width: 527px;
    padding: 24px;
    height: 138px;
    img{
        margin: 0;
        margin-right: 13px;
        
    };
    :first-child{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    p{
        margin-top: 18px;
        color: #4D5254;
        font-family: 'Manrope', sans-serif;
        font-size: 16px;
        font-weight: 400;
    }
`

const PerfilName = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 7.35px;
    align-items: center;
    h1{
        color: #333;
        font-size: 14px;
        font-weight: 700;
        font-family: 'Manrope', sans-serif;
        margin-right: 10px;
    };

    h2{
        color: #5BB59A;
        font-size: 12px;
        font-weight: 400;
        font-family: 'Manrope', sans-serif;
        margin-left: 10px;
    }
`

const LeftSide = styled.div`
    margin-top: 40px;
    margin-right: 40px;
    
    h1{
        color: #000;
        font-family: 'Manrope', sans-serif;
        font-size: 32px;
        font-weight: 400;
        max-width: 542px;
        margin-bottom: 32px;
        span{
            color: #2C7EF8;
        }
    }
`

const Product = styled.div`
    height: 135px;
    display: flex;
`

const BlocImage = styled.div`
    background-color: #2c7ef8;
    border-radius: 10px;
    margin-right: 20px;
`

const BlocProduct = styled.div`
    width: calc(542px - calc(134px + 20px));
    div{
        margin-bottom: 15px;
    }
`

const ContainerPrice = styled.div`
    display: flex;
    height: 16px;
    justify-content: space-between;
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin:0;
    }
    h1{
        color: #000;
        font-family: 'Manrope', sans-serif;
        font-size: 20px;
        font-weight: 400;
        margin: 0;
    }

    h2{
        color: #969696;
        font-family: 'Manrope', sans-serif;
        margin-bottom: 0;
        font-size: 16px;
        font-weight: 600;
        text-decoration-line: line-through;
        margin-right: 10px;
    }

    h3 {
        color: #2C7EF8;
        font-family: 'Manrope', sans-serif;
        font-size: 22px;
        font-weight: 600;
    }
`
const ContainerStock = styled.div`
    display: flex;
    :first-child{
        margin-right: 16px;
    }
    h2{
        color: #37465A;
        font-size: 16px;
        font-weight: 300;
        font-family: 'Manrope', sans-serif;
    }
`