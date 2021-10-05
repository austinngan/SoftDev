from flask import Flask
import occupations
app = Flask(__name__)

@app.route("/")

def h():
    return "<h1> Fabulous Frogs: David Chong, Wen Hao Dong, and Austin Ngan (with Gerald) </h1> Random Occupation: "+occupations.weighted_selection()+"<br/><br/>"+main()

def main():
    return "Occupations: <br/>"+occupations.printJobs()


if __name__ == "__main__":
    app.debug = True
    app.run()
