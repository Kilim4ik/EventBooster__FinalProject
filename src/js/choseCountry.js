const countries = ["Ukraine", "Germany", "Canada", "France", "Italy", "USA"]; 
          const datalist = document.getElementById("suggestions");

          countries.forEach((country) => {
            const option = document.createElement("option");
            option.value = country;
            datalist.appendChild(option);
          });