/**
 * catch error and handle error
 */
const ParamException = require('../exceptions/paramException')
const XssException = require('../exceptions/xssExceptions')

const catchError = async (ctx, next) => {
  try {
    // 一定要添加await
    await next()
  } catch (error) {
  // 错误返回客户端
  // 自定义异常
    if (error instanceof ParamException) {
      ctx.body = error
      return
    }
    if (error instanceof XssException) {
      ctx.body = error
      return
    }
    // 默认处理
    ctx.body = {
      code: 400,
      errorCode: 10000,
      msg: '服务内部错误'
    }
  }
}

module.exports = catchError

