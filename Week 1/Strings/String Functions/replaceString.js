function replaceString(str,target,replacement){
  console.log("Original string:",str);
  console.log("After replace:",str.replace(target,replacement));
}
replaceString("Hello World","World","Universe");