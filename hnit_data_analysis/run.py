from flask import Flask, render_template, jsonify, request, redirect, session, g, url_for

from hnit_data_analysis.utils.sql import SQLHelper
from hnit_data_analysis.views.LoginForm import LoginForm
from hnit_spider.handle_insert_data import hnit_mysql

# 实例化flask
app = Flask(__name__)
app.secret_key = "123（）p"


# 注册路由

@app.route("/")
def index():
    # return "welcome!"
    return render_template("index.html")

@app.route("/admin")
def admin():
    if not g.user:
        return redirect(url_for("login"))
    return render_template("admin.html")


@app.before_request
def before_request():
    g.user = None
    if "user_info" in session:
        g.user = "qwe"


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        form = LoginForm()
        return render_template('login.html', form=form)
    print(3)
    form = LoginForm(formdata=request.form)
    obj = SQLHelper.fetch_one("select userId,user from users where user=%(user)s and pwd=%(pwd)s", form.data)
    print("obj:", obj)
    print(4)
    if not form.validate():
        print("密码错误")
        print('用户提交数据通过格式验证，提交的值为：', form.data)
        return render_template('login.html', form=form)

    print('用户提交数据通过格式验证，提交的值为：', form.data)
    obj = SQLHelper.fetch_one("select userId,user from users where user=%(user)s and pwd=%(pwd)s", form.data)
    if obj:
        print("密码正确")
        session.permanent = True
        session['user_info'] = {'userId': obj['userId'], 'user': obj['user']}
        g.user = obj['user']
        return redirect(url_for("admin"))
    else:
        return render_template('login.html', msg='用户名或密码错误！')
        print(form.errors)


@app.route("/get_echart_data")
def get_echart_data():
    info = {}
    # 男生总数
    info['boySum'] = hnit_mysql.query_boySum()
    # 女生总数
    info['girlSum'] = hnit_mysql.query_girlSum()
    info['echart_1'] = hnit_mysql.query_echart_1()
    info['echart_2'] = hnit_mysql.query_echart_2()
    info['echart_31'] = hnit_mysql.query_echart_31()
    info['echart_32'] = hnit_mysql.query_echart_32()
    info['echart_33'] = hnit_mysql.query_echart_33()
    info['echart_4']  = hnit_mysql.query_echart_4()
    info['echart_5'] = hnit_mysql.query_echart_5()
    info['hot_word'] = hnit_mysql.query_hot_world()
    print("qq",info['hot_word'])

    return jsonify(info)


@app.route("/index", methods=['GET', 'POST'])
def lagou():
    # 库内数据总量，今日抓取量
    # result = lagou_mysql.count_result()
    return render_template('index.html')


if __name__ == '__main__':
    # 启动flask
    app.run(debug=True, host="127.0.0.1", port=80)
