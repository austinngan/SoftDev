from flask import Flask
import occupations
app = Flask(__name__)

@app.route("/")
def h():
    return occupations.weighted_selection()

if __name__ == "__main__":
    app.debug = True
    app.run()
