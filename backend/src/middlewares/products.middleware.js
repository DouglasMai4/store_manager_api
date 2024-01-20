const nameVerify = (req, res, next) => {
  const { name } = req.body;

  if (name) {
    if (name.length >= 5) {
      next();
    } else {
      return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
    }
  }

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
};

module.exports = {
  nameVerify,
};
