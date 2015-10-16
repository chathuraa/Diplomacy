Meteor.methods({
      init: function() {

        // Clear All Data
        Diplomacy.Map._collections.Nations.remove({});
        Diplomacy.Map._collections.Provinces.remove({});
        Diplomacy.Map._collections.Connections.remove({});

        // Setup Nations
        Diplomacy.Map.addNation('Austria');
        Diplomacy.Map.addNation('England');
        Diplomacy.Map.addNation('France');
        Diplomacy.Map.addNation('Germany');
        Diplomacy.Map.addNation('Italy');
        Diplomacy.Map.addNation('Russia');
        Diplomacy.Map.addNation('Turkey');

        // Add Provinces
        var provinces = [{
          "name": "Bohemia",
          "abbreviation": "BOH",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": false,
          "nation": "Austria",
          "supply": false,
          "army": true
        }, {
          "name": "Budapest",
          "abbreviation": "BUD",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": false,
          "nation": "Austria",
          "supply": true,
          "army": true
        }, {
          "name": "Galicia",
          "abbreviation": "GAL",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": false,
          "nation": "Austria",
          "supply": false,
          "army": true
        }, {
          "name": "Silesia",
          "abbreviation": "SIL",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": false,
          "nation": "Austria",
          "supply": false,
          "army": true
        }, {
          "name": "Trieste",
          "abbreviation": "TRI",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "Austria",
          "supply": true,
          "army": true
        }, {
          "name": "Tyrolia",
          "abbreviation": "TYR",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": false,
          "nation": "Austria",
          "supply": false,
          "army": true
        }, {
          "name": "Vienna",
          "abbreviation": "VIE",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": false,
          "nation": "Austria",
          "supply": true,
          "army": true
        }, {
          "name": "Clyde",
          "abbreviation": "CLY",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "England",
          "supply": false,
          "army": true
        }, {
          "name": "Edinburgh",
          "abbreviation": "EDI",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "England",
          "supply": true,
          "army": false
        }, {
          "name": "London",
          "abbreviation": "LON",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "England",
          "supply": true,
          "army": true
        }, {
          "name": "Liverpool",
          "abbreviation": "LVP",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "England",
          "supply": true,
          "army": true
        }, {
          "name": "Wales",
          "abbreviation": "WAL",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "England",
          "supply": false,
          "army": true
        }, {
          "name": "Yorkshire",
          "abbreviation": "YOR",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "England",
          "supply": false,
          "army": true
        }, {
          "name": "Brest",
          "abbreviation": "BRE",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "France",
          "supply": true,
          "army": true
        }, {
          "name": "Burgundy",
          "abbreviation": "BUR",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": false,
          "nation": "France",
          "supply": false,
          "army": true
        }, {
          "name": "Gascony",
          "abbreviation": "GAS",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "France",
          "supply": false,
          "army": true
        }, {
          "name": "Marseilles",
          "abbreviation": "MAR",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "France",
          "supply": true,
          "army": true
        }, {
          "name": "Paris",
          "abbreviation": "PAR",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": false,
          "nation": "France",
          "supply": true,
          "army": true
        }, {
          "name": "Picardy",
          "abbreviation": "PIC",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "France",
          "supply": false,
          "army": true
        }, {
          "name": "Piedmont",
          "abbreviation": "PIE",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "France",
          "supply": false,
          "army": true
        }, {
          "name": "Berlin",
          "abbreviation": "BER",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "Germany",
          "supply": true,
          "army": true
        }, {
          "name": "Kiel",
          "abbreviation": "KIE",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "Germany",
          "supply": true,
          "army": true
        }, {
          "name": "Munich",
          "abbreviation": "MUN",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": false,
          "nation": "Germany",
          "supply": true,
          "army": true
        }, {
          "name": "Prussia",
          "abbreviation": "PRU",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "Germany",
          "supply": false,
          "army": true
        }, {
          "name": "Ruhr",
          "abbreviation": "RUH",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": false,
          "nation": "Germany",
          "supply": false,
          "army": true
        }, {
          "name": "Apulia",
          "abbreviation": "APU",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "Italy",
          "supply": false,
          "army": true
        }, {
          "name": "Naples",
          "abbreviation": "NAP",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "Italy",
          "supply": true,
          "army": true
        }, {
          "name": "Rome",
          "abbreviation": "ROM",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "Italy",
          "supply": true,
          "army": true
        }, {
          "name": "Tuscany",
          "abbreviation": "TUS",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "Italy",
          "supply": false,
          "army": true
        }, {
          "name": "Venice",
          "abbreviation": "VEN",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "Italy",
          "supply": true,
          "army": true
        }, {
          "name": "Livonia",
          "abbreviation": "LVN",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "Russia",
          "supply": false,
          "army": true
        }, {
          "name": "Moscow",
          "abbreviation": "MOS",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": false,
          "nation": "Russia",
          "supply": true,
          "army": true
        }, {
          "name": "Sevastopol",
          "abbreviation": "SEV",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "Russia",
          "supply": true,
          "army": true
        }, {
          "name": "St Petersburg",
          "abbreviation": "STP",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": false,
          "nation": "Russia",
          "supply": true,
          "army": true
        }, {
          "name": "St Petersburg",
          "abbreviation": "STP-N",
          "type": "Land",
          "sub_name": "North Coast",
          "parent": "STP",
          "fleet": true,
          "nation": "Russia",
          "supply": true,
          "army": false
        }, {
          "name": "St Petersburg",
          "abbreviation": "STP-S",
          "type": "Land",
          "sub_name": "South Coast",
          "parent": "STP",
          "fleet": true,
          "nation": "Russia",
          "supply": true,
          "army": false
        }, {
          "name": "Ukraine",
          "abbreviation": "UKR",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": false,
          "nation": "Russia",
          "supply": false,
          "army": true
        }, {
          "name": "Warsaw",
          "abbreviation": "WAR",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": false,
          "nation": "Russia",
          "supply": true,
          "army": true
        }, {
          "name": "Ankara",
          "abbreviation": "ANK",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "Turkey",
          "supply": true,
          "army": true
        }, {
          "name": "Armenia",
          "abbreviation": "ARM",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "Turkey",
          "supply": false,
          "army": true
        }, {
          "name": "Constantinople",
          "abbreviation": "CON",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "Turkey",
          "supply": true,
          "army": true
        }, {
          "name": "Smyrna",
          "abbreviation": "SMY",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "Turkey",
          "supply": true,
          "army": true
        }, {
          "name": "Syria",
          "abbreviation": "SYR",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "Turkey",
          "supply": false,
          "army": true
        }, {
          "name": "Adriatic Sea",
          "abbreviation": "ADR",
          "type": "Sea",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": false,
          "army": false
        }, {
          "name": "Aegean Sea",
          "abbreviation": "AEG",
          "type": "Sea",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": false,
          "army": false
        }, {
          "name": "Albania",
          "abbreviation": "ALB",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": false,
          "army": true
        }, {
          "name": "Baltic Sea",
          "abbreviation": "BAL",
          "type": "Sea",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": false,
          "army": false
        }, {
          "name": "Barents Sea",
          "abbreviation": "BAR",
          "type": "Sea",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": false,
          "army": false
        }, {
          "name": "Belgium",
          "abbreviation": "BEL",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": true,
          "army": true
        }, {
          "name": "Black Sea",
          "abbreviation": "BLA",
          "type": "Sea",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": false,
          "army": false
        }, {
          "name": "Bulgaria",
          "abbreviation": "BUL",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": false,
          "nation": "",
          "supply": true,
          "army": true
        }, {
          "name": "Bulgaria",
          "abbreviation": "BUL-E",
          "type": "Land",
          "sub_name": "East Coast",
          "parent": "BUL",
          "fleet": true,
          "nation": "",
          "supply": true,
          "army": false
        }, {
          "name": "Bulgaria",
          "abbreviation": "BUL-S",
          "type": "Land",
          "sub_name": "South Coast",
          "parent": "BUL",
          "fleet": true,
          "nation": "",
          "supply": true,
          "army": false
        }, {
          "name": "Denmark",
          "abbreviation": "DEN",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": true,
          "army": true
        }, {
          "name": "English Channel",
          "abbreviation": "ECH",
          "type": "Sea",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": false,
          "army": false
        }, {
          "name": "Eastern Mediterranean",
          "abbreviation": "EME",
          "type": "Sea",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": false,
          "army": false
        }, {
          "name": "Finland",
          "abbreviation": "FIN",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": false,
          "army": true
        }, {
          "name": "Gulf of Bothnia",
          "abbreviation": "GOB",
          "type": "Sea",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": false,
          "army": false
        }, {
          "name": "Gulf of Lyon",
          "abbreviation": "GOL",
          "type": "Sea",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": false,
          "army": false
        }, {
          "name": "Greece",
          "abbreviation": "GRE",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": true,
          "army": true
        }, {
          "name": "Helgoland Bight",
          "abbreviation": "HEL",
          "type": "Sea",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": false,
          "army": false
        }, {
          "name": "Holland",
          "abbreviation": "HOL",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": true,
          "army": true
        }, {
          "name": "Ionian Sea",
          "abbreviation": "ION",
          "type": "Sea",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": false,
          "army": false
        }, {
          "name": "Irish Sea",
          "abbreviation": "IRI",
          "type": "Sea",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": false,
          "army": false
        }, {
          "name": "Kiel",
          "abbreviation": "KIE",
          "type": "Sea",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": false,
          "army": false
        }, {
          "name": "Mid-Atlantic Ocean",
          "abbreviation": "MAO",
          "type": "Sea",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": false,
          "army": false
        }, {
          "name": "North Africa",
          "abbreviation": "NAF",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": false,
          "army": true
        }, {
          "name": "North Atlantic Ocean",
          "abbreviation": "NAO",
          "type": "Sea",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": false,
          "army": "FALE"
        }, {
          "name": "North Sea",
          "abbreviation": "NTS",
          "type": "Sea",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": false,
          "army": false
        }, {
          "name": "Norwegian Sea",
          "abbreviation": "NWG",
          "type": "Sea",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": false,
          "army": false
        }, {
          "name": "Norway",
          "abbreviation": "NWY",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": true,
          "army": true
        }, {
          "name": "Portugal",
          "abbreviation": "POR",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": true,
          "army": true
        }, {
          "name": "Rumania",
          "abbreviation": "RUM",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": true,
          "army": true
        }, {
          "name": "Serbia",
          "abbreviation": "SER",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": false,
          "nation": "",
          "supply": true,
          "army": true
        }, {
          "name": "Skagerrak",
          "abbreviation": "SKA",
          "type": "Sea",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": false,
          "army": false
        }, {
          "name": "Spain",
          "abbreviation": "SPA",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": false,
          "nation": "",
          "supply": true,
          "army": true
        }, {
          "name": "Spain",
          "abbreviation": "SPA-N",
          "type": "Land",
          "sub_name": "North Coast",
          "parent": "SPA",
          "fleet": true,
          "nation": "",
          "supply": true,
          "army": false
        }, {
          "name": "Spain",
          "abbreviation": "SPA-S",
          "type": "Land",
          "sub_name": "South Coast",
          "parent": "SPA",
          "fleet": true,
          "nation": "",
          "supply": true,
          "army": false
        }, {
          "name": "Sweden",
          "abbreviation": "SWE",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": true,
          "army": true
        }, {
          "name": "Switzerland",
          "abbreviation": "SWI",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": false,
          "nation": "",
          "supply": false,
          "army": false
        }, {
          "name": "Tunis",
          "abbreviation": "TUN",
          "type": "Land",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": true,
          "army": true
        }, {
          "name": "Tyrrhenian Sea",
          "abbreviation": "TYS",
          "type": "Sea",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": false,
          "army": false
        }, {
          "name": "Western Mediterranean",
          "abbreviation": "WME",
          "type": "Sea",
          "sub_name": null,
          "parent": "",
          "fleet": true,
          "nation": "",
          "supply": false,
          "army": false
        }];

        var oldProv = {
          "id": "whCJAefERm",
          "name": "Classic",
          "width": 1152,
          "height": 965,
          "players": 7,
          "countries": [{
            "name": "England",
            "vacantColor": "#f96ac0",
            "unitColor": "#880E4F",
            "occupiedColor": "#f640ae",
            "startSpaces": [20, 21, 22, 23, 24, 25]
          }, {
            "name": "France",
            "vacantColor": "#36aedc",
            "unitColor": "#0D47A1",
            "occupiedColor": "#0d9fd8",
            "startSpaces": [26, 27, 28, 29, 30, 31]
          }, {
            "name": "Germany",
            "vacantColor": "#787679",
            "unitColor": "#212121",
            "occupiedColor": "#5d5a5e",
            "startSpaces": [32, 33, 34, 35, 36, 37]
          }, {
            "name": "Italy",
            "vacantColor": "#a5e86e",
            "unitColor": "#33691E",
            "occupiedColor": "#8ad749",
            "startSpaces": [38, 39, 40, 41, 42, 43]
          }, {
            "name": "Austria",
            "vacantColor": "#f93c52",
            "unitColor": "#B71C1C",
            "occupiedColor": "#f80e27",
            "startSpaces": [44, 45, 46, 47, 48, 49]
          }, {
            "name": "Turkey",
            "vacantColor": "#ffe95d",
            "unitColor": "#F9A825",
            "occupiedColor": "#eece00",
            "startSpaces": [50, 51, 52, 53, 54]
          }, {
            "name": "Russia",
            "vacantColor": "#a892e3",
            "unitColor": "#4527A0",
            "occupiedColor": "#8569cf",
            "startSpaces": [55, 56, 57, 58, 59, 60,
              61
            ]
          }],
          "spaces": [{
            "id": 1,
            "name": "North Atlantic",
            "abbrev": "NAO",
            "type": "sea",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [2, 20, 10, 11, 22]
            },
            "territory": null,
            "path": "M 260.30368,0 0,0 l 0,469.93686 180.84256,12.28598 1.85615,-13.08147 2.03294,-10.69499 2.65165,-8.39689 2.91681,-4.94975 7.15946,-6.62913 8.3085,-5.39169 3.60693,-0.57892 0.125,-4.0625 -0.9375,-2 0.125,-1.375 1.6875,-0.5 1,-0.9375 -0.75,-1.25 -0.1875,-2.25 -1.0625,-1.9375 0,-1.25 2.3125,-0.625 3.875,0.3125 1.4375,-0.9375 1.5,-1.125 1.375,0.125 1.75,1.0625 7.0625,-0.3125 2.25,2 4.6875,0.1875 3.6875,-0.25 2,0.625 1.3125,-1.0625 0,-4.4375 -1.4375,-1 -5.1875,-2.0625 -5.625,0.1875 -2.375,0.8125 -3.125,-0.0625 -0.375,-1.125 0.1875,-1.25 2.75,-1.625 0.75,-0.75 3.875,0.0625 1.4375,-1.3125 0.8125,-1.75 1.4375,-1.25 1.3125,0.25 1.25,1.125 4.1875,0 1.75,-1.1875 0.1875,-2.75 -1.25,-2 -2.75,-0.25 -1.8125,-1.0625 -3.25,-0.875 -1.5625,-1.3125 -2.3125,-1.1875 -0.125,-2 -4.5,-3.9375 -0.625,-1.625 1.25,-1.25 1.3125,-0.875 3.75,-0.125 1.625,-0.8125 2.125,-2.1875 0.3125,-2.25 0,-2.5 -1.875,-5.3125 0.4375,-1.75 5.625,-2 2.1875,-0.0625 1.8125,1.5 1.5625,2.25 2.0625,1.4375 3.8125,0.125 1,0.8125 0.3125,1.5 1.8125,1.3125 1.875,0.75 2.75,-0.125 1.5625,-0.3125 3.625,-0.3125 1.9375,0.75 1.9375,-0.625 0.5625,-2.0625 -0.3125,-1.6875 -0.75,-1 -7.5,-1.5625 -1.75,-1.1875 -2.0625,-2.5 1.25,-1.375 1.9375,0 1.5625,0.5 2.5625,1.125 2.25,-0.5625 1.5625,-1.4375 1.1875,-1.5625 0,-3.1875 0.9375,-0.875 1.625,0.3125 2.5,-0.0625 1.4375,-0.75 1.6875,0.5625 2.5,0.1875 2.9375,-0.1875 1.1875,-2.0625 1.25,-0.875 2.8125,1.8125 -0.0625,2.125 -1.625,0.75 -0.9375,1.125 -5.625,1.4375 -0.625,0.9375 -0.125,3.8125 1,1.3125 8.3125,-0.0625 1.1875,-1.375 2.25,-1.6875 2.5625,-0.875 2.5625,0.3125 1.125,1.25 0.4375,3.6875 0.75,2.1875 0.0625,4.25 -1,2.1875 -0.25,5.4375 1.0625,1.8125 1.3125,1.5625 -0.375,2.9375 -1.9375,2.1875 -3.125,1.8125 33.125,9.125 -0.8125,-1.25 -0.1875,-4.5 2.25,-1.875 2.1875,-1.25 2.9375,-2.1875 0,-2.8125 -0.75,-1.75 -1.875,-1.0625 -7.25,0.125 -1.6875,0.6875 -2,-0.625 -4.1875,-0.25 -2.1875,1.125 -1.3125,1.125 -2.5,-0.1875 -0.5625,-1.3125 0.125,-3 0.875,-4.375 1.8125,-2.5625 0.3125,-2.1875 1.1875,-0.875 2.8125,-0.75 3.5625,-2.5625 0.875,-2.5625 1.25,-0.875 -0.1875,-2.875 -1,-1.3125 -0.375,-2.25 0.25,-1.875 -0.375,-2.0625 0.625,-1.875 0.25,-1.875 -1.25,-2.25 -2.375,-0.8125 -1.8125,1.125 -0.75,2.3125 -0.125,4 -1.5625,1.625 -0.125,2.375 -1.6875,0.9375 -4.125,-0.3125 -1.25,-0.75 0.3125,-1.9375 1.875,-0.875 1.8125,-0.5625 2.125,-2 0.125,-3 0.3125,-2.5 1.25,-2.1875 L 316,346 l 1.4375,-2.375 0.5,-2.4375 3.9375,-1.8125 1.6875,-0.625 -0.3125,-2.3125 -2.125,-1.9375 -1.3125,-1.5625 -0.9375,-1.8125 -1.9375,-1.625 -2.3125,-0.75 1.5,-1.125 1.6875,-1 3.1875,-0.8125 1.4375,-0.9375 0.625,-3.125 0.3125,-3 0.9375,-1.75 0.4375,-2.4375 2.75,-1.75 0,-5.625 1.25,-1.8125 3.0625,-0.125 2,-0.6875 0.8125,-2.875 -0.5625,-1.875 0.3125,-1.5 1.875,-0.6875 2.5625,-0.125 1.9375,1.1875 1.6875,-0.875 0.1875,-2.5 -1.0625,-1.5625 0.0625,-2.4375 0.875,-0.75 2,-0.25 14.375,-88.3125 -1.375,-0.5 -2.3125,-2.1875 -1,-2.125 0.1875,-2.625 1.0625,-0.875 0.5625,0.875 3.0625,0.1875 1.3125,-1.25 -0.0625,-6.625 0.875,-1.4375 L 313,98.624998 l -3.8125,0.5 -1.9375,2.312502 -5.875,-0.4375 -6.8125,0.4375 -5.125,1.375 -5.125,-0.4375 -0.625,-1.0625 -1.5625,-0.9375 -2.3125,0.25 -0.9375,0.9375 -2.375,0.25 -1.9375,-1.3125 -3.625,-0.0625 -2.5,1.0625 -4.6875,0.1875 -1.625,0.8125 -5.125,0.0625 -2.1875,-1.9375 -2.625,-3.625002 -1.5,-1.4375 -0.5,-1.5 -1.3125,-0.9375 -2.0625,-2.8125 -4.5625,-1.5 0.375,-7.6875 -0.375,-1.3125 -1.6875,-0.625 -1.5,-1.5625 -1.3125,-1 -0.875,-1.0625 -2.1875,-0.375 -1.4375,-0.9375 -0.9375,-1.875 -1,-0.5625 -2.75,-0.1875 -1.375,-0.9375 -2.75,-0.25 -2.0625,-1.5625 3,-3.875 0.875,-1.9375 1.375,-0.6875 1.6875,0.1875 1.125,2.5 1.625,1.3125 3.6875,0.1875 3.3125,-0.4375 0.5,-1.5 -0.1875,-3.3125 0.8125,-1.5 1.25,-1.6875 0,-2.375 -0.8125,-1.9375 1.875,-2.625 0.0625,-2.375 -0.625,-1.1875 -2.3125,-0.375 -0.875,-2.0625 -1.4375,-1.125 -3.4375,-1.875 -4.25,-1.125 0,-1.5625 0.8125,-1.625 1.375,-1.3125 3,2 3.8125,0.375 2.25,0.75 0.625,1.6875 2.25,3 2.875,2.3125 2.6875,1.0625 2.875,-0.25 1.8125,-1.3125 0.75,-2.3125 -0.75,-0.875 -1.375,-0.1875 -2.4375,-0.5 -0.5,-1.8125 1.1875,-0.5625 0.25,0.5 1.75,0.1875 2.0625,-0.5625 0.625,-2.375 -0.6875,-3.5 -1,-2.6875 -1.4375,-0.5625 -4.0625,-0.1875 -2.375,-0.9375 -3.625,-0.5625 -3.3125,-2.875 -1.3125,-2 -1.125,-2.1875 2.8125,-3 1.4375,-0.6875 1.25,0.8125 1.25,0.375 1.9375,-0.5625 0.6875,-1.375 3.3125,-0.3125 1.9375,0.5 1.5625,-1.3125 0.875,-3.375 0.8125,-1.125 0.875,1.5625 0.4375,5.125 -0.6875,4.375 0.8125,3.25 2,1.25 3.125,-0.75 1.5625,-2.1875 0.125,-2.75 -0.5625,-2.3125 -1.3125,-0.8125 -0.0625,-1.3125 1.5,-0.9375 1.25,-3.25 z",
            "supply": null,
            "drawUnit": {
              "x": 160,
              "y": 730
            },
            "label": ""
          }, {
            "id": 2,
            "name": "Norwegian Sea",
            "abbrev": "NRG",
            "type": "sea",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [1, 20, 21, 7, 65, 3]
            },
            "territory": null,
            "path": "m 715.06173,0 -454.75805,0 3.25882,13.374998 1.6875,0.625 1.5,1.375 -0.1875,2.25 2,4.75 0.0625,3.875 -1.4375,4.25 -1.625,1.5 -1.375,1.625 -1.6875,1 -1.25,3 -3.3125,4.6875 0.125,3.1875 2.6875,0.5625 2.625,-0.75 3.25,-2.125 2.6875,-0.4375 2.6875,0.75 1.3125,-0.0625 1.25,-1 4.625,-8.8125 1.25,1.3125 0.4375,5.8125 0.5625,2.5 3.25,0.25 0.5625,-0.875 1.3125,-1.125 0.8125,1 2.375,-0.5 2.6875,0 1.0625,0.75 0.0625,7.375 1.4375,0.3125 2.6875,0 0.75,-1.4375 0.8125,-1.125 0.75,0.8125 0.6875,2.25 1.5,1.8125 4.125,-0.125 0.8125,-0.75 1,-1.25 0.9375,-0.625 0.9375,0.875 0.875,1.875 1.375,0.875 2.1875,0.4375 1.5625,-0.6875 2.3125,-1.875 1.125,-1.25 1.5,0.25 1.3125,1.875 0,4.125 1,2.125 1.375,0.9375 2.1875,0.375 1.875,-0.375 -0.0625,-1.1875 1.125,-1 0.75,0.75 -0.1875,1.25 -1.125,1.6875 -1.875,1.25 -0.75,2.4375 -0.3125,1.8125 1.625,1.0625 0.75,1.125 -0.75,1.1875 -0.1875,2.3125 -0.8125,2.3125 -0.25,2.0625 1.5625,1.75 1.75,1.6875 0.875,1.625 -0.1875,1.4375 -1.75,1.0625 -1.875,0.75 -0.5,1.9375 0,2.1875 1.0625,1.0625 0.0625,1.625 -1,0.875 -2.625,-0.0625 -2.25,-0.9375 -0.9375,0 -0.75,0.25 -0.5625,0.9375 0.25,0.75 0.8125,0.8125 0.0625,2.75 -1.1875,1.1875 -1.8125,0.375 -4.625,-0.0625 48.1875,86.812502 0.6875,-0.4375 0.6875,-0.125 0.75,2.4375 0.75,2.5625 1.0625,1.9375 0.625,0.875 -0.5625,0.6875 -2.25,0.0625 -1.1875,0.4375 -0.3125,0.75 0.375,1.75 0.75,0.875 0.0625,1.9375 -1.6875,2.125 -2.0625,0.6875 -14.375,88.3125 1.0625,1.375 0.875,1.8125 1.3125,0.8125 1.75,-0.125 1.5625,-0.75 2.0625,0.1875 1.4375,0.375 0.375,1.3125 3.3125,0.3125 1.3125,-0.8125 2.5,-0.3125 0.75,0.875 2.75,0 0.8125,0.6875 5.5,-4.4375 -0.5,-3.875 -1.0625,-1 0.3125,-1.25 1.25,-1 2.8125,0 1.1875,0.625 0.5625,0.875 -0.0625,2.8125 4.4375,-4.125 0,-1.4375 0.875,0.1875 20.4375,-14.6875 1.0625,-4.25 1.5,-1.625 L 404.5,258 l -0.75,-2.1875 0.5,-1.375 1.0625,0.75 1.875,0.5625 1.3125,1.5625 2.25,0 2.125,-0.25 0.5625,-1.875 0.625,-1.625 1.3125,0.0625 0.25,3.25 -0.875,1.875 -0.3125,2 2.5625,2.5 74.5,-8.25 2.125,-1.75 0.375,-3 -0.875,-11.375 0.875,-0.75 2.125,0.625 2.125,1.625 2.5,1.375 5.125,0.875 1.5,-0.75 0.625,-4.375 5.375,-0.375 1,-1.125 0.25,-5.75 0.875,-2.375 0.875,-0.375 0,3.875 1,0.875 1.625,0.25 1.75,1.125 2.875,0 1,-1.875 -1.125,-2.125 -0.75,-2.5 -1,-2 0.875,-1.5 3.625,-0.375 1.75,-2.5 3,-0.125 2.125,2.75 2.75,2.125 3.125,1.125 1.5,-1 0.25,-6.875 3,-1.625 1.75,-0.75 2.75,-0.625 0.25,-1.75 -0.75,-0.875 0,-3 1,-1.25 0.625,-0.125 0.375,3.625 2,0.25 1.875,1.25 -0.375,4.875 1.125,0.75 8.25,-0.125 6.5,-0.875 1.25,-3.25 5.25,-4.625 0,-5.25 -1.375,-1.875 -4.875,-0.125 -1.75,1 -0.375,2 -3,-0.125 -2.125,1 -0.75,2.25 -2.125,1.125 -0.875,1.25 -3,-0.875 0.125,-1 -1.25,-2.125 1.375,-1.75 2.875,-1 3,-2.125 1.875,-3.125 2.625,-1.125 3.5,-4.625 2.625,-2.75 1.125,0.875 0,2.5 1.5,1.875 1.25,1.125 2.875,-0.25 1.25,-3.25 0.625,-6 -1.25,-2.5 -2.375,-0.625 0.875,-2.25 1.75,-3.125 4.375,-0.375 6.75,-2.125 1.875,-2 0.5,-1.375 0.25,-3.25 -1,-1.125 -3.75,-0.375 3.25,-1.375 1.25,-2 0.125,-1.75 2,-0.75 3.625,1 4,0.125 0.625,-4.75 -0.875,-1.375 -0.5,-1.5 1.125,-1.25 5.875,-0.125 1.875,-1.25 0.625,-4.25 -1.375,-1.625 -5.375,-0.125 -0.875,-1.25 -1.625,-1.375 -4.5,0 4.375,-0.875 0.75,-3.125 1.75,-0.25 0.75,-1.5 3.625,0 2,-1.75 0.5,-5.625 5.75,-0.625 7.75,-1.75 3.25,-1.5 0,-3.625 -1.375,-1.375 -3.25,0 -1.5,0.75 -2,0.125 -0.125,-1.375 3.5,-3.5 1.125,0 1.75,1.125 1.75,-1.25 0.375,-3.25 -1.5,-1.625 -2.75,-0.125 -0.5,-1.5 0.875,-2.5 2.25,0 1.5,1.25 3,-0.375 1,-1 0,-2.625 -1.375,-1.625 0.375,-2.375 1,-1.25 5.75,-0.375 1,-2.000001 1.125,-1.375 10.875,-0.625 -0.25,-5.125 -8.625,-0.625 0,-3.875 -3.375,-0.125 -2.625,2.25 -0.75,3 -4,1.875 -0.25,-1.5 1,-5 1.125,-1.5 3.5,-0.875 2.875,0 1.25,-0.875 0.875,-2.625 1.25,-1.5 0.5,1 2.625,0 0.875,-0.625 -0.125,-1.875 -0.625,-1.625 0,-2 2.75,-2.625 -0.75,-2.5 1.625,-2.625 2.625,-0.375 1.25,1.75 0.875,3.375 2.5,0 2.625,-1 1.625,2.875 3.625,1.125 2.125,-1 0.125,-3.5 -0.875,-3.125 0.875,-1 3.75,-0.875 0,-4.875 2.25,-0.375 5.625,2 1.375,-1.25 0.25,-2.75 0.875,1.125 1.625,1 1.875,-0.75 0.25,-2.375 -1,-3 0.25,-2.875 6,-0.375 1.5,0.375 0.75,4.125 1.125,1.75 5.375,-0.125 0.75,-0.75 0.125,-4 1.125,-2.25 2.625,-1.75 3.25,-0.875 1,-1.375 0.25,-5 1.5,-6.375 1.375,-1.75 z",
            "supply": null,
            "drawUnit": {
              "x": 475,
              "y": 858
            },
            "label": ""
          }, {
            "id": 3,
            "name": "Barents Sea",
            "abbrev": "BAR",
            "type": "sea",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [2, 65, 63]
            },
            "territory": null,
            "path": "M 1004.8102,0.26539363 715.06173,0 711.5,34.374999 l 1.5,2.75 2.25,0.5 1.25,2.125 -0.875,4.125 -1.125,2.625 -1,3.625 -0.25,5.75 1.375,1.5 3.625,-0.125 1.375,-1.125 0.875,-2.625 1.375,-12.375 1.875,-3.625 2.125,-3.25 1.5,1.5 1.25,4.625 0.75,4.75 2.25,1.125 1.5,-0.75 0.625,-5 0.375,-7.375 0.875,-2.875 2.625,-1.5 4.875,-0.125 1,1.75 0,2.125 -1.125,1.125 0.125,2.5 0.875,1.5 2.875,0 2.625,-3.25 2.5,0.25 2.125,2.75 7.5,0.125 1,1.875 3.5,1.125 1.125,1.625 -2.125,6.75 -1.875,1.625 -8,1.125 -0.5,3.625 1.125,2.5 1.125,1.5 6.375,0.375 4.875,-1.125 4.875,-2e-6 1.375,-5.5 1.375,-1.75 5,1 3.875,0.375 1.5,3.75 -2.75,0 -3.125,1.375 -0.75,3.25 1.75,2 9.125,1.75 2.375,-1 0.375,1.75 -4.25,3.5 0,6.625 1.75,1.875 5.875,-1.25 3.125,-9.5 3,-1.25 1.875,0.875 4.25,-0.125 3.25,-3.5 5.75,-0.25 7.75,7 3.375,-0.125 4.625,2.125 6.125,1.375 6.125,2.5 2.75,2.125 5.125,2 7.125,0 2.125,2.375 3.5,1.5 4.25,0 2.5,-1.875 1.875,0.75 0.75,4.375 1.5,1 1.875,1.75 1.625,2.125 0.375,2.875 1.75,5.375 -1.125,2.000003 1.25,2.125 0.25,4 -2.625,2.25 0.5,3.5 -2.25,3.625 -5.125,4.875 0.125,1.625 -2.5,2.5 -3.5,0.375 -5.75,5.875 -9.75,-0.125 -3.375,-2 -6,-1.75 -6.25,2.125 -2,-0.625 -22.5,-2.625 -2.75,-3 -4.375,0 -3,-5.625 -4.125,-1.375 -3.625,0.875 -1.125,2.75 1,3.25 5.75,4 1.875,1.75 0.125,2.375 2.125,2 2.875,-0.875 2.5,0.125 1.125,2.625 2.125,2.25 8.5,1.875 7,9.375 -1.125,0.5 -0.375,5.625 -1.125,1.625 3.125,1.625 0.5,8.625 2.875,1.75 1,2.875 1.125,6 3.875,2.875 0.875,2 3.625,0.25 4.375,-0.875 4,4.625 4.875,1.375 2,1.875 15.25,-0.25 0,-3.25 -3.5,-8.25 -2.75,-0.75 -3.5,-3.625 -5.25,0.25 -2.875,-2.125 -2.25,-3.75 1.125,-2.5 -1.125,-1.75 -0.125,-6 6.625,0.125 1.5,1.5 7.25,0.25 0.625,3.75 2.125,1.25 6.75,-1.25 2.875,2.25 5.125,0 5.875,1 13.625,0.625 9.125,1.5 1.75,-2.25 -0.25,-3.625 -11,-1.125 -3.5,-4 -0.875,-3.875 -4.625,-0.5 -3.75,-2.25 -9,-10.875 8.5,-18.75 7,-6.5 1.5,-4 1.25,-1.125 5.375,-0.375 0.875,-1.625 2.25,0.25 4.125,7.25 4,0.5 0.5,-11.25 -1,-2.375 1.875,-3.750003 -1.25,-7.25 -2.5,-2.375 -1,0 -3.875,-1 -1.75,-1.125 -2,-2.25 -1.5,-3.25 -0.5,-14.625 -1,-2.5 -1.625,-1 -0.375,-2.25 -1.25,-0.5 -1,-2.875 -3.5,-1.875 -2.25,0 -1.5,-2.125 0.75,-1.75 4.625,0.875 10,-0.875 4.125,-2.625 9.75,9.375 2.125,0.75 0.125,5.375 -5.25,0.625 -1.875,2.5 1,9.75 1.625,1.375 12.5,0 0.625,-1.875 2.75,-0.625 3,1.125 9.0777,-0.08155 -2.12321,-11.146865 0.2654,-5.838834 2.65402,-2.123212 0,-3.184818 -3.18482,-2.388614 -0.2654,-1.857811 7.16584,-2.388614 3.18482,-5.042629 0.2654,-5.04263 1.85781,-3.981023 3.45022,-5.838834 2.91942,-0.796204 2.12321,3.45022 3.71562,1.327007 2.12321,-1.85781 -0.5308,-5.573433 -2.38861,-3.45022 -0.26541,-12.473872 2.65402,-1.8578111 3.98102,3.9810231 0,5.042629 2.65402,1.59241 0.2654,2.654015 -3.18482,6.369637 2.91942,12.739274 -3.45022,0.530803 -1.32701,3.715622 0,6.90044 3.18482,2.123212 0,7.165842 7.96205,7.696645 2.65401,4.246424 4.51183,0 0.2654,-2.919417 -2.12321,-4.246424 -1.06161,-3.715622 -2.38861,-3.184819 -1.32701,-5.30803 -3.18482,-6.369637 1.06161,-3.981024 4.24642,-5.838833 -0.5308,-13.535479 7.16584,1.592409 0,-5.573432 -2.65402,-2.919417 3.45022,-6.369637 5.04263,-2.3886141 5.308,-3.45022 z",
            "supply": null,
            "drawUnit": {
              "x": 847,
              "y": 922
            },
            "label": ""
          }, {
            "id": 4,
            "name": "Gulf of Bothnia",
            "abbrev": "GOB",
            "type": "sea",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [64, 57, 62, 56, 5]
            },
            "territory": null,
            "path": "m 627.875,361.5 25.875,9.5 2.375,-0.625 1.375,0.875 0,1.375 33.07816,11.04485 1.32583,-2.2981 8.92722,-6.98268 3.62392,-1.59099 2.20971,-0.17678 1.23744,1.59099 1.85615,0.17678 1.76777,1.67938 0,5.3033 1.23744,2.20971 0.88388,1.94454 1.94454,1.06066 3.00521,2.20971 1.32582,1.76777 9.63433,0 2.03293,-2.03293 -0.35355,-10.96016 1.5026,-2.91682 0.70711,-3.62392 0,-3.8007 -1.67938,-1.5026 -0.61872,-1.85615 0.97227,-1.14905 0.97228,-0.35356 2.56326,-2.65165 -0.0884,-2.38648 1.14905,-1.67938 -1.67938,-2.03293 -4.68458,-0.17678 -2.56326,1.06066 -1.85616,-0.88388 -1.5026,-0.0884 -3.00521,-0.97227 -0.97227,-1.32583 -0.17677,-3.62392 -0.70711,-1.32582 2.82843,-3.35876 0.0884,-2.20971 -0.17678,-1.67938 -2.2981,-1.23744 -1.41421,-4.86136 1.06066,-1.41421 L 724,331.625 729.25,326 l 3.75,-0.5 3.625,-1.875 3.125,0.625 2.75,-0.125 0.125,-5.5 2,0 4.25,2.75 8.875,-0.625 2.875,2.875 5.625,1.75 10,-2.375 0.625,-8.375 1.25,-1 9.625,-0.25 2.5,-3.75 4.75,-2.25 4.375,-1.375 0.25,-2.25 -3.875,-2.25 -2.375,-2.125 -5.5,-0.25 -5.375,-4.375 -4.625,-1.125 -2.625,-0.125 -3.375,1 -3.125,0.25 -2.125,0.875 -2.375,2.5 -13.75,0.25 -1.875,1.875 -2.75,0.125 -0.5,1.75 -4.75,1.875 -2.375,0.125 -2.125,0.5 -0.5,1.625 -5.375,2.375 -2.625,0.75 -4.125,0 -2.25,-1 -4.875,0 -0.875,1.875 -0.75,2.5 -1.375,2.25 -2.375,2.5 -2,1.25 -3.375,0 2,-1.75 3.25,-0.75 0.625,-1.75 -0.125,-3.375 -0.75,-1.75 -0.25,-3 -1.25,-2.875 -3.25,-0.125 -1,1 -1.375,0.75 -2.375,-2 -1.5,-2.625 -2.125,-2.375 -1,-2.125 -0.875,-0.25 -1.375,0.875 -4.75,0 0,-2.625 0.875,-1.375 0,-4.125 -0.625,-1.375 -0.125,-3.375 0.875,-1.625 0.125,-12.375 -1.25,-2.25 -2.875,-8.125 2,-1.875 -0.125,-4.5 -0.75,-3.125 -1.25,-3.375 -0.875,-1.875 0,-1.5 2.375,-1 2.5,-1.875 1.25,-2 0,-4.25 -1.125,-0.625 -0.125,-1.625 1.5,-1.25 3.875,-0.25 1.5,-2.125 0.125,-2.5 -0.5,-1.875 -0.75,-1.5 2.25,0 0,-1.375 2.875,-1.125 0,-1.375 0.75,-0.875 5.75,-0.125 0.5,-1 0.5,-2.75 0.75,-0.75 0.125,-2.375 0.875,0 1.875,-2 0.625,-1.875 3,-1.25 2.375,-3 0.125,-1.75 1.625,-0.25 0.625,-1.75 1.625,-2.25 1.25,-2.25 -0.25,-3 0.75,-1.5 1.625,-2 3.75,-0.375 1.625,-1.375 0.25,-1.5 -0.875,-3.125 -1.125,-3 -0.75,-3.625 -1.25,-2.5 -0.875,-2.75 -0.25,-2.625 -1.25,-1.375 -2.125,-0.125 -0.875,-0.75 -2,0 -1.375,1 -0.375,1.75 -0.625,1.25 -0.125,-1.875 -1.375,-1.75 -1.5,-1.25 -1.125,-2.125 -1.625,-0.25 -3.625,0.75 -2.75,-0.875 -1.375,-1 -1.625,1 -1.125,1.875 -1.875,-2.625 -2,-1.375 -2,0.5 -0.875,1.625 0,4.875 -0.875,2.5 -1.5,2 -0.625,1.375 -1.5,0.5 -1.125,1 -1.375,3.125 -0.625,4.25 -0.5,14 -0.5,5.25 -1.25,1.375 -0.375,1.875 -3,3.375 -1.75,1.125 -1.5,4.875 -2,1.75 -2.25,0.5 -1.125,2 -0.625,2.5 -0.625,1.375 -1.375,1.75 -0.5,0.875 -1.5,-0.25 -1.875,-0.875 -2.125,1 -0.125,1.375 -2.375,1.625 0,5.25 -1.25,1.625 -2,1.5 -5.5,0 -2.125,1.125 -1.125,0.875 -1.125,2.125 -0.125,2 -1.375,1.625 -5,0.125 -1.5,1.625 -0.25,8 1.625,1.25 0.5,2 0,1.75 -1,2.375 0.25,6.375 -1,2 -2.125,0.5 -1,2 -0.375,2.25 -0.625,1.625 -0.25,4.5 0.75,1.875 1.625,1.25 -0.5,1.875 -0.5,0.75 -1.375,1.25 -1,3 0,2.625 2,1.5 2,1.875 1.875,1.25 1,1.375 1.375,0 1.125,-0.875 1.5,-0.25 1.25,0.25 1.25,1.875 0.75,2 1.25,1.625 0.25,4.625 0.625,1.5 2.75,0.5 1.125,1.25 -0.125,5 -4.5,8.375 -0.375,2.75 -2.625,1.375 -1.5,1 -0.75,-1 0.125,-2.25 -1.375,-1.375 -2.125,-0.375 -2,-3.5 -0.875,0.875 -3.125,0 -0.75,0.875 -3,-0.125 -1,1 -1.375,-0.25 -2.125,-2.875 -0.625,-1.875 -6.125,0.125 -0.625,1 0.25,4.125 1.5,0.625 1,1.375 5.625,0.875 1.875,2.125 2,3.625 10.375,0 3,-1.375 0.375,1.125 0,2.125 -0.875,1.625 0,1.875 -0.75,2 -0.375,2 -1,0.875 -1.5,-1 -4.25,-0.5 -1,0.875 -1.625,1.875 -2.25,0.5 -2.25,0.25 -1.5,1.5 0,2.75 1.375,1.875 0.25,2.25 -3.125,3 z",
            "supply": null,
            "drawUnit": {
              "x": 679,
              "y": 638
            },
            "label": ""
          }, {
            "id": 5,
            "name": "Baltic Sea",
            "abbrev": "BAL",
            "type": "sea",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [64, 4, 56, 37, 35, 34, 66]
            },
            "territory": null,
            "path": "m 532.75,453.5 9.75,-8.125 1.625,1.25 4.875,0 1.375,-1.25 0.5,-1.25 -1.375,-1.5 -0.75,0.125 -1.625,-1.5 -0.5,-1.875 2.875,-4.625 1.25,-0.125 0.75,-0.875 1.5,-0.875 2.25,-0.625 1.125,-1.625 0.125,-2.625 1,-1.875 12.875,-1.875 -1,1.5 2.5,2.625 9.125,5 2,-1 3.75,-3.25 1.5,-1.625 -0.125,-1.625 -1.125,-4 0.375,-2.25 1,-1 1,-1.625 0.125,-2.25 1.875,-1.75 2.875,0.625 4.125,1 1,-1.375 0.375,-1.75 2.125,-1.125 3.5,0.875 3.5,1.375 3.125,0.5 1.625,-1.375 0.25,-5.625 1.75,-0.5 0.625,-1.125 0.5,-1.5 1.375,-2.75 0.875,-2.5 2.5,-2.125 0,-10.75 1.25,-0.25 1,-2.625 0.875,-3.125 0.25,-3.875 -0.125,-2.125 -1.375,-1.5 -0.875,-1.125 0,-1.25 0.75,-2.375 1.25,-2.75 2.25,-1.125 1.125,-1.25 25.875,9.5 -1.5,1 -1.125,1.375 -0.5,2.375 -0.625,2.25 -0.625,1.375 -0.625,2.625 -0.125,3.875 0.625,2 0,2.25 0.625,0.875 0.5,-0.75 0.375,-1.875 2,-4.5 2.625,-2.75 0.875,-1.875 -0.75,-2.125 0,-3.375 2,-1.125 33.07816,11.04485 0.0884,6.62912 -1.85616,2.65165 -0.53033,2.47488 -0.7071,0.79549 -0.17678,2.03293 -1.76777,1.32583 0.88389,1.23744 1.14905,2.03293 -1.23744,2.03293 -0.88388,1.23744 0,11.66726 0.33496,2.08725 1.625,2 1.25,4.5 1.5,0.75 0.5,6.625 -1.25,0.75 -2,-0.125 -1,-0.625 -1.125,-1.25 -1,0.25 -2,1.875 -1.375,4.125 -3.125,2 -2.625,2.625 -3.5,2.25 -0.625,1.75 -0.625,0.875 1.25,1.125 2.5,0 1.125,1.125 0.25,4.625 -1.25,1 -1.75,0.875 -0.25,3.875 -0.875,1.875 -1.625,0.625 -3.375,0.25 -1.125,-0.875 0.125,-5.25 -1.625,0 -1.75,0.625 -5.375,0.375 -1.375,-1.25 0.25,-5 -1.75,-1 -4.125,-0.125 -2.5,-1.75 -2.125,1.125 -5.75,0 -3,0.75 -4.625,0.375 -4.875,1.5 -1.625,1.625 -4.875,1.125 -1.25,1.125 -0.75,1.125 -2.75,0.375 -1.375,0.75 -0.5,1.125 -2.125,0.5 -3.875,2.25 -3.625,1.25 -3,-0.125 -1.125,-0.875 -1.75,0.25 -1.375,2 -1.375,1.375 -0.5,1.625 -1.25,0.125 -1.25,8.75 0,1.25 -2.625,1.125 -2.375,-1.125 -2.125,-2 0,-2.25 -0.625,-0.75 -5.375,-0.125 -1.625,-1.5 -0.375,-1.375 0,-2.125 -3.875,-3.375 0,-2.75 -3.625,-4.375 -2.625,-0.5 -7.125,-0.125 -3.75,0.25 -4.375,0.75 -3.625,0.375 -1.875,1.25 -1.375,1.625 -1.625,0.875 -2.5,0 -4.5,-0.125 -1.375,-2.125 0,-1.625 z",
            "supply": null,
            "drawUnit": {
              "x": 629,
              "y": 539
            },
            "label": ""
          }, {
            "id": 6,
            "name": "Skagerrak",
            "abbrev": "SKA",
            "type": "sea",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [7, 65, 64, 66]
            },
            "territory": null,
            "path": "m 544.5,402.375 21.5,3.375 1.375,-1.25 1.5,0.125 0.75,-1.5 0,-8.75 -2.125,-7.75 -1,-2.375 -2.125,-3.875 -0.75,-2.625 -0.125,-6.625 -0.875,-2 -1.75,-2.75 -0.875,-3.875 -0.125,-2.875 0.625,-3 0.125,-7.375 -1,-0.75 -4.125,0.25 -0.875,-0.5 -0.25,-4.875 -2.125,-2.625 2.25,-1.875 0,-2.875 c 0,0 -1,-1.5 -1,-1.5 l 0.625,-1 1.5,-1 2.625,-0.5 -0.25,-1.875 -4.125,-8.125 -2.5,-2.375 1,-1.25 0.375,-3.5 0.375,-1.75 -1.25,-1.5 -3.75,0 -1.125,3.125 -0.375,1.75 -1,1.75 -0.25,2.375 1.25,1.5 -0.375,2.125 -4.375,4.125 -0.875,0.125 -3.375,-2.125 -2.125,0.25 -1.625,1 -1.375,1.875 -0.625,2.625 -1.875,0.375 -8.75,8.875 -2.75,0.875 -1.375,1 -1,2.125 -4.875,1.5 -2.125,1.625 -2.5,2.5 -2.25,-0.125 -2,-1 -3.5,-0.25 -2,-0.875 -0.5,-2 -1.875,-1.75 -2.5625,1.6875 -3.125,4.6875 -2.375,5.8125 -0.1875,7.0625 1.625,5.75 1.625,4.3125 3.875,3.5625 5.3125,3 3.25,0.25 4.6875,0.375 0,-2.25 7.875,-4.625 12.375,-0.25 3.875,-1.125 1.625,-2.5 5.5,-5 1.75,-0.25 1,-1.375 0.125,-1.75 1.875,0.875 1,1.5 0,1.75 -1.5,1.625 -0.75,2.125 0.125,6.25 -0.875,1.25 -1.625,0.75 -1.25,1.375 -1,2.5 0,1.75 -0.75,0.5 -3,0 -0.375,1.25 0.125,5 0.75,1.5 2.125,0.25 2,0.875 4.375,0 0.75,-0.875 1.125,0.75 0.75,1.375 -0.875,1.25 -0.625,2.25 0,1.25 0.375,1.75 z",
            "supply": null,
            "drawUnit": {
              "x": 540,
              "y": 615
            },
            "label": ""
          }, {
            "id": 7,
            "name": "North Sea",
            "abbrev": "NTH",
            "type": "sea",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [21, 23, 25, 9, 66, 67, 8, 66,
                6, 65, 2
              ]
            },
            "territory": null,
            "path": "m 376.5625,505.375 6.77776,4.95541 2.74004,-0.0884 7.07107,0.53033 2.91682,-0.17678 2.74004,-0.7071 1.06066,-1.32583 1.06066,-0.88388 5.12652,-0.35357 1.85616,-1.14905 1.67936,-0.0883 1.50261,-0.53033 2.65165,-0.0884 1.76776,-0.44194 1.59099,-1.41422 2.74004,-0.61871 3.09359,-0.0884 2.74004,0.61872 4.41942,0.17677 1.23744,-0.44194 0.79549,-1.59099 0,-2.20971 -0.44194,-1.5026 -1.06066,-0.53033 -0.97227,0 -1.06066,-0.26516 -1.23744,-0.61872 -0.61872,-0.7955 -0.35355,-1.5026 -1.23744,-1.59099 1.23744,-0.70711 0.97227,-1.32582 1.41422,-0.26517 1.76776,-1.76776 0.17678,-1.14905 0.88388,-0.70711 2.2981,-0.0884 0.35355,-2.38648 0.17678,-2.47488 0.97227,-1.5026 1.23744,-2.56326 0.53033,-2.47488 -3.91876,-14.30276 -1.625,-7.375 -2.0625,-7.0625 -2.0625,-11.8125 -0.5,-4.5 0.9375,-3.6875 1.625,-4.5625 2.0625,-3 3.125,-3.3125 5.875,-4.125 7.125,-1.4375 8.3125,-1.0625 13.24276,-0.17637 11.8865,0.44497 18.68324,1.8564 0.5,-2.875 0.25,-2.875 3.875,-9.25 0.125,-3 -1.25,-1 -0.875,-1.125 -0.625,-1.625 -0.25,-1.25 0.625,-0.625 1.125,0.875 1.375,0.25 1.75,0.875 1,-1.375 0,-2.875 -0.25,-2 -0.625,-1.75 -7.9375,-0.625 -5.3125,-3 -3.875,-3.5625 -1.625,-4.3125 -1.625,-5.75 0.1875,-7.0625 2.375,-5.8125 3.125,-4.6875 L 494.5,345 l -4.125,-4.75 -2.375,-1 -1.25,-1.75 -2.625,-0.25 -3.5,-4.75 -0.25,-2.125 3.25,-7.75 1.875,-0.25 1.25,1.25 1.625,0.125 2,-1.125 3.25,-3.875 1.5,-2.375 0,-3.125 -1.5,-0.875 -3,0.625 -2.25,-0.625 -1.25,-0.75 -3.125,-0.125 -1.5,-2 0.125,-7.875 2.5,-0.125 1.375,0.75 0.875,1.125 4.875,0.125 1.25,-1 0.25,-7.75 10.125,-0.125 1.625,-1.125 -0.125,-1.375 1.375,-1.375 2.625,-0.25 1.25,-0.875 1,-2.125 0,-4.5 -2.375,-1.5 -3.5,-0.25 -0.75,-0.625 -1.75,-0.25 -1.625,0.875 -0.5,2.125 -2.5,0 -1.625,1.125 -0.5,-1.125 0,-6.5 -1.25,-1.5 -5.625,0 -1.125,-0.625 0,-2.875 -0.875,-1.5 1.125,-0.75 8.375,0.125 5.625,0.75 1.25,-2.25 1,2.375 4.125,-0.125 1.375,1.875 10.5,0 0.375,-1.625 -0.125,-2.75 -1.25,-3.875 -1.75,-2 -12.75,0.125 -0.25,1.625 -1,2.75 -0.25,-2.375 -1.875,-1.75 -2,-1.25 -3.625,0 -2.75,1.125 -1.25,-2 0,-3.375 -1,-2 -74.5,8.25 -0.375,1.3125 -1.125,0.6875 -8.6875,0.1875 -1.5,1.5 -0.75,2.375 -1.4375,0.25 -1,-0.8125 -20.4375,14.6875 0.375,1.3125 -1.25,-0.0625 -4.4375,4.125 -0.75,2 -1.75,0.75 -2,0.0625 -5.5,4.4375 0.25,3.75 0.875,0.8125 -0.5625,1.5625 -1.25,1.625 -2.4375,0.75 -5.875,-0.1875 -1.75,2.25 -1.8125,1.75 -7.1875,0.0625 -0.9375,1 -0.0625,3.125 1.875,1.6875 0.0625,1.375 -2,0.5 -2.625,-0.1875 -2.0625,0.3125 -0.375,2.75 0.1875,4.5625 1.75,0.3125 5.75,-0.1875 2,-0.625 0.375,-1.75 1.375,-1.25 1.8125,-0.5625 1.6875,1.4375 3.9375,-0.0625 4.125,2 1.5,1.5 3.1875,2 2.5,-0.4375 2.125,-1.1875 1.5,1.3125 2.125,0.5 0.375,1.1875 -0.875,0.875 -0.9375,1.4375 -1.125,1.1875 -1.3125,3.75 -0.25,2.6875 -4.4375,2.25 -1.125,2.5625 -0.875,1.375 -1.125,1.1875 -1.5625,0.9375 -0.8125,1.5 -1.3125,1.4375 -1.5625,0.5 -1.75,-0.5625 0.0625,1.1875 0.375,1.125 -1,1.25 -4.125,0.0625 -1.625,1 0.4375,2.25 0.9375,1.3125 0.3125,1.3125 0.625,1.3125 -1.75,1.0625 -0.5,1.375 0.1875,2.125 1.1875,1.1875 1.5,0.25 3.8125,2.125 2.1875,6.4375 0.1875,2.1875 0.625,0.6875 1.3125,2.1875 -0.3125,8.5625 -0.75,1.8125 0.25,3.6875 -1.4375,1.8125 -0.4375,2.625 1.5625,6.9375 1.1875,3.625 1.375,1.25 6.8125,-0.25 0.625,1.4375 0.25,2.625 1.0625,1.75 0.6875,2.75 0.3125,7.25 -1.0625,1.8125 0.625,1.625 2,2.25 0.625,2.125 -0.5,1.25 -0.75,-0.625 -1.625,-0.3125 -2.375,0.0625 -1.25,1.25 0.1875,2.0625 2.125,4.1875 1.4375,1.6875 0.5,2.3125 -0.0625,3.4375 -0.625,2 -2.125,2 -1.4375,1.75 -0.25,2.4375 0.9375,1 2.0625,0.1875 1.5,0.625 2.125,0.0625 2.375,-1.625 1.875,-0.9375 2.5,-0.125 2.4375,1.625 2.4375,3.0625 1.25,2.0625 0.8125,3 1.125,2.8125 -0.3125,2.375 -1.8125,2.4375 -0.8125,2.6875 -1.875,2.25 -2.5,1.9375 -1.125,1 -1.1875,0.875 -0.375,1.625 -0.1875,1.875 1,0.6875 -0.125,1.375 -1.8125,0.625 -1.1875,-1.6875 -0.5625,-1.875 -1.4375,-0.9375 -2.4375,0.125 -1.3125,1.625 -1.5,3.4375 -2.625,4.375 0,2.5625 1.375,0.9375 1.8125,0.625 1.0625,2.125 1,1.0625 1.3125,0.0625 1.5625,1 z",
            "supply": null,
            "drawUnit": {
              "x": 425,
              "y": 615
            },
            "label": ""
          }, {
            "id": 8,
            "name": "Helgoland Bight",
            "abbrev": "HLG",
            "type": "sea",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [7, 67, 34, 66]
            },
            "territory": null,
            "path": "m 499.875,411.125 -10.5,-1.0625 L 481,409.25 469,408.8125 456.0625,409 l -8.3125,1.0625 -7.125,1.4375 -5.875,4.125 -3.125,3.3125 -2.0625,3 -1.625,4.5625 -0.9375,3.6875 0.5,4.5 0.9375,5.25 1.125,6.5625 2.0625,7.0625 1.625,7.375 2.6875,9.1875 1.23126,5.11526 2.2981,-3.80069 1.85615,-0.0884 1.23744,1.5026 -0.26517,1.23744 -0.53033,1.41421 0,1.85616 -1.59099,4.24264 0.0884,4.24264 0.44194,2.82842 4.86136,0.97228 1.76777,-2.03294 0.70711,-2.12132 2.91681,-0.88388 3.09359,-0.0884 1.5026,-1.5026 0.70711,-1.32583 0,-2.29809 -0.79549,-1.32583 -1.23744,-1.23743 -3.0052,-1.41422 -0.70711,-0.97227 -0.17678,-2.03293 0.17678,-2.47488 0.70711,-1.76776 2.38648,-4.5962 3.0052,0 2.20971,0.53033 3.8007,0.53033 3.71231,0 0.97227,-0.79549 0.88389,-1.32583 1.41421,0.88389 0.88389,0.79549 0.17677,4.5962 0.61872,0.7071 3.21333,0.005 1.75,0 1.375,-1 -0.625,-1.75 -0.5,-2.375 0,-3 7.5,-1.625 0.75,1.75 2.625,0 0.875,2.625 0.375,3.5 1.375,1.875 2.875,0.125 2,-2.125 0.625,-2.25 1.125,-1.625 1,-0.125 1.75,-0.875 3.75,-3.25 1.5,-2.75 1,-2.5 -0.125,-2.25 -1.875,-1.25 -0.875,-1.875 0.625,-1.125 3.5,-0.375 0.75,-1.625 0.25,-2.125 -2.125,-5.25 -0.25,-3.5 -1.25,-2 -0.5,-1.25 0,-1.5 0.75,-2.25 1.25,-1.75 0.625,-2.25 1.25,-2.75 0,-2.125 -2.125,-1.875 -2.125,-0.625 -2,-1.375 -1.125,-1 z",
            "supply": null,
            "drawUnit": {
              "x": 468,
              "y": 527
            },
            "label": ""
          }, {
            "id": 9,
            "name": "English Channel",
            "abbrev": "ECH",
            "type": "sea",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [7, 25, 24, 10, 11, 26, 27, 68]
            },
            "territory": null,
            "path": "m 258.8125,498.25 -4.6875,-0.125 -8.125,1.3125 -7.375,2.5 -5.875,3.5625 -10.375,7.5 3.375,5 7.375,13.5 5.5,10.25 5.8125,4.875 8.1875,5.4375 4.9375,0.875 4.68571,-0.88784 0.0884,-1.41421 0.7071,-0.0884 0.35356,0.7071 1.41421,0.53033 2.65165,-0.0884 0.70711,-1.06066 0.17677,-2.03294 -0.97227,-1.06066 -1.32582,-1.76776 -2.38649,-0.53033 -2.91681,0.0884 -1.06066,-0.79549 0,-1.94454 1.32582,-1.32583 1.76777,-0.61872 1.32582,-0.97227 1.85616,-0.0884 0.97227,1.06066 2.20971,-0.17677 1.14905,-1.06066 1.67938,0.26516 3.44714,1.41421 0.70711,1.06066 1.94454,1.32583 0.88389,0 2.38648,-1.23744 3.62392,-2.56326 1.32583,0 1.06066,1.59099 0.79549,1.76777 0.26517,2.29809 0.70711,1.32583 0.26516,1.76777 0.97227,0.97227 1.06066,0.17678 1.23744,-1.06066 1.85615,-0.0884 1.14905,1.06066 0.61872,1.06066 0.26517,1.85615 3.44714,0.26517 3.62392,-0.26517 2.12133,1.06066 1.41421,1.94455 1.23744,1.14904 2.82842,0.17678 1.23744,-1.59099 -0.17678,-6.98268 0.17678,-1.76777 1.59099,-0.88388 0.44194,-2.2981 -0.26516,-3.18198 -0.53033,-1.32582 -0.35356,-2.74004 -0.61872,-1.41421 -1.41421,-0.35356 -0.88388,-1.41421 0.0884,-5.21491 0.88388,-1.50261 0.53033,-1.32582 2.38648,-0.26517 0.61872,0.7955 1.94455,0.26516 1.41421,1.23744 0.53033,1.5026 2.20971,1.23744 1.23744,1.23744 0.35355,2.82842 -1.32583,1.50261 -0.26516,2.65165 0.88388,2.38648 1.06066,1.32583 2.74004,0.0884 1.76777,-0.61872 2.74004,-0.35356 2.20971,0.88389 1.41421,1.76776 0.97227,2.12132 1.76778,0.26515 2.2981,-0.17677 2.38649,0 1.5026,-0.88389 3.44714,-0.26517 1.32583,0.88388 1.14905,0 1.06066,-0.88388 0,-1.94455 -0.61872,-2.12132 -0.61872,-1.41421 -1.06066,-0.97227 0.0884,-1.59099 1.06066,-1.06066 1.5026,0.35355 0.97227,0.88388 2.56326,0.17678 1.85616,-0.17678 2.03293,-1.85615 2.38649,-0.17678 3.62392,0.35357 0.88388,0.61872 1.50261,0.35356 1.06066,-0.61872 1.32582,-1.32583 0.70711,-1.85615 1.41421,-1.67938 3.80067,-3.27028 0.88388,-1.23745 0.0884,-2.03293 2.12132,-2.47487 0.53033,-1.94455 1.23743,-2.47487 0.61872,-4.15425 1.32583,-1.59099 2.29809,-0.70711 -6.77776,-4.95541 -1.5,1.25 -3.625,0.875 -5.6875,0.1875 -2.8125,0.875 -6.75,0 -1.625,-1.125 -2.6875,-1.0625 -2.6875,0.0625 -2,-0.75 -4.8125,-0.25 -2.625,-1.75 -1.5625,-1.9375 -3.0625,-0.4375 -5.9375,0.1875 -2.3125,0.3125 -1.3125,2.25 0,2.125 1.3125,1.125 1.625,0.5 -0.5625,1.8125 -4.25,-0.5625 -0.25,-1.375 0.875,-0.9375 0.3125,-2.5 -1,-1.6875 -7.8125,-0.125 -6.0625,-2.0625 -1.3125,-1.875 -2.0625,-1.125 -5.6875,0 -2.375,-0.9375 -3.5625,0.3125 -0.9375,2.25 -3,5.25 -1.75,0.4375 -0.5625,-0.875 0,-3.5625 -1.125,-1.0625 -2.8125,-0.8125 -2.5,-0.125 -0.5625,-0.875 -0.9375,-1.1875 -3,0.3125 -2.0625,1.125 -4.9375,-0.1875 -2.1875,0.8125 -0.8125,2.3125 -1.125,2.1875 -0.3125,1.8125 -0.4375,0.875 -0.5,0.1875 0,-2.3125 0.25,-2.125 -0.9375,-0.875 -5.0625,0.5 -0.5625,-1.3125 z",
            "supply": null,
            "drawUnit": {
              "x": 294,
              "y": 442
            },
            "label": ""
          }, {
            "id": 10,
            "name": "Irish Sea",
            "abbrev": "IRS",
            "type": "sea",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [1, 11, 9, 24, 22]
            },
            "territory": null,
            "path": "m 180.84256,482.22284 8.96994,2.90216 11.0625,5.75 12.375,10.6875 9.125,11.4375 10.375,-7.5 5.875,-3.5625 7.375,-2.5 8.125,-1.3125 4.6875,0.125 0.9375,-1.9375 1.6875,-0.9375 2.3125,0 1.5,-0.75 3.25,-3.1875 4.875,0.125 0.9375,-0.75 L 276.5,488 l 1.25,-1.25 1.8125,-2.1875 0.375,-1.3125 4.6875,-4.4375 1.5625,0 1.8125,0.5 2.3125,0.25 1.375,-0.6875 1.625,-1.625 1.5,-0.75 2.375,-0.0625 1.5625,0.9375 1.3125,1.5625 1.3125,0.875 1.125,0.4375 2.5,-0.625 3.4375,-0.3125 2.25,-0.5625 2.5,0.0625 1.75,-1.1875 4.5,-1.125 1.1875,-0.8125 0.8125,-1.625 -0.25,-1.5625 -0.8125,-0.75 -2.875,-0.375 -3.4375,0.3125 -1.9375,1.0625 -2.3125,0.0625 -1.3125,0.5625 -3.5,0.0625 -1.5,-1.875 -1.375,-2.0625 -1.625,-1.75 -1.25,-2.4375 -1.625,-0.625 -1.8125,-1.125 -1.3125,-1 -1.25,-1.875 -1.8125,-0.375 -2.1875,0.5625 -1.6875,0.5625 -2,-0.0625 -1.25,-2.125 -0.625,-4.875 0.1875,-3.125 2,-0.875 4.4375,0.5625 3.375,-0.125 4.375,0.125 4.375,-1.3125 1.8125,-1.5625 0.6875,-1.6875 0.625,-3.375 -0.0625,-3.875 0.3125,-1.6875 -0.375,-1.5 -0.9375,-1.4375 -6.1875,-0.0625 -0.8125,-0.8125 0,-1.5625 3.5,-1.5 5.5,0 2.5,-0.6875 2.25,-1.4375 1.125,-2.0625 2.25,-1.8125 3.5625,-0.4375 2.5,0.8125 0.875,1.0625 0,2.125 1.3125,1.125 3.625,0.25 2.25,-0.9375 -0.25,-4 1.375,-1.125 1.375,-0.0625 1.125,-1.125 0.3125,-5.25 1.4375,-1.6875 0.5625,-1.875 -0.375,-6.125 -1.0625,-0.9375 -2.875,-0.4375 L 329.5,405 l -1,-2.6875 -33.125,-9.125 -3,1.25 -7.625,0.25 -0.25,2.1875 -1.125,1.625 1.3125,2.25 0,2.3125 0.625,1.8125 0.0625,2.75 -1.625,2.75 -0.4375,1.875 -2.1875,0.9375 -1.75,6.375 -0.375,2.625 -0.9375,2.0625 -1.4375,0.125 -0.8125,0.875 -2.125,4.5625 -2.125,2.6875 -1.3125,1.25 0.25,5.625 -1.25,1.25 -2.75,0 -3.1875,-2.375 -1.625,0.375 -1.4375,0.75 -1.1875,-1.125 -2.5625,-3.3125 -1.375,-0.625 -2.5,0.3125 -1.5625,2.25 -1.3125,1.3125 -9,0.375 -0.9375,0.75 -1.875,0.3125 -1.75,1.3125 -1.5,0.5625 -1.1875,0.0625 -1.125,0.9375 -2.6875,-0.0625 -1.5625,-1.0625 -1.1875,-1.5625 -1.375,-0.4375 -1.25,1.0625 -3.8125,0.0625 -2,-1.25 -1.25,-2.4375 0.25,-3.625 -1.5625,-0.625 -3.125,0 -3.6875,1.75 0.25,-1.8125 -3.60693,0.57892 -8.3085,5.39169 -7.15946,6.62913 -2.91681,4.94975 -2.65165,8.39689 -2.06936,10.95165 z",
            "supply": null,
            "drawUnit": {
              "x": 266,
              "y": 563
            },
            "label": ""
          }, {
            "id": 11,
            "name": "Mid Atlantic",
            "abbrev": "MAO",
            "type": "sea",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [1, 10, 9, 26, 30, 72, 69, 71,
                73, 12
              ]
            },
            "territory": null,
            "path": "m 147.9375,845.625 -2.875,9.5625 c -2.6231,-0.35748 -4.91628,1.82465 -7.125,3.0625 l -4.6875,3.4375 -1.75,1.75 -1.5,2 -0.625,2.25 -1.75,1.125 -1.875,0.9375 -0.9375,1.1875 -0.25,2.875 -1.0625,2.0625 -1.375,0.6875 -1.25,0.25 -0.125,1.375 -1.4375,1.6875 -2,0.875 -1.8125,2.25 -1,2 -2.5,2.4375 -3.125,1.875 -1.3125,1.1875 -1.125,2.0625 -1.1875,1.0625 -2.4375,0 -1.5625,0.75 -8.875,0.25 -1.5625,0.625 -0.625,1.1875 -1.0625,1.0625 -3.4375,0.25 -4.3125,-0.4375 -1.125,-0.625 -0.6875,-0.1875 -0.6875,0 -1.4375,0.875 -1.375,0.1875 -7.4375,-0.125 -1.9375,-1.0625 -0.875,-0.125 -1.25,0.375 -1.0625,2.3125 -0.8125,1.25 -5.4375,1.9375 -8.4375,3.6875 -0.75,1.75 -2.25,1 -1,1.6875 -0.5625,4.25 -0.875,1 -1,2.1875 L 40.5,919 l -1.625,0.5625 -2,1.9375 -1.4375,2.25 -1.0625,0.75 -2.75,0.8125 -1.625,2.125 -1,1.5625 -1.75,1.625 -0.625,1.9375 -1.875,1.4375 -0.3125,1.5625 -1.4375,1.75 -1.4375,1.25 -1,2.375 -1.625,1.375 -1.3125,1.375 -1.0625,4.25 L 16.4375,965 0,965 0,469.93686 l 180.84256,12.28598 8.96994,2.90216 11.0625,5.75 12.375,10.6875 9.125,11.4375 3.375,5 12.875,23.75 5.8125,4.875 8.1875,5.4375 4.9375,0.875 4.68571,-0.88784 0.17677,3.44714 -1.06066,1.50261 0.0884,2.20971 3.00521,3.27036 3.0052,-0.0884 4.33103,0.35355 0.97227,1.41421 1.85616,0.61872 2.03293,1.41421 0.88388,2.03294 3.97748,5.39169 1.06066,0.97227 2.12132,0.17677 0.97227,0.97228 1.59099,4.5078 2.20971,4.24264 1.32582,0.35356 0.7955,0.88388 0.17678,2.74004 -1.32583,0.88388 1.14905,1.67938 0.61872,1.32583 0.26516,1.41421 0.0884,2.03293 1.06066,1.14905 -1.14905,2.03293 -1.32582,0.88389 -0.61872,1.06066 0.17678,1.59099 1.14904,0.88388 0.44195,1.23744 0.0884,1.94454 0.97228,0.97227 1.06066,0.70711 2.20971,3.18198 -0.0884,2.91681 0.53033,2.47488 1.85615,0.88388 1.59098,0 0.97227,2.03293 -0.0884,2.65165 -0.88389,1.76777 -0.97227,4.77297 -1.14905,0.53033 -1.76776,0 -1.14905,0.53033 0,1.06066 1.23743,0.26517 1.67938,1.59099 -0.17677,1.59099 -1.06066,1.94454 -2.20971,2.2981 -0.70711,1.59099 0.53033,4.06586 -1.85616,0.97227 -0.79549,2.56327 -1.14905,1.94454 -1.23744,1.5026 0,1.23744 1.76777,1.5026 0.0884,2.47487 -0.70711,2.12132 -1.14905,1.32583 -1.41421,0.88388 -1.5026,1.85616 -1.41421,5.74524 -0.7955,0.70711 -1.85616,0.88388 -1.06066,1.67938 -0.26516,4.68458 -0.88388,2.56326 -6.27558,7.33624 -2.12132,0 -4.96021,0.0376 -3.875,-1.3125 -1.5,-1.8125 -4.6875,-0.25 -2.875,-2.5625 -5.1875,0.125 -5.5625,-0.4375 -2.3125,-0.8125 -0.5625,-1.3125 -1.125,-2 -1.375,-1.375 -2.125,-0.4375 -1.375,-0.5625 -1,-1.8125 -1.125,-1.5 -1.0625,0.1875 -2,1.125 -4.5,-0.3125 -3.3125,-1.4375 -3.0625,-3.25 -1.625,-2.125 -1.5,-0.125 -3.875,-1.875 -1.4375,-0.9375 -6.3125,-0.4375 -4.5,-6.8125 -1.875,-0.9375 -1.875,1.75 -1.375,0.0625 -1.3125,-0.625 -4,-0.375 -1.5625,-1.5 -6.8125,-0.125 -1.9375,-1.125 -2.1875,-2.4375 -1.4375,-3.4375 -0.3125,-3.625 -1.5,-1.1875 -3.1875,-0.375 -6.625,0 -2.25,0.75 -0.6875,2.625 -1.625,3.8125 -2.1875,0.5 -1.75,-0.6875 -0.125,-1.625 -1.5,-0.5 -7.625,-0.125 -1.375,-1.0625 -2.8125,0.4375 -2.0625,2.5 -4.6875,3.375 -0.1875,2.6875 1.3125,1.125 4.9375,0.1875 1.0625,1.25 -0.5,2.375 -1.3125,0.5 -1.875,0.5 -1.3125,1.625 1.25,0.8125 2.5625,-0.0625 1.125,1.6875 -0.3125,3.375 -0.875,1.625 -0.6875,1.5 -2.25,0.0625 -0.875,0.5 -1.125,1.9375 -0.125,6.125 -0.9375,1.125 -0.5625,1.625 -1,2.125 -1.5625,1.4375 -0.5625,1.1875 -0.3125,3.3125 0.3125,5.6875 0.8125,2.5625 0,2.1875 -1.1875,1 -5.0625,-0.125 -0.9375,2.5 -1.0625,1.125 -0.9375,2.1875 1.25,1.1875 2.75,0.1875 0.875,0.625 0.125,1.625 -0.25,1.5625 -1.375,1 -0.4375,1.3125 -0.625,0.8125 -1,0.125 -0.9375,0.5 -2.125,1.875 -1.1875,1.9375 -0.9375,2.1875 -0.625,2.4375 -2.125,1.8125 -2.1875,4.1875 -2.5,1.0625 -3.875,4.625 -1,0.3125 -4.5,-0.125 -1.5625,2.1875 -0.625,1.875 0.0625,3.625 -0.25,3.3125 -0.9375,2.1875 -1.9375,0.625 -1.6875,1.0625 -0.4375,1.3125 1.625,0.5 2.125,0.4375 0.8125,2.125 -0.8125,3.75 -0.6875,0.8125 2.1875,2.0625 4.8125,0.0625 1.5625,1.375 0.375,1.0625 0.0625,2.875 -0.4375,0.9375 -3.6875,1.75 -0.9375,1.5625 -0.0625,3.5 -0.875,1 -1.5,1.0625 -1.5,1.9375 0.625,1.4375 0.25,1.6875 1.25,1.0625 -0.1875,2.1875 -1.0625,1.3125 -1.75,4.4375 -1.375,1.75 -3.5625,1.875 -2.75,2.3125 -0.8125,1.125 -0.625,1.5625 0.625,1.1875 1.625,0 2.625,-1.9375 3.25,-0.0625 2.25,0.8125 2.875,3.75 2,1.3125 1.4375,1.375 5.0625,-0.125 4.125,2.625 2.5625,-0.875 1.6875,-0.5625 12.875,-0.3125 1.3125,1 0.0625,2.4375 -0.9375,1.875 -0.5,0.625 1.625,1.875 1.75,1.0625 2,0.375 0.625,1.3125 0.375,6.5 2.5,12.625 3.6875,5.8125 2.5625,1.5625 z",
            "supply": null,
            "drawUnit": {
              "x": 68,
              "y": 315
            },
            "label": ""
          }, {
            "id": 12,
            "name": "West Mediterranean",
            "abbrev": "WME",
            "type": "sea",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [11, 71, 13, 14, 74, 73]
            },
            "territory": null,
            "path": "m 275.5,814.375 22.8125,1 1.875,2.25 0.25,3.3125 1.0625,2.4375 1.4375,1.5625 1.5625,0.375 -0.0625,-3.25 -1,-0.75 -0.125,-2 1.3125,-1.375 1.0625,-0.4375 1,-0.0625 0.875,-0.9375 -0.0625,-1.5625 -1.125,-1.875 15.3125,-7.6875 1.1875,0.25 1,0.9375 1.875,0 1.75,-1.0625 2.9375,0.0625 1.125,1.1875 0.5625,2.125 0.9375,2 2.1875,2.125 0.875,1.375 1.4375,0.125 3.75,-1.875 2.6875,-0.8125 1.375,-1.125 0.25,-1.3125 -1.0625,-1.9375 -0.125,-3.8125 8,0.0625 0.8125,1.0625 2.625,-0.1875 1.9375,0.9375 2.25,-0.1875 1.875,1.25 2.3125,0.1875 1.25,-1.3125 78.91663,8.06486 -0.61872,1.76777 -0.17677,2.38648 0.88388,2.38649 0,2.47487 1.06066,2.20971 -2.82843,6.98268 0.7955,1.76777 1.06066,1.32582 0,7.86657 0.97227,1.5026 -0.0884,2.2981 1.94455,1.14904 2.26567,45.12974 -1.6875,1.375 -1.1875,0.3125 -1.5625,0.875 -1.4375,2.3125 -1.4375,1.0625 -1.9375,-0.375 -1.8125,-0.625 -2.4375,-0.375 -1.5,-0.625 -1.6875,0.0625 -1.125,-0.3125 -7.5625,-0.1875 -1.375,-0.875 -1.125,-2.3125 -2.5,-1.625 -2.125,-0.0625 -2.1875,-1.5625 -0.875,0.5625 -3.1875,0.0625 -1.625,1 -1.375,1 -4.75,0.3125 -1.25,-1.1875 -0.4375,-3.0625 -1.3125,-1.75 -1.875,-0.4375 L 396.5,887 l -1,2.0625 -2.125,0.5 -2.0625,1.6875 -2.75,0.0625 -4.5,-1.5 -1.375,0.25 -1.6875,1.5625 -2.125,1.0625 -4.625,-0.25 -2.625,-0.625 L 369,890.5 l -1.125,-1.5625 -0.9375,-2.5 -1.125,-0.5625 -1.875,0.625 -1.75,-0.625 -1.4375,-1.3125 -2.9375,-0.3125 -1.5,-1.0625 -4.6875,-1.25 -3.25,-2.0625 -1.75,0.5625 -2.125,1 -2.3125,0.8125 -2.0625,1.25 -15.1875,0.0625 -1.5,-0.875 -1.8125,-0.0625 -0.9375,-0.8125 -1,-0.75 -0.875,0.3125 -1.75,1.125 -1.0625,0.125 -1.5625,-1 -3.5,0.0625 -3.8125,-0.3125 -2.75,-3.375 -2.375,-0.5625 -4.8125,0.25 -1.125,0.6875 -2.8125,0.25 -3.4375,-2.4375 -3.0625,0.3125 -2.5,0.875 -4.5625,0.3125 -2.625,1.0625 -5.125,3.8125 -3.625,0.8125 -1.625,0.75 -2.6875,0.25 -1.4375,1.25 -2.1875,1 -2.8125,1.0625 -3,-0.125 -1.125,-0.8125 0.125,-3 -1.125,-1.125 -1.125,0 -2.5,0.875 -1.1875,1.375 -1,1.75 -2,0 -7.6875,-4.1875 -1.875,-0.1875 -0.875,2 -1,1.5625 -2.25,1.5625 -2.125,2.75 -0.5625,2.5 -2.25,1.75 -3.3125,1.4375 -3.5,0.875 -3.4375,0 -1.5,-1.625 -2.625,-0.5 -1.4375,-1.125 -5.9375,0.25 -1.625,-0.8125 -1.4375,-1.75 -1.1875,-1.1875 -2,-0.4375 -1.4375,-1.3125 -0.625,-2.5 -0.4375,-2.75 -0.6875,-1.125 -2.5,-0.25 -1.875,1 -1.1875,1.6875 -1.75,0.3125 -5.4375,-0.0625 -2.375,-0.8125 -2.8125,-0.3125 -1.3125,-1.625 -1.0625,-0.875 -1.75,-0.3125 -10.875,0 -1.5,-0.625 -0.4375,-2.5625 -2.1875,-2.4375 -1.75,-1.25 -0.9375,-0.25 -0.8125,-1.1875 -2.75,-9.8125 -0.8125,-1.5 -1.5625,-0.4375 -1,-0.875 -3.0625,-4.4375 2.875,-9.5625 2.5625,-0.25 2.75,-1.6875 1.875,-2.4375 4.9375,-0.75 4.5,-0.125 1,2.3125 1.6875,0 2.75,-1 5,-0.125 4.75,-0.5 2.5625,-1.625 5.875,0.0625 1.3125,1 2,0 1.625,0.6875 2.4375,1.75 3.25,1.4375 1.0625,0.8125 2.625,0.1875 4.875,2.875 5.1875,0.3125 2.3125,0.875 1.6875,0 2,-1.0625 3.125,-1.125 4.375,-3 4.875,-4.5625 1.5,-2.5 2.4375,-1.5 5.9375,-0.25 6,0.3125 2.1875,0.3125 2,-0.5 1.3125,-0.875 -0.125,-1.375 -0.875,-1.5625 0.375,-2.4375 2.125,-2 1.75,-2.25 2.1875,-0.625 1.625,-1 1.0625,-1.625 0.875,-0.9375 4.25,-0.3125 1.3125,-1.6875 3.625,-0.625 1.5,-1.5 2.375,-0.0625 1.0625,-0.6875 z",
            "supply": null,
            "drawUnit": {
              "x": 335,
              "y": 119
            },
            "label": ""
          }, {
            "id": 13,
            "name": "Gulf of Lyon",
            "abbrev": "GOL",
            "type": "sea",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [12, 71, 31, 38, 40, 14]
            },
            "territory": null,
            "path": "m 465.98337,787.5162 -1.23742,-7.60142 -1.94454,-1.14905 -0.35355,-1.41421 -1.06066,-0.88388 -0.7955,-2.47488 -1.14905,-1.94454 -3.09359,-1.85616 -0.70711,-1.5026 -0.0884,-5.74524 -0.79549,-1.41422 -0.26517,-1.23743 2.03294,-1.76777 0.7071,-1.41421 0.0884,-6.45235 0.97227,-1.23744 2.20971,-0.97227 2.38649,0.0884 0.97227,-0.53033 1.85615,-0.35356 2.2981,-0.17677 1.23744,-0.44194 0.97227,-1.23744 0.35355,-1.41422 1.32583,-0.97227 1.591,0.26516 19.88735,-8.04332 0.35355,-4.24264 -2.12132,-4.86136 -0.26516,-3.8007 0.35355,-3.53554 -1.67938,-0.88388 -1.06066,-0.97227 -0.35355,-1.85616 -1.76775,-0.97227 -2.2981,0 -1.14905,-1.14905 -1.06066,-1.67937 -1.06066,-1.23744 -1.23743,-0.26517 -0.88389,-0.79549 -1.94454,-4.06587 -1.41421,-0.61871 -3.71231,-0.17678 -2.20971,-1.14905 -2.91682,-0.0884 -2.38648,1.32583 -2.56327,0.88388 -2.38648,0.61872 -1.59099,1.23744 -1.41422,0.61871 -0.88388,1.94455 -1.06066,1.23744 -1.23744,1.06066 -4.77297,0.0884 -3.00519,2.82844 -2.03293,1.23742 -2.03294,0 -3.71231,0.26516 -2.74004,0.88389 -2.29809,1.59099 -1.14905,2.03293 -1.76777,2.47487 -2.12132,0.70711 -1.06066,-0.7955 -1.67938,0.88389 -1.23743,1.32582 -1.41422,2.20971 -2.2981,1.14905 -2.82842,0.26516 -2.82843,-0.35355 -1.06066,-1.76777 -4.77297,-1.06066 -1.32583,-1.32582 -2.29809,-5.03814 -0.88389,-1.06066 -7.42462,0 -1.14905,-0.26516 -0.7071,-0.61872 -0.26517,-1.67938 -1.14905,-1.32582 -5.03813,-0.88389 -2.82843,-1.32582 -0.61872,-1.14905 -1.41421,-1.85616 -4.33103,-0.0884 -0.88389,1.06066 -1.23743,0.97228 -0.61872,-0.97228 -1.41421,-1.06066 -2.38649,0.17678 -1.06066,0.44194 -6.18718,0.61872 -1.50261,1.23744 -0.53033,1.41421 -0.61872,0.97227 -2.74003,0 -1.67938,1.32583 -0.70711,1.67938 -1.94454,1.85615 -0.0884,6.62913 0.79549,1.94454 0.26517,2.38649 -1.06066,1.94454 -0.61872,2.12132 0.53238,2.4436 -1,1.8125 -0.875,3.125 -0.3125,2.625 -0.875,1.75 -2.1875,0.8125 -0.625,1.8125 -0.875,1.6875 -4.1875,0.375 -4.875,-0.1875 -1.25,0.9375 -1.0625,1.4375 -0.9375,2 -1.875,0.6875 -5.5625,0 -2.375,0.5625 -3,0 -1.0625,-0.5625 -1.5625,-1.6875 -1.1875,-0.3125 -2,0.4375 -0.9375,1.6875 -1.4375,0.8125 -2.5,0.1875 -1.9375,0.6875 -3.25,0.125 -2,0.625 -1.125,1.875 -2.75,2.1875 -2.0625,0.4375 -0.5,3.3125 -2.0625,0.5625 -3.5,0.125 -1.125,1.125 -0.5,3.8125 -7.5625,6.75 -1.5,2.6875 -1.1875,1.375 -2.75,0.5625 -0.75,2.125 -1.5625,1.4375 -1.625,0.3125 -0.9375,1.4375 -2.125,2.5625 -2.0625,0.875 -2.25,3.625 -0.5,2.25 -0.125,3.9375 0.5625,2.1875 3.3125,2.0625 4.5,4.3125 0.625,1.1875 -0.6875,3.0625 22.8125,1 0.5,-1.875 2.9375,-1.8125 1.6875,-1.25 1.75,0.75 1,0.625 0.1875,1.25 15.3125,-7.6875 0.75,-0.625 0.5,-1 5.0625,-0.4375 1.875,-1.125 0.4375,-0.875 0.625,-2.1875 6.5625,-2.5 1.0625,1.5 0.1875,3.3125 0.8125,0.9375 4.0625,0.125 0.8125,1.125 8,0.0625 0,-3.5625 0.8125,-0.75 2.25,-0.875 1.3125,-0.9375 1.75,0.125 0.875,1.875 1.875,1.25 1.4375,1.4375 1.5,1.125 0.5,1.25 0.75,0.8125 78.91663,8.06486 1.14905,-2.38648 0.97227,-2.82843 0.0884,-1.59099 -1.41421,-2.38649 -0.88389,-1.94454 -2.65165,-3.35876 0,-1.94454 1.41422,-2.56326 2.74004,0.0884 2.12132,0.79549 0.88388,0 1.5026,-0.79549 1.14905,-0.97228 1.32583,0 1.76776,-1.32582 0.26517,-1.06066 2.03293,-0.70711 1.85616,-1.23744 2.2097,-0.79549 z",
            "supply": null,
            "drawUnit": {
              "x": 397,
              "y": 194
            },
            "label": ""
          }, {
            "id": 14,
            "name": "Tyrhennian Sea",
            "abbrev": "TYS",
            "type": "sea",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [12, 13, 40, 41, 43, 15, 74]
            },
            "territory": null,
            "path": "M 519.45831,887.21826 489.625,901.25 l -0.5,-1.0625 -1.5,0.125 -4.1875,0.875 -6.375,3.6875 -2.75,0.875 -2.75,0.375 -1.1875,-1.125 0,-2.875 0.9375,-1.875 0.4375,-3.125 0.5625,-1.5625 -0.8125,-1 -3.25,-0.125 -1.125,-1.1875 -0.8125,-1.3125 -2.8125,-0.5 -1.875,0.4375 -1.625,1.625 -3.0625,0.0625 -2.1875,-0.875 -2.875,-0.3125 -2.1875,0.375 -2.26567,-45.12974 1.5026,-0.7071 2.65165,-1.94455 0.35355,-1.94454 1.06066,-1.94454 1.67938,-0.44195 2.82843,0.17678 0.88388,1.76777 1.85616,0.0884 2.29809,-0.97228 3.00521,-0.44194 0.79549,-0.97227 0,-1.76777 -0.53033,-1.14904 -0.44194,-2.38649 -0.17678,-3.35876 0.26517,-1.67938 0.97227,-0.79549 1.06066,-1.5026 -0.0884,-2.91682 0.88389,-3.53553 0.35355,-3.09359 0,-6.27558 0.53033,-2.29809 1.76777,-0.70711 1.5026,-1.32583 -0.44194,-0.97227 -3.88909,-13.52341 -2.12132,-5.48008 -1.23742,-7.60142 0.88389,-0.7071 -0.0884,-7.24785 0.88388,-2.91682 0.0884,-1.67937 3.88909,-3.0936 0.61872,-2.38648 0.88388,-1.5026 0.70711,-1.76777 0,-9.104 1.14904,-1.06066 1.14905,-1.23744 0.0884,-1.94454 -1.5026,-1.59099 19.88735,-8.04332 0.0884,2.91681 -0.44195,3.35876 -0.79549,2.2981 0.26516,1.5026 1.14905,0.88388 1.85616,-0.0884 3.0052,-0.35355 1.23744,1.41421 0,1.85616 0.97227,1.59099 0.17678,1.5026 0.97227,1.59099 1.06066,0.35356 1.14905,1.59099 0,2.56326 -0.44194,2.29809 1.23743,0.97228 1.94455,0.61872 4.41941,0.0884 3.44715,0.35356 0.53032,1.14904 0.26516,1.32582 3.62393,7.07107 1.67938,2.2981 3.88908,1.76776 1.67938,1.23744 0.88388,1.5026 1.50261,5.83363 2.91681,2.65165 2.65165,0.70711 3.27037,0.17678 1.94455,2.38648 0.26516,2.47488 1.23744,1.41421 4.33103,1.94454 8.3085,1.85616 0.44194,0.79549 -0.35355,2.47488 0.61872,1.85615 5.39169,2.65165 2.74004,-0.17677 2.12132,0.61871 0.35355,2.91682 1.06066,1.06066 2.12132,1.06066 1.76777,1.23744 2.82842,0.79549 0.97228,1.85616 -0.0884,3.09359 0.97227,2.2981 1.59099,0 1.59099,1.41421 0.26516,2.03293 -0.17677,1.67938 0.97227,1.59099 1.59099,1.59099 2.65165,1.67938 1.41421,0.35355 1.23744,1.06066 0.70711,2.03294 1.59099,0.7071 2.20971,0.35356 1.06066,1.76776 0.97227,5.83363 0.17678,3.44715 1.06066,3.35876 0.17677,2.12132 1.06066,5.21491 -1.06066,3.44714 0,2.56327 -0.35355,2.20971 -4.77297,4.15425 -0.0884,2.03293 -0.97227,1.85616 -0.0884,2.03293 -1.23744,1.94454 -1.85615,1.06066 -0.97227,2.20971 -3.00518,-1.32583 -0.44194,-1.5026 -1.32583,-0.79549 -1.76776,1.14905 -3.35876,0.26516 -1.23744,1.41421 -1.41421,1.14905 -3.35876,0.35356 -2.56326,-1.32583 -1.94454,-1.23744 -1.85616,-0.79549 -2.47487,0.79549 -5.39169,2.20971 -4.41942,0.0884 -1.94454,-0.44194 -3.09359,2.03293 -2.12132,0.61872 -2.56327,-0.17678 -1.06066,-1.67938 -0.0884,-3.44714 -0.61871,-1.94454 -1.23744,-1.85616 -1.5026,-0.88388 -1.5026,1.06066 -1.76777,2.91681 -0.97227,0.61872 -1.14905,0 -1.76777,-0.70711 -1.76777,-0.97227 -1.23743,0.17678 -1.85616,0.79549 -2.12132,3.27037 -0.26516,1.94455 -0.70711,1.94454 z",
            "supply": null,
            "drawUnit": {
              "x": 513,
              "y": 125
            },
            "label": ""
          }, {
            "id": 15,
            "name": "Ionian Sea",
            "abbrev": "ION",
            "type": "sea",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [74, 14, 43, 42, 16, 75, 76,
                17, 18
              ]
            },
            "territory": null,
            "path": "m 736.62845,918.59615 12.63957,24.83709 -1.41421,0.35356 -0.44194,2.29809 0.79549,2.12132 0.35356,2.47488 0.61872,2.47487 2.38648,0.35355 L 751.65451,965 495.5,965 l -0.25,-3.8125 -1,-2.625 -0.875,-1.5625 -1.3125,-1.75 -1.3125,-4.0625 -0.25,-3.5 -1.1875,-2.5625 -0.6875,-2.4375 -1.5,-1.25 -1.3125,-2.0625 -0.875,-2.5625 -1.1875,-1.5 -0.875,-1.4375 -1.5625,-0.125 -2.0625,-0.9375 -3.25,-3.5625 -1.375,-2 -0.4375,-3.8125 0.4375,-4.9375 1.125,-2.9375 5.0625,-2.125 1.4375,-0.8125 7.875,-7.3125 0.1875,-2.125 -0.6875,-1.9375 29.83331,-14.03174 0.61872,1.23744 1.32582,1.32583 0.17678,1.14904 1.14905,0.53033 5.74524,-0.0884 1.23744,0.0884 0.97227,0.97228 0.70711,0.88388 1.59099,1.14905 2.56326,0.26516 2.82843,0.88389 0.35355,1.94454 0.70711,1.85616 3.53553,3.09359 5.39169,2.12132 2.56326,0 4.77297,0.70711 3.09359,0.17677 0.97228,1.14905 0.17677,2.03293 0.53033,1.67938 0.26517,2.56326 0.61872,1.23744 2.29809,0.70711 2.91682,2.12132 1.67938,0.44194 1.59099,-0.61872 1.23744,-0.79549 1.41421,-1.50261 0.0884,-5.03813 1.14905,-4.24264 0,-2.03294 -1.41422,-1.94454 -0.0884,-6.45235 1.32583,-1.67938 -0.0884,-1.85615 2.91682,-2.91682 0.35355,-1.94454 0.70711,-1.23744 0.17677,-2.2981 1.41424,-2.2981 1.32582,-0.88389 3.00518,1.32583 0.88388,0.70711 1.14905,0 1.85615,0.97227 2.82843,1.76777 1.23744,0.97227 1.67938,0 0.61871,-0.53033 0.0884,-3.53554 0.44194,-1.5026 3.35876,-0.53033 1.5026,-1.23744 -0.26516,-3.0052 0.61872,-1.41421 2.12132,-0.61872 1.41421,-0.88389 0.88388,-2.03293 0.26517,-2.91681 0.53033,-3.27037 0.61872,-2.20971 1.67938,-0.44194 2.65165,0.53033 1.85615,0.0884 0.88389,-1.14905 1.14904,-2.03293 0.7955,-2.82843 0.88388,-1.67938 0.7955,-1.23744 0.35355,-1.06066 -0.61872,-1.59099 -1.94454,-0.97227 -0.97227,-2.20971 -1.76777,-0.7071 -0.7955,-1.14905 -1.32582,-0.7955 -2.74004,-0.88388 -1.59099,-0.7955 -0.97227,-1.06066 0.17678,-1.5026 0.97227,-2.74004 0.88388,-1.76776 -0.17678,-2.65162 2.38649,-3.35876 0.26516,-1.5026 1.50261,-3.0936 1.59099,-2.74004 2.29809,-3.44714 0.7955,-1.76777 1.59099,-0.53033 2.03293,0 2.20971,2.03293 0.61872,1.94455 0,2.20971 0.79549,1.59099 2.2981,0.97227 5.3033,-0.0884 3.97748,2.03293 1.59099,1.85616 1.59099,3.53553 1.23743,1.85616 0.97228,0.88388 0.88388,-0.61872 0.97227,-1.14905 0,-2.91681 0.53033,-2.12132 0.70711,-1.76777 19.97579,-3.18201 0.97227,1.23744 1.23743,0.7071 1.85616,0.44195 2.20971,1.5026 1.5026,2.20971 1.23744,2.29809 2.12132,2.82843 0.7071,2.38649 1.41422,2.47487 0.97227,0.97227 1.7677,3.53557 1.94454,3.0052 2.74004,2.56326 2.74004,0.53033 1.23743,2.12132 2.47488,3.09359 2.56326,1.59099 1.23744,2.03294 -1.23744,1.76776 -0.35355,1.23744 -1.94455,0.17678 -1.41421,0.53033 0,1.41421 1.06066,1.06066 2.82843,-0.17678 2.12132,1.94455 1.85615,2.12132 1.41422,2.03293 2.56326,0 1.23743,1.06066 11.04855,0 1.41421,1.94454 8.04334,0 2.2981,1.14905 2.65165,0.70711 1.5026,1.06066 2.65165,-0.17678 1.67938,1.59099 0.70711,1.76777 0.0884,3.0052 -0.97228,0.7955 -6.98268,-0.0884 -1.59099,-0.7955 -4.5078,0.26517 -1.94455,-1.76777 -1.23743,-1.5026 -1.14905,-0.61872 -2.20971,0.53033 -3.44715,0 -1.14904,-1.14905 -2.2981,-0.79549 -2.2981,0 -0.44194,1.41421 -1.59099,1.67938 -1.32583,0.88388 -2.2097,0.61872 -1.41422,1.76777 -0.35355,3.35876 1.06066,1.59099 4.86136,1.23743 0.97227,1.59099 2.12132,5.74525 0.88388,3.27037 1.06066,2.03293 0.0884,1.5026 1.14905,1.5026 -0.44194,2.2981 -0.97227,1.5026 0.0884,2.38649 1.23743,1.76776 1.06066,0.97228 2.91682,0.35355 0.88388,-0.7955 0.17678,-5.12652 0.44194,-1.06066 1.06066,-1.23744 2.91682,-0.61872 1.32582,1.14905 0.88388,4.24264 0.97228,0.88389 1.06066,0 1.06066,1.67938 0.17677,7.42462 0.88389,1.23743 0.97227,-1.67938 1.85615,-0.7071 0.17678,-3.8007 0.44194,-1.76777 1.85616,-0.26516 4.68458,1.85615 1.06066,1.23744 z",
            "supply": null,
            "drawUnit": {
              "x": 631,
              "y": 51
            },
            "label": ""
          }, {
            "id": 16,
            "name": "Adriatic Sea",
            "abbrev": "ADR",
            "type": "sea",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [15, 42, 30, 47, 75]
            },
            "territory": null,
            "path": "m 661.4984,823.75542 -19.97579,3.18201 -0.44194,-1.32582 -1.32583,-1.32583 -0.97227,-0.61872 -2.65165,-0.88388 -1.41421,-0.97227 -1.23744,-0.97228 -1.06066,-1.76776 -0.70711,-2.2981 -0.97227,-2.03293 -1.41421,0 -1.41422,-1.32583 -3.27037,-0.44194 -1.59099,-1.76777 -1.23743,-2.03293 -1.85616,-0.53033 -2.20971,-0.88388 -1.5026,0 -2.03293,-1.06066 -2.20971,-0.88388 -1.06066,-1.76777 -2.38649,-2.20971 -1.59099,-2.38649 -1.59099,-0.61871 -2.74003,0 -1.50261,-1.23744 -1.67938,-1.94454 -5.92201,-4.68459 0.0884,-2.20971 1.50261,-3.62392 0.17677,-1.67938 0.70711,-0.79549 0.61872,-0.35355 0,-0.53034 -1.06066,-0.44194 -3.18198,-0.0884 -1.67938,-0.53033 -3.71231,-0.0884 -2.2981,-0.97228 -3.35876,-0.17677 -1.59099,-0.7955 -0.97227,-1.14905 0,-1.06066 -1.23744,-0.79549 -2.29809,-0.17678 -5.56847,-1.67938 -1.94454,-1.67937 -0.35356,-2.56327 -1.94454,-1.14905 -1.14905,-2.38648 -2.20971,-2.03293 -1.06066,-1.32583 -1.06066,-0.44194 -0.7071,-2.65165 0,-2.20971 -1.32583,-2.74004 -0.53033,-2.91681 -0.97227,-1.41422 -1.06066,-0.79549 0.26516,-10.42983 -1.32582,-4.33103 -1.06066,-1.59099 -5.56847,-1.85615 -1.85615,-1.06066 -0.53033,-1.5026 -2.38649,-2.38649 -2.47487,-1.5026 -4.41942,-1.85616 -0.70711,-1.67937 -1.23743,-1.94455 -1.59099,-2.03293 -2.03293,-1.14905 -0.0884,-8.75045 -0.88389,-1.67937 0,-6.18719 2.82843,0 1.67938,-1.06066 0.53033,-1.5026 -0.7955,-1.32583 -1.5026,-2.12132 -1.67938,-1.06066 -0.0884,-4.33103 1.06066,-1.67937 1.85615,-1.23744 4.33103,0.44194 1.76777,-1.41421 1.76776,-2.20971 2.47488,-0.44194 1.85615,-0.0884 1.23744,-0.70711 0.88388,-1.32582 2.56327,0.17677 1.23743,-1.41421 1.94455,-0.70711 1.5026,0.61872 2.12134,1.50262 -0.35356,4.59621 -0.7071,1.14905 1.41421,3.88908 0.53033,5.39169 0.70711,2.65165 1.5026,1.23744 0.17678,1.5026 0.88388,1.59099 1.59099,-0.0884 1.76777,-4.59619 1.14905,-7.24785 1.23743,-1.32582 5.3033,-0.17678 5.3033,0.17678 1.14905,1.14905 0.70711,2.03293 0.26516,4.41942 0.97228,1.67938 -0.0884,3.8007 1.23744,0.88388 0.7071,1.14905 0.26517,5.74524 0.97227,0.79549 0.53033,1.41422 1.32582,1.76777 -0.0884,1.23743 0.7071,0.7955 1.14905,0.26516 2.74004,0.97227 0.88388,1.59099 0.70711,1.85616 -0.61872,1.32583 -1.41421,1.06066 -1.14905,1.14904 0.97227,2.12132 1.85616,1.76777 1.23743,1.23744 0.44195,1.59099 1.59099,1.32582 -0.17678,1.67938 1.5026,2.2981 1.85616,2.20971 -0.17678,4.06586 0.0884,3.00521 0.53033,-1.67938 1.32582,-1.67938 4.68459,0 0.7071,1.5026 0.35356,2.47487 1.41421,0.97228 0.88388,-0.53033 2.82843,-0.35356 0.88388,-1.14905 1.59099,-0.7071 2.2981,0.7071 1.23744,0.26517 4.06586,1.76777 2.2981,1.94454 0,4.15425 -1.14905,0.7955 -2.2981,0.35355 -0.79549,0.53033 0,1.67938 1.76776,1.23744 2.20971,1.23743 2.56327,5.03814 1.14904,1.41421 0.97228,-0.79549 1.14904,-1.67938 1.06066,-0.70711 4.06587,-0.0884 1.94454,1.06066 0.88389,0.7955 3.27036,0.17678 1.85616,2.65165 1.94454,0.44194 1.85616,1.94454 1.94454,-0.17678 1.59099,1.06066 1.06066,2.65166 1.76777,1.41421 2.91682,2.74004 1.67937,2.29809 1.59099,0.61872 0.7955,1.76777 2.20971,0.70711 0.79549,0.79549 0.70711,1.5026 1.23744,0.7955 0.17677,1.59099 0.7955,0.88388 0.35355,1.59099 0.70711,0.88389 0,2.82842 -0.35355,2.91682 -0.70711,1.59099 -0.26517,2.47487 -0.53033,1.59099 -0.26516,8.13173 -0.44194,2.2981 -0.53033,8.75044 -0.7955,1.94455 z",
            "supply": null,
            "drawUnit": {
              "x": 598,
              "y": 205
            },
            "label": ""
          }, {
            "id": 17,
            "name": "Aegean Sea",
            "abbrev": "AEG",
            "type": "sea",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [15, 76, 79, 50, 52, 18]
            },
            "territory": null,
            "path": "M 846.23005,908.43147 844.5,917.75 l -2.25,0.875 -1.5,1.625 -2.125,0.75 -1.25,0.75 -0.875,1.625 -0.25,2.625 -8.5815,8.24085 -2.03294,-1.23743 -1.06066,1.76777 -0.17678,1.32582 -6.0988,5.39169 -1.67938,1.85615 -1.32583,1.06066 0.0884,1.06067 -9.01561,2.9168 -3.62393,-0.0884 -1.14904,0.97227 -1.14905,1.41422 -4.5962,-0.0884 -1.32582,-1.06066 -2.03293,-0.70711 -2.03294,-1.59099 -2.38648,-0.61872 -3.97748,1.06066 -3.71231,-0.26516 -2.20971,-1.06066 -2.47487,0 -1.14905,-0.70711 -2.12132,0 -2.03293,1.06066 -3.18198,-0.0884 -2.20971,0.88389 -3.0052,0.17677 -1.50261,-0.79549 -0.26516,-2.74004 -0.97227,-0.7955 -2.12132,0.17678 -2.65165,-0.26516 0,-3.27037 -0.88389,-1.67938 -0.88388,-0.70707 -1.06066,1.59099 -0.44194,3.00521 -1.94455,1.23743 -12.63957,-24.83709 0.97227,-0.7955 0,-1.23743 -1.06066,-1.76777 -0.61872,-2.47488 -1.32582,-2.29809 -1.06066,-2.56326 -1.14905,-1.32583 -0.88388,-3.35876 0.26516,-4.06586 1.06066,-1.23744 1.14905,0 0.97227,1.06066 1.41422,-0.17677 1.14904,-1.59099 -0.17677,-1.94455 0.88388,-1.06066 1.67938,-0.44194 1.23744,-1.5026 -1.50261,-2.2981 -1.14904,0 -0.88389,-1.32582 0.53033,-0.97228 0.17678,-1.5026 0.0884,-3.09359 1.5026,-1.14905 2.74004,-0.0884 1.5026,0.88389 2.03293,0.0884 4.41942,2.38649 0.70711,1.67938 1.06066,1.67938 1.14905,-0.61872 0.0884,-3.27037 -0.44194,-3.0052 -2.91681,-5.3033 -1.41422,-1.59099 -2.20971,-1.50261 -1.5026,-1.5026 -1.32582,-2.91681 -2.12132,-0.70711 -2.2981,-0.35355 -2.47487,-1.59099 -0.88389,-1.23744 -3.62392,0.17678 -0.70711,-1.06066 -4.06586,-2.03294 -1.76777,-0.0884 -1.59099,-1.23743 -0.79549,-1.32583 0.26516,-1.85615 1.59099,-0.70711 2.2981,-0.44194 0.88388,-1.5026 0,-2.12132 -1.5026,-1.59099 -0.88388,-1.94455 0.53033,-1.94454 2.03293,-0.44194 3.18198,0 2.12132,4.15425 1.85616,0.61872 1.41421,-1.14905 1.5026,-2.12132 -0.44194,-2.03293 -0.88388,-1.94455 -6.0988,-2.38648 -2.38649,-2.56326 -1.67937,-2.38649 -0.35356,-2.12132 -0.17677,-2.74004 -1.23744,-4.06586 -1.67938,-3.35876 -1.06066,-1.59099 -0.17678,-1.06066 0.17678,-2.20971 0.53033,-1.85615 0.7955,-1.67938 2.12132,-0.44194 3.88908,0 1.14905,1.06066 0.26517,2.38648 0.61871,1.41421 0,2.56327 0.7955,1.5026 1.85616,0.88388 3.09359,0.35356 1.32582,0.97227 1.23744,1.67938 0.79549,1.59099 1.14905,1.5026 0.88389,0.0884 0.97227,-0.61872 0.26516,-2.47488 3.00521,0.44195 2.74004,-0.26517 0.17677,-2.74004 0.88389,-1.23743 2.20971,-0.0884 1.23743,1.06066 1.76777,-0.0884 0.97227,-1.06066 0.0884,-1.94455 -2.38649,-2.74003 -1.67937,-1.06066 -2.2981,-0.26517 -2.47488,-1.76777 -0.44194,-4.24264 -1.06066,-1.67938 0.97227,-1.23743 2.03294,-0.61872 4.15425,-0.17678 0.61872,-0.88388 1.85615,-1.32583 1.14905,0.61872 2.2981,0.44194 4.59617,-0.0884 3.27037,-0.53033 2.12132,-1.41422 2.74004,-1.41421 2.74004,-0.88388 1.41421,-0.0884 2.65165,0.79549 1.23744,1.5026 6.18718,0.53035 1.23744,0.70711 2.29811,0.70711 0.0884,1.23743 1.59099,1.06066 3.0052,0.97228 1.94454,0.35355 1.67938,0.97227 2.38649,0 0.97227,0.7955 0.90272,1.2209 1.57214,6.73405 -0.35355,4.33103 -1.41421,1.94454 -0.7955,0.44194 -1.76777,2.03293 -2.12412,3.65562 -3.17918,0.58703 0.0884,3.53553 1.41422,0.61872 3.62392,-1.59099 3.18198,-0.88389 2.20971,-0.88388 1.85615,0.26517 0.7955,1.59099 -1.14905,3.62392 0.35355,4.86136 -0.35354,5.83363 4.15425,2.82843 1.14905,2.47487 -0.26517,7.6014 0.88389,3.09359 -1.5026,2.12132 -3.35876,1.14905 -3.27037,-1.23744 -1.32583,-1.32582 -0.35355,-2.12132 -1.23744,-2.47488 -1.5026,-0.35355 -0.17677,5.92202 -0.97228,1.59099 0.7955,1.94454 1.76777,1.5026 6.89429,0 1.23743,1.14905 1.50261,1.06066 4.5078,1.14905 0.97227,2.12132 -0.79549,1.76777 -0.17678,2.03293 0.53033,2.82843 2.03293,0.97227 4.06587,4.24264 1.76777,2.74004 0.61871,2.2981 -1.59099,3.88908 1.67938,1.5026 1.06066,1.14905 2.12132,-0.88388 3.35876,-0.88388 7.33623,-3.71231 1.85616,-0.44195 4.68458,1.06066 1.59099,3.00521 -1.59099,1.94454 -4.06586,2.38649 -2.82843,0.97227 -6.8059,1.41421 -3.97748,0.53033 -0.70711,1.32583 1.67938,0.7071 0.70711,0.70711 2.38648,0.35355 2.03294,-1.5026 3.62392,-0.26516 2.47487,-1.5026 1.67938,0.97227 z",
            "supply": null,
            "drawUnit": {
              "x": 786,
              "y": 71
            },
            "label": ""
          }, {
            "id": 18,
            "name": "East Mediterranean",
            "abbrev": "EME",
            "type": "sea",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [15, 17, 52, 54]
            },
            "territory": null,
            "path": "m 751.65451,965 257.03289,0 0.2652,-7.07107 -1.0607,-3.88909 -0.4419,-3.62392 1.0606,-5.48007 0.9723,-2.74004 -0.088,-2.2981 -3.8007,-7.86656 -0.2651,-2.20971 -1.8562,-2.38649 -1.0606,-2.82842 0.2651,-4.68459 -0.1768,-7.42462 -2.91676,-1.23744 -1.23744,-1.85615 1.23744,-2.20971 -0.17678,-4.41942 -0.88388,-1.59099 -0.0884,-5.12652 0.61872,-1.76777 2.9168,-1.32582 2.4749,-2.03294 1.3258,-3.27036 0.1768,-1.85616 -0.7955,-1.85615 -1.6794,-1.76777 -1.2374,-0.70711 -5.92204,0.17678 -2.65165,1.06066 -1.23744,1.67938 0.0884,3.71231 -1.32583,0.53033 -1.5026,0.97227 -1.23744,2.03293 -0.88388,1.85616 -4.06586,0.0884 -1.14905,-0.79549 -2.03293,-2.47487 -2.2981,-1.85616 -2.47488,-0.0884 -0.88388,-0.79549 -4.24264,0 -1.85615,0.97227 -0.97228,1.94454 -0.35355,3.18198 -0.70711,1.06066 -1.67938,1.06066 -0.44194,2.56327 -1.67938,0.53033 -2.03293,5.12652 0,3.53553 -1.85615,1.76777 -4.50781,-0.0884 -6.27557,1.5026 -3.27037,0 -1.23744,0.97228 -2.12132,-2.2981 -2.82842,0.26516 -1.76777,-0.44194 -1.14905,0.7955 -1.23515,3.99132 -2.83071,-0.10224 -3.0936,-1.06066 -6.0104,-6.45234 -1.59099,-0.97228 -6.80591,0.0884 -0.97227,-1.14905 -0.97227,-0.97227 -2.38649,-0.0884 -1.5026,-1.85615 -9.36916,-0.0884 -1.67938,-1.06066 -4.50781,0.17678 -1.76776,1.23743 -2.03294,0.0884 -1.23743,5.21491 0.26516,1.85616 1.32583,2.47487 -0.70711,2.03293 -2.2981,1.14905 -1.59099,2.03294 -4.68458,-0.26517 -6.0988,0.0884 -1.32582,-1.23744 -5.92202,0.17678 -1.23744,-1.23744 -0.79549,-3.8007 -1.06066,-2.47487 0,-2.20971 -3.44715,0 -1.76776,0.7955 -2.03294,-1.59099 -0.97227,-2.47488 -2.20971,1.14905 -3.09359,1.32583 -3.8007,3.62392 -1.73005,9.31853 -0.625,2.875 -1.375,2.375 -0.125,2.375 -2.75,0.25 -2.125,1.125 -1.25,-0.75 -8.5815,8.24085 -0.0884,1.85616 -1.67938,0.53033 -1.5026,-0.53033 -6.0988,5.39169 0.35356,2.56326 -1.5026,1.59099 -1.76777,-0.17677 -9.01561,2.9168 0.26516,1.23744 -0.97227,0.7071 -1.76777,0.17678 -0.88388,0.88388 -0.61872,2.03294 -3.27037,2.12132 -7.42462,0.0884 -1.41421,0.7071 -2.03293,0.17678 -1.41422,0.53033 0,1.23744 -1.14905,1.14904 -1.94454,0.0884 -3.44715,-0.26516 -1.5026,-0.88389 -3.71231,-1.06066 -1.5026,-0.7071 -3.18198,-0.26517 -0.97227,-0.7071 -1.67938,-0.0884 -1.23744,0.61872 -1.23743,-0.44195 -2.47488,-0.17677 -1.32582,-1.41422 -1.67938,-1.41421 -3.27037,-0.35355 -2.03293,0.88388 -2.91682,0.26516 z",
            "supply": null,
            "drawUnit": {
              "x": 891,
              "y": 27
            },
            "label": ""
          }, {
            "id": 19,
            "name": "Black Sea",
            "abbrev": "BLK",
            "type": "sea",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [50, 80, 81, 59, 53, 51]
            },
            "territory": null,
            "path": "m 848.52814,791.31691 0.97227,0.7071 4.77297,-0.7071 1.67938,-0.61872 3.27037,-0.26517 16.52862,-0.0884 2.2981,-0.88388 1.23743,-0.88388 7.24783,-1.85615 2.03293,-0.17677 1.5026,-0.7955 2.91682,-0.26516 1.23743,-1.94455 0.26517,-1.85615 0.88388,-1.41422 3.0936,-0.17677 4.15425,-3.0936 1.85615,-2.03293 0.26517,-1.5026 0.61872,-1.32582 0.0884,-1.67938 1.06067,-2.74004 1.59099,-1.06066 1.94454,-1.06066 1.14905,-0.0884 0.26516,-1.06066 0.7955,-0.97227 1.41421,-0.70711 1.5026,0 0.97228,-1.06066 2.03293,-1.06066 6.18718,-0.17678 1.85616,-0.88388 2.20971,-2.12132 4.5078,0.0884 3.35876,1.06066 4.86136,0 0.7071,-0.70711 5.30331,-0.44194 0.44194,-0.61872 5.21491,-4.33103 1.14905,-0.17677 0.61872,1.14904 1.67937,1.14905 0.97228,1.94455 4.68458,3.88908 2.38648,0.26517 1.50261,0.88388 3.0052,-2.2981 1.94454,-0.79549 1.06066,-0.7955 2.82843,-0.44194 0.7955,0.7955 0,3.27037 1.23743,2.91681 2.20971,1.32583 1.59099,0.79549 2.38649,-0.26516 2.29809,-1.5026 4.77298,-1.94455 3.27036,0.7955 1.06066,0.61872 0.7955,1.41421 2.12132,0.17678 0.53033,1.59099 2.74003,0.61871 3.182,-0.44194 1.2374,-0.79549 1.8562,-0.26517 6.7175,-0.0884 3.5355,1.14905 3.8007,0 0.7955,-1.14905 2.2981,0 2.3865,-0.61871 2.5633,-3.00521 2.1213,0 1.3258,-0.79549 1.2375,-0.17678 1.5026,-1.32583 1.4142,0.17678 2.0329,1.06066 2.2981,-1.06066 3.2704,-0.26516 8.4852,0.35355 1.7678,-1.23744 0.3536,-1.06066 1.3258,-0.53033 1.3258,-1.14905 1.8562,-1.06066 3.182,-1.06066 1.7677,-0.79549 1.3258,-1.32583 1.1491,-3.44714 2.5633,-5.3033 1.0606,0.17677 3.182,-0.97227 1.149,-1.14905 0,-3.44714 0.9629,-1.65889 1.125,-2.625 2.875,-1 1.125,-3.5 -0.5,-4.75 -2.375,-2.375 -0.125,-2.375 -1,-5.875 -1.875,-3.75 -3.5,-0.25 -4.625,-2.625 -0.25,-3 -3.75,-2.125 -2,-0.875 -1.75,0.125 -1.125,-1.25 -4.5,0.25 -2.5,0.875 -3.75,-0.125 -3.25,-2 -5.25,0.125 -4.25,-7.625 -1.25,-1.25 -3,-0.375 -2.375,-1.25 -2.375,-0.125 -1.125,-2 -1.375,0 -1.25,-2.875 -1.75,-1.25 -1.625,-0.375 -0.375,-1.75 -2,0.125 -2.5,-1.25 -3.5,0 -0.875,-1.875 -2.5,-0.25 -1,0.875 -2.875,0.125 -0.75,-1.625 -1.125,-1.125 -3.5,-0.125 -3.5,-1.25 -7.875,0.625 -3.875,-5.875 -11.125,0.25 -1.375,-3.375 0.75,-1.625 3.875,-3.75 4.75,-0.125 1.875,-1.625 0.25,-3.25 0.375,-2 1,0 1,-2.875 1.125,-2 1.125,-0.125 1.75,-2.125 4.125,0 2.25,-0.625 -0.5,-4.625 -1.75,-1.5 -1.625,-2.125 -0.125,-1 2,0 2.125,1.75 2.75,0.25 0.875,-1 0.25,-4 -0.625,-1.125 -2,-0.125 -1,-1.875 -3.5,0.25 -1.75,-2.125 -4.25,0 -1,1.375 -1.375,-0.125 -2.625,-2.875 -2.125,-3.25 0.875,-1.25 12.5,0.25 3.75,-4.375 -0.125,-2.875 1,-2.125 4.375,-3 1.875,-1.5 1,-1.625 1.125,-2.625 -0.125,-3 -3.5,0 -2.375,0.875 -1.5,1.125 -2.375,1.5 -0.875,1.75 -5.25,-0.25 -2.5,3.25 -2.875,1.5 -2.5,0.875 -4.25,-0.125 -2.125,2.375 -1,1.875 -2.25,2.25 -2.5,0 -2.125,1.625 -2,1.875 0.125,3 -1.375,1.5 -1.75,-1 -2.75,-0.125 -3.75,2 -0.25,1.25 -2.125,2 -2.125,-0.125 0.25,1.5 -1.5,0.5 -0.625,1.75 -2.125,2.125 -0.125,3.25 -5.875,5 0.25,-2 0.75,-1.125 0,-2.75 -1.125,-1.125 -3.625,1 -2.125,0.875 -6.25,6.5 -2.25,1.625 -3.625,-0.25 -2.125,-2 -1.875,-0.75 -7,0 -1,2.375 -0.25,4.875 1.625,0.625 1.875,1.25 7.125,-0.25 1.25,-1.125 1.125,1 0.625,1.125 0.625,5.75 0.5,1.25 6.375,0 0.875,0.875 0.25,2.75 0.875,1.875 1.875,2.625 3.5,0 1.125,1.125 2.625,-0.625 1.375,-1.5 0.625,-4 -0.625,-2.5 -1.375,-1.5 -1.375,-0.25 -2.625,-1.875 -3.375,0 0,-2.25 -1.75,-1.5 -1.875,-0.375 -0.25,-2.5 1,-0.5 4.875,3.5 5.25,4.625 4.5,4.875 1.75,1.125 6.125,-0.125 2.875,-3.5 1.875,-0.375 1.25,-0.75 3.625,0 0,1.5 -1.125,3.375 0.25,3.75 -2,2.625 -3.375,2.625 -7.125,-0.125 -1.5,3 -4,3.125 -9.5,-0.125 -0.625,1.625 -1.625,2.25 -1.25,3.125 -2,0 -0.75,2 -0.25,1.75 -1,0.75 -2.875,0.25 -0.5,3.25 -5.625,-0.125 -2.875,-1 -1.125,-1.25 -0.25,-6.5 1,-1.75 -0.25,-2.625 0.125,-2.375 -1.625,-1.25 -4,-0.375 -1.5,-2.875 -1.875,0 -2.625,1.25 -4.75,-0.125 -2,-2 -0.5,-1.375 0.875,-1.375 3.75,-3.125 2.25,-3.875 5.375,-5 0.25,-4.875 -1.375,-2.5 -2.375,-0.75 -3,-0.125 -1.375,2.375 -2,1.25 -1.625,-0.875 -3.75,0 -0.875,1.375 -5.125,-0.375 -2,-2.375 -0.875,-1.875 -1.5,-1.75 -3.375,-0.875 -0.25,-1.75 6.5,-0.25 1.75,-2.875 -0.125,-2.625 -1.25,-0.625 -2.875,-2.625 0.125,-3.875 -0.5,-2.25 -3,0 -1.375,0.625 -0.25,2.5 -0.875,3 -1.5,2.75 -1.5,-0.375 -0.125,-1.625 -0.75,-1.125 -2.5,0 -0.875,3 -2.375,0.25 -3,3.125 -3.625,-4.75 -3.125,-1.25 -1.375,0 -2.125,2.125 0.125,3.5 0.75,1.75 2.875,0.375 -0.25,2 -3.5,-0.5 -2,-0.625 -1,1 -0.125,7.25 1.375,1.125 2.5,0 0,1.875 -3.75,4.625 -0.125,8 -0.625,0.375 -2.375,-2 -2.5,-3.25 -2.25,0 -1.375,1.25 0,6 2,1 0.125,7.625 1.46487,0.32518 1.67938,1.5026 0.17677,3.62392 -3.18198,6.45235 -1.67938,1.32583 -3.27037,0.26516 -0.7071,-0.79549 -0.35356,-2.56326 -0.88388,-1.76777 -3.27037,-0.26517 -2.20971,0.97228 -1.14905,3.62392 0.0884,4.15425 1.5026,2.03293 -3.0052,3.18198 -0.53033,5.48008 0.35355,7.51301 1.01584,4.25065 0.0448,7.85855 -1.8353,2.204 -2.125,2.5 -2.5,2.5 -2.375,1.75 -1.125,2.625 0,5.875 -0.75,3 -0.25,3.5 -1.75,2 -1.625,1.25 -0.375,3.125 0.25,2.875 5,5 4.125,4.75 0.38556,2.83117 1.06066,1.32583 -0.26517,3.27037 0.7955,0.7955 0.17677,1.06066 1.23744,0.79549 3.97748,0.35356 1.5026,1.76776 1.94454,5.3033 3.97748,1.41422 8.3085,0.26516 z",
            "supply": null,
            "drawUnit": {
              "x": 942,
              "y": 243
            },
            "label": ""
          }, {
            "id": 20,
            "name": "Clyde",
            "abbrev": "CLY",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [21, 22],
              "sea": [1, 2, 21, 22]
            },
            "territory": null,
            "path": [
              "m 332.25,385.625 -4.5625,0 -2.6875,0.125 -1.6875,0.6875 -2,-0.625 -4.1875,-0.25 -2.1875,1.125 -1.3125,1.125 -2.5,-0.1875 -0.5625,-1.3125 0.125,-3 0.375,-2.125 0.5,-2.25 0.8125,-1.125 1,-1.4375 0.3125,-2.1875 1.1875,-0.875 2.8125,-0.75 1.875,-1.25 1.6875,-1.3125 0.875,-2.5625 1.25,-0.875 -0.1875,-2.875 -1,-1.3125 -0.375,-2.25 0.25,-1.875 -0.375,-2.0625 0.625,-1.875 0.25,-1.875 -1.25,-2.25 -2.375,-0.8125 -1.8125,1.125 -0.75,2.3125 -0.125,4 -1.5625,1.625 -0.125,2.375 -1.6875,0.9375 -4.125,-0.3125 -1.25,-0.75 0.3125,-1.9375 1.875,-0.875 1.8125,-0.5625 2.125,-2 0.125,-3 0.3125,-2.5 1.25,-2.1875 L 316,346 l 1.4375,-2.375 0.5,-2.4375 1.875,-0.8125 2.0625,-1 1.6875,-0.625 -0.3125,-2.3125 -2.125,-1.9375 -1.3125,-1.5625 -0.9375,-1.8125 -1.9375,-1.625 -2.3125,-0.75 1.5,-1.125 1.6875,-1 3.1875,-0.8125 1.4375,-0.9375 0.625,-3.125 0.3125,-3 0.9375,-1.75 0.4375,-2.4375 1.625,-1 1.125,-0.75 0,-5.625 1.25,-1.8125 3.0625,-0.125 2,-0.6875 0.8125,-2.875 -0.5625,-1.875 0.3125,-1.5 1.875,-0.6875 2.5625,-0.125 1.9375,1.1875 1.6875,-0.875 0.1875,-2.5 -1.0625,-1.5625 0.0625,-2.4375 0.875,-0.75 2,-0.25 1.0625,1.375 0.875,1.8125 1.3125,0.8125 1.75,-0.125 1.5625,-0.75 2.0625,0.1875 1.4375,0.375 0.375,1.3125 -2.8125,3.375 -4.875,4.6875 -6.3125,5.1875 -3.25,3.5625 -0.5625,6.1875 -3.6875,0.1875 -1.875,1.375 0.0625,3.875 0.8125,1.625 1.625,0.625 -0.625,3.875 -1.125,6.8125 -1,6.25 -0.8125,5.1875 -0.4375,5.3125 -0.75,5.125 1.0625,7.75 2.0625,4.5625 3,5.375 1.75,3.375 -3.3125,3.1875 z",
              "m 303.125,349.3125 -0.75,1.3125 0,2.5625 1,0.25 1.1875,-1 -0.0625,-1.625 z",
              "m 307.5,339.625 1.75,-0.4375 2.4375,-1.375 1,-0.8125 -1.25,-0.5 -1.4375,0.125 -1.8125,1.0625 z",
              "m 306.75,329.0625 -0.5,1 0.9375,0.1875 0.5,-0.4375 z",
              "m 301.6875,307.625 -1.125,0.875 -0.0625,3.1875 1.25,1 1.125,0.75 1.5,-0.8125 0,-1.3125 -0.5625,-1.125 -0.25,-1.6875 -1,-1 z",
              "m 310.5,305.9375 1.4375,0.5 5.625,0.0625 2.0625,-0.875 0.8125,0 0.75,0.9375 -0.75,1.6875 -0.75,1.75 -0.8125,0.6875 -0.375,2.375 -0.0625,4.375 -0.125,1.3125 -1.625,1 -2.375,-0.125 -2.5625,-1.1875 -1.6875,-1.75 -1.0625,-1.5 -0.3125,-0.875 0.9375,-1.5625 0.8125,-1 0.125,-1.9375 -0.125,-2.625 z",
              "m 308.1875,302.875 -0.875,-1.5 0,-1.5625 -1,-0.5625 -1.0625,0.9375 0.8125,1.875 0.375,0.125 1.0625,0.5 z",
              "m 326.1875,285.1875 -0.4375,1.9375 -1,2.0625 -1.375,1.5625 -1.1875,0.75 -0.875,1.8125 -0.375,1.6875 -0.8125,2 -1.5625,0.9375 -3,0.625 -1.3125,0.1875 -0.625,0.875 -1.125,-1.0625 -0.3125,-1.4375 0.625,-1.375 1.25,-0.25 0.625,-2.75 0.0625,-2.25 0.625,-0.6875 4.6875,-0.25 1.5625,-1.25 1.125,-1.5 1.0625,-0.8125 0.8125,-0.3125 z"
            ],
            "supply": null,
            "drawUnit": {
              "x": 318,
              "y": 621
            },
            "label": ""
          }, {
            "id": 21,
            "name": "Edinburgh",
            "abbrev": "EDB",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [20, 22, 23],
              "sea": [20, 2, 7, 23]
            },
            "territory": null,
            "path": [
              "m 354.9375,295.3125 3.3125,0.3125 1.3125,-0.8125 2.5,-0.3125 0.75,0.875 2.75,0 0.8125,0.6875 0.25,3.75 0.875,0.8125 -0.5625,1.5625 -1.25,1.625 -2.4375,0.75 -5.875,-0.1875 -1.75,2.25 -1.8125,1.75 -7.1875,0.0625 -0.9375,1 -0.0625,3.125 1,0.8125 0.875,0.875 0.0625,1.375 -2,0.5 -2.625,-0.1875 -2.0625,0.3125 -0.375,2.75 0.1875,4.5625 1.75,0.3125 5.75,-0.1875 2,-0.625 0.375,-1.75 1.375,-1.25 1.8125,-0.5625 1.6875,1.4375 3.9375,-0.0625 2.3125,1.0625 1.8125,0.9375 1.5,1.5 1.8125,1.125 1.375,0.875 2.5,-0.4375 2.125,-1.1875 1.5,1.3125 2.125,0.5 0.375,1.1875 -0.875,0.875 -0.9375,1.4375 -1.125,1.1875 -1.3125,3.75 -0.25,2.6875 -1.625,0.8125 -2.8125,1.4375 -1.125,2.5625 -0.875,1.375 -1.125,1.1875 -1.5625,0.9375 -0.8125,1.5 -1.3125,1.4375 -1.5625,0.5 -1.75,-0.5625 0.0625,1.1875 0.375,1.125 -1,1.25 -4.125,0.0625 -1.625,1 0.4375,2.25 0.9375,1.3125 0.3125,1.3125 0.625,1.3125 -1.75,1.0625 -0.5,1.375 0.1875,2.125 1.1875,1.1875 1.5,0.25 2.0625,1.1875 1.75,0.9375 0.4375,1.5625 1,2.6875 0.75,2.1875 0.1875,2.1875 0.625,0.6875 1.3125,2.1875 -0.3125,8.5625 -8.625,0.1875 -5.625,0.8125 -10.75,-9.25 -4.75,-8.75 -2.0625,-4.5625 -1.0625,-7.75 1.1875,-10.4375 3.5625,-22.125 2.5,-0.4375 1.75,-0.9375 0.25,-2.5625 0,-2.4375 -1.4375,-1.3125 0.5625,-6.1875 3.25,-3.5625 6.3125,-5.1875 4.875,-4.6875 z",
              "m 371.875,284.5 2.8125,0 1.1875,0.625 0.5625,0.875 -0.0625,2.8125 -0.75,2 -1.75,0.75 -2,0.0625 -0.25,-2.1875 -0.25,-1.6875 -1.0625,-1 0.3125,-1.25 z",
              "m 404.25,254.4375 -0.5,1.375 0.75,2.1875 0.1875,4.875 -1.5,1.625 -0.625,2.25 -0.4375,2 1,0.8125 1.4375,-0.25 0.75,-2.375 1.5,-1.5 8.6875,-0.1875 1.125,-0.6875 0.375,-1.3125 -0.75,-0.75 -1.8125,-1.75 0.3125,-2 0.875,-1.875 -0.25,-3.25 -1.3125,-0.0625 -0.625,1.625 -0.5625,1.875 -2.125,0.25 -2.25,0 -1.3125,-1.5625 -1.875,-0.5625 z",
              "m 389.5,268.5 1.125,0.875 1.5625,0.0625 0.3125,0.6875 -0.75,1.5 -1.3125,0 -0.875,-1.1875 z",
              "m 396.4375,260.6875 -1,1.375 0.125,1 -0.625,0.875 0.1875,0.875 1.1875,0.75 0.5,-0.9375 0.5625,-1.6875 0,-1.5 z",
              "m 380.8125,283.25 0,1.4375 1.25,0.0625 -0.375,-1.3125 z"
            ],
            "supply": {
              "x": 345,
              "y": 595
            },
            "drawUnit": {
              "x": 346,
              "y": 612
            },
            "label": ""
          }, {
            "id": 22,
            "name": "Liverpool",
            "abbrev": "LVP",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [20, 21, 23, 24],
              "sea": [1, 20, 24, 10]
            },
            "territory": null,
            "path": "m 321.5625,428.125 1.3125,1.125 3.625,0.25 2.25,-0.9375 -0.25,-4 1.375,-1.125 1.375,-0.0625 1.125,-1.125 0.3125,-5.25 1.4375,-1.6875 0.5625,-1.875 -0.1875,-3.125 -0.1875,-3 -1.0625,-0.9375 -2.875,-0.4375 L 329.5,405 l -1,-2.6875 -0.8125,-1.25 -0.1875,-4.5 2.25,-1.875 2.1875,-1.25 2.9375,-2.1875 0,-2.8125 -0.75,-1.75 -1.875,-1.0625 0.5625,-1 1.0625,-1.8125 2.125,-2 1.1875,-1.1875 4.6875,4.25 6.0625,5 0.625,3.25 0.25,5.3125 -1.4375,16.625 -5,11.5 -0.5,2.8125 0.625,3.0625 1.375,2.9375 0.75,2.6875 -0.125,6.125 -1.3125,5.4375 -3.9375,5.4375 -3.0625,-0.375 -2.3125,-0.8125 -5.125,-1.125 -2.6875,-1.3125 -2.875,-2.8125 -3.6875,-4.75 -0.875,-2 0.125,-4.25 -0.25,-4.8125 1.375,-2.5 z",
            "supply": {
              "x": 334,
              "y": 530
            },
            "drawUnit": {
              "x": 338,
              "y": 549
            },
            "label": ""
          }, {
            "id": 23,
            "name": "York",
            "abbrev": "YOR",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [21, 22, 24, 25],
              "sea": [21, 7, 25]
            },
            "territory": null,
            "path": "m 369.125,456.5 0.25,-2.4375 1.4375,-1.75 2.125,-2 0.625,-2 0.0625,-3.4375 -0.5,-2.3125 -1.4375,-1.6875 -1.3125,-2.5 -0.8125,-1.6875 -0.1875,-2.0625 1.25,-1.25 2.375,-0.0625 1.625,0.3125 0.75,0.625 0.5,-1.25 -0.625,-2.125 -2,-2.25 -0.625,-1.625 1.0625,-1.8125 -0.1875,-4.375 -0.125,-2.875 -0.6875,-2.75 -1.0625,-1.75 -0.25,-2.625 -0.625,-1.4375 -6.8125,0.25 -1.375,-1.25 -1.1875,-3.625 -0.75,-3.5625 -0.8125,-3.375 0.4375,-2.625 1.4375,-1.8125 -0.25,-3.6875 0.75,-1.8125 -8.625,0.1875 -3,0.3125 -2.625,0.5 0.625,3.25 0.25,5.3125 -0.1875,4.8125 -0.75,7.875 -0.5,3.9375 -2.6875,5.6875 -2.3125,5.8125 -0.5,2.8125 0.625,3.0625 1.375,2.9375 0.75,2.6875 -0.125,6.125 -1.3125,5.4375 -2.75,3.75 -1.1875,1.6875 1.3125,2.5625 0.9375,2.625 0.25,2.125 4.875,0.125 1.5625,0.75 3,0 2.5625,-0.8125 6.0625,-0.25 4.625,-1.3125 2,-2.0625 z",
            "supply": null,
            "drawUnit": {
              "x": 361,
              "y": 537
            },
            "label": ""
          }, {
            "id": 24,
            "name": "Wales",
            "abbrev": "WAL",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [22, 23, 25],
              "sea": [25, 9, 10, 22]
            },
            "territory": null,
            "path": "m 335.125,501.3125 -5.9375,0.1875 -2.3125,0.3125 -1.3125,2.25 0,2.125 1.3125,1.125 1.625,0.5 -0.5625,1.8125 -4.25,-0.5625 -0.25,-1.375 0.875,-0.9375 0.3125,-2.5 -1,-1.6875 -7.8125,-0.125 -2.375,-0.8125 -3.6875,-1.25 -1.3125,-1.875 -2.0625,-1.125 -5.6875,0 -2.375,-0.9375 -3.5625,0.3125 -0.9375,2.25 -1.625,2.9375 -1.375,2.3125 -1.75,0.4375 -0.5625,-0.875 0,-3.5625 -1.125,-1.0625 -2.8125,-0.8125 -2.5,-0.125 -0.5625,-0.875 -0.9375,-1.1875 -3,0.3125 -2.0625,1.125 -4.9375,-0.1875 -2.1875,0.8125 -0.8125,2.3125 -1.125,2.1875 -0.3125,1.8125 -0.4375,0.875 -0.5,0.1875 0,-2.3125 0.25,-2.125 -0.9375,-0.875 -3.1875,0.375 -1.875,0.125 -0.5625,-1.3125 -0.0625,-1.25 0.9375,-1.9375 1.6875,-0.9375 2.3125,0 1.5,-0.75 1.875,-1.6875 1.375,-1.5 4.875,0.125 0.9375,-0.75 L 276.5,488 l 1.25,-1.25 1.8125,-2.1875 0.375,-1.3125 1.5,-1.4375 2.4375,-2.25 0.75,-0.75 1.5625,0 1.8125,0.5 2.3125,0.25 1.375,-0.6875 1.625,-1.625 1.5,-0.75 2.375,-0.0625 1.5625,0.9375 1.3125,1.5625 1.3125,0.875 1.125,0.4375 2.5,-0.625 3.4375,-0.3125 2.25,-0.5625 2.5,0.0625 1.75,-1.1875 2.4375,-0.625 2.0625,-0.5 1.1875,-0.8125 0.8125,-1.625 -0.25,-1.5625 -0.8125,-0.75 -2.875,-0.375 -3.4375,0.3125 -1.9375,1.0625 -2.3125,0.0625 -1.3125,0.5625 -3.5,0.0625 -1.5,-1.875 -1.375,-2.0625 -1.625,-1.75 -1.25,-2.4375 -1.625,-0.625 -1.8125,-1.125 -1.3125,-1 -1.25,-1.875 -1.8125,-0.375 -2.1875,0.5625 -1.6875,0.5625 -2,-0.0625 -1.25,-2.125 -0.375,-2.6875 -0.25,-2.1875 0.1875,-3.125 2,-0.875 4.4375,0.5625 3.375,-0.125 4.375,0.125 2,-0.6875 2.375,-0.625 1.8125,-1.5625 0.6875,-1.6875 0.625,-3.375 -0.0625,-3.875 0.3125,-1.6875 -0.375,-1.5 -0.9375,-1.4375 -6.1875,-0.0625 -0.8125,-0.8125 0,-1.5625 1.0625,-0.5625 2.4375,-0.9375 5.5,0 2.5,-0.6875 2.25,-1.4375 1.125,-2.0625 2.25,-1.8125 3.5625,-0.4375 2.5,0.8125 0.875,1.0625 0,2.125 -1.6875,1.1875 -1.375,2.5 0.25,4.8125 -0.125,4.25 0.875,2 3.6875,4.75 2.875,2.8125 2.6875,1.3125 5.125,1.125 2.3125,0.8125 3.0625,0.375 1.3125,2.5625 0.9375,2.625 0.25,2.125 -0.4375,4.5625 -0.8125,4 -1.9375,2.875 -7.125,7.1875 -1.6875,3.25 0.1875,3.5 0.75,4.125 z",
            "supply": null,
            "drawUnit": {
              "x": 313,
              "y": 502
            },
            "label": ""
          }, {
            "id": 25,
            "name": "London",
            "abbrev": "LND",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [23, 24],
              "sea": [23, 7, 9, 24]
            },
            "territory": null,
            "path": "m 335.125,501.3125 -2.1875,-5.125 -2.25,-5.3125 -0.75,-4.125 -0.1875,-3.5 1.6875,-3.25 4.1875,-4.0625 2.9375,-3.125 1.9375,-2.875 0.8125,-4 0.4375,-4.5625 4.875,0.125 1.5625,0.75 3,0 2.5625,-0.8125 6.0625,-0.25 4.625,-1.3125 2,-2.0625 2.6875,-1.3125 0.9375,1 2.0625,0.1875 1.5,0.625 2.125,0.0625 2.375,-1.625 1.875,-0.9375 2.5,-0.125 2.4375,1.625 2.4375,3.0625 1.25,2.0625 0.8125,3 1.125,2.8125 -0.3125,2.375 -1.8125,2.4375 -0.8125,2.6875 -1.875,2.25 -2.5,1.9375 -1.125,1 -1.1875,0.875 -0.375,1.625 -0.1875,1.875 1,0.6875 -0.125,1.375 -1.8125,0.625 -1.1875,-1.6875 -0.5625,-1.875 -1.4375,-0.9375 -2.4375,0.125 -1.3125,1.625 -1.5,3.4375 -1.6875,2.625 -0.9375,1.75 0,2.5625 1.375,0.9375 1.8125,0.625 1.0625,2.125 1,1.0625 1.3125,0.0625 1.5625,1 0.0625,3.9375 -1.5,1.25 -3.625,0.875 -5.6875,0.1875 -2.8125,0.875 -6.75,0 -1.625,-1.125 -2.6875,-1.0625 -2.6875,0.0625 -2,-0.75 -4.8125,-0.25 -2.625,-1.75 -1.5625,-1.9375 z",
            "supply": {
              "x": 354,
              "y": 477
            },
            "drawUnit": {
              "x": 359,
              "y": 485
            },
            "label": ""
          }, {
            "id": 26,
            "name": "Brest",
            "abbrev": "BRE",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [27, 28, 30],
              "sea": [27, 9, 11, 30]
            },
            "territory": null,
            "path": "m 336.58284,545.59727 -1.76778,-0.26515 -0.97227,-2.12132 -1.41421,-1.76776 -2.20971,-0.88389 -2.74004,0.35356 -1.76777,0.61872 -2.74004,-0.0884 -1.06066,-1.32583 -0.88388,-2.38648 0.26516,-2.65165 1.32583,-1.50261 -0.35355,-2.82842 -1.23744,-1.23744 -2.20971,-1.23744 -0.53033,-1.5026 -1.41421,-1.23744 -1.94455,-0.26516 -0.61872,-0.7955 -2.38648,0.26517 -0.53033,1.32582 -0.88388,1.50261 -0.0884,5.21491 0.88388,1.41421 1.41421,0.35356 0.61872,1.41421 0.35356,2.74004 0.53033,1.32582 0.26516,3.18198 -0.44194,2.2981 -1.59099,0.88388 -0.17678,1.76777 0.17678,3.8007 0,3.18198 -1.23744,1.59099 -2.82842,-0.17678 -1.23744,-1.14904 -1.41421,-1.94455 -2.12133,-1.06066 -3.62392,0.26517 -3.44714,-0.26517 -0.26517,-1.85615 -0.61872,-1.06066 -1.14905,-1.06066 -1.85615,0.0884 -1.23744,1.06066 -1.06066,-0.17678 -0.97227,-0.97227 -0.26516,-1.76777 -0.70711,-1.32583 -0.26517,-2.29809 -0.79549,-1.76777 -1.06066,-1.59099 -1.32583,0 -1.41421,0.97227 -2.20971,1.59099 -2.38648,1.23744 -0.88389,0 -1.94454,-1.32583 -0.70711,-1.06066 -1.5026,-0.7071 -1.94454,-0.70711 -1.67938,-0.26516 -1.14905,1.06066 -2.20971,0.17677 -0.97227,-1.06066 -1.85616,0.0884 -1.32582,0.97227 -1.76777,0.61872 -1.32582,1.32583 0,1.94454 1.06066,0.79549 2.91681,-0.0884 2.38649,0.53033 1.32582,1.76776 0.97227,1.06066 -0.17677,2.03294 -0.70711,1.06066 -2.65165,0.0884 -1.41421,-0.53033 -0.35356,-0.7071 -0.7071,0.0884 -0.0884,1.41421 0.17677,3.44714 -1.06066,1.50261 0.0884,2.20971 1.41422,1.5026 1.59099,1.76776 3.0052,-0.0884 4.33103,0.35355 0.97227,1.41421 1.85616,0.61872 2.03293,1.41421 0.88388,2.03294 1.67938,2.12132 2.2981,3.27037 1.06066,0.97227 2.12132,0.17677 0.97227,0.97228 0.7955,2.29809 0.79549,2.20971 1.14905,2.20971 1.06066,2.03293 1.32582,0.35356 0.7955,0.88388 0.17678,1.32582 0,1.41422 -1.32583,0.88388 1.14905,1.67938 0.61872,1.32583 0.26516,1.41421 0.0884,2.03293 1.06066,1.14905 -1.14905,2.03293 -1.32582,0.88389 -0.61872,1.06066 0.17678,1.59099 1.14904,0.88388 0.44195,1.23744 0.0884,1.94454 0.97228,0.97227 1.06066,0.70711 0.97227,1.41421 1.23744,1.76777 -0.0884,2.91681 0.53033,2.47488 1.85615,0.88388 1.59099,0 3.27037,0 6.01041,0.44194 6.89429,1.14905 12.28598,3.44715 2.47488,1.06064 0.26516,-4.15425 2.2981,-14.93763 0.26517,-3.97748 -0.53033,-4.15425 -2.03294,-9.28078 -1.5026,-3.97747 -0.44194,-3.00521 0.61872,-2.12132 1.14905,-1.41421 0.0884,-3.53553 0.97227,-7.77818 0.61872,-2.2981 1.32582,-1.23743 0.97227,-5.92202 0.35356,-5.65686 z",
            "supply": {
              "x": 276,
              "y": 411
            },
            "drawUnit": {
              "x": 311,
              "y": 382
            },
            "label": ""
          }, {
            "id": 27,
            "name": "Picardy",
            "abbrev": "PIC",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [26, 28, 29, 68],
              "sea": [26, 9, 68]
            },
            "territory": null,
            "path": "m 408.00063,570.78795 -3.97748,-2.91681 -4.33102,-1.67938 -4.50781,-1.23744 -5.92202,-0.88388 -5.39169,-1.85616 -4.24264,-2.2981 -2.65165,-1.85615 -4.86136,-0.44194 -5.03814,1.06066 -6.36396,3.09359 -5.12652,1.23744 -4.41942,0.61872 -5.92202,0 -3.27037,-1.14905 -6.54074,-0.35356 -0.88388,-0.17677 0.97227,-5.92202 0.35356,-5.65686 0.7071,-4.77297 2.2981,-0.17677 2.38649,0 1.5026,-0.88389 1.5026,-0.0884 1.94454,-0.17677 1.32583,0.88388 1.14905,0 1.06066,-0.88388 0,-1.94455 -0.61872,-2.12132 -0.61872,-1.41421 -1.06066,-0.97227 0.0884,-1.59099 1.06066,-1.06066 1.5026,0.35355 0.97227,0.88388 2.56326,0.17678 1.85616,-0.17678 1.14905,-0.97227 0.88388,-0.88388 2.38649,-0.17678 2.29809,0.26517 1.32583,0.0884 0.88388,0.61872 1.50261,0.35356 1.06066,-0.61872 1.32582,-1.32583 0.70711,-1.85615 1.41421,-1.67938 1.94455,-1.67938 1.85612,-1.5909 6.0988,2.47487 3.8007,2.12132 3.0052,0.61872 2.12132,0.88388 1.85616,1.32583 2.65165,3.44715 8.48528,6.54073 2.82843,1.5026 1.67938,2.38649 3.09359,2.20971 5.12652,4.5078 -0.70708,3.00512 -1.32582,3.71231 -0.53033,3.88909 -1.67938,2.65165 z",
            "supply": null,
            "drawUnit": {
              "x": 376,
              "y": 419
            },
            "label": ""
          }, {
            "id": 28,
            "name": "Paris",
            "abbrev": "PAR",
            "type": "land",
            "naval": false,
            "moveTo": {
              "land": [26, 27, 29, 30],
              "sea": []
            },
            "territory": null,
            "path": "m 334.54991,561.94912 -1.32582,1.23743 -0.61872,2.2981 -0.44194,4.33103 -0.53033,3.44715 -0.0884,3.53553 -1.14905,1.41421 -0.61872,2.12132 0.44194,3.00521 1.5026,3.97747 0.97228,4.5962 1.06066,4.68458 0.53033,4.15425 -0.26517,3.97748 -0.53033,2.65165 -0.70711,5.12652 -0.61871,4.33103 -0.44195,2.82843 -0.26516,4.15425 2.47487,2.56327 2.65165,2.82842 2.12132,2.47488 1.67938,1.76776 3.18198,0.7955 2.03293,1.41421 2.82843,3.00521 2.47488,2.74003 2.12132,-1.5026 5.77052,-5.45304 4.39414,-4.80001 1.06066,-3.0052 -0.35356,-14.23052 0.44195,-3.00521 1.06066,-1.59099 1.85615,-0.79549 7.77818,-1.85616 2.47487,-1.14905 2.12132,-2.91681 2.2981,-0.7955 4.41941,-2.12132 2.74004,-1.67938 3.18198,-4.15425 2.82843,-2.38649 2.12132,-0.44194 3.00521,-1.23743 3.18198,-3.35876 1.76776,-3.8007 1.06066,-3.53553 0.7955,-3.71232 0.97227,-3.09359 -3.97748,-2.91681 -4.33102,-1.67938 -4.50781,-1.23744 -5.92202,-0.88388 -5.39169,-1.85616 -4.24264,-2.2981 c 0,0 -2.65165,-1.85615 -2.65165,-1.85615 l -4.86136,-0.44194 -5.03814,1.06066 -6.36396,3.09359 -5.12652,1.23744 -4.41942,0.61872 -5.92202,0 -3.27037,-1.14905 -6.54074,-0.35356 z",
            "supply": {
              "x": 374,
              "y": 397
            },
            "drawUnit": {
              "x": 359,
              "y": 375
            },
            "label": ""
          }, {
            "id": 29,
            "name": "Burgundy",
            "abbrev": "BUR",
            "type": "land",
            "naval": false,
            "moveTo": {
              "land": [27, 28, 30, 31, 32, 33, 68],
              "sea": []
            },
            "territory": null,
            "path": "m 414.98328,554.96652 -0.70708,3.00512 -1.32582,3.71231 -0.53033,3.88909 -1.67938,2.65165 -2.74004,2.56326 -0.97227,3.09359 -0.7955,3.71232 -1.06066,3.53553 -1.76776,3.8007 -3.18198,3.35876 -3.00521,1.23743 -2.12132,0.44194 -2.82843,2.38649 -3.18198,4.15425 -2.74004,1.67938 -4.41941,2.12132 -2.2981,0.7955 -2.12132,2.91681 -2.47487,1.14905 -3.8007,1.06066 -3.97748,0.7955 -1.85615,0.79549 -1.06066,1.59099 -0.44195,3.00521 0.35356,7.15945 0,7.07107 -1.06066,3.0052 -2.56327,2.91682 -3.09359,3.18198 -4.5078,4.15425 -2.12132,1.5026 1.59099,2.91682 2.38648,2.03293 4.50781,2.65165 3.09359,1.06066 2.74004,1.32583 1.5026,1.94454 -0.44194,2.20971 -1.67938,3.53554 -0.26516,3.0052 0.79549,4.15425 1.76777,3.62392 1.23743,3.18198 1.85616,3.88909 2.56326,1.32583 4.41942,0.7071 1.85615,0.53033 3.44715,-0.61871 4.06586,-0.26517 2.74004,-1.06066 1.76777,-1.76777 1.76777,-2.29809 0.79549,-2.65165 0.0884,-7.95496 0.0884,-6.18718 -0.88388,-4.33103 0.61871,-1.85615 2.03294,-1.76777 3.88908,-0.61872 4.77297,0.88388 5.30331,0.35356 3.88908,0.97227 2.03294,1.23744 2.03293,0.7071 2.2097,0.97229 0.35355,-1.59099 1.06066,-2.20971 2.20971,-2.65165 3.8007,-2.91682 4.15425,-3.71231 4.68458,-6.62912 2.65166,-2.82843 1.23743,-1.85616 4.41942,-4.06586 2.74004,-5.74524 3.57189,-2.79801 -0.25,-1.5 0.125,-2.875 0.875,-3.125 2.125,-2.875 1.125,-3.375 -0.125,-2.75 -0.5,-2.25 -1.5,-1.125 -1.375,-2 -0.5,-2.25 -1,-0.75 -1.5,-2.75 -1.5,-2 -5.875,-5.375 0,-12.375 -0.94476,-1.00378 -2.47487,-1.59099 -1.67938,-1.32582 -3.09359,-1.5026 -4.06586,-3.00521 -7.33624,-3.18198 -2.56326,-1.32582 z",
            "supply": null,
            "drawUnit": {
              "x": 403,
              "y": 346
            },
            "label": ""
          }, {
            "id": 30,
            "name": "Gascony",
            "abbrev": "GAS",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [26, 28, 29, 31, 70],
              "sea": [26, 11, 72]
            },
            "territory": null,
            "path": "m 323.41298,717.51262 -3.44716,-2.29809 -3.62392,-1.94454 -3.18198,-0.35356 -3.18198,1.06066 -1.50261,2.38649 -2.91681,0.17677 -3.44715,-2.03293 -9.19239,-4.94975 -5.39168,-2.29809 -3.62393,-3.09359 -3.53553,-2.91682 -3.09359,-2.65165 -3.35876,-3.18198 -1.5026,-2.56326 -0.0884,-4.06587 -0.17678,-2.38648 2.12132,0 2.03294,-2.38649 2.47487,-2.82842 1.76777,-2.12133 0.88388,-2.56326 0.26516,-4.68458 1.06066,-1.67938 1.85616,-0.88388 0.7955,-0.70711 0.88388,-3.44714 0.53033,-2.2981 1.5026,-1.85616 1.41421,-0.88388 1.14905,-1.32583 0.70711,-2.12132 -0.0884,-2.47487 -1.76777,-1.5026 0,-1.23744 1.23744,-1.5026 1.14905,-1.94454 0.79549,-2.56327 1.85616,-0.97227 -0.53033,-4.06586 0.70711,-1.59099 2.20971,-2.2981 1.06066,-1.94454 0.17677,-1.59099 -1.67938,-1.59099 -1.23743,-0.26517 0,-1.06066 1.14905,-0.53033 1.76776,0 1.14905,-0.53033 0.44194,-2.20971 0.53033,-2.56326 0.88389,-1.76777 0.0884,-2.65165 -0.97227,-2.03293 3.27037,0 6.01041,0.44194 6.89429,1.14905 5.74524,1.5026 3.8007,1.06066 2.74004,0.88389 2.47488,1.06064 8.92722,9.63433 3.18198,0.7955 2.03293,1.41421 5.30332,5.74524 1.59099,2.91682 2.38648,2.03293 4.50781,2.65165 3.09359,1.06066 2.74004,1.32583 1.5026,1.94454 -0.44194,2.20971 -1.67938,3.53554 -0.26516,3.0052 0.79549,4.15425 1.76777,3.62392 1.23743,3.18198 1.85616,3.88909 -3.09359,2.74004 -3.00521,3.44715 -2.29809,1.59099 -1.59099,0 -2.38649,-1.59099 -1.94454,-0.61872 -4.5962,0 -2.38648,1.5026 -4.77297,6.71752 -1.32583,2.65165 -2.12132,2.65165 -1.59099,3.09359 -5.48008,7.07107 -0.97227,1.94454 -2.56326,3.0052 z",
            "supply": null,
            "drawUnit": {
              "x": 321,
              "y": 293
            },
            "label": ""
          }, {
            "id": 31,
            "name": "Marseilles",
            "abbrev": "MAR",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [70, 30, 29, 38],
              "sea": [71, 13, 38]
            },
            "territory": null,
            "path": "m 369.99364,676.94236 -3.09359,2.74004 -3.00521,3.44715 -2.29809,1.59099 -1.59099,0 -2.38649,-1.59099 -1.94454,-0.61872 -4.5962,0 -2.38648,1.5026 -2.47488,3.53553 -2.29809,3.18199 -1.32583,2.65165 -2.12132,2.65165 -1.59099,3.09359 -1.67938,2.12132 -1.94454,2.47487 -1.85616,2.47488 -0.97227,1.94454 -2.56326,3.0052 -6.45235,6.36397 4.41942,3.44714 5.03813,2.82843 8.30851,5.65685 3.71231,1.59099 3.18198,1.06066 2.74004,1.23744 4.15425,0.97227 0.61872,-2.12132 1.06066,-1.94454 -0.26517,-2.38649 -0.79549,-1.94454 0.0884,-4.77297 0,-1.85616 1.94454,-1.85615 0.70711,-1.67938 1.67938,-1.32583 2.74003,0 0.61872,-0.97227 0.53033,-1.41421 1.50261,-1.23744 1.85615,-0.17678 2.2981,-0.17677 2.03293,-0.26517 1.06066,-0.44194 2.38649,-0.17678 1.41421,1.06066 0.61872,0.97228 1.23743,-0.97228 0.88389,-1.06066 2.03293,0 2.2981,0.0884 1.41421,1.85616 0.61872,1.14905 2.82843,1.32582 3.53553,0.53033 1.5026,0.35356 1.14905,1.32582 0.26517,1.67938 0.7071,0.61872 1.14905,0.26516 3.35876,0.0884 4.06586,-0.0884 0.88389,1.06066 1.06066,2.20971 1.23743,2.82843 1.32583,1.32582 2.65165,0.61872 2.12132,0.44194 1.06066,1.76777 2.82843,0.35355 2.82842,-0.26516 2.2981,-1.14905 1.41422,-2.20971 1.23743,-1.32582 1.67938,-0.88389 1.06066,0.7955 2.12132,-0.70711 1.76777,-2.47487 1.14905,-2.03293 2.29809,-1.59099 2.74004,-0.88389 3.71231,-0.26516 2.03294,0 2.03293,-1.23742 -1.41421,-1.59099 -3.71231,-5.12652 -3.27037,-5.74525 -0.7955,-1.85615 0,-5.65686 0.44194,-3.27036 -1.06066,-1.59099 -2.12132,-0.97228 -1.5026,-1.67938 0.17678,-2.29809 1.32582,-1.5026 2.65165,-1.14905 2.47488,-1.59099 1.32582,-2.74004 0.17678,-2.03293 -0.53033,-2.74004 -1.14905,-1.41422 -2.38649,-4.15425 -0.0884,-2.2981 0.61871,-2.2097 2.2981,-0.97228 2.03293,-1.14904 0.0884,-5.3917 -0.79549,-4.5962 -1.14905,-1.41421 -4.15425,-0.53033 -3.71231,0.26516 -3.44715,1.76777 -3.8007,4.15425 -1.32582,0.53033 -1.85616,-0.7071 -1.50258,-2.20971 -2.2097,-0.97229 -2.03293,-0.7071 -2.03294,-1.23744 -3.88908,-0.97227 -5.30331,-0.35356 -4.77297,-0.88388 -3.88908,0.61872 -2.03294,1.76777 -0.61871,1.85615 0.88388,4.33103 -0.1768,14.14214 -0.79549,2.65165 -1.76777,2.29809 -1.76777,1.76777 -2.74004,1.06066 -4.06586,0.26517 -3.44715,0.61871 -1.85615,-0.53033 -4.41942,-0.7071 z",
            "supply": {
              "x": 403,
              "y": 256
            },
            "drawUnit": {
              "x": 390,
              "y": 272
            },
            "label": ""
          }, {
            "id": 32,
            "name": "Ruhr",
            "abbrev": "RUH",
            "type": "land",
            "naval": false,
            "moveTo": {
              "land": [29, 68, 67, 34, 33],
              "sea": []
            },
            "territory": null,
            "path": "m 467.25,503.375 -2.5,0.375 -1.75,1.75 -3.625,1.25 -3,1 -1.625,2.125 -1.5,3.75 -1.125,4.125 -0.375,2.75 -1.75,2.875 -1.125,2.5 -1.5,3.5 L 446,531 l -0.625,2.125 -0.125,2.875 -1,1 -0.125,7.375 0.25,2.375 1.375,2.375 0.625,2.125 0,5 -1,4.25 -1.75,3 -1.125,3 -2,2.375 0,12.375 3,2.75 2.875,2.625 1.5,2 1.5,2.75 1,0.75 1.875,-0.25 2.875,-1.375 4.25,-3.5 3.75,-5.75 3.25,-5.5 2.125,-2.625 0.625,-2.375 2.125,-2.25 2,-3 3.625,-2.125 3.5,-2.375 5.625,-2.625 2.875,-1.125 4.5,-0.875 4,-0.625 3.125,-1.25 2.5,-1.25 -1.125,-4.5 -1.625,-3.875 -1.625,-2.75 -2.375,-2 -7,-3.75 -3.125,-2.125 -11.25,-12.875 -2.125,-3.375 -1.375,-3.5 -0.75,-6.125 -0.625,-2.75 -1.25,-1.125 z",
            "supply": null,
            "drawUnit": {
              "x": 470,
              "y": 420
            },
            "label": ""
          }, {
            "id": 33,
            "name": "Munich",
            "abbrev": "MUN",
            "type": "land",
            "naval": false,
            "moveTo": {
              "land": [29, 32, 34, 35, 36, 45, 44],
              "sea": []
            },
            "territory": null,
            "path": "m 450.375,592.125 0.5,2.25 1.375,2 1.5,1.125 0.5,2.25 0.125,2.75 -1.125,3.375 -2.125,2.875 -0.875,3.125 -0.125,2.875 0.25,1.5 2.25,1.375 1.375,1 5.125,0.25 2.375,-1.25 2.25,-0.75 2,0.25 4.5,0.875 2.875,0.625 4.25,0 2.125,0.875 2.83519,-0.01 0.0884,-4.77297 1.23744,-2.03293 1.85615,-1.32583 1.76777,-0.0884 4.06587,4.41942 1.5026,3.09359 1.5026,2.20971 3.18198,1.41421 2.03293,1.32583 1.94455,1.85615 2.82842,1.76777 1.06066,-0.35355 1.14905,-0.97227 1.85616,-0.7955 1.41421,-0.79549 3.0052,0 1.23744,0.7071 4.24264,0.26517 1.14905,0.79549 3.8007,0.44194 1.32582,0.70711 5.65686,0.1768 1.5026,-1.94455 2.82843,-0.97227 3.27037,-0.17677 3.27037,0.7071 3.18198,2.03293 2.47487,1.32583 1.32582,1.14905 1.85616,0.35355 1.06066,-0.88388 0.0884,-2.20971 -2.03293,-6.36396 0.61872,-2.65165 1.14904,-2.91682 2.20971,-2.65165 2.47488,-1.94454 7.24784,-2.20971 1.94454,-1.59099 2.47488,-1.3258 -0.70711,-1.67937 -1.41421,-2.12132 -3.18198,-1.59099 -4.33103,-3.00521 -2.56326,-2.56326 -2.20971,-2.82843 -1.85616,-1.5026 -3.09359,-1.94454 -3.35876,-1.41422 -1.67938,-2.47487 -2.2097,-2.74004 -3.62393,-5.83363 -2.65165,-3.53553 -0.7071,-2.82843 0.53033,-8.39689 1.94454,-1.06066 2.38648,-1.67938 2.56327,-0.88389 3.35875,0.44194 1.67938,0.88389 8.75045,-0.0884 3.27034,-0.70711 -0.084,-4.08152 -4.5,-16.875 -4,-8 -3.25,0.625 -9.375,3.75 -1.75,1.5 -8.375,4.125 -9.25,3.5 -7.25,5 -3.375,3.625 -2.125,1.75 -1.75,0.625 -2.5,1.25 -3.125,1.25 -8.5,1.5 -2.875,1.125 -5.625,2.625 -3.5,2.375 -3.625,2.125 -2,3 -2.125,2.25 -0.625,2.375 -2.125,2.625 -7,11.25 -4.25,3.5 -2.875,1.375 z",
            "supply": {
              "x": 527,
              "y": 359
            },
            "drawUnit": {
              "x": 501,
              "y": 385
            },
            "label": ""
          }, {
            "id": 34,
            "name": "Kiel",
            "abbrev": "KIE",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [67, 32, 33, 35, 66],
              "sea": [67, 8, 66, 5, 35]
            },
            "territory": null,
            "path": "m 541,462.625 -4.5,-0.125 -1.375,-2.125 0,-1.625 -0.75,-1.5 -0.875,-2.125 -0.75,-1.625 -3.125,-0.875 -2.375,-2.125 -0.125,-1.75 -2.875,-0.25 0,-4.5 1.25,-0.625 2.5,-0.75 0.625,-1.125 0,-1.5 -1.75,-0.875 -0.125,1 -1.625,1.5 -2.375,0.875 -1.875,-0.375 -1.625,-1.5 -4.125,1.875 -7.25,1 -0.25,2.125 -0.75,1.625 -3.5,0.375 -0.625,1.125 0.875,1.875 1.875,1.25 0.125,2.25 -1,2.5 -1.5,2.75 -3.75,3.25 -1.75,0.875 -1,0.125 -1.125,1.625 -0.625,2.25 -2,2.125 -2.875,-0.125 -1.375,-1.875 -0.375,-3.5 -0.875,-2.625 -2.625,0 -0.75,-1.75 -2.375,0.375 -2.875,0.625 -2.25,0.625 0,3 0.5,2.375 0.625,1.75 -1.375,1 -1.75,0 0,9.125 -0.875,2.875 -1.125,5.625 -2.75,3.875 -0.75,1.875 -0.375,3 -0.25,3.75 -0.875,2 -0.25,1.75 1.5,1.125 1.25,1.125 0.625,2.75 0.375,3.5 0.375,2.625 1.375,3.5 2.125,3.375 4.25,5 4.125,4.625 2.875,3.25 3.125,2.125 3.125,1.625 3.875,2.125 2.375,2 1.625,2.75 1.625,3.875 1.125,4.5 1.75,-0.625 2.125,-1.75 3.375,-3.625 4,-2.75 3.25,-2.25 5.125,-2.125 4.125,-1.375 4.25,-2 4.125,-2.125 1.75,-1.5 -2.625,-10.875 0.625,-10.625 1.125,-5.125 1.75,-12.125 0.125,-9.75 0.625,-4.125 2.5,-2.875 z",
            "supply": {
              "x": 526,
              "y": 488
            },
            "drawUnit": {
              "x": 506,
              "y": 471
            },
            "label": ""
          }, {
            "id": 35,
            "name": "Berlin",
            "abbrev": "BER",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [34, 33, 36, 37],
              "sea": [34, 5, 37]
            },
            "territory": null,
            "path": "m 589.875,479.875 -2.375,-1.125 -2.125,-2 0,-2.25 -0.625,-0.75 -5.375,-0.125 -1.625,-1.5 -0.375,-1.375 0,-2.125 -1.125,-0.875 -2.75,-2.5 0,-2.75 -1,-1.5 -1.5,-1.625 -1.125,-1.25 -2.625,-0.5 -7.125,-0.125 -3.75,0.25 -4.375,0.75 -3.625,0.375 -1.875,1.25 -1.375,1.625 -1.625,0.875 -2.5,0 0,12.875 0,2.125 -2.5,2.875 -0.625,4.125 -0.125,5.75 0,4 -0.75,5.375 -1,6.75 -1.125,5.125 -0.375,5 -0.25,5.625 1,4.25 1,4 0.625,2.625 6.25,-2.375 3.125,-1.375 3.25,-0.625 14.125,-1.125 1.75,-1.5 3.25,-1.875 8.75,-1.375 10.75,-3.25 3.75,-3.5 3.375,-2.375 0.375,-6.125 -1.75,-7.375 -2.25,-5.375 -1,-3.75 z",
            "supply": {
              "x": 564,
              "y": 460
            },
            "drawUnit": {
              "x": 561,
              "y": 470
            },
            "label": ""
          }, {
            "id": 36,
            "name": "Silesia",
            "abbrev": "SIL",
            "type": "land",
            "naval": false,
            "moveTo": {
              "land": [33, 35, 37, 55, 49, 45],
              "sea": []
            },
            "territory": null,
            "path": "m 595.25,513.75 -3.375,2.375 -3.75,3.5 -5.375,1.75 -5.375,1.5 -4.125,0.625 -4.625,0.75 -3.25,1.875 -1.75,1.5 -4.75,0.5 -9.375,0.625 1.625,2.875 2.375,5.125 1.375,4.75 1.125,4.25 1,3.625 1,4.25 0.084,4.08152 2.2981,-1.5026 1.06066,-1.41421 2.29809,-0.0884 2.03293,-1.5026 2.20971,-0.53033 3.27037,-0.0884 2.20971,-1.41421 1.85616,-2.20971 1.06066,-2.12132 0.26516,-2.2981 1.41421,-0.97227 3.62393,-0.17678 3.18198,1.85616 2.03293,2.38648 1.23744,0.44194 1.23743,-0.7071 0.26517,-1.94455 0.79549,-1.59099 2.03294,-0.26516 1.41421,0.53033 7.15946,4.06586 2.74003,2.2981 3.71231,0.97227 1.50261,0.7955 0.61871,1.94454 1.76777,1.94454 1.59099,1.14905 1.76777,2.20971 2.56326,1.85616 2.2981,5.56846 1.85615,2.03293 2.12132,-0.26516 1.59099,-1.23744 3.27037,-0.0884 6.36396,2.2981 1.59099,2.20971 4.50781,3.62392 1.06066,2.20971 2.38649,-1.14905 4.5078,0 1.67938,-0.70711 8.3085,-8.04334 -0.61871,-3.18198 -6.80591,-5.92201 -7.68978,-8.66206 -2.47488,-4.41942 -1.76776,-10.07627 -3.97748,-8.13173 -1.06066,-1.67938 -1.14905,-5.03813 0.26517,-1.14905 L 620.375,516.5 614,515.75 l -7.625,-0.375 z",
            "supply": null,
            "drawUnit": {
              "x": 605,
              "y": 434
            },
            "label": ""
          }, {
            "id": 37,
            "name": "Prussia",
            "abbrev": "PRU",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [35, 36, 55, 56],
              "sea": [35, 5, 56]
            },
            "territory": null,
            "path": "m 685.54004,417.78775 0.33496,2.08725 1.625,2 0.875,3.125 0.375,1.375 1.5,0.75 0.25,2.25 0.25,4.375 -1.25,0.75 -2,-0.125 -1,-0.625 -1.125,-1.25 -1,0.25 -2,1.875 -0.875,2.75 -0.5,1.375 -3.125,2 -2.625,2.625 -2,1.25 -1.5,1 -0.625,1.75 -0.625,0.875 1.25,1.125 2.5,0 1.125,1.125 0.25,4.625 -1.25,1 -1.75,0.875 -0.25,3.875 -0.875,1.875 -1.625,0.625 -3.375,0.25 -1.125,-0.875 0.125,-5.25 -1.625,0 -1.75,0.625 -5.375,0.375 -1.375,-1.25 0.25,-5 -1.75,-1 -4.125,-0.125 c 0,0 -2,-1.75 -2.5,-1.75 -0.5,0 -2.125,1.125 -2.125,1.125 l -5.75,0 -3,0.75 -4.625,0.375 -2.375,0.75 -2.5,0.75 -1.625,1.625 -1.375,0.375 -3.5,0.75 -1.25,1.125 -0.75,1.125 -2.75,0.375 -1.375,0.75 -0.5,1.125 -2.125,0.5 -2.625,1.5 -1.25,0.75 -2.375,0.875 -1.25,0.375 -3,-0.125 -1.125,-0.875 -1.75,0.25 -1.375,2 -1.375,1.375 -0.5,1.625 -1.25,0.125 -0.5,4.25 -0.75,4.5 0,1.25 -2.625,1.125 0.375,5.375 0.375,5.875 1,3.75 0.875,2.375 1.375,3 0.625,3.125 1.125,4.25 -0.25,4.125 -0.125,2 4.875,0.75 6.25,0.875 7.625,0.375 6.375,0.75 4.125,1 4.75,1 4.31768,1.02273 2.74004,-3.44715 9.104,-8.22011 1.41421,-3.53554 0.79549,-3.53553 2.12132,-3.71231 5.12653,-5.56847 9.72272,-3.0052 4.94974,-1.14905 3.27037,0.17678 3.0936,0.97227 2.12132,0.97227 2.38648,0 4.33103,-2.03293 6.71751,-3.88909 5.30331,-0.0884 7.42462,-3.09359 3.88908,-1.14905 2.91682,-1.67938 2.47487,-3.35876 0.7955,-0.70709 0.53034,-6.18718 1.59099,-7.15945 0.53033,-4.86136 -0.35355,-9.81111 -2.12132,-2.38648 -3.00521,-1.50261 -5.56846,-0.44194 -3.18198,-1.06066 -1.32583,-3.44714 -7.6014,-13.08148 -4.5078,-4.77297 z",
            "supply": null,
            "drawUnit": {
              "x": 635,
              "y": 485
            },
            "label": ""
          }, {
            "id": 38,
            "name": "Piemonte",
            "abbrev": "PMT",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [31, 39, 40, 44],
              "sea": [31, 13, 40]
            },
            "territory": null,
            "path": "m 501.78063,659.44148 -3.27035,0.0884 -1.67938,-1.41421 -2.65165,0.35355 -2.29809,1.94454 -3.53554,0.7955 -2.74004,0.44194 -2.38648,2.03293 -3.09359,2.12132 -3.00521,0.97227 -2.74004,-0.7071 -2.65165,-2.47488 -2.82842,-4.06586 -2.2981,-2.2981 -2.12132,-2.12132 -1.67938,-0.79549 -1.85616,1.5026 -1.59099,1.85615 -1.85615,2.12133 -1.76777,1.06066 -2.38648,0.79549 -3.97748,0.53033 -3.44715,-0.61872 -4.77297,-0.17677 -2.03293,1.14904 -2.2981,0.97228 -0.61871,2.2097 0.0884,2.2981 1.06066,1.76777 1.32583,2.38648 1.14905,1.41422 0.53033,2.74004 -0.17678,2.03293 -1.32582,2.74004 -2.47488,1.59099 -2.65165,1.14905 -1.32582,1.5026 -0.17678,2.29809 1.5026,1.67938 2.12132,0.97228 1.06066,1.59099 -0.44194,3.27036 -0.0884,2.74004 0.0884,2.91682 0.7955,1.85615 1.32582,2.20971 1.94455,3.53554 1.14904,1.41421 2.56327,3.71231 1.41421,1.59099 1.23744,-1.23744 1.76776,-1.59099 3.0936,0 1.67937,-0.0884 1.23744,-1.06066 1.06066,-1.23744 0.88388,-1.94455 1.41422,-0.61871 1.59099,-1.23744 2.38648,-0.61872 2.56327,-0.88388 2.38648,-1.32583 2.91682,0.0884 2.20971,1.14905 3.71231,0.17678 1.41421,0.61871 0.97227,2.03294 0.97227,2.03293 0.88389,0.79549 1.23743,0.26517 1.06066,1.23744 1.06066,1.67937 1.14905,1.14905 2.2981,0 0.70711,-2.38648 1.23743,-1.32583 1.41422,-1.14905 0.17677,-1.32582 -0.53033,-3.53554 -1.59099,-6.71751 1.23744,-6.62913 1.59099,-4.94974 2.74004,-2.74004 3.0052,-1.94455 2.20971,-2.20971 1.76777,-2.56326 -0.26517,-2.12132 -0.0884,-5.56846 2.29809,-5.3033 0.88389,-1.41422 -0.44195,-2.12132 z",
            "supply": null,
            "drawUnit": {
              "x": 467,
              "y": 280
            },
            "label": ""
          }, {
            "id": 39,
            "name": "Venezia",
            "abbrev": "VEN",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [47, 44, 38, 40, 41, 42],
              "sea": [47, 16, 42]
            },
            "territory": null,
            "path": "m 500.80838,677.03076 -1.76777,2.56326 -2.20971,2.20971 -3.0052,1.94455 -2.74004,2.74004 -1.59099,4.94974 -0.70711,3.18198 -0.53033,3.44715 0.61872,2.47487 0.97227,4.24264 0.53033,3.53554 2.91682,1.14905 3.53553,1.85615 3.0936,2.56326 4.77297,2.38649 5.83363,2.03293 4.41941,1.23744 2.56327,0.88388 4.77297,4.86136 4.24264,2.74004 3.09359,3.09359 1.94454,2.38649 2.65165,3.09359 2.20971,2.12132 1.32583,2.03293 -0.44194,2.82843 -0.97228,2.74004 -1.14904,1.76776 2.03293,1.76777 1.67938,2.38649 1.67938,1.94454 0.88388,1.94454 0.35355,7.95496 0.88389,3.27036 1.32582,3.18198 2.65165,1.85616 3.35876,1.76777 2.56326,-2.56327 1.14905,-2.03293 2.38648,-1.41421 3.27037,-2.2981 2.65165,-1.85615 -1.06066,-1.32583 -1.06066,-0.44194 -0.7071,-2.65165 0,-2.20971 -1.32583,-2.74004 -0.53033,-2.91681 -0.97227,-1.41422 -1.06066,-0.79549 0,-6.27557 0.26516,-4.15426 -0.53033,-1.76776 -0.79549,-2.56327 -1.06066,-1.59099 -2.38649,-0.7071 -3.18198,-1.14905 -1.85615,-1.06066 -0.53033,-1.5026 -2.38649,-2.38649 -2.47487,-1.5026 -2.47488,-1.06066 -1.94454,-0.7955 -0.70711,-1.67937 -1.23743,-1.94455 -1.59099,-2.03293 -2.03293,-1.14905 0.0884,-3.09359 -0.17677,-5.65686 -0.88389,-1.67937 0,-6.18719 2.82843,0 1.67938,-1.06066 0.53033,-1.5026 -0.7955,-1.32583 -1.5026,-2.12132 -1.67938,-1.06066 -0.0884,-4.33103 1.06066,-1.67937 1.85615,-1.23744 4.33103,0.44194 1.76777,-1.41421 1.76776,-2.20971 2.47488,-0.44194 1.85615,-0.0884 1.23744,-0.70711 0.88388,-1.32582 2.56327,0.17677 1.23743,-1.41421 1.94455,-0.70711 1.5026,0.61872 2.12134,1.50262 1.32582,-0.17677 1.41422,-3.97748 -0.0884,-9.54594 1.06066,-1.5026 -0.44194,-2.12132 -1.85616,-2.03293 -0.97227,-2.03294 -5.03815,0.35354 -2.2097,0.7071 -3.0936,-0.7071 -3.62392,-1.50261 -4.15425,-0.79549 -2.82843,0.61872 -3.35876,1.41421 -3.71231,3.62392 -1.67938,2.38649 -0.97227,2.74004 -1.5026,3.18198 -7.33623,7.42462 -2.56326,1.23744 -2.2981,0.26516 -6.18719,-3.88909 -2.56326,0.26517 z",
            "supply": {
              "x": 540,
              "y": 292
            },
            "drawUnit": {
              "x": 522,
              "y": 260
            },
            "label": ""
          }, {
            "id": 40,
            "name": "Tuscany",
            "abbrev": "TUS",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [38, 39, 41],
              "sea": [38, 13, 14, 41]
            },
            "territory": null,
            "path": "m 486.84304,714.50742 1.76775,0.97227 0.35355,1.85616 1.06066,0.97227 1.67938,0.88388 -0.35355,3.53554 0.26516,3.8007 0.97227,2.12132 1.14905,2.74004 -0.35355,4.24264 0.0884,2.91681 -0.44195,3.35876 -0.79549,2.2981 0.26516,1.5026 1.14905,0.88388 1.85616,-0.0884 3.0052,-0.35355 1.23744,1.41421 0,1.85616 0.97227,1.59099 0.17678,1.5026 0.97227,1.59099 1.06066,0.35356 1.14905,1.59099 0,2.56326 -0.44194,2.29809 1.23743,0.97228 1.94455,0.61872 4.41941,0.0884 3.44715,0.35356 2.2981,-0.88389 2.74004,-2.12132 2.03293,-2.82842 3.35875,-3.97748 1.85616,-1.59099 2.91682,-1.76777 2.47487,-0.7071 2.82843,-0.97228 1.14904,-1.76776 0.97228,-2.74004 0.44194,-2.82843 -1.32583,-2.03293 -2.20971,-2.12132 -4.59619,-5.48008 -3.09359,-3.09359 -4.24264,-2.74004 -4.77297,-4.86136 -12.81631,-4.15425 -4.77297,-2.38649 -3.0936,-2.56326 -3.53553,-1.85615 -2.91682,-1.14905 -0.17675,1.32582 -1.41422,1.14905 -1.23743,1.32583 z",
            "supply": null,
            "drawUnit": {
              "x": 511,
              "y": 228
            },
            "label": ""
          }, {
            "id": 41,
            "name": "Roma",
            "abbrev": "ROM",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [40, 39, 42, 43],
              "sea": [43, 14, 40]
            },
            "territory": null,
            "path": "m 514.68536,762.94425 0.53032,1.14904 0.26516,1.32582 1.76777,3.35876 1.85616,3.71231 1.67938,2.2981 1.76776,0.88388 2.12132,0.88388 1.67938,1.23744 0.88388,1.5026 0.7955,3.44715 0.70711,2.38648 2.91681,2.65165 2.65165,0.70711 3.27037,0.17678 1.94455,2.38648 0.26516,2.47488 1.23744,1.41421 4.33103,1.94454 2.65165,0.61872 3.0052,0.61872 2.65165,0.61872 0.44194,0.79549 1.85616,-0.88388 2.12132,-1.85616 2.38648,-1.94454 2.38649,-3.0052 0.70711,-1.14905 1.14902,-1.41418 -5.3033,-5.48007 -3.8007,-4.68459 -3.88908,-2.56326 -1.67936,-2.38652 -3.35876,-1.76777 -2.65165,-1.85616 -1.32582,-3.18198 -0.88389,-3.27036 -0.35355,-7.95496 -0.88388,-1.94454 -1.67938,-1.94454 -1.67938,-2.38649 -2.03292,-1.76776 -5.3033,1.67938 -2.91682,1.76777 -1.85616,1.59099 -5.39168,6.8059 -2.74004,2.12132 z",
            "supply": {
              "x": 534,
              "y": 191
            },
            "drawUnit": {
              "x": 539,
              "y": 187
            },
            "label": ""
          }, {
            "id": 42,
            "name": "Apulia",
            "abbrev": "APU",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [39, 41, 43],
              "sea": [39, 16, 15, 43]
            },
            "territory": null,
            "path": "m 562.0615,764.0049 2.20971,2.03293 1.14905,2.38648 1.94454,1.14905 0.35356,2.56327 1.94454,1.67937 2.2981,0.7955 3.27037,0.88388 2.29809,0.17678 1.23744,0.79549 0,1.06066 0.97227,1.14905 1.59099,0.7955 3.35876,0.17677 2.2981,0.97228 3.71231,0.0884 1.67938,0.53033 3.18198,0.0884 1.06066,0.44194 0,0.53034 -0.61872,0.35355 -0.70711,0.79549 -0.17677,1.67938 -0.61872,1.41422 -0.88389,2.2097 -0.0884,2.20971 1.06066,1.06066 2.65165,2.12132 2.2097,1.50261 1.67938,1.94454 1.50261,1.23744 2.74003,0 1.59099,0.61871 1.59099,2.38649 2.38649,2.20971 1.06066,1.76777 2.20971,0.88388 2.03293,1.06066 1.5026,0 2.20971,0.88388 1.85616,0.53033 1.23743,2.03293 1.59099,1.76777 3.27037,0.44194 1.41422,1.32583 1.41421,0 0.97227,2.03293 0.70711,2.2981 1.06066,1.76776 1.23744,0.97228 1.41421,0.97227 2.65165,0.88388 0.97227,0.61872 1.32583,1.32583 0.44194,1.32582 -0.70711,1.76777 -0.53033,2.12132 0,2.91681 -0.97227,1.14905 -0.88388,0.61872 -0.97228,-0.88388 -1.23743,-1.85616 -0.7955,-1.85615 -0.79549,-1.67938 -1.59099,-1.85616 -1.5026,-0.88388 -2.47488,-1.14905 -2.47487,0 -2.82843,0.0884 -2.2981,-0.97227 -0.79549,-1.59099 0,-2.20971 -0.61872,-1.94455 -2.20971,-2.03293 -2.03293,0 -1.59099,0.53033 -0.7955,1.76777 -1.5026,2.38648 -0.79549,1.06066 -1.59099,2.74004 -0.7955,1.85616 -0.70711,1.23744 -0.26516,1.5026 -1.06066,1.41421 -1.32583,1.94455 -3.27036,-0.17678 -2.47488,-0.70711 -2.91681,-2.12132 -2.47488,-2.47487 -2.74004,-2.56326 -0.88388,-2.12132 -1.06066,-3.27037 -1.14905,-4.41942 -1.14905,-4.33103 -1.41421,-3.18198 -2.82843,-3.44715 -4.77297,-4.86136 -4.86136,-4.5078 -4.5078,-3.62392 -2.74004,-1.59099 -1.41422,-0.44195 -5.3033,-5.48007 -3.8007,-4.68459 -3.88908,-2.56326 -1.67938,-2.38648 2.56326,-2.56327 1.14905,-2.03293 2.38648,-1.41421 z",
            "supply": null,
            "drawUnit": {
              "x": 593,
              "y": 167
            },
            "label": ""
          }, {
            "id": 43,
            "name": "Napoli",
            "abbrev": "NAP",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [41, 42],
              "sea": [41, 14, 15, 42]
            },
            "territory": null,
            "path": [
              "m 554.10655,799.53701 -0.35355,2.47488 0.61872,1.85615 2.56326,1.32583 2.82843,1.32582 2.74004,-0.17677 2.12132,0.61871 0.35355,2.91682 1.06066,1.06066 2.12132,1.06066 1.76777,1.23744 2.82842,0.79549 0.97228,1.85616 -0.0884,3.09359 0.97227,2.2981 1.59099,0 1.59099,1.41421 0.26516,2.03293 -0.17677,1.67938 0.97227,1.59099 1.59099,1.59099 2.65165,1.67938 1.41421,0.35355 1.23744,1.06066 0.70711,2.03294 1.59099,0.7071 2.20971,0.35356 1.06066,1.76776 0.44194,2.38649 0.53033,3.44714 0.17678,3.44715 1.06066,3.35876 0.17677,2.12132 1.06066,5.21491 -0.35355,1.5026 -0.70711,1.94454 0,2.56327 -0.35355,2.20971 -1.23744,0.97227 -2.03293,1.76776 -1.5026,1.41422 -0.0884,2.03293 -0.97227,1.85616 -0.0884,2.03293 -1.23744,1.94454 -1.85615,1.06066 -0.97227,2.20971 0.88388,0.70711 1.14905,0 1.85615,0.97227 2.82843,1.76777 1.23744,0.97227 1.67938,0 0.61871,-0.53033 0.0884,-3.53554 0.44194,-1.5026 1.85616,-0.35355 1.5026,-0.17678 1.5026,-1.23744 -0.26516,-3.0052 0.61872,-1.41421 2.12132,-0.61872 1.41421,-0.88389 0.88388,-2.03293 0.26517,-2.91681 0.53033,-3.27037 0.61872,-2.20971 1.67938,-0.44194 2.65165,0.53033 1.85615,0.0884 0.88389,-1.14905 1.14904,-2.03293 0.7955,-2.82843 0.88388,-1.67938 0.7955,-1.23744 0.35355,-1.06066 -0.61872,-1.59099 -1.94454,-0.97227 -0.97227,-2.20971 -1.76777,-0.7071 -0.7955,-1.14905 -1.32582,-0.7955 -2.74004,-0.88388 -1.59099,-0.7955 -0.97227,-1.06066 0.17678,-1.5026 0.97227,-2.74004 0.88388,-1.76776 -0.1768,-2.65161 -3.27036,-0.17678 -2.47488,-0.70711 -2.91681,-2.12132 -5.21492,-5.03813 -0.88388,-2.12132 -3.35876,-12.02082 -1.41421,-3.18198 -2.82843,-3.44715 -9.63433,-9.36916 -4.5078,-3.62392 -2.74004,-1.59099 -1.41422,-0.44195 -1.14902,1.41418 -3.0936,4.15425 -4.5078,3.8007 z",
              "m 579.03207,880.58913 1.32582,-0.88389 -0.44194,-1.5026 -1.32583,-0.79549 -1.76776,1.14905 -3.35876,0.26516 -1.23744,1.41421 -1.41421,1.14905 -3.35876,0.35356 -2.56326,-1.32583 -1.94454,-1.23744 -1.85616,-0.79549 -2.47487,0.79549 -2.91682,1.14905 -2.47487,1.06066 -4.41942,0.0884 -1.94454,-0.44194 -1.67938,1.06066 -1.41421,0.97227 -2.12132,0.61872 -2.56327,-0.17678 -1.06066,-1.67938 -0.0884,-3.44714 -0.61871,-1.94454 -1.23744,-1.85616 -1.5026,-0.88388 -1.5026,1.06066 -0.88389,1.5026 -0.88388,1.41421 -0.97227,0.61872 -1.14905,0 -1.76777,-0.70711 -1.76777,-0.97227 -1.23743,0.17678 -1.85616,0.79549 -0.97227,1.50261 -1.14905,1.76776 -0.26516,1.94455 -0.70711,1.94454 0,2.47487 0.61872,1.23744 1.32582,1.32583 0.17678,1.14904 1.14905,0.53033 5.74524,-0.0884 1.23744,0.0884 0.97227,0.97228 0.70711,0.88388 1.59099,1.14905 2.56326,0.26516 2.82843,0.88389 0.35355,1.94454 0.70711,1.85616 1.59099,1.32582 1.94454,1.76777 2.74004,1.06066 2.65165,1.06066 2.56326,0 2.38649,0.35355 2.38648,0.35356 3.09359,0.17677 0.97228,1.14905 0.17677,2.03293 0.53033,1.67938 0.26517,2.56326 0.61872,1.23744 2.29809,0.70711 1.14905,0.88388 1.76777,1.23744 1.67938,0.44194 1.59099,-0.61872 1.23744,-0.79549 1.41421,-1.50261 0.0884,-5.03813 0.53033,-1.67938 0.61872,-2.56326 0,-2.03294 -1.41422,-1.94454 0,-3.09359 -0.0884,-3.35876 1.32583,-1.67938 -0.0884,-1.85615 1.41421,-1.5026 1.50261,-1.41422 0.35355,-1.94454 0.70711,-1.23744 0.17677,-2.2981 z"
            ],
            "supply": {
              "x": 574,
              "y": 159
            },
            "drawUnit": {
              "x": 587,
              "y": 134
            },
            "label": ""
          }, {
            "id": 44,
            "name": "Tyrolia",
            "abbrev": "TYR",
            "type": "land",
            "naval": false,
            "moveTo": {
              "land": [38, 39, 47, 46, 45, 33],
              "sea": []
            },
            "territory": null,
            "path": "m 557.46532,658.29245 -5.03815,0.35354 -2.2097,0.7071 -3.0936,-0.7071 -3.62392,-1.50261 -4.15425,-0.79549 -2.82843,0.61872 -3.35876,1.41421 -3.71231,3.62392 -1.67938,2.38649 -0.97227,2.74004 -1.5026,3.18198 -3.71231,3.62392 -3.62392,3.8007 -2.56326,1.23744 -2.2981,0.26516 -1.76777,-0.97227 -2.56326,-1.76777 -1.85616,-1.14905 -2.56326,0.26517 -2.65165,0.97227 -0.88388,0.44194 -0.26517,-2.12132 -0.0884,-5.56846 1.32582,-2.91682 0.97227,-2.38648 0.88389,-1.41422 -0.44195,-2.12132 -1.41421,-1.06066 0.97227,-2.38648 1.14905,-1.76777 1.23744,-1.76777 0.53033,-3.71231 -0.53033,-3.27037 -2.47488,-2.12132 -3.88908,-2.38648 -3.35876,-3.00521 -3.27037,-2.91681 -1.67938,-3.88909 -2.12132,-4.24264 -1.67938,-2.56326 -2.03293,-3.27037 -2.2981,-2.65165 0.0884,-4.77297 1.23744,-2.03293 1.85615,-1.32583 1.76777,-0.0884 1.85616,1.94455 2.20971,2.47487 1.5026,3.09359 1.5026,2.20971 3.18198,1.41421 2.03293,1.32583 1.94455,1.85615 2.12132,1.41422 0.7071,0.35355 1.06066,-0.35355 1.14905,-0.97227 1.85616,-0.7955 1.41421,-0.79549 3.0052,0 1.23744,0.7071 4.24264,0.26517 1.14905,0.79549 3.8007,0.44194 1.32582,0.70711 2.47488,0.0884 3.18198,0.0884 1.5026,-1.94455 2.82843,-0.97227 3.27037,-0.17677 3.27037,0.7071 3.18198,2.03293 2.47487,1.32583 1.32582,1.14905 1.85616,0.35355 1.06066,-0.88388 0.0884,-2.20971 -0.97227,-2.91682 -1.06066,-3.44714 0.61872,-2.65165 1.14904,-2.91682 2.20971,-2.65165 2.47488,-1.94454 3.97747,-1.32583 3.27037,-0.88388 1.94454,-1.59099 2.47488,-1.32579 3.53553,0.61872 3.09359,0.26517 7.07107,1.32582 3.35876,0.26517 3.27037,1.41421 -0.53033,3.80066 -2.03293,9.104 -0.70711,5.56847 1.32582,12.02083 -0.97227,0.97227 0.0884,1.67938 -3.35876,5.03814 -2.03293,1.23743 -6.8059,0 -3.62392,1.14905 -6.71752,-0.17677 -2.38648,0.44194 -2.03294,1.32582 -0.44194,3.18198 z",
            "supply": null,
            "drawUnit": {
              "x": 544,
              "y": 324
            },
            "label": ""
          }, {
            "id": 45,
            "name": "Bohemia",
            "abbrev": "BOH",
            "type": "land",
            "naval": false,
            "moveTo": {
              "land": [33, 36, 49, 46, 44],
              "sea": []
            },
            "territory": null,
            "path": "m 641.96457,577.68226 -1.06066,-2.20971 -2.38649,-1.94454 -2.12132,-1.67938 -1.59099,-2.20971 -3.80069,-1.5026 -2.56327,-0.7955 -3.27037,0.0884 -1.59099,1.23744 -2.12132,0.26516 -1.85615,-2.03293 -1.23744,-2.91681 -1.06066,-2.65165 -2.56326,-1.85616 -1.76777,-2.20971 -1.59099,-1.14905 -1.76777,-1.94454 -0.61871,-1.94454 -1.50261,-0.7955 -3.71231,-0.97227 -2.74003,-2.2981 -2.91682,-1.5026 -2.12132,-1.23744 -2.12132,-1.32582 -1.41421,-0.53033 -2.03294,0.26516 -0.79549,1.59099 -0.26517,1.94455 -1.23743,0.7071 -1.23744,-0.44194 -2.03293,-2.38648 -1.94455,-1.14905 -1.23743,-0.70711 -3.62393,0.17678 -1.41421,0.97227 -0.26516,2.2981 -1.06066,2.12132 -1.85616,2.20971 -2.20971,1.41421 -3.27037,0.0884 -2.20971,0.53033 -2.03293,1.5026 -2.29809,0.0884 -1.06066,1.41421 -2.2981,1.5026 -3.27037,0.70711 -8.75045,0.0884 -1.67938,-0.88389 -3.35875,-0.44194 -2.56327,0.88389 -2.38648,1.67938 -1.94454,1.06066 -0.26517,2.56326 -0.26516,5.83363 0.7071,2.82843 2.65165,3.53553 1.85616,2.91682 1.76777,2.91681 2.2097,2.74004 1.67938,2.47487 3.35876,1.41422 3.09359,1.94454 1.85616,1.5026 2.20971,2.82843 2.56326,2.56326 4.33103,3.00521 3.18198,1.59099 1.41421,2.12132 0.70711,1.67937 3.53553,0.61872 3.09359,0.26517 4.15426,0.88388 2.91681,0.44194 3.35876,0.26517 3.27037,1.41421 1.67938,-1.76777 1.06066,-2.03293 0.88388,-3.44714 0.44194,-2.82843 1.67938,-1.85616 4.59619,-4.33102 4.24265,-2.20971 2.56326,-2.03293 2.65165,-1.41422 1.5026,0.70711 0.97227,2.47487 1.23744,1.06066 2.56326,-0.97227 3.09359,-0.61872 3.88909,0.88389 4.41942,-0.0884 2.29809,-1.14905 2.38649,0.70711 1.85616,1.85615 2.38648,1.06066 2.38649,0.26517 2.2097,-1.32583 2.91681,-2.2981 0.0884,-2.65165 -0.26517,-7.07106 z",
            "supply": null,
            "drawUnit": {
              "x": 583,
              "y": 392
            },
            "label": ""
          }, {
            "id": 46,
            "name": "Vienna",
            "abbrev": "VIE",
            "type": "land",
            "naval": false,
            "moveTo": {
              "land": [44, 45, 49, 48, 47],
              "sea": []
            },
            "territory": null,
            "path": "m 587.51735,609.14855 -0.53033,3.80066 -1.06066,4.86136 -0.97227,4.24264 -0.70711,5.56847 0.70711,5.74524 0.44194,4.5078 0.17677,1.76779 2.12132,0.70711 4.94975,4.94975 1.5026,3.44714 1.76777,3.18198 1.76777,2.38649 2.20971,1.32582 3.53553,0.97227 8.04334,-2.56326 5.92202,-3.44716 3.18198,-2.56327 11.04854,-11.66726 3.27037,-2.91681 2.2981,-1.14905 2.91681,-0.88388 3.00521,-2.12132 2.2981,-3.00521 2.12132,-6.09879 1.76776,-2.65166 2.82843,-2.29809 2.2981,-2.2981 1.23743,-2.91681 1.94455,-2.03294 2.47487,-1.59099 3.09359,-0.88388 3.27037,0 2.2981,-2.03293 -0.61873,-5.83363 -2.47487,-0.61872 -8.3969,-5.48008 -2.2097,-0.44194 -3.35876,-0.0884 -4.77297,0.44194 -3.8007,0.0884 -1.67938,-1.76774 -2.91681,2.2981 -2.2097,1.32583 -2.38649,-0.26517 -2.38648,-1.06066 -1.85616,-1.85615 -2.38649,-0.70711 -2.29809,1.14905 -4.41942,0.0884 -3.88909,-0.88389 -3.09359,0.61872 -2.56326,0.97227 -1.23744,-1.06066 -0.97227,-2.47487 -1.5026,-0.70711 -2.65165,1.41422 -2.56326,2.03293 -4.24265,2.20971 -6.27557,6.18718 -0.44194,2.82843 -0.88388,3.44714 -1.06066,2.03293 z",
            "supply": {
              "x": 601,
              "y": 344
            },
            "drawUnit": {
              "x": 619,
              "y": 345
            },
            "label": ""
          }, {
            "id": 47,
            "name": "Trieste",
            "abbrev": "TRI",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [39, 44, 46, 48, 77, 75],
              "sea": [75, 16, 39]
            },
            "territory": null,
            "path": "m 654.51572,776.29088 -2.91682,-2.74004 -1.76777,-1.41421 -1.06066,-2.65166 -1.59099,-1.06066 -1.94454,0.17678 -1.85616,-1.94454 -1.94454,-0.44194 -0.7955,-1.14905 -1.06066,-1.5026 -3.27036,-0.17678 -0.88389,-0.7955 -1.94454,-1.06066 -4.06587,0.0884 -1.06066,0.70711 -1.14904,1.67938 -0.97228,0.79549 -1.14904,-1.41421 -1.59099,-3.09359 -0.97228,-1.94455 -2.20971,-1.23743 -1.76776,-1.23744 0,-1.67938 0.79549,-0.53033 2.2981,-0.35355 1.14905,-0.7955 0,-4.15425 -2.2981,-1.94454 -1.76777,-0.7955 -2.29809,-0.97227 -1.23744,-0.26517 -2.2981,-0.7071 -1.59099,0.7071 -0.88388,1.14905 -2.82843,0.35356 -0.88388,0.53033 -1.41421,-0.97228 -0.35356,-2.47487 -0.7071,-1.5026 -2.03294,0 -2.65165,0 -1.32582,1.67938 -0.53033,1.67938 -0.0884,-3.00521 0.17678,-4.06586 -1.85616,-2.20971 -1.5026,-2.2981 0.17678,-1.67938 -1.59099,-1.32582 -0.44195,-1.59099 -1.23743,-1.23744 -1.14905,-0.97227 -0.70711,-0.7955 -0.97227,-2.12132 1.14905,-1.14904 1.41421,-1.06066 0.61872,-1.32583 -0.70711,-1.85616 -0.88388,-1.59099 -2.74004,-0.97227 -1.14905,-0.26516 -0.7071,-0.7955 0.0884,-1.23743 -1.32582,-1.76777 -0.53033,-1.41422 -0.97227,-0.79549 -0.26517,-5.74524 -0.7071,-1.14905 -1.23744,-0.88388 0.0884,-3.8007 -0.97228,-1.67938 -0.26516,-4.41942 -0.70711,-2.03293 -1.14905,-1.14905 -5.3033,-0.17678 -5.3033,0.17678 -1.23743,1.32582 -0.61872,3.8007 -0.53033,3.44715 -0.97227,2.65165 -0.7955,1.94454 -1.59099,0.0884 -0.88388,-1.59099 -0.17678,-1.5026 -1.5026,-1.23744 -0.70711,-2.65165 -0.53033,-5.39169 -1.06066,-2.65165 -0.35355,-1.23743 0.7071,-1.14905 0.35356,-4.5962 1.32582,-0.17677 0.61872,-1.67938 0.7955,-2.2981 -0.0884,-9.54594 1.06066,-1.5026 -0.44194,-2.12132 -1.85616,-2.03293 -0.97227,-2.03294 -0.17678,-3.8007 0.44194,-3.18198 2.03294,-1.32582 2.38648,-0.44194 6.71752,0.17677 3.62392,-1.14905 6.8059,0 2.03293,-1.23743 1.41422,-2.12132 1.94454,-2.91682 -0.0884,-1.67938 0.97227,-0.97227 2.12132,0.70711 2.20971,2.03293 2.74004,2.91682 1.5026,3.44714 1.76777,3.18198 1.76777,2.38649 2.20971,1.32582 3.53553,0.97227 3.88909,-1.32582 4.15425,-1.23744 3.27037,-1.85615 2.65165,-1.59099 2.03293,9.72272 0.35355,7.95495 1.14905,3.27037 5.83363,4.94974 3.00521,3.35876 8.22011,1.41421 2.91682,2.03294 3.35876,4.33102 0.7071,4.68459 4.94975,5.21491 2.74004,1.59099 4.94975,5.21491 3.18198,1.67938 -0.70711,2.74004 -1.06066,1.59099 -0.44194,2.20971 -0.26517,4.41942 3.18199,7.68978 0.53033,2.91682 -1.41422,2.38648 -2.12132,0.97227 -1.23744,1.76777 -0.0884,3.71231 -0.70711,1.85616 -2.12132,2.38648 -0.17678,2.2981 0.53033,2.91682 1.76777,1.85615 2.2981,3.27037 1.67937,3.09359 5.74525,6.18719 1.59099,2.12132 0.7071,1.94454 1.06066,1.06066 3.00521,0.53033 1.23744,1.41421 0.7071,2.47488 -0.0884,1.23743 -4.86133,0.61872 -2.2097,-0.53033 -3.8007,-2.82842 -2.2981,-1.14905 -1.5026,0.44194 -1.23744,1.32582 -1.06066,2.47488 -0.44194,2.12132 -0.88388,1.41421 z",
            "supply": {
              "x": 588,
              "y": 285
            },
            "drawUnit": {
              "x": 618,
              "y": 262
            },
            "label": ""
          }, {
            "id": 48,
            "name": "Budapest",
            "abbrev": "BUD",
            "type": "land",
            "naval": false,
            "moveTo": {
              "land": [47, 46, 49, 81, 77],
              "sea": []
            },
            "territory": null,
            "path": "m 660.79129,706.02214 -3.18198,-1.67938 -2.38649,-2.47487 -2.56326,-2.74004 -2.74004,-1.59099 -2.82843,-3.09359 -2.12132,-2.12132 -0.7071,-4.68459 -1.67938,-2.03293 -1.67938,-2.29809 -2.91682,-2.03294 -4.77297,-0.7071 -3.44714,-0.70711 -3.00521,-3.35876 -2.82842,-2.38648 -3.00521,-2.56326 -1.14905,-3.27037 -0.35355,-7.95495 -0.70711,-2.47488 -0.79549,-3.44714 -0.53033,-3.8007 3.18198,-2.56327 3.97748,-4.15425 3.88908,-4.15425 3.18198,-3.35876 3.27037,-2.91681 2.2981,-1.14905 2.91681,-0.88388 3.00521,-2.12132 2.2981,-3.00521 0.97227,-2.91681 1.14905,-3.18198 1.76776,-2.65166 2.82843,-2.29809 2.2981,-2.2981 1.23743,-2.91681 1.94455,-2.03294 2.47487,-1.59099 3.09359,-0.88388 3.27037,0 2.2981,-2.03293 -0.61873,-5.83363 0.88388,-0.88389 6.98268,-2.47487 7.33624,-0.70711 2.82842,1.14905 2.82843,-0.61872 2.65165,-1.41421 4.15425,-1.06066 4.68459,-0.0884 2.29809,1.76777 2.20971,2.47487 1.94455,1.67938 1.67937,1.14905 3.53554,0.79549 3.09359,-0.88388 4.68458,0.17678 6.36396,1.5026 2.56327,2.65165 2.03293,1.59099 1.94454,0.70711 1.76777,2.03293 2.56326,4.41942 4.24264,1.85615 3.53554,1.32583 1.85615,1.76776 1.23744,2.56327 2.03293,3.35875 1.85615,1.94455 7.51301,5.12652 10.07627,10.42983 0.17678,5.21492 0.97227,5.3033 3.71232,2.03293 5.03813,2.2981 2.2981,1.67938 0.88388,3.8007 2.2981,2.91681 2.65165,0.70711 0.61872,2.20971 -0.7955,10.25304 -0.35355,2.65165 -1.59099,2.2981 -6.27557,5.74524 -2.03294,1.23744 -6.18718,0.35355 -3.35876,-1.32582 -8.04334,-0.26517 -3.71231,0.53033 -4.15425,0.97228 -5.74524,0.0884 -8.48528,-0.44194 -4.86136,1.41422 -5.3033,3.71231 -1.76777,0.17677 -4.86136,4.41942 -2.2981,6.45235 -1.76776,2.65165 -0.61872,2.03293 -2.74003,0.6187 -2.38649,1.85616 -2.47487,0.79549 -3.97748,-1.14905 -3.97747,-2.91681 -1.85616,-0.88389 -8.48528,0.17678 -2.12132,-0.70711 -8.3085,-0.79549 -2.56327,-0.61872 -5.65685,1.76777 -3.27037,-0.44194 -4.5078,-2.38649 z",
            "supply": {
              "x": 662,
              "y": 322
            },
            "drawUnit": {
              "x": 700,
              "y": 319
            },
            "label": ""
          }, {
            "id": 49,
            "name": "Galicia",
            "abbrev": "GAL",
            "type": "land",
            "naval": false,
            "moveTo": {
              "land": [45, 46, 48, 81, 58, 55, 36],
              "sea": []
            },
            "territory": null,
            "path": "m 658.84674,567.78276 -3.0052,2.91682 -2.82843,2.74004 -2.47487,2.38648 -1.67938,0.70711 -4.5078,0 -2.38649,1.14905 -0.70711,2.38649 0.26517,7.07106 -0.0884,2.65165 1.67938,1.76777 3.8007,-0.0884 4.77297,-0.44194 3.35876,0.0884 2.2097,0.44194 2.65165,1.85616 3.62393,2.29809 2.12132,1.32583 2.47487,0.61872 0.88388,-0.88389 3.00521,-1.06066 3.97747,-1.41421 3.71231,-0.53033 3.62393,-0.17678 2.82842,1.14905 2.82843,-0.61872 2.65165,-1.41421 4.15425,-1.06066 4.68459,-0.0884 2.29809,1.76777 2.20971,2.47487 1.94455,1.67938 1.67937,1.14905 3.53554,0.79549 3.09359,-0.88388 4.68458,0.17678 3.88909,0.88388 2.47487,0.61872 2.56327,2.65165 2.03293,1.59099 1.94454,0.70711 1.76777,2.03293 1.59099,2.74004 0.97227,1.67938 1.5026,0.61871 2.74004,1.23744 3.53554,1.32583 1.85615,1.76776 1.23744,2.56327 2.03293,3.35875 1.85615,1.94455 3.53554,2.56326 3.97747,2.56326 2.56327,2.82843 4.15425,4.15425 3.35875,3.44715 0.61871,-1.06067 3.97748,-1.85615 6.54074,-5.74524 0.7071,-3.18198 0.97228,-2.65165 0.26516,-5.48008 1.14905,-4.33103 1.51052,-2.31425 -5.74999,-13.125 -2.375,-4.5 -5.75,-16.25 -7.625,-2.5 -3.625,-4 -4,-3.375 -2.125,-1.5 -3.125,-1.5 -2.5,-2 -2.37734,-1.70359 -1.59099,-3.53554 -1.32583,-2.20971 -3.0052,-1.32582 -3.88909,2.12132 -3.18198,3.27037 -6.27557,3.27037 -4.41942,1.32582 -3.35876,-0.44194 -7.86656,-6.0988 -8.39689,-5.21491 -3.62393,0.35355 -2.47487,2.56327 -2.03293,2.65165 -5.39169,4.59619 -5.03814,1.85616 -3.18198,1.85615 -1.59099,2.38649 -2.03293,0.61872 -1.85616,-0.53033 -2.03293,-1.67938 -2.03293,-3.00521 -3.88909,-0.35355 -4.5078,0.26516 z",
            "supply": null,
            "drawUnit": {
              "x": 730,
              "y": 380
            },
            "label": ""
          }, {
            "id": 50,
            "name": "Constantinople",
            "abbrev": "CON",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [78, 51, 52],
              "sea": [19, 51, 52, 17, 79, 80]
            },
            "territory": null,
            "path": [
              "m 886.53511,786.72071 -4.4194,0.97226 -2.82843,0.88389 -1.23743,0.88388 -2.2981,0.88388 -16.52862,0.0884 -3.27037,0.26517 -1.67938,0.61872 -3.53553,0.35355 -1.23744,0.35355 -0.0884,1.67938 0.35356,1.59099 2.03293,0.17678 1.76776,0.97227 4.33103,0.53033 5.21492,0.61872 1.23743,1.41421 0.61872,2.03293 -1.06066,1.67938 -2.12132,0.88389 -6.54074,-0.0884 -6.0104,0.0884 -1.67938,2.20971 -2.74004,4.15425 -0.61872,1.59099 -7.42462,0.26516 -0.61872,1.41422 -1.67938,1.41421 -2.91681,0.17678 -1.41422,0.7071 -1.06066,0 -0.88388,-1.94454 0.35355,-1.85616 -1.23743,-1.32582 -0.70711,0 -2.12132,2.47487 0,3.18198 -1.23744,1.23744 -6.01041,0.35355 -3.0052,-1.06066 -3.09359,-0.97227 -1.85616,0.17678 -4.33103,4.86136 -0.35355,4.33103 -1.41421,1.94454 -0.7955,0.44194 -1.76777,2.03293 -1.32582,2.47488 c 0,0 -0.70711,1.23744 -1.06066,1.41421 -0.35355,0.17678 -2.91682,0.35356 -2.91682,0.35356 l 0.0884,3.53553 1.41422,0.61872 3.62392,-1.59099 3.18198,-0.88389 2.20971,-0.88388 1.85615,0.26517 0.7955,1.59099 -0.53033,1.41421 -0.61872,2.20971 0.35355,4.86136 c 0,0 3.18198,-1.85616 3.53554,-1.85616 0.35355,0 4.94974,-0.17678 4.94974,-0.17678 l 5.03814,0.0884 2.03293,0.70711 3.88909,2.82843 2.82843,2.38648 1.67937,0.53033 10.69499,0.35356 2.03294,0.61871 1.41421,0.61872 2.82843,-0.35355 3.53553,-2.2981 2.03293,-1.5026 c 0,0 3.18198,0 4.41942,0 1.23744,0 2.65165,0.35355 2.65165,0.35355 l 2.91682,1.23744 3.09359,0.97227 3.35876,0 2.65165,-1.06066 2.29809,-0.88388 6.0988,-0.44194 c 0,0 6.54074,0.26516 6.89429,0.26516 0.35355,0 5.30328,-0.44193 5.30328,-0.44193 l 0.17678,-15.46796 0.26516,-3.53553 1.32583,-3.8007 0.26516,-3.71231 -1.14905,-3.53554 -1.06066,-4.59619 -0.53033,-4.50781 -6.62912,-14.58407 z",
              "m 825.63556,774.08117 -9.19239,0.44194 -7.95495,0.0884 -6.0988,1.67938 -3.09359,1.85615 -2.12132,1.06066 -2.47487,1.76777 -1.23744,0.70711 -0.0884,2.38648 1.85616,2.03293 1.32582,3.35876 0.7955,1.59099 0,4.5962 -1.23744,4.41941 -1.23744,3.44715 -2.56326,2.12132 -1.5026,1.67938 0.0884,1.23743 1.59099,1.06066 3.0052,0.97228 1.94454,0.35355 1.67938,0.97227 2.38649,0 0.97227,0.7955 c 0,0 0.44194,1.23743 0.79549,1.23743 0.35356,0 1.50261,-0.79549 1.50261,-0.79549 l 0.61872,-1.59099 1.23743,-1.06066 3.18198,0 0.97227,-1.32583 0.88389,-1.76776 2.20971,0 1.06066,-1.76777 1.94454,-0.70711 1.59099,-2.12132 1.41421,-2.20971 2.20971,-1.67938 3.8007,-0.7071 2.82843,-0.44194 0,-3.27037 4.94975,-0.17678 3.71231,0.35355 2.74004,-0.26516 2.65165,-1.32583 3.35875,-0.35355 1.14905,-0.35355 1.23744,-1.06066 -0.17678,-0.88389 -8.3085,-0.26516 -3.97748,-1.41422 -0.79549,-2.47487 -1.14905,-2.82843 -1.5026,-1.76776 -3.97748,-0.35356 -1.23744,-0.79549 -0.17677,-1.06066 -0.7955,-0.7955 0.26517,-3.27037 z"
            ],
            "supply": {
              "x": 839,
              "y": 174
            },
            "drawUnit": {
              "x": 847,
              "y": 151
            },
            "label": ""
          }, {
            "id": 51,
            "name": "Ankara",
            "abbrev": "ANK",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [50, 52, 53],
              "sea": [50, 19, 53]
            },
            "territory": null,
            "path": "m 1052.5284,760.64614 -8.4852,-0.35355 -3.2704,0.26516 -2.2981,1.06066 -2.0329,-1.06066 -1.4142,-0.17678 -1.5026,1.32583 -1.2375,0.17678 -1.3258,0.79549 -2.1213,0 -2.5633,3.00521 -2.3865,0.61871 -2.2981,0 -0.7955,1.14905 -3.8007,0 -3.5355,-1.14905 -6.7175,0.0884 -1.8562,0.26517 -1.2374,0.79549 -3.182,0.44194 -2.74003,-0.61871 -0.53033,-1.59099 -2.12132,-0.17678 -0.7955,-1.41421 -1.06066,-0.61872 -3.27036,-0.7955 -2.20971,0.88389 -2.56327,1.06066 -2.29809,1.5026 -2.38649,0.26516 -1.59099,-0.79549 -2.20971,-1.32583 -0.88388,-1.67938 -0.35355,-1.23743 0,-3.27037 -0.7955,-0.7955 -2.82843,0.44194 -1.06066,0.7955 -1.94454,0.79549 -1.5026,1.14905 -1.5026,1.14905 -1.50261,-0.88388 -2.38648,-0.26517 -1.41421,-1.23743 -3.27037,-2.65165 -0.97228,-1.94455 -1.67937,-1.14905 -0.61872,-1.14904 -1.14905,0.17677 -1.59099,1.06066 -1.76777,1.5026 -1.85615,1.76777 -0.44194,0.61872 -3.27037,0.26516 -2.03294,0.17678 -0.7071,0.70711 -4.86136,0 -3.35876,-1.06066 -4.5078,-0.0884 -2.20971,2.12132 -1.85616,0.88388 -6.18718,0.17678 -2.03293,1.06066 -0.97228,1.06066 -1.5026,0 -1.41421,0.70711 -0.7955,0.97227 -0.26516,1.06066 -1.14905,0.0884 -1.94454,1.06066 -1.59099,1.06066 -1.06067,2.74004 -0.0884,1.67938 -0.61872,1.32582 -0.26517,1.5026 -1.85615,2.03293 -2.2981,1.59099 -1.85615,1.50261 -3.0936,0.17677 -0.88388,1.41422 -0.26517,1.85615 -1.23743,1.94455 -2.91682,0.26516 -1.5026,0.7955 -2.03293,0.17677 0,6.27558 1.5026,3.62392 5.12652,10.96015 0.53033,4.50781 1.06066,4.59619 1.14905,3.53554 -0.26516,3.71231 -1.32583,3.8007 -0.26516,3.53553 -0.17678,15.46796 5.56847,0.26517 c 0,0 4.15425,-0.44195 4.68458,-0.44195 0.53033,0 4.77297,-1.32582 5.92202,-1.94454 1.14905,-0.61872 7.24784,-4.86136 7.77817,-5.56847 0.53033,-0.7071 4.94975,-5.21491 4.94975,-5.21491 0,0 3.18198,-2.2981 3.62392,-2.2981 0.44195,0 8.22012,-1.06066 8.22012,-1.06066 l 8.13173,0.97228 c 0,0 5.83363,1.85615 6.36396,1.85615 0.53033,0 5.74524,0.88389 5.74524,0.88389 l 6.71752,-0.61872 5.74524,-2.65165 11.22532,-8.13173 9.01561,-7.86656 7.24784,-6.18719 6.27557,-4.94975 4.5962,-3.53553 2.7401,-1.41421 7.8665,-0.97228 9.104,-0.7071 8.2201,0.44194 3.4472,0.88388 3.5355,-1.14905 4.9498,-2.12132 2.0329,-0.88388 3.6239,-0.17678 2.3865,-3.71231 z",
            "supply": {
              "x": 933,
              "y": 160
            },
            "drawUnit": {
              "x": 948,
              "y": 168
            },
            "label": ""
          }, {
            "id": 52,
            "name": "Smyrna",
            "abbrev": "SMY",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [50, 51, 53, 54],
              "sea": [50, 17, 18, 54]
            },
            "territory": null,
            "path": [
              "m 1051.2026,794.14533 -2.9168,8.57366 0.2652,3.62393 3.3587,3.18198 2.033,2.65165 3.7123,3.53553 4.6846,8.22012 1.3258,3.97747 0,3.18198 -5.0382,3.53554 -6.8059,3.09359 -11.3137,3.44714 -17.0589,7.86657 -6.4524,4.94975 -3.0052,3.62392 -1.6794,5.83363 -2.2097,5.12652 -2.0329,6.0988 -3.3588,5.03813 -1.2374,2.47488 -1.2374,-0.70711 -5.92204,0.17678 -2.65165,1.06066 -1.23744,1.67938 0.0884,3.71231 -1.32583,0.53033 -1.5026,0.97227 -1.23744,2.03293 -0.88388,1.85616 -4.06586,0.0884 -1.14905,-0.79549 -2.03293,-2.47487 -2.2981,-1.85616 -2.47488,-0.0884 -0.88388,-0.79549 -4.24264,0 -1.85615,0.97227 -0.97228,1.94454 -0.35355,3.18198 -0.70711,1.06066 -1.67938,1.06066 -0.44194,2.56327 -1.67938,0.53033 -0.88388,2.38648 -1.14905,2.74004 0,3.53553 -1.85615,1.76777 -4.50781,-0.0884 -1.85615,0.53033 -4.41942,0.97227 -3.27037,0 -1.23744,0.97228 -2.12132,-2.2981 -2.82842,0.26516 -1.76777,-0.44194 -1.14905,0.7955 -0.61872,2.65165 c 0,0 -0.44194,1.5026 -0.88388,1.5026 -0.44194,0 -2.56326,-0.26517 -2.56326,-0.26517 l -3.0936,-1.06066 -2.38648,-2.38648 -3.62392,-4.06586 -1.59099,-0.97228 -6.80591,0.0884 -0.97227,-1.14905 -0.97227,-0.97227 -2.38649,-0.0884 -1.5026,-1.85615 -9.36916,-0.0884 -1.67938,-1.06066 -4.50781,0.17678 -1.76776,1.23743 -2.03294,0.0884 -0.61871,2.12132 -0.61872,3.09359 0.26516,1.85616 1.32583,2.47487 -0.70711,2.03293 -2.2981,1.14905 -1.59099,2.03294 -4.68458,-0.26517 -6.0988,0.0884 -1.32582,-1.23744 -5.92202,0.17678 -1.23744,-1.23744 -0.35355,-2.03293 -0.44194,-1.76777 -1.06066,-2.47487 0,-2.20971 -3.44715,0 -1.76776,0.7955 -2.03294,-1.59099 -0.97227,-2.47488 -2.20971,1.14905 -3.09359,1.32583 -3.8007,3.62392 -4.24264,0 -1.67938,-0.97227 -2.47487,1.5026 -3.62392,0.26516 -2.03294,1.5026 -2.38648,-0.35355 -0.70711,-0.70711 -1.67938,-0.7071 0.70711,-1.32583 3.97748,-0.53033 3.09359,-0.61872 3.71231,-0.79549 2.82843,-0.97227 4.06586,-2.38649 1.59099,-1.94454 -1.59099,-3.00521 -4.68458,-1.06066 -1.85616,0.44195 -2.91681,1.5026 -1.85616,0.97227 -2.56326,1.23744 -3.35876,0.88388 -2.12132,0.88388 -1.06066,-1.14905 -1.67938,-1.5026 0.7955,-1.94454 0.79549,-1.94454 -0.61871,-2.2981 -1.76777,-2.74004 -2.91682,-3.18198 -1.14905,-1.06066 -2.03293,-0.97227 -0.53033,-2.82843 0.17678,-2.03293 0.79549,-1.76777 -0.97227,-2.12132 -4.5078,-1.14905 -1.50261,-1.06066 -1.23743,-1.14905 -6.89429,0 -1.76777,-1.5026 -0.7955,-1.94454 0.97228,-1.59099 0.17677,-5.92202 1.5026,0.35355 1.23744,2.47488 0.35355,2.12132 1.32583,1.32582 3.27037,1.23744 3.35876,-1.14905 1.5026,-2.12132 -0.88389,-3.09359 0.26517,-7.6014 -1.14905,-2.47487 -2.74004,-1.85616 -1.41421,-0.97227 0.35355,-5.83362 3.49134,-1.85617 10.03208,-0.0884 2.03293,0.70711 6.71752,5.21491 1.67937,0.53033 10.69499,0.35356 2.03294,0.61871 1.41421,0.61872 2.82843,-0.35355 5.56846,-3.8007 5.25911,-0.0442 1.81196,0.39776 2.91682,1.23744 3.09359,0.97227 3.35876,0 4.94974,-1.94454 6.0988,-0.44194 6.93849,0.17675 5.25908,-0.35352 5.56847,0.26515 5.19107,-0.53417 4.96449,-1.6387 8.08032,-5.6224 5.09864,-5.3746 3.62392,-2.2981 8.22012,-1.06066 8.13173,0.97228 5.95273,1.77988 6.15647,0.96016 6.71752,-0.61872 5.74524,-2.65165 11.22532,-8.13173 14.73209,-12.74649 12.40312,-9.79254 2.7401,-1.41421 16.9705,-1.67938 8.2201,0.44194 3.4472,0.88388 3.5355,-1.14905 6.9827,-3.0052 z",
              "m 942.375,931.125 -1.875,1.5 0.375,4.5 -3.125,1.875 -2.5,2.125 -1.75,0.875 -1,1.25 0,7.5 1.25,1 5.25,0.25 2.625,-1.5 1.5,1 4.125,0 1.375,-0.875 1,-1 0.375,-3 1.25,-1.375 2.875,-0.75 2.25,-1 2.25,0.125 1,-1.5 0,-2 1.75,-1.125 1.125,-0.875 5,0.5 1,-0.875 -1.125,-2 -1.125,-0.375 -1.875,-1.625 0.375,-5 2.375,-3.375 3.625,-2.625 2,-1.25 2,-1.5 0,-1.75 -1.625,0.125 -2.25,1.75 -2.25,1.375 -2.125,1.25 -2.625,0.75 -1.25,1.875 -1.375,1.875 -2.75,0.5 -1.75,1.375 -2.625,1.375 -3.75,0.75 z",
              "m 844.5,917.75 -0.625,2.875 -1.375,2.375 -0.125,2.375 -2.75,0.25 -2.125,1.125 -1.25,-0.75 0.25,-2.625 0.875,-1.625 1.25,-0.75 2.125,-0.75 1.5,-1.625 z"
            ],
            "supply": {
              "x": 823,
              "y": 98
            },
            "drawUnit": {
              "x": 929,
              "y": 99
            },
            "label": ""
          }, {
            "id": 53,
            "name": "Armenia",
            "abbrev": "ARM",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [59, 51, 52, 54],
              "sea": [59, 19, 51]
            },
            "territory": null,
            "path": "m 1075.5,736.625 -0.9629,1.65889 0,3.44714 -1.149,1.14905 -3.182,0.97227 -1.0606,-0.17677 -1.1491,2.12132 -1.4142,3.18198 -1.1491,3.44714 -1.3258,1.32583 -1.7677,0.79549 -3.182,1.06066 -1.8562,1.06066 -1.3258,1.14905 -1.3258,0.53033 -0.3536,1.06066 -1.7678,1.23744 0.5304,12.19759 0.5303,17.58928 -2.3865,3.71231 -2.0329,6.36396 -0.8839,2.20971 0.2652,3.62393 3.3587,3.18198 2.033,2.65165 3.7123,3.53553 2.1213,3.71231 2.5633,4.50781 1.3258,3.97747 0,3.18198 39.8631,0.70711 5.0382,0.61872 1.8561,0.97227 c 0,0 2.7401,0 3.182,0 0.4419,0 1.9445,-0.97227 1.9445,-0.97227 l 2.7401,-1.32583 4.0658,-0.44194 5.4801,0.44194 5.1265,1.5026 L 1152,832.41748 1152.125,766 l -14.875,0.625 -3.125,0.875 -3.875,-0.25 -3.625,-1.75 -4.875,0 -4.5,3.75 -1.6123,0.58853 -2.1377,-0.21353 -6.375,-3.5 -3.25,-2.625 -0.375,-4.5 -2.25,-1.375 -2.625,1.5 -3.125,0.75 -1.875,-4 -8.625,-7.375 -2.5,-0.125 -0.875,-3.25 z",
            "supply": null,
            "drawUnit": {
              "x": 1102,
              "y": 164
            },
            "label": ""
          }, {
            "id": 54,
            "name": "Syria",
            "abbrev": "SYR",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [52, 53],
              "sea": [18, 52]
            },
            "territory": null,
            "path": "m 1063.6654,831.09165 -5.0382,3.53554 -6.8059,3.09359 -11.3137,3.44714 -12.6395,6.01041 -4.4194,1.85616 -6.4524,4.94975 -3.0052,3.62392 -1.6794,5.83363 -2.2097,5.12652 -2.0329,6.0988 -3.3588,5.03813 -1.2374,2.47488 1.6794,1.76777 0.7955,1.85615 -0.1768,1.85616 -1.3258,3.27036 -2.4749,2.03294 -2.9168,1.32582 -0.61872,1.76777 0.0884,5.12652 0.88388,1.59099 0.17678,4.41942 -1.23744,2.20971 1.23744,1.85615 2.91676,1.23744 0.1768,7.42462 -0.2651,4.68459 1.0606,2.82842 1.8562,2.38649 0.2651,2.20971 1.591,3.27037 2.2097,4.59619 0.088,2.2981 -0.9723,2.74004 -1.0606,5.48007 0.4419,3.62392 1.0607,3.88909 -0.2652,7.07107 143.3122,0 0,-132.58252 -19.0382,0.17677 -5.1265,-1.5026 -5.4801,-0.44194 -4.0658,0.44194 -2.7401,1.32583 -1.7368,0.98877 -3.3897,-0.0165 -1.8561,-0.97227 -5.0382,-0.61872 z",
            "supply": null,
            "drawUnit": {
              "x": 1086,
              "y": 65
            },
            "label": ""
          }, {
            "id": 55,
            "name": "Warsaw",
            "abbrev": "WAR",
            "type": "land",
            "naval": false,
            "moveTo": {
              "land": [36, 37, 56, 60, 58, 49],
              "sea": []
            },
            "territory": null,
            "path": "m 714.26624,473.4724 1.14905,0.88388 1.76776,0.88388 3.97748,4.24265 2.56326,2.56326 0.61872,2.03293 2.47487,2.20971 3.35876,2.2981 3.53554,1.59099 3.0052,1.59099 2.65165,1.94454 3.25647,1.78667 1.625,5.5 5,10.875 0.875,4.125 -0.375,5.625 0.625,3.25 4.375,5 -1.25,2.75 0.25,9.5 -2,3.25 -0.625,9.625 -1.25,5.25 -1.5,4.375 -2.37734,-1.70359 -1.59099,-3.53554 -1.32583,-2.20971 -3.0052,-1.32582 -3.88909,2.12132 -3.18198,3.27037 -6.27557,3.27037 -4.41942,1.32582 -3.35876,-0.44194 -7.86656,-6.0988 -6.01041,-3.8007 -2.38648,-1.41421 -3.62393,0.35355 -2.47487,2.56327 -2.03293,2.65165 -5.39169,4.59619 -5.03814,1.85616 -3.18198,1.85615 -1.59099,2.38649 -2.03293,0.61872 -1.85616,-0.53033 -2.03293,-1.67938 -2.03293,-3.00521 -3.88909,-0.35355 -4.5078,0.26516 -4.15426,2.12132 -0.61871,-3.18198 -3.0936,-2.47487 -3.71231,-3.44714 -5.03813,-5.65686 -2.65165,-3.0052 -2.47488,-4.41942 -1.14905,-6.89429 -0.61871,-3.18198 -2.2981,-4.50781 -1.67938,-3.62392 -1.06066,-1.67938 -1.14905,-5.03813 0.26517,-1.14905 2.74004,-3.44715 3.62392,-3.0052 2.82843,-2.56326 2.65165,-2.65165 1.41421,-3.53554 0.79549,-3.53553 2.12132,-3.71231 3.00521,-3.27037 2.12132,-2.2981 5.03813,-1.41421 4.68459,-1.59099 4.94974,-1.14905 3.27037,0.17678 3.0936,0.97227 2.12132,0.97227 2.38648,0 4.33103,-2.03293 3.62392,-2.20971 3.09359,-1.67938 5.30331,-0.0884 3.44714,-1.5026 3.97748,-1.59099 3.88908,-1.14905 2.91682,-1.67938 1.67938,-2.38648 0.79549,-0.97228 z",
            "supply": {
              "x": 687,
              "y": 445
            },
            "drawUnit": {
              "x": 699,
              "y": 443
            },
            "label": ""
          }, {
            "id": 56,
            "name": "Livonia",
            "abbrev": "LVN",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [61, 60, 55, 37],
              "sea": [61, 4, 5, 37]
            },
            "territory": null,
            "path": [
              "m 724,331.625 -4.34207,-0.10429 -1.06066,1.41421 0.35355,1.67938 1.06066,3.18198 2.2981,1.23744 0.17678,1.67938 -0.0884,2.20971 -1.67938,2.03293 -1.14905,1.32583 0.70711,1.32582 0.17677,3.62392 0.97227,1.32583 3.00521,0.97227 1.5026,0.0884 1.85616,0.88388 2.56326,-1.06066 4.68458,0.17678 1.67938,2.03293 -1.14905,1.67938 0.0884,2.38648 -2.56326,2.65165 -0.97228,0.35356 -0.97227,1.14905 0.61872,1.85615 1.67938,1.5026 0,3.8007 -0.70711,3.62392 -1.5026,2.91682 0.35355,10.96016 -2.03293,2.03293 -9.63433,0 -1.32582,-1.76777 -3.00521,-2.20971 -1.94454,-1.06066 -0.88388,-1.94454 -1.23744,-2.20971 0,-5.3033 -1.76777,-1.67938 -1.85615,-0.17678 -1.23744,-1.59099 -2.20971,0.17678 -3.62392,1.59099 -5.21491,4.24264 -3.71231,2.74004 -1.32583,2.2981 0.0884,6.62912 -1.85616,2.65165 -0.53033,2.47488 -0.7071,0.79549 -0.17678,2.03293 -1.76777,1.32583 0.88389,1.23744 1.14905,2.03293 -1.23744,2.03293 -0.88388,1.23744 0,11.66726 3.71231,0.97227 1.94454,2.20971 2.56326,2.56326 2.2981,3.88909 5.3033,9.19239 1.32583,3.44714 3.18198,1.06066 5.56846,0.44194 3.00521,1.50261 2.12132,2.38648 0.35355,9.81111 -0.53033,4.86136 -0.97227,4.5078 -0.61872,2.65165 -0.53033,6.18719 2.91681,1.76776 6.54074,6.80591 0.61872,2.03293 2.47487,2.20971 3.35876,2.2981 3.53554,1.59099 3.0052,1.59099 2.65165,1.94454 3.25647,1.78667 7.375,-5 13.375,-13.125 4.25,-5.875 4.625,0 6.625,-3 3.875,-2.875 -0.125,-4.125 -1,-5.625 0.125,-3.75 2,-5 -0.25,-17.25 1,-7.125 1.5,-6 -1.875,-6.25 1.75,-5.5 3.625,-8.25 2.125,-7.625 2.375,-2.5 -5.125,-4 -0.125,-7.375 -4.25,-7.625 -3.5,-7.875 -4.25,-6.5 -6.75,-6.625 -6.375,-4.25 -27.25,-1.75 -6.625,-2.375 z",
              "m 709.49327,338.76856 -1.32583,-1.14905 -2.74004,-1.14905 -1.85615,0.0884 -0.44194,1.85615 -1.76777,0.44194 -0.0884,1.06066 0.44194,1.23744 1.59099,1.32583 2.91682,1.06066 2.82843,-0.97228 0.44194,-1.14904 z",
              "m 714.88496,349.0216 -0.17678,1.67938 -2.47487,2.20971 -1.32583,0.7955 -0.61872,1.76776 -1.85615,2.38649 -4.24264,-0.44194 -0.53033,1.5026 -1.23744,2.2981 0.35355,2.03293 -3.27037,0.26516 -0.35355,-1.76776 1.23744,-1.23744 0.26516,-5.56847 -1.06066,-0.97227 0,-1.14905 2.47488,-0.44194 1.14905,-0.70711 1.41421,-1.14904 0.53033,-0.88389 5.92202,-0.26516 1.67938,-0.7955 1.85615,-0.0884 z"
            ],
            "supply": null,
            "drawUnit": {
              "x": 747,
              "y": 546
            },
            "label": ""
          }, {
            "id": 57,
            "name": "Finland",
            "abbrev": "FIN",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [64, 65, 61],
              "sea": [64, 4, 62]
            },
            "territory": null,
            "path": "m 757.90923,82.818315 -2.54241,-5.767657 -2.65165,-9.545941 -2.2981,-5.656854 -2.29809,-2.298098 -6.74398,-0.549766 -7.75,0.625 -4,1.25 -2.5,2.25 -0.5,1.375 0.25,12.75 -1.375,2.625 -1.625,2.125 -3.5,1.125 -11,1.5 -10,0.25 -3.875,-2.375 -7.625,-8.5 -3,-0.75 -3,0.625 -2,4 -1.25,4.625 0,2.125 1.75,1 2.5,2.5 6,4.75 3.5,3.25 3.375,3.375 3.125,1.500001 2.875,1.75 2,1.375 1.25,2.5 0.875,3.125 1,1.875 1.75,3.5 1.125,2.5 0.125,4.875 1.125,13.875 1,8.25 -0.125,16.625 1.625,0.25 1.125,2.125 1,0.875 0.5,0.375 1.375,1.75 0.125,1.875 0.625,-1.25 0.375,-1.75 1.375,-1 2,0 0.875,0.75 2.125,0.125 1.25,1.375 0.25,2.625 0.875,2.75 1.25,2.5 0.75,3.625 1.125,3 0.875,3.125 -0.25,1.5 -1.625,1.375 -3.75,0.375 -1.625,2 -0.75,1.5 0.25,3 -1.25,2.25 -1.625,2.25 -0.625,1.75 -1.625,0.25 -0.125,1.75 -2.375,3 -3,1.25 -0.625,1.875 -1.875,2 -0.875,0 -0.125,2.375 -0.75,0.75 -0.5,2.75 -0.5,1 -5.75,0.125 -0.75,0.875 0,1.375 -1.5,0.625 -1.375,0.5 0,1.375 -2.25,0 0.75,1.5 0.5,1.875 -0.125,2.5 -1.5,2.125 -3.875,0.25 -1.5,1.25 0.125,1.625 1.125,0.625 0,4.25 -1.25,2 -2.5,1.875 -2.375,1 0,1.5 0.875,1.875 1.25,3.375 0.75,3.125 0.125,4.5 -1.125,1 -0.875,0.875 1,2.375 1.125,3.125 0.75,2.625 1.25,2.25 -0.125,12.375 -0.875,1.625 0.125,3.375 0.625,1.375 0,4.125 -0.875,1.375 0,2.625 4.75,0 1.375,-0.875 0.875,0.25 1,2.125 2.125,2.375 1.5,2.625 2.375,2 1.375,-0.75 1,-1 3.25,0.125 1.25,2.875 0.25,3 0.75,1.75 0.125,3.375 -0.625,1.75 -3.25,0.75 -2,1.75 3.375,0 2,-1.25 2.375,-2.5 1.375,-2.25 0.75,-2.5 0.875,-1.875 4.875,0 2.25,1 4.125,0 2.625,-0.75 3.875,-1.625 1.5,-0.75 0.5,-1.625 2.125,-0.5 c 0,0 1.875,-0.125 2.375,-0.125 0.5,0 3.125,-1.125 3.125,-1.125 l 1.625,-0.75 0.5,-1.75 2.75,-0.125 1.875,-1.875 13.75,-0.25 2.375,-2.5 2.125,-0.875 3.125,-0.25 3.375,-1 2.625,0.125 5.75,-13.625 5.375,-7.125 6.25,-5.5 2,-3.875 2.625,-12.375 0.625,-11.375 -1.5,-21.25 -2.625,-5.625 -1.625,-4.625 -10.5,-15.25 -3.625,-15.625 -3.625,-10 -2.125,-7.875 -6.125,-14.625 -2.5,-8.875 1.375,-10.75 0.125,-6.75 -0.875,-8 -8.875,-9.875 -3.375,-6.625003 0.25,-5.875 z",
            "supply": null,
            "drawUnit": {
              "x": 750,
              "y": 750
            },
            "label": ""
          }, {
            "id": 58,
            "name": "Ukraine",
            "abbrev": "UKR",
            "type": "land",
            "naval": false,
            "moveTo": {
              "land": [59, 60, 55, 49, 81],
              "sea": []
            },
            "territory": null,
            "path": "m 898.75,501.625 -10.375,-0.5 -3.625,-2.875 -6.125,0 -22.375,3.125 -9.5,3 -14,1.625 -7.375,2 -6.5,3.875 -5.75,0.375 -25,6.125 -6.125,0.25 -19.625,7 -7.625,4.25 -1.25,2.75 0.25,9.5 -2,3.25 -0.625,9.625 -1.25,5.25 -1.5,4.375 2.5,2 3.125,1.5 2.125,1.5 4,3.375 3.625,4 3.875,1.25 3.75,1.25 1.75,5.25 2,5.75 2,5.25 2.375,4.5 1.25,3.125 2.875,6.125 1.625,3.875 2.75,0 3,0.75 3.25,2 3.125,2.625 2.75,3.125 3.125,5.25 3.5,4.5 2.875,4.25 7.875,8.875 9.125,-6.25 7.25,-7.125 5.75,-7.125 2.375,-8.5 2.75,-5.25 19.125,-16.875 16.25,-8.625 8.125,-7.375 2.375,-9.625 0.375,-25.875 9.625,-24.25 -0.125,-5.125 z",
            "supply": null,
            "drawUnit": {
              "x": 826,
              "y": 400
            },
            "label": ""
          }, {
            "id": 59,
            "name": "Sevestopol",
            "abbrev": "SEV",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [53, 60, 58, 81],
              "sea": [81, 19, 53]
            },
            "territory": null,
            "path": "m 1152.1081,591.04923 -6.9004,0 -4.7773,-1.85781 -11.6776,-14.06629 -8.7583,-1.5924 -8.2274,-3.18482 -5.0427,-2.38862 -16.4549,-10.08526 -3.981,0.26541 -8.7582,-3.71563 -5.3081,-4.77722 -0.7962,-8.49285 -3.7156,-12.20847 -3.7156,-5.57344 -3.7156,-0.5308 -9.0237,-2.91942 -12.4739,-15.39329 -1.0616,-6.63503 -7.4312,-8.22745 -0.7962,-5.30803 -14.2426,0.26719 -1.625,-1.125 -3.375,0.375 -6.75,4.375 -8.125,0.875 -16.75,-6.875 -12.875,-11 -3,-1.125 -4.375,-3.625 -4.875,-1 -4.375,1.125 -3.75,4.5 -3.75,7.75 -3.75,4.5 -1,14.25 -6.625,0.5 -9.875,-0.75 -5.625,-1.875 -7.75,-0.125 -7.625,4.25 -0.625,2 0.625,4.75 1.125,6.375 0.125,5.125 -1.75,4.75 -1.875,5.125 -3.625,8.625 -2.375,5.75 -0.375,25.875 -2.375,9.625 -8.125,7.375 -16.25,8.625 -16,13.75 -3.125,3.125 -2.75,5.25 -1.375,4.75 -1,3.75 -5.75,7.125 -7.25,7.125 -9.125,6.25 1.875,5.625 0.375,2.375 -2.875,6.5 1.125,4.625 2.375,3.5 0.5,8.875 1,4.25 2.375,2.125 3.75,1.625 4.75,0.75 4.5,-0.75 3.5,-1.625 3.75,-1.5 -0.125,-7.625 -2,-1 0,-6 1.375,-1.25 2.25,0 2.5,3.25 2.375,2 0.625,-0.375 0.125,-8 3.75,-4.625 0,-1.875 -2.5,0 -1.375,-1.125 0.125,-7.25 1,-1 2,0.625 3.5,0.5 0.25,-2 -2.875,-0.375 -0.75,-1.75 -0.125,-3.5 2.125,-2.125 1.375,0 3.125,1.25 3.625,4.75 3,-3.125 2.375,-0.25 0.875,-3 2.5,0 0.75,1.125 0.125,1.625 1.5,0.375 1.5,-2.75 0.875,-3 0.25,-2.5 1.375,-0.625 3,0 0.5,2.25 -0.125,3.875 2.875,2.625 1.25,0.625 0.125,2.625 -1.75,2.875 -6.5,0.25 0.25,1.75 3.375,0.875 1.5,1.75 0.875,1.875 2,2.375 5.125,0.375 0.875,-1.375 3.75,0 1.625,0.875 2,-1.25 1.375,-2.375 3,0.125 2.375,0.75 1.375,2.5 -0.25,4.875 -2.625,2.375 -2.75,2.625 -2.25,3.875 -3.75,3.125 -0.875,1.375 0.5,1.375 2,2 4.75,0.125 2.625,-1.25 1.875,0 1.5,2.875 4,0.375 1.625,1.25 -0.125,2.375 0.25,2.625 -1,1.75 0.25,6.5 1.125,1.25 2.875,1 5.625,0.125 0.5,-3.25 2.875,-0.25 1,-0.75 0.25,-1.75 0.75,-2 2,0 1.25,-3.125 1.625,-2.25 0.625,-1.625 9.5,0.125 2.5,-2 1.5,-1.125 1,-2.25 0.5,-0.75 7.125,0.125 1.75,-1.375 1.625,-1.25 2,-2.625 -0.25,-3.75 1.125,-3.375 0,-1.5 -3.625,0 -1.25,0.75 -1.875,0.375 -2.875,3.5 -6.125,0.125 -1.75,-1.125 -2.125,-2.25 -2.375,-2.625 -2.625,-2.25 -2.625,-2.375 -2.875,-2.125 -2,-1.375 -1,0.5 0.25,2.5 1.875,0.375 1.75,1.5 0,2.25 3.375,0 2.625,1.875 1.375,0.25 1.375,1.5 0.625,2.5 -0.625,4 -1.375,1.5 -2.625,0.625 -1.125,-1.125 -3.5,0 -1.875,-2.625 -0.875,-1.875 -0.25,-2.75 -0.875,-0.875 -6.375,0 -0.5,-1.25 -0.625,-5.75 -0.625,-1.125 -1.125,-1 -1.25,1.125 -7.125,0.25 -1.875,-1.25 -1.625,-0.625 0.25,-4.875 1,-2.375 7,0 1.875,0.75 1.375,1.625 0.75,0.375 3.625,0.25 2.25,-1.625 6.25,-6.5 2.125,-0.875 3.625,-1 1.125,1.125 0,2.75 -0.75,1.125 -0.25,2 3.625,-3.125 2.25,-1.875 0.125,-3.25 2.125,-2.125 0.625,-1.75 1.5,-0.5 -0.25,-1.5 2.125,0.125 2.125,-2 0.25,-1.25 1.75,-0.875 2,-1.125 2.75,0.125 1.75,1 1.375,-1.5 -0.125,-3 2,-1.875 2.125,-1.625 2.5,0 2.25,-2.25 1,-1.875 2.125,-2.375 4.25,0.125 2.5,-0.875 2.875,-1.5 2.5,-3.25 5.25,0.25 0.875,-1.75 2.375,-1.5 1.5,-1.125 c 0,0 1.5,-0.875 2.375,-0.875 0.875,0 3.5,0 3.5,0 l 0.125,3 -1.125,2.625 -1,1.625 -1.875,1.5 -2.75,1.75 -1.625,1.25 -1,2.125 0.125,2.875 -3.75,4.375 -12.5,-0.25 -0.875,1.25 2.125,3.25 2.625,2.875 1.375,0.125 1,-1.375 4.25,0 1.75,2.125 3.5,-0.25 1,1.875 2,0.125 0.625,1.125 -0.25,4 -0.875,1 -2.75,-0.25 -2.125,-1.75 -2,0 0.125,1 1.625,2.125 1.75,1.5 0.5,4.625 -2.25,0.625 -4.125,0 -1.75,2.125 -1.125,0.125 -1.125,2 -1,2.875 -1,0 -0.375,2 -0.25,3.25 -1.875,1.625 -4.75,0.125 -3.875,3.75 -0.75,1.625 0.5,1.375 0.875,2 11.125,-0.25 3.875,5.875 7.875,-0.625 3.5,1.25 3.5,0.125 1.125,1.125 0.75,1.625 2.875,-0.125 1,-0.875 2.5,0.25 0.875,1.875 3.5,0 2.5,1.25 2,-0.125 0.375,1.75 1.625,0.375 1.75,1.25 1.25,2.875 1.375,0 1.125,2 2.375,0.125 2.375,1.25 3,0.375 1.25,1.25 4.25,7.625 5.25,-0.125 3.25,2 3.75,0.125 2.5,-0.875 4.5,-0.25 1.125,1.25 1.75,-0.125 2,0.875 3.75,2.125 0.25,3 4.625,2.625 3.5,0.25 1.875,3.75 1,5.875 0.125,2.375 2.375,2.375 0.5,4.75 -1.125,3.5 -2.875,1 -1.125,2.625 3.875,5.125 2.25,3.375 0.875,3.25 2.5,0.125 2.875,2.375 5.75,5 1.875,4 3.125,-0.75 2.625,-1.5 2.25,1.375 0.375,4.5 3.25,2.625 6.375,3.5 c 0,0 2.375,0.625 3.75,-0.375 1.375,-1 4.5,-3.75 4.5,-3.75 l 4.875,0 3.625,1.75 3.875,0.25 3.125,-0.875 14.875,-0.625 z",
            "supply": {
              "x": 924,
              "y": 281
            },
            "drawUnit": {
              "x": 1027,
              "y": 393
            },
            "label": ""
          }, {
            "id": 60,
            "name": "Moscow",
            "abbrev": "MOS",
            "type": "land",
            "naval": false,
            "moveTo": {
              "land": [61, 56, 55, 58, 59],
              "sea": []
            },
            "territory": null,
            "path": "m 1076.1657,253.5112 -9.2907,0.2388 -7.4731,1.51798 -18.6519,2.85702 -3.75,4.75 -7,3 -14.25,4.625 -15.75,0.125 -8.875,5 -18.75,3.375 -30.75,23.625 -28.75,-1.25 -6.875,1.25 -6,2.875 -12.5,9.75 -2.375,3.625 -4.25,17.625 -1.375,10.25 -3,6.25 -6.125,4.125 -4.5,-1.375 -3.375,-3.25 -6,-3 -5.5,-0.125 -4.5,3 -4.625,6.25 -3.5,7.5 -6,9.25 -6.125,6.125 -9.625,4.5 -22.625,0.625 -2.375,2.5 -2.125,7.625 -3.625,8.25 -1.75,5.5 1.875,6.25 -1.5,6 -1,7.125 0.25,17.25 -2,5 -0.125,3.75 1,5.625 0.125,4.125 -3.875,2.875 -6.625,3 -4.625,0 -4.25,5.875 -9.875,9.875 -3.5,3.25 -7.375,5 1.625,5.5 2.625,6.125 2.375,4.75 0.875,4.125 -0.375,5.625 0.625,3.25 4.375,5 7.625,-4.25 8.625,-3 11,-4 6.125,-0.25 12,-3.25 13,-2.875 5.75,-0.375 6.5,-3.875 7.375,-2 14,-1.625 9.5,-3 11.125,-1.75 11.25,-1.375 6.125,0 3.625,2.875 10.375,0.5 0.625,-2 7.625,-4.25 7.75,0.125 5.625,1.875 9.875,0.75 6.625,-0.5 1,-14.25 3.75,-4.5 3.75,-7.75 3.75,-4.5 4.375,-1.125 4.875,1 4.375,3.625 3,1.125 4.75,4.375 8.125,6.625 9.125,4 7.625,2.875 8.125,-0.875 6.75,-4.375 3.375,-0.375 1.625,1.125 14.2426,-0.26719 10.616,-11.14687 2.9195,-7.69664 3.7156,-1.06161 4.7772,-10.61606 -2.1232,-14.59709 1.327,-23.35533 12.4739,-29.19417 11.4122,-3.71562 3.9811,-12.47387 -1.0616,-7.96205 -1.8578,-9.28906 14.3316,-34.5022 1.0616,-8.49284 -1.8578,-11.41227 -5.0426,-18.57811 -7.6966,-14.33168 z",
            "supply": {
              "x": 923,
              "y": 562
            },
            "drawUnit": {
              "x": 902,
              "y": 552
            },
            "label": ""
          }, {
            "id": 61,
            "name": "Saint Petersburg",
            "abbrev": "STP",
            "type": "land",
            "naval": false,
            "moveTo": {
              "land": [57, 56, 60],
              "sea": []
            },
            "territory": [62, 63],
            "path": [
              "m 946.9527,78.293447 -9.0777,0.08155 -3,-1.125 -2.75,0.625 -0.625,1.875 -12.5,0 -1.625,-1.375 -1,-9.75 1.875,-2.5 5.25,-0.625 -0.125,-5.375 -2.125,-0.75 -9.75,-9.375 -4.125,2.625 -10,0.875 -4.625,-0.875 -0.75,1.75 1.5,2.125 2.25,0 3.5,1.875 1,2.875 1.25,0.5 0.375,2.25 1.625,1 1,2.5 0.5,14.625 1.5,3.25 2,2.25 1.75,1.125 3.875,1 1,0 2.5,2.375 1.25,7.25 -1.875,3.750003 1,2.375 -0.5,11.25 -4,-0.5 -4.125,-7.25 -2.25,-0.25 -0.875,1.625 -5.375,0.375 -1.25,1.125 -1.5,4 -3.25,2.75 -3.75,3.75 -8.5,18.75 5.375,6.5 3.625,4.375 3.75,2.25 4.625,0.5 0.875,3.875 3.5,4 11,1.125 0.25,3.625 -1.75,2.25 -9.125,-1.5 -13.625,-0.625 -5.875,-1 -5.125,0 -2.875,-2.25 -6.75,1.25 -2.125,-1.25 -0.625,-3.75 -7.25,-0.25 -1.5,-1.5 -6.625,-0.125 0.125,6 1.125,1.75 -1.125,2.5 2.25,3.75 2.875,2.125 5.25,-0.25 3.5,3.625 2.75,0.75 3.5,8.25 0,3.25 -15.25,0.25 -2,-1.875 -4.875,-1.375 -4,-4.625 -4.375,0.875 -3.625,-0.25 -0.875,-2 -3.875,-2.875 -1.125,-6 -1,-2.875 -1.625,-1 -1.25,-0.75 -0.5,-8.625 -3.125,-1.625 1.125,-1.625 0.375,-5.625 1.125,-0.5 -5.375,-7.5 -1.625,-1.875 -8.5,-1.875 -2.125,-2.25 -1.125,-2.625 -2.5,-0.125 -2.875,0.875 -2.125,-2 -0.125,-2.375 -1.875,-1.75 -5.75,-4 -1,-3.25 1.125,-2.75 3.625,-0.875 4.125,1.375 1.75,3.125 1.25,2.5 4.375,0 2.75,3 22.5,2.625 2,0.625 6.25,-2.125 6,1.75 3.375,2 9.75,0.125 5.75,-5.875 3.5,-0.375 2.5,-2.5 -0.125,-1.625 5.125,-4.875 2.25,-3.625 -0.5,-3.5 2.625,-2.25 -0.25,-4 -1.25,-2.125 1.125,-2.000003 -1.75,-5.375 -0.375,-2.875 -1.625,-2.125 -1.875,-1.75 -1.5,-1 -0.75,-4.375 -1.875,-0.75 -2.5,1.875 -4.25,0 -3.5,-1.5 -2.125,-2.375 -7.125,0 -5.125,-2 -2.75,-2.125 -6.125,-2.5 -6.125,-1.375 -4.625,-2.125 -3.375,0.125 -7.75,-7 -5.75,0.25 -3.25,3.5 -4.25,0.125 -1.875,-0.875 -3,1.25 -2.375,6.875 -0.75,2.625 -5.875,1.25 -1.75,-1.875 0,-6.625 4.25,-3.5 -0.375,-1.75 -2.375,1 -9.125,-1.75 -1.75,-2 0.75,-3.25 3.125,-1.375 2.75,0 -1.5,-3.75 -3.875,-0.375 -5,-1 -1.375,1.75 -1.375,5.5 -0.625,6.125 -6.375,5.625 -7.625,12.625 -3,5.25 -0.25,5.875 3.375,6.625003 8.875,9.875 0.875,8 -0.125,6.75 -1.375,10.75 2.5,8.875 6.125,14.625 2.125,7.875 3.625,10 2.375,11 1.25,4.625 8.125,12.125 2.375,3.125 1.625,4.625 2.625,5.625 1.5,21.25 -0.625,11.375 -2.625,12.375 -2,3.875 -6.25,5.5 -5.375,7.125 -5.75,13.625 4.625,1.125 5.375,4.375 5.5,0.25 2.375,2.125 3.875,2.25 -0.25,2.25 -4.375,1.375 -4.75,2.25 -2.5,3.75 -9.625,0.25 -1.25,1 -0.625,8.375 -5.75,1.375 -4.25,1 -5.625,-1.75 -2.875,-2.875 -5.75,0.375 -3.125,0.25 -4.25,-2.75 -2,0 -0.125,5.5 -2.75,0.125 -3.125,-0.625 -3.625,1.875 -3.75,0.5 -2.625,2.625 -2.625,3 5.75,6.625 6.625,2.375 15.125,1.25 12.125,0.5 6.375,4.25 6.75,6.625 4.25,6.5 3.5,7.875 4.25,7.625 0.125,7.375 5.125,4 22.625,-0.625 9.625,-4.5 6.125,-6.125 6,-9.25 3.5,-7.5 4.625,-6.25 4.5,-3 5.5,0.125 6,3 3.375,3.25 4.5,1.375 6.125,-4.125 3,-6.25 1.375,-10.25 2,-8 2.25,-9.625 2.375,-3.625 6,-4.875 6.5,-4.875 6,-2.875 6.875,-1.25 12.5,0.75 16.25,0.5 30.75,-23.625 10.875,-2.125 7.875,-1.25 8.875,-5 15.75,-0.125 14.25,-4.625 7,-3 3.75,-4.75 18.125,-2.75 8,-1.625 9.2907,-0.2388 -0.2278,-9.34179 -5.0427,-13.80088 -11.943,-17.7819 0,-15.9241 -13.5355,-16.98569 -6.1043,-9.81986 -1.8578,-8.75825 -1.0616,-31.58279 -34.2368,-23.62073 -8.49283,-0.2654 -11.41226,-5.30803 -13.53548,-0.53081 -11.94307,-6.635039 z",
              "m 843.5,167 -0.125,-4.5 -4.375,1.125 -0.75,1 0.875,1 z",
              "m 847.625,158.5 3.25,0 -1.375,-2.5 -1,1.25 z",
              "m 926.125,33.374999 3.5,0.25 3.5,-2.375 1.625,-2.375 -1.25,-4.875 0.25,-5.75 -1.625,-1.750001 -3.125,0 -2,-1.875 -2,-0.125 -3.125,2.25 -0.25,6.875001 -1.375,1.875 0.25,0.875 z"
            ],
            "supply": {
              "x": 810,
              "y": 662
            },
            "drawUnit": {
              "x": 916,
              "y": 716
            },
            "label": ""
          }, {
            "id": 62,
            "name": "Saint Petersburg (South Coast)",
            "abbrev": "STP (SC)",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [57, 4, 56]
            },
            "territory": [61, 63],
            "path": 61,
            "supply": null,
            "drawUnit": {
              "x": 795,
              "y": 641
            },
            "label": ""
          }, {
            "id": 63,
            "name": "Saint Petersburg (North Coast)",
            "abbrev": "STP (NC)",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [65, 3]
            },
            "territory": [61, 62],
            "path": 61,
            "supply": null,
            "drawUnit": {
              "x": 847,
              "y": 764
            },
            "label": ""
          }, {
            "id": 64,
            "name": "Sweden",
            "abbrev": "SWE",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [66, 65, 57],
              "sea": [65, 6, 66, 5, 4, 57]
            },
            "territory": null,
            "path": [
              "m 711.875,161.25 -3.625,0.75 -2.75,-0.875 -1.375,-1 -1.625,1 -1.125,1.875 -1.125,-1.5 -0.75,-1.125 -2,-1.375 -2,0.5 -0.875,1.625 0,4.875 -0.875,2.5 -1.5,2 -0.625,1.375 -1.5,0.5 -1.125,1 -0.625,1.625 -0.75,1.5 -0.625,4.25 -0.5,8.375 0,5.625 -0.5,5.25 -1.25,1.375 -0.375,1.875 -1.25,1.625 -1.75,1.75 -1.75,1.125 -0.875,2.625 -0.625,2.25 -2,1.75 -2.25,0.5 -1.125,2 -0.625,2.5 -0.625,1.375 -1.375,1.75 -0.5,0.875 -1.5,-0.25 -1.875,-0.875 -2.125,1 -0.125,1.375 -1.125,0.875 -1.25,0.75 0,5.25 -1.25,1.625 -2,1.5 -5.5,0 -2.125,1.125 -1.125,0.875 -1.125,2.125 -0.125,2 -1.375,1.625 -5,0.125 -1.5,1.625 -0.25,8 1.625,1.25 0.5,2 0,1.75 -1,2.375 0.25,6.375 -1,2 -2.125,0.5 -1,2 -0.375,2.25 -0.625,1.625 -0.25,4.5 0.75,1.875 1.625,1.25 -0.5,1.875 -0.5,0.75 -1.375,1.25 -1,3 0,2.625 2,1.5 2,1.875 1.875,1.25 1,1.375 1.375,0 1.125,-0.875 1.5,-0.25 1.25,0.25 1.25,1.875 0.75,2 1.25,1.625 0.25,4.625 0.625,1.5 2.75,0.5 1.125,1.25 -0.125,5 -1.375,3 -1.25,2.25 -1.25,2 -0.625,1.125 -0.375,2.75 -2.625,1.375 -1.5,1 -0.75,-1 0.125,-2.25 -1.375,-1.375 -2.125,-0.375 -0.625,-0.875 -1.375,-2.625 -0.875,0.875 -3.125,0 -0.75,0.875 -3,-0.125 -1,1 -1.375,-0.25 -2.125,-2.875 -0.625,-1.875 -6.125,0.125 -0.625,1 0.25,4.125 1.5,0.625 1,1.375 1.875,0.375 3.75,0.5 1.875,2.125 1.25,2 0.75,1.625 2.25,0 8.125,0 1.375,-0.625 1.625,-0.75 0.375,1.125 0,2.125 -0.875,1.625 0,1.875 -0.75,2 -0.375,2 -1,0.875 -1.5,-1 -4.25,-0.5 -1,0.875 -1.625,1.875 -2.25,0.5 -2.25,0.25 -1.5,1.5 0,2.75 1.375,1.875 0.25,2.25 -1.75,1.75 -1.375,1.25 0.25,6.5 -1.125,1.25 -2.25,1.125 -1.25,2.75 -0.75,2.375 0,1.25 0.875,1.125 1.375,1.5 0.125,2.125 -0.25,3.875 -0.875,3.125 -1,2.625 -1.25,0.25 0,10.75 -0.75,0.75 -1.75,1.375 -0.875,2.5 -1.375,2.75 -0.5,1.5 -0.625,1.125 -1.75,0.5 -0.125,2.5 -0.125,3.125 -1.625,1.375 -3.125,-0.5 -3.5,-1.375 -3.5,-0.875 -2.125,1.125 -0.375,1.75 -1,1.375 -2.125,-0.375 -2,-0.625 -2.875,-0.625 -1.875,1.75 -0.125,2.25 -1,1.625 -1,1 -0.375,2.25 0.625,2.25 0.5,1.75 0.125,1.625 -1.5,1.625 -3.75,3.25 -2,1 -4,-2.125 -5.125,-2.875 -1.375,-1.25 -1.125,-1.375 1,-1.5 0.5,-8.25 -0.125,-1.5 -2.125,-1.25 -0.375,-2.375 -1.875,-1.375 -1.375,-1 0.875,-1.375 0.125,-1.375 1.375,-1.25 1.5,0.125 0.75,-1.5 0,-8.75 -1.125,-4 -1,-3.75 -1,-2.375 -2.125,-3.875 -0.75,-2.625 -0.125,-6.625 -0.875,-2 -1.75,-2.75 -0.875,-3.875 -0.125,-2.875 0.625,-3 0,-4.875 0.125,-2.5 -1,-0.75 -4.125,0.25 -0.875,-0.5 -0.25,-4.875 -1,-1.125 -1.125,-1.5 2.25,-1.875 0,-2.875 -1,-1.5 0.625,-1 1.5,-1 4.625,4 4,-0.25 2.625,-11.125 -0.125,-6.375 3.08735,-7.12465 L 575,297.125 l 1.5,-6 0.25,-6.25 -1.25,-2.125 7,-10.75 -0.125,-8 -2.25,-7 -0.75,-3.75 0.375,-9 0.75,-3.5 3,-18.75 0.625,-6.75 1.125,-3.5 3.25,-3.375 4.375,-2.125 8.125,-1.875 2.25,-2.5 1.375,-3.375 0.625,-4.125 1.5,-3.75 1.875,-3.75 4.625,-5.5 1.125,-2.625 2.25,-13.25 0.25,-3.625 3.625,-4.875 3,-3.25 2.75,-1.75 7.25,-10.25 2,-5.625 0.25,-9.5 1.25,-3.25 3.125,-6 0.25,-9.875 2.625,-1.875 3.5,-0.875 2.75,0.25 1.875,0.625 2.75,-0.875 1.5,-3.5 0.375,-4.125001 3.125,-1.875 3,-0.75 8.375,0.125 2.75,-1.25 1.875,-2.875 0.875,-2.5 2.875,-3.375 1.75,1 2.5,2.5 6,4.75 6.875,6.625 3.125,1.500001 4.875,3.125 1.25,2.5 0.875,3.125 3.875,7.875 0.18378,5.59996 1.24722,14.64325 0.819,6.75679 z M 625.875,348 l 0.5,-1.375 0,-1.75 -1.5,-1.25 -4.625,-0.375 -2.375,0.875 -0.5,1 -0.125,2.125 1.125,1 2.125,0.375 3.375,0 z",
              "m 655.5,373.75 2,-1.125 0,-1.375 -1.375,-0.875 -2.375,0.625 -1.5,1 -1.125,1.375 -0.5,2.375 -0.625,2.25 -0.625,1.375 -0.625,2.625 -0.125,3.875 0.625,2 0,2.25 0.625,0.875 0.5,-0.75 0.375,-1.875 0.875,-2.125 1.125,-2.375 2.625,-2.75 0.875,-1.875 -0.75,-2.125 z"
            ],
            "supply": {
              "x": 606,
              "y": 599
            },
            "drawUnit": {
              "x": 607,
              "y": 665
            },
            "label": ""
          }, {
            "id": 65,
            "name": "Norway",
            "abbrev": "NOR",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [64, 57, 61],
              "sea": [63, 3, 2, 7, 6, 64]
            },
            "territory": null,
            "path": [
              "m 772.5,58.499997 -4.875,2e-6 -4.875,1.125 -6.375,-0.375 -1.125,-1.5 -1.125,-2.5 0.5,-3.625 3.625,-0.625 4.375,-0.5 1.875,-1.625 1,-3.25 1.125,-3.5 -1.125,-1.625 -3.5,-1.125 -1,-1.875 -3.375,-0.125 -4.125,0 -0.875,-1.125 -1.25,-1.625 -2.5,-0.25 -1.375,1.625 -1.25,1.625 -2.875,0 -0.875,-1.5 -0.125,-2.5 1.125,-1.125 0,-2.125 -1,-1.75 -4.875,0.125 -2.625,1.5 -0.875,2.875 -0.375,7.375 -0.625,5 -1.5,0.75 -2.25,-1.125 -0.75,-4.75 -1.25,-4.625 -1.5,-1.5 -2.125,3.25 -1.875,3.625 -0.875,6.5 -0.5,5.875 -0.875,2.625 -1.375,1.125 -3.625,0.125 -1.375,-1.5 0.25,-5.75 1,-3.625 1.125,-2.625 0.625,-2.25 0.25,-1.875 -1.25,-2.125 -2.25,-0.5 -0.75,-1.125 -0.75,-1.625 -1.375,1.75 -0.5,2.375 -1,4 -0.25,5 -1,1.375 -3.25,0.875 -2.625,1.75 -1.125,2.25 -0.125,4 -0.75,0.75 -5.375,0.125 -1.125,-1.75 -0.75,-4.125 -1.5,-0.375 -6,0.375 -0.25,2.875 1,3 -0.25,2.375 -1.875,0.75 -1.625,-1 -0.875,-1.125 -0.25,2.75 -1.375,1.25 -3.5,-1.25 -2.125,-0.75 -2.25,0.375 0,4.875 -3.75,0.875 -0.875,1 0.875,3.125 -0.125,3.5 -2.125,1 -3.625,-1.125 -1.625,-2.875 -2.625,1 -2.5,0 -0.875,-3.375 -1.25,-1.75 -2.625,0.375 -1.625,2.625 0.75,2.5 -2.75,2.625 0,2 0.625,1.625 0.125,1.875 -0.875,0.625 -2.625,0 -0.5,-1 -1.25,1.5 -0.875,2.625 -1.25,0.875 -2.875,0 -3.5,0.875 -1.125,1.5 -0.5,2.5 -0.5,2.5 0.25,1.5 2,-1 2,-0.875 0.75,-3 2.625,-2.25 3.375,0.125 0,3.875 8.625,0.625 0.25,5.125 -10.875,0.625 -1.125,1.375 -1,2.000001 -5.75,0.375 -1,1.25 -0.375,2.375 1.375,1.625 0,2.625 -1,1 -3,0.375 -1.5,-1.25 -2.25,0 -0.875,2.5 0.5,1.5 2.75,0.125 1.5,1.625 -0.375,3.25 -1.75,1.25 -1.75,-1.125 -1.125,0 -3.5,3.5 0.125,1.375 2,-0.125 1.5,-0.75 3.25,0 1.375,1.375 0,3.625 -3.25,1.5 -7.75,1.75 -5.75,0.625 -0.5,5.625 -2,1.75 -3.625,0 -0.75,1.5 -1.75,0.25 -0.75,3.125 -4.375,0.875 4.5,0 1.625,1.375 0.875,1.25 5.375,0.125 1.375,1.625 -0.625,4.25 -1.875,1.25 -5.875,0.125 -1.125,1.25 0.5,1.5 0.875,1.375 -0.625,4.75 -4,-0.125 -3.625,-1 -2,0.75 -0.125,1.75 -1.25,2 -3.25,1.375 3.75,0.375 1,1.125 -0.25,3.25 -0.5,1.375 -1.875,2 -3.75,1.125 -3,1 -4.375,0.375 -1.75,3.125 -0.875,2.25 2.375,0.625 1.25,2.5 -0.625,6 -1.25,3.25 -2.875,0.25 -1.25,-1.125 -1.5,-1.875 0,-2.5 -1.125,-0.875 -2.625,2.75 -3.5,4.625 -2.625,1.125 -1.875,3.125 -3,2.125 -2.875,1 -1.375,1.75 1.25,2.125 -0.125,1 3,0.875 0.875,-1.25 2.125,-1.125 0.75,-2.25 2.125,-1 3,0.125 0.375,-2 1.75,-1 4.875,0.125 1.375,1.875 0,5.25 -2.875,2.625 -2.375,2 -1.25,3.25 -6.5,0.875 -8.25,0.125 -1.125,-0.75 0.375,-4.875 -1.875,-1.25 -2,-0.25 -0.375,-3.625 -0.625,0.125 -1,1.25 0,3 0.75,0.875 -0.25,1.75 -2.75,0.625 -1.75,0.75 -3,1.625 -0.25,6.875 -1.5,1 -3.125,-1.125 -2.75,-2.125 -2.125,-2.75 -3,0.125 -1.75,2.5 -3.625,0.375 -0.875,1.5 1,2 0.75,2.5 1.125,2.125 -1,1.875 -2.875,0 -1.75,-1.125 -1.625,-0.25 -1,-0.875 0,-3.875 -0.875,0.375 -0.875,2.375 -0.25,5.75 -1,1.125 -5.375,0.375 -0.625,4.375 -1.5,0.75 -5.125,-0.875 -2.5,-1.375 -2.125,-1.625 -2.125,-0.625 -0.875,0.75 0.375,3.375 0.5,8 -0.375,3 -2.125,1.75 1,2 0,3.375 1.25,2 2.75,-1.125 3.625,0 2,1.25 1.875,1.75 0.25,2.375 1,-2.75 0.25,-1.625 5.125,0 7.625,-0.125 1.75,2 1.25,3.875 0.125,2.75 -0.375,1.625 -10.5,0 -1.375,-1.875 -4.125,0.125 -1,-2.375 -1.25,2.25 -2.75,-0.375 -2.875,-0.375 -8.375,-0.125 -1.125,0.75 0.875,1.5 0,2.875 1.125,0.625 5.625,0 1.25,1.5 0,6.5 0.5,1.125 1.625,-1.125 2.5,0 0.5,-2.125 1.625,-0.875 1.75,0.25 0.75,0.625 3.5,0.25 2.375,1.5 0,4.5 -1,2.125 -1.25,0.875 -2.625,0.25 -1.375,1.375 0.125,1.375 -1.625,1.125 -10.125,0.125 -0.25,7.75 -1.25,1 -4.875,-0.125 -0.875,-1.125 -1.375,-0.75 -2.5,0.125 -0.125,7.875 1.5,2 3.125,0.125 1.25,0.75 2.25,0.625 3,-0.625 1.5,0.875 0,3.125 -1.5,2.375 -3.25,3.875 -2,1.125 -1.625,-0.125 -1.25,-1.25 -1.875,0.25 -3.25,7.75 0.25,2.125 2.25,3.125 1.25,1.625 2.625,0.25 1.25,1.75 2.375,1 4.125,4.75 1.875,1.75 0.5,2 2,0.875 3.5,0.25 2,1 2.25,0.125 2.5,-2.5 2.125,-1.625 3.375,-0.875 1.5,-0.625 1,-2.125 1.375,-1 2.75,-0.875 1.125,-1 3.375,-3.25 2.5,-2.875 1.75,-1.75 1.875,-0.375 0.625,-2.625 1.375,-1.875 1.625,-1 2.125,-0.25 2.125,1.25 1.25,0.875 0.875,-0.125 1.875,-1.75 2.5,-2.375 0.375,-2.125 -1.25,-1.5 0.25,-2.375 1,-1.75 0.375,-1.75 1.125,-3.125 3.75,0 1.25,1.5 -0.375,1.75 -0.375,3.5 -1,1.25 2.5,2.375 1.5,3.125 1.375,2.625 1.25,2.375 0.25,1.875 -2.625,0.5 4.625,4 4,-0.25 2.625,-11.125 -0.125,-6.375 3.25,-7.5 3.25,-9 1.75,-5.125 c 0,0 1.5,-5.125 1.5,-6 0,-0.875 0.25,-6.25 0.25,-6.25 l -1.25,-2.125 2.375,-3.375 4.625,-7.375 -0.125,-5.125 0,-2.875 -2.25,-7 -0.75,-3.75 0.375,-9 0.75,-3.5 1.125,-8 1.875,-10.75 0.625,-6.75 1.125,-3.5 3.25,-3.375 4.375,-2.125 4.125,-0.875 4,-1 2.25,-2.5 1.375,-3.375 0.625,-4.125 1.5,-3.75 1.875,-3.75 4.625,-5.5 1.125,-2.625 1,-6.375 1.25,-6.875 0.25,-3.625 3.625,-4.875 3,-3.25 2.75,-1.75 3.375,-4.625 3.875,-5.625 2,-5.625 0.25,-9.5 1.25,-3.25 2,-3.875 1.125,-2.125 0.25,-9.875 2.625,-1.875 3.5,-0.875 2.75,0.25 1.875,0.625 2.75,-0.875 1.5,-3.5 0.375,-4.125001 3.125,-1.875 3,-0.75 8.375,0.125 2.75,-1.25 1.875,-2.875 0.875,-2.5 2.875,-3.375 0,-2.125 1.25,-4.625 2,-4 3,-0.625 3,0.75 7.625,8.5 3.875,2.375 10,-0.25 11,-1.5 3.5,-1.125 1.625,-2.125 1.375,-2.625 -0.25,-12.75 0.5,-1.375 2.5,-2.25 4,-1.25 7.75,-0.625 6.74398,0.549766 2.29809,2.298098 2.2981,5.656854 2.65165,9.545941 2.54241,5.767657 7.59077,-12.568318 6.375,-5.625 z",
              "m 719.5,30.624999 2.25,-1.75 1.25,-2.25 -0.375,-1 -1.5,0.875 -2,2.625 -0.25,1.25 z",
              "m 701.5,44.499999 1,-1.5 -0.125,-2 -1,-1.875 -1.125,-2 -1.125,-1.25 -0.875,-0.875 -1.625,0.875 -2.875,1.75 -2,1.125 -2.625,1 -0.5,1.875 0,2.125 1,1.25 1.75,0.5 1.375,-1.125 1.125,-1.75 0.625,-1.125 1,-1.375 1.5,-0.625 1.75,0.125 1.75,1.125 0.125,2.625 z",
              "m 506.75,233.375 -0.375,1.75 -1.875,-0.75 -1.125,-1 z",
              "m 486.25,281.25 0.75,2.375 1.75,1.875 4.25,0.125 0.875,0.875 -1.375,1 0,1.875 -0.75,1.375 -1.625,-1.125 -4.25,0 -0.625,-3.125 0.25,-3.125 z"
            ],
            "supply": {
              "x": 551,
              "y": 664
            },
            "drawUnit": {
              "x": 549,
              "y": 701
            },
            "label": ""
          }, {
            "id": 66,
            "name": "Denmark",
            "abbrev": "DEN",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [64, 34],
              "sea": [64, 5, 34, 8, 7, 6]
            },
            "territory": null,
            "path": [
              "m 519.25,440.625 -4.125,1.875 -3.25,0.5 -4,0.5 -1.25,-3 -0.875,-2.25 -0.25,-3.5 -1.25,-2 -0.5,-1.25 0,-1.5 0.75,-2.25 1.25,-1.75 0.625,-2.25 1.25,-2.75 0,-2.125 -2.125,-1.875 -2.125,-0.625 -2,-1.375 -1.125,-1 -0.375,-2.875 0.5,-2.875 0.25,-2.875 0.75,-1.75 1.125,-2.625 1.125,-2.5 0.875,-2.375 0.125,-3 -1.25,-1 -0.875,-1.125 -0.625,-1.625 -0.25,-1.25 0.625,-0.625 1.125,0.875 1.375,0.25 1.75,0.875 1,-1.375 0,-2.875 -0.25,-2 -0.625,-1.75 0,-2.25 1.125,-0.75 1.75,-1 2.75,-1.5 2.25,-1.375 6.375,0 6,-0.25 3.875,-1.125 1.625,-2.5 3.5,-3.375 2,-1.625 1.75,-0.25 1,-1.375 0.125,-1.75 1.875,0.875 1,1.5 0,1.75 -1.5,1.625 -0.75,2.125 0.125,6.25 -0.875,1.25 -1.625,0.75 -1.25,1.375 -1,2.5 0,1.75 -0.75,0.5 -3,0 -0.375,1.25 0,2.75 0.125,2.25 0.75,1.5 2.125,0.25 2,0.875 2.875,0 1.5,0 0.75,-0.875 1.125,0.75 0.75,1.375 -0.875,1.25 -0.625,2.25 0,1.25 0.375,1.75 1,1.125 -0.625,0.875 -2,1.125 -1.25,0.5 -2.375,0.625 -0.75,-1.125 -1.125,-0.875 -1.75,-0.625 -2,0.5 -0.75,1.375 -0.5,2.25 0,1.625 -1.625,1.5 -1.875,0.25 -0.75,1.75 0.375,2.5 -0.625,1.75 -0.75,1.25 -0.75,1.375 1.5,1.625 1.75,0 2,-0.625 1.625,-0.5 2.875,-0.125 1.125,1.375 0.25,2.375 0.125,2.125 0.75,1.875 -0.25,2.5 -1,2 -1.625,0.875 -1.125,0.625 L 531,432 l -2.625,-0.875 -2.25,-0.75 -2.125,-0.875 -1.625,0.25 -0.875,1.625 -0.5,2.875 -0.625,2.75 -0.625,1.875 z M 509.75,387.25 l 3,0.875 3.75,0.75 3.625,-0.375 1.25,-2 1,-2.25 2.75,-1 2,-0.875 3.625,0.125 0.625,-1 0.375,-2.75 -2,-1.375 -4,0.125 -3.25,0.375 -1.25,1.375 -0.875,1.25 -7.125,0 -1.625,1 -2,1.375 z",
              "m 543.625,416.375 0,5 0.125,4.375 1.75,1.75 1.25,3.5 1.125,2.25 1.625,1.5 1.25,-0.125 0.75,-0.875 1.5,-0.875 2.25,-0.625 1.125,-1.625 0.125,-2.625 1,-1.875 0.875,-2.625 0.375,-1.5 1,-0.875 -0.375,-1.625 -1.625,0.125 -1.375,-1.25 0.125,-3.75 0.875,-1 -1.25,-1.375 -1.875,-0.5 -1.5,-1.375 -1.875,0.875 -2.75,0.75 -2.25,2.25 -0.875,0.625 z",
              "m 540.75,436.75 3.125,-0.125 1.375,1.125 1.375,1.625 0.5,1.875 1.625,1.5 0.75,-0.125 1.375,1.5 -0.5,1.25 -1.375,1.25 -4.875,0 -1.625,-1.25 0,-2.625 -1.125,-2 -1.25,-0.5 -0.75,-1 0.5,-1.125 z"
            ],
            "supply": {
              "x": 551,
              "y": 542
            },
            "drawUnit": {
              "x": 525,
              "y": 553
            },
            "label": ""
          }, {
            "id": 67,
            "name": "Holland",
            "abbrev": "HOL",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [34, 32, 68],
              "sea": [34, 8, 7, 68]
            },
            "territory": null,
            "path": "m 474.5,469.5 -3.21333,-0.005 -0.61872,-0.7071 -0.17677,-4.5962 -0.88389,-0.79549 -1.41421,-0.88389 -0.88389,1.32583 -0.97227,0.79549 -3.71231,0 -3.8007,-0.53033 -2.20971,-0.53033 -3.0052,0 -1.23744,2.47488 -1.14904,2.12132 -0.70711,1.76776 -0.17678,2.47488 0.17678,2.03293 0.70711,0.97227 1.59099,0.70711 1.41421,0.70711 1.23744,1.23743 0.79549,1.32583 0,2.29809 -0.70711,1.32583 -1.5026,1.5026 -3.09359,0.0884 -2.91681,0.88388 -0.70711,2.12132 -1.76777,2.03294 -2.74004,-0.53033 -2.12132,-0.44195 -0.44194,-2.82842 -0.0884,-4.24264 0.61872,-1.85616 0.97227,-2.38648 0,-1.85616 0.53033,-1.41421 0.26517,-1.23744 -1.23744,-1.5026 -1.85615,0.0884 -0.97228,1.5026 -1.32582,2.29809 -0.53033,2.47488 -1.23744,2.56326 -0.97227,1.5026 -0.17678,2.47488 -0.35355,2.38648 -2.2981,0.0884 -0.88388,0.70711 -0.17678,1.14905 -1.76776,1.76776 -1.41422,0.26517 -0.97227,1.32582 -1.23744,0.70711 1.23744,1.59099 0.35355,1.5026 0.61872,0.7955 1.23744,0.61872 1.06066,0.26516 0.97227,0 1.06066,0.53033 0.44194,1.5026 0,2.20971 -0.79549,1.59099 -1.23744,0.44194 -4.41942,-0.17677 -2.74004,-0.61872 -3.09359,0.0884 -2.74004,0.61871 -1.59099,1.41422 -1.76776,0.44194 -2.65165,0.0884 -1.50261,0.53033 0.44195,2.38648 1.5026,2.12132 3.09359,2.03294 1.5026,1.06066 2.91682,1.06066 3.27037,1.32582 1.85615,0.88388 2.20971,0.7955 3.09359,0.53033 2.82843,1.14905 1.76777,0.79549 1.76776,2.2981 0.44194,3.44715 0.70711,3.44714 0.70711,2.38649 1.41421,2.03293 2.65165,1.85615 L 444.25,537 l 1,-1 0.125,-2.875 L 446,531 l 1.375,-1.625 2.625,-6 1.75,-2.875 0.375,-2.75 1.125,-4.125 1.5,-3.75 1.625,-2.125 6.625,-2.25 1.75,-1.75 2.5,-0.375 0.25,-1.75 0.875,-2 0.625,-6.75 0.75,-1.875 2.75,-3.875 2,-8.5 z",
            "supply": {
              "x": 439,
              "y": 470
            },
            "drawUnit": {
              "x": 445,
              "y": 464
            },
            "label": ""
          }, {
            "id": 68,
            "name": "Belgium",
            "abbrev": "BEL",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [67, 32, 29, 27],
              "sea": [67, 7, 9, 27]
            },
            "territory": null,
            "path": "m 409.59159,506.08783 -1.67936,0.0883 -1.85616,1.14905 -2.74004,0.0884 -2.38648,0.26517 -1.06066,0.88388 -1.06066,1.32583 -2.74004,0.7071 -2.91682,0.17678 -3.71231,-0.26516 -3.35876,-0.26517 -2.74004,0.0884 -2.29809,0.70711 -1.32583,1.59099 -0.35355,2.38648 -0.26517,1.76777 -1.23743,2.47487 -0.53033,1.94455 -0.97228,1.23743 -1.14904,1.23744 -0.0884,2.03293 -0.88389,1.23744 2.82843,1.06066 3.27037,1.41421 3.8007,2.12132 3.0052,0.61872 2.12132,0.88388 1.85616,1.32583 2.65165,3.44715 2.74004,2.03293 3.27037,2.47487 2.47487,2.03293 2.82843,1.5026 1.67938,2.38649 3.09359,2.20971 2.03293,1.76777 3.09359,2.74003 3.35876,0.97228 2.56326,1.32582 4.15425,1.67938 3.18199,1.5026 4.06586,3.00521 3.09359,1.5026 1.67938,1.32582 2.47487,1.59099 0.94475,1.00385 2,-2.375 1.125,-3 1.75,-3 1,-4.25 0,-5 -0.625,-2.125 -1.375,-2.375 -0.25,-2.375 0.125,-7.375 -2.48505,-1.30208 -2.65165,-1.85615 -1.41421,-2.03293 -0.70711,-2.38649 -0.70711,-3.44714 -0.44194,-3.44715 -1.76776,-2.2981 -4.5962,-1.94454 -3.09359,-0.53033 -2.20971,-0.7955 -8.04334,-3.27036 -4.59619,-3.0936 -1.5026,-2.12132 z",
            "supply": {
              "x": 389,
              "y": 445
            },
            "drawUnit": {
              "x": 419,
              "y": 431
            },
            "label": ""
          }, {
            "id": 69,
            "name": "Portugal",
            "abbrev": "POR",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [70],
              "sea": [72, 11, 71]
            },
            "territory": null,
            "path": "m 115.875,807.25 -1.8125,0.75 -0.75,0.125 -1.5625,-0.9375 -2.5625,-1.6875 -5.0625,0.125 -1.4375,-1.375 -2,-1.3125 -2.875,-3.75 -2.25,-0.8125 -3.25,0.0625 -1.625,1.25 -1,0.6875 -1.625,0 -0.625,-1.1875 0.625,-1.5625 0.8125,-1.125 2.75,-2.3125 3.5625,-1.875 1.375,-1.75 1,-2.75 0.75,-1.6875 1.0625,-1.3125 0.1875,-2.1875 -1.25,-1.0625 -0.25,-1.6875 -0.625,-1.4375 1.5,-1.9375 1.5,-1.0625 0.875,-1 0.0625,-3.5 0.9375,-1.5625 1.6875,-0.8125 2,-0.9375 0.4375,-0.9375 -0.0625,-2.875 -0.375,-1.0625 -1.5625,-1.375 -2.5,-0.0625 -2.3125,0 -0.875,-0.6875 -1.3125,-1.375 0.6875,-0.8125 0.3125,-1.375 0.5,-2.375 -0.8125,-2.125 -2.125,-0.4375 -1.625,-0.5 0.4375,-1.3125 1.6875,-1.0625 1.9375,-0.625 0.9375,-2.1875 0.25,-3.3125 -0.0625,-3.625 0.625,-1.875 1.5625,-2.1875 4.5,0.125 1,-0.3125 1.6875,-2 2.1875,-2.625 2.5,-1.0625 1,-2 1.1875,-2.1875 0.75,-0.625 1.375,-1.1875 0.625,-2.4375 0.9375,-2.1875 1.1875,-1.9375 2.125,-1.875 0.9375,-0.5 1,-0.125 0.625,-0.8125 0.4375,-1.3125 1.375,-1 0.25,-1.5625 -0.125,-1.625 -0.875,-0.625 -2.75,-0.1875 -1.25,-1.1875 0.9375,-2.1875 1.0625,-1.125 0.9375,-2.5 5.0625,0.125 1.1875,-1 0,-2.1875 -0.8125,-2.5625 -0.3125,-5.6875 0.3125,-3.3125 0.5625,-1.1875 1.5625,-1.4375 1,-2.125 0.875,0.4375 2.8125,0 6.9375,-2.75 4.6875,-0.625 1.75,0.5 0.5625,5.8125 2.625,3.9375 2.8125,2.0625 6.6875,0.125 2.5625,-1 3.3125,-0.25 2.6875,1.5625 1.375,2.0625 5.3125,6.3125 1.6875,2.6875 0.5625,2.375 -0.75,2.375 -2.125,2.1875 -3.5625,0.625 -5.3125,2.125 -3.25,2.6875 L 161,722.8125 155.6875,736 l -1.1875,4.375 -6.25,3.9375 -5.875,-0.0625 -1.9375,2.3125 -0.0625,2.375 0.875,2.625 1.375,2.625 0.375,4.1875 0,3.5625 -0.8125,4.125 -5.8125,6.3125 0.0625,5.4375 0.9375,5.375 -1,4 -4,3.625 -4.75,2.625 -10.625,11.125 z",
            "supply": {
              "x": 110,
              "y": 211
            },
            "drawUnit": {
              "x": 130,
              "y": 225
            },
            "label": ""
          }, {
            "id": 70,
            "name": "Spain",
            "abbrev": "SPA",
            "type": "land",
            "naval": false,
            "moveTo": {
              "land": [69, 30, 31],
              "sea": []
            },
            "territory": [71, 72],
            "path": [
              "m 354.96762,734.3064 0.53238,2.4436 -1,1.8125 -0.875,3.125 -0.3125,2.625 -0.875,1.75 -2.1875,0.8125 -0.625,1.8125 -0.875,1.6875 -4.1875,0.375 -4.875,-0.1875 -1.25,0.9375 -1.0625,1.4375 -0.9375,2 -1.875,0.6875 -5.5625,0 -2.375,0.5625 -3,0 -1.0625,-0.5625 -1.5625,-1.6875 -1.1875,-0.3125 -2,0.4375 -0.9375,1.6875 -1.4375,0.8125 -2.5,0.1875 -1.9375,0.6875 -3.25,0.125 -2,0.625 -1.125,1.875 -2.75,2.1875 -2.0625,0.4375 -0.5,3.3125 -2.0625,0.5625 -3.5,0.125 -1.125,1.125 -0.5,3.8125 -1.375,1.3125 -3,2.625 -3.1875,2.8125 -1.5,2.6875 -1.1875,1.375 -2.75,0.5625 -0.75,2.125 -1.5625,1.4375 -1.625,0.3125 -0.9375,1.4375 -2.125,2.5625 -2.0625,0.875 -1.1875,1.75 -1.0625,1.875 -0.5,2.25 -0.125,3.9375 0.5625,2.1875 3.3125,2.0625 3,2.875 1.5,1.4375 0.625,1.1875 -0.3125,1 -0.375,2.0625 -0.0625,1.625 -1.0625,0.6875 -2.375,0.0625 -1.5,1.5 -3.625,0.625 -1.3125,1.6875 -4.25,0.3125 -0.875,0.9375 -1.0625,1.625 -1.625,1 -2.1875,0.625 -1.75,2.25 -2.125,2 -0.375,2.4375 0.875,1.5625 0.125,1.375 -1.3125,0.875 -2,0.5 -2.1875,-0.3125 -6,-0.3125 -5.9375,0.25 -2.4375,1.5 -1.5,2.5 -4.875,4.5625 -4.375,3 -3.125,1.125 -2,1.0625 -1.6875,0 -2.3125,-0.875 -5.1875,-0.3125 -2.25,-1.3125 -2.625,-1.5625 -2.625,-0.1875 -1.0625,-0.8125 -3.25,-1.4375 -2.4375,-1.75 -1.625,-0.6875 -2,0 -1.3125,-1 -5.875,-0.0625 -2.5625,1.625 -4.75,0.5 -5,0.125 -2.75,1 -1.6875,0 -1,-2.3125 -4.5,0.125 -4.9375,0.75 -1.875,2.4375 -2.75,1.6875 -2.5625,0.25 -2.4375,-2.1875 -2.5625,-1.5625 -1.875,-2.75 -1.8125,-3.0625 -0.625,-3.1875 -1.0625,-5.4375 -0.8125,-4 -0.375,-6.5 -0.625,-1.3125 -2,-0.375 -1.75,-1.0625 -1.625,-1.875 0.5,-0.625 0.9375,-1.875 -0.0625,-2.4375 -1.3125,-1 -7.9375,0.125 -4.9375,0.1875 -1.6875,0.5625 1.125,-2.6875 5.3125,-5.5 5.3125,-5.625 4.75,-2.625 4,-3.625 1,-4 -0.9375,-5.375 -0.0625,-5.4375 2.5625,-2.875 3.25,-3.4375 0.8125,-4.125 0,-3.5625 -0.375,-4.1875 -1.375,-2.625 -0.875,-2.625 0.0625,-2.375 1.9375,-2.3125 2.125,0.0625 3.75,0 3.875,-2.4375 2.375,-1.5 1.1875,-4.375 2.5,-6.125 2.8125,-7.0625 2.875,-5 2.3125,-3.5625 3.25,-2.6875 5.3125,-2.125 3.5625,-0.625 2.125,-2.1875 0.75,-2.375 -0.5625,-2.375 -1.6875,-2.6875 -5.3125,-6.3125 -1.375,-2.0625 -2.6875,-1.5625 -3.3125,0.25 -2.5625,1 -6.6875,-0.125 -2.8125,-2.0625 -2.625,-3.9375 -0.1875,-3.1875 -0.375,-2.625 -1.75,-0.5 -4.6875,0.625 -3.8125,1.5625 -3.125,1.1875 -2.8125,0 -0.875,-0.4375 0.5625,-1.625 0.9375,-1.125 0.125,-6.125 1.125,-1.9375 0.875,-0.5 2.25,-0.0625 0.6875,-1.5 0.875,-1.625 0.3125,-3.375 -1.125,-1.6875 L 138,661.5 l -1.25,-0.8125 1.3125,-1.625 1.875,-0.5 1.3125,-0.5 0.5,-2.375 -1.0625,-1.25 -4.9375,-0.1875 -1.3125,-1.125 0.1875,-2.6875 4.6875,-3.375 2.0625,-2.5 2.8125,-0.4375 1.375,1.0625 7.625,0.125 1.5,0.5 0.125,1.625 1.75,0.6875 2.1875,-0.5 0.75,-1.75 0.875,-2.0625 0.6875,-2.625 2.25,-0.75 6.625,0 3.1875,0.375 1.5,1.1875 0.3125,3.625 1.4375,3.4375 2.1875,2.4375 1.9375,1.125 6.8125,0.125 1.5625,1.5 4,0.375 1.3125,0.625 1.375,-0.0625 1.875,-1.75 1.875,0.9375 2.625,4.0625 1.875,2.75 6.3125,0.4375 1.4375,0.9375 2.25,1.125 1.625,0.75 1.5,0.125 1.625,2.125 3.0625,3.25 1.875,0.9375 1.4375,0.5 4.5,0.3125 2,-1.125 1.0625,-0.1875 1.125,1.5 1,1.8125 1.375,0.5625 2.125,0.4375 1.375,1.375 1.125,2 0.5625,1.3125 2.3125,0.8125 5.5625,0.4375 5.1875,-0.125 1.5625,1.4375 1.3125,1.125 4.6875,0.25 1.5,1.8125 1.75,0.5625 2.125,0.75 4.96021,-0.0376 0.26518,6.45235 1.5026,2.56326 3.39954,3.21693 10.21227,8.62711 5.39168,2.29809 6.81081,3.66736 5.82873,3.31532 2.91681,-0.17677 1.50261,-2.38649 3.18198,-1.06066 3.18198,0.35356 3.62392,1.94454 3.44716,2.29809 4.41942,3.44714 5.03813,2.82843 8.30851,5.65685 3.71231,1.59099 3.18198,1.06066 2.74004,1.23744 z",
              "m 304.5,825.3125 -0.0625,-3.25 -1,-0.75 -0.125,-2 1.3125,-1.375 1.0625,-0.4375 1,-0.0625 0.875,-0.9375 -0.0625,-1.5625 -1.125,-1.875 -0.1875,-1.25 -1,-0.625 -1.75,-0.75 -1.6875,1.25 -1.5,0.875 -1.4375,0.9375 -0.5,1.875 0.6875,0.9375 1.1875,1.3125 0.25,3.3125 1.0625,2.4375 1.4375,1.5625 z",
              "m 321.6875,805.375 0.75,-0.625 0.5,-1 2.8125,-0.25 2.25,-0.1875 1.875,-1.125 0.4375,-0.875 0.625,-2.1875 2.1875,-0.8125 2.25,-0.8125 2.125,-0.875 1.0625,1.5 0.1875,3.3125 0.8125,0.9375 4.0625,0.125 0.8125,1.125 0,1.3125 0.125,2.5 1.0625,1.9375 -0.25,1.3125 -1.375,1.125 -2.6875,0.8125 -2.0625,1.0625 -1.6875,0.8125 -1.4375,-0.125 -0.875,-1.375 -2.1875,-2.125 -0.9375,-2 -0.5625,-2.125 -1.125,-1.1875 -2.9375,-0.0625 -1.75,1.0625 -1.875,0 -1,-0.9375 z",
              "m 352.4375,803.6875 0,-3.5625 0.8125,-0.75 2.25,-0.875 1.3125,-0.9375 1.75,0.125 0.875,1.875 1.875,1.25 1.4375,1.4375 1.5,1.125 0.5,1.25 0.75,0.8125 -1.25,1.3125 -2.3125,-0.1875 -1.875,-1.25 -2.25,0.1875 -1.9375,-0.9375 -2.625,0.1875 z"
            ],
            "supply": {
              "x": 225,
              "y": 210
            },
            "drawUnit": {
              "x": 202,
              "y": 205
            },
            "label": ""
          }, {
            "id": 71,
            "name": "Spain (South Coast)",
            "abbrev": "SPA (SC)",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [31, 13, 12, 11, 69]
            },
            "territory": [70, 72],
            "path": 70,
            "supply": null,
            "drawUnit": {
              "x": 259,
              "y": 156
            },
            "label": ""
          }, {
            "id": 72,
            "name": "Spain (North Coast)",
            "abbrev": "SPA (NC)",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [30, 11, 69]
            },
            "territory": [70, 71],
            "path": 70,
            "supply": null,
            "drawUnit": {
              "x": 245,
              "y": 272
            },
            "label": ""
          }, {
            "id": 73,
            "name": "North Africa",
            "abbrev": "NAF",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [74],
              "sea": [11, 12, 74]
            },
            "territory": null,
            "path": "m 16.4375,965 0.125,-17.0625 1.0625,-4.25 1.3125,-1.375 1.625,-1.375 1,-2.375 1.4375,-1.25 1.4375,-1.75 L 24.75,934 26.625,932.5625 27.25,930.625 29,929 l 1,-1.5625 1.625,-2.125 2.75,-0.8125 1.0625,-0.75 1.4375,-2.25 2,-1.9375 L 40.5,919 l 1.875,-1.3125 1,-2.1875 0.875,-1 0.5625,-4.25 1,-1.6875 2.25,-1 0.75,-1.75 2.5,-1.125 2.875,-1.3125 3.0625,-1.25 2.4375,-0.8125 3,-1.125 0.8125,-1.25 1.0625,-2.3125 1.25,-0.375 0.875,0.125 1.9375,1.0625 7.4375,0.125 1.375,-0.1875 1.4375,-0.875 0.6875,0 0.6875,0.1875 1.125,0.625 4.3125,0.4375 3.4375,-0.25 1.0625,-1.0625 0.625,-1.1875 1.5625,-0.625 8.875,-0.25 1.5625,-0.75 2.4375,0 1.1875,-1.0625 1.125,-2.0625 1.3125,-1.1875 1.5,-0.875 1.625,-1 2.5,-2.4375 1,-2 1.8125,-2.25 2,-0.875 1.4375,-1.6875 0.125,-1.375 1.25,-0.25 1.375,-0.6875 1.0625,-2.0625 0.25,-2.875 0.9375,-1.1875 1.875,-0.9375 1.75,-1.125 0.625,-2.25 1.5,-2 1.75,-1.75 2.375,-1.6875 2.3125,-1.75 1.875,-1 2.0625,-1.1875 1.75,-1 1.4375,0.125 1.375,1.875 1.6875,2.5625 1,0.875 1.5625,0.4375 0.8125,1.5 1,3 0.9375,3.4375 0.8125,3.375 0.8125,1.1875 0.9375,0.25 1.75,1.25 2.1875,2.4375 0.4375,2.5625 1.5,0.625 5.25,0.0625 5.625,-0.0625 1.75,0.3125 1.0625,0.875 1.3125,1.625 2.8125,0.3125 2.375,0.8125 5.4375,0.0625 1.75,-0.3125 1.1875,-1.6875 1.875,-1 2.5,0.25 0.6875,1.125 0.4375,2.75 0.625,2.5 1.4375,1.3125 2,0.4375 1.1875,1.1875 1.4375,1.75 1.625,0.8125 5.9375,-0.25 1.4375,1.125 2.625,0.5 1.5,1.625 3.4375,0 3.5,-0.875 3.3125,-1.4375 2.25,-1.75 0.5625,-2.5 2.125,-2.75 2.25,-1.5625 1,-1.5625 0.875,-2 1.875,0.1875 1.8125,0.875 1.75,0.875 2.375,1.375 1.75,1.0625 2,0 1,-1.75 1.1875,-1.375 2.5,-0.875 1.125,0 1.125,1.125 -0.125,3 1.125,0.8125 3,0.125 2.8125,-1.0625 2.1875,-1 1.4375,-1.25 2.6875,-0.25 1.625,-0.75 3.625,-0.8125 2.0625,-1.5 1.625,-1.25 1.4375,-1.0625 2.625,-1.0625 2.25,-0.1875 2.3125,-0.125 2.5,-0.875 3.0625,-0.3125 1.75,1.1875 1.6875,1.25 2.8125,-0.25 1.125,-0.6875 4.8125,-0.25 2.375,0.5625 1.3125,1.6875 1.4375,1.6875 3.8125,0.3125 3.5,-0.0625 1.5625,1 1.0625,-0.125 1.75,-1.125 0.875,-0.3125 1,0.75 0.9375,0.8125 1.8125,0.0625 1.5,0.875 15.1875,-0.0625 2.0625,-1.25 2.3125,-0.8125 2.125,-1 1.75,-0.5625 1.375,0.8125 1.875,1.25 2.4375,0.6875 2.25,0.5625 1.5,1.0625 2.9375,0.3125 1.4375,1.3125 1.75,0.625 1.875,-0.625 1.125,0.5625 0.9375,2.5 1.125,1.5625 2.625,1.3125 2.625,0.625 4.625,0.25 2.125,-1.0625 1.6875,-1.5625 1.375,-0.25 1.6875,0.5625 2.8125,0.9375 2.75,-0.0625 2.0625,-1.6875 2.125,-0.5 1,-2.0625 1.8125,-0.6875 1.875,0.4375 1.3125,1.75 0.4375,3.0625 1.25,1.1875 4.75,-0.3125 1.375,-1 1.625,-1 3.1875,-0.0625 0.875,-0.5625 2.1875,1.5625 2.125,0.0625 2.5,1.625 1.125,2.3125 1.375,0.875 4.4375,0.125 3.125,0.0625 1.125,0.3125 -0.125,4.25 -1.25,2.875 -2.0625,3.625 -3.6875,3.125 -1.5625,4 -1.4375,3.4375 0.25,2.9375 0.8125,3.9375 1.4375,7 L 426,938 l -0.1875,8.25 -0.625,7.4375 -0.5,6.875 L 424.625,965 z",
            "supply": null,
            "drawUnit": {
              "x": 242,
              "y": 37
            },
            "label": ""
          }, {
            "id": 74,
            "name": "Tunisia",
            "abbrev": "TUN",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [73],
              "sea": [73, 12, 14, 15]
            },
            "territory": null,
            "path": "m 433,896.75 1.6875,-0.0625 1.5,0.625 2.4375,0.375 1.8125,0.625 1.9375,0.375 1.4375,-1.0625 1.4375,-2.3125 1.5625,-0.875 1.1875,-0.3125 1.6875,-1.375 2.1875,-0.375 2.875,0.3125 2.1875,0.875 L 460,893.5 l 1.625,-1.625 1.875,-0.4375 2.8125,0.5 0.8125,1.3125 1.125,1.1875 3.25,0.125 0.8125,1 -0.5625,1.5625 -0.4375,3.125 -0.9375,1.875 0,2.875 1.1875,1.125 2.75,-0.375 2.75,-0.875 2.875,-1.5625 3.5,-2.125 2.375,-0.5625 1.8125,-0.3125 1.5,-0.125 0.5,1.0625 0.6875,1.9375 -0.1875,2.125 -2.5,2.375 -2.875,2.5625 -2.5,2.375 -1.4375,0.8125 -2.9375,1.0625 -2.125,1.0625 -1.125,2.9375 -0.4375,4.9375 0.4375,3.8125 1.375,2 3.25,3.5625 2.0625,0.9375 1.5625,0.125 0.875,1.4375 1.1875,1.5 0.875,2.5625 1.3125,2.0625 1.5,1.25 0.6875,2.4375 1.1875,2.5625 0.25,3.5 0.6875,1.9375 0.625,2.125 1.3125,1.75 0.875,1.5625 1,2.625 0.25,3.8125 -70.875,0 0.11257,-5.1259 1.02799,-13.06554 L 426,938 425.375,931.9375 423.125,921 l -0.25,-2.9375 3,-7.4375 3.6875,-3.125 2.0625,-3.625 1.25,-2.875 z",
            "supply": {
              "x": 460,
              "y": 54
            },
            "drawUnit": {
              "x": 453,
              "y": 33
            },
            "label": ""
          }, {
            "id": 75,
            "name": "Albania",
            "abbrev": "ALB",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [47, 77, 76],
              "sea": [76, 15, 16, 47]
            },
            "territory": null,
            "path": "m 674.40306,771.07596 -4.86133,0.61872 -2.2097,-0.53033 -3.8007,-2.82842 -2.2981,-1.14905 -1.5026,0.44194 -1.23744,1.32582 -1.06066,2.47488 -0.44194,2.12132 -0.88388,1.41421 -1.59099,1.32583 1.67937,2.29809 1.59099,0.61872 0.7955,1.76777 2.20971,0.70711 0.79549,0.79549 0.70711,1.5026 1.23744,0.7955 0.17677,1.59099 0.7955,0.88388 0.35355,1.59099 0.70711,0.88389 0,2.82842 -0.35355,2.91682 -0.70711,1.59099 -0.26517,2.47487 -0.53033,1.59099 -0.26516,8.13173 -0.44194,2.2981 -0.35356,4.24264 -0.17677,4.5078 -0.7955,1.94455 -0.17677,1.5026 0.97227,1.23744 1.23743,0.7071 1.85616,0.44195 2.20971,1.5026 1.5026,2.20971 1.23744,2.29809 2.12132,2.82843 0.7071,2.38649 1.41422,2.47487 0.97227,0.97227 2.12132,-1.5026 1.76777,-2.12132 2.47487,-2.65165 2.56326,-2.91682 1.76777,-2.74004 1.5026,-3.18198 1.06066,-2.56326 1.5026,-3.71231 1.06066,-2.91681 0.26515,-5.83364 -6.0988,-2.2097 -3.35875,-4.06587 -0.7955,-2.20971 -0.17678,-3.62392 0.17678,-8.22012 -1.14906,-12.72792 -1.67938,-1.59099 -0.97227,-2.03293 -0.61872,-2.03293 z",
            "supply": null,
            "drawUnit": {
              "x": 672,
              "y": 160
            },
            "label": ""
          }, {
            "id": 76,
            "name": "Greece",
            "abbrev": "GRE",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [75, 77, 78],
              "sea": [75, 15, 17, 79]
            },
            "territory": null,
            "path": [
              "m 764.91274,807.40358 -4.59617,0.0884 -2.2981,-0.44194 -1.14905,-0.61872 -1.85615,1.32583 -0.61872,0.88388 -4.15425,0.17678 -2.03294,0.61872 -0.97227,1.23743 1.06066,1.67938 0.26517,2.91682 0.17677,1.32582 1.23744,1.06066 1.23744,0.70711 2.2981,0.26517 1.67937,1.06066 1.32583,1.32582 1.06066,1.41421 -0.0884,1.94455 -0.97227,1.06066 -1.76777,0.0884 -1.23743,-1.06066 -2.20971,0.0884 -0.88389,1.23743 -0.17677,2.74004 -2.74004,0.26517 -3.00521,-0.44195 -0.26516,2.47488 -0.97227,0.61872 -0.88389,-0.0884 -1.14905,-1.5026 -0.79549,-1.59099 -1.23744,-1.67938 -1.32582,-0.97227 -3.09359,-0.35356 -1.85616,-0.88388 -0.7955,-1.5026 0,-2.56327 -0.61871,-1.41421 -0.26517,-2.38648 -1.14905,-1.06066 -3.88908,0 -2.12132,0.44194 -0.7955,1.67938 -0.53033,1.85615 -0.17678,2.20971 0.17678,1.06066 1.06066,1.59099 0.53033,1.23744 1.14905,2.12132 0.70711,2.12132 0.53033,1.94454 0.17677,2.74004 0.35356,2.12132 1.67937,2.38649 2.38649,2.56326 2.91682,1.32582 3.18198,1.06066 0.88388,1.94455 0.44194,2.03293 -1.5026,2.12132 -1.41421,1.14905 -1.85616,-0.61872 -1.14905,-2.12132 -0.97227,-2.03293 -3.18198,0 -2.03293,0.44194 -0.53033,1.94454 0.88388,1.94455 1.5026,1.59099 0,2.12132 -0.88388,1.5026 -2.2981,0.44194 -1.59099,0.70711 -0.26516,1.85615 0.79549,1.32583 1.59099,1.23743 1.76777,0.0884 1.94454,0.88389 2.12132,1.14905 0.70711,1.06066 3.62392,-0.17678 0.88389,1.23744 1.23743,0.79549 1.23744,0.7955 2.2981,0.35355 2.12132,0.70711 0.7071,1.67937 0.61872,1.23744 1.5026,1.5026 2.20971,1.50261 1.41422,1.59099 1.5026,2.74003 1.41421,2.56327 0.44194,3.0052 -0.0884,3.27037 -1.14905,0.61872 -1.06066,-1.67938 -0.70711,-1.67938 -2.47487,-1.32583 -1.94455,-1.06066 -2.03293,-0.0884 -1.5026,-0.88389 -2.74004,0.0884 -1.5026,1.14905 -0.0884,3.09359 -0.17678,1.5026 -0.53033,0.97228 0.88389,1.32582 1.14904,0 0.7955,1.06066 0.70711,1.23744 -1.23744,1.5026 -1.67938,0.44194 -0.88388,1.06066 0.17677,1.94455 -1.14904,1.59099 -1.41422,0.17677 -0.97227,-1.06066 -1.14905,0 -1.06066,1.23744 -0.26516,4.06586 0.88388,3.35876 1.14905,1.32583 1.06066,2.56326 1.32582,2.29809 0.61872,2.47488 1.06066,1.76777 0,1.23743 -0.97227,0.7955 -2.12132,-0.0884 -1.06066,-1.23744 -2.12132,-0.79549 -2.56326,-1.06066 -1.85616,0.26516 -0.44194,1.76777 -0.17678,3.8007 -1.85615,0.7071 -0.97227,1.67938 -0.88389,-1.23743 -0.17677,-7.42462 -1.06066,-1.67938 -1.06066,0 -0.97228,-0.88389 -0.88388,-4.24264 -1.32582,-1.14905 -2.91682,0.61872 -1.06066,1.23744 -0.44194,1.06066 -0.17678,5.12652 -0.88388,0.7955 -2.91682,-0.35355 -1.06066,-0.97228 -1.23743,-1.76776 -0.0884,-2.38649 0.97227,-1.5026 0.44194,-2.2981 -1.14905,-1.5026 -0.0884,-1.5026 -1.06066,-2.03293 -0.88388,-3.27037 -0.97227,-2.82843 -1.14905,-2.91682 -0.97227,-1.59099 -2.12132,-0.61871 -2.74004,-0.61872 -1.06066,-1.59099 0.35355,-3.35876 1.41422,-1.76777 2.2097,-0.61872 1.32583,-0.88388 1.59099,-1.67938 0.44194,-1.41421 2.2981,0 2.2981,0.79549 1.14904,1.14905 3.44715,0 2.20971,-0.53033 1.14905,0.61872 1.23743,1.5026 1.94455,1.76777 4.5078,-0.26517 1.59099,0.7955 6.98268,0.0884 0.97228,-0.7955 -0.0884,-3.0052 -0.70711,-1.76777 -1.67938,-1.59099 -2.65165,0.17678 -1.5026,-1.06066 -2.65165,-0.70711 -2.2981,-1.14905 -8.04334,0 -0.53033,-0.79549 -0.88388,-1.14905 -11.04855,0 -1.23743,-1.06066 -2.56326,0 -1.41422,-2.03293 -1.85615,-2.12132 -2.12132,-1.94455 -2.82843,0.17678 -1.06066,-1.06066 0,-1.41421 1.41421,-0.53033 1.94455,-0.17678 0.35355,-1.23744 1.23744,-1.76776 -1.23744,-2.03294 -2.56326,-1.59099 -2.47488,-3.09359 -1.23743,-2.12132 -2.74004,-0.53033 -2.74004,-2.56326 -1.94454,-3.0052 -1.76777,-3.53554 2.12132,-1.5026 6.8059,-7.68979 1.76777,-2.74004 5.12652,-12.37436 0.26515,-5.83364 6.01041,-2.47487 4.33103,-0.97227 7.24784,0.0884 4.33103,-0.88389 10.69497,-5.21491 16.70542,-3.53554 8.22011,-4.06587 5.12653,-0.35355 4.06586,0.70711 2.82843,2.47487 1.32582,3.18198 z",
              "m 736.27494,857.51977 1.23743,1.76777 1.50261,0.26516 1.67937,1.06066 1.41422,1.23744 1.32582,0.97227 0.97228,0.97227 0.97227,1.59099 0.88388,0.88389 2.82843,0.26516 1.41421,0.88388 1.94454,0.35356 1.32583,2.03293 0.7955,2.12132 1.14904,2.38649 0.88389,0.88388 0.79549,1.76777 0.97227,1.32582 1.59099,1.32583 2.65165,0.0884 0.97228,-0.97227 -1.23744,-2.29809 -1.06066,-1.06066 -0.61872,-0.88389 -0.61872,-1.32582 -1.23743,-0.61872 -1.06066,-0.0884 -1.23744,-0.97227 -0.17678,-4.33103 -0.7071,-0.61872 -1.41422,-0.88388 -1.59099,-0.26517 -1.76777,-0.79549 -1.5026,-1.14905 -2.12132,-0.88389 -0.17677,-1.06066 -0.88389,-0.79549 -2.65165,-0.35355 -0.79549,-0.97228 -1.85616,-1.06066 -1.32582,-0.79549 z",
              "m 752.71517,937.59961 -1.06066,1.59099 -0.44194,3.00521 -1.94455,1.23743 -1.41421,0.35356 -0.44194,2.29809 0.79549,2.12132 0.35356,2.47488 0.61872,2.47487 2.38648,0.35355 2.91682,-0.26516 2.03293,-0.88388 3.27037,0.35355 1.67938,1.41421 1.32582,1.41422 2.47488,0.17677 1.23743,0.44195 1.23744,-0.61872 1.67938,0.0884 0.97227,0.7071 3.18198,0.26517 1.5026,0.7071 2.20971,0.53033 1.5026,0.53033 1.5026,0.88389 3.44715,0.26516 1.94454,-0.0884 1.14905,-1.14904 0,-1.23744 1.41422,-0.53033 2.03293,-0.17678 1.41421,-0.7071 7.42462,-0.0884 1.67938,-0.97228 1.59099,-1.14904 0.61872,-2.03294 0.88388,-0.88388 1.76777,-0.17678 0.97227,-0.7071 -0.26516,-1.23744 -3.62393,-0.0884 -1.14904,0.97227 -1.14905,1.41422 -4.5962,-0.0884 -1.32582,-1.06066 -2.03293,-0.70711 -2.03294,-1.59099 -2.38648,-0.61872 -2.03293,0.35356 -1.94455,0.7071 -3.71231,-0.26516 -2.20971,-1.06066 -2.47487,0 -1.14905,-0.70711 -2.12132,0 -2.03293,1.06066 -3.18198,-0.0884 -2.20971,0.88389 -3.0052,0.17677 -1.50261,-0.79549 -0.26516,-2.74004 -0.97227,-0.7955 -2.12132,0.17678 -2.65165,-0.26516 0,-3.27037 -0.88389,-1.67938 z",
              "m 818.29932,941.4887 0.35356,2.56326 -1.5026,1.59099 -1.76777,-0.17677 -0.0884,-1.06067 1.32583,-1.06066 0.88388,-0.88388 z",
              "m 825.63556,933.00342 -1.06066,1.76777 -0.17678,1.32582 1.5026,0.53033 1.67938,-0.53033 0.0884,-1.85616 z"
            ],
            "supply": {
              "x": 736,
              "y": 90
            },
            "drawUnit": {
              "x": 706,
              "y": 122
            },
            "label": ""
          }, {
            "id": 77,
            "name": "Serbia",
            "abbrev": "SER",
            "type": "land",
            "naval": false,
            "moveTo": {
              "land": [47, 48, 81, 78, 76, 75],
              "sea": []
            },
            "territory": null,
            "path": "m 715.94561,709.11575 -2.74003,0.6187 -2.38649,1.85616 -2.47487,0.79549 -3.97748,-1.14905 -3.97747,-2.91681 -1.85616,-0.88389 -8.48528,0.17678 -2.12132,-0.70711 -8.3085,-0.79549 -2.56327,-0.61872 -2.56326,0.88388 -3.09359,0.88389 -3.27037,-0.44194 -1.85615,-0.88389 -2.65165,-1.5026 -1.94455,0.97227 -0.88388,0.61872 -0.70711,2.74004 -1.06066,1.59099 -0.44194,2.20971 -0.26517,4.41942 1.41422,3.0052 0.97227,2.56326 0.7955,2.12132 0.53033,2.91682 -1.41422,2.38648 -2.12132,0.97227 -1.23744,1.76777 -0.0884,3.71231 -0.70711,1.85616 -2.12132,2.38648 -0.17678,2.2981 0.53033,2.91682 1.76777,1.85615 2.2981,3.27037 1.67937,3.09359 2.38649,2.65165 3.35876,3.53554 1.59099,2.12132 0.7071,1.94454 1.06066,1.06066 3.00521,0.53033 1.23744,1.41421 0.7071,2.47488 -0.0884,1.23743 1.41422,0.35356 1.32582,0.53033 0.61872,2.03293 0.97227,2.03293 1.67938,1.59099 0.0884,3.09359 0.53033,6.0988 0.53033,3.53553 -0.17678,8.22012 0.17678,3.62392 0.7955,2.20971 1.85615,2.12132 1.5026,1.94455 2.74004,1.06066 3.35876,1.14904 2.65165,-1.14904 3.35876,-1.32583 4.33103,-0.97227 7.24784,0.0884 4.33103,-0.88389 3.71231,-1.67937 4.06586,-2.12132 2.9168,-1.41422 -5.56847,-4.68458 -0.7071,-2.38649 0,-1.67937 1.14904,-1.591 6.27558,-2.12132 2.47487,-1.32582 0.70711,-1.41421 0.0884,-2.56327 -0.53033,-2.38648 -2.2981,-5.39169 -2.03293,-2.82843 -1.32583,-3.18198 -2.2981,-4.24264 -2.03293,-2.65165 -1.59099,-2.91682 -0.53033,-2.74003 0.7955,-1.67938 2.03293,-1.06066 2.12132,0.53033 1.85616,0.79549 2.74003,-0.35355 1.67938,-1.5026 0.0884,-1.85616 -6.0988,-5.92202 -2.12132,-2.56326 -0.35355,-2.03293 -0.79549,-2.74004 -1.67938,-2.20971 -0.97227,-2.03293 -0.26517,-1.67938 0.88388,-2.65165 2.03294,-1.67938 1.67937,-2.12132 2.65166,-3.97747 -3.00522,-3.35874 -1.67938,-2.74004 -1.06066,-3.53553 z",
            "supply": {
              "x": 679,
              "y": 247
            },
            "drawUnit": {
              "x": 696,
              "y": 206
            },
            "label": ""
          }, {
            "id": 78,
            "name": "Bulgaria",
            "abbrev": "BUL",
            "type": "land",
            "naval": false,
            "moveTo": {
              "land": [81, 77, 76, 50],
              "sea": []
            },
            "territory": [79, 80],
            "path": "M 825.63556,774.08117 825.25,771.25 821.125,766.5 818,763.375 l -1.875,-1.875 -0.25,-2.875 0.375,-3.125 1.625,-1.25 1.75,-2 0.25,-3.5 0.75,-3 0,-3.5 0,-2.375 1.125,-2.625 2.375,-1.75 2.5,-2.5 2.125,-2.5 -4.25,-3.375 -3.375,-1.25 -4.875,-1.25 -13.875,0 -2,-1.5 -3.25,-1 -3.375,0.375 -3.625,2.875 -3.4687,2.2139 -3.27037,1.06066 -1.85616,2.38648 -1.67938,1.50261 -3.35875,0.97227 -3.27037,0.79549 -5.56847,-0.35355 -21.12481,-0.88388 -3.88909,-2.65166 -2.74004,-2.56326 -2.91682,-0.61872 -2.56326,0.97228 -0.97227,1.94454 -2.03293,0.79549 -3.62392,-0.44194 -1.94455,-3.0052 -1.06066,-2.65165 -2.29809,-2.47487 -2.65166,3.97747 -1.67937,2.12132 -2.03294,1.67938 -0.88388,2.65165 0.26517,1.67938 0.97227,2.03293 1.67938,2.20971 0.79549,2.74004 0.35355,2.03293 2.12132,2.56326 2.65166,2.47488 1.85615,1.67937 1.59099,1.76777 -0.0884,1.85616 -1.67938,1.5026 -2.74003,0.35355 -1.85616,-0.79549 -2.12132,-0.53033 -2.03293,1.06066 -0.7955,1.67938 0.53033,2.74003 1.59099,2.91682 2.03293,2.65165 2.2981,4.24264 1.32583,3.18198 2.03293,2.82843 0.97227,2.65165 1.32583,2.74004 0.53033,2.38648 -0.0884,2.56327 -0.70711,1.41421 -2.47487,1.32582 -3.00521,0.88389 -3.27037,1.23743 -1.14904,1.591 0,1.67937 0.7071,2.38649 3.00521,2.47487 2.56326,2.20971 9.72272,-1.94454 6.98268,-1.59099 5.83363,-2.82843 2.38648,-1.23744 5.12653,-0.35355 4.06586,0.70711 2.82843,2.47487 1.32582,3.18198 0.97228,3.8007 1.23743,3.97748 3.27037,-0.53033 2.12132,-1.41422 2.74004,-1.41421 2.74004,-0.88388 1.41421,-0.0884 2.65165,0.79549 1.23744,1.5026 4.15425,0.44195 2.03293,0.0884 1.23744,0.70711 2.29809,0.70712 4.06586,-3.8007 2.47488,-7.86656 0,-4.5962 -2.12132,-4.94975 -1.85616,-2.03293 0.0884,-2.38648 3.71231,-2.47488 5.21491,-2.91681 6.0988,-1.67938 z",
            "supply": {
              "x": 739,
              "y": 200
            },
            "drawUnit": {
              "x": 774,
              "y": 201
            },
            "label": ""
          }, {
            "id": 79,
            "name": "Bulgaria (South Coast)",
            "abbrev": "BUL (SC)",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [76, 17, 50]
            },
            "territory": [78, 80],
            "path": 78,
            "supply": null,
            "drawUnit": {
              "x": 776,
              "y": 103
            },
            "label": ""
          }, {
            "id": 80,
            "name": "Bulgaria (East Coast)",
            "abbrev": "BUL (EC)",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": [50, 19, 81]
            },
            "territory": [78, 79],
            "path": 78,
            "supply": null,
            "drawUnit": {
              "x": 812,
              "y": 226
            },
            "label": ""
          }, {
            "id": 81,
            "name": "Rumania",
            "abbrev": "RUM",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [59, 58, 49, 48, 77, 78],
              "sea": [80, 19, 59]
            },
            "territory": null,
            "path": "m 828.75,730.5 1.8353,-2.204 c 0,0 0,-6.98267 0,-7.51301 0,-0.53033 -1.06066,-4.59619 -1.06066,-4.59619 l -0.35355,-7.51301 0.53033,-5.48008 1.76777,-1.76776 1.23743,-1.41422 -1.5026,-2.03293 -0.0884,-4.15425 1.14905,-3.62392 2.20971,-0.97228 3.27037,0.26517 0.88388,1.76777 0.35356,2.56326 0.7071,0.79549 3.27037,-0.26516 1.67938,-1.32583 1.76777,-3.62392 1.41421,-2.82843 -0.17677,-3.62392 -1.67938,-1.5026 -1.46488,-0.32518 -7.25,3.125 -4.5,0.75 -4.75,-0.75 -3.75,-1.625 -2.375,-2.125 -1,-4.25 -0.5,-8.875 -2.375,-3.5 -1.125,-4.625 2.875,-6.5 -0.375,-2.375 -1.875,-5.625 -7.875,-8.875 -6.375,-8.75 -3.125,-5.25 -2.75,-3.125 -3.125,-2.625 -3.25,-2 -3,-0.75 -2.75,0 -1.51052,2.31425 -1.14905,4.33103 -0.26516,5.48008 -0.97228,2.65165 -0.7071,3.18198 -3.62392,2.82842 -2.91682,2.91682 -3.97748,1.85615 -0.61871,1.06067 0.17677,5.21491 0.97227,5.3033 3.71232,2.03293 5.03813,2.2981 2.2981,1.67938 0.88388,3.8007 2.2981,2.91681 2.65165,0.70711 0.61872,2.20971 -0.44194,4.59619 -0.35356,5.65685 -0.35355,2.65165 -1.59099,2.2981 -6.27557,5.74524 -2.03294,1.23744 -6.18718,0.35355 -3.35876,-1.32582 -8.04334,-0.26517 -3.71231,0.53033 -4.15425,0.97228 -5.74524,0.0884 -8.48528,-0.44194 -4.86136,1.41422 -5.3033,3.71231 -1.76777,0.17677 -1.85616,1.85616 -3.0052,2.56326 -1.32583,3.27037 -0.97227,3.18198 -1.76776,2.65165 -0.61872,2.03293 0.79549,3.62393 1.06066,3.53553 1.67938,2.74004 3.00521,3.35876 2.29809,2.47487 1.06066,2.65165 1.94455,3.0052 3.62392,0.44194 2.03293,-0.79549 0.97227,-1.94454 2.56326,-0.97228 2.91682,0.61872 2.74004,2.56326 3.88909,2.65166 26.69328,1.23743 6.62912,-1.76776 3.53554,-3.88909 3.27037,-1.06066 3.4687,-2.2139 3.625,-2.875 3.375,-0.375 3.25,1 2,1.5 13.875,0 4.875,1.25 3.375,1.25 z",
            "supply": {
              "x": 798,
              "y": 256
            },
            "drawUnit": {
              "x": 799,
              "y": 272
            },
            "label": ""
          }, {
            "id": 82,
            "name": "Ireland",
            "abbrev": "IRE",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": []
            },
            "territory": null,
            "path": "m 280.4375,367.5625 6,0 2.3125,-0.0625 1.1875,-1.375 2.25,-1.6875 2.5625,-0.875 2.5625,0.3125 1.125,1.25 0.4375,3.6875 0.75,2.1875 0.0625,4.25 -1,2.1875 -0.25,5.4375 1.0625,1.8125 1.3125,1.5625 -0.375,2.9375 -1.9375,2.1875 -3.125,1.8125 -3,1.25 -5.9375,0.125 -1.6875,0.125 -0.25,2.1875 -1.125,1.625 1.3125,2.25 0,2.3125 0.625,1.8125 0.0625,2.75 -1.625,2.75 -0.4375,1.875 -2.1875,0.9375 -0.75,2.5625 -1,3.8125 -0.375,2.625 -0.9375,2.0625 -1.4375,0.125 -0.8125,0.875 -1,2.3125 -1.125,2.25 -2.125,2.6875 -1.3125,1.25 0.25,4 0,1.625 -1.25,1.25 -2.75,0 -1.5,-1.125 -1.6875,-1.25 -1.625,0.375 -1.4375,0.75 -1.1875,-1.125 -1.625,-2 -0.9375,-1.3125 -1.375,-0.625 -2.5,0.3125 -1.5625,2.25 -1.3125,1.3125 -9,0.375 -0.9375,0.75 -1.875,0.3125 -1.75,1.3125 -1.5,0.5625 -1.1875,0.0625 -1.125,0.9375 -2.6875,-0.0625 -1.5625,-1.0625 -1.1875,-1.5625 -1.375,-0.4375 -1.25,1.0625 -3.8125,0.0625 -2,-1.25 -1.25,-2.4375 0.25,-3.625 -1.5625,-0.625 -3.125,0 -1.75,0.875 -1.9375,0.875 0.25,-1.8125 0.125,-4.0625 -0.9375,-2 0.125,-1.375 1.6875,-0.5 1,-0.9375 -0.75,-1.25 -0.1875,-2.25 -1.0625,-1.9375 0,-1.25 2.3125,-0.625 3.875,0.3125 1.4375,-0.9375 1.5,-1.125 1.375,0.125 1.75,1.0625 7.0625,-0.3125 2.25,2 4.6875,0.1875 3.6875,-0.25 2,0.625 1.3125,-1.0625 0,-4.4375 -1.4375,-1 -3.0625,-1.125 -2.125,-0.9375 -5.625,0.1875 -2.375,0.8125 -3.125,-0.0625 -0.375,-1.125 0.1875,-1.25 1.4375,-0.875 1.3125,-0.75 0.75,-0.75 3.875,0.0625 1.4375,-1.3125 0.8125,-1.75 1.4375,-1.25 1.3125,0.25 1.25,1.125 4.1875,0 1.75,-1.1875 0.1875,-2.75 -1.25,-2 -2.75,-0.25 -1.8125,-1.0625 -3.25,-0.875 -1.5625,-1.3125 -2.3125,-1.1875 -0.125,-2 -0.75,-0.5625 -2.4375,-2.125 -1.3125,-1.25 -0.625,-1.625 1.25,-1.25 1.3125,-0.875 3.75,-0.125 1.625,-0.8125 2.125,-2.1875 0.3125,-2.25 0,-2.5 -1.1875,-3.375 -0.6875,-1.9375 0.4375,-1.75 3.125,-1.0625 2.5,-0.9375 2.1875,-0.0625 1.8125,1.5 1.5625,2.25 2.0625,1.4375 3.8125,0.125 1,0.8125 0.3125,1.5 1.8125,1.3125 1.875,0.75 2.75,-0.125 1.5625,-0.3125 3.625,-0.3125 1.9375,0.75 1.9375,-0.625 0.5625,-2.0625 -0.3125,-1.6875 -0.75,-1 -3.875,-0.75 -3.625,-0.8125 -1.75,-1.1875 -0.9375,-1.125 -1.125,-1.375 1.25,-1.375 1.9375,0 1.5625,0.5 2.5625,1.125 2.25,-0.5625 1.5625,-1.4375 1.1875,-1.5625 0,-3.1875 0.9375,-0.875 1.625,0.3125 2.5,-0.0625 1.4375,-0.75 1.6875,0.5625 2.5,0.1875 2.9375,-0.1875 1.1875,-2.0625 1.25,-0.875 1.5,1 1.3125,0.8125 -0.0625,2.125 -1.625,0.75 -0.9375,1.125 -1.125,0.375 -2.1875,0.375 -2.3125,0.6875 -0.625,0.9375 -0.125,3.8125 z",
            "supply": null,
            "drawUnit": {
              "x": 266,
              "y": 567
            },
            "label": ""
          }, {
            "id": 83,
            "name": "Iceland",
            "abbrev": "ICE",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": []
            },
            "territory": null,
            "path": [
              "m 263.5625,13.374998 -0.9375,2.125 -0.3125,1.125 -1.5,0.9375 0.0625,1.3125 1.3125,0.8125 0.5625,2.3125 -0.125,2.75 -1.5625,2.1875 -3.125,0.75 -2,-1.25 -0.8125,-3.25 0.6875,-4.375 -0.4375,-5.125 -0.875,-1.5625 -0.8125,1.125 -0.875,3.375 -1.5625,1.3125 -1.9375,-0.5 -3.3125,0.3125 -0.6875,1.375 -1.9375,0.5625 -1.25,-0.375 -1.25,-0.8125 -1.4375,0.6875 -1.25,1.375 -0.75,0.75 -0.8125,0.875 1.125,2.1875 1.3125,2 3.3125,2.875 3.625,0.5625 2.375,0.9375 4.0625,0.1875 1.4375,0.5625 1,2.6875 0.6875,3.5 -0.625,2.375 -2.0625,0.5625 -1.75,-0.1875 -0.25,-0.5 -1.1875,0.5625 0.5,1.8125 2.4375,0.5 1.375,0.1875 0.75,0.875 -0.75,2.3125 -1.8125,1.3125 -2.875,0.25 -2.6875,-1.0625 -2.875,-2.3125 -2.25,-3 -0.625,-1.6875 -2.25,-0.75 -3.8125,-0.375 -1.9375,-1.25 -1.0625,-0.75 -1.375,1.3125 -0.8125,1.625 0,1.5625 2.4375,0.625 1.8125,0.5 3.4375,1.875 1.4375,1.125 0.875,2.0625 2.3125,0.375 0.625,1.1875 -0.0625,2.375 -1,1.4375 -0.875,1.1875 0.8125,1.9375 0,2.375 -1.25,1.6875 -0.8125,1.5 0.1875,3.3125 -0.5,1.5 -3.3125,0.4375 -3.6875,-0.1875 -1.625,-1.3125 -1.125,-2.5 -1.6875,-0.1875 -1.375,0.6875 -0.875,1.9375 -1.3125,1.6875 -1.6875,2.1875 2.0625,1.5625 2.75,0.25 1.375,0.9375 2.75,0.1875 1,0.5625 0.9375,1.875 1.4375,0.9375 2.1875,0.375 0.875,1.0625 1.3125,1 1.5,1.5625 1.6875,0.625 0.375,1.3125 -0.375,7.6875 2.125,0.8125 2.4375,0.6875 2.0625,2.8125 1.3125,0.9375 0.5,1.5 1.5,1.4375 2.625,3.625002 2.1875,1.9375 5.125,-0.0625 1.625,-0.8125 4.6875,-0.1875 2.5,-1.0625 3.625,0.0625 1.9375,1.3125 2.375,-0.25 0.9375,-0.9375 2.3125,-0.25 1.5625,0.9375 0.625,1.0625 5.125,0.4375 2.125,-0.375 3,-1 6.8125,-0.4375 2.625,0.25 3.25,0.1875 1.9375,-2.312502 3.8125,-0.5 4.625,0.0625 1.8125,-0.375 1.1875,-1.1875 -0.0625,-2.75 -0.8125,-0.8125 -0.25,-0.75 0.5625,-0.9375 0.75,-0.25 0.9375,0 2.25,0.9375 2.625,0.0625 1,-0.875 -0.0625,-1.625 -1.0625,-1.0625 0,-2.1875 0.5,-1.9375 1.875,-0.75 1.75,-1.0625 0.1875,-1.4375 -0.875,-1.625 -1.75,-1.6875 -1.5625,-1.75 0.25,-2.0625 0.8125,-2.3125 0.1875,-2.3125 0.75,-1.1875 -0.75,-1.125 -1.625,-1.0625 0.3125,-1.8125 0.75,-2.4375 1.875,-1.25 1.125,-1.6875 0.1875,-1.25 -0.75,-0.75 -1.125,1 0.0625,1.1875 -1.875,0.375 -2.1875,-0.375 -1.375,-0.9375 -1,-2.125 0,-4.125 -1.3125,-1.875 -1.5,-0.25 -1.125,1.25 -2.3125,1.875 -1.5625,0.6875 -2.1875,-0.4375 -1.375,-0.875 -0.875,-1.875 -0.9375,-0.875 -0.9375,0.625 -1,1.25 -0.8125,0.75 -4.125,0.125 -1.5,-1.8125 -0.6875,-2.25 -0.75,-0.8125 -0.8125,1.125 -0.75,1.4375 -2.6875,0 -1.4375,-0.3125 -0.0625,-7.375 -1.0625,-0.75 -2.6875,0 -2.375,0.5 -0.8125,-1 -1.3125,1.125 -0.5625,0.875 -3.25,-0.25 -0.5625,-2.5 -0.3125,-2.8125 -0.125,-3 -1.25,-1.3125 -1.125,2.375 -2.1875,4.1875 -1.3125,2.25 -1.25,1 -1.3125,0.0625 -2.6875,-0.75 -2.6875,0.4375 -3.25,2.125 -2.625,0.75 -2.6875,-0.5625 -0.125,-3.1875 1.3125,-2 2,-2.6875 1.25,-3 1.6875,-1 1.375,-1.625 1.625,-1.5 0.9375,-2.5625 0.5,-1.6875 -0.0625,-3.875 -0.875,-2.125 -1.125,-2.625 0.1875,-2.25 -1.5,-1.375 z",
              "m 361.1875,185.4375 -0.875,1.4375 0.0625,6.625 -1.3125,1.25 -3.0625,-0.1875 -0.5625,-0.875 -1.0625,0.875 -0.1875,2.625 1,2.125 2.3125,2.1875 1.375,0.5 2.0625,-0.6875 1.6875,-2.125 -0.0625,-1.9375 -0.75,-0.875 -0.375,-1.75 0.3125,-0.75 1.1875,-0.4375 2.25,-0.0625 0.5625,-0.6875 -0.625,-0.875 -1.0625,-1.9375 -0.75,-2.5625 L 363,185.75 362.5625,184.875 361.875,185 z"
            ],
            "supply": null,
            "drawUnit": {
              "x": 284,
              "y": 896
            },
            "label": ""
          }, {
            "id": 84,
            "name": "Siberia",
            "abbrev": "SIB",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": []
            },
            "territory": null,
            "path": "M 1151.5773,-7.909263e-6 1004.8102,0.26539363 l -0.7962,4.51182627 -5.308,3.45022 -5.04263,2.3886141 -3.45022,6.369637 2.65402,2.919417 0,5.573432 -7.16584,-1.592409 0.5308,13.535479 -4.24642,5.838833 -1.06161,3.981024 3.18482,6.369637 1.32701,5.30803 2.38861,3.184819 1.06161,3.715622 2.12321,4.246424 -0.2654,2.919417 -4.51183,0 -2.65401,-4.246424 -7.96205,-7.696645 0,-7.165842 -3.18482,-2.123212 0,-6.90044 1.32701,-3.715622 3.45022,-0.530803 -1.85781,-9.023652 -1.06161,-3.715622 3.18482,-6.369637 -0.2654,-2.654015 -2.65402,-1.59241 0,-5.042629 -3.98102,-3.9810231 -2.65402,1.8578111 0.26541,12.473872 2.38861,3.45022 0.5308,5.573433 -2.12321,1.85781 -3.71562,-1.327007 -2.12321,-3.45022 -2.91942,0.796204 -3.45022,5.838834 -1.85781,3.981023 -0.2654,5.04263 -3.18482,5.042629 -7.16584,2.388614 0.2654,1.857811 3.18482,2.388614 0,3.184818 -2.65402,2.123212 -0.2654,5.838834 2.12321,11.146865 9.81986,14.862486 11.94307,6.635039 13.53548,0.530808 11.41226,5.30803 8.49283,0.2654 34.2368,23.62073 1.0616,31.58279 1.8578,8.75825 6.1043,9.81986 13.5355,16.98569 0,15.9241 11.943,17.7819 5.0427,13.80088 0.5308,21.76293 7.6966,14.33168 5.0426,18.57811 1.8578,11.41227 -1.0616,8.49284 -11.4122,26.80556 -2.9194,7.69664 1.8578,9.28906 1.0616,7.96205 -3.9811,12.47387 -11.4122,3.71562 -12.4739,29.19417 -1.327,23.35533 2.1232,14.59709 -4.7772,10.61606 -3.7156,1.06161 -2.9195,7.69664 -10.616,11.14687 0.7962,5.30803 7.4312,8.22745 1.0616,6.63503 12.4739,15.39329 9.0237,2.91942 3.7156,0.5308 3.7156,5.57344 3.7156,12.20847 0.7962,8.49285 5.3081,4.77722 8.7582,3.71563 3.981,-0.26541 16.4549,10.08526 5.0427,2.38862 8.2274,3.18482 8.7583,1.5924 11.6776,14.06629 4.7773,1.85781 6.9004,0 z",
            "supply": null,
            "drawUnit": {
              "x": 1112,
              "y": 751
            },
            "label": ""
          }, {
            "id": 85,
            "name": "Switzerland",
            "abbrev": "SWZ",
            "type": "land",
            "naval": false,
            "moveTo": {
              "land": [],
              "sea": []
            },
            "territory": null,
            "path": "m 441.14624,661.38604 0.0884,-5.3917 -0.79549,-4.5962 -1.14905,-1.41421 -4.15425,-0.53033 -3.71231,0.26516 -3.44715,1.76777 -2.20971,2.47487 -1.59099,1.67938 -1.32582,0.53033 -1.85616,-0.7071 -1.5026,-2.20971 0.35355,-1.59099 1.06066,-2.20971 2.20971,-2.65165 3.8007,-2.91682 4.15425,-3.71231 2.03293,-2.56326 2.65165,-4.06586 2.65166,-2.82843 1.23743,-1.85616 2.74004,-2.56326 1.67938,-1.5026 1.14905,-2.56326 1.59099,-3.18198 3.5719,-2.79801 3.625,2.375 5.125,0.25 2.375,-1.25 2.25,-0.75 9.375,1.75 4.25,0 2.125,0.875 2.83519,-0.01 2.2981,2.6516 3.71231,5.83363 3.8007,8.13173 6.62913,5.92202 3.88908,2.38648 2.47488,2.12132 0.53033,3.27037 -0.53033,3.71231 -2.38649,3.53554 -0.97227,2.38648 -3.27035,0.0884 -1.67938,-1.41421 -2.65165,0.35355 -2.29809,1.94454 -6.27558,1.23744 -2.38648,2.03293 -3.09359,2.12132 -3.00521,0.97227 -2.74004,-0.7071 -2.65165,-2.47488 -2.82842,-4.06586 -4.41942,-4.41942 -1.67938,-0.79549 -1.85616,1.5026 -3.44714,3.97748 -1.76777,1.06066 -2.38648,0.79549 -3.97748,0.53033 -3.44715,-0.61872 z",
            "supply": null,
            "drawUnit": {
              "x": 465,
              "y": 327
            },
            "label": ""
          }, {
            "id": 86,
            "name": "Corsica",
            "abbrev": "COR",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": []
            },
            "territory": null,
            "path": "m 471.90541,743.4104 -1.32583,0.97227 -0.35355,1.41422 -0.97227,1.23744 -1.23744,0.44194 -2.2981,0.17677 -1.85615,0.35356 -0.97227,0.53033 -2.38649,-0.0884 -1.23744,0.61872 -0.97227,0.35355 -0.97227,1.23744 -0.0884,6.45235 -0.7071,1.41421 -2.03294,1.76777 0.26517,1.23743 0.79549,1.41422 0.0884,5.74524 0.70711,1.5026 1.32582,0.61872 1.76777,1.23744 1.14905,1.94454 0.7955,2.47488 1.06066,0.88388 0.35355,1.41421 1.14905,0.97228 0.79549,0.17677 0.88389,-0.7071 0,-3.88909 -0.0884,-3.35876 0.88388,-2.91682 0.0884,-1.67937 1.5026,-1.14905 1.5026,-1.14905 0.88389,-0.7955 0.61872,-2.38648 0.88388,-1.5026 0.70711,-1.76777 0,-6.98268 0,-2.12132 1.14904,-1.06066 1.14905,-1.23744 0.0884,-1.94454 -1.5026,-1.59099 z",
            "supply": null,
            "drawUnit": {
              "x": 465,
              "y": 206
            },
            "label": ""
          }, {
            "id": 87,
            "name": "Sardinia",
            "abbrev": "SAR",
            "type": "land",
            "naval": true,
            "moveTo": {
              "land": [],
              "sea": []
            },
            "territory": null,
            "path": "m 465.98337,787.5162 2.12132,5.48008 1.5026,5.12652 1.85616,6.54074 0.53033,1.85615 0.44194,0.97227 -1.5026,1.32583 -1.76777,0.70711 -0.53033,2.29809 0,6.27558 -0.35355,3.09359 -0.88389,3.53553 0.0884,2.91682 -1.06066,1.5026 -0.97227,0.79549 -0.26517,1.67938 0.17678,3.35876 0.44194,2.38649 0.53033,1.14904 0,1.76777 -0.79549,0.97227 -3.00521,0.44194 -2.29809,0.97228 -1.85616,-0.0884 -0.88388,-1.76777 -2.82843,-0.17678 -1.67938,0.44195 -1.06066,1.94454 -0.35355,1.94454 -1.67938,1.23744 -0.97227,0.70711 -1.5026,0.7071 -1.94455,-1.14904 0.0884,-2.2981 -0.97227,-1.5026 0,-7.86657 -1.06066,-1.32582 -0.7955,-1.76777 0.7955,-2.12132 0.88388,-2.03293 1.14905,-2.82843 -1.06066,-2.20971 0,-2.47487 -0.88388,-2.38649 0.17677,-2.38648 0.61872,-1.76777 1.14905,-2.38648 0.97227,-2.82843 0.0884,-1.59099 -1.41421,-2.38649 -0.88389,-1.94454 -0.97227,-1.23744 -1.67938,-2.12132 0,-1.94454 1.41422,-2.56326 2.74004,0.0884 2.12132,0.79549 0.88388,0 1.5026,-0.79549 1.14905,-0.97228 1.32583,0 1.76776,-1.32582 0.26517,-1.06066 2.03293,-0.70711 1.85616,-1.23744 2.2097,-0.79549 2.20971,-0.44194 1.32583,-0.26517 z",
            "supply": null,
            "drawUnit": {
              "x": 458,
              "y": 149
            },
            "label": ""
          }],
          "defaultUnits": [{
            "armyId": 1,
            "country": "England",
            "location": 25,
            "type": "navy"
          }, {
            "armyId": 2,
            "country": "England",
            "location": 21,
            "type": "navy"
          }, {
            "armyId": 3,
            "country": "England",
            "location": 22,
            "type": "army"
          }, {
            "armyId": 4,
            "country": "France",
            "location": 28,
            "type": "army"
          }, {
            "armyId": 5,
            "country": "France",
            "location": 31,
            "type": "army"
          }, {
            "armyId": 6,
            "country": "France",
            "location": 26,
            "type": "navy"
          }, {
            "armyId": 7,
            "country": "Germany",
            "location": 33,
            "type": "army"
          }, {
            "armyId": 8,
            "country": "Germany",
            "location": 34,
            "type": "navy"
          }, {
            "armyId": 9,
            "country": "Germany",
            "location": 35,
            "type": "army"
          }, {
            "armyId": 10,
            "country": "Italy",
            "location": 39,
            "type": "army"
          }, {
            "armyId": 11,
            "country": "Italy",
            "location": 41,
            "type": "army"
          }, {
            "armyId": 12,
            "country": "Italy",
            "location": 43,
            "type": "fleet"
          }, {
            "armyId": 13,
            "country": "Austria",
            "location": 46,
            "type": "army"
          }, {
            "armyId": 14,
            "country": "Austria",
            "location": 48,
            "type": "army"
          }, {
            "armyId": 15,
            "country": "Austria",
            "location": 47,
            "type": "navy"
          }, {
            "armyId": 16,
            "country": "Turkey",
            "location": 51,
            "type": "navy"
          }, {
            "armyId": 17,
            "country": "Turkey",
            "location": 50,
            "type": "army"
          }, {
            "armyId": 18,
            "country": "Turkey",
            "location": 52,
            "type": "army"
          }, {
            "armyId": 19,
            "country": "Russia",
            "location": 60,
            "type": "army"
          }, {
            "armyId": 20,
            "country": "Russia",
            "location": 59,
            "type": "navy"
          }, {
            "armyId": 21,
            "country": "Russia",
            "location": 55,
            "type": "army"
          }, {
            "armyId": 22,
            "country": "Russia",
            "location": 62,
            "type": "navy"
          }]
        }


        _.each(provinces, function(doc) {
            _.each(oldProv.spaces, function(proc) {
                if (proc.abbrev == doc.abbreviation || proc.name == doc.name) {
                  doc.old = proc;
                  console.log(proc.abbrev);
                  }
                });

              Diplomacy.Map._collections.Provinces.insert(
                doc);
            });

          _.each(provinces, function(doc) {
            Diplomacy.Map.addProvincesToNation(doc.nation, [
              doc.abbreviation
            ]);
          });

          // Add Connections
          var connections = [{
            "from": ["ALB", "ADR"],
            "army": false,
            "fleet": true
          }, {
            "from": ["APU", "ADR"],
            "army": false,
            "fleet": true
          }, {
            "from": ["ION", "ADR"],
            "army": false,
            "fleet": true
          }, {
            "from": ["TRI", "ADR"],
            "army": false,
            "fleet": true
          }, {
            "from": ["VEN", "ADR"],
            "army": false,
            "fleet": true
          }, {
            "from": ["BUL-S", "AEG"],
            "army": false,
            "fleet": true
          }, {
            "from": ["CON", "AEG"],
            "army": false,
            "fleet": true
          }, {
            "from": ["EME", "AEG"],
            "army": false,
            "fleet": true
          }, {
            "from": ["GRE", "AEG"],
            "army": false,
            "fleet": true
          }, {
            "from": ["ION", "AEG"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SMY", "AEG"],
            "army": false,
            "fleet": true
          }, {
            "from": ["ADR", "ALB"],
            "army": false,
            "fleet": true
          }, {
            "from": ["GRE", "ALB"],
            "army": true,
            "fleet": true
          }, {
            "from": ["ION", "ALB"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SER", "ALB"],
            "army": true,
            "fleet": false
          }, {
            "from": ["TRI", "ALB"],
            "army": true,
            "fleet": true
          }, {
            "from": ["ARM", "ANK"],
            "army": true,
            "fleet": true
          }, {
            "from": ["BLA", "ANK"],
            "army": false,
            "fleet": true
          }, {
            "from": ["CON", "ANK"],
            "army": true,
            "fleet": true
          }, {
            "from": ["SMY", "ANK"],
            "army": true,
            "fleet": false
          }, {
            "from": ["ADR", "APU"],
            "army": false,
            "fleet": true
          }, {
            "from": ["ION", "APU"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NAP", "APU"],
            "army": true,
            "fleet": true
          }, {
            "from": ["ROM", "APU"],
            "army": true,
            "fleet": false
          }, {
            "from": ["VEN", "APU"],
            "army": true,
            "fleet": true
          }, {
            "from": ["ANK", "ARM"],
            "army": true,
            "fleet": true
          }, {
            "from": ["BLA", "ARM"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SEV", "ARM"],
            "army": true,
            "fleet": true
          }, {
            "from": ["SMY", "ARM"],
            "army": true,
            "fleet": false
          }, {
            "from": ["SYR", "ARM"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BER", "BAL"],
            "army": false,
            "fleet": true
          }, {
            "from": ["DEN", "BAL"],
            "army": false,
            "fleet": true
          }, {
            "from": ["GOB", "BAL"],
            "army": false,
            "fleet": true
          }, {
            "from": ["KIE", "BAL"],
            "army": false,
            "fleet": true
          }, {
            "from": ["LVN", "BAL"],
            "army": false,
            "fleet": true
          }, {
            "from": ["PRU", "BAL"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SWE", "BAL"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NWY", "BAR"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NWG", "BAR"],
            "army": false,
            "fleet": true
          }, {
            "from": ["STP-N", "BAR"],
            "army": false,
            "fleet": true
          }, {
            "from": ["BUR", "BEL"],
            "army": true,
            "fleet": false
          }, {
            "from": ["ECH", "BEL"],
            "army": false,
            "fleet": true
          }, {
            "from": ["HOL", "BEL"],
            "army": true,
            "fleet": true
          }, {
            "from": ["NTS", "BEL"],
            "army": false,
            "fleet": true
          }, {
            "from": ["PIC", "BEL"],
            "army": true,
            "fleet": true
          }, {
            "from": ["RUH", "BEL"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BAL", "BER"],
            "army": false,
            "fleet": true
          }, {
            "from": ["KIE", "BER"],
            "army": true,
            "fleet": true
          }, {
            "from": ["MUN", "BER"],
            "army": true,
            "fleet": false
          }, {
            "from": ["PRU", "BER"],
            "army": true,
            "fleet": true
          }, {
            "from": ["SIL", "BER"],
            "army": true,
            "fleet": false
          }, {
            "from": ["ANK", "BLA"],
            "army": false,
            "fleet": true
          }, {
            "from": ["ARM", "BLA"],
            "army": false,
            "fleet": true
          }, {
            "from": ["BUL-E", "BLA"],
            "army": false,
            "fleet": true
          }, {
            "from": ["CON", "BLA"],
            "army": false,
            "fleet": true
          }, {
            "from": ["RUM", "BLA"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SEV", "BLA"],
            "army": false,
            "fleet": true
          }, {
            "from": ["GAL", "BOH"],
            "army": true,
            "fleet": false
          }, {
            "from": ["MUN", "BOH"],
            "army": true,
            "fleet": false
          }, {
            "from": ["SIL", "BOH"],
            "army": true,
            "fleet": false
          }, {
            "from": ["TYR", "BOH"],
            "army": true,
            "fleet": false
          }, {
            "from": ["VIE", "BOH"],
            "army": true,
            "fleet": false
          }, {
            "from": ["ECH", "BRE"],
            "army": false,
            "fleet": true
          }, {
            "from": ["GAS", "BRE"],
            "army": true,
            "fleet": true
          }, {
            "from": ["MAO", "BRE"],
            "army": false,
            "fleet": true
          }, {
            "from": ["PAR", "BRE"],
            "army": true,
            "fleet": false
          }, {
            "from": ["PIC", "BRE"],
            "army": true,
            "fleet": true
          }, {
            "from": ["GAL", "BUD"],
            "army": true,
            "fleet": false
          }, {
            "from": ["RUM", "BUD"],
            "army": true,
            "fleet": false
          }, {
            "from": ["SER", "BUD"],
            "army": true,
            "fleet": false
          }, {
            "from": ["TRI", "BUD"],
            "army": true,
            "fleet": false
          }, {
            "from": ["VIE", "BUD"],
            "army": true,
            "fleet": false
          }, {
            "from": ["CON", "BUL"],
            "army": true,
            "fleet": false
          }, {
            "from": ["GRE", "BUL"],
            "army": true,
            "fleet": false
          }, {
            "from": ["RUM", "BUL"],
            "army": true,
            "fleet": false
          }, {
            "from": ["SER", "BUL"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BLA", "BUL-E"],
            "army": false,
            "fleet": true
          }, {
            "from": ["CON", "BUL-E"],
            "army": false,
            "fleet": true
          }, {
            "from": ["RUM", "BUL-E"],
            "army": false,
            "fleet": true
          }, {
            "from": ["AEG", "BUL-S"],
            "army": false,
            "fleet": true
          }, {
            "from": ["CON", "BUL-S"],
            "army": false,
            "fleet": true
          }, {
            "from": ["GRE", "BUL-S"],
            "army": false,
            "fleet": true
          }, {
            "from": ["BEL", "BUR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["GAS", "BUR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["MAR", "BUR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["MUN", "BUR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["PAR", "BUR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["PIC", "BUR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["RUH", "BUR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["EDI", "CLY"],
            "army": true,
            "fleet": true
          }, {
            "from": ["LVP", "CLY"],
            "army": true,
            "fleet": true
          }, {
            "from": ["NAO", "CLY"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NWG", "CLY"],
            "army": false,
            "fleet": true
          }, {
            "from": ["AEG", "CON"],
            "army": false,
            "fleet": true
          }, {
            "from": ["ANK", "CON"],
            "army": true,
            "fleet": true
          }, {
            "from": ["BLA", "CON"],
            "army": false,
            "fleet": true
          }, {
            "from": ["BUL-E", "CON"],
            "army": false,
            "fleet": true
          }, {
            "from": ["BUL", "CON"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BUL-S", "CON"],
            "army": true,
            "fleet": false
          }, {
            "from": ["SMY", "CON"],
            "army": true,
            "fleet": true
          }, {
            "from": ["BAL", "DEN"],
            "army": false,
            "fleet": true
          }, {
            "from": ["HEL", "DEN"],
            "army": false,
            "fleet": true
          }, {
            "from": ["KIE", "DEN"],
            "army": true,
            "fleet": true
          }, {
            "from": ["NTS", "DEN"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SKA", "DEN"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SWE", "DEN"],
            "army": true,
            "fleet": true
          }, {
            "from": ["AEG", "EME"],
            "army": false,
            "fleet": true
          }, {
            "from": ["ION", "EME"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SMY", "EME"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SYR", "EME"],
            "army": false,
            "fleet": true
          }, {
            "from": ["CLY", "EDI"],
            "army": true,
            "fleet": true
          }, {
            "from": ["LVP", "EDI"],
            "army": true,
            "fleet": false
          }, {
            "from": ["NTS", "EDI"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NWG", "EDI"],
            "army": false,
            "fleet": true
          }, {
            "from": ["YOR", "EDI"],
            "army": true,
            "fleet": true
          }, {
            "from": ["BEL", "ECH"],
            "army": false,
            "fleet": true
          }, {
            "from": ["BRE", "ECH"],
            "army": false,
            "fleet": true
          }, {
            "from": ["IRI", "ECH"],
            "army": false,
            "fleet": true
          }, {
            "from": ["LON", "ECH"],
            "army": false,
            "fleet": true
          }, {
            "from": ["MAO", "ECH"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NTS", "ECH"],
            "army": false,
            "fleet": true
          }, {
            "from": ["PIC", "ECH"],
            "army": false,
            "fleet": true
          }, {
            "from": ["WAL", "ECH"],
            "army": false,
            "fleet": true
          }, {
            "from": ["GOB", "FIN"],
            "army": false,
            "fleet": true
          }, {
            "from": ["STP", "FIN"],
            "army": true,
            "fleet": false
          }, {
            "from": ["STP-S", "FIN"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SWE", "FIN"],
            "army": true,
            "fleet": true
          }, {
            "from": ["BOH", "GAL"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BUD", "GAL"],
            "army": true,
            "fleet": false
          }, {
            "from": ["RUM", "GAL"],
            "army": true,
            "fleet": false
          }, {
            "from": ["SIL", "GAL"],
            "army": true,
            "fleet": false
          }, {
            "from": ["UKR", "GAL"],
            "army": true,
            "fleet": false
          }, {
            "from": ["VIE", "GAL"],
            "army": true,
            "fleet": false
          }, {
            "from": ["WAR", "GAL"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BRE", "GAS"],
            "army": true,
            "fleet": true
          }, {
            "from": ["BUR", "GAS"],
            "army": true,
            "fleet": false
          }, {
            "from": ["MAR", "GAS"],
            "army": true,
            "fleet": false
          }, {
            "from": ["MAO", "GAS"],
            "army": false,
            "fleet": true
          }, {
            "from": ["PAR", "GAS"],
            "army": true,
            "fleet": false
          }, {
            "from": ["SPA", "GAS"],
            "army": true,
            "fleet": false
          }, {
            "from": ["SPA-N", "GAS"],
            "army": false,
            "fleet": true
          }, {
            "from": ["AEG", "GRE"],
            "army": false,
            "fleet": true
          }, {
            "from": ["ALB", "GRE"],
            "army": true,
            "fleet": true
          }, {
            "from": ["BUL-S", "GRE"],
            "army": false,
            "fleet": true
          }, {
            "from": ["BUL", "GRE"],
            "army": true,
            "fleet": false
          }, {
            "from": ["ION", "GRE"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SER", "GRE"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BAL", "GOB"],
            "army": false,
            "fleet": true
          }, {
            "from": ["FIN", "GOB"],
            "army": false,
            "fleet": true
          }, {
            "from": ["LVN", "GOB"],
            "army": false,
            "fleet": true
          }, {
            "from": ["STP-S", "GOB"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SWE", "GOB"],
            "army": false,
            "fleet": true
          }, {
            "from": ["MAR", "GOL"],
            "army": false,
            "fleet": true
          }, {
            "from": ["PIE", "GOL"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SPA-S", "GOL"],
            "army": false,
            "fleet": true
          }, {
            "from": ["TUS", "GOL"],
            "army": false,
            "fleet": true
          }, {
            "from": ["TYS", "GOL"],
            "army": false,
            "fleet": true
          }, {
            "from": ["WME", "GOL"],
            "army": false,
            "fleet": true
          }, {
            "from": ["DEN", "HEL"],
            "army": false,
            "fleet": true
          }, {
            "from": ["HOL", "HEL"],
            "army": false,
            "fleet": true
          }, {
            "from": ["KIE", "HEL"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NTS", "HEL"],
            "army": false,
            "fleet": true
          }, {
            "from": ["BEL", "HOL"],
            "army": true,
            "fleet": true
          }, {
            "from": ["HEL", "HOL"],
            "army": false,
            "fleet": true
          }, {
            "from": ["KIE", "HOL"],
            "army": true,
            "fleet": true
          }, {
            "from": ["NTS", "HOL"],
            "army": false,
            "fleet": true
          }, {
            "from": ["RUH", "HOL"],
            "army": true,
            "fleet": false
          }, {
            "from": ["ADR", "ION"],
            "army": false,
            "fleet": true
          }, {
            "from": ["AEG", "ION"],
            "army": false,
            "fleet": true
          }, {
            "from": ["ALB", "ION"],
            "army": false,
            "fleet": true
          }, {
            "from": ["APU", "ION"],
            "army": false,
            "fleet": true
          }, {
            "from": ["EME", "ION"],
            "army": false,
            "fleet": true
          }, {
            "from": ["GRE", "ION"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NAP", "ION"],
            "army": false,
            "fleet": true
          }, {
            "from": ["TUN", "ION"],
            "army": false,
            "fleet": true
          }, {
            "from": ["TYS", "ION"],
            "army": false,
            "fleet": true
          }, {
            "from": ["ECH", "IRI"],
            "army": false,
            "fleet": true
          }, {
            "from": ["LVP", "IRI"],
            "army": false,
            "fleet": true
          }, {
            "from": ["MAO", "IRI"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NAO", "IRI"],
            "army": false,
            "fleet": true
          }, {
            "from": ["WAL", "IRI"],
            "army": false,
            "fleet": true
          }, {
            "from": ["BAL", "KIE"],
            "army": false,
            "fleet": true
          }, {
            "from": ["BER", "KIE"],
            "army": true,
            "fleet": true
          }, {
            "from": ["DEN", "KIE"],
            "army": true,
            "fleet": true
          }, {
            "from": ["HEL", "KIE"],
            "army": false,
            "fleet": true
          }, {
            "from": ["HOL", "KIE"],
            "army": true,
            "fleet": true
          }, {
            "from": ["MUN", "KIE"],
            "army": true,
            "fleet": false
          }, {
            "from": ["RUH", "KIE"],
            "army": true,
            "fleet": false
          }, {
            "from": ["CLY", "LVP"],
            "army": true,
            "fleet": true
          }, {
            "from": ["EDI", "LVP"],
            "army": true,
            "fleet": false
          }, {
            "from": ["IRI", "LVP"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NAO", "LVP"],
            "army": false,
            "fleet": true
          }, {
            "from": ["WAL", "LVP"],
            "army": true,
            "fleet": true
          }, {
            "from": ["YOR", "LVP"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BAL", "LVN"],
            "army": false,
            "fleet": true
          }, {
            "from": ["GOB", "LVN"],
            "army": false,
            "fleet": true
          }, {
            "from": ["MOS", "LVN"],
            "army": true,
            "fleet": false
          }, {
            "from": ["PRU", "LVN"],
            "army": true,
            "fleet": true
          }, {
            "from": ["STP", "LVN"],
            "army": true,
            "fleet": false
          }, {
            "from": ["STP-S", "LVN"],
            "army": false,
            "fleet": true
          }, {
            "from": ["WAR", "LVN"],
            "army": true,
            "fleet": false
          }, {
            "from": ["ECH", "LON"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NTS", "LON"],
            "army": false,
            "fleet": true
          }, {
            "from": ["WAL", "LON"],
            "army": true,
            "fleet": true
          }, {
            "from": ["YOR", "LON"],
            "army": true,
            "fleet": true
          }, {
            "from": ["BUR", "MAR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["GAS", "MAR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["GOL", "MAR"],
            "army": false,
            "fleet": true
          }, {
            "from": ["PIE", "MAR"],
            "army": true,
            "fleet": true
          }, {
            "from": ["SPA", "MAR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BRE", "MAO"],
            "army": false,
            "fleet": true
          }, {
            "from": ["ECH", "MAO"],
            "army": false,
            "fleet": true
          }, {
            "from": ["GAS", "MAO"],
            "army": false,
            "fleet": true
          }, {
            "from": ["IRI", "MAO"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NAO", "MAO"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NAF", "MAO"],
            "army": false,
            "fleet": true
          }, {
            "from": ["POR", "MAO"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SPA-S", "MAO"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SPA-N", "MAO"],
            "army": false,
            "fleet": true
          }, {
            "from": ["WME", "MAO"],
            "army": false,
            "fleet": true
          }, {
            "from": ["LVN", "MOS"],
            "army": true,
            "fleet": false
          }, {
            "from": ["SEV", "MOS"],
            "army": true,
            "fleet": false
          }, {
            "from": ["STP", "MOS"],
            "army": true,
            "fleet": false
          }, {
            "from": ["UKR", "MOS"],
            "army": true,
            "fleet": false
          }, {
            "from": ["WAR", "MOS"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BER", "MUN"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BOH", "MUN"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BUR", "MUN"],
            "army": true,
            "fleet": false
          }, {
            "from": ["KIE", "MUN"],
            "army": true,
            "fleet": false
          }, {
            "from": ["RUH", "MUN"],
            "army": true,
            "fleet": false
          }, {
            "from": ["SIL", "MUN"],
            "army": true,
            "fleet": false
          }, {
            "from": ["TYR", "MUN"],
            "army": true,
            "fleet": false
          }, {
            "from": ["APU", "NAP"],
            "army": true,
            "fleet": true
          }, {
            "from": ["ION", "NAP"],
            "army": false,
            "fleet": true
          }, {
            "from": ["ROM", "NAP"],
            "army": true,
            "fleet": true
          }, {
            "from": ["TYS", "NAP"],
            "army": false,
            "fleet": true
          }, {
            "from": ["MAO", "NAF"],
            "army": false,
            "fleet": true
          }, {
            "from": ["TUN", "NAF"],
            "army": true,
            "fleet": true
          }, {
            "from": ["WME", "NAF"],
            "army": false,
            "fleet": true
          }, {
            "from": ["CLY", "NAO"],
            "army": false,
            "fleet": true
          }, {
            "from": ["IRI", "NAO"],
            "army": false,
            "fleet": true
          }, {
            "from": ["LVP", "NAO"],
            "army": false,
            "fleet": true
          }, {
            "from": ["MAO", "NAO"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NWG", "NAO"],
            "army": false,
            "fleet": true
          }, {
            "from": ["BEL", "NTS"],
            "army": false,
            "fleet": true
          }, {
            "from": ["DEN", "NTS"],
            "army": false,
            "fleet": true
          }, {
            "from": ["EDI", "NTS"],
            "army": false,
            "fleet": true
          }, {
            "from": ["ECH", "NTS"],
            "army": false,
            "fleet": true
          }, {
            "from": ["HEL", "NTS"],
            "army": false,
            "fleet": true
          }, {
            "from": ["HOL", "NTS"],
            "army": false,
            "fleet": true
          }, {
            "from": ["LON", "NTS"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NWY", "NTS"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NWG", "NTS"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SKA", "NTS"],
            "army": false,
            "fleet": true
          }, {
            "from": ["YOR", "NTS"],
            "army": false,
            "fleet": true
          }, {
            "from": ["BAR", "NWY"],
            "army": false,
            "fleet": true
          }, {
            "from": ["FIN", "NWY"],
            "army": true,
            "fleet": false
          }, {
            "from": ["NTS", "NWY"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NWG", "NWY"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SKA", "NWY"],
            "army": false,
            "fleet": true
          }, {
            "from": ["STP", "NWY"],
            "army": true,
            "fleet": false
          }, {
            "from": ["STP-N", "NWY"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SWE", "NWY"],
            "army": true,
            "fleet": true
          }, {
            "from": ["BAR", "NWG"],
            "army": false,
            "fleet": true
          }, {
            "from": ["CLY", "NWG"],
            "army": false,
            "fleet": true
          }, {
            "from": ["EDI", "NWG"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NAO", "NWG"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NTS", "NWG"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NWY", "NWG"],
            "army": false,
            "fleet": true
          }, {
            "from": ["BRE", "PAR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BUR", "PAR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["GAS", "PAR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["PIC", "PAR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BEL", "PIC"],
            "army": true,
            "fleet": true
          }, {
            "from": ["BRE", "PIC"],
            "army": true,
            "fleet": true
          }, {
            "from": ["BUR", "PIC"],
            "army": true,
            "fleet": false
          }, {
            "from": ["ECH", "PIC"],
            "army": false,
            "fleet": true
          }, {
            "from": ["PAR", "PIC"],
            "army": true,
            "fleet": false
          }, {
            "from": ["MAR", "PIE"],
            "army": true,
            "fleet": true
          }, {
            "from": ["TUS", "PIE"],
            "army": true,
            "fleet": true
          }, {
            "from": ["TYR", "PIE"],
            "army": true,
            "fleet": false
          }, {
            "from": ["VEN", "PIE"],
            "army": true,
            "fleet": false
          }, {
            "from": ["MAO", "POR"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SPA", "POR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["SPA-S", "POR"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SPA-N", "POR"],
            "army": false,
            "fleet": true
          }, {
            "from": ["BAL", "PRU"],
            "army": false,
            "fleet": true
          }, {
            "from": ["BER", "PRU"],
            "army": false,
            "fleet": true
          }, {
            "from": ["LVN", "PRU"],
            "army": true,
            "fleet": true
          }, {
            "from": ["SIL", "PRU"],
            "army": true,
            "fleet": false
          }, {
            "from": ["WAR", "PRU"],
            "army": true,
            "fleet": false
          }, {
            "from": ["APU", "ROM"],
            "army": true,
            "fleet": false
          }, {
            "from": ["NAP", "ROM"],
            "army": true,
            "fleet": true
          }, {
            "from": ["TUS", "ROM"],
            "army": true,
            "fleet": true
          }, {
            "from": ["TYS", "ROM"],
            "army": false,
            "fleet": true
          }, {
            "from": ["VEN", "ROM"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BEL", "RUH"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BUR", "RUH"],
            "army": true,
            "fleet": false
          }, {
            "from": ["HOL", "RUH"],
            "army": true,
            "fleet": false
          }, {
            "from": ["KIE", "RUH"],
            "army": true,
            "fleet": false
          }, {
            "from": ["MUN", "RUH"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BLA", "RUM"],
            "army": false,
            "fleet": true
          }, {
            "from": ["BUD", "RUM"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BUL", "RUM"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BUL-E", "RUM"],
            "army": false,
            "fleet": true
          }, {
            "from": ["GAL", "RUM"],
            "army": true,
            "fleet": false
          }, {
            "from": ["SER", "RUM"],
            "army": true,
            "fleet": false
          }, {
            "from": ["SEV", "RUM"],
            "army": true,
            "fleet": true
          }, {
            "from": ["UKR", "RUM"],
            "army": true,
            "fleet": false
          }, {
            "from": ["ALB", "SER"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BUD", "SER"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BUL", "SER"],
            "army": true,
            "fleet": false
          }, {
            "from": ["GRE", "SER"],
            "army": true,
            "fleet": false
          }, {
            "from": ["RUM", "SER"],
            "army": true,
            "fleet": false
          }, {
            "from": ["TRI", "SER"],
            "army": true,
            "fleet": false
          }, {
            "from": ["ARM", "SEV"],
            "army": true,
            "fleet": true
          }, {
            "from": ["BLA", "SEV"],
            "army": false,
            "fleet": true
          }, {
            "from": ["MOS", "SEV"],
            "army": true,
            "fleet": false
          }, {
            "from": ["RUM", "SEV"],
            "army": true,
            "fleet": true
          }, {
            "from": ["UKR", "SEV"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BER", "SIL"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BOH", "SIL"],
            "army": true,
            "fleet": false
          }, {
            "from": ["GAL", "SIL"],
            "army": true,
            "fleet": false
          }, {
            "from": ["MUN", "SIL"],
            "army": true,
            "fleet": false
          }, {
            "from": ["PRU", "SIL"],
            "army": true,
            "fleet": false
          }, {
            "from": ["WAR", "SIL"],
            "army": true,
            "fleet": false
          }, {
            "from": ["DEN", "SKA"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NTS", "SKA"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NWY", "SKA"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SWE", "SKA"],
            "army": false,
            "fleet": true
          }, {
            "from": ["AEG", "SMY"],
            "army": false,
            "fleet": true
          }, {
            "from": ["ANK", "SMY"],
            "army": true,
            "fleet": false
          }, {
            "from": ["ARM", "SMY"],
            "army": true,
            "fleet": false
          }, {
            "from": ["CON", "SMY"],
            "army": true,
            "fleet": true
          }, {
            "from": ["EME", "SMY"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SYR", "SMY"],
            "army": true,
            "fleet": true
          }, {
            "from": ["GAS", "SPA"],
            "army": true,
            "fleet": false
          }, {
            "from": ["MAR", "SPA"],
            "army": true,
            "fleet": false
          }, {
            "from": ["POR", "SPA"],
            "army": true,
            "fleet": false
          }, {
            "from": ["GAS", "SPA-N"],
            "army": false,
            "fleet": true
          }, {
            "from": ["MAO", "SPA-N"],
            "army": false,
            "fleet": true
          }, {
            "from": ["POR", "SPA-N"],
            "army": false,
            "fleet": true
          }, {
            "from": ["GOL", "SPA-S"],
            "army": false,
            "fleet": true
          }, {
            "from": ["MAR", "SPA-S"],
            "army": false,
            "fleet": true
          }, {
            "from": ["POR", "SPA-S"],
            "army": false,
            "fleet": true
          }, {
            "from": ["WME", "SPA-S"],
            "army": false,
            "fleet": true
          }, {
            "from": ["FIN", "STP"],
            "army": true,
            "fleet": false
          }, {
            "from": ["LVN", "STP"],
            "army": true,
            "fleet": false
          }, {
            "from": ["MOS", "STP"],
            "army": true,
            "fleet": false
          }, {
            "from": ["NWY", "STP"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BAR", "STP-N"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NWY", "STP-N"],
            "army": false,
            "fleet": true
          }, {
            "from": ["FIN", "STP-S"],
            "army": false,
            "fleet": true
          }, {
            "from": ["GOB", "STP-S"],
            "army": false,
            "fleet": true
          }, {
            "from": ["LVN", "STP-S"],
            "army": false,
            "fleet": true
          }, {
            "from": ["BAL", "SWE"],
            "army": false,
            "fleet": true
          }, {
            "from": ["DEN", "SWE"],
            "army": true,
            "fleet": true
          }, {
            "from": ["FIN", "SWE"],
            "army": true,
            "fleet": true
          }, {
            "from": ["GOB", "SWE"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NWY", "SWE"],
            "army": true,
            "fleet": true
          }, {
            "from": ["SKA", "SWE"],
            "army": false,
            "fleet": true
          }, {
            "from": ["ARM", "SYR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["EME", "SYR"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SMY", "SYR"],
            "army": true,
            "fleet": true
          }, {
            "from": ["ADR", "TRI"],
            "army": false,
            "fleet": true
          }, {
            "from": ["ALB", "TRI"],
            "army": true,
            "fleet": true
          }, {
            "from": ["BUD", "TRI"],
            "army": true,
            "fleet": false
          }, {
            "from": ["SER", "TRI"],
            "army": true,
            "fleet": false
          }, {
            "from": ["TYR", "TRI"],
            "army": true,
            "fleet": false
          }, {
            "from": ["VEN", "TRI"],
            "army": true,
            "fleet": true
          }, {
            "from": ["VIE", "TRI"],
            "army": true,
            "fleet": false
          }, {
            "from": ["ION", "TUN"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NAF", "TUN"],
            "army": true,
            "fleet": true
          }, {
            "from": ["TYS", "TUN"],
            "army": false,
            "fleet": true
          }, {
            "from": ["WME", "TUN"],
            "army": false,
            "fleet": true
          }, {
            "from": ["PIE", "TUS"],
            "army": true,
            "fleet": true
          }, {
            "from": ["ROM", "TUS"],
            "army": true,
            "fleet": true
          }, {
            "from": ["TYS", "TUS"],
            "army": false,
            "fleet": true
          }, {
            "from": ["VEN", "TUS"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BOH", "TYR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["MUN", "TYR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["PIE", "TYR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["TRI", "TYR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["VEN", "TYR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["VIE", "TYR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["GOL", "TYS"],
            "army": false,
            "fleet": true
          }, {
            "from": ["ION", "TYS"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NAP", "TYS"],
            "army": false,
            "fleet": true
          }, {
            "from": ["ROM", "TYS"],
            "army": false,
            "fleet": true
          }, {
            "from": ["TUN", "TYS"],
            "army": false,
            "fleet": true
          }, {
            "from": ["TUS", "TYS"],
            "army": false,
            "fleet": true
          }, {
            "from": ["WME", "TYS"],
            "army": false,
            "fleet": true
          }, {
            "from": ["GAL", "UKR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["MOS", "UKR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["RUM", "UKR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["SEV", "UKR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["WAR", "UKR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["ADR", "VEN"],
            "army": false,
            "fleet": true
          }, {
            "from": ["APU", "VEN"],
            "army": true,
            "fleet": true
          }, {
            "from": ["PIE", "VEN"],
            "army": true,
            "fleet": false
          }, {
            "from": ["ROM", "VEN"],
            "army": true,
            "fleet": false
          }, {
            "from": ["TRI", "VEN"],
            "army": true,
            "fleet": true
          }, {
            "from": ["TUS", "VEN"],
            "army": true,
            "fleet": false
          }, {
            "from": ["TYR", "VEN"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BOH", "VIE"],
            "army": true,
            "fleet": false
          }, {
            "from": ["BUD", "VIE"],
            "army": true,
            "fleet": false
          }, {
            "from": ["GAL", "VIE"],
            "army": true,
            "fleet": false
          }, {
            "from": ["TRI", "VIE"],
            "army": true,
            "fleet": false
          }, {
            "from": ["TYR", "VIE"],
            "army": true,
            "fleet": false
          }, {
            "from": ["ECH", "WAL"],
            "army": false,
            "fleet": true
          }, {
            "from": ["IRI", "WAL"],
            "army": false,
            "fleet": true
          }, {
            "from": ["LVP", "WAL"],
            "army": true,
            "fleet": true
          }, {
            "from": ["LON", "WAL"],
            "army": true,
            "fleet": true
          }, {
            "from": ["YOR", "WAL"],
            "army": true,
            "fleet": false
          }, {
            "from": ["GAL", "WAR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["LVN", "WAR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["MOS", "WAR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["PRU", "WAR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["SIL", "WAR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["UKR", "WAR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["GOL", "WME"],
            "army": false,
            "fleet": true
          }, {
            "from": ["MAO", "WME"],
            "army": false,
            "fleet": true
          }, {
            "from": ["NAF", "WME"],
            "army": false,
            "fleet": true
          }, {
            "from": ["SPA-S", "WME"],
            "army": false,
            "fleet": true
          }, {
            "from": ["TUN", "WME"],
            "army": false,
            "fleet": true
          }, {
            "from": ["TYS", "WME"],
            "army": false,
            "fleet": true
          }, {
            "from": ["EDI", "YOR"],
            "army": true,
            "fleet": true
          }, {
            "from": ["LVP", "YOR"],
            "army": true,
            "fleet": false
          }, {
            "from": ["LON", "YOR"],
            "army": true,
            "fleet": true
          }, {
            "from": ["NTS", "YOR"],
            "army": false,
            "fleet": true
          }, {
            "from": ["MAR", "SPA-S"],
            "army": false,
            "fleet": true
          }, {
            "from": ["WAL", "YOR"],
            "army": true,
            "fleet": false
          }];

          _.each(connections, function(doc) {
            console.log(Diplomacy.Map.addProvinceConnection(
              doc.from, doc.fleet, doc.army));
          });

        }
      });
