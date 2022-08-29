var dadosLogado = JSON.parse(localStorage.getItem(localStorage.getItem("id_login")));


var aula1 = ["https://www.youtube.com/embed/1yDdvg90674", "material/Aula1.pdf"]
var aula2 = ["https://www.youtube.com/embed/MJ0xGJIY1SM", "material/Aula2.pdf"]
var aula3 = ["https://www.youtube.com/embed/hGyoAwbhnwo", "material/Aula3.pdf"]
var aula4 = ["https://www.youtube.com/embed/DAyYnd38DHc", "material/Aula4.pdf"]
var aula5 = ["https://www.youtube.com/embed/6qm4s05CYv4", "material/Aula5.pdf"]
var aula6 = ["https://www.youtube.com/embed/_JtCvkKDzPE", "material/Aula6.pdf"]

function changeSrc(aula){
    if(aula == "aula1"){
        document.getElementById("vd").src = aula1[0];
        document.getElementById("link_download").href = aula1[1];
        console.log("sim")

    }else if(aula == "aula2"){
        document.getElementById("vd").src = aula2[0];
        document.getElementById("link_download").href = aula2[1];

    }else if(aula == "aula3"){
        document.getElementById("vd").src = aula3[0];
        document.getElementById("link_download").href = aula3[1];
        
    }else if(aula == "aula4"){
        document.getElementById("vd").src = aula4[0];
        document.getElementById("link_download").href = aula4[1];

    }else if(aula == "aula5"){
        document.getElementById("vd").src = aula5[0];
        document.getElementById("link_download").href = aula5[1];

    }else if(aula == "aula6"){
        document.getElementById("vd").src = aula6[0];
        document.getElementById("link_download").href = aula6[1];
    }

    aulaSelect(aula);
}

function aulaSelect(id_aula){

    var aulas = document.querySelectorAll(".aula");

    console.log(aulas)

    for (let i = 0; i < aulas.length; i++) {
        
        aulas[i].style.backgroundColor = "#ddd";
    }

    document.getElementById(id_aula).style.backgroundColor = "#ccc";
}

function jumpto_test(){
    
    console.log(dadosLogado)
  
    if(dadosLogado.nota >= 8){
        
        alert("Você já foi aprovado, acesse seu certificado no botão abaixo");

    }else if(dadosLogado.vzs >= 3){
        alert("Você esgotou suas tentativas! Tente novamente em uma semana.");
        
    }else{
        let ok = confirm("Deseja prosseguir? Isso contará como uma das três tentativa de fazer a prova");

        if(dadosLogado.vzs < 3 && ok){
        
            dadosLogado.vzs = dadosLogado.vzs + 1;
            localStorage.setItem(localStorage.getItem("id_login"), JSON.stringify(dadosLogado));
    
            window.location.href = "teste.html";
        }
    }
}

function jumpto_certificado(){

    if(dadosLogado.nota >= 8){

        window.open('certificado.html', '_blank');

    }else{
        alert("Para acessar o certificado é necessário passar na avaliação");
    }
}

function jumpto_inicio(){
    window.location.href = "inicio.html";
}