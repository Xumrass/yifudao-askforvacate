function submit(){
    console.log("Btn Clicked");     //debug log
    let inpMust = new Array('','','','','');
    let inpMay = new Array('','','','','','');
    let opContent = document.querySelectorAll('#yfdDisp input');
    let flag = false;
    
    inpMust[0] = document.getElementById('name').value;
    inpMust[1] = document.getElementById('class').value;
    inpMust[2] = document.getElementById('teacher').value;
    inpMust[3] = document.getElementById('why').value;
    inpMust[4] = document.getElementById('place').value;
    
    //获取输入与判断是否为空
    if(isEmptyMust(inpMust)){
        console.log("upper full filled"); //debug log
        //填写默认内容
        fillMay(inpMay);
        //隐藏输入页面 展示奕〇导界面
        document.getElementById("upStates").style.visibility="hidden";
        document.getElementById("input").style.visibility="hidden";
        document.getElementById("btmStates").style.visibility="hidden";
        document.body.style.backgroundImage="url(./out.jpg)";
        document.getElementById("yfd").style.visibility="visible";        
        //写入内容
        display(inpMust, inpMay, opContent);
        
    }
}

