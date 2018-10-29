// 配置
// api: 接口地址
// interval: 数据刷新时间间隔 ms
window.MOBIKE_DEVA_EYE = window.MOBIKE_DEVA_EYE || {
    assets: {
        // api: 'mock/assets.json',
        api: 'assets.do/',
        interval: 1 * 60 * 1000
    },
    vpnLogin: {
        // api: 'mock/vpn-login.json',
        api: 'vpnlogin.do/',
        interval: 10 * 60 * 1000
    },
    vpnUnusual: {
        // api: 'mock/vpn-unusual.json',
        api: 'vpnunusual.do/',
        interval: 10 * 60 * 1000
    },
    attack: {
        // api: 'mock/attack.json',
        api: 'attack.do/',
        interval: 30 * 1000
    },
    country: {
        // api: 'mock/country.json',
        api: 'country.do/',
        interval: 30 * 1000
    },
    category: {
        // api: 'mock/category.json',
        api: 'category.do/',
        interval: 30 * 1000,
        color: ['#4df64f', '#4eedf7', '#f54448', '#fbd650']
    },
    gitlab: {
        // api: 'mock/gitlab.json',
        api: 'gitlab.do/',
        // 进度条15秒走完一程，所以最好15秒刷新一次
        interval: 10 * 60 * 1000
    },
    radar: {
        //api: 'mock/radar.json',
        api: 'radar.do/',
        tips: ['正常',  '危险','可疑'],
        // 出现的小点最大数量
        pointsMaxSum: 10,
        interval: 5 * 60 * 1000
    },
    issues: {
        // api: 'mock/issues.json',
        api: 'issues.do/',
        interval: 5 * 60 * 1000
    }
};

