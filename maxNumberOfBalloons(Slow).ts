function maxNumberOfBalloons(text: string): number {
    const textMap = new Map();

    for (let i = 0; i < text.length; i++) {
        const currentCount = textMap.get(text[i]);
        if (currentCount) {
            textMap.set(text[i], currentCount + 1);
        } else {
            textMap.set(text[i], 1);
        }
    }

    console.log(textMap);

    const balloonCharacters = [{ char: "b", needed: 1 }, { char: "a", needed: 1 }, { char: "l", needed: 2 }, { char: "o", needed: 2 }, { char: "n", needed: 1 }];

    let canContinue = true;
    let currentCharacter = 0;
    let wordsPossible = 0;

    while (canContinue) {
        if (currentCharacter === balloonCharacters.length) {
            wordsPossible++;
            currentCharacter = 0;
        }

        const currentCount = textMap.get(balloonCharacters[currentCharacter].char);
        if (!currentCount || (currentCount - balloonCharacters[currentCharacter].needed) < 0) {
            canContinue = false;
        } else {
            textMap.set(balloonCharacters[currentCharacter].char, currentCount - balloonCharacters[currentCharacter].needed);
            currentCharacter++;
        }
    }
    return wordsPossible;
};
