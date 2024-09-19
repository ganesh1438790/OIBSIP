function convert(){
    var FromUnit=document.getElementById('FromUnit').value;
    var ToUnit=document.getElementById('ToUnit').value;
    var Temperature=parseFloat(document.getElementById('Temperature').value);
    var ConvertedValue;
    var ResultUnit;

    // Perform Conversation Logic
    switch(FromUnit){
        case 'C':
            if (ToUnit==='F'){
                ConvertedValue=(Temperature*9/5)+32
                ResultUnit='F'
            }else if(ToUnit==='K'){
                ConvertedValue=Temperature+273.15;
                ResultUnit='K'
            }else if(ToUnit==='R'){
                ConvertedValue=Temperature+273.15;
                ResultUnit='R'
            }else{
                ConvertedValue=Temperature;
                 ResultUnit='C'
           }
           break;
           case 'F':
            if (ToUnit==='C'){
                ConvertedValue=(Temperature-32)*5/9;
                ResultUnit='C'
            }else if(ToUnit==='K'){
                ConvertedValue=(Temperature-32)*5/9 +273.15;
                ResultUnit='K'
            }else if(ToUnit==='R'){
                ConvertedValue=Temperature+459.65;
                ResultUnit='R'
            }else{
                ConvertedValue=Temperature;
                 ResultUnit='F'
           }
           break;
           case 'K':
            if (ToUnit==='C'){
                ConvertedValue=(Temperature*9/5)+32
                ResultUnit='C'
            }else if(ToUnit==='K'){
                ConvertedValue=(Temperature+273.15) * 9/5 +32;
                ResultUnit='K'
            }else if(ToUnit==='R'){
                ConvertedValue=Temperature *9/5;
                ResultUnit='R'
            }else{
                ConvertedValue=Temperature;
                 ResultUnit='K'
           }
           break;

           case 'R':
            if (ToUnit==='R'){
                ConvertedValue=Temperature*5/9;
                ResultUnit='R'
            }else if(ToUnit==='K'){
                ConvertedValue=Temperature - 459.67;
                ResultUnit='K'
            }else if(ToUnit==='C'){
                ConvertedValue=(Temperature - 491.67)*5/9;
                ResultUnit='C'
            }else{
                ConvertedValue=Temperature;
                 ResultUnit='R'
           }
           break;
}
document.getElementById('result').value=ConvertedValue.toFixed(2) +' ' + ResultUnit;
}