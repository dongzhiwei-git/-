# from flask import Flask, render_template, request, redirect
from wtforms import Form
# from wtforms.fields import core
# from wtforms.fields import html5
from wtforms.fields import simple
from wtforms import validators
from wtforms import widgets



class LoginForm(Form):
    user = simple.StringField(
        validators=[
            validators.DataRequired(message='用户名不能为空.'),
            # validators.Length(min=6, max=18, message='用户名长度必须大于%(min)d且小于%(max)d')
        ],
        widget=widgets.TextInput(),
        render_kw={'class': 'form-control'}

    )
    pwd = simple.PasswordField(
        validators=[
            validators.DataRequired(message='密码不能为空.'),
            # validators.Length(min=8, message='用户名长度必须大于%(min)d'),
            # validators.Regexp(regex="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}",
            #                   message='密码至少8个字符，至少1个大写字母，1个小写字母，1个数字和1个特殊字符')

        ],
        widget=widgets.PasswordInput(),
        render_kw={'class': 'form-control'}
    )