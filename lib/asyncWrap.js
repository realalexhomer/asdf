const wrap = (asyncHandler) => {
  return (req, res, next) => {
    asyncHandler(req, res, next)
      .catch(next);
  };
};

module.exports = wrap;
