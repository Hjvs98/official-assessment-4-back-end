const shoe = require("./db.json");
const shoeId = 4;

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
      "You are gnarly on the keys bruh",
    ];

    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },
  getFortune: (req, res) => {
    const fortuneList = [
      "Did you know that fortune cookies arent even Chinese? Theyre made by Americans, based on a Japanese recipe.",
      "You have an ability to sense and know higher truth.",
      "Excellent time to become a missing person.",
      "Dont look back, the lemmings are gaining on you.",
      "You look tired.",
      "Chess tonight.",
      "Dont feed the bats tonight.",
      "Your boss is a few sandwiches short of a picnic.",
      "You will forget that you ever knew me.",
      "Future looks spotty. You will spill soup in late evening.",
      "You have the capacity to learn from mistakes. Youll learn a lot today.",
      "A vivid and creative mind characterizes you.",
      "If you think last Tuesday was a drag, wait till you see what happens tomorrow!",
      "You will be attacked next Wednesday at 3:15 P.M. by six samurai sword wielding purple fish glued to Harley-Davidson motorcycles.",
      "There was a phone call for you.",
      "Are you making all this up as you go along?",
      "Dont plan any hasty moves. Youll be evicted soon anyway.",
      "Advancement in position.",
      "Youre ugly and your mother dresses you funny.",
      "Be careful! Is it classified?",
    ];
    let randomI = Math.floor(Math.random() * fortuneList.length);
    let randomFortune = fortuneList[randomI];

    res.status(200).send(randomFortune);
  },

  getTime: (req, res) => {
    const value = req.params.value;
    if (value === "morning") {
      res.send(
        "https://www.lifehack.org/articles/productivity/6-ways-highly-productive-night.html"
      );
    } else {
      res.send("https://www.oberlo.com/blog/productive-morning-routine");
    }
  },

  getShoes: (req, res) => res.status(200).send(shoe),

  deleteShoe: (req, res) => {
    let index = shoe.findIndex((elem) => elem.id === +req.params.id);
    shoe.splice(index, 1);
    res.status(200).send(shoe);
  },
  createShoe: (req, res) => {
    let { name, price, imageURL } = req.body;
    let newShoe = {
      id: shoeId,
      name,
      price,
      imageURL,
    };
    shoe.push(newShoe);
    res.status(200).send(shoe);
    shoeId++;
  },
};
