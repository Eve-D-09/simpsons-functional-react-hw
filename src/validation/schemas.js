import joi from "joi";

export const login = {
  email: joi
    .string()
    .required()
    .email({ tlds: { allows: false } }),
  password: joi.string().required().min(8).max(16),
};

export const register = {
  email: joi
    .string()
    .required()
    .email({ tlds: { allows: false } }),
  password: joi.string().required().min(8).max(16),
  userName: joi.string().required().min(8).max(16),
};


