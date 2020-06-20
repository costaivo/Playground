from flask import Flask
from datetime import datetime

app = Flask(__name__)


@app.route("/")
def welcome():
    return "Welcome to my Flash Card Application"


@app.route("/goa")
def welcome2():
    return "GOA:Welcome to my Flash Card Application"


count = 0


@app.route("/date")
def date():
    global count
    count +=1
    return "The page was served at :" + str(datetime.now())+"\n the page was called "+str(count)+" times."
