const validateUserAuth = (req,res,next) => {
    
    if(!req.email || !req.password){
        res.status(400).json({
            success: false,
            data: {},
            message: "Something went wrong",
            err : "Email or password is missing"
        })
    }
    next();
}

module.exports = {
    validateUserAuth
}