﻿module AST {
    export class Point {
        public x: number;
        public y: number;
        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }

    export class Airport {
        public iata: string;
        public icao: string;
        public city: string;
        public country: string;
        public name: string;   
        public countryEn: string; // The English name of country     
        public nameEn: string; // The English name of airport name
        public cityEn: string; // The English name of city
        public geom: AST.Point = null;
        public geomO: OpenLayers.Geometry = null; // OpenLayers geom

        constructor(icao: string, iata: string, country: string, city: string, name: string, geom: AST.Point) {
            this.icao = icao;
            this.iata = iata;            
            this.city = city;
            this.country = country;
            this.name = name;
            this.geom = geom;
        }
    }

    export class Airline {
        public code: string;
        public iata: string;
        public name: string;
        public country: string;
        public type: AirlineType;
        public note: string;

        constructor(code: string, iata: string, name: string, country: string, type: string, note: string) {
            this.code = code;
            this.iata = iata;
            this.name = name;
            this.country = country;
            if (type == "Passenger")
                this.type = AirlineType.Passenger;
            else
                this.type = AirlineType.CargoOnly;
            this.note = note;
        }

        static getDisplayName(code: string): string {
            var iata = GlobalMetaData.airlineDict[code].iata;
            var name = GlobalMetaData.airlineDict[code].name;
            return name + " (" + iata + ")";
        }
    }

    export class YearMonth {
        public year: number;
        public month: number;
        constructor(year: number, month: number) {
            this.year = year;
            this.month = month;
        }
    }

    export class DistInfo {
        public distKm: number;
        public distNm: number;
        public distMile: number;
        constructor(distKm: number, distNm: number, distMile: number) {
            this.distKm = distKm;
            this.distNm = distNm;
            this.distMile = distMile;
        }
    }

    /// The destination with route geometry and basic statistic
    export class DestInfo {
        public airport: Airport = null;
        public dataSource: string = "";
        public sumPax: number;
        public sumFreight: number;
        public routeGeomS: string; // Geometry in string
        public routeGeomO: Array<OpenLayers.Feature.Vector>; // Geometry in OpenLayers 
        public availableData: Array<DataSrcDestInfo>;

        constructor() {
            this.availableData = [];
        }
        public hasPaxFlow(): boolean {
            for (var i = 0; i < this.availableData.length; i++) {
                if (this.availableData[i].totalPax) {
                    return true;
                }
                return false;
            }
        }

        public isPartialData(): boolean {
            for (var i = 0; i < this.availableData.length; i++) {
                if (!this.availableData[i].partialData) {
                    return false;
                }
                return true;
            }
        }
        public isNoData(): boolean {
            for (var i = 0; i < this.availableData.length; i++) {
                if (!this.availableData[i].noData) {
                    return false;
                }
            }
            return true;
        }
    }

    export class DataSrcDestInfo {
        public dataSrcName: string;
        public totalPax: number;
        public totalFreight: number;
        public partialData: boolean;
        public noData: boolean;

        constructor(dataSrcName, totalPax, totalFreight, partialData, noData) {
            this.dataSrcName = dataSrcName;
            this.totalPax = totalPax;
            this.totalFreight = totalFreight;
            this.partialData = partialData;
            this.noData = noData;
        }
    }

    export class RouteRecord {
        public airline: string = null;
        public departure: number = null;
        public pax: number = null;
        public freight: number = null;
        public monthDeparture: Array<number> = null;
        public monthPax: Array<number> = null;
        public monthFreight: Array<number> = null;
    }

    export enum AirlineType {
        Passenger, CargoOnly
    }

    export enum FlowType {
        Passenger, Freight
    }
    export class DataSourceRegister {
        static nameMap = {};
        static dataSrcList: Array<DataSourceMetaData> = [];

        static registerDataSource(name: string, info: DataSourceMetaData) {
            DataSourceRegister.dataSrcList.push(info);
            DataSourceRegister.nameMap[name] = info;
        }

        
        static queryInfo(name: string): DataSourceMetaData {
            return DataSourceRegister.nameMap[name];
        }
    }

    // Meta data for each data source
    export class DataSourceMetaData {
        public name: string;
        public shortInfo: string;
        public fullInfo: string;
        public aboutSrcPageUrl: string;
        public supportAirportReportPage: boolean;
        public country: string;

        constructor() {
            this.supportAirportReportPage = false;
        }

        public getDestPanelFootNote(): string {
            return "";
        }

        public getShortInfoLocalizeName(): string {
            return "";
        }
        public getFullInfoLocalizeName(): string {
            return "";
        }

        public dateFrom() {
            return GlobalMetaData.dataFrom;
        }

        public dataTo() {
            return GlobalMetaData.dataTo;
        }

        public getDomesticCountryDestName(): string {
            return "";
        }

        public setAirportReportPageRegion(airportCountry: string, year: string, airportStat, regionItems: Array<string>, regionDisplayText: Array<string>) {
            var hasDomesticFlow: boolean = airportStat["Domestic"].totalPax != "0" || airportStat["Domestic"].totalFreight != "0";
            var hasIntlFlow: boolean = airportStat["International"].totalPax != "0" || airportStat["International"].totalFreight != "0";
            var localCountry: boolean = this.country == airportCountry;
            if (localCountry && hasDomesticFlow && hasIntlFlow) {
                regionDisplayText.push(Localization.strings.regionAll);
                regionItems.push("All");
            }

            if (hasDomesticFlow) {
                regionDisplayText.push(localCountry ? Localization.strings.regionDomestic : this.getDomesticCountryDestName());
                regionItems.push("Domestic");
            }

            if (hasIntlFlow) {
                regionDisplayText.push(Localization.strings.regionInternational); // It should not be international destinations for international origin, except T100 FF data.
                regionItems.push("International");
            }
        }

        // Return the footnote for the airport report page
        public getAirportReportPageFootnote(airport: Airport): string {
            return "";
        }
    }
}