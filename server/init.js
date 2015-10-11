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
    var provinces = [
      {"name":"Bohemia", "abbreviation":"BOH", "type":"Land", "sub_name":null, "parent":"", "fleet":false, "nation":"Austria", "supply":false, "army":true },
      {"name":"Budapest", "abbreviation":"BUD", "type":"Land", "sub_name":null, "parent":"", "fleet":false, "nation":"Austria", "supply":true, "army":true },
      {"name":"Galicia", "abbreviation":"GAL", "type":"Land", "sub_name":null, "parent":"", "fleet":false, "nation":"Austria", "supply":false, "army":true },
      {"name":"Silesia", "abbreviation":"SIL", "type":"Land", "sub_name":null, "parent":"", "fleet":false, "nation":"Austria", "supply":false, "army":true },
      {"name":"Trieste", "abbreviation":"TRI", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"Austria", "supply":true, "army":true },
      {"name":"Tyrolia", "abbreviation":"TYR", "type":"Land", "sub_name":null, "parent":"", "fleet":false, "nation":"Austria", "supply":false, "army":true },
      {"name":"Vienna", "abbreviation":"VIE", "type":"Land", "sub_name":null, "parent":"", "fleet":false, "nation":"Austria", "supply":true, "army":true },
      {"name":"Clyde", "abbreviation":"CLY", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"England", "supply":false, "army":true },
      {"name":"Edinburgh", "abbreviation":"EDI", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"England", "supply":true, "army":false },
      {"name":"London", "abbreviation":"LON", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"England", "supply":true, "army":true },
      {"name":"Liverpool", "abbreviation":"LVP", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"England", "supply":true, "army":true },
      {"name":"Wales", "abbreviation":"WAL", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"England", "supply":false, "army":true },
      {"name":"Yorkshire", "abbreviation":"YOR", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"England", "supply":false, "army":true },
      {"name":"Brest", "abbreviation":"BRE", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"France", "supply":true, "army":true },
      {"name":"Burgundy", "abbreviation":"BUR", "type":"Land", "sub_name":null, "parent":"", "fleet":false, "nation":"France", "supply":false, "army":true },
      {"name":"Gascony", "abbreviation":"GAS", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"France", "supply":false, "army":true },
      {"name":"Marseilles", "abbreviation":"MAR", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"France", "supply":true, "army":true },
      {"name":"Paris", "abbreviation":"PAR", "type":"Land", "sub_name":null, "parent":"", "fleet":false, "nation":"France", "supply":true, "army":true },
      {"name":"Picardy", "abbreviation":"PIC", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"France", "supply":false, "army":true },
      {"name":"Piedmont", "abbreviation":"PIE", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"France", "supply":false, "army":true },
      {"name":"Berlin", "abbreviation":"BER", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"Germany", "supply":true, "army":true },
      {"name":"Kiel", "abbreviation":"KIE", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"Germany", "supply":true, "army":true },
      {"name":"Munich", "abbreviation":"MUN", "type":"Land", "sub_name":null, "parent":"", "fleet":false, "nation":"Germany", "supply":true, "army":true },
      {"name":"Prussia", "abbreviation":"PRU", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"Germany", "supply":false, "army":true },
      {"name":"Ruhr", "abbreviation":"RUH", "type":"Land", "sub_name":null, "parent":"", "fleet":false, "nation":"Germany", "supply":false, "army":true },
      {"name":"Apulia", "abbreviation":"APU", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"Italy", "supply":false, "army":true },
      {"name":"Naples", "abbreviation":"NAP", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"Italy", "supply":true, "army":true },
      {"name":"Rome", "abbreviation":"ROM", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"Italy", "supply":true, "army":true },
      {"name":"Tuscany", "abbreviation":"TUS", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"Italy", "supply":false, "army":true },
      {"name":"Venice", "abbreviation":"VEN", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"Italy", "supply":true, "army":true },
      {"name":"Livonia", "abbreviation":"LVN", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"Russia", "supply":false, "army":true },
      {"name":"Moscow", "abbreviation":"MOS", "type":"Land", "sub_name":null, "parent":"", "fleet":false, "nation":"Russia", "supply":true, "army":true },
      {"name":"Sevastopol", "abbreviation":"SEV", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"Russia", "supply":true, "army":true },
      {"name":"St Petersburg", "abbreviation":"STP", "type":"Land", "sub_name":null, "parent":"", "fleet":false, "nation":"Russia", "supply":true, "army":true },
      {"name":"St Petersburg", "abbreviation":"STP-N", "type":"Land", "sub_name":"North Coast", "parent":"STP", "fleet":true, "nation":"Russia", "supply":true, "army":false },
      {"name":"St Petersburg", "abbreviation":"STP-S", "type":"Land", "sub_name":"South Coast", "parent":"STP", "fleet":true, "nation":"Russia", "supply":true, "army":false },
      {"name":"Ukraine", "abbreviation":"UKR", "type":"Land", "sub_name":null, "parent":"", "fleet":false, "nation":"Russia", "supply":false, "army":true },
      {"name":"Warsaw", "abbreviation":"WAR", "type":"Land", "sub_name":null, "parent":"", "fleet":false, "nation":"Russia", "supply":true, "army":true },
      {"name":"Ankara", "abbreviation":"ANK", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"Turkey", "supply":true, "army":true },
      {"name":"Armenia", "abbreviation":"ARM", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"Turkey", "supply":false, "army":true },
      {"name":"Constantinople", "abbreviation":"CON", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"Turkey", "supply":true, "army":true },
      {"name":"Smyrna", "abbreviation":"SMY", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"Turkey", "supply":true, "army":true },
      {"name":"Syria", "abbreviation":"SYR", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"Turkey", "supply":false, "army":true },
      {"name":"Adriatic Sea", "abbreviation":"ADR", "type":"Sea", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":false, "army":false },
      {"name":"Aegean Sea", "abbreviation":"AEG", "type":"Sea", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":false, "army":false },
      {"name":"Albania", "abbreviation":"ALB", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":false, "army":true },
      {"name":"Baltic Sea", "abbreviation":"BAL", "type":"Sea", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":false, "army":false },
      {"name":"Barents Sea", "abbreviation":"BAR", "type":"Sea", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":false, "army":false },
      {"name":"Belgium", "abbreviation":"BEL", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":true, "army":true },
      {"name":"Black Sea", "abbreviation":"BLA", "type":"Sea", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":false, "army":false },
      {"name":"Bulgaria", "abbreviation":"BUL", "type":"Land", "sub_name":null, "parent":"", "fleet":false, "nation":"", "supply":true, "army":true },
      {"name":"Bulgaria", "abbreviation":"BUL-E", "type":"Land", "sub_name":"East Coast", "parent":"BUL", "fleet":true, "nation":"", "supply":true, "army":false },
      {"name":"Bulgaria", "abbreviation":"BUL-S", "type":"Land", "sub_name":"South Coast", "parent":"BUL", "fleet":true, "nation":"", "supply":true, "army":false },
      {"name":"Denmark", "abbreviation":"DEN", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":true, "army":true },
      {"name":"English Channel", "abbreviation":"ECH", "type":"Sea", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":false, "army":false },
      {"name":"Eastern Mediterranean", "abbreviation":"EME", "type":"Sea", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":false, "army":false },
      {"name":"Finland", "abbreviation":"FIN", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":false, "army":true },
      {"name":"Gulf of Bothnia", "abbreviation":"GOB", "type":"Sea", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":false, "army":false },
      {"name":"Gulf of Lyon", "abbreviation":"GOL", "type":"Sea", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":false, "army":false },
      {"name":"Greece", "abbreviation":"GRE", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":true, "army":true },
      {"name":"Helgoland Bight", "abbreviation":"HEL", "type":"Sea", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":false, "army":false },
      {"name":"Holland", "abbreviation":"HOL", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":true, "army":true },
      {"name":"Ionian Sea", "abbreviation":"ION", "type":"Sea", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":false, "army":false },
      {"name":"Irish Sea", "abbreviation":"IRI", "type":"Sea", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":false, "army":false },
      {"name":"Kiel", "abbreviation":"KIE", "type":"Sea", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":false, "army":false },
      {"name":"Mid-Atlantic Ocean", "abbreviation":"MAO", "type":"Sea", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":false, "army":false },
      {"name":"North Africa", "abbreviation":"NAF", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":false, "army":true },
      {"name":"North Atlantic Ocean", "abbreviation":"NAO", "type":"Sea", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":false, "army":"FALE" },
      {"name":"North Sea", "abbreviation":"NTS", "type":"Sea", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":false, "army":false },
      {"name":"Norwegian Sea", "abbreviation":"NWG", "type":"Sea", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":false, "army":false },
      {"name":"Norway", "abbreviation":"NWY", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":true, "army":true },
      {"name":"Portugal", "abbreviation":"POR", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":true, "army":true },
      {"name":"Rumania", "abbreviation":"RUM", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":true, "army":true },
      {"name":"Serbia", "abbreviation":"SER", "type":"Land", "sub_name":null, "parent":"", "fleet":false, "nation":"", "supply":true, "army":true },
      {"name":"Skagerrak", "abbreviation":"SKA", "type":"Sea", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":false, "army":false },
      {"name":"Spain", "abbreviation":"SPA", "type":"Land", "sub_name":null, "parent":"", "fleet":false, "nation":"", "supply":true, "army":true },
      {"name":"Spain", "abbreviation":"SPA-N", "type":"Land", "sub_name":"North Coast", "parent":"SPA", "fleet":true, "nation":"", "supply":true, "army":false },
      {"name":"Spain", "abbreviation":"SPA-S", "type":"Land", "sub_name":"South Coast", "parent":"SPA", "fleet":true, "nation":"", "supply":true, "army":false },
      {"name":"Sweden", "abbreviation":"SWE", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":true, "army":true },
      {"name":"Switzerland", "abbreviation":"SWI", "type":"Land", "sub_name":null, "parent":"", "fleet":false, "nation":"", "supply":false, "army":false },
      {"name":"Tunis", "abbreviation":"TUN", "type":"Land", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":true, "army":true },
      {"name":"Tyrrhenian Sea", "abbreviation":"TYS", "type":"Sea", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":false, "army":false },
      {"name":"Western Mediterranean", "abbreviation":"WME", "type":"Sea", "sub_name":null, "parent":"", "fleet":true, "nation":"", "supply":false, "army":false }
    ];

    _.each(provinces, function(doc) {
      Diplomacy.Map._collections.Provinces.insert(doc);
    });

    _.each(provinces, function(doc) {
      Diplomacy.Map.addProvincesToNation(doc.nation, [doc.abbreviation]);
    });

    // Add Connections
    var connections = [
      {"from":["ALB", "ADR"], "army":false, "fleet":true},
      {"from":["APU", "ADR"], "army":false, "fleet":true},
      {"from":["ION", "ADR"], "army":false, "fleet":true},
      {"from":["TRI", "ADR"], "army":false, "fleet":true},
      {"from":["VEN", "ADR"], "army":false, "fleet":true},
      {"from":["BUL-S", "AEG"], "army":false, "fleet":true},
      {"from":["CON", "AEG"], "army":false, "fleet":true},
      {"from":["EME", "AEG"], "army":false, "fleet":true},
      {"from":["GRE", "AEG"], "army":false, "fleet":true},
      {"from":["ION", "AEG"], "army":false, "fleet":true},
      {"from":["SMY", "AEG"], "army":false, "fleet":true},
      {"from":["ADR", "ALB"], "army":false, "fleet":true},
      {"from":["GRE", "ALB"], "army":true, "fleet":true},
      {"from":["ION", "ALB"], "army":false, "fleet":true},
      {"from":["SER", "ALB"], "army":true, "fleet":false},
      {"from":["TRI", "ALB"], "army":true, "fleet":true},
      {"from":["ARM", "ANK"], "army":true, "fleet":true},
      {"from":["BLA", "ANK"], "army":false, "fleet":true},
      {"from":["CON", "ANK"], "army":true, "fleet":true},
      {"from":["SMY", "ANK"], "army":true, "fleet":false},
      {"from":["ADR", "APU"], "army":false, "fleet":true},
      {"from":["ION", "APU"], "army":false, "fleet":true},
      {"from":["NAP", "APU"], "army":true, "fleet":true},
      {"from":["ROM", "APU"], "army":true, "fleet":false},
      {"from":["VEN", "APU"], "army":true, "fleet":true},
      {"from":["ANK", "ARM"], "army":true, "fleet":true},
      {"from":["BLA", "ARM"], "army":false, "fleet":true},
      {"from":["SEV", "ARM"], "army":true, "fleet":true},
      {"from":["SMY", "ARM"], "army":true, "fleet":false},
      {"from":["SYR", "ARM"], "army":true, "fleet":false},
      {"from":["BER", "BAL"], "army":false, "fleet":true},
      {"from":["DEN", "BAL"], "army":false, "fleet":true},
      {"from":["GOB", "BAL"], "army":false, "fleet":true},
      {"from":["KIE", "BAL"], "army":false, "fleet":true},
      {"from":["LVN", "BAL"], "army":false, "fleet":true},
      {"from":["PRU", "BAL"], "army":false, "fleet":true},
      {"from":["SWE", "BAL"], "army":false, "fleet":true},
      {"from":["NWY", "BAR"], "army":false, "fleet":true},
      {"from":["NWG", "BAR"], "army":false, "fleet":true},
      {"from":["STP-N", "BAR"], "army":false, "fleet":true},
      {"from":["BUR", "BEL"], "army":true, "fleet":false},
      {"from":["ECH", "BEL"], "army":false, "fleet":true},
      {"from":["HOL", "BEL"], "army":true, "fleet":true},
      {"from":["NTS", "BEL"], "army":false, "fleet":true},
      {"from":["PIC", "BEL"], "army":true, "fleet":true},
      {"from":["RUH", "BEL"], "army":true, "fleet":false},
      {"from":["BAL", "BER"], "army":false, "fleet":true},
      {"from":["KIE", "BER"], "army":true, "fleet":true},
      {"from":["MUN", "BER"], "army":true, "fleet":false},
      {"from":["PRU", "BER"], "army":true, "fleet":true},
      {"from":["SIL", "BER"], "army":true, "fleet":false},
      {"from":["ANK", "BLA"], "army":false, "fleet":true},
      {"from":["ARM", "BLA"], "army":false, "fleet":true},
      {"from":["BUL-E", "BLA"], "army":false, "fleet":true},
      {"from":["CON", "BLA"], "army":false, "fleet":true},
      {"from":["RUM", "BLA"], "army":false, "fleet":true},
      {"from":["SEV", "BLA"], "army":false, "fleet":true},
      {"from":["GAL", "BOH"], "army":true, "fleet":false},
      {"from":["MUN", "BOH"], "army":true, "fleet":false},
      {"from":["SIL", "BOH"], "army":true, "fleet":false},
      {"from":["TYR", "BOH"], "army":true, "fleet":false},
      {"from":["VIE", "BOH"], "army":true, "fleet":false},
      {"from":["ECH", "BRE"], "army":false, "fleet":true},
      {"from":["GAS", "BRE"], "army":true, "fleet":true},
      {"from":["MAO", "BRE"], "army":false, "fleet":true},
      {"from":["PAR", "BRE"], "army":true, "fleet":false},
      {"from":["PIC", "BRE"], "army":true, "fleet":true},
      {"from":["GAL", "BUD"], "army":true, "fleet":false},
      {"from":["RUM", "BUD"], "army":true, "fleet":false},
      {"from":["SER", "BUD"], "army":true, "fleet":false},
      {"from":["TRI", "BUD"], "army":true, "fleet":false},
      {"from":["VIE", "BUD"], "army":true, "fleet":false},
      {"from":["CON", "BUL"], "army":true, "fleet":false},
      {"from":["GRE", "BUL"], "army":true, "fleet":false},
      {"from":["RUM", "BUL"], "army":true, "fleet":false},
      {"from":["SER", "BUL"], "army":true, "fleet":false},
      {"from":["BLA", "BUL-E"], "army":false, "fleet":true},
      {"from":["CON", "BUL-E"], "army":false, "fleet":true},
      {"from":["RUM", "BUL-E"], "army":false, "fleet":true},
      {"from":["AEG", "BUL-S"], "army":false, "fleet":true},
      {"from":["CON", "BUL-S"], "army":false, "fleet":true},
      {"from":["GRE", "BUL-S"], "army":false, "fleet":true},
      {"from":["BEL", "BUR"], "army":true, "fleet":false},
      {"from":["GAS", "BUR"], "army":true, "fleet":false},
      {"from":["MAR", "BUR"], "army":true, "fleet":false},
      {"from":["MUN", "BUR"], "army":true, "fleet":false},
      {"from":["PAR", "BUR"], "army":true, "fleet":false},
      {"from":["PIC", "BUR"], "army":true, "fleet":false},
      {"from":["RUH", "BUR"], "army":true, "fleet":false},
      {"from":["EDI", "CLY"], "army":true, "fleet":true},
      {"from":["LVP", "CLY"], "army":true, "fleet":true},
      {"from":["NAO", "CLY"], "army":false, "fleet":true},
      {"from":["NWG", "CLY"], "army":false, "fleet":true},
      {"from":["AEG", "CON"], "army":false, "fleet":true},
      {"from":["ANK", "CON"], "army":true, "fleet":true},
      {"from":["BLA", "CON"], "army":false, "fleet":true},
      {"from":["BUL-E", "CON"], "army":false, "fleet":true},
      {"from":["BUL", "CON"], "army":true, "fleet":false},
      {"from":["BUL-S", "CON"], "army":true, "fleet":false},
      {"from":["SMY", "CON"], "army":true, "fleet":true},
      {"from":["BAL", "DEN"], "army":false, "fleet":true},
      {"from":["HEL", "DEN"], "army":false, "fleet":true},
      {"from":["KIE", "DEN"], "army":true, "fleet":true},
      {"from":["NTS", "DEN"], "army":false, "fleet":true},
      {"from":["SKA", "DEN"], "army":false, "fleet":true},
      {"from":["SWE", "DEN"], "army":true, "fleet":true},
      {"from":["AEG", "EME"], "army":false, "fleet":true},
      {"from":["ION", "EME"], "army":false, "fleet":true},
      {"from":["SMY", "EME"], "army":false, "fleet":true},
      {"from":["SYR", "EME"], "army":false, "fleet":true},
      {"from":["CLY", "EDI"], "army":true, "fleet":true},
      {"from":["LVP", "EDI"], "army":true, "fleet":false},
      {"from":["NTS", "EDI"], "army":false, "fleet":true},
      {"from":["NWG", "EDI"], "army":false, "fleet":true},
      {"from":["YOR", "EDI"], "army":true, "fleet":true},
      {"from":["BEL", "ECH"], "army":false, "fleet":true},
      {"from":["BRE", "ECH"], "army":false, "fleet":true},
      {"from":["IRI", "ECH"], "army":false, "fleet":true},
      {"from":["LON", "ECH"], "army":false, "fleet":true},
      {"from":["MAO", "ECH"], "army":false, "fleet":true},
      {"from":["NTS", "ECH"], "army":false, "fleet":true},
      {"from":["PIC", "ECH"], "army":false, "fleet":true},
      {"from":["WAL", "ECH"], "army":false, "fleet":true},
      {"from":["GOB", "FIN"], "army":false, "fleet":true},
      {"from":["STP", "FIN"], "army":true, "fleet":false},
      {"from":["STP-S", "FIN"], "army":false, "fleet":true},
      {"from":["SWE", "FIN"], "army":true, "fleet":true},
      {"from":["BOH", "GAL"], "army":true, "fleet":false},
      {"from":["BUD", "GAL"], "army":true, "fleet":false},
      {"from":["RUM", "GAL"], "army":true, "fleet":false},
      {"from":["SIL", "GAL"], "army":true, "fleet":false},
      {"from":["UKR", "GAL"], "army":true, "fleet":false},
      {"from":["VIE", "GAL"], "army":true, "fleet":false},
      {"from":["WAR", "GAL"], "army":true, "fleet":false},
      {"from":["BRE", "GAS"], "army":true, "fleet":true},
      {"from":["BUR", "GAS"], "army":true, "fleet":false},
      {"from":["MAR", "GAS"], "army":true, "fleet":false},
      {"from":["MAO", "GAS"], "army":false, "fleet":true},
      {"from":["PAR", "GAS"], "army":true, "fleet":false},
      {"from":["SPA", "GAS"], "army":true, "fleet":false},
      {"from":["SPA-N", "GAS"], "army":false, "fleet":true},
      {"from":["AEG", "GRE"], "army":false, "fleet":true},
      {"from":["ALB", "GRE"], "army":true, "fleet":true},
      {"from":["BUL-S", "GRE"], "army":false, "fleet":true},
      {"from":["BUL", "GRE"], "army":true, "fleet":false},
      {"from":["ION", "GRE"], "army":false, "fleet":true},
      {"from":["SER", "GRE"], "army":true, "fleet":false},
      {"from":["BAL", "GOB"], "army":false, "fleet":true},
      {"from":["FIN", "GOB"], "army":false, "fleet":true},
      {"from":["LVN", "GOB"], "army":false, "fleet":true},
      {"from":["STP-S", "GOB"], "army":false, "fleet":true},
      {"from":["SWE", "GOB"], "army":false, "fleet":true},
      {"from":["MAR", "GOL"], "army":false, "fleet":true},
      {"from":["PIE", "GOL"], "army":false, "fleet":true},
      {"from":["SPA-S", "GOL"], "army":false, "fleet":true},
      {"from":["TUS", "GOL"], "army":false, "fleet":true},
      {"from":["TYS", "GOL"], "army":false, "fleet":true},
      {"from":["WME", "GOL"], "army":false, "fleet":true},
      {"from":["DEN", "HEL"], "army":false, "fleet":true},
      {"from":["HOL", "HEL"], "army":false, "fleet":true},
      {"from":["KIE", "HEL"], "army":false, "fleet":true},
      {"from":["NTS", "HEL"], "army":false, "fleet":true},
      {"from":["BEL", "HOL"], "army":true, "fleet":true},
      {"from":["HEL", "HOL"], "army":false, "fleet":true},
      {"from":["KIE", "HOL"], "army":true, "fleet":true},
      {"from":["NTS", "HOL"], "army":false, "fleet":true},
      {"from":["RUH", "HOL"], "army":true, "fleet":false},
      {"from":["ADR", "ION"], "army":false, "fleet":true},
      {"from":["AEG", "ION"], "army":false, "fleet":true},
      {"from":["ALB", "ION"], "army":false, "fleet":true},
      {"from":["APU", "ION"], "army":false, "fleet":true},
      {"from":["EME", "ION"], "army":false, "fleet":true},
      {"from":["GRE", "ION"], "army":false, "fleet":true},
      {"from":["NAP", "ION"], "army":false, "fleet":true},
      {"from":["TUN", "ION"], "army":false, "fleet":true},
      {"from":["TYS", "ION"], "army":false, "fleet":true},
      {"from":["ECH", "IRI"], "army":false, "fleet":true},
      {"from":["LVP", "IRI"], "army":false, "fleet":true},
      {"from":["MAO", "IRI"], "army":false, "fleet":true},
      {"from":["NAO", "IRI"], "army":false, "fleet":true},
      {"from":["WAL", "IRI"], "army":false, "fleet":true},
      {"from":["BAL", "KIE"], "army":false, "fleet":true},
      {"from":["BER", "KIE"], "army":true, "fleet":true},
      {"from":["DEN", "KIE"], "army":true, "fleet":true},
      {"from":["HEL", "KIE"], "army":false, "fleet":true},
      {"from":["HOL", "KIE"], "army":true, "fleet":true},
      {"from":["MUN", "KIE"], "army":true, "fleet":false},
      {"from":["RUH", "KIE"], "army":true, "fleet":false},
      {"from":["CLY", "LVP"], "army":true, "fleet":true},
      {"from":["EDI", "LVP"], "army":true, "fleet":false},
      {"from":["IRI", "LVP"], "army":false, "fleet":true},
      {"from":["NAO", "LVP"], "army":false, "fleet":true},
      {"from":["WAL", "LVP"], "army":true, "fleet":true},
      {"from":["YOR", "LVP"], "army":true, "fleet":false},
      {"from":["BAL", "LVN"], "army":false, "fleet":true},
      {"from":["GOB", "LVN"], "army":false, "fleet":true},
      {"from":["MOS", "LVN"], "army":true, "fleet":false},
      {"from":["PRU", "LVN"], "army":true, "fleet":true},
      {"from":["STP", "LVN"], "army":true, "fleet":false},
      {"from":["STP-S", "LVN"], "army":false, "fleet":true},
      {"from":["WAR", "LVN"], "army":true, "fleet":false},
      {"from":["ECH", "LON"], "army":false, "fleet":true},
      {"from":["NTS", "LON"], "army":false, "fleet":true},
      {"from":["WAL", "LON"], "army":true, "fleet":true},
      {"from":["YOR", "LON"], "army":true, "fleet":true},
      {"from":["BUR", "MAR"], "army":true, "fleet":false},
      {"from":["GAS", "MAR"], "army":true, "fleet":false},
      {"from":["GOL", "MAR"], "army":false, "fleet":true},
      {"from":["PIE", "MAR"], "army":true, "fleet":true},
      {"from":["SPA", "MAR"], "army":true, "fleet":false},
      {"from":["BRE", "MAO"], "army":false, "fleet":true},
      {"from":["ECH", "MAO"], "army":false, "fleet":true},
      {"from":["GAS", "MAO"], "army":false, "fleet":true},
      {"from":["IRI", "MAO"], "army":false, "fleet":true},
      {"from":["NAO", "MAO"], "army":false, "fleet":true},
      {"from":["NAF", "MAO"], "army":false, "fleet":true},
      {"from":["POR", "MAO"], "army":false, "fleet":true},
      {"from":["SPA-S", "MAO"], "army":false, "fleet":true},
      {"from":["SPA-N", "MAO"], "army":false, "fleet":true},
      {"from":["WME", "MAO"], "army":false, "fleet":true},
      {"from":["LVN", "MOS"], "army":true, "fleet":false},
      {"from":["SEV", "MOS"], "army":true, "fleet":false},
      {"from":["STP", "MOS"], "army":true, "fleet":false},
      {"from":["UKR", "MOS"], "army":true, "fleet":false},
      {"from":["WAR", "MOS"], "army":true, "fleet":false},
      {"from":["BER", "MUN"], "army":true, "fleet":false},
      {"from":["BOH", "MUN"], "army":true, "fleet":false},
      {"from":["BUR", "MUN"], "army":true, "fleet":false},
      {"from":["KIE", "MUN"], "army":true, "fleet":false},
      {"from":["RUH", "MUN"], "army":true, "fleet":false},
      {"from":["SIL", "MUN"], "army":true, "fleet":false},
      {"from":["TYR", "MUN"], "army":true, "fleet":false},
      {"from":["APU", "NAP"], "army":true, "fleet":true},
      {"from":["ION", "NAP"], "army":false, "fleet":true},
      {"from":["ROM", "NAP"], "army":true, "fleet":true},
      {"from":["TYS", "NAP"], "army":false, "fleet":true},
      {"from":["MAO", "NAF"], "army":false, "fleet":true},
      {"from":["TUN", "NAF"], "army":true, "fleet":true},
      {"from":["WME", "NAF"], "army":false, "fleet":true},
      {"from":["CLY", "NAO"], "army":false, "fleet":true},
      {"from":["IRI", "NAO"], "army":false, "fleet":true},
      {"from":["LVP", "NAO"], "army":false, "fleet":true},
      {"from":["MAO", "NAO"], "army":false, "fleet":true},
      {"from":["NWG", "NAO"], "army":false, "fleet":true},
      {"from":["BEL", "NTS"], "army":false, "fleet":true},
      {"from":["DEN", "NTS"], "army":false, "fleet":true},
      {"from":["EDI", "NTS"], "army":false, "fleet":true},
      {"from":["ECH", "NTS"], "army":false, "fleet":true},
      {"from":["HEL", "NTS"], "army":false, "fleet":true},
      {"from":["HOL", "NTS"], "army":false, "fleet":true},
      {"from":["LON", "NTS"], "army":false, "fleet":true},
      {"from":["NWY", "NTS"], "army":false, "fleet":true},
      {"from":["NWG", "NTS"], "army":false, "fleet":true},
      {"from":["SKA", "NTS"], "army":false, "fleet":true},
      {"from":["YOR", "NTS"], "army":false, "fleet":true},
      {"from":["BAR", "NWY"], "army":false, "fleet":true},
      {"from":["FIN", "NWY"], "army":true, "fleet":false},
      {"from":["NTS", "NWY"], "army":false, "fleet":true},
      {"from":["NWG", "NWY"], "army":false, "fleet":true},
      {"from":["SKA", "NWY"], "army":false, "fleet":true},
      {"from":["STP", "NWY"], "army":true, "fleet":false},
      {"from":["STP-N", "NWY"], "army":false, "fleet":true},
      {"from":["SWE", "NWY"], "army":true, "fleet":true},
      {"from":["BAR", "NWG"], "army":false, "fleet":true},
      {"from":["CLY", "NWG"], "army":false, "fleet":true},
      {"from":["EDI", "NWG"], "army":false, "fleet":true},
      {"from":["NAO", "NWG"], "army":false, "fleet":true},
      {"from":["NTS", "NWG"], "army":false, "fleet":true},
      {"from":["NWY", "NWG"], "army":false, "fleet":true},
      {"from":["BRE", "PAR"], "army":true, "fleet":false},
      {"from":["BUR", "PAR"], "army":true, "fleet":false},
      {"from":["GAS", "PAR"], "army":true, "fleet":false},
      {"from":["PIC", "PAR"], "army":true, "fleet":false},
      {"from":["BEL", "PIC"], "army":true, "fleet":true},
      {"from":["BRE", "PIC"], "army":true, "fleet":true},
      {"from":["BUR", "PIC"], "army":true, "fleet":false},
      {"from":["ECH", "PIC"], "army":false, "fleet":true},
      {"from":["PAR", "PIC"], "army":true, "fleet":false},
      {"from":["MAR", "PIE"], "army":true, "fleet":true},
      {"from":["TUS", "PIE"], "army":true, "fleet":true},
      {"from":["TYR", "PIE"], "army":true, "fleet":false},
      {"from":["VEN", "PIE"], "army":true, "fleet":false},
      {"from":["MAO", "POR"], "army":false, "fleet":true},
      {"from":["SPA", "POR"], "army":true, "fleet":false},
      {"from":["SPA-S", "POR"], "army":false, "fleet":true},
      {"from":["SPA-N", "POR"], "army":false, "fleet":true},
      {"from":["BAL", "PRU"], "army":false, "fleet":true},
      {"from":["BER", "PRU"], "army":false, "fleet":true},
      {"from":["LVN", "PRU"], "army":true, "fleet":true},
      {"from":["SIL", "PRU"], "army":true, "fleet":false},
      {"from":["WAR", "PRU"], "army":true, "fleet":false},
      {"from":["APU", "ROM"], "army":true, "fleet":false},
      {"from":["NAP", "ROM"], "army":true, "fleet":true},
      {"from":["TUS", "ROM"], "army":true, "fleet":true},
      {"from":["TYS", "ROM"], "army":false, "fleet":true},
      {"from":["VEN", "ROM"], "army":true, "fleet":false},
      {"from":["BEL", "RUH"], "army":true, "fleet":false},
      {"from":["BUR", "RUH"], "army":true, "fleet":false},
      {"from":["HOL", "RUH"], "army":true, "fleet":false},
      {"from":["KIE", "RUH"], "army":true, "fleet":false},
      {"from":["MUN", "RUH"], "army":true, "fleet":false},
      {"from":["BLA", "RUM"], "army":false, "fleet":true},
      {"from":["BUD", "RUM"], "army":true, "fleet":false},
      {"from":["BUL", "RUM"], "army":true, "fleet":false},
      {"from":["BUL-E", "RUM"], "army":false, "fleet":true},
      {"from":["GAL", "RUM"], "army":true, "fleet":false},
      {"from":["SER", "RUM"], "army":true, "fleet":false},
      {"from":["SEV", "RUM"], "army":true, "fleet":true},
      {"from":["UKR", "RUM"], "army":true, "fleet":false},
      {"from":["ALB", "SER"], "army":true, "fleet":false},
      {"from":["BUD", "SER"], "army":true, "fleet":false},
      {"from":["BUL", "SER"], "army":true, "fleet":false},
      {"from":["GRE", "SER"], "army":true, "fleet":false},
      {"from":["RUM", "SER"], "army":true, "fleet":false},
      {"from":["TRI", "SER"], "army":true, "fleet":false},
      {"from":["ARM", "SEV"], "army":true, "fleet":true},
      {"from":["BLA", "SEV"], "army":false, "fleet":true},
      {"from":["MOS", "SEV"], "army":true, "fleet":false},
      {"from":["RUM", "SEV"], "army":true, "fleet":true},
      {"from":["UKR", "SEV"], "army":true, "fleet":false},
      {"from":["BER", "SIL"], "army":true, "fleet":false},
      {"from":["BOH", "SIL"], "army":true, "fleet":false},
      {"from":["GAL", "SIL"], "army":true, "fleet":false},
      {"from":["MUN", "SIL"], "army":true, "fleet":false},
      {"from":["PRU", "SIL"], "army":true, "fleet":false},
      {"from":["WAR", "SIL"], "army":true, "fleet":false},
      {"from":["DEN", "SKA"], "army":false, "fleet":true},
      {"from":["NTS", "SKA"], "army":false, "fleet":true},
      {"from":["NWY", "SKA"], "army":false, "fleet":true},
      {"from":["SWE", "SKA"], "army":false, "fleet":true},
      {"from":["AEG", "SMY"], "army":false, "fleet":true},
      {"from":["ANK", "SMY"], "army":true, "fleet":false},
      {"from":["ARM", "SMY"], "army":true, "fleet":false},
      {"from":["CON", "SMY"], "army":true, "fleet":true},
      {"from":["EME", "SMY"], "army":false, "fleet":true},
      {"from":["SYR", "SMY"], "army":true, "fleet":true},
      {"from":["GAS", "SPA"], "army":true, "fleet":false},
      {"from":["MAR", "SPA"], "army":true, "fleet":false},
      {"from":["POR", "SPA"], "army":true, "fleet":false},
      {"from":["GAS", "SPA-N"], "army":false, "fleet":true},
      {"from":["MAO", "SPA-N"], "army":false, "fleet":true},
      {"from":["POR", "SPA-N"], "army":false, "fleet":true},
      {"from":["GOL", "SPA-S"], "army":false, "fleet":true},
      {"from":["MAR", "SPA-S"], "army":false, "fleet":true},
      {"from":["POR", "SPA-S"], "army":false, "fleet":true},
      {"from":["WME", "SPA-S"], "army":false, "fleet":true},
      {"from":["FIN", "STP"], "army":true, "fleet":false},
      {"from":["LVN", "STP"], "army":true, "fleet":false},
      {"from":["MOS", "STP"], "army":true, "fleet":false},
      {"from":["NWY", "STP"], "army":true, "fleet":false},
      {"from":["BAR", "STP-N"], "army":false, "fleet":true},
      {"from":["NWY", "STP-N"], "army":false, "fleet":true},
      {"from":["FIN", "STP-S"], "army":false, "fleet":true},
      {"from":["GOB", "STP-S"], "army":false, "fleet":true},
      {"from":["LVN", "STP-S"], "army":false, "fleet":true},
      {"from":["BAL", "SWE"], "army":false, "fleet":true},
      {"from":["DEN", "SWE"], "army":true, "fleet":true},
      {"from":["FIN", "SWE"], "army":true, "fleet":true},
      {"from":["GOB", "SWE"], "army":false, "fleet":true},
      {"from":["NWY", "SWE"], "army":true, "fleet":true},
      {"from":["SKA", "SWE"], "army":false, "fleet":true},
      {"from":["ARM", "SYR"], "army":true, "fleet":false},
      {"from":["EME", "SYR"], "army":false, "fleet":true},
      {"from":["SMY", "SYR"], "army":true, "fleet":true},
      {"from":["ADR", "TRI"], "army":false, "fleet":true},
      {"from":["ALB", "TRI"], "army":true, "fleet":true},
      {"from":["BUD", "TRI"], "army":true, "fleet":false},
      {"from":["SER", "TRI"], "army":true, "fleet":false},
      {"from":["TYR", "TRI"], "army":true, "fleet":false},
      {"from":["VEN", "TRI"], "army":true, "fleet":true},
      {"from":["VIE", "TRI"], "army":true, "fleet":false},
      {"from":["ION", "TUN"], "army":false, "fleet":true},
      {"from":["NAF", "TUN"], "army":true, "fleet":true},
      {"from":["TYS", "TUN"], "army":false, "fleet":true},
      {"from":["WME", "TUN"], "army":false, "fleet":true},
      {"from":["PIE", "TUS"], "army":true, "fleet":true},
      {"from":["ROM", "TUS"], "army":true, "fleet":true},
      {"from":["TYS", "TUS"], "army":false, "fleet":true},
      {"from":["VEN", "TUS"], "army":true, "fleet":false},
      {"from":["BOH", "TYR"], "army":true, "fleet":false},
      {"from":["MUN", "TYR"], "army":true, "fleet":false},
      {"from":["PIE", "TYR"], "army":true, "fleet":false},
      {"from":["TRI", "TYR"], "army":true, "fleet":false},
      {"from":["VEN", "TYR"], "army":true, "fleet":false},
      {"from":["VIE", "TYR"], "army":true, "fleet":false},
      {"from":["GOL", "TYS"], "army":false, "fleet":true},
      {"from":["ION", "TYS"], "army":false, "fleet":true},
      {"from":["NAP", "TYS"], "army":false, "fleet":true},
      {"from":["ROM", "TYS"], "army":false, "fleet":true},
      {"from":["TUN", "TYS"], "army":false, "fleet":true},
      {"from":["TUS", "TYS"], "army":false, "fleet":true},
      {"from":["WME", "TYS"], "army":false, "fleet":true},
      {"from":["GAL", "UKR"], "army":true, "fleet":false},
      {"from":["MOS", "UKR"], "army":true, "fleet":false},
      {"from":["RUM", "UKR"], "army":true, "fleet":false},
      {"from":["SEV", "UKR"], "army":true, "fleet":false},
      {"from":["WAR", "UKR"], "army":true, "fleet":false},
      {"from":["ADR", "VEN"], "army":false, "fleet":true},
      {"from":["APU", "VEN"], "army":true, "fleet":true},
      {"from":["PIE", "VEN"], "army":true, "fleet":false},
      {"from":["ROM", "VEN"], "army":true, "fleet":false},
      {"from":["TRI", "VEN"], "army":true, "fleet":true},
      {"from":["TUS", "VEN"], "army":true, "fleet":false},
      {"from":["TYR", "VEN"], "army":true, "fleet":false},
      {"from":["BOH", "VIE"], "army":true, "fleet":false},
      {"from":["BUD", "VIE"], "army":true, "fleet":false},
      {"from":["GAL", "VIE"], "army":true, "fleet":false},
      {"from":["TRI", "VIE"], "army":true, "fleet":false},
      {"from":["TYR", "VIE"], "army":true, "fleet":false},
      {"from":["ECH", "WAL"], "army":false, "fleet":true},
      {"from":["IRI", "WAL"], "army":false, "fleet":true},
      {"from":["LVP", "WAL"], "army":true, "fleet":true},
      {"from":["LON", "WAL"], "army":true, "fleet":true},
      {"from":["YOR", "WAL"], "army":true, "fleet":false},
      {"from":["GAL", "WAR"], "army":true, "fleet":false},
      {"from":["LVN", "WAR"], "army":true, "fleet":false},
      {"from":["MOS", "WAR"], "army":true, "fleet":false},
      {"from":["PRU", "WAR"], "army":true, "fleet":false},
      {"from":["SIL", "WAR"], "army":true, "fleet":false},
      {"from":["UKR", "WAR"], "army":true, "fleet":false},
      {"from":["GOL", "WME"], "army":false, "fleet":true},
      {"from":["MAO", "WME"], "army":false, "fleet":true},
      {"from":["NAF", "WME"], "army":false, "fleet":true},
      {"from":["SPA-S", "WME"], "army":false, "fleet":true},
      {"from":["TUN", "WME"], "army":false, "fleet":true},
      {"from":["TYS", "WME"], "army":false, "fleet":true},
      {"from":["EDI", "YOR"], "army":true, "fleet":true},
      {"from":["LVP", "YOR"], "army":true, "fleet":false},
      {"from":["LON", "YOR"], "army":true, "fleet":true},
      {"from":["NTS", "YOR"], "army":false, "fleet":true},
      {"from":["MAR", "SPA-S"], "army":false, "fleet":true},
      {"from":["WAL", "YOR"], "army":true, "fleet":false}
    ];

    _.each(connections, function(doc) {
      console.log(Diplomacy.Map.addProvinceConnection(doc.from, doc.fleet, doc.army));
    });

  }
});
