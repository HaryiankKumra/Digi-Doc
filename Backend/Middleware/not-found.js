// This is the error handling function which activates whenever the client is trying to access an unknown / forbidden routes


const notfoundmiddleware = (req,res) => {
    res.status(404).json({msg:" Route does not exist"})
}

export default notfoundmiddleware;