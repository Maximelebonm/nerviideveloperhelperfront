export const motsClefHelper = (item) => {
  if (item != null) {
    const splitedItem = item.split("/");
    let tab = [];
    splitedItem.forEach((el) => {
      tab.push("#" + el + " ");
    });
    const tabreturn = tab.slice(0, 3);
    return tabreturn;
  }
};
