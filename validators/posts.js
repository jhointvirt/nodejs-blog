const Joi = require('@hapi/joi');
const obj = {};

const schema = Joi.object().keys({
  title: Joi.string().min(3).max(30).required(),
  description: Joi.string().min(10),
  content: Joi.string().min(10).required()
});

obj.create = (req, res, next) => {
  const result = schema.validate(req.body);

  if(result && result.error){
    return res.status(400).json(result.error.message);
  }
  return next();
}
module.exports = obj;