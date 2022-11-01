//判断必填数据组是否为空 空则警告退出 非空则返回1
function isEmptyMust(){
    for (let i = 0; i < arguments.length; i++) {
        if(arguments[i] == '') {
            alert("有必填项为空！");
            console.log('blank' + i + ' is empty');  //debug log
            return 0;   //有空 返回0
        }
    }
    return 1;   //全填 返回1
}
