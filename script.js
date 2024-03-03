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
    let consonant = 0; // it's 0 when letter is not a vowel
    
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
  let ans = text;
  let text_length = text.length;
  
  for (let i = 0; i < text_length; i++){
    
    if (text.search("enter") != -1){      
      ans = ans.replace("enter", "e");
      text_length -= 4;
    }
    if (text.search("imes") != -1){      
      ans = ans.replace("imes", "i");
      text_length -= 3;
    }
    if (text.search("ai") != -1){      
      ans = ans.replace("ai", "a");
      text_length--;
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


function validator_input(text) {
  let messages_error = [];
  let errors = 0;
  
  if (text.search(/[A-Z]/) != -1){
    messages_error.push("El texto debe contener solo minúsculas.");
    errors++;
  }
  if (text.search(/[^a-zA-Z0-9\s]/) != -1){
    messages_error.push("No deben ser utilizados letras con acentos ni caracteres especiales.");
    errors++;
  }

  if (errors >= 1){
    if (errors == 2){
      alert("Errors:\n" + messages_error[0] + "\n" + messages_error[1]);
    } else {alert("Error: " + messages_error[0]);}
    return false
  }

  if (!text) {
    return false 
  }
  return true;
}


function clear_box() {
  let title = document.querySelector(".output h3").style;
  let img = document.querySelector(".output img").style;
  title.display = "none";
  img.display = "none";
  let box = document.querySelector(".output").style;
  let text_output = document.querySelector(".output p").style;
  box.display = "flex";
  box.alignItems = "center";
  box.justifyContent = "center";
  text_output.fontSize = "24px";
}


function no_text(text) {
  if (/^\s*$/.test(text)){
    location.reload();
  }  
}


function encrypt_button(){
  let text = document.querySelector(".text-input").value;
  no_text(text);
  if (validator_input(text)){
    console.log(text);
    document.getElementById("text-output").innerHTML = encrypt(text);
    clear_box();
  }
}


function decrypt_button(){
  let text = document.querySelector(".text-input").value;
  no_text(text);
  if (validator_input(text)){
    console.log(text.legth);
    console.log(decrypt(text));
    document.getElementById("text-output").innerHTML = decrypt(text);
    clear_box();
  }
}

/*
console.log(encrypt("Murcielago"));
console.log(decrypt("Mufatrcimesenterlaigober"));
*/