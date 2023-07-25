import { ContactInfo, Education, TechStack } from "@/types"

export const profile = {
    name: 'Basam C. Serad',
    title: 'Software Engineer',
}

export const intro = {
    title: '<Code/>',
    description: 'Crafting digital wonders with code and creativity.'
}

export const education: Education[] = [
    {
        id : 1,
        title: 'Elementary Level',
        school : 'Philippine Integrated School',
        year : '2007-2013',
    },
    {
        id : 2,
        title: 'Secondary Level',
        school : 'Ibn Siena Integrated School',
        year : '2013-2018',
    },
    {
        id : 3,
        title: 'College Degree',
        school : 'Mindanao State University',
        degree: 'Bachelor of Information Technology',
        year : '2018-2023',
    },
]

export const contatInfo: ContactInfo[] = [
    {
        id: 1,
        name: 'GitHub',
        link: 'https://github.com/basamserad',
    },
    {
        id: 2,
        name: 'Gmail',
        link: 'basamserad1223@gmail.com',
    },
    {
        id: 3,
        name: 'Facebook',
        link: 'https://www.facebook.com/basam.serad.1998',
    },
    {
        id: 4,
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/basam-serad-19599823a/',
    }
]

export const programmingLang: TechStack[] = [
    {
        id: 1,
        title: 'JavaScript',
    },
    {
        id: 2,
        title: 'TypeScript',
    },
    {
        id: 3,
        title: 'Go Lang',
    },
    {
        id: 4,
        title: 'Html',
    },
    {
        id: 5,
        title: 'CSS',
    },
    {
        id: 6,
        title: 'Reactjs',
    },
    {
        id: 7,
        title: 'Nextjs',
    },
    {
        id: 8,
        title: 'Nodejs',
    },
    {
        id: 9,
        title: 'Nestjs',
    },
    {
        id: 10,
        title: 'Vuejs',
    },
    {
        id: 11,
        title: 'Quasar Framework',
    },
    {
        id: 12,
        title: 'MySQL',
    },
    {
        id: 13,
        title: 'Postgresql',
    }
]