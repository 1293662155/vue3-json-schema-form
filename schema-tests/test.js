const Ajv = require('ajv')

const schema = {
  type: 'string',
  minLength: 10,
}

const ajv = new Ajv()
// .addFormat 自定义formater
// .addKeyword 自定义关键字 { validate, compile, metaSchema， macro } metaSchema 定义关键字值的类型
const validate = ajv.compile(schema)
const valid = validate('Jokcy111111')

if (!valid) console.log(validate.errors)
