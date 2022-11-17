function main(){
  let timer = new HandlingTime('id file json');
  let tmp = timer.getTmp();
  let slice = 1;

  for(let i = 0; i < tmp.length; i++){
    if(timer.extistByLastExcute()){
      // do last process
      slice += i;
      tmp = tmp.slice(slice);
      DriveApp.getFileById(timer.getIdJson()).setContent(JSON.stringify(tmp));
      break;
    }
    // do process
  }
}
