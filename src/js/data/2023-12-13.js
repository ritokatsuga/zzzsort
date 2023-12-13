dataSetVersion = "2023-12-13"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by faction",
    key: "faction",
    tooltip: "Check this to restrict to characters from certain faction.",
    checked: false,
    sub: [
      { name: "Gentle House", key: "gh" },
      { name: "Section 6", key: "s6" },
      { name: "Belobog Heavy Industries", key: "bhi" },
      { name: "Victoria Housekeeping Co.", key: "vhc" },
      { name: "Faction Unknown", key: "un" },
    ]
  },
  {
    name: "Exclude males",
    key: "male",
    tooltip: "Check this to exclude males.",
    checked: false
  },
  {
    name: "Exclude females",
    key: "female",
    tooltip: "Check this to exclude females.",
    checked: false
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Nekomiya Mana",
    img: "mana.png",
    opts: {
      faction: ['gh'],
      female: true
    }
  },
  {
    name: "Billy Kid",
    img: "billy.png",
    opts: {
      faction: ['gh'],
      male: true
    }
  },
  {
    name: "Nicole Demara",
    img: "nicole.png",
    opts: {
      faction: ['gh'],
      female: true
    }
  },
  {
    name: "Anby Demara",
    img: "anby.png",
    opts: {
      faction: ['gh'],
      female: true
    }
  },
  {
    name: "Hoshimi Miyabi",
    img: "hoshimi.png",
    opts: {
      faction: ['s6'],
      female: true
    }
  },
  {
    name: "Soukaku",
    img: "soukaku.png",
    opts: {
      faction: ['s6'],
      female: true
    }
  },
  {
    name: "Grace Howard",
    img: "grace.png",
    opts: {
      faction: ['bhi'],
      female: true
    }
  },
  {
    name: "Ben Bigger",
    img: "ben.png",
    opts: {
      faction: ['bhi'],
      male: true
    }
  },
  {
    name: "Anton Ivanov",
    img: "anton.png",
    opts: {
      faction: ['bhi'],
      male: true
    }
  },
  {
    name: "Kaleda Belobog",
    img: "kaleda.png",
    opts: {
      faction: ['bhi'],
      female: true
    }
  },
  {
    name: "Ellen Joe",
    img: "ellen.png",
    opts: {
      faction: ['vhc'],
      female: true
    }
  },
  {
    name: "Alexandrina",
    img: "alexandrina.png",
    opts: {
      faction: ['vhc'],
      female: true
    }
  },
  {
    name: "Von Lycaon",
    img: "lycaon.png",
    opts: {
      faction: ['vhc'],
      male: true
    }
  },
  {
    name: "Corin Wickes",
    img: "corin.png",
    opts: {
      faction: ['vhc'],
      female: true
    }
  },
  {
    name: "Soldier 11",
    img: "s11.png",
    opts: {
      faction: ['un'],
      female: true
    }
  } 
]