// ready
$(document).ready(function () {
    // 地图城市
    var geoCoordMap = {
        '上海': [121.4648, 31.2891],
        '上海市': [121.4648, 31.2891],
        '东莞': [113.8953, 22.901],
        '东莞市': [113.8953, 22.901],
        '东营': [118.7073, 37.5513],
        '东营市': [118.7073, 37.5513],
        '中山': [113.4229, 22.478],
        '中山市': [113.4229, 22.478],
        '临汾': [111.4783, 36.1615],
        '临汾市': [111.4783, 36.1615],
        '临沂': [118.3118, 35.2936],
        '临沂市': [118.3118, 35.2936],
        '丹东': [124.541, 40.4242],
        '丹东市': [124.541, 40.4242],
        '丽水': [119.5642, 28.1854],
        '丽水市': [119.5642, 28.1854],
        '乌鲁木齐': [87.9236, 43.5883],
        '乌鲁木齐市': [87.9236, 43.5883],
        '佛山': [112.8955, 23.1097],
        '佛山市': [112.8955, 23.1097],
        '保定': [115.0488, 39.0948],
        '保定市': [115.0488, 39.0948],
        '兰州': [103.5901, 36.3043],
        '兰州市': [103.5901, 36.3043],
        '包头': [110.3467, 41.4899],
        '包头市': [110.3467, 41.4899],
        '北京': [116.4551, 40.2539],
        '北京市': [116.4551, 40.2539],
        '北海': [109.314, 21.6211],
        '北海市': [109.314, 21.6211],
        '南京': [118.8062, 31.9208],
        '南京市': [118.8062, 31.9208],
        '南宁': [108.479, 23.1152],
        '南宁市': [108.479, 23.1152],
        '南昌': [116.0046, 28.6633],
        '南昌市': [116.0046, 28.6633],
        '南通': [121.1023, 32.1625],
        '南通市': [121.1023, 32.1625],
        '厦门': [118.1689, 24.6478],
        '厦门市': [118.1689, 24.6478],
        '台州': [121.1353, 28.6688],
        '台州市': [121.1353, 28.6688],
        '合肥': [117.29, 32.0581],
        '合肥市': [117.29, 32.0581],
        '呼和浩特': [111.4124, 40.4901],
        '呼和浩特市': [111.4124, 40.4901],
        '咸阳': [108.4131, 34.8706],
        '咸阳市': [108.4131, 34.8706],
        '哈尔滨': [127.9688, 45.368],
        '哈尔滨市': [127.9688, 45.368],
        '唐山': [118.4766, 39.6826],
        '唐山市': [118.4766, 39.6826],
        '嘉兴': [120.9155, 30.6354],
        '嘉兴市': [120.9155, 30.6354],
        '大同': [113.7854, 39.8035],
        '大同市': [113.7854, 39.8035],
        '大连': [122.2229, 39.4409],
        '大连市': [122.2229, 39.4409],
        '天津': [117.4219, 39.4189],
        '天津市': [117.4219, 39.4189],
        '太原': [112.3352, 37.9413],
        '太原市': [112.3352, 37.9413],
        '威海': [121.9482, 37.1393],
        '威海市': [121.9482, 37.1393],
        '宁波': [121.5967, 29.6466],
        '宁波市': [121.5967, 29.6466],
        '宝鸡': [107.1826, 34.3433],
        '宝鸡市': [107.1826, 34.3433],
        '宿迁': [118.5535, 33.7775],
        '宿迁市': [118.5535, 33.7775],
        '常州': [119.4543, 31.5582],
        '常州市': [119.4543, 31.5582],
        '广州': [113.5107, 23.2196],
        '广州市': [113.5107, 23.2196],
        '廊坊': [116.521, 39.0509],
        '廊坊市': [116.521, 39.0509],
        '延安': [109.1052, 36.4252],
        '延安市': [109.1052, 36.4252],
        '张家口': [115.1477, 40.8527],
        '张家口市': [115.1477, 40.8527],
        '徐州': [117.5208, 34.3268],
        '徐州市': [117.5208, 34.3268],
        '德州': [116.6858, 37.2107],
        '德州市': [116.6858, 37.2107],
        '惠州': [114.6204, 23.1647],
        '惠州市': [114.6204, 23.1647],
        '成都': [103.9526, 30.7617],
        '成都市': [103.9526, 30.7617],
        '扬州': [119.4653, 32.8162],
        '扬州市': [119.4653, 32.8162],
        '承德': [117.5757, 41.4075],
        '承德市': [117.5757, 41.4075],
        '拉萨': [91.1865, 30.1465],
        '拉萨市': [91.1865, 30.1465],
        '无锡': [120.3442, 31.5527],
        '无锡市': [120.3442, 31.5527],
        '日照': [119.2786, 35.5023],
        '日照市': [119.2786, 35.5023],
        '昆明': [102.9199, 25.4663],
        '昆明市': [102.9199, 25.4663],
        '杭州': [119.5313, 29.8773],
        '杭州市': [119.5313, 29.8773],
        '枣庄': [117.323, 34.8926],
        '枣庄市': [117.323, 34.8926],
        '柳州': [109.3799, 24.9774],
        '柳州市': [109.3799, 24.9774],
        '株洲': [113.5327, 27.0319],
        '株洲市': [113.5327, 27.0319],
        '武汉': [114.3896, 30.6628],
        '武汉市': [114.3896, 30.6628],
        '汕头': [117.1692, 23.3405],
        '汕头市': [117.1692, 23.3405],
        '江门': [112.6318, 22.1484],
        '江门市': [112.6318, 22.1484],
        '沈阳': [123.1238, 42.1216],
        '沈阳市': [123.1238, 42.1216],
        '沧州': [116.8286, 38.2104],
        '沧州市': [116.8286, 38.2104],
        '河源': [114.917, 23.9722],
        '河源市': [114.917, 23.9722],
        '泉州': [118.3228, 25.1147],
        '泉州市': [118.3228, 25.1147],
        '泰安': [117.0264, 36.0516],
        '泰安市': [117.0264, 36.0516],
        '泰州': [120.0586, 32.5525],
        '泰州市': [120.0586, 32.5525],
        '济南': [117.1582, 36.8701],
        '济南市': [117.1582, 36.8701],
        '济宁': [116.8286, 35.3375],
        '济宁市': [116.8286, 35.3375],
        '海口': [110.3893, 19.8516],
        '海口市': [110.3893, 19.8516],
        '淄博': [118.0371, 36.6064],
        '淄博市': [118.0371, 36.6064],
        '淮安': [118.927, 33.4039],
        '淮安市': [118.927, 33.4039],
        '深圳': [114.5435, 22.5439],
        '深圳市': [114.5435, 22.5439],
        '清远': [112.9175, 24.3292],
        '清远市': [112.9175, 24.3292],
        '温州': [120.498, 27.8119],
        '温州市': [120.498, 27.8119],
        '渭南': [109.7864, 35.0299],
        '渭南市': [109.7864, 35.0299],
        '湖州': [119.8608, 30.7782],
        '湖州市': [119.8608, 30.7782],
        '湘潭': [112.5439, 27.7075],
        '湘潭市': [112.5439, 27.7075],
        '滨州': [117.8174, 37.4963],
        '滨州市': [117.8174, 37.4963],
        '潍坊': [119.0918, 36.524],
        '潍坊市': [119.0918, 36.524],
        '烟台': [120.7397, 37.5128],
        '烟台市': [120.7397, 37.5128],
        '玉溪': [101.9312, 23.8898],
        '玉溪市': [101.9312, 23.8898],
        '珠海': [113.7305, 22.1155],
        '珠海市': [113.7305, 22.1155],
        '盐城': [120.2234, 33.5577],
        '盐城市': [120.2234, 33.5577],
        '盘锦': [121.9482, 41.0449],
        '盘锦市': [121.9482, 41.0449],
        '石家庄': [114.4995, 38.1006],
        '石家庄市': [114.4995, 38.1006],
        '福州': [119.4543, 25.9222],
        '福州市': [119.4543, 25.9222],
        '秦皇岛': [119.2126, 40.0232],
        '秦皇岛市': [119.2126, 40.0232],
        '绍兴': [120.564, 29.7565],
        '绍兴市': [120.564, 29.7565],
        '聊城': [115.9167, 36.4032],
        '聊城市': [115.9167, 36.4032],
        '肇庆': [112.1265, 23.5822],
        '肇庆市': [112.1265, 23.5822],
        '舟山': [122.2559, 30.2234],
        '舟山市': [122.2559, 30.2234],
        '苏州': [120.6519, 31.3989],
        '苏州市': [120.6519, 31.3989],
        '莱芜': [117.6526, 36.2714],
        '莱芜市': [117.6526, 36.2714],
        '菏泽': [115.6201, 35.2057],
        '菏泽市': [115.6201, 35.2057],
        '营口': [122.4316, 40.4297],
        '营口市': [122.4316, 40.4297],
        '葫芦岛': [120.1575, 40.578],
        '葫芦岛市': [120.1575, 40.578],
        '衡水': [115.8838, 37.7161],
        '衡水市': [115.8838, 37.7161],
        '衢州': [118.6853, 28.8666],
        '衢州市': [118.6853, 28.8666],
        '西宁': [101.4038, 36.8207],
        '西宁市': [101.4038, 36.8207],
        '西安': [109.1162, 34.2004],
        '西安市': [109.1162, 34.2004],
        '贵阳': [106.6992, 26.7682],
        '贵阳市': [106.6992, 26.7682],
        '连云港': [119.1248, 34.552],
        '连云港市': [119.1248, 34.552],
        '邢台': [114.8071, 37.2821],
        '邢台市': [114.8071, 37.2821],
        '邯郸': [114.4775, 36.535],
        '邯郸市': [114.4775, 36.535],
        '郑州': [113.4668, 34.6234],
        '郑州市': [113.4668, 34.6234],
        '鄂尔多斯': [108.9734, 39.2487],
        '鄂尔多斯市': [108.9734, 39.2487],
        '重庆': [107.7539, 30.1904],
        '重庆市': [107.7539, 30.1904],
        '金华': [120.0037, 29.1028],
        '金华市': [120.0037, 29.1028],
        '铜川': [109.0393, 35.1947],
        '铜川市': [109.0393, 35.1947],
        '银川': [106.3586, 38.1775],
        '银川市': [106.3586, 38.1775],
        '镇江': [119.4763, 31.9702],
        '镇江市': [119.4763, 31.9702],
        '长春': [125.8154, 44.2584],
        '长春市': [125.8154, 44.2584],
        '长沙': [113.0823, 28.2568],
        '长沙市': [113.0823, 28.2568],
        '长治': [112.8625, 36.4746],
        '长治市': [112.8625, 36.4746],
        '阳泉': [113.4778, 38.0951],
        '阳泉市': [113.4778, 38.0951],
        '青岛': [120.4651, 36.3373],
        '青岛市': [120.4651, 36.3373],
        '韶关': [113.7964, 24.7028],
        '韶关市': [113.7964, 24.7028],
        '海外1': [100.3467, 51.4899],
        '海外2': [81.1865, 20.1465],
        '海外3': [135.4648, 35.2891]
    };

    // 攻击流转换
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord]
                });
            }
        }
        return res;
    };

    // 接口、图标配置
    var config = {
        vpnLogin: {
            option: {
                grid: {
                    top: '17%',
                    left: 0,
                    right: '7%',
                    bottom: 0,
                    containLabel: true
                },
                xAxis: [
                    {
                        show: true,
                        type: 'category',
                        boundaryGap: false,
                        data: [],
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#2e87a5',
                                opacity: 0.2
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#2e87a5'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#fff',
                                fontSize: 10
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        show: true,
                        name: '数量',
                        nameGap: '8',
                        nameTextStyle: {
                            color: '#fff',
                            fontSize: '10',
                            align: 'left'
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#2e87a5',
                                opacity: 0.2
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#2e87a5'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#fff',
                                fontSize: 10
                            }
                        }
                    }
                ],
                series: [
                    {
                        type: 'line',
                        data: [],
                        showSymbol: false,
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true
                                },
                                color: '#fff',
                                lineStyle: {
                                    color: '#95d4e3',
                                    width: 1
                                },
                                areaStyle: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1,
                                        [
                                            {offset: 0, color: 'rgba(52, 185, 194, 1)'},
                                            {offset: 1, color: 'rgba(52, 185, 194, 0)'}
                                        ],
                                        false)
                                }
                            }
                        }
                    }
                ]
            }
        },
        vpnUnusual: {
            series: {
                normal: {
                    type: 'line',
                    name: '正常',
                    data: [],
                    showSymbol: true,
                    symbol: 'circle',
                    lineStyle: {
                        normal: {
                            color: '#95d4e3',
                            width: 1
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(225, 245, 48, 1)',
                            borderColor: 'rgba(225, 245, 48, 1)',
                            borderWidth: 3,
                            shadowColor: 'rgba(225, 245, 48, 1)',
                            shadowBlur: 7
                        }
                    }
                },
                unusual: {
                    type: 'line',
                    name: '异常',
                    data: [],
                    showSymbol: true,
                    symbol: 'circle',
                    lineStyle: {
                        normal: {
                            color: '#95d4e3',
                            width: 1
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(253, 45, 31, 1)',
                            borderColor: 'rgba(253, 45, 31, 1)',
                            borderWidth: 3,
                            shadowColor: 'rgba(253, 45, 31, 1)',
                            shadowBlur: 7
                        }
                    }
                }
            },
            option: {
                grid: {
                    top: '20%',
                    left: 0,
                    right: '7%',
                    bottom: 0,
                    containLabel: true
                },
                xAxis: [
                    {
                        show: true,
                        type: 'category',
                        boundaryGap: false,
                        data: [],
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#2e87a5',
                                opacity: 0.2
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#2e87a5'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#fff',
                                fontSize: 10
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        show: true,
                        name: '数量',
                        nameGap: '8',
                        nameTextStyle: {
                            color: '#fff',
                            fontSize: '10',
                            align: 'left'
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#2e87a5',
                                opacity: 0.2
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#2e87a5'
                            }
                        },
                        axisLabel: {
                            textStyle: {
                                color: '#fff',
                                fontSize: 10
                            }
                        }
                    }
                ],
                series: []
            }
        },
        attack: {
            option: {
                geo: {
                    map: 'china',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    roam: false,
                    zoom: 1.2,
                    itemStyle: {
                        normal: {
                            areaColor: 'transparent',
                            borderColor: '#34b9c2'
                        },
                        emphasis: {
                            areaColor: 'transparent'
                        }
                    }
                },
                series: [
                    {
                        name: '攻击流-点',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        zlevel: 3,
                        rippleEffect: {
                            brushType: 'fill',
                            scale: 2.5
                        },
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        symbolSize: 6,
                        itemStyle: {
                            normal: {
                                color: 'rgba(192, 60, 29, 0.6)'
                            }
                        },
                        data: []
                    },
                    {
                        name: '攻击流-连线',
                        type: 'lines',
                        zlevel: 1,
                        lineStyle: {
                            normal: {
                                type: 'dotted',
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#c03c1d'
                                    }, {
                                        offset: 1, color: '#fff'
                                    }]
                                },
                                width: 1.5,
                                curveness: 0.2
                            }
                        },
                        data: []
                    },
                    {
                        name: '攻击流-流动',
                        type: 'lines',
                        symbolSize: 5,
                        zlevel: 2,
                        effect: {
                            show: true,
                            period: 3,
                            trailLength: 0.8,
                            color: 'rgba(255, 255, 255, 0.5)',
                            symbol: 'circle',
                            symbolSize: 1.5
                        },
                        lineStyle: {
                            normal: {
                                width: 0,
                                curveness: 0.2
                            }
                        },
                        data: []
                    }
                ]
            }
        }
    };

    // view
    var _view = {
        countIp: null,
        countDomain: null,
        countPort: null,
        vpnLogin: null,
        vpnUnusual: null,
        attack: null,
        $issues: null,
        $country: null,
        $categoryLegend: null,
        $categoryTxt: null,
        $categoryCircleBar: null,
        $codeMonitor: null,
        $radarPoints: null,
        $radarPop: null,
        // 雷达点出现的区域长度&宽度vh
        radarPointArea: 9,
        radarPointsSize: ['def', 'xs', 'sm', 'm', 'l'],
        issueTimer: null,

        // 初始化
        init: function () {
            _view.initAssets();
        },

        // update
        update: function () {
            _view.updateAssetsData();
            _view.updateVpnLogin();
            _view.updateVpnUnusual();
            _view.updateAttack();
            _view.updateCategory();
            _view.updateIssues();
            _view.updateCountry();
            _view.updateCodeMonitor();
            _view.updateRadar();
        },

        // 实时资产：初始化
        initAssets: function () {
            var options = {
                useEasing: true,
                useGrouping: true,
                separator: ',',
                decimal: '.'
            };
            this.countIp = new CountUp('j-real-assets-ip', 0, 0, 0, 1, options);
            this.countDomain = new CountUp('j-real-assets-domain', 0, 0, 0, 1, options);
            this.countPort = new CountUp('j-real-assets-port', 0, 0, 0, 1, options);
            if (!this.countIp.error) {
                this.countIp.start();
            }
            if (!this.countDomain.error) {
                this.countDomain.start();
            }
            if (!this.countPort.error) {
                this.countPort.start();
            }

            // update other
            _view.update();
        },

        // 实时资产：获取数据
        updateAssetsData: function () {
            var self = this;

            _data.fetchData(window.MOBIKE_DEVA_EYE.assets.api, function (data) {
                self.countIp.update(+data.ip);
                self.countDomain.update(+data.domain);
                self.countPort.update(+data.port);
            });

            // 自动更新数据
            setTimeout(function () {
                _view.updateAssetsData();
            }, window.MOBIKE_DEVA_EYE.assets.interval);
        },

        // VPN登录
        updateVpnLogin: function () {
            var self = this;
            var reloadInterval = null;

            _data.fetchData(window.MOBIKE_DEVA_EYE.vpnLogin.api, function (data) {
                config.vpnLogin.option.xAxis[0].data = data.x;
                config.vpnLogin.option.series[0].data = data.y;
                // paint
                self.vpnLogin = self.vpnLogin || echarts.init(document.getElementById('j-vpn-login'));
                self.vpnLogin.setOption(config.vpnLogin.option);
            });

            // 自动更新数据
            setTimeout(function () {
                clearInterval(reloadInterval);
                _view.updateVpnLogin();
            }, window.MOBIKE_DEVA_EYE.vpnLogin.interval);

            reloadInterval = setInterval(function () {
                var vpnLoginOption = self.vpnLogin.getOption();
                self.vpnLogin.clear();
                self.vpnLogin.setOption(vpnLoginOption);
            }, 5000);
        },

        // VPN异常
        updateVpnUnusual: function () {
            var self = this;
            var reloadInterval = null;

            _data.fetchData(window.MOBIKE_DEVA_EYE.vpnUnusual.api, function (data) {
                config.vpnUnusual.option.xAxis[0].data = data.x;
                // config.vpnUnusual.series.normal.data = data.y.normal;
                config.vpnUnusual.series.unusual.data = data.y.unusual;
                // config.vpnUnusual.option.series.push(config.vpnUnusual.series.normal);
                config.vpnUnusual.option.series.push(config.vpnUnusual.series.unusual);
                // paint
                self.vpnUnusual = self.vpnUnusual || echarts.init(document.getElementById('j-vpn-unusual'));
                self.vpnUnusual.setOption(config.vpnUnusual.option);
            });

            // 自动更新数据
            setTimeout(function () {
                clearInterval(reloadInterval);
                _view.updateVpnUnusual();
            }, window.MOBIKE_DEVA_EYE.vpnUnusual.interval);

            reloadInterval = setInterval(function () {
                var vpnUnusualOption = self.vpnUnusual.getOption();
                self.vpnUnusual.clear();
                self.vpnUnusual.setOption(vpnUnusualOption);
            }, 5000);
        },

        // D-DOS攻击
        updateAttack: function () {
            _data.fetchData(window.MOBIKE_DEVA_EYE.attack.api, function (data) {
                config.attack.option.series[0].data = data.points.map(function (dataItem) {
                    return {
                        name: dataItem.name,
                        value: geoCoordMap[dataItem.name].concat([dataItem.value])
                    };
                });
                config.attack.option.series[1].data = convertData(data.attack);
                config.attack.option.series[2].data = convertData(data.attack);
                // paint
                self.attack = self.attack || echarts.init(document.getElementById('j-attack'));
                self.attack.setOption(config.attack.option);
            });

            // 自动更新数据
            setTimeout(function () {
                _view.updateAttack();
            }, window.MOBIKE_DEVA_EYE.assets.interval);
        },

        // 国家分布
        updateCountry: function () {
            this.$country = this.$country || $('#j-country-box');
            var self = this;
            var htmlArr = [];

            _data.fetchData(window.MOBIKE_DEVA_EYE.country.api, function (data) {
                for (var i = 0; i < Math.min(data.length, 8); i++) {
                    htmlArr.push('<div class="country-i flex">');
                    htmlArr.push('<img class="country-ico" src="/static/eyesight/img/flag/' + data[i].name + '.png">');
                    htmlArr.push('<div class="flex-item">');
                    htmlArr.push('<div class="country-percent"><em>' + data[i].percent + '%</em>');
                    htmlArr.push('<div class="country-percent-bar j-country-percent-bar"></div></div>');
                    htmlArr.push('<div class="country-name"><em>' + data[i].name + '</em></div>');
                    htmlArr.push('</div></div>');
                }
                self.$country.html(htmlArr.join(''));
                __setProcess(data);
            });

            function __setProcess(data) {
                setTimeout(function () {
                    $('.j-country-percent-bar').map(function (index, item) {
                        $(item).css('width', data[index].percent + '%');
                    });
                }, 10);
            }

            // 自动更新数据
            setTimeout(function () {
                _view.updateCountry();
            }, window.MOBIKE_DEVA_EYE.country.interval);
        },

        // 类型分布
        updateCategory: function () {
            this.$categoryLegend = this.$categoryLegend || $('#j-category-legend');
            this.$categoryCircleBar = this.$categoryCircleBar || $('.j-circle-bar');
            this.$categoryTxt = this.$categoryTxt || $('.j-category-i-txt');
            var self = this;
            var htmlArr = [];
            var dataArr = [];

            _data.fetchData(window.MOBIKE_DEVA_EYE.category.api, function (data) {
                dataArr = data;
                for (var i = 0; i < Math.min(data.length, 4); i++) {
                    htmlArr.push('<div class="category-legend-i">' + data[i].name);
                    htmlArr.push('<span style="background: ' + window.MOBIKE_DEVA_EYE.category.color[i] + '"></span></div>');
                    self.$categoryTxt.eq(i).text(data[i].percent + '%');
                    self.$categoryCircleBar.eq(i)
                        .attr('stroke', window.MOBIKE_DEVA_EYE.category.color[i])
                        .attr('stroke-dasharray', data[i].percent + ' 1069');
                }
                self.$categoryLegend.html(htmlArr.join(''));
            });

            // 自动更新数据
            setTimeout(function () {
                clearInterval(reloadInterval);
                _view.updateCategory();
            }, window.MOBIKE_DEVA_EYE.category.interval);

            reloadInterval = setInterval(function () {
                self.$categoryCircleBar.map(function (index, item) {
                    var $item = $(item);
                    var stroke = $item.attr('stroke-dasharray');
                    var percent = self.$categoryTxt.eq(index).text();
                    $item.attr('stroke-dasharray', '0 1069');
                    self.$categoryTxt.eq(index).text('0%');
                    setTimeout(function () {
                        $item.attr('stroke-dasharray', stroke);
                        self.$categoryTxt.eq(index).text(percent);
                    }, 2000);
                })
            }, 5000)
        },

        // gitlab
        updateCodeMonitor: function () {
            this.$codeMonitor = this.$codeMonitor || $('#j-code-monitor');
            var self = this;
            var htmlArr = [];

            _data.fetchData(window.MOBIKE_DEVA_EYE.gitlab.api, function (data) {
                for (var i = 0; i < Math.min(data.length, 4); i++) {
                    htmlArr.push('<div class="code-monitor-i">');
                    htmlArr.push('<div class="code-monitor-tit">' + data[i].name + '</div>');
                    htmlArr.push('<div class="code-monitor-sum">' + data[i].sum.toLocaleString('en-US') + '</div>');
                    htmlArr.push('<div class="code-monitor-process">');
                    htmlArr.push('<div class="code-monitor-process-bar"></div>');
                    htmlArr.push('<div class="code-monitor-process-mask"></div>');
                    htmlArr.push('</div></div>');
                }
                self.$codeMonitor.html(htmlArr.join(''));
            });

            // 自动更新数据
            setTimeout(function () {
                _view.updateCodeMonitor();
            }, window.MOBIKE_DEVA_EYE.gitlab.interval);
        },

        // 雷达
        updateRadar: function () {
            this.$radarPoints = this.$radarPoints || $('#j-radar-points');
            this.$radarPop = this.$radarPop || $('#j-radar-pop');
            var self = this;
            var htmlArr = [];
            var popHtmlArr = [];

            _data.fetchData(window.MOBIKE_DEVA_EYE.radar.api, function (data) {
                // 异常点：调整为无红点
                if (data.warn && data.warn.length) {
                    for (var i = 0, item; i < data.warn.length; i++) {
                        item = data.warn[i];
                        htmlArr.push('<div class="radar-point radar-point-normal radar-point-' + self.radarPointsSize[_util.random(self.radarPointsSize.length)] + '" style="left:' + Math.random() * self.radarPointArea + 'vh; top:' + Math.random() * self.radarPointArea + 'vh;"></div>');

                        popHtmlArr.push('<div class="radar-pop-info v-hidden" id="j-type-source">' + item.title + '<br>' + item.content + '</div>');
                        popHtmlArr.push('<div class="radar-pop-info" id="j-type-output"></div>');
                        popHtmlArr.push('<div class="radar-pop-tip v-hidden radar-pop-tip-' + item.level + '" id="j-radar-pop-tip">' + window.MOBIKE_DEVA_EYE.radar.tips[item.level] + '</div>');
                    }
                }

                // 正常点
                var normalSum = _util.random(window.MOBIKE_DEVA_EYE.radar.pointsMaxSum) + 1, n = 0;
                while (n < normalSum) {
                    htmlArr.push('<div class="radar-point radar-point-normal radar-point-' + self.radarPointsSize[_util.random(self.radarPointsSize.length)] + '" style="left:' + Math.random() * self.radarPointArea + 'vh; top:' + Math.random() * self.radarPointArea + 'vh;"></div>');
                    n++;
                }

                self.$radarPoints.html(htmlArr.join(''));
                self.$radarPop.html(popHtmlArr.join(''));

                // 打字效果
                var typing = new Typing({
                    source: document.getElementById('j-type-source'),
                    output: document.getElementById('j-type-output'),
                    delay: 30
                });
                typing.start();
                setTimeout(function () {
                    $('#j-radar-pop-tip').removeClass('v-hidden');
                }, 100);
            });

            // 自动更新数据
            setTimeout(function () {
                _view.updateRadar();
            }, window.MOBIKE_DEVA_EYE.radar.interval);
        },

        // 安全事件
        updateIssues: function () {
            this.$issues = this.$issues || $('#j-issues-ls');
            var self = this;
            var htmlArr = [];
            if (this.issueTimer) {
                clearTimeout(this.issueTimer);
            }

            _data.fetchData(window.MOBIKE_DEVA_EYE.issues.api, function (data) {
                for (var i = 0; i < data.length; i++) {
                    var className = data[i].warn ? 'issues-i issues-i-warn' : 'issues-i';
                    var href = data[i].url ? data[i].url : 'javascript:;';
                    htmlArr.push('<a class="' + className + '" href="' + href + '">');
                    htmlArr.push('<span style="line-height: 20px;">' + data[i].title + '</span>');
                    htmlArr.push('</a>');
                }
                self.$issues.html(htmlArr.join(''));

                // 滚动
                if (data.length > 8) {
                    _view.scrollView('j-issues-ls', 60);
                }
            });

            // 自动更新数据
            setTimeout(function () {
                _view.updateIssues();
            }, window.MOBIKE_DEVA_EYE.issues.interval);
        },

        // 滚动
        scrollView: function (id, interval, direction) {
            var self = this;
            var box = document.getElementById(id);
            var itemHeight = box.children[0].offsetHeight;
            var can = true;
            interval = interval || 1500;
            direction = direction === -1 ? -1 : 1;
            // 两份dom
            box.innerHTML += box.innerHTML;
            box.onmouseover = function () {
                can = false;
            };
            box.onmouseout = function () {
                can = true;
            };
            var max = parseInt(box.scrollHeight / 2);
            (function () {
                var stop = box.scrollTop % itemHeight === 0 && !can;
                if (!stop) {
                    var set = direction > 0 ? [max, 0] : [0, max];
                    box.scrollTop === set[0] ? (box.scrollTop = set[1]) : (box.scrollTop += direction);
                }
                self.issueTimer = setTimeout(arguments.callee, interval);
            }());
        }
    };

    // 获取数据
    var _data = {
        fetchData: function (url, callback) {
            $.get(url).done(function (data) {
                if (typeof callback === 'function' && data.status === 200 && data.data) {
                    callback(data.data);
                }
            });
        }
    };

    // util
    var _util = {
        random: function (lt) {
            return Math.floor(Math.random() * lt);
        }
    };

    // init
    _view.init();

    // resize
    $(window).on('resize', function () {
        _view.init();
    });

    // reload page
    setTimeout(function () {
        window.location.reload();
    }, 6 * 60 * 60 * 1000);
});
