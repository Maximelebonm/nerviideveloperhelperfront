import { InitRequest } from "../InitRequest";

export const getAllCategoryLibrary = async () => {
  const fetchAllCategoryLibrary = await (
    await fetch(`${InitRequest()}/libraryCategory`)
  ).json();
  return fetchAllCategoryLibrary;
};