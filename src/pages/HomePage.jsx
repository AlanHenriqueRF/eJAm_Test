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
import discountsymbol from '../assets/DiscountSymbol.svg'
import satisfationstamp from '../assets/satifationimage.png'
import { useEffect, useState } from "react"


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
                <Logos>
                    <img src={matches ? logoClarifion : logoClarifionLower} alt="Logo" />
                    <div>
                        <img src={matches ? mcAfee : mcAfeeless} alt="McAfee Secure" />
                        <img src={matches ? norton : nortonLower} alt="Norton by symantec" />

                    </div>
                </Logos>

                <Titles>
                    <h1>Wait ! your order in progress.</h1>
                    <h2>{matches ? 'Lorem ipsum dolor sit amet, consectetur adipiscing' : 'Lorem ipsum dolor sit amet, consectetur'}</h2>
                </Titles>
                <ContainerSpace>
                    <Steps>
                        <div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                                    <path d="M1.99977 9L8.65859 16L21.9998 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                                    <circle cx="20.6667" cy="20" r="19" fill="#85BF55" stroke="#85BF55" strokeWidth="2" />
                                </svg>
                            </div>

                            <h1>{matches ? 'Step 1 :' : ''} Cart Review</h1>
                        </div>
                        <div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
                                    <path d="M1.99977 9L8.65859 16L21.9998 2" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                                    <circle cx="20.6667" cy="20" r="19" fill="#85BF55" stroke="#85BF55" strokeWidth="2" />
                                </svg>
                            </div>
                            <h1>{matches ? 'Step 2 :' : ''} Checkout</h1>
                        </div>
                        <div>
                            <div>
                                <h2>3</h2>
                                <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                                    <circle cx="20.3333" cy="20" r="19" fill="#2C7EF8" stroke="#2C7EF8" strokeWidth="2" />
                                </svg>
                            </div>

                            <h1><span>{matches ? 'Step 3 :' : ''} Special Offer</span></h1>
                        </div>

                        <div>
                            <div>
                                <h3>4</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <circle cx="20" cy="20" r="19" stroke="#2C7EF8" strokeWidth="2" />
                                </svg>
                            </div>

                            <h1>{matches ? 'Step 4 :' : ''} Confirmation</h1>
                        </div>
                    </Steps>


                </ContainerSpace>
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
    img{cursor: pointer;}
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
        line-height: 100%; 
        text-align: center;
    }

    h2{
        color: #4D5254;
        font-size: 24px;
        line-height: 100%;
        font-weight: 400;
        text-align: center;
    }

    @media Screen and (max-width: 480px) {
        position: static;
        margin-top: 32px;
        h1{
            font-size: 32px;
            line-height: 140%;
        }

        h2{
            font-size: 16px;
            font-weight: 400;
            line-height: 140%; 
        }
    }
`

const ContainerSpace = styled.div`
    max-width: 1245px;
`

const Steps = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 125px;

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
        span{
            font-weight: 700;
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

    @media Screen and (max-width: 480px) {
        padding-top: 24px;
        min-width: 320px;
        

        div{
            flex-direction: column;
            justify-content: center;
            align-items: center;
            h1{
                font-size: 12px;
                line-height: 110%;
            }
            
            div{
                padding:0px;
                margin-bottom: 8px;
                h2{
                    font-size: 14px;
                }
                h3{
                    font-size: 14px;
                }
                svg:first-child{
                    width: 8px;
                    height: 8px;
            }
                svg{
                    width: 20px;
                    height: 20px;
                }
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
        font-size: 31px;
        font-weight: 400;
        max-width: 542px;
        margin-bottom: 32px;
        line-height: 130%;
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
    p{
        color: #4D5254;
        line-height: 140%;
        font-family: 'Manrope', sans-serif;
        font-size: 16px;
        font-weight: 400;
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
    margin-bottom: 15px;
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

const Information = styled.div`
    margin-top: 32px;
    div{
        display: flex;
        align-items: center;
        height: 22px;
        margin-bottom: 16px;
        h1{
            color: #4D5254;
            font-size: 16px;
            font-weight: 400;
            font-family: 'Manrope', sans-serif;
            margin: 0;
            margin-left: 12px;
        }
        span{
            color: #4D5254;
            font-family: 'Manrope', sans-serif;
            font-size: 16px;
            font-weight: 700;
        }
    }
    :last-child{
        margin-bottom: 0;
    }
`

const Discount = styled.div`
    display: flex;
    align-items: center;
    background-color: #EDF3FD;
    border-radius: 10px;
    height: 32px;
    padding: 12px 16px;
    margin-top:32px;
    img {
        margin-right: 16px;
    }
    h1{
        color: #000;
        font-family: 'Manrope', sans-serif;
        font-size: 16px;
        margin: 0;
    }
    span{
        color: #2C7EF8;
        font-family: 'Manrope', sans-serif;
        font-size: 16px;
        font-weight: 400;
    }
`

const Payment = styled.div`
    margin-top: 32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    button{
        height: 59px;
        padding: 16px 64px;
        display:  flex;
        align-items: center;
        justify-content: center;
        gap:10px;
        border-radius: 50px;
        background-color: #59AE43;
        color:#FFFFFF;
        font-size: 20px;
        font-weight: 700;
        border: 0px;
        width: 100%;
        cursor: pointer;
    }
    h3{
        color: #F82C2C;
        font-family: 'Manrope', sans-serif;
        font-size: 18px;
        font-weight: 500;
        text-decoration: underline;
        margin-top: 20px;
        cursor: pointer;
    }
    
`

const PaymentMethods = styled.div`
    margin-top: 12px;
    display: flex;
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid #CFCFCF;

    div{
        display: flex;
        :first-child{
            margin-right: 10px;
        }
    }
    h1{
        color: #4D5254;
        font-family: 'Manrope', sans-serif;
        font-size: 12px;
        font-weight: 400;
        margin: 0;
    }
    h2{
        font-size: 16px;
        font-family: 'Manrope', sans-serif;
        color:#CFCFCF;
        margin: 0;
        margin: 0 16px;
    }
`

const Satisfation = styled.div`
    display: flex;
    max-width:538px ;
    align-items: center;
    margin-top: 32px;
    img{
        margin-right:16px;
    }
    p{
        color: #4D5254;
        font-size: 16px;
        font-weight: 400;
        font-family: 'Manrope', sans-serif;
        line-height: 140%;
    }
    span{
        color: #4D5254;
        font-family: 'Manrope', sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 140%;
    }
`