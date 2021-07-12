# Using MongoDB

1. Create a database named 'my_first_db'.
2. Create student collection.
3. Each document you insert in this collection must have the following format:({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})
4. Create 5 students with the appropriate information.
5. Get all students.
6. Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
7. Get all students whose lucky number is greater than 3.
8. Get all students whose lucky number is less than or equal to 10.
9. Get all students whose lucky number is between 1 and 9 (inclusive).
10. Add a field to each student collection called 'interests' which is an ARRAY. It must contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
11. Add some unique interests for each particular student in each of their interest arrays.
12. Add interest 'taxes' to someone's interest matrix.
13. Delete the 'tax' interests you just added.
14. Remove all students who are from California.
15. Remove a student by name.
16. Remove a student whose lucky number is greater than 5 (ONLY ONE).
17. Add a field to each student collection called 'number_of_belts' and set it to 0.
18. Increment this field by 1 for all students in Washington (Seattle Dojo).
19 Rename the field 'number_of_belts' to 'belts_earned'.
20. Removes the 'lucky_number' field.
21. Adds an 'updated_on' field and sets the value as the current date.
