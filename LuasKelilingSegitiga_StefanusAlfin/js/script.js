

function luas(){ 
    tinggi=eval(document.getElementById("tinggi").value);
    alas=eval(document.getElementById("alas").value);
    luas=0.5*alas*tinggi;
    document.getElementById("result").value=luas;
     }

     function keliling(){ 
        sisi1=eval(document.getElementById("sisi1").value);
        sisi2=eval(document.getElementById("sisi2").value);
        sisi3=eval(document.getElementById("sisi3").value);
        keliling=sisi1+sisi2+sisi3;
        document.getElementById("result2").value=keliling;

         }
 