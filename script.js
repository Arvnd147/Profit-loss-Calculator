function calProfit() {
    const sp = parseFloat(document.getElementById("sp").value)
    const cp = parseFloat(document.getElementById("cp").value)

    if(isNaN(cp) || isNaN(sp)) {
        alert("Please enter valid numbers for CP and SP");
    }

    const diff = sp - cp;
    let res = "";

    if(diff>0){
        res = "Profit";
    }else if(diff <0){
        res = "Loss";
    }else{
        res = "No Profit, No Loss";
    }

    const percentage = ((Math.abs(diff/cp)*100)).toFixed(2);

    const resText = document.getElementById("resultText");
    const proText = document.getElementById("profitLoss");

    resText.textContent = `Result: ${res}`;
    if(res == "Profit" || res == "Loss"){
        proText.textContent = `${res} Percentage: ${percentage} %`;
    }

    const imgP = document.getElementById("profitImage");
    const imgL = document.getElementById("lossImage");
    const imgN = document.getElementById("noPL");

    if (res == "Profit"){
        resText.classList.remove("red-text");
        proText.classList.remove("red-text");
        resText.classList.add("green-text");
        proText.classList.add("green-text");
        imgL.style.display = "none";
        imgP.style.display = "block";
        imgN.style.display = "none";

    } else if(res == "Loss"){
        resText.classList.remove("green-text");
        proText.classList.remove("green-text");
        resText.classList.add("red-text");
        proText.classList.add("red-text");
        imgP.style.display = "none";
        imgL.style.display = "block";
        imgN.style.display = "none";
    }else{
        proText.style.display = "none";
        imgP.style.display = "none";
        imgL.style.display = "none";
        imgN.style.display = "block";
        resText.classList.remove("red-text","green-text");
        proText.classList.remove("red-text","green-text");
    }
}