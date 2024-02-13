// For int
function explainParseInt(value){
    console.log("Original Value:",value);
    let result=parseInt(value);
    console.log("After parseInt:",result);
  }
  explainParseInt("42");
  explainParseInt("42px");
  explainParseInt("3.14");

  // For Float
  console.log(parseFloat("3.14"));