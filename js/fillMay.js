function fillMay(inpMay){
    //离校时间
    let leaveDate = Date.now() - (15*60*1000);
    inpMay[0] =  dayjs(leaveDate).format('YYYY-MM-DD HH:mm');
    //返校时间
    let backDate = Date.now() + (4*60*60*1000);
    inpMay[1] =  dayjs(backDate).format('YYYY-MM-DD HH:mm');
    //申请时间
    inpMay[2] = getMoble();
    let applyDate = Date.now() - (3*60*60*1000);
    inpMay[3] =  dayjs(applyDate).format('YYYY-MM-DD HH:mm');
    //通过时间
    let passDate = Date.now() - (2*60*50*1000);
    inpMay[4] =  dayjs(passDate).format('YYYY-MM-DD HH:mm');
    //外出天数
    inpMay[5] = 0;
    console.log("may content filled");
    return inpMay;
}