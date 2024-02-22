function encrypt(text) {
  /*
  La letra "e" es convertida para "enter"
  La letra "i" es convertida para "imes"
  La letra "a" es convertida para "ai"
  La letra "o" es convertida para "ober"
  La letra "u" es convertida para "ufat"
  */
  let ans = ""
  for (let i = 0; i < text.length; i++){
  
    let letter = text[i]
    let consonant = 0
    
    if (letter == "e"){
      ans = ans.concat("enter");
      consonant++
    }
    if (letter == "i"){
      ans = ans.concat("imes");
      consonant++
    } if (letter == "a"){
      ans = ans.concat("ai");
      consonant++
    } if (letter == "o"){
      ans = ans.concat("ober");
      consonant++
    } if (letter == "u"){
      ans = ans.concat("ufat");
      consonant++
    } 
    if (!consonant) {
      ans = ans.concat(letter);
    }
    "Mufatrcimesenterlaigober"
  }
  return ans
}




console.log(encrypt("Sad"));
// console.log(decrypt("0");
