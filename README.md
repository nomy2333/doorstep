# doorstep
ReadMe
1.	how to run:
1)	frontend: open terminal in path ‘/doorstep/frontend’, input command “yarn start” to start frontend.It will run at “http://localhost:3000”
2)	Backend: open another terminal in path ‘/doorstep/backend’, input 
 Command “python3 manager.py runserver”. It will run at http://127.0.0.1:8000/
3)	In frontend page, it will show the functions as following:
a.	Main page and movers page will show the questions in frontend.
b.	Display page will show all the data in the database except the disabled ones.
c.	Thanks page will show the page when form submit successfully.
d.	All the questions are required when submit the form.
e.	Button “add experiments” will show “submitted successfully and add successfully” when the input data doesn’t exist in whole  database, and the button will show  “input will already exist and active” when the input data existed in the database.
f.	 Button “default experiment” will show  status 404 and message “input not exist” when input data not in the database, and the button will show “submitted successfully and disable successfully” when the input data is in the database, and the status of ‘disable’ will change to 1, which can not be seen in display page
2.	Data framework:
Experiment={‘_id’: 6239c6f71e19cf7e93e7a441,
‘name’:"Michael",
‘email’:mcich@gamail.com,
‘phone’:"12345678",
‘disable’:"0"

}
3.	Tech stack: React, React hook, Django, Python, Pymongo, MongoDB atlas.
 

 

