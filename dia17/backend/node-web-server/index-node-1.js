const http = require("http");
const cowsay = require("cowsay")


/**
 *  URL de Node
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


const server = http.createServer( (req, res) => {
    res.statusCode=200;
    res.setHeader("Content-Type", "text/html");

    let isRoute=false

    console.log(req.url)

    res.write("<html>");

if(req.url == "/"){
    let isRoute=false
    
    res.write("<head><tittle>Mi servidor node</tittle></head>")
    res.write("<head><tittle>Hola desde mi servidor</tittle></head>")
  
};

if(!isRoute){
    
    res.write("<head><tittle>No encontrada</tittle></head>")
    res.write("<body><h1>eRROR 404 NOT FOUND</h1></body>")
    
};
    res.write("</html>")
    res.end()
    
})
server.listen(8080, () => {
    
    console.log("server corriendo en puerto 8080")

})