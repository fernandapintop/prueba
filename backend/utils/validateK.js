const validateK = function (k, n) {
  let isValid = false;
  let message = "";
  if (k === 0 && n === 0) {
    isValid = true;
  } else if (k > n) {
    message = "enter the position of the obstacle";
    isValid = false;
  } else if (k < n) {
    message = "incorrect number of positions";
    isValid = false;
  } else {
    isValid = true;
  }

  return [isValid, message];
};

module.exports = validateK;
