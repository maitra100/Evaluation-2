const joi = require('joi');

const companyIdSchema = joi.object({
  id: joi.string().guid().required(),
  ceoName: joi.string(),
  name: joi.string(),
});

const companySectorSchema = joi.object({
  sector: joi.string().required(),
});

const urlSchema = joi.object({
  urlLink: joi.string().uri().required(),
});

const companyValidator = (req, res, next) => {
  if (req.body.id !== undefined) {
    const { error } = companyIdSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: 'input not valid',
      });
    }
    next();
  } else if (req.body.sector !== undefined) {
    const { error } = companySectorSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: 'input not valid',
      });
    }
    next();
  } else {
    const { error } = urlSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: 'input not valid',
      });
    }
    next();
  }
};

module.exports = { companyValidator };
