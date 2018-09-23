

function randomName() {
    var names = ['Max', 'Stepan', 'Anton', 'Masha', 'Olya', 'Fedor', 'Kate', 'Igor', 'Janifer', 'Alice', 'Karl'];
    var a = Math.floor(Math.random() * (names.length-1));
    return names[a];
}

function randomLastName() {
    var lastNames = ['Pupkin', 'Ivanov', 'Nesterov', 'Marcks', 'MacGregor', 'Urgant', 'Gandi', 'Gagarin', 'Pushckin', 'Nevada'];
    var a = Math.floor(Math.random() * (lastNames.length-1));
    return lastNames[a];
}

function randomGroup() {
    var group = ['engineer', 'accountant', 'hr', 'manager', null];
    var a = Math.floor(Math.random() * (group.length));
    return group[a];
}



const proxy = {
    // Priority processing.
    // apiMocker(app, path, option)
    // This is the option parameter setting for apiMocker
    // webpack-api-mocker@1.5.15 support
    _proxy: {
        proxy: {
            '/repos/*': 'https://api.github.com/',
            '/:owner/:repo/raw/:ref/*': 'http://127.0.0.1:2018'
        },
        changeHost: true,
    },
    // =====================
    'GET /api/users/page/:page/group/:group/(.*)': (req, res) => {
        const { owner, repo, ref } = req.params;

        let { page, group } = req.params;
        page = page || 1;
        const users = [];



        for (let i = ((page-1) * 10) + 1; i < (page * 10) + 1; i++) {
            users.push({
                name: randomName(),
                lastName: randomLastName(),
                group: group,
                id: i + 'g' + group
            })
        }

        return res.json({ users });
    },
    'GET /api/users/page/:page/(.*)': (req, res) => {

        let { page } = req.params;
        page = page || 1;
        const users = [];



        for (let i = 0; i < 300; i++) {
            users.push({
                name: randomName(),
                lastName: randomLastName(),
                group: randomGroup(),
                id: i + 'g' + Math.floor(Math.random() * (Date.now()))
            })
        }

        return res.json({ users });
    },
    'POST /api/add': (req, res) => {
        const { data } = req.body;
            console.log(data);
            return (res.json({
                status: 'ok',
                code: 0,
                data: { ...data }

                })
            )
        }

};
module.exports = proxy;