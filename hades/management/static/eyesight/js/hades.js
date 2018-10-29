// 配置
// api: 接口地址
// interval: 数据刷新时间间隔 ms
// animationInterval: 动画重载间隔 ms
window.MOBIKE_HADES = window.MOBIKE_HADES || {
    colors: ['#dcfa14', '#ffb64d', '#fc4513', '#53e900', '#805bce', '#149cfa', '#e736c4', '#f03153', '#01dcfc', '#fcb508', '#00c08d'],
    jump: {
        api: 'jump.do/',
        interval: 5 * 60 * 1000,
        animationInterval: 5000
    },
    login: {
        api: 'login.do/',
        interval: 5 * 60 * 1000,
        animationInterval: 5000
    },
    attack: {
        api: 'attack.do/',
        interval: 5 * 60 * 1000,
        animationInterval: 5000
    },
    country: {
        api: 'country.do/',
        interval: 5 * 60 * 1000,
        animationInterval: 5000
    },
    violence: {
        api: 'violence.do/',
        interval: 5 * 60 * 1000,
        animationInterval: 5000
    },
    leak: {
        api: 'leak.do/',
        interval: 5 * 60 * 1000,
        animationInterval: 5000
    },
    channel: {
        animationInterval: 5000
    },
    host: {
        api: 'host.do/',
        interval: 5 * 60 * 1000,
        animationInterval: 5000
    }
};

