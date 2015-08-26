﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using Npgsql;

namespace AST {

    public class AirportAvailabilityActor {
        // TODO: Pay attention to T100FF data
        public static string QueryAirportYearAvailability( string airportCode, string codeType, string dataSrc, string locale ) {
            NpgsqlConnection conn = null;
            try {
                conn = new NpgsqlConnection( ASTDatabase.connStr2 );
                conn.Open();
                string sql = string.Format( @"SELECT ""AVAILABILITY"", ""DATA_SOURCE"" FROM ""AirportAvailability"" WHERE ""CODE"" = '{0}' AND ""DATA_SOURCE"" ='{1}'",
                    airportCode, dataSrc );

                NpgsqlCommand command = new NpgsqlCommand( sql, conn );
                NpgsqlDataReader dr = command.ExecuteReader();

                Airport airport = AirportData.Query( airportCode, locale );
                if ( airport == null ) return "";

                while ( dr.Read() ) {
                    Dictionary<string, object> res = new Dictionary<string, object>() {
                        {"yearAvailability", dr[ "AVAILABILITY" ].ToString()}
                    };
                    return new JavaScriptSerializer().Serialize( res );
                }

            } finally {
                conn.Close();
            }
            return "";
        }

        /// <summary>
        /// Query the available data sources of an aiport, regardless year.
        /// </summary>
        public static string QueryAirportAvailableDataSource( string airportCode, string locale ) {
            Airport airport = AirportData.Query( airportCode, locale );
            if ( airport == null ) return "";

            NpgsqlConnection conn = null;
            try {
                conn = new NpgsqlConnection( ASTDatabase.connStr2 );
                conn.Open();

                string sql = string.Format( @"SELECT ""DATA_SOURCE"" FROM ""AirportAvailability"" WHERE ""CODE"" = {0}", Utils.SingleQuoteStr( airportCode ) );
                NpgsqlCommand command = new NpgsqlCommand( sql, conn );
                NpgsqlDataReader dr = command.ExecuteReader();

                List<string> lstResult = new List<string>();

                while ( dr.Read() ) {
                    string dataSrc = dr[ "DATA_SOURCE" ].ToString();
                    if ( dataSrc == "ConnectionData" ) continue; //TODO
                    ADataSourceMetaData metaData = DataSourceRegister.GetDataSrc( dataSrc );
                    if ( metaData == null || metaData.StatTarget == StatTarget.Airport )
                        continue;
                    if ( metaData.Country == airport.Country ) {
                        // Primary data source
                        lstResult.Insert( 0, dataSrc ); 
                    } else {
                        lstResult.Add( dataSrc );
                    }
                }
                Dictionary<string, object> res = new Dictionary<string, object>() {
                    {"BasicStat", lstResult},
                    {"TimeSeries", TimeSeriesActor.QueryAirportTimeSeriesAvailability(airportCode)},
                    {"Airport", new Dictionary<string, object>() {
                            {"iata", airport.Iata},
                            {"icao", airport.Icao},
                            {"country", airport.Country},
                            {"city", airport.ServeCity[0]},
                            {"countryL", CountryData.QueryCountry(locale, airport.Country).Name},
                            {"serveCityL", City.LocalizeCountryAndSubdiv(locale, airport.ServeCity[0])},
                            {"name", airport.FullName},
                            {"note", airport.Note},
                            {"nameEn", airport.FullName},
                            {"cityEn", airport.ServeCity[0]}
                        }                        
                   }
                };
                return new JavaScriptSerializer().Serialize( res );
            } finally {
                conn.Close();
            }
            return "";
        }

    }
}