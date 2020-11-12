from flask import Flask,Response,request,render_template,url_for,session,redirect,make_response
import pymongo
from pymongo import MongoClient
import json
from bson.objectid import ObjectId
import bcrypt
import pandas

app = Flask(__name__)

mongo = MongoClient(host="test_mongodb",port=27017,username='root',password='pass',authSource='admin')
db = mongo["image_db"]

###################################


@app.route('/')
def index():
    if 'username' in session :
        return render_template('search.html')

    return render_template('index.html')


@app.route('/login', methods=['POST'])
def login():
    users = db.users
    login_user = users.find_one({'name' : request.form['username']})
    if login_user :
        if request.form['pass'] == login_user['password'] :
            session['username'] = request.form['username']
            return redirect(url_for('index'))

    return 'Invalid username/password combination'

@app.route('/register',methods = ['POST','GET'])
def register():
    if request.method == 'POST':
        users = db.users
        existing_user = users.find_one({'name' : request.form['username']})
        if existing_user is None:
            #hashpass = bcrypt.hashpw(request.form['pass'].encode('utf-8'),bcrypt.gensalt())
            users.insert({'name' : request.form['username'],'password' : request.form['pass']})
            session['username'] = request.form['username']
            return redirect(url_for('index'))

        return 'That username already exists!'

    return render_template('register.html')

@app.route('/logout')
def logout():
    if 'username' in session:
        del session['username']
        return redirect(url_for('index'))
    return redirect(url_for('index'))

@app.route('/search',methods = ['POST'])
def search():
    mydict = dict()
    image_search = db.imagemetadata
    myquery = { request.form['feature'] : request.form['value']}
    #myquery = { "Flash" : {"$gt" : "15" }}
    dataimage = list(image_search.find(myquery))
    length_list = len(dataimage)
    print(length_list)
    for doc in dataimage:
        del doc["_id"]

    ele=0
    for x in dataimage:
        if ele!=length_list:
            mydict.setdefault(ele,[]).append(x)
            ele=ele+1


    return mydict

@app.route('/results')
def info():
    return render_template('info.html')

if __name__ == "__main__" :
    app.secret_key = 'mysecret'
    app.run(host='0.0.0.0',port=5000)
