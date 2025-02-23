class calculations_insight {
    constructr(){
    }

    disappear_first_buttons(){
      let FVB = document.querySelector(".first_view_buttons");
      FVB.style.display ="none"
      let second_Header = document.createElement("h3");
      second_Header.textContent ="*Currently calculating inside EU*";
      second_Header.style.opacity =".8"
      document.querySelector(".calculating_details").appendChild(second_Header);
    }

     creating_countries(countries_dropdown,margsel,lab,marg){
        let styleobj = {width : "160px", width: "160px" ,
            height: "37px",
            borderRadius : "18px",
            marginTop : margsel,
            position: "absolute"
        }
            
                Object.assign(countries_dropdown.style,styleobj)
        
        let countries_array = ["Choose your country","Poland","Germany","Spain","Netherlands","France","Italy"];
        for(let index = 0; index<countries_array.length;index++){
            let opt = countries_array[index];
            console.log(opt)
            countries_dropdown.options.add(new Option(countries_array[index],countries_array[index]));
        }
        
                let country_label = document.createElement("label");
                country_label.textContent =lab;
                let stob ={
                    position : "absolute",
                    fontSize : "x-large",
                    marginRight : "20px",
                    top: marg,
                    left: "28%",
                }

                 Object.assign(country_label.style,stob);
                document.querySelector(".calculating_details").appendChild(country_label);

     }

    documents()
{
        
        let origin_countries_dropdown = document.createElement("select");
        this.disappear_first_buttons();
        this.creating_countries(origin_countries_dropdown,"16%","from","36%")
        document.querySelector(".calculating_details").appendChild(origin_countries_dropdown);

        let disit_countries_dropdown = document.createElement("select");
        document.querySelector(".calculating_details").appendChild(disit_countries_dropdown);
        this.creating_countries(disit_countries_dropdown,"34%","to","53%")

        let same_country_button = document.createElement("button");
        same_country_button.classList.add("same_country_button");
        same_country_button.textContent="same country";
        same_country_button.addEventListener("click",()=>{
        disit_countries_dropdown.value = origin_countries_dropdown.value;
       })

        document.querySelector(".calculating_details").appendChild(same_country_button);

      let num_doc_lab = document.createElement("label");
      num_doc_lab.textContent ="number of documents"
      num_doc_lab.classList.add("num_doc_lab")
      document.querySelector(".calculating_details").appendChild(num_doc_lab);


      let num_documents_input = document.createElement("input")
      num_documents_input.setAttribute("type","number");
      num_documents_input.classList.add("num_documents_input")
      document.querySelector(".calculating_details").appendChild(num_documents_input);

      let check_result = document.createElement("input")
      check_result.setAttribute("readonly","");
      check_result.classList.add("CRIF");
      check_result.setAttribute("placeholder","the price is")
      document.querySelector(".calculating_details").appendChild(check_result);

      let check_button = document.createElement("button");
      check_button.textContent="Check";
      document.querySelector(".calculating_details").appendChild(check_button);
      check_button.classList.add("check_docs_price");

      
        check_button.addEventListener("click",()=>{
            if (origin_countries_dropdown.value === "Choose your country" || disit_countries_dropdown.value === "Choose your country") {
                alert("choose the locations first");
            }
            else if(num_documents_input.value === "" || num_documents_input.value < 0){
                alert("please enter enter a valid number");
                num_documents_input.value ="";
            }
            else{
                const prom = new Promise((solved)=>{
                solved(origin_countries_dropdown.value);
            })
            .then((origin)=>{
                if(origin === disit_countries_dropdown.value){
                    switch (disit_countries_dropdown.value) {
                        case "Poland":
                            if (num_documents_input.value < 5) {
                                let pricePpaper = .7;
                                let finalPrice = pricePpaper * num_documents_input.value;
                                check_result.value = Math.floor(finalPrice) +" "+ "zlotes"
                            }
                            else if ( num_documents_input.value > 5 && num_documents_input.value < 20) {
                                let pricePpaper = .5;
                                let finalPrice = pricePpaper * num_documents_input.value;
                                check_result.value = Math.floor(finalPrice) +" "+ "zlotes"
                            }
                            else {
                                let pricePpaper = .3;
                                let finalPrice = pricePpaper * num_documents_input.value;
                                check_result.value = Math.floor(finalPrice) +" "+ "zlotes"
                            }
                            break;
                            case "Germany":
                            if (num_documents_input.value < 5) {
                                let pricePpaper = 1.9;
                                let finalPrice = pricePpaper * num_documents_input.value;
                                check_result.value = Math.floor(finalPrice) +" "+ "Euro"
                            }
                            else if ( num_documents_input.value > 5 && num_documents_input.value < 20) {
                                let pricePpaper = 1.5;
                                let finalPrice = pricePpaper * num_documents_input.value;
                                check_result.value = Math.floor(finalPrice) +" "+ "Euro"
                            }
                            else {
                                let pricePpaper = 1.3;
                                let finalPrice = pricePpaper * num_documents_input.value;
                                check_result.value = Math.floor(finalPrice) +" "+ "Euro"
                            }
                            break;
                            case "Spain":
                                if (num_documents_input.value < 5) {
                                    let pricePpaper = 1.9;
                                    let finalPrice = pricePpaper * num_documents_input.value;
                                    check_result.value = Math.floor(finalPrice) +" "+ "Euro"
                                }
                                else if ( num_documents_input.value > 5 && num_documents_input.value < 20) {
                                    let pricePpaper = 1.5;
                                    let finalPrice = pricePpaper * num_documents_input.value;
                                    check_result.value = Math.floor(finalPrice) +" "+ "Euro"
                                }
                                else {
                                    let pricePpaper = 1.3;
                                    let finalPrice = pricePpaper * num_documents_input.value;
                                    check_result.value = Math.floor(finalPrice) +" "+ "Euro"
                                }
                                break;
                                case "Netherlands":
                                    if (num_documents_input.value < 5) {
                                        let pricePpaper = 1.9;
                                        let finalPrice = pricePpaper * num_documents_input.value;
                                        check_result.value = Math.floor(finalPrice) +" "+ "Euro"
                                    }
                                    else if ( num_documents_input.value > 5 && num_documents_input.value < 20) {
                                        let pricePpaper = 1.5;
                                        let finalPrice = pricePpaper * num_documents_input.value;
                                        check_result.value = Math.floor(finalPrice) +" "+ "Euro"
                                    }
                                    else {
                                        let pricePpaper = 1.3;
                                        let finalPrice = pricePpaper * num_documents_input.value;
                                        check_result.value = Math.floor(finalPrice) +" "+ "Euro"
                                    }
                                    break;
                                    case "Italy":
                                        if (num_documents_input.value < 5) {
                                            let pricePpaper = 1.9;
                                            let finalPrice = pricePpaper * num_documents_input.value;
                                            check_result.value = Math.floor(finalPrice)+" "+ "Euro"
                                        }
                                        else if ( num_documents_input.value > 5 && num_documents_input.value < 20) {
                                            let pricePpaper = 1.5;
                                            let finalPrice = pricePpaper * num_documents_input.value;
                                            check_result.value = Math.floor(finalPrice) +" "+ "Euro"
                                        }
                                        else {
                                            let pricePpaper = 1.3;
                                            let finalPrice = pricePpaper * num_documents_input.value;
                                            check_result.value = Math.floor(finalPrice) +" "+ "Euro"
                                        }
                                        break;
                   
                        default:
                            break;
                        }
            }
        else {
            if(origin === "Poland" && disit_countries_dropdown.value !== "Poland"){
                if (num_documents_input.value < 5) {
                    let pricePpaper = 3.7;
                    let finalPrice = pricePpaper * num_documents_input.value;
                    check_result.value = Math.floor(finalPrice) +" "+ "zlotes"
                }
                else if ( num_documents_input.value > 5 && num_documents_input.value < 20) {
                    let pricePpaper = 3.5;
                    let finalPrice = pricePpaper * num_documents_input.value;
                    check_result.value = Math.floor(finalPrice) +" "+ "zlotes"
                }
                else {
                    let pricePpaper = 3.3;
                    let finalPrice = pricePpaper * num_documents_input.value;
                    check_result.value = Math.floor(finalPrice) +" "+ "zlotes"
                }
            }
             // Choose your country","Poland","Germany","Spain","Netherlands","France","Italy"];
        }
        })
            }
            
      })
        
            
    }

    pack(){
        
        let origin_countries_dropdown = document.createElement("select");
        this.disappear_first_buttons();
        this.creating_countries(origin_countries_dropdown,"16%","from","36%")
        document.querySelector(".calculating_details").appendChild(origin_countries_dropdown);

        let disit_countries_dropdown = document.createElement("select");
        document.querySelector(".calculating_details").appendChild(disit_countries_dropdown);
        this.creating_countries(disit_countries_dropdown,"34%","to","53%")

        let same_country_button = document.createElement("button");
        same_country_button.classList.add("same_country_button");
        same_country_button.textContent="same country";
        same_country_button.addEventListener("click",()=>{
        disit_countries_dropdown.value = origin_countries_dropdown.value;
         })

   document.querySelector(".calculating_details").appendChild(same_country_button);

   let weight_pac_lab = document.createElement("label");
   weight_pac_lab.textContent ="weight of the package (in Grams)"
   weight_pac_lab.classList.add("num_doc_lab")
   document.querySelector(".calculating_details").appendChild(weight_pac_lab);

   let weight_pac_input = document.createElement("input")
    weight_pac_input.setAttribute("type","number");
    weight_pac_input.classList.add("weight_pac_input")
    document.querySelector(".calculating_details").appendChild(weight_pac_input);

    let check_button = document.createElement("button");
      check_button.textContent="Check";
      document.querySelector(".calculating_details").appendChild(check_button);
      check_button.classList.add("check_docs_price");

      let check_result = document.createElement("input")
      check_result.setAttribute("readonly","");
      check_result.classList.add("CRIF");
      check_result.setAttribute("placeholder","the price is")
      document.querySelector(".calculating_details").appendChild(check_result);

      check_button.addEventListener("click",()=>{
        if (origin_countries_dropdown.value === "Choose your country" || disit_countries_dropdown.value === "Choose your country") {
            alert("choose the locations first");
        }
        else if(weight_pac_input.value === "" || weight_pac_input.value < 0){
            alert("please enter enter a valid weight");
            weight_pac_input.value ="";
        }
        else{
            const prom = new Promise((solved)=>{
            solved(origin_countries_dropdown.value);
        })
        .then((origin)=>{
            if(origin === disit_countries_dropdown.value){
                switch (disit_countries_dropdown.value) {
                    case "Poland":
                        if (weight_pac_input.value < 5) {
                            let pricePpaper = .7;
                            let finalPrice = pricePpaper * weight_pac_input.value;
                            check_result.value = Math.floor(finalPrice) +" "+ "zlotes"
                        }
                        else if ( weight_pac_input.value > 5 && weight_pac_input.value < 20) {
                            let pricePpaper = .5;
                            let finalPrice = pricePpaper * weight_pac_input.value;
                            check_result.value = Math.floor(finalPrice) +" "+ "zlotes"
                        }
                        else {
                            let pricePpaper = .3;
                            let finalPrice = pricePpaper * weight_pac_input.value;
                            check_result.value = Math.floor(finalPrice) +" "+ "zlotes"
                        }
                        break;
                        case "Germany":
                        if (weight_pac_input.value < 5) {
                            let pricePpaper = 1.9;
                            let finalPrice = pricePpaper * weight_pac_input.value;
                            check_result.value = Math.floor(finalPrice) +" "+ "Euro"
                        }
                        else if ( weight_pac_input.value > 5 && weight_pac_input.value < 20) {
                            let pricePpaper = 1.5;
                            let finalPrice = pricePpaper * weight_pac_input.value;
                            check_result.value = Math.floor(finalPrice) +" "+ "Euro"
                        }
                        else {
                            let pricePpaper = 1.3;
                            let finalPrice = pricePpaper * weight_pac_input.value;
                            check_result.value = Math.floor(finalPrice) +" "+ "Euro"
                        }
                        break;
                        case "Spain":
                            if (weight_pac_input.value < 5) {
                                let pricePpaper = 1.9;
                                let finalPrice = pricePpaper * weight_pac_input.value;
                                check_result.value = Math.floor(finalPrice) +" "+ "Euro"
                            }
                            else if ( weight_pac_input.value > 5 && weight_pac_input.value < 20) {
                                let pricePpaper = 1.5;
                                let finalPrice = pricePpaper * weight_pac_input.value;
                                check_result.value = Math.floor(finalPrice) +" "+ "Euro"
                            }
                            else {
                                let pricePpaper = 1.3;
                                let finalPrice = pricePpaper * weight_pac_input.value;
                                check_result.value = Math.floor(finalPrice) +" "+ "Euro"
                            }
                            break;
                            case "Netherlands":
                                if (weight_pac_input.value < 5) {
                                    let pricePpaper = 1.9;
                                    let finalPrice = pricePpaper * weight_pac_input.value;
                                    check_result.value = Math.floor(finalPrice) +" "+ "Euro"
                                }
                                else if ( weight_pac_input.value > 5 && weight_pac_input.value < 20) {
                                    let pricePpaper = 1.5;
                                    let finalPrice = pricePpaper * weight_pac_input.value;
                                    check_result.value = Math.floor(finalPrice) +" "+ "Euro"
                                }
                                else {
                                    let pricePpaper = 1.3;
                                    let finalPrice = pricePpaper * weight_pac_input.value;
                                    check_result.value = Math.floor(finalPrice) +" "+ "Euro"
                                }
                                break;
                                case "Italy":
                                    if (weight_pac_input.value < 5) {
                                        let pricePpaper = 1.9;
                                        let finalPrice = pricePpaper * weight_pac_input.value;
                                        check_result.value = Math.floor(finalPrice)+" "+ "Euro"
                                    }
                                    else if ( weight_pac_input.value > 5 && weight_pac_input.value < 20) {
                                        let pricePpaper = 1.5;
                                        let finalPrice = pricePpaper * weight_pac_input.value;
                                        check_result.value = Math.floor(finalPrice) +" "+ "Euro"
                                    }
                                    else {
                                        let pricePpaper = 1.3;
                                        let finalPrice = pricePpaper * weight_pac_input.value;
                                        check_result.value = Math.floor(finalPrice) +" "+ "Euro"
                                    }
                                    break;
               
                    default:
                        break;
                    }
        }
    else {
        if(origin === "Poland" && disit_countries_dropdown.value !== "Poland"){
            if (weight_pac_input.value < 5) {
                let pricePpaper = 3.7;
                let finalPrice = pricePpaper * weight_pac_input.value;
                check_result.value = Math.floor(finalPrice) +" "+ "zlotes"
            }
            else if ( weight_pac_input.value > 5 && weight_pac_input.value < 20) {
                let pricePpaper = 3.5;
                let finalPrice = pricePpaper * weight_pac_input.value;
                check_result.value = Math.floor(finalPrice) +" "+ "zlotes"
            }
            else {
                let pricePpaper = 3.3;
                let finalPrice = pricePpaper * weight_pac_input.value;
                check_result.value = Math.floor(finalPrice) +" "+ "zlotes"
            }
        }
         // Choose your country","Poland","Germany","Spain","Netherlands","France","Italy"];
    }
    })
        }
        
  })

    }
}

function Res_or_fromDoc(){
    let DFb = new calculations_insight();
    DFb.documents();
}
function Res_or_fromPAC(){
    let DFb = new calculations_insight();
    DFb.pack();
}