// ready
$(document).ready(function () {
    // 接口、图标配置
    var config = {
        countUpOptions: {
            useEasing: true,
            useGrouping: true,
            separator: ',',
            decimal: '.'
        },
        jump: {
            option: {
                grid: {
                    top: '20%',
                    left: 0,
                    right: '14%',
                    bottom: 0,
                    containLabel: true
                },
                xAxis: [
                    {
                        show: true,
                        name: '时间',
                        type: 'category',
                        boundaryGap: false,
                        data: [],
                        nameTextStyle: {
                            color: '#fff',
                            fontSize: '10',
                            align: 'left'
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: '#2e87a5',
                                opacity: 0.1
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
                                opacity: 0.1
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
                        showSymbol: true,
                        symbol: 'circle',
                        symbolSize: 5,
                        lineStyle: {
                            normal: {
                                color: '#6ffdda',
                                width: 1
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#6ffdda'
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(55, 57, 95, 1)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(55, 57, 95, 0)'
                                    }],
                                }
                            }
                        }
                    }
                ]
            }
        },
        violence: {
            option: {
                responsive: true,
                legend: {
                    display: false
                },
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 20,
                        bottom: 0
                    }
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            fontColor: '#fff'
                        },
                        gridLines: {
                            display: false
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            fontColor: '#fff'
                        },
                        gridLines: {
                            drawBorder: false,
                            color: ['#061b47','#061b47','#061b47','#061b47','#061b47','#061b47'],
                            tickMarkLength: 0
                        }
                    }]
                }
            }
        }
    };

    // view
    var _view = {
        jump: null,
        violence: null,
        $violenceCtx: null,
        $loginItem: null,
        loginCountUp: [],
        $attackItem: null,
        attackCountUp: [],
        $countryLabel: null,
        $countryBox: null,
        countryBubbleSize: ['xs', 's', 'm', 'l', 'xl'],
        $leakItem: null,
        $channelStoreList: null,
        $hostLabel: null,
        $hostList: null,

        // 初始化
        init: function () {
            _view.update();
        },

        // update
        update: function () {
            _view.updateJump();
            _view.updateLogin();
            _view.updateAttack();
            _view.updateCountry();
            _view.updateViolence();
            _view.updateLeak();
            _view.updateChannel();
            _view.updateHost();
        },

        // 跳板机使用异常
        updateJump: function () {
            var self = this;
            var reloadInterval = null;

            _data.fetchData(window.MOBIKE_HADES.jump.api, function (data) {
                config.jump.option.xAxis[0].data = data.x;
                config.jump.option.series[0].data = data.y;
                // paint
                self.jump = self.jump || echarts.init(document.getElementById('j-jump'));
                self.jump.setOption(config.jump.option);
            });

            // 自动更新数据
            setTimeout(function () {
                clearInterval(reloadInterval);
                _view.updateJump();
            }, window.MOBIKE_HADES.jump.interval);

            reloadInterval = setInterval(function () {
                var jumpOption = self.jump.getOption();
                self.jump.clear();
                self.jump.setOption(jumpOption);
            }, window.MOBIKE_HADES.jump.animationInterval)
        },

        // 主机登录情况
        updateLogin: function () {
            var self = this;
            var resData = [];
            var reloadInterval = null;
            this.$loginItem = this.$loginItem || $('.j-login-item');

            _data.fetchData(window.MOBIKE_HADES.login.api, function (data) {
                resData = data;
                _render();
            });

            function _render () {
                self.$loginItem.map(function (index, item) {
                    $(item).html('<div>' + resData[index].label + '<div id="j-login-count-' + index + '">0</div></div>')
                });

                self.loginCountUp = [];

                for (var i = 0; i < Math.min(resData.length, self.$loginItem.length); i++) {
                    self.loginCountUp.push(new CountUp('j-login-count-' + i, 0, 0, 0, 1, config.countUpOptions));
                }

                self.loginCountUp.forEach(function (item, index) {
                    self.loginCountUp[index].start();
                    self.loginCountUp[index].update(resData[index].value);
                });
            }

            // 自动更新数据
            setTimeout(function () {
                clearInterval(reloadInterval);
                _view.updateLogin();
            }, window.MOBIKE_HADES.login.interval);

            reloadInterval = setInterval(function () {
                _render();
            }, window.MOBIKE_HADES.login.animationInterval)
        },

        // 木马、后门攻击
        updateAttack: function () {
            var self = this;
            var resData = [];
            var reloadInterval = null;
            this.$attackItem = this.$attackItem || $('.j-attack-item');

            _data.fetchData(window.MOBIKE_HADES.attack.api, function (data) {
                resData = data;
                _render();
            });

            function _render () {
                self.$attackItem.map(function (index, item) {
                    $(item).html('<div>' + resData[index].label + '<div id="j-attack-count-' + index + '">0</div></div>')
                });

                self.attackCountUp = [];

                for (var i = 0; i < Math.min(resData.length, self.$attackItem.length); i++) {
                    self.attackCountUp.push(new CountUp('j-attack-count-' + i, 0, 0, 0, 1, config.countUpOptions));
                }

                self.attackCountUp.forEach(function (item, index) {
                    self.attackCountUp[index].start();
                    self.attackCountUp[index].update(resData[index].value);
                });
            }

            // 自动更新数据
            setTimeout(function () {
                clearInterval(reloadInterval);
                _view.updateAttack();
            }, window.MOBIKE_HADES.attack.interval);

            reloadInterval = setInterval(function () {
                _render();
            }, window.MOBIKE_HADES.attack.animationInterval);
        },

        // 国家散点图
        updateCountry: function () {
            var self = this;
            var reloadInterval = null;
            var boxArr = [];
            var labelArr = [];
            var resData = [];
            var countryObj = {};
            var colors = [].concat(window.MOBIKE_HADES.colors);
            this.$countryLabel = this.$countryLabel || $('#j-country-label');
            this.$countryBox = this.$countryBox || $('#j-country-box');

            _data.fetchData(window.MOBIKE_HADES.country.api, function (data) {
                resData = data;
                _render();
            });

            function _render () {
                resData.forEach(function (item, index) {
                    boxArr.push('<div class="country-chart-column">');
                    boxArr.push('<div class="country-chart-scale">' + item.time + '</div>');
                    item.values.forEach(function (bubbleItem, bubbleIndex) {
                        if (!countryObj[bubbleItem.country]) {
                            if (colors.length === 0) {
                                colors = [].concat(window.MOBIKE_HADES.colors);
                            }
                            // 收集国家数据，并分配颜色
                            countryObj[bubbleItem.country] = colors.splice(0, 1)[0];
                        }
                        // 渲染小球，大小随机
                        boxArr.push('<div class="country-chart-bubble size-' + self.countryBubbleSize[_util.random(self.countryBubbleSize.length)] + '" style="background: ' + countryObj[bubbleItem.country] + '"></div>');
                    });
                    boxArr.push('</div>');
                });

                // 根据收集的国家数据，渲染图例
                for (var country in countryObj) {
                    if (countryObj.hasOwnProperty(country)) {
                        labelArr.push('<div class="country-label-item"><span style="background: ' + countryObj[country] + '"></span>' + country + '</div>');
                    }
                }

                // render
                self.$countryLabel.html(labelArr.join(''));
                self.$countryBox.html(boxArr.join(''));
            }

            // 自动更新数据
            reloadInterval = setTimeout(function () {
                _view.updateCountry();
            }, window.MOBIKE_HADES.country.interval)
        },

        // 主机攻击暴力态势
        updateViolence: function () {
            var self = this;
            var reloadInterval = null;
            var resData = null;
            this.$violenceCtx = this.$violenceCtx || document.getElementById('j-violence-chart').getContext('2d');

            _data.fetchData(window.MOBIKE_HADES.violence.api, function (data) {
                resData = data;
                _render();
            });

            function _render() {
                self.violence = new Chart(self.$violenceCtx, {
                    type: 'line',

                    data: {
                        labels: resData.x,
                        datasets: [
                            {
                                backgroundColor: '#01b4c8',
                                borderColor: '#01b4c8',
                                pointBackgroundColor: 'transparent',
                                pointBorderColor: 'transparent',
                                data: resData.y.ip,
                            },
                            {
                                backgroundColor: '#013c4e',
                                borderColor: '#013c4e',
                                pointBackgroundColor: 'transparent',
                                pointBorderColor: 'transparent',
                                data: resData.y.unusual,
                            }
                        ]
                    },

                    options: config.violence.option
                });
            }

            // // 自动更新数据
            setTimeout(function () {
                clearInterval(reloadInterval);
                _view.updateViolence();
            }, window.MOBIKE_HADES.violence.interval);

            reloadInterval = setInterval(function () {
                _render();
            }, window.MOBIKE_HADES.violence.animationInterval);
        },

        // 漏洞监控
        updateLeak: function () {
            var self = this;
            var resData = [];
            var reloadInterval = null;
            this.$leakItem = this.$leakItem || $('.j-leak-item');

            _data.fetchData(window.MOBIKE_HADES.leak.api, function (data) {
                resData = data;
                _render();
            });

            function _render () {
                self.$leakItem.map(function (index, item) {
                    $(item).html('<div>' + resData[index] + '</div>');
                });
            }

            // 自动更新数据
            setTimeout(function () {
                clearInterval(reloadInterval);
                _view.updateLeak();
            }, window.MOBIKE_HADES.leak.interval);

            reloadInterval = setInterval(function () {
                _render();
            }, window.MOBIKE_HADES.leak.animationInterval);
        },

        // app 渠道监控
        updateChannel: function () {
            var reloadInterval = null;
            // 随机渠道
            var randomArr = [1, 2, 3, 4, 5, 6].sort(function () {
                return 0.5 - Math.random();
            });
            this.$channelStoreList = this.$channelStoreList || $('.j-channel-store');

            for (var i = 0; i < randomArr.length; i++) {
                this.$channelStoreList.eq(i).css('background-image', 'url(/static/eyesight/img/hades/channel-' + randomArr[i] + '.png)');
            }

            // 自动更新数据
            reloadInterval = setTimeout(function () {
                _view.updateChannel();
            }, window.MOBIKE_HADES.channel.animationInterval)
        },

        // 风险主机TOP5
        updateHost: function () {
            var self = this;
            var reloadInterval = null;
            var resData = [];
            this.$hostLabel = this.$hostLabel || $('#j-host-label');
            this.$hostList = this.$hostList || $('#j-host-list');

            _data.fetchData(window.MOBIKE_HADES.host.api, function (data) {
                resData = data;
                _render();
            });

            function _render () {
                var htmlLabel = [];
                var htmlList = [];
                if (resData.label) {
                    for (var i = 0; i < Math.min(resData.label.length, 5); i++) {
                        htmlLabel.push('<div class="host-label-item">');
                        htmlLabel.push('<span class="host-color-' + (i + 1) + '"></span>' + resData.label[i]);
                        htmlLabel.push('</div>');
                    }
                }
                if (resData.ip) {
                    for (var i = 0; i < Math.min(resData.ip.length, 5); i++) {
                        var item = resData.ip[i];
                        htmlList.push('<div class="host-item">');
                        htmlList.push('<div class="host-risk-ip">' + item.ip + '</div>');
                        htmlList.push('<div class="host-risk-value">');
                        item.percent.forEach(function (percentItem, percentIndex) {
                            htmlList.push('<div class="host-risk-value-i host-color-' + (percentIndex + 1) + '" style="width: ' + percentItem + '%"></div>');
                        });
                        htmlList.push('</div>');
                        htmlList.push('<div class="host-risk-value-sum">' + item.sum + '</div>');
                        htmlList.push('</div></div>');
                    }
                }

                self.$hostLabel.html(htmlLabel.join(''));
                self.$hostList.html(htmlList.join(''));
            }

            // 自动更新数据
            setTimeout(function () {
                clearInterval(reloadInterval);
                _view.updateHost();
            }, window.MOBIKE_HADES.host.interval);

            reloadInterval = setInterval(function () {
                _render();
            }, window.MOBIKE_HADES.host.animationInterval)
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
