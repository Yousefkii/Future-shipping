import gsap from 'gsap'
import {useGSAP} from '@gsap/react' 
import { ScrollTrigger } from 'gsap/all'
import './Hero.css'

function Hero(){

    useGSAP(()=>{
        gsap.to('#future',{
            scrollTrigger :{
                trigger: "#future",
                start: "top center",
                toggleActions : "restart bause restart bause"
            },
            opacity :1,
            duration: 1.2,
            x: '320%', 
        })
    },[])

    useGSAP(()=>{
        gsap.to('#h2',{
            scrollTrigger :{
                trigger: "#future",
                start: "top center",
                toggleActions : "restart bause restart bause"
            },
            opacity :1,
            duration: 1.5,
            x: 630, 
        })
    },[])

    return(
        <div>
            <div id='future'><h2 id='h2'>shipping future</h2></div>
        </div>
    )
}

export default Hero