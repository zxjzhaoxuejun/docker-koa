const xss = require('xss') // 需要 npm install xss -S
const XssException = require('../exceptions/xssExceptions')

const xssHandler = async (ctx, next) => {
  try {
    const body = ctx.request.body
    for (const key in body) {
      if (typeof body[key] === 'string') {
        body[key] = xss(body[key])
      }
    }
    // 一定要添加await
    await next()
  } catch (error) {
    // console.error(error)
    throw (new XssException())
  }
}

module.exports = xssHandler

