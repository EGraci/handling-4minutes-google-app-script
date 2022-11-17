class HandlingTime{
  constructor(idTmpJson){
    this.start =  Date.now();
    this.limit = 240000;
    this.id = idTmpJson;
  }
  setLimit(miliSecond){
    this.limit = miliSecond;
  }
  setTmp(array){
    DriveApp.getFileById(this.id).setContent(JSON.stringify(array));
  }
  getLimit(){
    return this.limit;
  }
  getTimer(){
    return this.start;
  }
  getNow(){
    return (Date.now() - this.start);
  }
  getTmp(){
   let tmp = DriveApp.getFileById(this.id).getBlob().getDataAsString();
   return JSON.parse(tmp);
  }
  getIdJson(){
    return this.id;
  }
  resetTimer(){
    this.start =  Date.now();
  }
  extistByLastExcute(){
    if(this.getNow() > this.limit){
      return true;
    }
    return false;
  }
}
