export type StockistEntry = {
  state: string;
  shops: string[];
};

export const stockists: StockistEntry[] = [
  { state: "Alabama", shops: ["Hello September"] },
  {
    state: "California",
    shops: [
      "Artisans & Agency",
      "Beacon Coffee & Pantry",
      "Chef Tanyas Kitchen",
      "JUNK",
      "The Wild Hare Haberdashery",
    ],
  },
  { state: "Connecticut", shops: ["Cinder + Salt"] },
  { state: "Illinois", shops: ["Alcea Gallery", "Stumble & Relish"] },
  {
    state: "Louisiana",
    shops: ["Cocodrie Curated Curiosities by Collette"],
  },
  { state: "Maine", shops: ["Attic & Eaves"] },
  {
    state: "Maryland",
    shops: [
      "Steadfast Supply",
      "Femme Fatale DC",
      "The Annapolis Pottery",
      "The Muse",
    ],
  },
  {
    state: "Massachusetts",
    shops: [
      "Cadeau Boutique",
      "E Drumm Designs",
      "Islays Terrace Studio & Shop",
    ],
  },
  { state: "Michigan", shops: ["The Artisans Bench"] },
  { state: "Minnesota", shops: ["Siiviis Gallery"] },
  { state: "Montana", shops: ["Yellowstone Art Museum"] },
  { state: "Nevada", shops: ["Save the Locals"] },
  { state: "New Jersey", shops: ["Casa Bizarro", "The Sunroom"] },
  {
    state: "New York",
    shops: [
      "A Shop of Things",
      "Batterby house",
      "Dibs",
      "Natural Selection",
      "RIDER Gifts",
      "Tamara Malas",
    ],
  },
  {
    state: "North Carolina",
    shops: ["Grovewood Gallery", "The Shoppe at Scroggs Farm"],
  },
  {
    state: "Ohio",
    shops: ["Don Drumm Studios and Gallery", "Fiddlehead Gallery"],
  },
  {
    state: "Oklahoma",
    shops: ["DNA Galleries", "Factory Obscura Mixtape"],
  },
  {
    state: "Oregon",
    shops: ["Bandon Art Gallery", "Citizen Ruth LLC"],
  },
  {
    state: "Pennsylvania",
    shops: [
      "Appalachian Spring",
      "BODIE",
      "Samantha Skelton Jewelry Design",
      "The Artful Nest",
      "The Collective",
    ],
  },
  {
    state: "Rhode Island",
    shops: ["Craftland", "Simple Pleasures", "The Purple Cow"],
  },
  { state: "South Carolina", shops: ["The Trove"] },
  {
    state: "Tennessee",
    shops: [
      "A shop of things",
      "The Silver Fern",
      "Makers Exchange Knoxville",
      "Freshie & Zero Studio Shop",
      "Gift Horse",
    ],
  },
  {
    state: "Texas",
    shops: [
      "All the Feels",
      "Space Montrose",
      "Surroundings",
      "TrippleZ Threadz",
    ],
  },
  { state: "Utah", shops: ["Atelier SLC"] },
  { state: "Vermont", shops: ["Blooming Bungalow", "Common Deer"] },
  { state: "West Virginia", shops: ["Monkey Wrench Books"] },
  { state: "Wisconsin", shops: ["Hidden Hollow Garden Art"] },
];

export const markets = [
  { name: "Crafty Bastards", location: "Nashville, TN", dates: "4/11 + 4/12" },
  {
    name: "Markets for Makers",
    location: "Nashville, TN",
    dates: "4/18 + 4/19",
  },
  {
    name: "East TN Craft Show",
    location: "Nashville, TN",
    dates: "5/1–5/3",
  },
  { name: "Porter Flea", location: "Nashville, TN", dates: "6/12–6/13" },
  {
    name: "Carolina Kitty Con",
    location: "Raleigh, NC",
    dates: "6/20 + 6/21",
  },
  { name: "The Big Crafty", location: "", dates: "7/11 + 7/12" },
  {
    name: "Made Market",
    location: "Louisville, KY",
    dates: "8/1",
  },
];
