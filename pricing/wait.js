const apiKey = "Bn6ZDenQCnPa5Y6qh1R9RnCTsinAGGE8"; // <-- put your actual API key here
    const apiUrl = `https://BrsApi.ir/Api/Market/Gold_Currency.php?key=${apiKey}`;

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json(); // parse JSON
      })
      .then(data => {
        console.log("Full JSON data:", data); // prints everything
        data.gold.forEach(element => {
          if (element.name_en === "18K Gold") {
            document.getElementById("18K").innerText = element.price;
            console.log('hello')
          } else if (element.name_en === "24K Gold") {
            document.getElementById("24K").innerText = element.price;
          } else if (element.name_en === "Melted Gold") {
            document.getElementById("tehran").innerText = element.price;
          } else if (element.name_en === "Gold Ounce") {
            document.getElementById("gold_ounce").innerText = `${element.price} دلار`;
          } else if (element.name_en === "Emami Coin") {
            document.getElementById("coin_imami").innerText = `${element.price} تومان`;
          } else if (element.name_en === "Bahar Azadi Coin") {
            document.getElementById("coin_bahar").innerText = `${element.price} تومان`;
          } else if (element.name_en === "Half Coin") {
            document.getElementById("coin_nim").innerText = `${element.price} تومان`;
          } else if (element.name_en === "Quarter Coin") {
            document.getElementById("coin_rub").innerText = `${element.price} تومان`;
          } else if (element.name_en === "1g Coin") {
            document.getElementById("coin_garmi").innerText = `${element.price} تومان`;
          }

        });
      })
      .catch(error => {
        console.error("Error fetching API:", error);
      });