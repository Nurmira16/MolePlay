const MIN_INTERVAL = 2000;
const MAX_INTERVAL = 20000;
const SAD_INTERVAL = 500;
const HUNGRY_INTERVAL = 2000;
const wormContainer = document.querySelector(".worm-container");
let score = 0;

const getInterval = () =>
  Date.now() + MIN_INTERVAL + Math.floor(Math.random() * MAX_INTERVAL);
const getSadInterval = () => Date.now() + SAD_INTERVAL;
const getKingStatus = () => Math.random() > 0.9;
const getHungryInterval = () => Date.now() + HUNGRY_INTERVAL;

const moles = [
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-0")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-1")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-2")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-3")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-4")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-5")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-6")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-7")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-8")
  },
  {
    status: "sad",
    next: getSadInterval(),
    king: true,
    node: document.getElementById("hole-9")
  }
];

