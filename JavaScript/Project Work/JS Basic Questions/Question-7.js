
let char = prompt("Enter a single character:").toLowerCase();

if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    alert(char + " is a Vowel");
    console.log(char + " is a Vowel");
} else {
    alert(char + " is NOT a Vowel");
    console.log(char + " is NOT a Vowel");
}
