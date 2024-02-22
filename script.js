function encrypt(text) {
  /*
  La letra "e" es convertida para "enter"
  La letra "i" es convertida para "imes"
  La letra "a" es convertida para "ai"
  La letra "o" es convertida para "ober"
  La letra "u" es convertida para "ufat"
  */
  
  let ans = "";
  for (let i = 0; i < text.length; i++){
  
    let letter = text[i]
    let consonant = 0;
    
    if (letter == "e"){
      ans = ans.concat("enter");
      consonant++;
    }
    if (letter == "i"){
      ans = ans.concat("imes");
      consonant++;
    }
    if (letter == "a"){
      ans = ans.concat("ai");
      consonant++;
    }
    if (letter == "o"){
      ans = ans.concat("ober");
      consonant++;
    }
    if (letter == "u"){
      ans = ans.concat("ufat");
      consonant++;
    } 
    if (!consonant) {
      ans = ans.concat(letter);
    }
    
  }
  return ans;
}


function decrypt(text) {
  /*
  La letra "enter" es convertida para "e"
  La letra "imes" es convertida para "i
  La letra "ai" es convertida para "a"
  La letra "ober" es convertida para "o"
  La letra "u" es convertida para "u"
  */
  let ans = "";
  let text_length = text.length;
  
  for (let i = 0; i < text_length; i++){
    
    if (text.search("enter") != -1){      
      ans = text.replace("enter", "e");
      text_length -= 4;
    }
    if (text.search("imes") != -1){      
      ans = ans.replace("imes", "i");
      text_length -= 3;
    }
    if (text.search("ai") != -1){      
      ans = ans.replace("ai", "a");
      text_length --;
    }
    if (text.search("ober") != -1){      
      ans = ans.replace("ober", "o");
      text_length -= 3;
    }
    if (text.search("ufat") != -1){      
      ans = ans.replace("ufat", "u");
      text_length -= 3;
    } 
    
  }
  return ans;
}


console.log(encrypt("Murcielago"));
console.log(decrypt("Mufatrcimesenterlaigober"));
