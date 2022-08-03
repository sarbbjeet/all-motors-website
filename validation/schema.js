//switch Joi library between browser(client-side) v/s server side(require('joi'))
export default (browser = true) => {
  const Joi = browser ? require("joi-browser") : require("joi");
  return {
    initialSchema: {
      make: Joi.string().max(40).required(),
      model: Joi.string().required(),
      title: Joi.string().allow("", null).default(""),
      color: Joi.string().max(20).required(),
      engine_size: Joi.string().max(20).required(),
      transmission: Joi.string().max(30).required(),
      registration: Joi.string().max(30).required(),
      previous_owners: Joi.number().integer().required(),
      description: Joi.string().allow("", null).default(""),
    },
    featuresSchema: {
      vehicle_type: Joi.string().max(40).required(),
      body_style: Joi.string().max(40).required(),
      mileage: Joi.number().allow("", null).default(-1),
      numberOfCylinders: Joi.number().min(-1).allow("", null).default(-1),
      fuel: Joi.string().max(40).required(),
      yearOfModel: Joi.number().min(1950).required(),
      doors: Joi.number().min(1).max(10).required(),
      steering: Joi.string().max(40).required(),
      features: Joi.string().allow("", null).default(""),
    },
    businessSchema: {
      price: Joi.number().allow("", null).default(-1),
      finance_month: Joi.number().allow("", null).default(-1),
      insurance_group: Joi.number().allow("", null).default(-1),
      months12_tax: Joi.number().allow("", null).default(-1),
      months6_tax: Joi.number().allow("", null).default(-1),
    },
  };
};
