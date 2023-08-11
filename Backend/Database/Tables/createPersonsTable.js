const mssql=require('mssql')
const {sqlConfig}=require('../../Config/config')

const createTablePerson=async(req,res)=>{
    try {
        const table=`
        BEGIN 
TRY 
CREATE TABLE Persons(
    Id VARCHAR(100) PRIMARY KEY,
    personName VARCHAR(100)  NOT NULL,
    personEmail VARCHAR(100) UNIQUE NOT NULL,
    personCohort VARCHAR(100)  NOT NULL,
    personPassword VARCHAR(MAX) NOT NULL,
)
END TRY
BEGIN 
CATCH 
THROW 50001,'Table has already been created',1
END 
CATCH  
        `
        const pool=await mssql.connect(sqlConfig)
await pool.query(table,(err)=>{
    if(err instanceof mssql.RequestError){
        console.log({Error:err.message})
    }else{
        console.log('Person Table Created as success')
    }
})
    } catch (error) {
        return  res.json({Error:error})
    }
}
module.exports={
   createTablePerson, 
}