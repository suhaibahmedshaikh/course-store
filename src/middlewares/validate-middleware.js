const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.safeParse(req.body);

    if (!parseBody.success) {
      return res.status(400).json({
        msg: "Validation failed",
        errors: parseBody.error.errors,
      });
    }
    req.body = parseBody.data;
    next();
  } catch (error) {
    console.error("Validation middleware error:", error);
    return res.status(500).json({
      msg: "Something went wrong in validation.",
      error: error.message,
    });
  }
};

module.exports = validate;
