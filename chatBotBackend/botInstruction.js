function botInstruction(input, wss = null) {
  const clearnInput = input.trim().toLowerCase();
  switch (input) {
    case "hi":
    case "hello":
    case "hey":
      return clearnInput;
    case "help":
    case "menu":
      return "Namste xa, Can Type\n 1. hello / hi / hey\n 2. help / menu\n 3. dad joke\n 4. close";
    case "dad joke":
      return "uhh, vanna - am listening";
    case "close":
      wss.close();
    default:
      return "bujina feri bhan ta!";
  }
}

module.exports = botInstruction;
