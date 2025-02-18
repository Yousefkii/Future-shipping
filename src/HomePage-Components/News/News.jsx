import './News.css'

function News(){

    function biggest_crank(){
        document.querySelector("#news_pic").style.backgroundImage = "url('https://d3f3h35mrzf979.cloudfront.net/Pictures/480xany/3/2/1/81321_wettering.JPG')";
        let cran_position = document.querySelector("#cran");
        cran_position.style.marginLeft ="120px";
        cran_position.style.fontWeight ="bolder";
        cran_position.style.transitionDuration ="500ms";
        document.querySelector("#pack").style.color ="gray";
        document.querySelector("#air").style.color ="gray";
      
        document.querySelector("#cran").addEventListener("mouseleave", ()=>{
          cran_position.style.marginLeft ="85px"
          cran_position.style.fontWeight ="normal";
          document.querySelector("#pack").style.color ="black";
        document.querySelector("#air").style.color ="black";
        });
      }
      
      function packages_trans(){
        let crank = document.querySelector("#news_pic").style.backgroundImage = "url('https://effectshippingllc.com/wp-content/uploads/2021/12/sdm1.jpg')";
        let cran_position = document.querySelector("#pack");
        cran_position.style.marginLeft ="120px";
        cran_position.style.fontWeight ="bolder";
        cran_position.style.transitionDuration ="500ms";
        document.querySelector("#cran").style.color ="gray";
        document.querySelector("#air").style.color ="gray";
      
        document.querySelector("#pack").addEventListener("mouseleave", ()=>{
          cran_position.style.marginLeft ="85px"
          cran_position.style.fontWeight ="normal";
          document.querySelector("#cran").style.color ="black";
        document.querySelector("#air").style.color ="black";
        });
      }
      function airplanes(){
        let crank = document.querySelector("#news_pic").style.backgroundImage = "url('https://img.etimg.com/thumb/width-1600,height-900,imgsize-143180,resizemode-75,msid-113334097/news/international/us/passengers-board-airplanes-from-left-side-heres-why.jpg')";
        let cran_position = document.querySelector("#air");
        cran_position.style.marginLeft ="120px";
        cran_position.style.fontWeight ="bolder";
        cran_position.style.transitionDuration ="500ms";
        document.querySelector("#pack").style.color ="gray";
        document.querySelector("#cran").style.color ="gray";
      
        document.querySelector("#air").addEventListener("mouseleave", ()=>{
          cran_position.style.marginLeft ="85px"
          cran_position.style.fontWeight ="normal";
          document.querySelector("#pack").style.color ="black";
        document.querySelector("#cran").style.color ="black";
        });
      }

    return(

        <div id="news_section">
        <div id="styled">Our News </div>
        <div className ="news_header" id="cran" onMouseEnter={biggest_crank}>transporting the biggest crank in the world from USA to Germany on 12/10/2024</div>
        <div className ="news_header" id="pack" onMouseEnter={packages_trans}>transporting more than 3000 packages all over the world within only ONE month on 23/08/2024</div>
        <div className ="news_header" id="air" onMouseEnter={airplanes}>adding 3 more airplanes to our Airforce on 05/02/2024</div>        
        <div id="news_pic"></div>
     </div>

    )
}
export default News