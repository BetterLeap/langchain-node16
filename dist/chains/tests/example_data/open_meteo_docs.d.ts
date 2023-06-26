export declare const OPEN_METEO_DOCS = "BASE URL: https://api.open-meteo.com/\n\nAPI Documentation\nThe API endpoint /v1/forecast accepts a geographical coordinate, a list of weather variables and responds with a JSON hourly weather forecast for 7 days. Time always starts at 0:00 today and contains 168 hours. All URL parameters are listed below:\n\nParameter\tFormat\tRequired\tDefault\tDescription\nlatitude, longitude\tFloating point\tYes\t\tGeographical WGS84 coordinate of the location\nhourly\tString array\tNo\t\tA list of weather variables which should be returned. Values can be comma separated, or multiple &hourly= parameter in the URL can be used.\ndaily\tString array\tNo\t\tA list of daily weather variable aggregations which should be returned. Values can be comma separated, or multiple &daily= parameter in the URL can be used. If daily weather variables are specified, parameter timezone is required.\ncurrent_weather\tBool\tNo\tfalse\tInclude current weather conditions in the JSON output.\ntemperature_unit\tString\tNo\tcelsius\tIf fahrenheit is set, all temperature values are converted to Fahrenheit.\nwindspeed_unit\tString\tNo\tkmh\tOther wind speed speed units: ms, mph and kn\nprecipitation_unit\tString\tNo\tmm\tOther precipitation amount units: inch\ntimeformat\tString\tNo\tiso8601\tIf format unixtime is selected, all time values are returned in UNIX epoch time in seconds. Please note that all timestamp are in GMT+0! For daily values with unix timestamps, please apply utc_offset_seconds again to get the correct date.\ntimezone\tString\tNo\tGMT\tIf timezone is set, all timestamps are returned as local-time and data is returned starting at 00:00 local-time. Any time zone name from the time zone database is supported. If auto is set as a time zone, the coordinates will be automatically resolved to the local time zone.\npast_days\tInteger (0-2)\tNo\t0\tIf past_days is set, yesterday or the day before yesterday data are also returned.\nstart_date\nend_date\tString (yyyy-mm-dd)\tNo\t\tThe time interval to get weather data. A day must be specified as an ISO8601 date (e.g. 2022-06-30).\nmodels\tString array\tNo\tauto\tManually select one or more weather models. Per default, the best suitable weather models will be combined.\n\nVariable\tValid time\tUnit\tDescription\ntemperature_2m\tInstant\t\u00B0C (\u00B0F)\tAir temperature at 2 meters above ground\nsnowfall\tPreceding hour sum\tcm (inch)\tSnowfall amount of the preceding hour in centimeters. For the water equivalent in millimeter, divide by 7. E.g. 7 cm snow = 10 mm precipitation water equivalent\nrain\tPreceding hour sum\tmm (inch)\tRain from large scale weather systems of the preceding hour in millimeter\nshowers\tPreceding hour sum\tmm (inch)\tShowers from convective precipitation in millimeters from the preceding hour\nweathercode\tInstant\tWMO code\tWeather condition as a numeric code. Follow WMO weather interpretation codes. See table below for details.\nsnow_depth\tInstant\tmeters\tSnow depth on the ground\nfreezinglevel_height\tInstant\tmeters\tAltitude above sea level of the 0\u00B0C level\nvisibility\tInstant\tmeters\tViewing distance in meters. Influenced by low clouds, humidity and aerosols. Maximum visibility is approximately 24 km.";