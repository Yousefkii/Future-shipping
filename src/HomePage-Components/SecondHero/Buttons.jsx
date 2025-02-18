import st from './Buttons.module.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

function Buttons_Second_Hero(){

    function scrol_to_tracking(){
        scrollTo({
          left:0,
          top:800,
          behavior:"smooth"
        })
      }

      

   gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{
        gsap.to('#trigger',{
            scrollTrigger: {
                trigger : 'trigger',
                start: "bottom center",
                y: '40%',
            },
            opacity : 1,
            duration:1.5,
            stagger: 0.2,
        })
    })

  return(
    <>
     <a href="../public/Calc_package.html" target="_blank"><button id='trigger' className={st.Buttons}>calculate our fees</button></a>
    <span  className={st.middle_button}> <button id='trigger' className={st.Buttons} onClick={scrol_to_tracking}>track your shipment</button> </span>
    <a href="Send_It.html" target="_blank"><button id='trigger' className={st.Buttons}>send it</button></a>
    
    
    </>
  )
}
export default Buttons_Second_Hero