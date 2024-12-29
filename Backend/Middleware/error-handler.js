// This is the error handling function which activates whenever an internal error may occur

const errorHandlermiddleware = async(err,req,res,next) => {
  console.log(err)
  res.status(500).json({msg: "Something went wrong , please try again. "})

}

export default errorHandlermiddleware
