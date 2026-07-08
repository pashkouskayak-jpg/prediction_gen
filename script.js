var random_words = new Array();
random_words[0] = ["You", "Your mom", "Your dad", "Your sister", "Your brother", "Your cousin", "Your friend", "Your neighbor", "Your teacher", "Your boss"];
random_words[1] = ["will have", "won't have"];
random_words[2] = ["a great day", "a bad day", "an amazing adventure", "a terrible experience", "a wonderful surprise", "a disappointing outcome", "a fun time", "a challenging situation", "a relaxing moment", "an exciting opportunity"];
random_words[3] = ["because", "due to", "thanks to", "as a result of", "in spite of", "regardless of", "considering", "given that", "owing to"];
random_words[4] = ["the weather", "your attitude", "your actions", "your choices", "your decisions", "your efforts", "your mindset", "your perspective", "your relationships", "your circumstances"];

function generateMyMessage() {
    var message = "";
    message += random_words[0][Math.floor(Math.random() * random_words[0].length)];
    message += " ";
    message += random_words[1][Math.floor(Math.random() * random_words[1].length)];
    message += " ";
    message += random_words[2][Math.floor(Math.random() * random_words[2].length)];
    message += " ";
    message += random_words[3][Math.floor(Math.random() * random_words[3].length)];
    message += " ";
    message += random_words[4][Math.floor(Math.random() * random_words[4].length)];
    return message;
}

console.log(generateMyMessage());
