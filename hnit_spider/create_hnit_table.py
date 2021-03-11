from sqlalchemy import create_engine, Integer
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column

# 创建数据库的连接
engine = create_engine("mysql+pymysql://root:root@127.0.0.1:3306/mysql?charset=utf8")
# 操作数据库，需要我们创建一个session
Session = sessionmaker(bind=engine)

# 声明一个基类
Base = declarative_base()


class Hnittable(Base):
    __tablename__ = "hnit_data"
    # id,设置为主键和自动增长
    id = Column(Integer, primary_key=True, autoincrement=True)
    # 模块一
    topic1Sum = Column(Integer, nullable=True)
    topic2Sum = Column(Integer, nullable=True)
    topic3Sum = Column(Integer, nullable=True)
    topic4Sum = Column(Integer, nullable=True)
    topic5Sum = Column(Integer, nullable=True)

    # 模块二（升学咨询）
    graduateStudySum = Column(Integer, nullable=True)
    upgradedSum = Column(Integer, nullable=True)
    CEESum = Column(Integer, nullable=True)

    # 模块三（近三年热词）
    topic1Sum_2021 = Column(Integer, nullable=True)
    topic2Sum_2021 = Column(Integer, nullable=True)
    topic3Sum_2021 = Column(Integer, nullable=True)
    topic1Sum_2020 = Column(Integer, nullable=True)
    topic2Sum_2020 = Column(Integer, nullable=True)
    topic3Sum_2020 = Column(Integer, nullable=True)
    topic1Sum_2019 = Column(Integer, nullable=True)
    topic2Sum_2019 = Column(Integer, nullable=True)
    topic3Sum_2019 = Column(Integer, nullable=True)

    # 模块四 （近九天情感分析）
    emotions1Sum = Column(Integer, nullable=True)
    emotions2Sum = Column(Integer, nullable=True)
    emotions3Sum = Column(Integer, nullable=True)
    emotions4Sum = Column(Integer, nullable=True)
    emotions5Sum = Column(Integer, nullable=True)
    emotions6Sum = Column(Integer, nullable=True)
    emotions7Sum = Column(Integer, nullable=True)
    emotions8Sum = Column(Integer, nullable=True)
    emotions9Sum = Column(Integer, nullable=True)

    non_emotions1Sum = Column(Integer, nullable=True)
    non_emotions2Sum = Column(Integer, nullable=True)
    non_emotions3Sum = Column(Integer, nullable=True)
    non_emotions4Sum = Column(Integer, nullable=True)
    non_emotions5Sum = Column(Integer, nullable=True)
    non_emotions6Sum = Column(Integer, nullable=True)
    non_emotions7Sum = Column(Integer, nullable=True)
    non_emotions8Sum = Column(Integer, nullable=True)
    non_emotions9Sum = Column(Integer, nullable=True)

    # 模块五
    emotionsSum_2021 = Column(Integer, nullable=True)
    emotionsSum_2020 = Column(Integer, nullable=True)
    emotionsSum_2019 = Column(Integer, nullable=True)
    emotionsSum_2018 = Column(Integer, nullable=True)
    emotionsSum_2017 = Column(Integer, nullable=True)

    non_emotionsSum_2021 = Column(Integer, nullable=True)
    non_emotionsSum_2020 = Column(Integer, nullable=True)
    non_emotionsSum_2019 = Column(Integer, nullable=True)
    non_emotionsSum_2018 = Column(Integer, nullable=True)
    non_emotionsSum_2017 = Column(Integer, nullable=True)

    # 模块六（贴吧男女比）
    boySum = Column(Integer, nullable=True)
    girlSum = Column(Integer, nullable=True)

    # 词云图
    hotWord1Sum = Column(Integer, nullable=True)
    hotWord2Sum = Column(Integer, nullable=True)
    hotWord3Sum = Column(Integer, nullable=True)
    hotWord4Sum = Column(Integer, nullable=True)
    hotWord5Sum = Column(Integer, nullable=True)
    hotWord6Sum = Column(Integer, nullable=True)
    hotWord7Sum = Column(Integer, nullable=True)
    hotWord8Sum = Column(Integer, nullable=True)
    hotWord9Sum = Column(Integer, nullable=True)
    hotWord10Sum = Column(Integer, nullable=True)
    hotWord11Sum = Column(Integer, nullable=True)
    hotWord12Sum = Column(Integer, nullable=True)
    hotWord13Sum = Column(Integer, nullable=True)
    hotWord14Sum = Column(Integer, nullable=True)
    hotWord15Sum = Column(Integer, nullable=True)
    hotWord16Sum = Column(Integer, nullable=True)
    hotWord17Sum = Column(Integer, nullable=True)
    hotWord18Sum = Column(Integer, nullable=True)
    hotWord19Sum = Column(Integer, nullable=True)
    hotWord20Sum = Column(Integer, nullable=True)
    hotWord21Sum = Column(Integer, nullable=True)
    hotWord22Sum = Column(Integer, nullable=True)
    hotWord23Sum = Column(Integer, nullable=True)
    hotWord24Sum = Column(Integer, nullable=True)
    hotWord25Sum = Column(Integer, nullable=True)
    hotWord27Sum = Column(Integer, nullable=True)
    hotWord28Sum = Column(Integer, nullable=True)
    hotWord29Sum = Column(Integer, nullable=True)
    hotWord30Sum = Column(Integer, nullable=True)
    hotWord31Sum = Column(Integer, nullable=True)
    hotWord32Sum = Column(Integer, nullable=True)
    hotWord33Sum = Column(Integer, nullable=True)
    hotWord34Sum = Column(Integer, nullable=True)


if __name__ == "__main__":
    Hnittable.metadata.create_all(engine)
