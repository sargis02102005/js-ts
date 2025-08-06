const user = {
    id: 40,
    age: 18,
    name: "Валентин Петрович",
    city: "Ковров",
    address: "ул. олытва  1 корпус 62346283764273468792364 строение Д",
};

if (16 <= user.age && user.age <= 17 && user.city === 'Москва') {
    // <-- Соверш
    if (user.city === "Москва") {
        // <-- Москва
        if (user.address.includes("Ленина")) {
            user.address = "ул.Кривая 109"; // Соверш + москва
        } else {
            // <-- Ленина
            user.city = "Иваново"; // Соверш + москва + ленина
            user.address = "ул.Важная 5"; //
        }
    } else {
        // Если ул капиталистов => материалистов москва
        // Иначе => ул Центральная
        if (user.address.includes("Капиталистов")) {
            user.city = "Москва";
            user.address = "ул.Материалистов 3";
        } else {
            user.address = "ул.Центральная 2";
        }
    }
}
console.log(user);
