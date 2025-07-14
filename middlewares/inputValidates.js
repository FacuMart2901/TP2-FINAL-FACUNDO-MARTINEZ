const inputValidates = async (req, res, next) => {
    const { nombre } = req.body;

if(!nombre){
    res.status(400).send({ message: "Faltan datos" });
    return
}


    next();
}

export default inputValidates;
