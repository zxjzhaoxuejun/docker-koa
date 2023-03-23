class XssExceptions extends Error{
  constructor(msg='xss解析参数错误',code=400,errorCode=10000){
    super()
    this.msg=msg
    this.code=code
    this.errorCode=errorCode
  }
}
module.exports=XssExceptions