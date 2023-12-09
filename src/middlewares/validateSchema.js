const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    let errors = [];
    error.errors.map((error) => errors = [...errors, error.message]);
    res.status(400).json(errors)
  }
}


export default validateSchema;
