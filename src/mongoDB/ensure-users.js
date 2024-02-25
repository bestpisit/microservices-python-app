var rootUser = "<rootUser>";
var rootPass = "<rootPass>";
var usersStr = "<userStr>";

const adminDb = db.getSiblingDB('admin');
adminDb.auth(rootUser, rootPass);
print('Successfully authenticated admin user');

const databases = ['mp3s', 'videos'];

databases.forEach((targetDbStr) => {
    const targetDb = db.getSiblingDB(targetDbStr);
    const customRoles = adminDb
        .getRoles({ rolesInfo: 1, showBuiltinRoles: false })
        .map(role => role.role)
        .filter(Boolean);
    print(customRoles)
    usersStr
        .trim()
        .split(';')
        .map(s => s.split(':'))
        .forEach(user => {
            const username = user[0];
            const rolesStr = user[1];
            const password = user[2];
            if (!rolesStr || !password) {
                return;
            }
            const roles = rolesStr.split(',');
            const userDoc = {
                user: username,
                pwd: password,
                roles: [
                    { role: 'readWrite', db: targetDbStr },
                    ...roles.map(role => {
                        if (!~customRoles.indexOf(role)) {
                            return { role, db: targetDbStr };
                        }
                        return role;
                    }),
                ],
            };
            try {
                targetDb.createUser(userDoc);
            } catch (err) {
                if (!~err.message.toLowerCase().indexOf('duplicate')) {
                    throw err;
                }
            }
        });
});