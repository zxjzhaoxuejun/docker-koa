class ParamException extends Error{
  constructor(msg='参数错误',code=400,errorCode=10000){
    super()
    this.msg=msg
    this.code=code
    this.errorCode=errorCode
  }
}
module.exports=ParamException