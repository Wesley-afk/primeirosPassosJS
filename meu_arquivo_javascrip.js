var p = document.getElementById('id_p');
console.log(p);

//captura o evento load da página
window.onload = function () {

    //localiza o elemento com id "id_p"
    var p = document.getElementById('id_p');
    console.log(p);

    // confihura a prorpiedade background do elemento
    p.style.backgroundColor = '#0000FF';

    // Localiza os elementos a (links) dentro do p
    var links = p.getElementsByTagName('a');

    // Alerta o atributo href do primeiro link
    alert(links[0].href);
}