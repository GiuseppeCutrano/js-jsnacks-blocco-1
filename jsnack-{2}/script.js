
var bici = [
{
  nome: 'mountain',
  peso: 16
},
{
  nome: 'triciclo',
  peso: 3
},
{
  nome: 'elettrica',
  peso: 13
}
];

var biciLeggera = bici[0];
for (var i = 0; i < bici.length; i++) {

  if (bici[i].peso < biciLeggera.peso) {
      biciLeggera = bici[i];
  }

}

console.log(biciLeggera);
