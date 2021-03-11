// $(function () {
//     echarts_1();
//     echarts_2();
//     echarts_4();
//     echarts_31();
//     echarts_32();
//     echarts_33();
//     echarts_5();
//     echarts_6();
//     map();
$(function () {
    // 请求数据
    $.ajax({
        type: 'get',
        url: '/get_echart_data',
        dataType: 'json',
        success: function (returnData) {
            console.log(returnData);
            // 调用echarts
            echarts_1(returnData);
            echarts_2(returnData);
            echarts_4(returnData);
            echarts_5(returnData);
            echarts_6(returnData);
            echarts_31(returnData);
            echarts_32(returnData);
            echarts_33(returnData);
            hot_word(returnData);
        }
    });
    function echarts_1(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    // 柱形图阴影样式
                    type: 'shadow'
                }
            },
            // 柱形图与外容器间距
            grid: {
                left: '0%',
                top: '10px',
                right: '0%',
                bottom: '4%',
                // x,y轴是否显示
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['体育', '数码', '娱乐', '升学', '游戏'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        // 横坐标线宽
                        width: 1,
                        type: "solid"
                    }
                },

                axisTick: {
                    // 是否显示X轴刻度
                    show: false
                },
                axisLabel: {
                    // x轴数据标签显示样式
                    interval: 0,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12'
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }],
            series: [
                {
                    type: 'bar',
                    data: data['echart_1'],
                    barWidth: '35%', //柱子宽度
                    itemStyle: {
                        color: '#2f89cf',
                        // 数值为0时不绘制该柱形
                        opacity: 1,
                        // 柱形图圆角
                        barBorderRadius: 5
                    }
                }

            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_2(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {type: 'shadow'}
            },
            grid: {
                left: '0%',
                top: '10px',
                right: '0%',
                bottom: '4%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['考研', '专升本', '高考'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    }
                },

                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12'
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }],
            series: [
                {

                    type: 'bar',
                    data: data['echart_2'],
                    barWidth: '35%', //柱子宽度
                    itemStyle: {
                        normal: {
                            color: '#27d08a',
                            opacity: 1,
                            barBorderRadius: 5
                        }
                    }
                }

            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_5(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart5'));

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },

            grid: {
                left: '0%',
                top: '10px',
                right: '0%',
                bottom: '2%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['2021', '2020', '2019', '2018', '2017'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    }
                },

                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12'
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '12'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1	)",
                        width: 1,
                        type: "solid"
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }],
            series: [{
                type: 'bar',
                data: data['echart_5'],
                barWidth: '35%', //柱子宽度
                itemStyle: {
                    color: '#2f89cf',
                    opacity: 1,
                    barBorderRadius: 5
                }
            }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_4(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#dddc6b'
                    }
                }
            },
            legend: {
                top: '0%',
                data: ['正向情感', '负向情感'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12'
                }
            },
            grid: {
                left: '10',
                top: '30',
                right: '10',
                bottom: '10',
                containLabel: true
            },

            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }

                },

                data: ['01', '02', '03', '04', '05', '06', '07', '08', '09']

            }
            ],

            yAxis: [{
                type: 'value',
                axisTick: {show: false},
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                }
            }],
            series: [
                {
                    name: '正向情感',
                    type: 'line',
                    // 是否平滑显示
                    smooth: true,
                    // 是否在曲线上显示标记点
                    showSymbol: false,
                    // 曲线样式,颜色和宽度
                    lineStyle: {
                        color: '#0184d5',
                        width: 2
                    },
                    // 曲线覆盖区域的颜色样式
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(1, 132, 213, 0.4)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(1, 132, 213, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)'
                    },
                    itemStyle: {
                        color: '#0184d5',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 12
                    },
                    data: data['echart_4'][0]
                },
                {
                    name: '负向情感',
                    type: 'line',
                    smooth: true,
                    showSymbol: false,
                    lineStyle: {
                        color: '#00d887',
                        width: 2
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0, 216, 135, 0.4)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(0, 216, 135, 0.1)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)'
                    },
                    itemStyle: {
                        color: '#00d887',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 12
                    },
                    data: data['echart_4'][1]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_6(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));
        var option = {
            color: ['#0f63d6', '#0f78d6', '#0f8cd6', '#0fa0d6', '#0fb4d6'],
            tooltip: {},
            legend: {
                data:["正向情感","负向情感"],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    // fontSize: '12'
                }
            },
            series: [
                {
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data:[
                        {name:'正向情感',value:data['boySum']},
                        {name:'负向情感',value:data['girlSum']}
                   
                    ],
                    roseType: 'radius',
                }
            ]
        };
        myChart.setOption(option)
    }

    function echarts_31(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb1'));
        option = {

            title: [{
                text: '2021',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                data: ['娱乐', '游戏', '体育'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12'
                }
            },
            series: [
                {
                    name: '2021',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: {show: false},
                    labelLine: {show: false},
                    data: [
                        {value: data['echart_31'][0], name: '娱乐'},
                        {value: data['echart_31'][1], name: '游戏'},
                        {value: data['echart_31'][2], name: '体育'}
                    ]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_32(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb2'));
        option = {

            title: [{
                text: '2020',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                 data: ['娱乐', '游戏', '体育'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12'
                }
            },
            series: [
                {
                    name: '2020',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: {show: false},
                    labelLine: {show: false},
               data: [
                   {value:data['echart_32'][0], name: '娱乐'},
                   {value:data['echart_32'][1], name: '游戏'},
                   {value:data['echart_32'][2], name: '体育'}
               ]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function echarts_33(data) {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb3'));
        option = {
            title: [{
                text: '2019',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: '16'
                }

            }],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)",
                position: function (p) {   //其中p为当前鼠标的位置
                    return [p[0] + 10, p[1] - 10];
                }
            },
            legend: {
                top: '70%',
                itemWidth: 10,
                itemHeight: 10,
                 data: ['娱乐', '游戏', '体育'],
                textStyle: {
                    color: 'rgba(255,255,255,.5)',
                    fontSize: '12'
                }
            },
            series: [
                {
                    name: '2019',
                    type: 'pie',
                    center: ['50%', '42%'],
                    radius: ['40%', '60%'],
                    color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
                    label: {show: false},
                    labelLine: {show: false},
                  data: [
                          {value: data['echart_33'][0], name: '娱乐'},
                          {value: data['echart_33'][1], name: '游戏'},
                          {value: data['echart_33'][2], name: '体育'}
                          ]
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }

    function hot_word(data) {
        // 基于准备好的dom，初始化echarts实例
        var mychart = echarts.init(document.getElementById('map_1'));
         var jsonlist = [];
           jsonlist.push(
               {
                   "name": "学姐",
                   "value": data['hot_word'][0]
               },
               {
                   "name": "学长",
                   "value": data['hot_word'][1]
               },
               {
                   "name": "工学院",
                   "value": data['hot_word'][2]
               },
               {
                   "name": "考研",
                   "value": data['hot_word'][3]
               },
               {
                   "name": "专升本",
                   "value": data['hot_word'][4]
               },
               {
                   "name": "湖南",
                   "value": data['hot_word'][5]
               },
               {
                   "name": "专业",
                   "value": data['hot_word'][6]
               },
               {
                   "name": "学校",
                   "value": data['hot_word'][7]
               },
               {
                   "name": "有没有",
                   "value": data['hot_word'][8]
               },
               {
                   "name": "请问",
                   "value": data['hot_word'][9]
               },
               {
                   "name": "一下",
                   "value": data['hot_word'][10]
               },
               {
                   "name": "同学",
                   "value": data['hot_word'][11]
               },
               {
                   "name": "湖工",
                   "value": data['hot_word'][12]
               },
               {
                   "name": "新生",
                   "value": data['hot_word'][13]
               },
               {
                   "name": "学弟",
                   "value": data['hot_word'][14]
               },
               {
                   "name": "毕业",
                   "value": data['hot_word'][15]
               },
               {
                   "name": "学妹",
                   "value": data['hot_word'][16]
               },
               {
                   "name": "衡阳",
                   "value": data['hot_word'][17]
               },
               {
                   "name": "贵校",
                   "value": data['hot_word'][18]
               },
               {
                   "name": "英语",
                   "value": data['hot_word'][19]
               },
               {
                   "name": "需要",
                   "value": data['hot_word'][20]
               },
               {
                   "name": "大四",
                   "value": data['hot_word'][21]
               },
               {
                   "name": "20",
                   "value": data['hot_word'][22]
               },
               {
                   "name": "招聘",
                   "value": data['hot_word'][23]
               },
               {
                   "name": "知道",
                   "value": data['hot_word'][24]
               },
               {
                   "name": "开学",
                   "value": data['hot_word'][25]
               },
               {
                   "name": "考试",
                   "value": data['hot_word'][27]
               },
               {
                   "name": "2020",
                   "value": data['hot_word'][28]
               },
               {
                   "name": "宿舍",
                   "value": data['hot_word'][29]
               },
               {
                   "name": "录取",
                   "value": data['hot_word'][30]
               },
               {
                   "name": "欢迎",
                   "value": data['hot_word'][31]
               },
               {
                   "name": "学位证",
                   "value": data['hot_word'][32]
               },
               {
                   "name": "补考",
                   "value": data['hot_word'][33]
               },
               // {
               //     "name": "工院",
               //     "value": 123
               // },
               // {
               //     "name": "私聊",
               //     "value": data['hot_word'][34]
               // },
               // {
               //     "name": "基础教育科目",
               //     "value": data['hot_word'][19]
               // },
               // {
               //     "name": "考试培训",
               //     "value": data['hot_word'][19]
               // },
               // {
               //     "name": "语言学习",
               //     "value": 358
               // },
               // {
               //     "name": "留学",
               //     "value": 246
               // },
               // {
               //     "name": "K12课程培训",
               //     "value": 207
               // },
               // {
               //     "name": "艺术培训",
               //     "value": 194
               // },
               // {
               //     "name": "技能培训",
               //     "value": 104
               // },
               // {
               //     "name": "IT培训",
               //     "value": 87
               // },
               // {
               //     "name": "高等教育专业",
               //     "value": 63
               // },
               // {
               //     "name": "家教",
               //     "value": 48
               // },
               // {
               //     "name": "体育培训",
               //     "value": 23
               // },
               // {
               //     "name": "职场培训",
               //     "value": 5
               // },
               // {
               //     "name": "金融财经",
               //     "value": 1328
               // },
               // {
               //     "name": "银行",
               //     "value": 765
               // },
               // {
               //     "name": "股票",
               //     "value": 452
               // },
               // {
               //     "name": "保险",
               //     "value": 415
               // },
               // {
               //     "name": "贷款",
               //     "value": 253
               // },
               // {
               //     "name": "基金",
               //     "value": 211
               // },
               // {
               //     "name": "信用卡",
               //     "value": 180
               // },
               // {
               //     "name": "外汇",
               //     "value": 138
               // },
               // {
               //     "name": "P2P",
               //     "value": 116
               // },
               // {
               //     "name": "贵金属",
               //     "value": 98
               // },
               // {
               //     "name": "债券",
               //     "value": 93
               // },
               // {
               //     "name": "网络理财",
               //     "value": 92
               // },
               // {
               //     "name": "信托",
               //     "value": 90
               // },
               // {
               //     "name": "征信",
               //     "value": 76
               // },
               // {
               //     "name": "期货",
               //     "value": 76
               // },
               // {
               //     "name": "公积金",
               //     "value": 40
               // },
               // {
               //     "name": "银行理财",
               //     "value": 36
               // },
               // {
               //     "name": "银行业务",
               //     "value": 30
               // },
               // {
               //     "name": "典当",
               //     "value": 7
               // },
               // {
               //     "name": "海外置业",
               //     "value": 1
               // },
               // {
               //     "name": "汽车",
               //     "value": 1309
               // },
               // {
               //     "name": "汽车档次",
               //     "value": 965
               // },
               // {
               //     "name": "汽车品牌",
               //     "value": 900
               // },
               // {
               //     "name": "汽车车型",
               //     "value": 727
               // },
               // {
               //     "name": "购车阶段",
               //     "value": 461
               // },
               // {
               //     "name": "二手车",
               //     "value": 309
               // },
               // {
               //     "name": "汽车美容",
               //     "value": 260
               // },
               // {
               //     "name": "新能源汽车",
               //     "value": 173
               // },
               // {
               //     "name": "汽车维修",
               //     "value": 155
               // },
               // {
               //     "name": "租车服务",
               //     "value": 136
               // },
               // {
               //     "name": "车展",
               //     "value": 121
               // },
               // {
               //     "name": "违章查询",
               //     "value": 76
               // },
               // {
               //     "name": "汽车改装",
               //     "value": 62
               // },
               // {
               //     "name": "汽车用品",
               //     "value": 37
               // },
               // {
               //     "name": "路况查询",
               //     "value": 32
               // },
               // {
               //     "name": "汽车保险",
               //     "value": 28
               // },
               // {
               //     "name": "陪驾代驾",
               //     "value": 4
               // },
               // {
               //     "name": "网络购物",
               //     "value": 1275
               // },
               // {
               //     "name": "做我的猫",
               //     "value": 1088
               // },
               // {
               //     "name": "只想要你知道",
               //     "value": 907
               // },
               // {
               //     "name": "团购",
               //     "value": 837
               // },
               // {
               //     "name": "比价",
               //     "value": 201
               // },
               // {
               //     "name": "海淘",
               //     "value": 195
               // },
               // {
               //     "name": "移动APP购物",
               //     "value": 179
               // },
               // {
               //     "name": "支付方式",
               //     "value": 119
               // },
               // {
               //     "name": "代购",
               //     "value": 43
               // },
               // {
               //     "name": "体育健身",
               //     "value": 1234
               // },
               // {
               //     "name": "体育赛事项目",
               //     "value": 802
               // },
               // {
               //     "name": "运动项目",
               //     "value": 405
               // },
               // {
               //     "name": "体育类赛事",
               //     "value": 337
               // },
               // {
               //     "name": "健身项目",
               //     "value": 199
               // },
               // {
               //     "name": "健身房健身",
               //     "value": 78
               // },
               // {
               //     "name": "运动健身",
               //     "value": 77
               // },
               // {
               //     "name": "家庭健身",
               //     "value": 36
               // },
               // {
               //     "name": "健身器械",
               //     "value": 29
               // },
               // {
               //     "name": "办公室健身",
               //     "value": 3
               // },
               // {
               //     "name": "商务服务",
               //     "value": 1201
               // },
               // {
               //     "name": "法律咨询",
               //     "value": 508
               // },
               // {
               //     "name": "化工材料",
               //     "value": 147
               // },
               // {
               //     "name": "广告服务",
               //     "value": 125
               // },
               // {
               //     "name": "会计审计",
               //     "value": 115
               // },
               // {
               //     "name": "人员招聘",
               //     "value": 101
               // },
               // {
               //     "name": "印刷打印",
               //     "value": 66
               // },
               // {
               //     "name": "知识产权",
               //     "value": 32
               // },
               // {
               //     "name": "翻译",
               //     "value": 22
               // },
               // {
               //     "name": "安全安保",
               //     "value": 9
               // },
               // {
               //     "name": "公关服务",
               //     "value": 8
               // },
               // {
               //     "name": "商旅服务",
               //     "value": 2
               // },
               // {
               //     "name": "展会服务",
               //     "value": 2
               // },
               // {
               //     "name": "特许经营",
               //     "value": 1
               // },
               // {
               //     "name": "休闲爱好",
               //     "value": 1169
               // },
               // {
               //     "name": "收藏",
               //     "value": 412
               // },
               // {
               //     "name": "摄影",
               //     "value": 393
               // },
               // {
               //     "name": "温泉",
               //     "value": 230
               // },
               // {
               //     "name": "博彩彩票",
               //     "value": 211
               // },
               // {
               //     "name": "美术",
               //     "value": 207
               // },
               // {
               //     "name": "书法",
               //     "value": 139
               // },
               // {
               //     "name": "DIY手工",
               //     "value": 75
               // },
               // {
               //     "name": "舞蹈",
               //     "value": 23
               // },
               // {
               //     "name": "钓鱼",
               //     "value": 21
               // },
               // {
               //     "name": "棋牌桌游",
               //     "value": 17
               // },
               // {
               //     "name": "KTV",
               //     "value": 6
               // },
               // {
               //     "name": "密室",
               //     "value": 5
               // },
               // {
               //     "name": "采摘",
               //     "value": 4
               // },
               // {
               //     "name": "电玩",
               //     "value": 1
               // },
               // {
               //     "name": "真人CS",
               //     "value": 1
               // },
               // {
               //     "name": "轰趴",
               //     "value": 1
               // },
               // {
               //     "name": "家电数码",
               //     "value": 1111
               // },
               // {
               //     "name": "手机",
               //     "value": 885
               // },
               // {
               //     "name": "电脑",
               //     "value": 543
               // },
               // {
               //     "name": "大家电",
               //     "value": 321
               // },
               // {
               //     "name": "家电关注品牌",
               //     "value": 253
               // },
               // {
               //     "name": "网络设备",
               //     "value": 162
               // },
               // {
               //     "name": "摄影器材",
               //     "value": 149
               // },
               // {
               //     "name": "影音设备",
               //     "value": 133
               // },
               // {
               //     "name": "办公数码设备",
               //     "value": 113
               // },
               // {
               //     "name": "生活电器",
               //     "value": 67
               // },
               // {
               //     "name": "厨房电器",
               //     "value": 54
               // },
               // {
               //     "name": "智能设备",
               //     "value": 45
               // },
               // {
               //     "name": "个人护理电器",
               //     "value": 22
               // },
               // {
               //     "name": "服饰鞋包",
               //     "value": 1047
               // },
               // {
               //     "name": "服装",
               //     "value": 566
               // },
               // {
               //     "name": "饰品",
               //     "value": 289
               // },
               // {
               //     "name": "鞋",
               //     "value": 184
               // },
               // {
               //     "name": "箱包",
               //     "value": 168
               // },
               // {
               //     "name": "奢侈品",
               //     "value": 137
               // },
               // {
               //     "name": "母婴亲子",
               //     "value": 1041
               // },
               // {
               //     "name": "孕婴保健",
               //     "value": 505
               // },
               // {
               //     "name": "母婴社区",
               //     "value": 299
               // },
               // {
               //     "name": "早教",
               //     "value": 103
               // },
               // {
               //     "name": "奶粉辅食",
               //     "value": 66
               // },
               // {
               //     "name": "童车童床",
               //     "value": 41
               // },
               // {
               //     "name": "关注品牌",
               //     "value": 271
               // },
               // {
               //     "name": "宝宝玩乐",
               //     "value": 30
               // },
               // {
               //     "name": "母婴护理服务",
               //     "value": 25
               // },
               // {
               //     "name": "纸尿裤湿巾",
               //     "value": 16
               // },
               // {
               //     "name": "妈妈用品",
               //     "value": 15
               // },
               // {
               //     "name": "宝宝起名",
               //     "value": 12
               // },
               // {
               //     "name": "童装童鞋",
               //     "value": 9
               // },
               // {
               //     "name": "胎教",
               //     "value": 8
               // },
               // {
               //     "name": "宝宝安全",
               //     "value": 1
               // },
               // {
               //     "name": "宝宝洗护用品",
               //     "value": 1
               // },
               // {
               //     "name": "软件应用",
               //     "value": 1018
               // },
               // {
               //     "name": "系统工具",
               //     "value": 896
               // },
               // {
               //     "name": "理财购物",
               //     "value": 440
               // },
               // {
               //     "name": "生活实用",
               //     "value": 365
               // },
               // {
               //     "name": "影音图像",
               //     "value": 256
               // },
               // {
               //     "name": "社交通讯",
               //     "value": 214
               // },
               // {
               //     "name": "手机美化",
               //     "value": 39
               // },
               // {
               //     "name": "办公学习",
               //     "value": 28
               // },
               // {
               //     "name": "应用市场",
               //     "value": 23
               // },
               // {
               //     "name": "母婴育儿",
               //     "value": 14
               // },
               // {
               //     "name": "游戏",
               //     "value": 946
               // },
               // {
               //     "name": "手机游戏",
               //     "value": 565
               // },
               // {
               //     "name": "PC游戏",
               //     "value": 353
               // },
               // {
               //     "name": "网页游戏",
               //     "value": 254
               // },
               // {
               //     "name": "游戏机",
               //     "value": 188
               // },
               // {
               //     "name": "模拟辅助",
               //     "value": 166
               // },
               // {
               //     "name": "个护美容",
               //     "value": 942
               // },
               // {
               //     "name": "护肤品",
               //     "value": 177
               // },
               // {
               //     "name": "彩妆",
               //     "value": 133
               // },
               // {
               //     "name": "美发",
               //     "value": 80
               // },
               // {
               //     "name": "香水",
               //     "value": 50
               // },
               // {
               //     "name": "个人护理",
               //     "value": 46
               // },
               // {
               //     "name": "美甲",
               //     "value": 26
               // },
               // {
               //     "name": "SPA美体",
               //     "value": 21
               // },
               // {
               //     "name": "花鸟萌宠",
               //     "value": 914
               // },
               // {
               //     "name": "绿植花卉",
               //     "value": 311
               // },
               // {
               //     "name": "狗",
               //     "value": 257
               // },
               // {
               //     "name": "其他宠物",
               //     "value": 131
               // },
               // {
               //     "name": "水族",
               //     "value": 125
               // },
               // {
               //     "name": "猫",
               //     "value": 122
               // },
               // {
               //     "name": "动物",
               //     "value": 81
               // },
               // {
               //     "name": "鸟",
               //     "value": 67
               // },
               // {
               //     "name": "宠物用品",
               //     "value": 41
               // },
               // {
               //     "name": "宠物服务",
               //     "value": 26
               // },
               // {
               //     "name": "书籍阅读",
               //     "value": 913
               // },
               // {
               //     "name": "网络小说",
               //     "value": 483
               // },
               // {
               //     "name": "关注书籍",
               //     "value": 128
               // },
               // {
               //     "name": "文学",
               //     "value": 105
               // },
               // {
               //     "name": "报刊杂志",
               //     "value": 77
               // },
               // {
               //     "name": "人文社科",
               //     "value": 22
               // },
               // {
               //     "name": "建材家居",
               //     "value": 907
               // },
               // {
               //     "name": "装修建材",
               //     "value": 644
               // },
               // {
               //     "name": "家具",
               //     "value": 273
               // },
               // {
               //     "name": "家居风格",
               //     "value": 187
               // },
               // {
               //     "name": "家居家装关注品牌",
               //     "value": 140
               // },
               // {
               //     "name": "家纺",
               //     "value": 107
               // },
               // {
               //     "name": "厨具",
               //     "value": 47
               // },
               // {
               //     "name": "灯具",
               //     "value": 43
               // },
               // {
               //     "name": "家居饰品",
               //     "value": 29
               // },
               // {
               //     "name": "家居日常用品",
               //     "value": 10
               // },
               // {
               //     "name": "生活服务",
               //     "value": 883
               // },
               // {
               //     "name": "物流配送",
               //     "value": 536
               // },
               // {
               //     "name": "家政服务",
               //     "value": 108
               // },
               // {
               //     "name": "摄影服务",
               //     "value": 49flask
               // },
               // {
               //     "name": "搬家服务",
               //     "value": 38
               // },
               // {
               //     "name": "物业维修",
               //     "value": 37
               // },
               // {
               //     "name": "婚庆服务",
               //     "value": 24
               // },
               // {
               //     "name": "二手回收",
               //     "value": 24
               // },
               // {
               //     "name": "鲜花配送",
               //     "value": 3
               // },
               // {
               //     "name": "维修服务",
               //     "value": 3
               // },
               // {
               //     "name": "殡葬服务",
               //     "value": 1
               // },
               // {
               //     "name": "求职创业",
               //     "value": 874
               // },
               // {
               //     "name": "创业",
               //     "value": 363
               // },
               // {
               //     "name": "目标职位",
               //     "value": 162
               // },
               // {
               //     "name": "目标行业",
               //     "value": 50
               // },
               // {
               //     "name": "兼职",
               //     "value": 21
               // },
               // {
               //     "name": "期望年薪",
               //     "value": 20
               // },
               // {
               //     "name": "实习",
               //     "value": 16
               // },
               // {
               //     "name": "雇主类型",
               //     "value": 10
               // },
               // {
               //     "name": "星座运势",
               //     "value": 789
               // },
               // {
               //     "name": "星座",
               //     "value": 316
               // },
               // {
               //     "name": "算命",
               //     "value": 303
               // },
               // {
               //     "name": "解梦",
               //     "value": 196
               // },
               // {
               //     "name": "风水",
               //     "value": 93
               // },
               // {
               //     "name": "面相分析",
               //     "value": 47
               // },
               // {
               //     "name": "手相",
               //     "value": 32
               // },
               // {
               //     "name": "公益",
               //     "value": 90
               // }
           );
           // 人像的base64编码
           // image= "data:image/png;base64,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"
           // 小鸟的base64编码
           // image= "data:image/png;base64,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"
           // 五角星图片
           image = "data:image/png;base64,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";
              // image = "data:image/png;base64,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"
        var maskImage = new Image();
           maskImage.src = image;
           // 配置项和配置数据
           var option = {
               title: {
                   text: '词云图',
                   left: 'center'
               },
               series: [
                   {
                       maskImage:maskImage,
                       // 指定他的类型为wordCloud
                       type: 'wordCloud',
                       // 设置字符大小范围
                       sizeRange: [18, 66],
                       rotationRange: [-45, 90],
                       textStyle: {
                           normal: {
                               color: function () {
                                   return 'rgb(' + [
                                       Math.round(Math.random() * 160),
                                       Math.round(Math.random() * 160),
                                       Math.round(Math.random() * 160)
                                   ].join(',') + ')';
                               }
                           }
                       },
                       // 调用数据
                       data: jsonlist
                   }
               ]
           };
           // 调用设置选项
           maskImage.onload = function(){
               mychart.setOption(option)
           };}
})
;