﻿module AST {
    export class UiStrings_ZhCN extends UiStrings {
        constructor() {
            super();
        }

        // Common
        public largeDivideNum = 10000;
        private getTimeScaleText(timeScale: string) {
            if (timeScale == "Year")
                return "年度";
            else if (timeScale == "Quarter")
                return "季度";
            else
                return "每月";
        }

        public appTitle = "Sky Explorer";
        public departmentOfGeographyOSU = "俄亥俄州立大学，地理系";
        public developedBy = "开发人员：";
        public mapDataEsri = "地图数据：";
        public copyRightText = "版权所有：2014 ";
        public aboutAppUrl = "AboutApp_zhCN.html";

        public search = "搜索";
        public searchAirport = "搜索机场";
        public ok = "确定";
        public pleaseSelectInputOrigin = "请输入或选择起点机场";
        public airport = "机场";
        public close = "关闭";
        public loading = "载入中";
        public searchingAirportAndLoadingInfo = "搜索机场信息中……";
        public searchingAirlineAndLoadingInfo = "搜索航空公司信息中……";
        public applicationLoadingData = "程序正在初始化";

        public year = "年份";
        public destinations = "目的地";
        public subtitle = '用于研究航空历史数据的交互式WebGIS <a href="../../info/skyexplorer_t100.zhcn.html" style="text-decoration:underline">(更多信息)</a>';
        public aboutT100 = "关于T100";
        public aboutSkyExplorer = "关于Sky Explorer";
        public about = "关于";
        public airportDetailReport = "机场详细报告";
        public airportView = "机场视图";
        public airlineView = "航空公司视图";
        public viewDataBy = "请选择数据视图：";
        public from = "出发地";
        public to = "目的地";
        public noAvailableDataInThisYear = "当前年度没有数据";
        public pleaseSelectAirport = "请选择机场";
        public withFlowData = "有流量数据";
        public noFlowData = "    无流量数据";
        public largeAirport = "  主要机场";
        public mediumAirport = "  中等机场";
        public smallAirport = "  小机场";
        public passengerRouteMayHaveFreight = "客运/客货混合路线";
        public freightOnlyRoute = "纯货运路线";
        public passengerRouteWithoutFlowData = "客运线路（无数据）";
        public routeOnlyWithUsData = "仅有美国航空公司数据的路线";

        public route = "航线";
        public flow = "客货流";
        public directDistance = "大圆距离：";
        public totalDepartures = "总出发班次：";
        public totalPax = "总旅客人次: ";
        public totalPassenger = "总旅客人次: ";
        public totalFreight = "总货运运量: ";

        public showInfoFor = "选择要显示的信息";
        public passenger = "客运";
        public freight = "货运";
        public statistic = "基本统计";
        public shareSplit = "市场份额";
        public timeSeries = "时间趋势";
        public routeDetailReport = "路线详细报告";
        public airlineRankByPassenger = "航空公司排名（客运）";
        public airlineRankByFreight = "航空公司排名（货运）";
        public marketShareByPassenger = "航空公司市场份额（客运）";
        public marketShareByFreight = "航空公司市场份额（货运）";
        public timeSerierByPassenger = "旅客人数当年趋势";
        public timeSerierByFreight = "货运量当年趋势";
        public noDataAvailable = "该年度无数据";
        public metricData = "统计数据源：";
        public departureFreq = "出发班次";
        public paxFreq = "旅客人次";
        public passengerFreq = "旅客人次";
        public freightFreq = "货运运量";
        public tons = "吨";
        public viewDataFromOtherSourcesForThisRoute = "查看此路线其它数据源的数据： ";

        public dataSourceAndAirlines = "数据源与航空公司";
        public selectDataSource = "选择数据源";
        public filterRouteByAirline = "根据航空公司筛选数据";
        public all = "全部";

        public t100Airline = "T-100 航空公司";
        public pleaseSelectAnAirline = "请选择航空公司";
        public onlyTop400Routes = "仅显示运量前400的路线";
        public countryFilter = "筛选航空公司国家";
        public typeFilter = "筛选航空公司类型";
        public airline = "航空公司";
        public _airlineViewRouteTableFrom = "自";
        public _airlineViewRouteTableTo = "往";
        public _airlineTypeAll = "全部";
        public _airlineTypePassenger = "客运";
        public _airlineTypeCargo = "货运";
        public next = "后";
        public previous = "前";
        public regionalFilter = "地区筛选器";
        public regionalFilterAll = "所有路线";
        public regionalFilterUS = "美国国内路线";
        public regionalFilterIntl = "美国国际路线";

        public monthName: Array<string> = ['1月', '2月', '3月', '4月', '5月', '6月',
            '7月', '8月', '9月', '10月', '11月', '12月'];

        // Airline report page
        public airportStatistic = "机场统计";
        public basicStatistic = "基本统计";
        public region = "地区";
        public regionAll = "全部目的地";
        public regionDomestic = "国内目的地";
        public regionInternational = "国际目的地";

        public inXxxxYear = "在";
        public percentage = "百分比";
        public top10PassengerDestinations = "最繁忙航班目的地前10名（客运）";
        public top10FreightDestinations = "最繁忙航班目的地前10名（货运/吨）";
        public carrierShareByPassenger = "各航空公司客运市场份额";
        public carrierShareByFreight = "各航空公司货运市场份额";
        public showChartBy = "图表时间单位";
        public yearRange = "数据年份";
        public timeScaleYear = "年";
        public timeScaleQuarter = "季度";
        public timeScaleMonth = "月";
        public noAvailableDataForThisAirport = "该机场无数据。";
        public timeSeriesThisChartShowTimeScaleData(dataType: FlowType, timeScale: string): string {
            if (dataType == FlowType.Passenger) {
                if (timeScale != "Month")
                    return "单位：万人";
            }
            else {
                if (timeScale != "Month")
                    return "单位：万吨";
                return "单位：吨";
            }
        }

        public timeSeriesTotalPassengerInT100ByTimeScale(dataType: FlowType, timeScale: string): string {
            if (dataType == FlowType.Passenger)
                return this.getTimeScaleText(timeScale) + "旅客人次";
            else
                return this.getTimeScaleText(timeScale) + "货物运量";
        }
        // Route report page
        public aircraftUsage = "机型使用";
        public timeSeriesOfFlow = "流量时间趋势";
        public timeSeriesOfSeat = "座位时间趋势";
        public routeReportPageAirportFrom = "自： ";
        public routeReportPageAirportTo = "往： ";
        public allAirlinesSummary = "全部航空公司汇总： ";

        public allDeparture = "总出发班次";
        public allPassenger = "总旅客人数";
        public allFreight = "总货物运量";
        public allAirline = "全部航空公司";
        public totalAirline = "全部航空公司合计";
        public availableSeat = "供应座位数";
        public aircraftMarketShareByDeparture = "不同机型市场份额（根据出发班次）";
        public aircraftMarketShareByPassenger = "不同机型市场份额（根据旅客人次）";
        public aircraftMarketShareByFreight = "不同机型市场份额（根据货物运量）";
        public viewDataFromOtherSourcesForThisAirport = "查看其它数据源的数据：";
        public allStatConsistInboundOutboundTraffic = "统计数据为入港和出港客流的总和";

        // Simpale destination panel
        public passengerFlowMonthlyStat = "每月客流统计";
        public allDataAreInBothDirection = "备注：所有的数据都是双向统计数据（入港及出港）";
        public totalPassengerInThisYear = "该年旅客总人数: ";
        public monthInSummaryTable = "时间";

        public xArlineSummary(airline: string) {
            return airline + "汇总： ";
        }


        public routeStatistic = "路线统计";

        public constructPlaceName(country: string, subdiv: string, city: string): string {
            if (subdiv == "*" || subdiv == "" || subdiv == city)
                return country + "，" + city;
            return country + ", " + subdiv + ", " + city;
        }

        public constructDestNum(num: number): string {
            return "目的地 （总数目: " + num.toString() + "）";
        }
        public constructOriginNum(num: number): string {
            return "出发地 （总数目: " + num.toString() + "）";
        }
        public compareStr(a: string, b: string) {
            return a.localeCompare(b);
        }

        public constructAirlineWikiSpan(airlineWikiLink: HTMLElement, airlineName: string) {
            airlineWikiLink.innerHTML = "";
            var wikiLink = <HTMLAnchorElement>AST.Utils.createElement("a", { "text": "页面" });
            wikiLink.href = "#";
            wikiLink.onclick = () => {
                window.open("http://zh.wikipedia.org/wiki/" + airlineName, '_blank');
            };
            airlineWikiLink.appendChild(AST.Utils.createElement("span", { "text": "浏览该航空公司在维基百科的" }));
            airlineWikiLink.appendChild(wikiLink);
            airlineWikiLink.appendChild(AST.Utils.createElement("span", { "text": "以获取更多信息" }));
        }

        public constructAirlineViewFlowLegend(flow: number, airlineType: AirlineType) {
            var preFix = airlineType == AirlineType.Passenger
                ? "该年度旅客数目为 " : "该年度货运量（单位：吨）为 ";
            return preFix + flow;
        }

        public constructAirlineViewFlowLegendOrLess(flow: number, airlineType: AirlineType) {
            var preFix = airlineType == AirlineType.Passenger
                ? "该年度旅客人数小于 " : "该年度货运量（单位：吨）小于 ";
            return preFix + flow;
        }

        public yearFormalRepresentation(year: string) {
            return year + "年";
        }

        public formatBigNumber(n: number): string {
            if (n >= 10000) {
                var nk = (n / 10000).toFixed(1);
                return nk.toString() + "万";
            } else {
                return n.toString();
            }
        }

        public getMonthTickTemplate(yearGap: number): Object {
            var monthTickTemplate: any = { 1: "1月", 3: "3月", 5: "5月", 7: "7月", 9: "9月", 11: "11月" };
            if (yearGap >= 16) {
                monthTickTemplate = { 1: "1月", 7: "7月" };
            } else if (yearGap >= 10) {
                monthTickTemplate = { 1: "1月", 5: "5月", 9: "9月" };
            } else if (yearGap >= 5) {
                monthTickTemplate = { 1: "1月", 4: "4月", 7: "7月", 10: "10月" };
            }
            return monthTickTemplate;
        }

        public constructViewReverseRouteData(originCode: string, destCode: string) {
            return "查看反向路线（" + originCode + "往" + destCode + "）的数据";
        }

        public makeChangeLanguageDiv(div: HTMLElement) {
            div.innerHTML = "语言: <a href='main.html'>English</a>，中文";
        }
        public constructYearMonth(year: string, month: number) {
            return year + "年" + this.monthName[month];
        }

        // UK Dest Panel
        public ukDestPanelFootNote = this.allDataAreInBothDirection + "</br>部分航线可能有中停站。这些中停站并不在地图上显示。";
        public ukDataShortInfo = "英国CAA";
        public ukDataFullInfo = "英国CAA数据";
        public onlyTheDataOfRoutesTowardUK = "备注：只有前往英国境内机场的路线的数据。";
        public regionUkDest = "英国目的地";
        public getUkAirportReportPageFootNote(onlyUkDest: boolean): string {
            var res: string = "";
            if (onlyUkDest) res += this.onlyTheDataOfRoutesTowardUK;
            res += "所有统计数据为内统计数据为入港和出港客流数据总和。";
            return res;
        }

        // US T100 Data Source
        public usT100ShortInfo = "美国T100";
        public usT100FullInfo = "美国交通统计局T100数据";
        public regionAllCarrierUsDest = "所有航空公司 - 美国目的地";
        public regionUsCarrierAllDest = "美国航空公司 - 海外目的地";
        public onlyTheDataOfRoutesTowardUS = "备注：只有前往美国境内机场的路线的数据";

        // US T100FF Data Source
        public usT100FFShortInfo = "美国T100(FF)";
        public usT100FFFullInfo = "美国交通统计局T100(FF)数据";

        // Japan Data Source
        public jpDataShortInfo = "日本MLIT"
        public jpDataFullInfo = "日本国土交通省数据"
        public onlyTheDataOfRoutesTowardJapan = "备注：只有前往美国境内机场的路线的数据。";
        public regionJapanDest = "日本目的地";
        public getJapanAirportReportPageFootNote(onlyJapanDest: boolean): string {
            var res: string = "";
            res += this.onlyTheDataOfRoutesTowardJapan;
            res += "所有统计数据为内统计数据为入港和出港客流数据总和。";
            return res;
        }

        // Taiwan Data Source
        public twDataShortInfo = "台湾CAA";
        public twDataFullInfo = "台湾民用航空局数据";
        public onlyTheDataOfRoutesTowardTaiwan = "备注：只有前往台湾地区境内机场的路线的数据";
        public getTaiwanAirportReportPageFootNote(onlyTaiwanDest: boolean): string {
            var res: string = "";
            if (onlyTaiwanDest) res += this.onlyTheDataOfRoutesTowardTaiwan;
            res += "台湾地区内统计数据为入港和出港客流的总和。国际数据仅为出港。";
            return res;
        }
        public regionTaiwanDomesticDest = "台湾地区目的地";
        public regionTaiwanIntlDest = "国际/海峡两岸目的地";

        // Korea Data Source
        public krDataShortInfo = "韩国KAC";
        public krDataFullInfo = "韩国机场公社数据";
        public onlyTheDataOfRoutesTowardKorea = "备注：只有前往韩国境内机场（仁川机场除外）的路线的数据";
        public onlyTheDataOfDomesticRoutesKorea = "备注：只有韩国境内目的地的路线的数据";
        public regionKoreaDest = "韩国目的地";

        // Wikipedia Data
        public wikiDataShortInfo = "维基百科";
        public wikiDataFullInfo = "维基百科机场信息";
        public wikiAirlinesOperatingThisRoute = "运营该线路的航空公司"
        public seasonalRoute = " - 季节性服务";
    }
} 