import CountTypes from "./count.types";

export const updateValue = (updateType) => ({
    type: CountTypes.UPDATE_VALUE, 
    payload: updateType

});

