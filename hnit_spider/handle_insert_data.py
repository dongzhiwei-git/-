from hnit_spider.create_hnit_table import Hnittable, Session


class HandleHnitData(object):
    def __init__(self):
        # 实例化session信息
        self.mysql_session = Session()
        # self.date = time.strftime("%Y-%m-%d",time.localtime())
        self.date = '2019-06-24'

    def query_boySum(self):
        # 查询男生数量
        result = self.mysql_session.query(Hnittable.boySum).all()
        boySum = result[0][0]
        print(boySum)
        return boySum

    # 查询女生数量
    def query_girlSum(self):
        result = self.mysql_session.query(Hnittable.girlSum).all()
        girlSum = result[0][0]
        print("girlsum", girlSum)
        return girlSum

    # 模块一
    def query_echart_1(self):
        echart_1 = []
        topic1 = self.mysql_session.query(Hnittable.topic1Sum).all()[0][0]
        topic2 = self.mysql_session.query(Hnittable.topic2Sum).all()[0][0]
        topic3 = self.mysql_session.query(Hnittable.topic3Sum).all()[0][0]
        topic4 = self.mysql_session.query(Hnittable.topic4Sum).all()[0][0]
        topic5 = self.mysql_session.query(Hnittable.topic5Sum).all()[0][0]
        echart_1.extend([topic1, topic2, topic3, topic4, topic5])

        return echart_1

    # 模块二
    def query_echart_2(self):
        echart_2 = []
        graduateStudySum = self.mysql_session.query(Hnittable.graduateStudySum).all()[0][0]
        upgradeSum = self.mysql_session.query(Hnittable.upgradedSum).all()[0][0]
        CEESum = self.mysql_session.query(Hnittable.CEESum).all()[0][0]
        echart_2.extend([graduateStudySum, upgradeSum, CEESum])
        return echart_2

    # 模块三
    def query_echart_31(self):
        echart_31 = []
        topic1Sum_2021 = self.mysql_session.query(Hnittable.topic1Sum_2021).all()[0][0]
        topic2Sum_2021 = self.mysql_session.query(Hnittable.topic2Sum_2021).all()[0][0]
        topic3Sum_2021 = self.mysql_session.query(Hnittable.topic3Sum_2021).all()[0][0]
        echart_31.extend([topic1Sum_2021, topic2Sum_2021, topic3Sum_2021])
        print(echart_31)
        return echart_31

    def query_echart_32(self):
        echart_32 = []
        topic1Sum_2020 = self.mysql_session.query(Hnittable.topic1Sum_2020).all()[0][0]
        topic2Sum_2020 = self.mysql_session.query(Hnittable.topic2Sum_2020).all()[0][0]
        topic3Sum_2020 = self.mysql_session.query(Hnittable.topic3Sum_2020).all()[0][0]
        echart_32.extend([topic1Sum_2020, topic2Sum_2020, topic3Sum_2020])
        print(echart_32)
        return echart_32

    def query_echart_33(self):
        echart_33 = []
        topic1Sum_2019 = self.mysql_session.query(Hnittable.topic1Sum_2019).all()[0][0]
        topic2Sum_2019 = self.mysql_session.query(Hnittable.topic2Sum_2019).all()[0][0]
        topic3Sum_2019 = self.mysql_session.query(Hnittable.topic3Sum_2019).all()[0][0]
        echart_33.extend([topic1Sum_2019, topic2Sum_2019, topic3Sum_2019])
        print(echart_33)
        return echart_33

    # 模块四
    def query_echart_4(self):
        echart_4 = []
        emotions1Sum = self.mysql_session.query(Hnittable.emotions1Sum).all()[0][0]
        emotions2Sum = self.mysql_session.query(Hnittable.emotions2Sum).all()[0][0]
        emotions3Sum = self.mysql_session.query(Hnittable.emotions3Sum).all()[0][0]
        emotions4Sum = self.mysql_session.query(Hnittable.emotions4Sum).all()[0][0]
        emotions5Sum = self.mysql_session.query(Hnittable.emotions5Sum).all()[0][0]
        emotions6Sum = self.mysql_session.query(Hnittable.emotions6Sum).all()[0][0]
        emotions7Sum = self.mysql_session.query(Hnittable.emotions7Sum).all()[0][0]
        emotions8Sum = self.mysql_session.query(Hnittable.emotions8Sum).all()[0][0]
        emotions9Sum = self.mysql_session.query(Hnittable.emotions9Sum).all()[0][0]

        non_emotions1Sum = self.mysql_session.query(Hnittable.non_emotions1Sum).all()[0][0]
        non_emotions2Sum = self.mysql_session.query(Hnittable.non_emotions2Sum).all()[0][0]
        non_emotions3Sum = self.mysql_session.query(Hnittable.non_emotions3Sum).all()[0][0]
        non_emotions4Sum = self.mysql_session.query(Hnittable.non_emotions4Sum).all()[0][0]
        non_emotions5Sum = self.mysql_session.query(Hnittable.non_emotions5Sum).all()[0][0]
        non_emotions6Sum = self.mysql_session.query(Hnittable.non_emotions6Sum).all()[0][0]
        non_emotions7Sum = self.mysql_session.query(Hnittable.non_emotions7Sum).all()[0][0]
        non_emotions8Sum = self.mysql_session.query(Hnittable.non_emotions8Sum).all()[0][0]
        non_emotions9Sum = self.mysql_session.query(Hnittable.non_emotions9Sum).all()[0][0]
        echart_4.extend([[emotions1Sum, emotions2Sum, emotions3Sum, emotions4Sum, emotions5Sum, emotions6Sum,
                          emotions7Sum, emotions8Sum, emotions9Sum], [non_emotions1Sum, non_emotions2Sum,
                          non_emotions3Sum, non_emotions4Sum, non_emotions5Sum, non_emotions6Sum, non_emotions7Sum,
                          non_emotions8Sum, non_emotions9Sum]])
        return echart_4

    # 模块五
    def query_echart_5(self):
        echart_5 = []
        emotionsSum_2021 = self.mysql_session.query(Hnittable.emotionsSum_2021).all()[0][0]
        emotionsSum_2020 = self.mysql_session.query(Hnittable.emotionsSum_2020).all()[0][0]
        emotionsSum_2019 = self.mysql_session.query(Hnittable.emotionsSum_2019).all()[0][0]
        emotionsSum_2018 = self.mysql_session.query(Hnittable.emotionsSum_2018).all()[0][0]
        emotionsSum_2017 = self.mysql_session.query(Hnittable.emotionsSum_2017).all()[0][0]
        echart_5.extend([emotionsSum_2021, emotionsSum_2020, emotionsSum_2019, emotionsSum_2018, emotionsSum_2017])
        print(echart_5)
        return echart_5

    def query_hot_world(self):
        hot_world = []
        hotWorld1Sum = self.mysql_session.query(Hnittable.hotWord1Sum).all()[0][0]
        hotWorld2Sum = self.mysql_session.query(Hnittable.hotWord21Sum).all()[0][0]
        hotWorld3Sum = self.mysql_session.query(Hnittable.hotWord3Sum).all()[0][0]
        hotWorld4Sum = self.mysql_session.query(Hnittable.hotWord4Sum).all()[0][0]
        hotWorld5Sum = self.mysql_session.query(Hnittable.hotWord5Sum).all()[0][0]
        hotWorld6Sum = self.mysql_session.query(Hnittable.hotWord6Sum).all()[0][0]
        hotWorld7Sum = self.mysql_session.query(Hnittable.hotWord7Sum).all()[0][0]
        hotWorld8Sum = self.mysql_session.query(Hnittable.hotWord8Sum).all()[0][0]
        hotWorld9Sum = self.mysql_session.query(Hnittable.hotWord9Sum).all()[0][0]
        hotWorld10Sum = self.mysql_session.query(Hnittable.hotWord10Sum).all()[0][0]
        hotWorld11Sum = self.mysql_session.query(Hnittable.hotWord11Sum).all()[0][0]
        hotWorld12Sum = self.mysql_session.query(Hnittable.hotWord12Sum).all()[0][0]
        hotWorld13Sum = self.mysql_session.query(Hnittable.hotWord13Sum).all()[0][0]
        hotWorld14Sum = self.mysql_session.query(Hnittable.hotWord14Sum).all()[0][0]
        hotWorld15Sum = self.mysql_session.query(Hnittable.hotWord15Sum).all()[0][0]
        hotWorld16Sum = self.mysql_session.query(Hnittable.hotWord16Sum).all()[0][0]
        hotWorld17Sum = self.mysql_session.query(Hnittable.hotWord17Sum).all()[0][0]
        hotWorld18Sum = self.mysql_session.query(Hnittable.hotWord18Sum).all()[0][0]
        hotWorld19Sum = self.mysql_session.query(Hnittable.hotWord19Sum).all()[0][0]
        hotWorld20Sum = self.mysql_session.query(Hnittable.hotWord20Sum).all()[0][0]
        hotWorld21Sum = self.mysql_session.query(Hnittable.hotWord21Sum).all()[0][0]
        hotWorld22Sum = self.mysql_session.query(Hnittable.hotWord22Sum).all()[0][0]
        hotWorld23Sum = self.mysql_session.query(Hnittable.hotWord23Sum).all()[0][0]
        hotWorld24Sum = self.mysql_session.query(Hnittable.hotWord24Sum).all()[0][0]
        hotWorld25Sum = self.mysql_session.query(Hnittable.hotWord25Sum).all()[0][0]
        # hotWorld26Sum = self.mysql_session.query(Hnittable.hotWord26Sum).all()[0][0]
        hotWorld27Sum = self.mysql_session.query(Hnittable.hotWord27Sum).all()[0][0]
        hotWorld28Sum = self.mysql_session.query(Hnittable.hotWord28Sum).all()[0][0]
        hotWorld29Sum = self.mysql_session.query(Hnittable.hotWord29Sum).all()[0][0]
        hotWorld30Sum = self.mysql_session.query(Hnittable.hotWord30Sum).all()[0][0]
        hotWorld31Sum = self.mysql_session.query(Hnittable.hotWord31Sum).all()[0][0]
        hotWorld32Sum = self.mysql_session.query(Hnittable.hotWord32Sum).all()[0][0]
        hotWorld33Sum = self.mysql_session.query(Hnittable.hotWord33Sum).all()[0][0]
        hotWorld34Sum = self.mysql_session.query(Hnittable.hotWord34Sum).all()[0][0]
        # hotWorld35Sum = self.mysql_session.query(Hnittable.hotWord35Sum).all()[0][0]
        hot_world.extend([hotWorld1Sum, hotWorld2Sum, hotWorld3Sum, hotWorld4Sum, hotWorld5Sum, hotWorld6Sum,
                          hotWorld7Sum, hotWorld8Sum, hotWorld9Sum, hotWorld10Sum, hotWorld11Sum, hotWorld12Sum,
                          hotWorld13Sum, hotWorld14Sum, hotWorld15Sum, hotWorld16Sum, hotWorld17Sum, hotWorld18Sum,
                          hotWorld19Sum, hotWorld20Sum, hotWorld21Sum, hotWorld22Sum, hotWorld23Sum, hotWorld24Sum, hotWorld25Sum,
                          hotWorld27Sum, hotWorld28Sum, hotWorld29Sum, hotWorld30Sum, hotWorld31Sum, hotWorld32Sum,
                          hotWorld33Sum, hotWorld34Sum,])

        return hot_world

hnit_mysql = HandleHnitData()
# hnit_mysql.query_echart_1()
