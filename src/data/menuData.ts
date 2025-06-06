import type { IMenuCategory } from "../models/IMenu";

export const menuData: IMenuCategory[] = [
  {
    type: "food",
    title: "Snacks",
    items: [
      {
        name: "Chark",
        description: "delikatessbricka med yuzugranité och kryddig batakpeppar",
        price: "185",
      },
      {
        name: "Ost",
        description: "utvald ostbricka med smakrika ostar från lokala gårdar",
        price: "175",
      },
      {
        name: "Boquerones",
        description: "marinerade sardeller med chili och extra jungfruolivolja",
        price: "85",
      },
      {
        name: "Surdegsfriterad broccolini",
        description: "med sjögräsmajonnäs & citron",
        price: "105",
      },
      {
        name: "Friterad potatis",
        description: "med grönkålsskott & örtmajonäs",
        price: "145",
      },
      {
        name: "Olika oliver",
        description: "marinerade oliver med citron och rosmarin",
        price: "75",
      },
      {
        name: "Grillade räkor",
        description: "med vitlök och chili",
        price: "155",
      },
      {
        name: "Friterade kronärtskockor",
        description: "med citronaioli",
        price: "120",
      },
    ],
  },
  {
    type: "food",
    title: "Pizza",
    items: [
      {
        name: "Margherita",
        description: "tomatsås, mozzarella & basilika",
        price: "145",
      },
      {
        name: "Funghi",
        description: "svamp, mozzarella, vitlök & persilja",
        price: "165",
      },
      {
        name: "Diavola",
        description: "salami, chili, tomatsås & mozzarella",
        price: "175",
      },
      {
        name: "Quattro Formaggi",
        description: "fyra sorters ost",
        price: "185",
      },
      {
        name: "Prosciutto e Rucola",
        description: "parmaskinka, ruccola & parmesan",
        price: "195",
      },
      {
        name: "Capricciosa",
        description: "skinka, svamp, kronärtskocka & oliver",
        price: "185",
      },
      {
        name: "Vegetariana",
        description: "grillade grönsaker och mozzarella",
        price: "165",
      },
    ],
  },
  {
    type: "food",
    title: "Pasta",
    items: [
      { name: "Tagliatelle", description: "med tryffel & svamp", price: "165" },
      {
        name: "Spaghetti alla Carbonara",
        description: "krämig sås med pancetta & pecorino",
        price: "155",
      },
      {
        name: "Penne Arrabbiata",
        description: "med chili & tomat",
        price: "145",
      },
      {
        name: "Lasagne al forno",
        description: "klassisk lasagne med béchamelsås",
        price: "175",
      },
      {
        name: "Ravioli Ricotta e Spenaci",
        description:
          "fylld med ricotta och spenat, serveras med smör och salvia",
        price: "185",
      },
      {
        name: "Linguine alle Vongole",
        description: "med färska vongole musslor och vitlök",
        price: "195",
      },
    ],
  },
  {
    type: "food",
    title: "Sweets",
    items: [
      {
        name: "Tiramisu",
        description: "klassisk italiensk dessert",
        price: "95",
      },
      { name: "Panna Cotta", description: "med bärkompott", price: "85" },
      { name: "Chokladfondant", description: "med vaniljglass", price: "105" },
      {
        name: "Gelato",
        description: "italiensk glass i olika smaker",
        price: "75",
      },
      {
        name: "Cannoli",
        description: "friterade rullar fyllda med söt ricotta",
        price: "90",
      },
      {
        name: "Affogato",
        description: "espresso över vaniljglass",
        price: "85",
      },
    ],
  },
  {
    type: "drink",
    title: "Bubbel",
    items: [
      {
        name: "Champagne",
        description: "Frisk och elegant bubbel från Frankrike",
        price: "295",
      },
      {
        name: "Prosecco",
        description: "Lätt och fruktig italiensk prosecco",
        price: "225",
      },
      {
        name: "Cava",
        description: "Spanskt mousserande vin med fina bubblor",
        price: "215",
      },
    ],
  },
  {
    type: "drink",
    title: "Red",
    items: [
      {
        name: "Cabernet Sauvignon",
        description: "Kraftfullt rödvin med toner av mörka bär",
        price: "245",
      },
      {
        name: "Merlot",
        description: "Mjuk och fruktig med inslag av plommon",
        price: "225",
      },
      {
        name: "Pinot Noir",
        description: "Lättare rödvin med körsbär och kryddighet",
        price: "275",
      },
    ],
  },
  {
    type: "drink",
    title: "White",
    items: [
      {
        name: "Chardonnay",
        description: "Smörig och fyllig med inslag av vanilj",
        price: "235",
      },
      {
        name: "Sauvignon Blanc",
        description: "Frisk och syrlig med citrus och örter",
        price: "220",
      },
      {
        name: "Riesling",
        description: "Sötare vitvin med blommiga toner",
        price: "210",
      },
    ],
  },
  {
    type: "drink",
    title: "Beers",
    items: [
      {
        name: "Ljus Lager",
        description: "Frisk och lätt öl med krispig smak",
        price: "85",
      },
      {
        name: "IPA",
        description: "Humlearomatisk och bitter med fruktiga toner",
        price: "95",
      },
      {
        name: "Stout",
        description: "Mörk öl med kaffe- och chokladtoner",
        price: "105",
      },
    ],
  },
  {
    type: "drink",
    title: "Cocktails",
    items: [
      {
        name: "Mojito",
        description: "Rom, lime, mynta och socker",
        price: "125",
      },
      {
        name: "Negroni",
        description: "Gin, Campari och söt vermouth",
        price: "135",
      },
      {
        name: "Cosmopolitan",
        description: "Vodka, tranbär och lime",
        price: "130",
      },
    ],
  },
];
