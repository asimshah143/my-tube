const asyncHandler = (reuestHandler) => {
  return (req, res, next) => {
    Promise.resolve(reuestHandler(req, res, next)).catch((err) => next(err));
  };
};

// //both code are same
// const asyncHandler = (fn) => async(req, res, next) => {
// try {
//     await fn(req,res,next)
// } catch (error) {
//     res.status(error.code || 500).json({
//         success: false,
//         message: error.message
//     })
// }

// }
