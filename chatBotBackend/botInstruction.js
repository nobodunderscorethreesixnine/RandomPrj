function botInstruction(input, wss = null) {
  const clearInput = input.trim().toLowerCase();
  switch (clearInput) {
    case "hi":
    case "hello":
    case "hey":
      return clearInput;
    case "help":
    case "menu":
      // return "Namste xa, Can Type\n  1. hello / hi / hey\n 2. help / menu\n 3. dad joke\n 4. close";
      return "Namste xa, Can Type\n1.hello / hi / hey\n2.help / menu\n3.dad joke\n4.close";
    case "dad joke":
      return "uhh, vanna - am listening";
    case "close":
      wss.close();
    default:
      return "bujina feri bhan ta!";
  }
}

module.exports = botInstruction;
