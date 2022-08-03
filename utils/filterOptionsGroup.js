export const filterObj = [
  { key: "make", value: null },
  { key: "model", value: null },
  { key: "color", value: null },
  { key: "fuel", value: null },
  { key: "doors", value: null },
];

const applyFilter = (_car, _key) => {
  filterObj.forEach(({ key, value }) => {
    if (
      _key != "make" &&
      _car &&
      value != null &&
      key != _key &&
      _car[key] != value
    )
      _car = null;
  });
  return _car;
};
export const fCars = (cars) => {
  let cObj = {};

  filterObj.forEach(({ key }, i) => {
    cars?.forEach((car) => {
      //apply filter
      car = applyFilter(car, key);
      if (car) {
        cObj[key] = {
          ...cObj[key],
          [`${car[key]}`]:
            cObj?.[key]?.[car[key]] != undefined
              ? cObj?.[key]?.[car[key]] + 1
              : 1,
        };
      }
    });
  });
  return cObj;
};

export const dropEvent = ({ name, value }, usedCars) => {
  value = value.startsWith(`Any ${name}`) ? null : value.split("(")[0].trim();
  //   .match(/[a-zA-Z]+/g) //get only string
  //   .reduce((prev, current) => `${prev} ${current}`, initial)
  //   .trim();
  //reset filterObj other key's values
  filterObj = filterObj.map((ff) => {
    if (name == "make") {
      if (ff["key"] == "make") return { ...ff, value };
      return { ...ff, value: null };
    } else return ff["key"] == name ? { ...ff, value } : ff;
  });
  return fCars(usedCars);
};
