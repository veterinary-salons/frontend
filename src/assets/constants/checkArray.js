const checkArray = (arr) => {
  let one = 0;

  for (let i = 0; i < arr?.length; i += 1) {
    if (arr[i] === true) {
      one += 1;
    }
  }
  return one === arr?.length;
};

const checkErrorinput = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === true) {
      return true;
    }
  }
  return false;
};

export { checkErrorinput, checkArray };
