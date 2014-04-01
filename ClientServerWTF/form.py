from flask.ext.wtf import Form
#from wtforms import TextField, PasswordField, BooleanField, RadioField
from wtforms.fields import TextField, PasswordField, BooleanField, RadioField
from wtforms.validators import Required, Length

class SignupForm(Form):
    email = TextField('email', validators = [Required()])
    password = PasswordField('password', validators = [Required()])
    firstname = TextField('firstname')
    lastname = TextField('lastname')
    city = TextField('city')
    state = TextField('state')
    zipcode = TextField('zipcode', validators = [Length(min=5,max=5)])
    gender = RadioField('gender', choices=[('male','Male'), ('female','Female')])
    signin_remember = BooleanField('signin_remember', default = False)

