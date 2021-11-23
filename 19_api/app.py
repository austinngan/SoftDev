#*V-***: Liesel Wong (King Hagrid), Austin Ngan (Gerald)
#SoftDev
#K19 -- A RESTful Journey Skyward
#2021-11-22


from flask import Flask, render_template, request, urllib

app = Flask(__name__)

@app.route("/")
def test():
	data=urllib.request("https://api.nasa.gov/planetary/apod?api_key=A6sYUc7R6zCWzLWQTrcuf2Kw2QclDsBJRr3TsGbg")

	print(data)
	#return render_template( 'main.html')


if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True
    app.run()
