AOS.init();

const dataDoEvento = new Date("Dec 31, 2026 23:59:59").getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = dataDoEvento - timeStampAtual;

    const dias = Math.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distanciaAteOEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distanciaAteOEvento % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distanciaAteOEvento % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML =`${dias}d ${horas}h ${minutos}m ${segundos}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById("contador").innerHTML = "";
        document.querySelector(".hero__text").innerHTML = "<i>O maior evento de tecnologia do Brasil já começou</i>";
    }

}, 1000);