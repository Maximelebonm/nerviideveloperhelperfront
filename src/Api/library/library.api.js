import { InitRequest } from "../InitRequest";

export const getOneLibary = async (id) => {
  const fetchOneLibrary = await (
    await fetch(`${InitRequest()}/library/${id}`)
  ).json();

  return fetchOneLibrary;
};

export const getLibraryByCategory = async (Id_Category) => {
  const fetchLibraryByCategory = await (
    await fetch(`${InitRequest()}/library/filter/${Id_Category}`)
  ).json();

  return fetchLibraryByCategory;
};
