import { InitRequest } from "../InitRequest";

export const getStepByLibrary = async (IdLibrary) => {
  const fetchStep = await (
    await fetch(`${InitRequest()}/step/${IdLibrary}`)
  ).json();

  return fetchStep;
};
