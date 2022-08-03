import _ from "lodash";

export const initialPicker = (data = {}) =>
  _.pick(data, [
    "make",
    "model",
    "title",
    "color",
    "image",
    "registration",
    "engine_size",
    "previous_owners",
    "transmission",
    "description",
  ]);
export const featuresPicker = (data = {}) =>
  _.pick(data, [
    "vehicle_type",
    "body_style",
    "mileage",
    "numberOfCylinders",
    "fuel",
    "yearOfModel",
    "doors",
    "steering",
    "features",
  ]);
export const businessPicker = (data = {}) =>
  _.pick(data, [
    "price",
    "finance_month",
    "insurance_group",
    "months12_tax",
    "months6_tax",
  ]);
