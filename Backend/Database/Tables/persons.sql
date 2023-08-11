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
 select * from Persons

 drop TABLE Persons