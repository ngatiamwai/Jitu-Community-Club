CREATE
OR ALTER PROCEDURE registerpersonProc(
    @personId VARCHAR(100),
    @personName VARCHAR(50),
    @personEmail VARCHAR(50),
    @personCohort VARCHAR(50),
    @personPassword VARCHAR(MAX)
) AS BEGIN
INSERT INTO
    personTable(personId, personName, personEmail, personCohort, personPassword)
VALUES
    (
        @personId,
        @personName,
        @personEmail,
        @personCohort,
        @personPassword
    )
END;