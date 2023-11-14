import { TURN_OFF, TURN_ON } from "../constant/spinnerConst";

export const turOnLoadingAction = () => ({
    type: TURN_ON,
});
export const turOffLoadingAction = () => ({
    type: TURN_OFF,
});
