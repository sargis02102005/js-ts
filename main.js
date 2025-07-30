function showSpongeBobFace(character) {
    let face;

    switch(character.toLowerCase()) {
        case "spongebob":
            face = "| ( · )( · ) |";
            break;
        case "patrick":
            face = "/ ( · )( · ) \\";
            break;
        case "squidward":
            face = "( ( · )( · ) )";
            break;
        case "plankton":
            face = "| ( · ) |";
            break;
        case "mr. crabs":
            face = "|·||·|";
            break;
        default:
            face = "Персонаж не найден!";
    }

    console.log(face);
}

// Примеры использования:
console.log(showSpongeBobFace("SpongeBob"))// | ( · )( · ) |
console.log(showSpongeBobFace("Patrick")) // / ( · )( · ) \
console.log(showSpongeBobFace("Squidward"))// ( ( · )( · ) )
console.log(showSpongeBobFace("Plankton"))// | ( · ) |
console.log(showSpongeBobFace("Mr. Crabs")) // |·||·|


