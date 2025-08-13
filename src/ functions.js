const setNickname = (user, newNickname) => {
  // Добавляем текущий никнейм в историю, если он существует
  if (user.nickname) {
    user.nicknameHistory = user.nicknameHistory || [];
    user.nicknameHistory.push(user.nickname);
  }

  // Устанавливаем новый никнейм
  user.nickname = newNickname;
};

export { setNickname };
