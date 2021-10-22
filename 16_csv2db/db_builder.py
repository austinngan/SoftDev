#Team Berd: Austin Ngan (Gerald), Thomas Yu (Perry), Mark Zhu (Bob the Third Jr)
#SoftDev
#K16: All About Database
#2021-10-21

import sqlite3   #enable control of an sqlite database
import csv       #facilitate CSV I/O


DB_FILE="discobandit.db"

db = sqlite3.connect(DB_FILE) #open if file exists, otherwise create
c = db.cursor()               #facilitate db ops -- you will use cursor to trigger db events

#==========================================================


# < < < INSERT YOUR TEAM'S POPULATE-THE-DB CODE HERE > > >
command = "CREATE TABLE roster(name TEXT, age INTEGER, id INTEGER)" 
#c.execute(command)

with open("students.csv", newline='') as csvfile:
    studentReader = csv.DictReader(csvfile)
    for row in studentReader:
    	
    	#age=row['age']
    	#identification=row['id']
	#print(name)
	#print(age)
	#print(identification)
	#addData = "INSERT INTO roster VALUES (name, age, identification);"
        c.execute("INSERT INTO roster VALUES("+"'"+row['name']+"'"+", "+row['age']+", "+row['id']+")")

#==========================================================

db.commit() #save changes
db.close()  #close database



