const maximunValueOfSubString = require("../utils/maximunValueOfSubString");

function isStringofLetters(cadena) {
  return /^[a-zA-Z]+$/.test(cadena);
}

exports.getValuesOfSubString = function (req, res) {
  const t = req.body.t;

  if (isStringofLetters(t)) {
    try {
      const answer = maximunValueOfSubString(t);
      res.status(200).json({
        status: "success",
        data: answer,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(400).json({ error: "only allow letters" });
  }
};
