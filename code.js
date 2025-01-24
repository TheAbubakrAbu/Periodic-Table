// This app was developed by Abubakr Elmallah in Spring 2022.
// Credit for "assets/ButtonClick1.mp3" goes to ZAPSPLAT and its creators (https://www.zapsplat.com/sound-effect-category/button-clicks/).

// Global:
var ElementsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

var AtomicNumberList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118];
var ElementNameList = ["Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidum", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bogrium", "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganesson"];
var ElementSymbolList = ["H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"];
var PhaseList = ["Gas", "Gas", "Solid", "Solid", "Solid", "Solid", "Gas", "Gas", "Gas", "Gas", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Gas", "Gas", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Liquid", "Gas", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Gas", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Liquid", "Solid", "Solid", "Solid", "Solid", "Solid", "Gas", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Solid", "Expected to be Solid", "Expected to be Solid", "Expected to be Solid", "Expected to be Solid", "Expected to be Solid", "Expected to be Solid", "Expected to be Solid", "Expected to be Solid", "Expected to be Solid"];
var TypeList = ["Non-metal", "Non-metal", "Metal", "Metal", "Semi-metal", "Non-metal", "Non-metal", "Non-metal", "Non-metal", "Non-metal", "Metal", "Metal", "Metal", "Semi-metal", "Non-metal", "Non-metal", "Non-metal", "Non-metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Semi-metal", "Semi-metal", "Non-metal", "Non-metal", "Non-metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Semi-metal", "Semi-metal", "Non-metal", "Non-metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Semi-metal", "Non-metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Metal", "Unknown", "Non-metal"];
var PeriodList = [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
var GroupList = ["No definitive group", "Noble Gas", "Alkali Metals", "Alkali Earth Metals", "Metalloids", "Non-metal", "Non-metal", "Non-metal", "Halogens", "Noble Gas", "Alkali Metals", "Alkali Earth Metals", "Poor Metals", "Metalloids", "Non-metal", "Non-metal", "Halogens", "Noble Gas", "Alkali Metals", "Alkali Earth Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Poor Metals", "Poor Metals", "Metalloids", "Non-metal", "Halogens", "Noble Gas", "Alkali Metals", "Alkali Earth Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Poor Metals", "Poor Metals", "Poor Metals", "Metalloids", "Halogens", "Noble Gas", "Alkali Metals", "Alkali Earth Metals", "Rare Earth Metals", "Rare Earth Metals", "Rare Earth Metals", "Rare Earth Metals", "Rare Earth Metals", "Rare Earth Metals", "Rare Earth Metals", "Rare Earth Metals", "Rare Earth Metals", "Rare Earth Metals", "Rare Earth Metals", "Rare Earth Metals", "Rare Earth Metals", "Rare Earth Metals", "Rare Earth Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Transition Metals", "Poor Metals", "Poor Metals", "Poor Metals", "Poor Metals", "Halogens", "Noble Gas", "Alkali Metals", "Alkali Earth Metals", "Actinide Metals", "Actinide Metals", "Actinide Metals", "Actinide Metals", "Actinide Metals", "Actinide Metals", "Actinide Metals", "Actinide Metals", "Actinide Metals", "Actinide Metals", "Actinide Metals", "Actinide Metals", "Actinide Metals", "Actinide Metals", "Actinide Metals", "Superheavy Elements", "Superheavy Elements", "Superheavy Elements", "Superheavy Elements", "Superheavy Elements", "Superheavy Elements", "Superheavy Elements", "Superheavy Elements", "Superheavy Elements", "Superheavy Elements", "Superheavy Elements", "Superheavy Elements", "Superheavy Elements", "Superheavy Elements", "Superheavy Elements"];
var WeightList = [1.00794, 4.002602, 6.941, 9.1021831, 10.811, 12.0107, 14.00674, 15.9994, 18.9984032, 20.1797, 22.9897693, 24.305, 26.9815385, 28.0855, 30.973762, 32.066, 35.4527, 39.948, 39.0983, 40.078, 44.955908, 47.867, 50.9415, 51.9961, 54.938044, 55.845, 58.933194, 58.6934, 63.546, 65.38, 69.723, 72.63, 74.921595, 78.971, 79.904, 83.798, 85.4678, 87.62, 88.90584, 91.224, 92.90637, 95.95, 98, 101.07, 102.9055, 106.42, 107.8682, 112.414, 114.818, 118.71, 121.76, 127.6, 126.90447, 131.293, 132.905452, 137.327, 138.90547, 140.116, 140.90766, 144.242, 145, 150.36, 151.964, 157.25, 158.92535, 162.5, 164.93033, 167.259, 168.93422, 173.045, 174.9668, 178.49, 180.94788, 183.84, 186.207, 190.23, 192.217, 195.084, 196.966569, 200.592, 204.3833, 207.2, 208.9804, 209, 210, 222, 223, 226, 227, 232.0377, 231.03588, 238.02891, 237, 244, 243, 247, 247, 251, 252, 257, 258, 259, 262, 263, 268, 271, 270, 270, 278, 281, 281, 285, 286, 289, 289, 293, 294, 294];
var DensityList = [0.00008988, 0.0001785, 0.534, 1.85, 2.37, 2.267, 0.0012506, 0.001429, 0.001696, 0.0008999, 0.97, 1.74, 2.7, 2.3296, 1.82, 2.067, 0.003214, 0.0017837, 0.89, 1.54, 2.99, 4.5, 6, 7.15, 7.3, 7.874, 8.86, 8.912, 8.933, 7.134, 5.91, 5.323, 5.776, 4.809, 3.11, 0.003733, 1.53, 2.64, 4.47, 6.52, 8.57, 10.2, 11, 12.1, 12.4, 12, 10.501, 8.69, 7.31, 7.287, 6.685, 6.232, 4.93, 0.005887, 1.93, 3.62, 6.15, 6.77, 6.77, 7.01, 7.26, 7.52, 5.24, 7.9, 8.23, 8.55, 8.8, 9.07, 9.32, 7.9, 9.84, 13.3, 16.4, 19.3, 20.8, 22.57, 22.42, 21.46, 19.282, 13.5336, 11.8, 11.342, 9.807, 9.31, 7, 0.00973, "Unknown", 5, 10.07, 11.72, 15.37, 18.95, 20.25, 19.84, 13.79, 13.51, 14, "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown"];
var MeltingList = [-434.81, -458, 356.9, 2349, 3767, 6422, -346, -361.82, -363.32, -415.46, 208.04, 1202, 1220.581, 2577, 111.47, 239.38, -150.7, -308.83, 146.08, 1548, 2806, 3034, 3470, 3465, 2275, 2800, 2723, 2651, 1984.32, 787.15, 85.57, 1720.85, 1503, 428.9, 19, -251.25, 102.76, 1431, 2772, 3371, 4491, 4753, 3915, 4233, 3567, 2830.8, 1763.2, 609.93, 313.88, 449.47, 1167.13, 841.12, 236.7, -169.22, 83.19, 1341, 1684, 1468, 1708, 1870, 1908, 1965, 1512, 2395, 2473, 2574, 2685, 2784, 2813, 1506, 3025, 4051, 5463, 6192, 5767, 5491, 4435, 3215.1, 1947.52, -37.89, 579, 621.43, 520.52, 489, 576, -96, 81, 1292, 1924, 3182, 2862, 2075, 1191, 1184, 2149, 2453, 1922, 1652, 1580, 2781, 1521, 1520, 2961, "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown"];
var BoilingList = [-423.17, -452.07, 2448, 4480, 7232, 6917, -320.44, -297.31, -306.62, -410.94, 1621, 1994, 4566, 5909, 536.9, 832.28, -29.27, -302.53, 1398, 2703, 5137, 5949, 6165, 4840, 3742, 5182, 5301, 5275, 4644, 1655, 3999, 5131, 1137, 1265, 137.8, -243.8, 1270, 2520, 6053, 7968, 8571, 8382, 7709, 7502, 6683, 5365, 3924, 1413, 3762, 4715, 2889, 1810, 364, -162.62, 1240, 3447, 6267, 6195, 6368, 5565, 5432, 3261, 2784, 5923, 5846, 4653, 4892, 5194, 3542, 2185, 6156, 8317, 9856, 10031, 10105, 9054, 8002, 6917, 5173, 674.11, 2683, 3180, 2847, 1764, "Unknown", -79.1, "Unknown", 2084, 5788, 8650, "Unknown", 7468, 7065, 5842, 3652, 5600, "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown", "Unknown"];

function ButtonNavigation(Screen) {
  playSound("assets/ButtonClick1.mp3");
  setScreen(Screen + "Screen");
}

function ResetSearch(True) {
  for(var i = 1; i < 8; i++) {
    showElement("Unclickable" + i);
    setProperty("ElementButton" + i, "background-color", rgb(0, 0, 0));
    setText("ElementButton" + i, "");
  }
  True ? {} : setText("ElementSearch", "");
}

for(var i = 1; i < 4; i++) {
  onEvent("HomeButton" + i, "click", function() {ButtonNavigation("Home")});
  onEvent("SearchButton" + i, "click", function() {ButtonNavigation("Search")});
  i < 3 ? onEvent("InfoButton" + i, "click", function() {ButtonNavigation("Info")}) : {};
}

onEvent("InfoButton2", "click", function() {ResetSearch()});
onEvent("HomeButton3", "click", function() {ResetSearch()});

// Pages:
var PageNumber = 1;

function Page(Direction, Other) {
  playSound("assets/category_app/arcade_game_button_tap.mp3");
  var PageElementsList = [1, 21, 41, 61, 81, 101];
  var StartingElement;
  Direction == "Right" ? PageNumber++ : PageNumber--;
  for(var i = 1; i < 7; i++) {
    PageNumber == i ? StartingElement = PageElementsList[i - 1] : {};
  }
  
  function ShowButton(TheDirection) {
    hideElement(TheDirection + "Unclickable");
    setProperty(TheDirection + "Button", "background-color", rgb(255, 198, 16, 0.7));
    setProperty(TheDirection + "Button", "border-width", 0);
    setProperty(TheDirection + "Button", "icon-color", "black");
  }
  
  function HideButton(TheDirection) {
    showElement(TheDirection + "Unclickable");
    setProperty(TheDirection + "Button", "background-color", "black");
    setProperty(TheDirection + "Button", "border-width", 1);
    setProperty(TheDirection + "Button", "icon-color", rgb(255, 255, 255, 0.25));
  }
  
  if(PageNumber == (Direction == "Left" ? 1 : 6)) {
    HideButton(Direction);
    ShowButton(Other);
  } else {
    ShowButton(Direction);
    ShowButton(Other);
    showElement("Element19");
    showElement("ElementLabel19");
    showElement("Element20");
    showElement("ElementLabel20");
  }
  ElementsList = [];
  var k = StartingElement;
  for(var j = 1; j < (PageNumber == 6 ? 19 : 21); j++) {
    setText("Element" + j, ElementSymbolList[k - 1]);
    setText("ElementLabel" + j, k);
    appendItem(ElementsList, k);
    k++;
  }
  if(PageNumber == 6) {
    hideElement("Element19");
    hideElement("Element20");
    hideElement("ElementLabel19");
    hideElement("ElementLabel20");
  }
}

onEvent("RightButton", "click", function() {Page("Right", "Left")});
onEvent("LeftButton", "click", function() {Page("Left", "Right")});

// Viewing Elements:
var ChosenElement;
var PreviousElement;
var ElementDropdownList = ["Element Dropdown - Choose Element", "1 - Hydrogen (H)", "2 - Helium (He)", "3 - Lithium (Li)", "4 - Beryllium (Be)", "5 - Boron (B)", "6 - Carbon (C)", "7 - Nitrogen (N)", "8 - Oxygen (O)", "9 - Fluorine (F)", "10 - Neon (Ne)", "11 - Sodium (Na)", "12 - Magnesium (Mg)", "13 - Aluminum (Al)", "14 - Silicon (Si)", "15 - Phosphorus (P)", "16 - Sulfur (S)", "17 - Chlorine (Cl)", "18 - Argon (Ar)", "19 - Potassium (K)", "20 - Calcium (Ca)", "21 - Scandium (Sc)", "22 - Titanium (Ti)", "23 - Vanadium (V)", "24 - Chromium (Cr)", "25 - Manganese (Mn)", "26 - Iron (Fe)", "27 - Cobalt (Co)", "28 - Nickel (Ni)", "29 - Copper (Cu)", "30 - Zinc (Zn)", "31 - Gallium (Ga)", "32 - Germanium (Ge)", "33 - Arsenic (As)", "34 - Selenium (Se)", "35 - Bromine (Br)", "36 - Krypton (Kr)", "37 - Rubidum (Rb)", "38 - Strontium (Sr)", "39 - Yttrium (Y)", "40 - Zirconium (Zr)", "41 - Niobium (Nb)", "42 - Molybdenum (Mo)", "43 - Technetium (Tc)", "44 - Ruthenium (Ru)", "45 - Rhodium (Rh)", "46 - Palladium (Pd)", "47 - Silver (Ag)", "48 - Cadmium (Cd)", "49 - Indium (In)", "50 - Tin (Sn)", "51 - Antimony (Sb)", "52 - Tellurium (Te)", "53 - Iodine (I)", "54 - Xenon (Xe)", "55 - Cesium (Cs)", "56 - Barium (Ba)", "57 - Lanthanum (La)", "58 - Cerium (Ce)", "59 - Praseodymium (Pr)", "60 - Neodymium (Nd)", "61 - Promethium (Pm)", "62 - Samarium (Sm)", "63 - Europium (Eu)", "64 - Gadolinium (Gd)", "65 - Terbium (Tb)", "66 - Dysprosium (Dy)", "67 - Holmium (Ho)", "68 - Erbium (Er)", "69 - Thulium (Tm)", "70 - Ytterbium (Yb)", "71 - Lutetium (Lu)", "72 - Hafnium (Hf)", "73 - Tantalum (Ta)", "74 - Tungsten (W)", "75 - Rhenium (Re)", "76 - Osmium (Os)", "77 - Iridium (Ir)", "78 - Platinum (Pt)", "79 - Gold (Au)", "80 - Mercury (Hg)", "81 - Thallium (Tl)", "82 - Lead (Pb)", "83 - Bismuth (Bi)", "84 - Polonium (Po)", "85 - Astatine (At)", "86 - Radon (Rn)", "87 - Francium (Fr)", "88 - Radium (Ra)", "89 - Actinium (Ac)", "90 - Thorium (Th)", "91 - Protactinium (Pa)", "92 - Uranium (U)", "93 - Neptunium (Np)", "94 - Plutonium (Pu)", "95 - Americium (Am)", "96 - Curium (Cm)", "97 - Berkelium (Bk)", "98 - Californium (Cf)", "99 - Einsteinium (Es)", "100 - Fermium (Fm)", "101 - Mendelevium (Md)", "102 - Nobelium (No)", "103 - Lawrencium (Lr)", "104 - Rutherfordium (Rf)", "105 - Dubnium (Db)", "106 - Seaborgium (Sg)", "107 - Bogrium (Bh)", "108 - Hassium (Hs)", "109 - Meitnerium (Mt)", "110 - Darmstadtium (Ds)", "111 - Roentgenium (Rg)", "112 - Copernicium (Cn)", "113 - Nihonium (Nh)", "114 - Flerovium (Fl)", "115 - Moscovium (Mc)", "116 - Livermorium (Lv)", "117 - Tennessine (Ts)", "118 - Oganesson (Og)"];
var ElementIndex;
var AlphabetList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var NumbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var Symbol = false;

function ElementChosen(Type, ButtonNumber, SearchChange, SearchType1, SearchOtherType) {
  var TextInput = getText("ElementSearch").toUpperCase();
  var ResultsRow = 1;
  var Duplicates = false;
  
  function Valid(Word, Type) {
    var Counter = 0;
    for(var i3 = 0; i3 < Word.length;) {
      Counter = 0;
      for(var i4 = 0; i4 < (Type == "Letters" ? AlphabetList.length : NumbersList.length); i4++) {
        Word[i3].toUpperCase() == (Type == "Letters" ? AlphabetList : NumbersList)[i4] ? Counter++ : {};
      }
      if(Counter == 1) {
        i3++;
      } else {
        return false;
      }
    }
    return true;
  }
  
  function NotDuplicates(Variable) {
    Duplicates = false;
    for(var j = 1; j < 8; j++) {
      getText("ElementButton" + j) == AtomicNumberList[Variable] + " - " + ElementNameList[Variable] + " (" + ElementSymbolList[Variable] + ")" ? Duplicates = true : {};
    }
    if(!Duplicates) {
      hideElement("Unclickable" + ResultsRow);
      setProperty("ElementButton" + ResultsRow, "background-color", "black");
      setText("ElementButton" + ResultsRow, AtomicNumberList[Variable] + " - " + ElementNameList[Variable] + " (" + ElementSymbolList[Variable] + ")");
      ResultsRow++;
    }
  }

  function ElementSearch(List) {
    var Complete = false;
    List == this["Element" + SearchType1 + "List"] ? ResultsRow = 1 : {};
    for(var i1 = 0; i1 < 118; i1++) { // Equal
      List[i1] == TextInput ? NotDuplicates(i1) : {};
    }
    ResultsRow == 8 ? Complete == true : {};
    if(!Complete && TextInput.length >= 2) {
      for(var i2 = 0; i2 < 118; i2++) { // First two letters
        List[i2].substring(0, 2).toUpperCase() == TextInput.substring(0, 2) && ResultsRow < 8 ? NotDuplicates(i2) : {};
      }
    }
    ResultsRow == 8 ? Complete == true : {};
    if(!Complete && TextInput.length >= 1) { // First letter (Single Letter)
      for(var i3 = 0; i3 < 118; i3++) {
        List[i3][0].toUpperCase() == TextInput && ResultsRow < 8 ? NotDuplicates(i3) : {};
      }
    }
    ResultsRow == 8 ? Complete == true : {};
    if(!Complete && TextInput.length >= 1) { // First letter (Double Letter)
      for(var i4 = 0; i4 < 118; i4++) {
        List[i4][0].toUpperCase() == TextInput[0] && ResultsRow < 8 ? NotDuplicates(i4) : {};
      }
    }
    ResultsRow == 8 ? Complete == true : {};
    if(!Complete && TextInput.length > 2) { // Two Letters
      for(var i5 = 0; i5 < 118; i5++) {
        for(var i6 = 0; i6 < TextInput.length; i6++) {
          List[i5].substring(i6, i6 + 2).toUpperCase() == TextInput.substring(i6, i6 + 2) && ResultsRow < 8 ? NotDuplicates(i5) : {};
        }
      }
    }
    ResultsRow == 8 ? Complete = true : {};
    if(!Complete) {
      for(var i7 = 0; i7 < 118; i7++) { // Includes
        for(var i8 = 0; i8 < List[i7].length; i8++) {
          TextInput.includes(List[i7].toUpperCase()[i8]) && ResultsRow < 8 ? NotDuplicates(i7) : {};
        }
      }
    }
  }
  if(Type == "Normal") {
    setScreen("ElementScreen");
    PreviousElement = ChosenElement;
    if(ButtonNumber == "Random") {
      playSound("assets/category_app/modern_ui_sound.mp3");
      ChosenElement = randomNumber(1, 118);
      while(PreviousElement == ChosenElement) {
        ChosenElement = randomNumber(1, 118);
      }
    } else {
      playSound("assets/ButtonClick1.mp3");
      ChosenElement = ElementsList[ButtonNumber - 1];
    }
    setText("SymbolLabel", ElementSymbolList[ChosenElement - 1]);
    setText("NameLabel", ElementNameList[ChosenElement - 1]);
    setText("AtomicNumberLabel", "Atomic Number: " + AtomicNumberList[ChosenElement - 1]);
    setText("PeriodNumberLabel", "Period Number: " + PeriodList[ChosenElement - 1]);
    setText("GroupLabel", "Group: " + GroupList[ChosenElement - 1]);
    PhaseList[ChosenElement - 1] == "Expected to be Solid" ? setText("PhaseLabel", "Phase at Room Temperature: Solid") : setText("PhaseLabel", "Phase at Room Temperature: " + PhaseList[ChosenElement - 1]);
    setText("TypeLabel", "Type of Element: " + TypeList[ChosenElement - 1]);
    setText("WeightLabel", "Weight: " + WeightList[ChosenElement - 1] + " amu");
    DensityList[ChosenElement - 1] == "Unknown" ? setText("DensityLabel", "Density: " + DensityList[ChosenElement - 1]) : setText("DensityLabel", "Density: " + DensityList[ChosenElement - 1] + " g/L");
    MeltingList[ChosenElement - 1] == "Unknown" ? setText("MeltingLabel", "Melting Point: " + MeltingList[ChosenElement - 1]) : setText("MeltingLabel", "Melting Point: " + MeltingList[ChosenElement - 1] + "°F");
    BoilingList[ChosenElement - 1] == "Unknown" ? setText("BoilingLabel", "Boiling Point: " + BoilingList[ChosenElement - 1]) : setText("BoilingLabel", "Boiling Point: " + BoilingList[ChosenElement - 1] + "°F");
  } else if(Type == "Dropdown") {
    if(getText("ElementDropdown") !== "Choose Element") {
      for(var i = 0; i < getText("ElementDropdown").length; i++) {
        getText("ElementDropdown").substring(i, i + 1) == "(" ? ChosenElement = getText("ElementDropdown").substring(i + 1, getText("ElementDropdown").length - 1) : {}; 
      }
      for(var j = 0; j < 118; j++) {
        ElementSymbolList[j] == ChosenElement ? ElementIndex = j : {};
      }
      playSound("assets/ButtonClick1.mp3");
      setScreen("ElementScreen");
      setText("SymbolLabel", ElementSymbolList[ElementIndex]);
      setText("NameLabel", ElementNameList[ElementIndex]);
      setText("AtomicNumberLabel", "Atomic Number: " + AtomicNumberList[ElementIndex]);
      setText("PeriodNumberLabel", "Period Number: " + PeriodList[ElementIndex]);
      setText("GroupLabel", "Group: " + GroupList[ElementIndex]);
      PhaseList[ElementIndex] == "Expected to be Solid" ? setText("PhaseLabel", "Phase at Room Temperature: " + "Solid") : setText("PhaseLabel", "Phase at Room Temperature: " + PhaseList[ElementIndex]);
      setText("TypeLabel", "Type of Element: " + TypeList[ElementIndex]);
      setText("WeightLabel", "Weight: " + WeightList[ElementIndex] + " amu");
      DensityList[ElementIndex] == "Unknown" ? setText("DensityLabel", "Density: " + DensityList[ElementIndex]) : setText("DensityLabel", "Density: " + DensityList[ElementIndex] + " g/L");
      MeltingList[ElementIndex] == "Unknown" ? setText("MeltingLabel", "Melting Point: " + MeltingList[ElementIndex]) : setText("MeltingLabel", "Melting Point: " + MeltingList[ElementIndex] + "°F");
      BoilingList[ElementIndex] == "Unknown" ? setText("BoilingLabel", "Boiling Point: " + BoilingList[ElementIndex]) : setText("BoilingLabel", "Boiling Point: " + BoilingList[ElementIndex] + "°F");
      
      setProperty("ElementDropdown", "options", ["Choose Element"]);
      setProperty("ElementDropdown", "options", ElementDropdownList);
    }
  } else if(Type == "Search") {
    var SearchType2;
    playSound("assets/ButtonClick1.mp3");
    if(ButtonNumber !== undefined) {
      for(var m = 0; m < getText("ElementButton" + ButtonNumber).length; m++) {
        getText("ElementButton" + ButtonNumber).substring(m, m + 1) == "(" ? ChosenElement = getText("ElementButton" + ButtonNumber).substring(m + 1, getText("ElementButton" + ButtonNumber).length - 1) : {}; 
      }
      for(var n = 0; n < 118; n++) {
        ElementSymbolList[n] == ChosenElement ? ElementIndex = n : {};
      }
      setScreen("ElementScreen");
      setText("SymbolLabel", ElementSymbolList[ElementIndex]);
      setText("NameLabel", ElementNameList[ElementIndex]);
      setText("AtomicNumberLabel", "Atomic Number: " + AtomicNumberList[ElementIndex]);
      setText("PeriodNumberLabel", "Period Number: " + PeriodList[ElementIndex]);
      setText("GroupLabel", "Group: " + GroupList[ElementIndex]);
      PhaseList[ElementIndex] == "Expected to be Solid" ? setText("PhaseLabel", "Phase at Room Temperature: " + "Solid") : setText("PhaseLabel", "Phase at Room Temperature: " + PhaseList[ElementIndex]);
      setText("TypeLabel", "Type of Element: " + TypeList[ElementIndex]);
      setText("WeightLabel", "Weight: " + WeightList[ElementIndex] + " amu");
      DensityList[ElementIndex] == "Unknown" ? setText("DensityLabel", "Density: " + DensityList[ElementIndex]) : setText("DensityLabel", "Density: " + DensityList[ElementIndex] + " g/L");
      MeltingList[ElementIndex] == "Unknown" ? setText("MeltingLabel", "Melting Point: " + MeltingList[ElementIndex]) : setText("MeltingLabel", "Melting Point: " + MeltingList[ElementIndex] + "°F");
      BoilingList[ElementIndex] == "Unknown" ? setText("BoilingLabel", "Boiling Point: " + BoilingList[ElementIndex]) : setText("BoilingLabel", "Boiling Point: " + BoilingList[ElementIndex] + "°F");
      
      setProperty("ElementDropdown", "options", ["Choose Element"]);
      setProperty("ElementDropdown", "options", ElementDropdownList);
      ResetSearch(true);
      setText("ElementSearch", "");
    } else if(SearchChange) {
      setProperty(SearchType1 + "Button", "background-color", rgb(255, 198, 16, 0.75));
      setProperty(SearchType1 + "Button", "text-color", rgb(0, 0, 0));
      setProperty(SearchType1 + "Button", "border-width", 0);
      setProperty(SearchOtherType + "Button", "background-color", "black");
      setProperty(SearchOtherType + "Button", "text-color", rgb(255, 255, 255));
      setProperty(SearchOtherType + "Button", "border-width", 1);
      setProperty("ElementSearch", "placeholder", "Search Element" + " " + SearchType1 + " " + "or Atomic Number");
      ResetSearch(true);
      if(getText("ElementSearch") !== "") {
        ElementSearch(this["Element" + SearchType1 + "List"]);
      }
    } else {
      if(Valid(TextInput, "Letters")) {
        SearchType2 = "Element Name";
      } else if(Valid(TextInput, "Numbers")) {
        SearchType2 = "Atomic Number";
      } else {
        hideElement("ElementSearch");
        showElement("UnclickableSearch");
        setTimeout(function() {
          showElement("ElementSearch");
          hideElement("UnclickableSearch");
        }, 750);
        TextInput = TextInput.substring(0, TextInput.length - 1);
        setText("ElementSearch", getText("ElementSearch").substring(0, getText("ElementSearch").length - 1));
        Valid(TextInput, "Letters") ? SearchType2 = "Element Name" : {};
        Valid(TextInput, "Numbers") ? SearchType2 = "Atomic Number" : {};
      }
      ResetSearch(true);
      if(TextInput == "") {
        ResetSearch(true);
      } else {
        SearchType2 == "Element Name" ? ElementSearch(!Symbol ? ElementNameList : ElementSymbolList) : {};
        SearchType2 == "Atomic Number" ? ElementSearch(AtomicNumberList) : {};
      }
    }
  }
}

onEvent("Element1", "click", function() {ElementChosen("Normal", 1)});
onEvent("Element2", "click", function() {ElementChosen("Normal", 2)});
onEvent("Element3", "click", function() {ElementChosen("Normal", 3)});
onEvent("Element4", "click", function() {ElementChosen("Normal", 4)});
onEvent("Element5", "click", function() {ElementChosen("Normal", 5)});
onEvent("Element6", "click", function() {ElementChosen("Normal", 6)});
onEvent("Element7", "click", function() {ElementChosen("Normal", 7)});
onEvent("Element8", "click", function() {ElementChosen("Normal", 8)});
onEvent("Element9", "click", function() {ElementChosen("Normal", 9)});
onEvent("Element10", "click", function() {ElementChosen("Normal", 10)});
onEvent("Element11", "click", function() {ElementChosen("Normal", 11)});
onEvent("Element12", "click", function() {ElementChosen("Normal", 12)});
onEvent("Element13", "click", function() {ElementChosen("Normal", 13)});
onEvent("Element14", "click", function() {ElementChosen("Normal", 14)});
onEvent("Element15", "click", function() {ElementChosen("Normal", 15)});
onEvent("Element16", "click", function() {ElementChosen("Normal", 16)});
onEvent("Element17", "click", function() {ElementChosen("Normal", 17)});
onEvent("Element18", "click", function() {ElementChosen("Normal", 18)});
onEvent("Element19", "click", function() {ElementChosen("Normal", 19)});
onEvent("Element20", "click", function() {ElementChosen("Normal", 20)});
onEvent("RandomButton", "click", function() {ElementChosen("Normal", "Random")});

// Search Screen:
onEvent("ElementDropdown", "input", function() {ElementChosen("Dropdown")});
onEvent("ElementDropdown", "change", function() {ResetSearch()});

onEvent("NameButton", "click", function() {
  playSound("assets/ButtonClick1.mp3");
  Symbol = false;
  ElementChosen("Search", undefined, true, "Name", "Symbol");
});

onEvent("SymbolButton", "click", function() {
  playSound("assets/ButtonClick1.mp3");
  Symbol = true;
  ElementChosen("Search", undefined, true, "Symbol", "Name");
});

onEvent("ElementSearch", "input", function() {ElementChosen("Search")});
onEvent("ElementButton1", "click", function() {ElementChosen("Search", "1")});
onEvent("ElementButton2", "click", function() {ElementChosen("Search", "2")});
onEvent("ElementButton3", "click", function() {ElementChosen("Search", "3")});
onEvent("ElementButton4", "click", function() {ElementChosen("Search", "4")});
onEvent("ElementButton5", "click", function() {ElementChosen("Search", "5")});
onEvent("ElementButton6", "click", function() {ElementChosen("Search", "6")});
onEvent("ElementButton7", "click", function() {ElementChosen("Search", "7")});

// Info Screen:
onEvent("PeriodicTableButton", "click", function() {
  playSound("assets/ButtonClick1.mp3");
  open("https://ptable.com/#Properties");
});