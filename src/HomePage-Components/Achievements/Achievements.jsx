import './Achievements.css'

function Achievements(){

    return(
        <section id="our_Record">
       <h1 className='headers' id='first_line_h'>Turning Passion for making the world smaller</h1>

       <h1 className='headers' id='second_line_h'>into Action</h1>
       
       <h3 className='headers third_forth' id='third_line_h'>Thanks to the trust of our customers, Yousco has accomplished a lot of good in transportation.</h3>
       
       <h3 className='headers third_forth' id='forth_line_h'>However, there is still work to be done.</h3>

       <div id='spans'>
           <div className='record_cards'>
            <h1>+100</h1>
            <h3>Countries Reached</h3>
            <p>Yousco has successfully made contacts with more than 100 country and even established a headquarter in each country for easier contacting and opirational orginzation.</p>
           </div>

           <div className='record_cards'>
           <h1>+50</h1>
            <h3>Years of serving</h3>
            <p>Since 1967, Yousco has helped trnasport and taking care of the customers most valuable goods.</p>
           </div>

           <div className='record_cards'>
           <h1>+118</h1>
            <h3>
            Thousand successful transportation</h3>
            <p>gaining the customer is not the easy process but it was always the company aim, and therefore we can see the results represented by the numbers of orders all over the world.</p>
           </div>

       </div>
       <div id='record_background'></div>

     </section>
    )
}

export default Achievements