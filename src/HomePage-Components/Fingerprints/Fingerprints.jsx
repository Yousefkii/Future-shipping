import './Fingerprints.css'

function Fingerprints(){
    return(
        <div id='countainer_partners'> 
        <div id='header'>
            <h1>
                We had our touch all over the different continents
            </h1>
        </div>
            <div id='partners_section'>
                <div className='after_hover'>
               <div  id='partner_countries'>
                 <div className='countries' id='Egypt'>
                    <h1>Egypt</h1>
                 </div>

                 <div className='countries' id='Germany'>
                    <h1>Germany</h1>
                 </div>

                 <div className='countries' id='USA'>
                    <h1>USA</h1>
                 </div>

                 <div className='countries' id='China'>
                    <h1>China</h1>
                 </div>

                 <div className='countries' id='Brazil'>
                    <h1>Brazil</h1>
                 </div>
                 </div>
               </div>
            </div>
        </div>
    )
}

export default Fingerprints