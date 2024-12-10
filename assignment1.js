function Conversion() {
    const conversionType = document.getElementById('conversionType').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    let resultText = "";
  
    if (conversionType === "CtoF") {
      const fahrenheit = (inputValue * 9 / 5) + 32;
      resultText = `${inputValue}°C = ${fahrenheit.toFixed(2)}°F`;
    } 
    
    else if (conversionType === "FtoC") {
      const celsius = (inputValue - 32) * 5 / 9;
      resultText = `${inputValue}°F = ${celsius.toFixed(2)}°C`;
    } 
    
    else if (conversionType === "MtoF") {
      const feet = inputValue * 3.28084;
      resultText = `${inputValue} m. = ${feet.toFixed(2)} ft.`;
    } 
    
    else if (conversionType === "FtoM") {
      const meters = inputValue / 3.28084;
      resultText = `${inputValue} ft. = ${meters.toFixed(2)} m.`;
    }
  
    document.getElementById('result').innerText = resultText;
  }
  
  updateConversionFields();