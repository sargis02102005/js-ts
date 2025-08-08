const user = {
    name: 'Alex',
    nickname: 'Alexxx675',
    nicknameHistory: ['AlexLuk', 'Xela-123', 'Sasha 8'],
};
// Добавляем текущий никнейм в историю
user.nicknameHistory.push(user.nickname);
// Новый никнейм
user.nickname = 'Sanya';

console.log(user)