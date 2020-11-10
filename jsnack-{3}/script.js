var triangle ={
  base: 20,
  altezza: 10


};


var areaTriangle =( triangle.base * triangle.altezza) / 2;

console.log("L'area del triangolo è " + areaTriangle)

var ipotenusa = (triangle.altezza ** 2 + triangle.base ** 2) **.5
 var perimetro = (triangle.base + triangle.altezza + ipotenusa)
 console.log("il perimetro del triangolo è "+ Math.ceil(perimetro))
