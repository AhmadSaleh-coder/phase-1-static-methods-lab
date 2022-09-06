class Formatter {
  //add static methods here
  
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9- ']+/g, "");;
  }
  static titleize (str) {
    const strArr = str.split(' ');
    const wordExceptions = ['a','an','and','at','but','by','for','from','of','the'];
    let capArr = [];
    for(let i = 1; i< strArr.length; i++){
      if((wordExceptions.find(element=>element === strArr[i])) !== strArr[i]){
      capArr.push(this.capitalize(strArr[i]));
    } else {
      capArr.push(strArr[i]);
    } }
    capArr.unshift(this.capitalize(strArr[0]));
    return capArr.join(' ')
  }
}