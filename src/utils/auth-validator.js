const { z } = require("zod");

const signupSchema = z.object({
  email: z.string().min(3).max(20).email().trim(),
  password: z.string().min(3).max(20),
  firstName: z.string().min(3).max(20).trim(),
  secondName: z.string().min(3).max(20).trim(),
});

module.exports = signupSchema;
