function palindrome(str) {
    let regex=/[\W_]/gm;

    let myStr=str.replaceAll(regex,"").toLowerCase();
    let reversed=myStr.split("").reverse().join("");

    if(myStr===reversed){
        return true;
    }else{
        return false;
    }
    
  }
  palindrome("eye");