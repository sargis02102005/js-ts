function getAccessLevel(role) {
    let accessLevel;

    switch (role.toLowerCase()) {
        case 'user':
        case 'client':
            accessLevel = 1;
            break;
        case 'admin':
        case 'manager':
            accessLevel = 2;
            break;
        case 'superadmin':
            accessLevel = 3;
            break;
        default:
            accessLevel = 'неизвестный уровень доступа';
    }

    return accessLevel;
}


console.log(getAccessLevel('user'));      // 1
console.log(getAccessLevel('Client'));    // 1
console.log(getAccessLevel('admin'));     // 2
console.log(getAccessLevel('MANAGER'));   // 2
console.log(getAccessLevel('superadmin'));// 3
console.log(getAccessLevel('guest'));     // неизвестный уровень доступа