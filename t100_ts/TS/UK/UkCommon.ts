﻿module AST {
    export module UkData {

        export class UkHTMLPageData {
            static loadHTMLData() {
                var deferred = $.Deferred();

                var deferred1 = $.Deferred();

                $.when(deferred1).then(function () {
                    deferred.resolve();
                });

                $("#ukDestBarInnerDiv").load("UkPart.html #ukDestBarInnerDivContent", () => { deferred1.resolve(); });
                return deferred.promise();
            }
        }

        export class UkMetaData extends AST.DataSourceMetaData {
            constructor() {
                super();

                this.name = "UkData";
                this.shortInfo = "UK CAA";
                this.fullInfo = "UK CAA Data";
                this.aboutSrcPageUrl = "DataSourceInfo/UkCaa.html";
                this.supportAirportReportPage = true;
                this.country = "GB";
                this.startTime = new YearMonth(2008, 1);
                this.endTime = new YearMonth(2015, 6);
                this.timeUnit = TimeUnit.Month;
                this.statTarget = StatTarget.Route;
            }

            static currentCountry = "GB";
            static hasMonthData = true;
            static dataFrom = new YearMonth(2008, 1);
            static dataTo = new YearMonth(2015, 6);

            private static _instance = null;
            static instance() {
                if (!UkMetaData._instance)
                    UkMetaData._instance = new UkMetaData();
                return UkMetaData._instance;
            }

            public getDestPanelFootNote(): string {
                return Localization.strings.ukDestPanelFootNote;
            }

            public getShortInfoLocalizeName(): string {
                return Localization.strings.ukDataShortInfo;
            }
            public getFullInfoLocalizeName(): string {
                return Localization.strings.ukDataFullInfo;
            }

            public dateFrom() {
                return UkMetaData.dataFrom;
            }

            public dataTo() {
                return UkMetaData.dataTo;
            }
            public getDomesticCountryDestName(): string {
                return Localization.strings.regionUkDest;
            }
            public getAirportReportPageFootnote(airport: Airport): string {
                return Localization.strings.getUkAirportReportPageFootNote(this.country != airport.country);
            }

            public getRouteReportPageFootnote(originAirport: Airport, destAirport: Airport): string {
                return Localization.strings.allStatConsistInboundOutboundTraffic;
            }
        }

        export class UKAirportMetaData extends UkMetaData {
            constructor() {
                super();
                this.name = "UkAirportData";
                this.startTime = new YearMonth(2003, 1);
                this.endTime = new YearMonth(2015, 6);
                this.statTarget = StatTarget.Airport;
            }

            private static _ukAirportDataInstance = null;
            static instance() {
                if (!UKAirportMetaData._ukAirportDataInstance)
                    UKAirportMetaData._ukAirportDataInstance = new UKAirportMetaData();
                return UKAirportMetaData._ukAirportDataInstance;
            }
        }
    }
} 