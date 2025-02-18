import './Footer.css'

function Footer(){
    return(

        <footer>
        <div id="footer">
            <div className="footer_header">
        <h1  id="lets_talk">
            Let's talk
        </h1>
        <div className="footer_icons">

            <i className="fa-brands fa-facebook fa-lg icons" ></i>
            <a className='tdn'  href="https://www.instagram.com/yosef_osama988/?hl=en"><i className="fa-brands fa-instagram fa-lg icons"></i></a>
            <i className="fa-solid fa-envelope fa-lg icons"></i>
            <a className='tdn'  href="https://github.com/Yousefkii/Yousco-Shipping-Co./tree/main"><i className="fa-brands fa-github fa-lg icons"></i></a> 
        </div>
        <p className='pp'>
           Every project starts with an idea,thought or even a singel far item,
           we will not let that far item stops you from achieving your <span className='spana' >goal</span> 
           just tell us want you need and the address. 
        </p>
        <button id="reach">Reach us </button>
    </div>
       <div id="frist_group">
           <a href="www.google.com" target="_self" className="head_link">company</a>  
          
           <a href="www.google.com" target="_self" id="about" className="footer_links">about</a>
          
           <a href="www.google.com" target="_self" className="footer_links">press</a>
           
           <a href="www.google.com" target="_self" className="footer_links">Work Here</a>  
           
           <a href="www.google.com" target="_self" className="footer_links">Legal</a>  
          
           <a href="www.google.com" target="_self" className="footer_links">Privacy Policy</a>  
           
           <a href="www.google.com" target="_self" className="footer_links">Contact Us</a>  
           
           <a href="www.google.com" target="_self" className="footer_links">Terms Of servics</a>  
           
           <a href="www.google.com" target="_self" className="footer_links">Cookies Settings</a>  
           
           <a href="www.google.com" target="_self" className="footer_links">Cookies Policy</a>  
           
       </div>
       <div id="second_group">
    </div>
    </div>
    </footer>

    )
}

export default Footer