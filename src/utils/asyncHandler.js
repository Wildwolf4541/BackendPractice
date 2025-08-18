const asyncHandler = (fn) =>async (req,resp,next) => {
    try {
        await fn(req, resp, next);
    } catch (error) {
        req.status(error.code || 500).json({
            success: false,
            message: error.message || "Server Error",
        });
    }
}

export default asyncHandler;

// const asyncHandler = (requestHandler) =>{
//     (req,resp,next)=>{
//         Promise.resolve(requestHandler(req,resp,next)).catch((err)=>next(err))
//     }
// }