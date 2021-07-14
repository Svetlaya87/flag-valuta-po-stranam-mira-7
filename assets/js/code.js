const URL1='https://restcountries.eu/rest/v2/all';
const URL2='https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
let arr=[];
let countriesSort=[];
let NBU=[];
let CountriesAndNBU=[];


(async function(){
    let countries = fetch(URL1);
    let NBU = fetch(URL2);
    
    arr = await Promise.all( [countries, NBU] );


    
    arr=arr.map( item => item.json() );

    arr= await Promise.all( arr );
    console.log(arr);


    for (let i=0; i<arr[0].length; i++){
        countriesSort.push(
            {
                codeCurrency:arr[0][i].currencies[0].code,
                flag: arr[0][i].flag,
                countryName:arr[0][i].name,
            }
        );
            
       
    }

    console.log(countriesSort);
    console.log(arr);

    if (arr[1].length ==60){
        for (let i=0; i<arr[1].length; i++){
            NBU.push(
                {
                    codeCurrency:arr[1][i].cc,
                    rate: arr[1][i].rate,
                    txt:arr[1][i].txt,
                }
            );
                
        
        }
    }


    console.log(arr[0][77].currencies[0].code);
    console.log(arr[0][77].currencies[0].name);
    console.log(arr[0][77].flag);
    console.log(arr[0][77].name);
    console.log(arr[1][12].cc);
    


return arr,countriesSort;





    //let contries=await fetch(URL1);
    //contries=await contries.json();


})();


    



console.log(arr);
/*
if (arr.length == 2 && arr[0].length == 250 && arr[1].length == 60 ) {
    for (let j=0;j<countriesSort.length; j++){
        for (let i=0; arr[1].length; i++){
                    
                    if(arr[1][i].cc==countriesSort[j].codeCurrency){
                        CountriesAndNBU.push(
                            {
                                codeCurrency: countriesSort[j].codeCurrency,
                                flag: countriesSort[j].flag,
                                countryName: countriesSort[j].countryName,
                                rate: arr[1][i].rate,
                                date: arr[1][i].exchangedate,
                                txt: arr[1][i].txt,



                            }
                        );
                        

                    }
        }



    } 
} 
console.log(countriesSort);
console.log(CountriesAndNBU); 
*/








