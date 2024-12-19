countries = [
    {"date":"1 January","name":"Brunei","year":"1984"},
    {"date":"1 January","name":"Sudan","year":"1956"},
    {"date":"4 January","name":"Myanmar","year":"1948"},
    {"date":"31 January","name":"Nauru","year":"1968"},
    {"date":"4 February","name":"Sri Lanka","year":"1948"},
    {"date":"7 February","name":"Grenada","year":"1974"},
    {"date":"18 February","name":"The Gambia","year":"1965"},
    {"date":"22 February","name":"Saint Lucia","year":"1979"},
    {"date":"28 February","name":"Egypt","year":"1922"},
    {"date":"6 March","name":"Ghana","year":"1957"},
    {"date":"12 March","name":"Mauritius","year":"1968"},
    {"date":"18 April","name":"Zimbabwe","year":"1980"},
    {"date":"27 April","name":"Sierra Leone","year":"1961"},
    {"date":"14 May","name":"Israel","year":"1948"},
    {"date":"25 May","name":"Jordan","year":"1946"},
    {"date":"26 May","name":"Guyana","year":"1966"},
    {"date":"4 June","name":"Tonga","year":"1970"},
    {"date":"19 June","name":"Kuwait","year":"1961"},
    {"date":"26 June","name":"Somaliland","year":"1960"},
    {"date":"29 June","name":"Seychelles","year":"1976"},
    {"date":"4 July","name":"United States","year":"1776"},
    {"date":"6 July","name":"Malawi","year":"1964"},
    {"date":"7 July","name":"Solomon Islands","year":"1978"},
    {"date":"10 July","name":"The Bahamas","year":"1973"},
    {"date":"12 July","name":"Kiribati","year":"1979"},
    {"date":"26 July","name":"Maldives","year":"1965"},
    {"date":"30 July","name":"Vanuatu","year":"1980"},
    {"date":"6 August","name":"Jamaica","year":"1962"},
    {"date":"14 August","name":"Pakistan","year":"1947"},
    {"date":"15 August","name":"Bahrain","year":"1971"},
    {"date":"15 August","name":"India","year":"1947"},
    {"date":"16 August","name":"Cyprus","year":"1960"},
    {"date":"19 August","name":"Afghanistan","year":"1919"},
    {"date":"31 August","name":"Trinidad and Tobago","year":"1962"},
    {"date":"31 August","name":"Malaya","year":"1957"},
    {"date":"3 September","name":"Qatar","year":"1971"},
    {"date":"6 September","name":"Eswatini","year":"1968"},
    {"date":"19 September","name":"Saint Kitts and Nevis","year":"1983"},
    {"date":"21 September","name":"Belize","year":"1981"},
    {"date":"21 September","name":"Malta","year":"1964"},
    {"date":"30 September","name":"Botswana","year":"1966"},
    {"date":"1 October","name":"Tuvalu","year":"1978"},
    {"date":"1 October","name":"Nigeria","year":"1960"},
    {"date":"3 October","name":"Iraq","year":"1932"},
    {"date":"4 October","name":"Lesotho","year":"1966"},
    {"date":"9 October","name":"Uganda","year":"1962"},
    {"date":"10 October","name":"Fiji","year":"1970"},
    {"date":"24 October","name":"Zambia","year":"1964"},
    {"date":"27 October","name":"Saint Vincent and the Grenadines","year":"1979"},
    {"date":"1 November","name":"Antigua and Barbuda","year":"1981"},
    {"date":"3 November","name":"Dominica","year":"1978"},
    {"date":"30 November","name":"South Yemen","year":"1967"},
    {"date":"30 November","name":"Barbados","year":"1966"},
    {"date":"2 December","name":"United Arab Emirates","year":"1971"},
    {"date":"9 December","name":"Tanganyika","year":"1961"},
    {"date":"10 December","name":"Zanzibar","year":"1963"},
    {"date":"12 December","name":"Kenya","year":"1963"},
    {"date":"20 December","name":"Oman","year":"1970"},
    {"date":"24 December","name":"Libya","year":"1951"}
]

const today = new Date();

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]; 
const day = today.getDate(); // Returns the day of the month (1-31)
const month = monthNames[today.getMonth()]; // Returns the month (0-11), so we add 1

const today_date = day + " " + month;

var date_found = false;

for (var i = 0; i < countries.length; i++) {
    if (countries[i].date == today_date) {
        date_found = true;
    }
}

if (date_found) {
    document.getElementById("answer").innerHTML = "Yes.";
} else {
    document.getElementById("answer").innerHTML = "No.";
}

// document.getElementById("answer").innerHTML = "Today is day " + day + " of month " + month + ". Now go check Wikipedia.";