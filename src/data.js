const coursesData = [
    {
        id: 1,
        name: "Администрирование информационных систем",
        teacherName: "Михайлова С.А",
    },
    {
        id: 2,
        name: "Базы данных",
        teacherName: "Наместников С.А",
    },
    {
        id: 3,
        name: "Программирование на Python",
        teacherName: "Букунов С.В.",
    },
    {
        id: 4,
        name: "Линейное программирование",
        teacherName: "Фролькис С.В.",
    },
    {
        id: 5,
        name: "Практические занятия_Информационные технологии графического проектирования",
        teacherName: "Петров С.В.",
    },
];
const tasksData = [
    {
        id: 12,
        name: "Практическое занятие 2. Общие сведения о системном администрировании и горахздо более длинное названиеболее длинное названиеболее длинное название",
        courseID: 1,
    },
    {
        id: 13,
        name: "Практическое занятие 2. Общие сведения о системном администрировании и горахздо более длинное название",
        courseID: 1,
    },
    {
        id: 24,
        name: "Практическое занятие 1. БД",
        courseID: 2,
    },
];

const usersData = {
    users: [
        {
            id: 1,
            name: "Богдан",
            surName: "Рассказов",
            email: "fakeemail@gmail.com",
            password: "hashedpasswfwe32r@213",
            contacts: [
                {
                    type: "e-mail",
                    value: "fakeemail@gmail.com",
                },
                {
                    type: "telegram",
                    value: "https://t.me/fakeTg",
                },
            ],
            completed: [
                {
                    courseID: 1,
                    tasks: [
                        { id: 12, timesCompleted: 5 },
                        { id: 13, timesCompleted: 4 },
                    ],
                },
                {
                    courseID: 2,
                    tasks: [{ id: 24, timesCompleted: 5 }],
                },
            ],
        },
        {
            id: 2,
            name: "Юльча",
            surName: "Игуменова",
            email: "gummy@gmail.com",
            password: "hashedpasswfwe32r@213",
            contacts: [
                {
                    type: "e-mail",
                    value: "fakeemail@gmail.com",
                },
                {
                    type: "vk",
                    value: "https://vk.me/gummy",
                },
            ],
            completed: [
                {
                    courseID: 2,
                    tasks: [{ id: 24, timesCompleted: 6 }],
                },
            ],
        },
    ],
};

export { tasksData, coursesData, usersData };
