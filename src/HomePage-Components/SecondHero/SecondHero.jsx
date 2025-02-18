import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import './SecondHero.css'
import Buttons from './Buttons.jsx'
import { ScrollTrigger } from 'gsap/all';

function SecondHero(){

    function track ()
    {
      let TRN = document.querySelector("#tra_num").value;
      
      if (TRN === "") 
      {
        alert("you have to write the number first");
        return;
      }
      else if(TRN.length < 5)
      {
        alert("the tracking number isn't right");
        return;
      }
      TRN = Number(TRN);
      let orders_numbers = [11000,12000,13000,14000,15000];
      let checks = orders_numbers.some((e) =>{
           return e ===TRN;
      });
      if (checks === true) {
        alert("your order is on his way please be patient");
      }
      else{
        alert("there is no such order number, please try again");
      }
    };    
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{
        gsap.to('#buttons_div',{
            scrollTrigger :{
                trigger: "#buttons_div",
                start: "top center",
                toggleActions : "restart pause pause pasue",
                stagger:.5,
            },
            opacity :1,
            duration: 1.5,
            x: '-100%', 
            
        })
    },[])
     
    return(
        <section>
        <div id='countainer'>
        </div>
        <div id='buttons_div'>
                <Buttons/>
           </div>

        <div id="tracking_info_style">
        <div id="spinning"><h1 id="header_tracking" className="different_color">Track it!!</h1></div>
        <input id="tra_num" type="number" placeholder="type the shipment number"/>
        <button id="tr_num_check" className="different_color" onClick={track}>Check It</button> 
        </div>
        </section>
    )
}
export default SecondHero