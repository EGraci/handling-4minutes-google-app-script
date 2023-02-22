function main(){
  let timer = new HandlingTime('id file json');
  let slice = 1;
  let tmp = 'data array';
  
  timer.setTmp(tmp);

  for(let i = 0; i < tmp.length; i++){
    if(timer.extistByLastExcute()){
      // last process
      slice += i;
      tmp = tmp.slice(slice);
      tmp.push({"status":0});
      DriveApp.getFileById(timer.getIdJson()).setContent(JSON.stringify(tmp));
      break;
    }
    // do process
  }
}

function triggerHandling(){
  let timer = new HandlingTime('id file json');
  let slice = 1;
  // handling json is null
  try{
    let tmp = timer.getTmp();

    // handling diffrent trigger run
    if(tmp[tmp.length-1].status == 1){
      console.log("Trigger on runing program");
      return;
    }

    // handling only 1 trigger run
    tmp[tmp.length-1].status = 1;
    DriveApp.getFileById('id file json').setContent(tmp);

    console.log(tmp);
    for(let i = 0; i < tmp.length-1; i++){
      let index = i + 2;
      if(timer.extistByLastExcute()){
        slice += i;
        // last process
        
        tmp = tmp.slice(slice);
        tmp[tmp.length-1].status = 0;
        DriveApp.getFileById('id file json').setContent(JSON.stringify(tmp));
        return;
      }
      // do process
      
    }
    DriveApp.getFileById('id file json').setContent("[]");
  }catch(error){
    console.log("No data tmp");
    console.log(error);
    return;
  }
}
