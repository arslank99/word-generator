function resetForm() {
  document.getElementById("wordForm").reset();
}

function generateRandomWord() {
  // Accessing form values
  var number = document.querySelector("input[name='NumberOfWord']").value;
  var wordType = document.querySelector("select[name='WordType']").value; // add name attribute to the select element
  var firstLetter = document.querySelector("input[name='FirstLetter']").value;
  var lastLetter = document.querySelector("input[name='LastLetter']").value;

  // Check which radio button is checked for wordSizeBy
  var wordSizeBy;
  if (document.querySelector("input[name='syllables']:checked")) {
    wordSizeBy = "syllables";
  } else if (document.querySelector("input[name='letters']:checked")) {
    wordSizeBy = "letters";
  }

  var sizeComparison = document.querySelector("select[name='count']").value;
  var sizeValue = document.querySelector("input[name='sizeValue']").value;

  // Do something with the form values, for example, log them to the console
  console.log("Number:", number);
  console.log("Word Type:", wordType);
  console.log("First Letter:", firstLetter);
  console.log("Last Letter:", lastLetter);
  console.log("Word Size By:", wordSizeBy);
  console.log("Size Comparison:", sizeComparison);
  console.log("Size Value:", sizeValue);
  // Validation
  if (!number) {
    alert("Please enter the number of words.");
    return;
  } else if (number == "") {
    alert("please fill the empty field");
  }

  if (!wordType) {
    alert("Please select a word type.");
    return;
  } else if (wordType == "") {
    alert("please fill the empty field");
  }

  if (!firstLetter) {
    alert("Please enter the first letter.");
    return;
  } else if (firstLetter == "") {
    alert("please fill the empty field");
  }

  if (!lastLetter) {
    alert("Please enter the last letter.");
    return;
  } else if (lastLetter == "") {
    alert("please fill the empty field");
  }
}
