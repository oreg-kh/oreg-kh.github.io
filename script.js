fetch('https://oreg-kh.github.io/function.js') // Betöltjük a function.js tartalmát
  .then(response => response.text())
  .then(text => {
    // A betöltött kód text formátumban van, így ki kell értékelni
    eval(text); // Az eval függvény értékeli ki a szöveget
    helloWorld(); // Most már hívható a helloWorld függvény
  })
  .catch(error => console.error(error));
