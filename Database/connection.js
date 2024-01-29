import pg from 'pg-promise'
const pgp = pg()

const connectionstring = `postgresql://postgres:P@quito951@localhost:5432/api_spells`; 

const db = pgp(connectionstring);

db.connect() //connecting, se espera a que termine
    .then( ()=>{
        console.log("Connection SUCCESS");
    } ) //es como if o un try/catch. si funciona, se hace lo que queremos, sino, da el error.
    .catch( (err)=>{
        console.log(`Connection Error :c ${err}`)
    })

export { db }