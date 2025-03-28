//Install & Initialise Express to create and run the web server
const express= require("express");
const app= express();

//The Following Functions will take two numbers (provided through REST API) and perform simple mathematical equasions
//Addition Function
const addition= (n1,n2) => {
    return n1+n2;
}

//Subtraction Function
const subtract= (n1, n2) => {
    return n1 - n2;
}

//Multiplication Function
const multiplication = (n1, n2) => {
    return n1 * n2;
}

//Division Function
const division = (n1, n2) => {
    return n1 / n2; 
}

//The following API Endpoints ingest two numbers through the REST API method. It checks for any errors, calls the corresponding function to complete the equation, then sends the output in a JSON response

//Addition Endpoint
app.get("/addition", (req,res)=>{
    try{
    const n1= parseFloat(req.query.n1);
    const n2=parseFloat(req.query.n2);
    if(isNaN(n1)) {
        throw new Error("Invalid Value: n1");
    }
    if(isNaN(n2)) {
        throw new Error("Invalid Value: n2");
    }
    
    const result = addition(n1,n2);
    res.status(200).json({statuscocde:200, data: result }); 
    } catch(error) { 
        console.error(error)
        res.status(500).json({statuscocde:500, msg: error.toString() })
      }
});

//Subtraction Endpoint
app.get("/subtract", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);

        if (isNaN(n1)) {
            throw new Error("Invalid Value: n1");
        }
        if (isNaN(n2)) {
            throw new Error("Invalid Value: n2");
        }

        const result = subtract(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

//Multiplication Endpoint
app.get("/multiplication", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);

        if (isNaN(n1)) {
            throw new Error("Invalid Value: n1");
        }
        if (isNaN(n2)) {
            throw new Error("Invalid Value: n2");
        }

        const result = multiplication(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

//Division Endpoint
app.get("/division", (req, res) => {
    try {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);

        if (isNaN(n1)) {
            throw new Error("Invalid Value: n1");
        }
        if (isNaN(n2)) {
            throw new Error("Invalid Value: n2");
        }

        const result = division(n1, n2);
        res.status(200).json({ statusCode: 200, data: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

//Starting the web server on port 3040 and logs message
const port=3040;
app.listen(port,()=> {
    console.log("HI, I am a calculator microservice and I am listening on port 3040" +port);
})