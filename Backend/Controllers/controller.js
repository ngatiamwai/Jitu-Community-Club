const {v4}=require('uuid')
const mssql=require('mssql')
const express = require('express')

const { sqlConfig } = require('../Config/config')
const { PersonRegisterValidator } = require('../Validators/PersonValidator')



// USER REGISTRATION Controller
module.exports = registerPerson=async(req,res)=>{
    try {
        createTablePerson()
        const Id = v4()
        const {personName,personEmail,personCohort,personPassword}=req.body
        // const {error}=PersonRegisterValidator.validate(req.body)
        if(error){
            return res.status(422).json(error.details[0].message)
        }
        // const salt = await bcrypt.genSalt(10)
        // const hashedPassword=await bcrypt.hash(PersonPassword, salt)
        const pool = await mssql.connect(sqlConfig)
        if(pool.connected){
            const result = (await pool.request()
            .input('PersonId',Id)
            .input('PersonName',personName)
            .input('PersonEmail',personEmail)
            .input('PersonCohort',personCohort)
            .input('PersonPassword',personPassword)
            .execute('registerProcedure'))
            if(result.rowsAffected[0]==1){
                return res.status(200).json({message:"Person Registered Succesful"})
            }else{
                return res.status(400).json({message:"Error Registering Person"})
            }
        }else{
            return res.json({message: 'pool not connected'})
        }   
    } catch (error) {
       
       return res.json({Error: error.message})
    }
}
