import { setNickname } from './ functions.js';

const user = { id: 8, nickname: 'Саня Санёчек', nicknameHistory: [] };
setNickname(user, 'Александр Сильвестрович');
console.log(user);
// { id: 8, nickname: 'Александр Сильвестрович', nicknameHistory: ['Саня Санёчек'] }

setNickname(user, 'Саша');
console.log(user);
// { id: 8, nickname: 'Саша', nicknameHistory: ['Саня Санёчек', 'Александр Сильвестрович'] }

// Тест 2
const max = { id: 3, nickname: 'Franz Hermann', nicknameHistory: ['max', 'maxxx'] };
setNickname(max, 'Франц Герман');
console.log(max);
// { id: 3, nickname: 'Франц Герман', nicknameHistory: ['max', 'maxxx', 'Franz Hermann'] }
