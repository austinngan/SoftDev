# Fabulous Frogs: David Chong, Wen Hao Dong, and Austin Ngan (with Gerald)
# SoftDev
# 2021-10-04

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    return "No hablo queso!"

app.run()

# It'll work the same as v0, just without __main__ being printed to the terminal.
# Worked as predicted.
