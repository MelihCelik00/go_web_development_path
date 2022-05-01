/*
Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. 
Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. 
Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.
*/

const arguments = process.argv.slice(2);

function areaOfCircle(radius){
    let area = Math.PI * ( radius**2 );
    console.log(area);
    return area;
}

areaOfCircle(arguments[0]);

console.log(`Area of circle with the radius ${arguments[0]}: ${areaOfCircle(arguments[0])}`);