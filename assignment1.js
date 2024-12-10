function Conversion() {
    const conversionType = document.getElementById('pickedConversion').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    let resultText = "";
  
    if (conversionType === "CeltoFah") {
      const fahrenheit = (inputValue * 9 / 5) + 32;
      resultText = `${inputValue}°C = ${fahrenheit.toFixed(2)}°F`;
    } 
    
    else if (conversionType === "FahtoCel") {
      const celsius = (inputValue - 32) * 5 / 9;
      resultText = `${inputValue}°F = ${celsius.toFixed(2)}°C`;
    } 
    
    else if (conversionType === "M.toFt.") {
      const feet = inputValue * 3.28084;
      resultText = `${inputValue} m. = ${feet.toFixed(2)} ft.`;
    } 
    
    else if (conversionType === "Ft.toM.") {
      const meters = inputValue / 3.28084;
      resultText = `${inputValue} ft. = ${meters.toFixed(2)} m.`;
    }
  
    document.getElementById('result').innerText = resultText;
  }
  
  updateConversionFields();