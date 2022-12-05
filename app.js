var txt=[];
function PlatSelectioner() {
    var picture = document.getElementById('select').value;

    if (picture == 0) {
        document.getElementById('plat').style.display = "flex";
        document.getElementById('obento').style.display = "flex";
        document.getElementById('salade').style.display = "flex";
        document.getElementById('sushi').style.display = "flex";
    } 
    if (picture == 1) {
        document.getElementById('plat').style.display = "none";
        document.getElementById('obento').style.display = "none";
        document.getElementById('salade').style.display = "none";
        document.getElementById('sushi').style.display = "flex";
    } 
    if (picture == 2) {
        document.getElementById('plat').style.display = "none";
        document.getElementById('obento').style.display = "flex";
        document.getElementById('salade').style.display = "none";
        document.getElementById('sushi').style.display = "none";
    }
    if (picture == 3) {
        document.getElementById('plat').style.display = "flex";
        document.getElementById('obento').style.display = "none";
        document.getElementById('salade').style.display = "none";
        document.getElementById('sushi').style.display = "none";
    }
    if (picture == 4) {
        document.getElementById('plat').style.display = "none";
        document.getElementById('obento').style.display = "none";
        document.getElementById('salade').style.display = "flex";
        document.getElementById('sushi').style.display = "none";
    }

}
var sum = 0;
var i = 0;
function ajouter(name, price,id){
    sum+=price;
    const cont = document.getElementById("cart")
          txt[i]=name;
          cont.innerHTML+=`<div class="panier_elements">
          <p>${name}</p>
          <p>1</p>
          <p>${price}</p>
      </div>`
      console.log(1);
      document.getElementById("ttt").innerText=sum
    i++;
    document.querySelector("#pcont").innerText=i;
}
