from flask.ext.wtf import Form
from wtforms.fields import TextField, PasswordField, BooleanField, RadioField
from wtforms.validators import Email, Required, Optional, Length

class SignupForm(Form):
    email = TextField('email', validators = [Required('please enter an email address'), Email(u'Please enter a valid email address')])
    password = PasswordField('password', validators = [Required(u'Please enter a password')])
    firstname = TextField('firstname', validators = [Required(u'please enter your first name')])
    lastname = TextField('lastname')
    city = TextField('city')
    state = TextField('state')
    zipcode = TextField('zipcode', validators = [Length(min=5,max=5)])
    #gender = RadioField('gender', choices=[('male','Male'), ('female','Female')], validators = [Optional()])
    gender = RadioField('gender', choices=[('male','Male'), ('female','Female')])
    signin_remember = BooleanField('signin_remember', default = False)

