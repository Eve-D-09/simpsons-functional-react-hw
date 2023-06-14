import joi from "joi";
import { login, register } from "../validation/schemas";

export const validate = async ( payload, type ) => {

    let result;
    switch (type) {
        case "login":
        result = joi.object(login);
        break;

        case "register":
        result = joi.object(register);
        default:
            break;
    }
    

      try {
        const results = await result.validateAsync(payload, { abortEarly: false });
        // setErrors(null);
        return null;
    } catch (errors) {
        const errorsMod = {};
        errors.details.forEach((error) => {
            errorsMod[error.context.key] = error.message;
        });
        // setErrors(errorsMod);
        return errorsMod;
    }

}