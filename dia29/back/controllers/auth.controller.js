// Comprobar claves
const db_user = results[0];

console.log(db_user.password, password);

const isPasswordValid = bcrypt.compareSync(password, db_user.password);

if(!isPasswordValid){
    responseAPI.msg="Clave incorrecta";
    responseAPI.status="error";
    res.status(400).send(responseAPI)
} else {
    responseAPI.msg="Error al registrar usuario";
    responseAPI.status="error";
    res.status(400).send(responseAPI);
    return;
}

// const now = new Date(); // FECHA ACTUAL !
const now = new Date().toISOString().slice(0, 19).replace('T', ' ');

// convierte mi clave...
const encryptedPassword = bcrypt.hashSync(password, 10);
console.log(encryptedPassword);

const sqlQuery= `INSERT INTO usuarios (user, password, updated_at, created_at) 
        VALUES ('${user}', '${encryptedPassword}', '${now_date}', )`
        const [result, fields] = await my 