
const formatarDigito = (digito) => `0${digito}`.slice(-2);

const atualizarTempo = (tempo) =>{
    const segundos = document.getElementById("segundos");
    const minutos = document.getElementById("minutos");
    const horas = document.getElementById("horas");
    const dias = document.getElementById("dias");

    const qtdSegundos = tempo % 60;
    const qtdminutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdhoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtdDias = Math.floor(tempo / (60 * 60 * 24))

    segundos.textContent = formatarDigito(qtdSegundos) ;
    minutos.textContent = formatarDigito(qtdminutos) ;
    horas.textContent = formatarDigito(qtdhoras) ;
    dias.textContent = formatarDigito(qtdDias) ;
}

const contagemRegressiva = (tempo) =>{
    const pararContagem = () =>{
        clearInterval(id);
    }
   
    const contar = () =>{
        if(tempo == 0){
            pararContagem();
        }
        atualizarTempo(tempo);
        tempo--;
    }
   const id = setInterval(contar, 1000);
}

const tempoRestante = () =>{
    // 1 de janeiro de 1970 (inicio da contagem do javascript)
    const dataEvento = new Date("2022-04-15 20:00:00");
    const dataHoje = Date.now();
    return Math.floor((dataEvento - dataHoje) / 1000);
}

contagemRegressiva(tempoRestante());