# Fabulous Frogs: David Chong (with Fluff), Wen Hao Dong (with Jal Hordan), and Austin Ngan (with Gerald)
# SoftDev
# 2021-10-04

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    print("about to print __name__...")
    print(__name__)   #where will this go?
    return "No hablo queso!"

app.debug = True
app.run()

# The server will start in debug mode, as opposed to
# production mode (whatever debug mode means??)
#
# It said that debug mode was on, and it shows a
# debugging pin.
# For the most part, it functioned the same as before.
