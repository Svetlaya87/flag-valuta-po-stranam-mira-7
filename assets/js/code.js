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

    
    

        if (arr.length == 2 && arr[0].length == 250 && arr[1].length == 60 ) {
            for (let j=0;j<countriesSort.length; j++){
                for (let i=0; i<arr[1].length; i++){
                            
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

        console.log(CountriesAndNBU);

        CountriesAndNBU = CountriesAndNBU.map( item => `
        <tr class="border border-secondary">
            <td>
                <img src='${item.flag}'>
            </td>
        
            <td>${item.countryName} </td>
            <td>(${item.codeCurrency}</td>
            <td>-</td>
            <td>${item.txt})</td>
            <td>Курс: ${item.rate}</td>
            <td>на: ${item.date}</td>

        </tr>
        <tr>
            <td class='p-3'></td>
        </tr>`);

        CountriesAndNBU = CountriesAndNBU.join('');

        let TableBody = document.querySelector('tbody');
        TableBody.innerHTML=CountriesAndNBU;

    console.log(arr[0][77].currencies[0].code);
    console.log(arr[0][77].currencies[0].name);
    console.log(arr[0][77].flag);
    console.log(arr[0][77].name);
    console.log(arr[1][12].cc);
    console.log(CountriesAndNBU);

    


  






})();


    








