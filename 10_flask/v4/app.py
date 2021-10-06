# Fabulous Frogs: David Chong (with Fluff), Wen Hao Dong (with Jal Hordan), and Austin Ngan (with Gerald)
# SoftDev
# 2021-10-04

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    print("the __name__ of this module is... ")
    print(__name__)
    return "No hablo queso!"

if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()

# If the file is run directly, the server will start with debug mode
# active, and when debug mode is active, changing the code will
# refresh the page in the browser.
# If the file is imported, however, the server will not be run.
#
# Editing this file will automatically update the contents of
# the page, but you still need to manually refresh it in the browser
# to see the changes.
