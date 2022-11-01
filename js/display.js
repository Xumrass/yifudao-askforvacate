function display(inpMust, inpMay, opContent){
    //循环写入内容
    for (let i = 0; i < inpMust.length; i++) {
        opContent[i].value = inpMust[i];
    }
    for (let i = 0; i < inpMay.length; i++) {
        opContent[i + inpMust.length].value = inpMay[i];
    }
}