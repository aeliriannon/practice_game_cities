'use strict';

let commonCitiesList = ["Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown" ]
      .map(item => item.toLowerCase());

let progressGame = {    
    firstPerson: commonCitiesList.filter(item => item.length >= 6),
    secondPerson: commonCitiesList.filter(item => {
        let counter = 0; 
        for (let char of item) {  
            if (char === 'a' || char === 'A' || char === 'i' || char === 'I' || char === 'E' || char === 'e' || char === 'O' || char === 'o' || char === 'U' || char === 'u' || char === 'Y' || char === 'y') {
                counter += 1;
            } 
        }
        if (counter >= 3) { 
            return item;
        }
    })    
};
let arrayGameList = Object.entries(progressGame)//?????????????? ??????????????
      .filter(item => item[0] === 'firstPerson'|| item[0] === 'secondPerson'),
      currentArray = randomGenerator(arrayGameList),// ?????????????? ????????????
      currentCity = randomGenerator(currentArray[1]),//?????????????? ??????????
      currentMove = () => console.log(`${currentArray[0]}: ${currentCity}`); //?????????? ????????????

    

function randomGenerator(item) {
    let randomItem = item[Math.floor(Math.random() * item.length)];
    return randomItem; 
}

function changePerson() {    
    if (currentArray[0] === "firstPerson") { 
       return (currentArray = arrayGameList[1]); 
    } else {
        return (currentArray = arrayGameList[0]);  
    }
    
}

function definitionCurrentCity(cWord) { 
    progressGame.firstPerson = commonCitiesList.filter(item => item.length >= 6);   
    progressGame.secondPerson = commonCitiesList.filter(item => {
        let counter = 0; 
        for (let char of item) {  
            if (char === 'a' || char === 'A' || char === 'i' || char === 'I' || char === 'E' || char === 'e' || char === 'O' || char === 'o' || char === 'U' || char === 'u' || char === 'Y' || char === 'y') {
                counter += 1;
            } 
        }
        if (counter >= 3) { 
            return item;
        }
    });
    arrayGameList = Object.entries(progressGame)//?????????????? ??????????????
      .filter(item => item[0] === 'firstPerson'|| item[0] === 'secondPerson');
    let lastLetter = cWord[cWord.length - 1]; 
    currentCity = changePerson()[1].filter(item => item[0] == lastLetter)[0];
    
}

function deleteCurrentCity(cWord) {
    const index = commonCitiesList.indexOf(cWord);

    if(index !== -1) {
        delete commonCitiesList[index]; 
    }
       
    return commonCitiesList;    
}

while(currentCity) {
    definitionCurrentCity(currentCity);
    if (currentCity == undefined) {
        if (currentArray[0] === "firstPerson") { 
            console.log('Winner: secondPerson!');
         } else {
            console.log('Winner: firstPerson!');
         }
         break;
    }
    currentMove();
    deleteCurrentCity(currentCity);
    
}


