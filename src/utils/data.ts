export const userData = [
    {
      username: "user1",
      email: "user1@example.com",
      thoughts: [
        "I love the smell of coding in the morning.",
        "winter is coming",
        "triangle = circle with corners"
      ]
    },
    {
      username: "user2",
      email: "user2@example.com",
      thoughts: [
        "my favorite color is green",
        "i love to code",
        "s is for snake"
      ]
    },
    {
      username: "user3",
      email: "user3@example.com",
      thoughts: [
        "i love birds",
        "a bird in the hand is worth two in the bush",
        "birds of a feather flock together"
      ]
    },
    {
      username: "user4",
      email: "user4@example.com",
      thoughts: [
        "laughing is good for the soul",
        "a smile is a curve that sets everything straight",
        "peace begins with a smile"
      ]
    },
    {
      username: "user5",
      email: "user5@example.com",
      thoughts: [
        "schrödinger's cat walks into a bar. and doesn't.",
        "meme = me + me",
        "the cloud is just someone else's computer."
      ]
    },
    {
      username: "user6",
      email: "user6@example.com",
      thoughts: [
        "git push -u origin main",
        "configure your heart.",
        "may the code be with you."
      ]
    },
    {
      username: "user7",
      email: "user7@example.com",
      thoughts: [
        "you had me at 'hello world'.",
        "sunshine and coding",
        "the grass is greener where you water it."
      ]
    },
    {
      username: "user8",
      email: "user8@example.com",
      thoughts: [
        "music is medicine",
        "lalalalala",
        "dance party at my desk"
      ]
    },
    {
      username: "user9",
      email: "user9@example.com",
      thoughts: [
        "404: Sleep not found.",
        "i need a vacation from this code.",
        "console.log('Hello, World!');"
      ]
    },
    {
      username: "user10",
      email: "user10@example.com",
      thoughts: [
        "variable = very able",
        "ssh-keygen -t rsa -b 4096 -C '",
        "echo 'I love coding!' > feelings.md"
      ]
    }
  ];
  
  export const reactionData = [
    "this is awesome!",
    "so true",
    "mind blown",
    "flames",
    "literally same",
    "thanks for sharing",
    "this is so helpful",
    "love this",
    "this is so cool",
    "this is so interesting",
    "lol",
    "great post",
    "boom",
    "exploding bore head emoji",
    "this changed me forevr"
  ];
  
  // Helper function to get random items from an array
  export const getRandomItems = (array: any[], count: number) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  
  // Helper function to get a random reaction
  export const getRandomReaction = () => {
    return reactionData[Math.floor(Math.random() * reactionData.length)];
  };