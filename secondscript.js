function countVowels() {
    const input = document.getElementById("sentenceInput").value.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 0; i < input.length; i++) {
      if (vowels.includes(input[i])) {
        count++;
      }
    }

    document.getElementById("result").textContent = "Number of vowels: " + count;
  }