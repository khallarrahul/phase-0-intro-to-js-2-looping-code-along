function writeCards(names, occasion) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${occasion} gift!`;
      messages.push(message);
    }
    return messages;
  }
  
  const names = ["Charlie", "Samip", "Ali"];
  const occasion = "birthday";
  const messages = writeCards(names, occasion);
  console.log(messages);





  function countDown(){
    let i = 10;
      while (i >= 0){
          console.log(i);
          i--;
      }
  }