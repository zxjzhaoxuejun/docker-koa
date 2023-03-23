const { query } = require('../db/mysql')
const ParamException = require('../exceptions/paramException')

const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  const sql = 'select * from kcb.tb_admin'
  const res= await query(sql)
  ctx.body=res
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
