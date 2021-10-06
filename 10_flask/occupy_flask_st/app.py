# Fabulous Frogs: David Chong (with Fluff), Wen Hao Dong (with Jal Hordan), and Austin Ngan (with Gerald)
# SoftDev
# K10: Putting Little Pieces Together
# 2021-10-05

from flask import Flask
import occupations
app = Flask(__name__)

@app.route("/")

def h():
    return ("<h1> David Chong (with Fluff), Wen Hao Dong (with Jal Hordan), and Austin Ngan (with Gerald) </h1> Random Occupation: "
            +occupations.weighted_selection()+
            "<br/><br/>"+
            "Occupations: <br/>"+occupations.printJobs())

if __name__ == "__main__":
    app.debug = True
    app.run()
