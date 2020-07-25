var c = ["blue", "black", "yellow", "red",'peach',"green","white"];

  function changeColor() {
    setTimeout(function loop() {
      document.bgColor = c.shift();
      if (c.length) {
        setTimeout(loop, 5000);
      }
    }, 5000);
  }

  function start() {
    setInterval(changeColor(), 2000);
  }
  start();