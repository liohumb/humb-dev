import { shuffle } from '../utils'

const brands = [
    {
        id: 1,
        name: 'After Effects',
        url: './images/brands/after-effects.png'
    },
    {
        id: 2,
        name: 'Angular',
        url: './images/brands/angular.png'
    },
    {
        id: 3,
        name: 'Api Platform',
        url: './images/brands/api-platform.png'
    },
    {
        id: 4,
        name: 'Apple',
        url: './images/brands/apple.png'
    },
    {
        id: 5,
        name: 'Blender',
        url: './images/brands/blender.png'
    },
    {
        id: 6,
        name: 'Composer',
        url: './images/brands/composer.png'
    },
    {
        id: 7,
        name: 'CSS',
        url: './images/brands/css.png'
    },
    {
        id: 8,
        name: 'Data Grip',
        url: './images/brands/data-grip.png'
    },
    {
        id: 9,
        name: 'Debian',
        url: './images/brands/debian.png'
    },
    {
        id: 10,
        name: 'Discord',
        url: './images/brands/discord.png'
    },
    {
        id: 11,
        name: 'Figma',
        url: './images/brands/figma.png'
    },
    {
        id: 12,
        name: 'Git',
        url: './images/brands/git.png'
    },
    {
        id: 13,
        name: 'GitHub',
        url: './images/brands/github.png'
    },
    {
        id: 14,
        name: 'Google Chrome',
        url: './images/brands/google-chrome.png'
    },
    {
        id: 15,
        name: 'GSAP',
        url: './images/brands/gsap.png'
    },
    {
        id: 16,
        name: 'Heroku',
        url: './images/brands/heroku.png'
    },
    {
        id: 17,
        name: 'HTML',
        url: './images/brands/html.png'
    },
    {
        id: 18,
        name: 'Illustrator',
        url: './images/brands/illustrator.png'
    },
    {
        id: 19,
        name: 'IntelliJ',
        url: './images/brands/intellij.png'
    },
    {
        id: 20,
        name: 'Iterm',
        url: './images/brands/iterm.png'
    },
    {
        id: 21,
        name: 'JavaScript',
        url: './images/brands/javascript.png'
    },
    {
        id: 22,
        name: 'JetBrains',
        url: './images/brands/jetbrains.png'
    },
    {
        id: 23,
        name: 'Logic Pro',
        url: './images/brands/logic-pro.png'
    },
    {
        id: 24,
        name: 'MailChimp',
        url: './images/brands/mailchimp.png'
    },
    {
        id: 25,
        name: 'MailJet',
        url: './images/brands/mailjet.png'
    },
    {
        id: 26,
        name: 'Mamp',
        url: './images/brands/mamp.png'
    },
    {
        id: 27,
        name: 'MongoDB',
        url: './images/brands/mongodb.png'
    },
    {
        id: 28,
        name: 'MySql',
        url: './images/brands/mysql.png'
    },
    {
        id: 29,
        name: 'Next',
        url: './images/brands/next.png'
    },
    {
        id: 30,
        name: 'Node',
        url: './images/brands/node.png'
    },
    {
        id: 31,
        name: 'Node Mailer',
        url: './images/brands/node-mailer.png'
    },
    {
        id: 32,
        name: 'Notion',
        url: './images/brands/notion.png'
    },
    {
        id: 33,
        name: 'NPM',
        url: './images/brands/npm.png'
    },
    {
        id: 34,
        name: 'Parcel',
        url: './images/brands/parcel.png'
    },
    {
        id: 35,
        name: 'Paypal',
        url: './images/brands/paypal.png'
    },
    {
        id: 36,
        name: 'Photoshop',
        url: './images/brands/photoshop.png'
    },
    {
        id: 37,
        name: 'PHP',
        url: './images/brands/php.png'
    },
    {
        id: 38,
        name: 'PhpStorm',
        url: './images/brands/phpstorm.png'
    },
    {
        id: 39,
        name: 'PostMan',
        url: './images/brands/postman.png'
    },
    {
        id: 40,
        name: 'Premiere Pro',
        url: './images/brands/premiere-pro.png'
    },
    {
        id: 41,
        name: 'React',
        url: './images/brands/react.png'
    },
    {
        id: 42,
        name: 'React Native',
        url: './images/brands/react-native.png'
    },
    {
        id: 43,
        name: 'SASS',
        url: './images/brands/sass.png'
    },
    {
        id: 44,
        name: 'Send Grid',
        url: './images/brands/sendgrid.png'
    },
    {
        id: 45,
        name: 'Simulator',
        url: './images/brands/simulator.png'
    },
    {
        id: 46,
        name: 'Slack',
        url: './images/brands/slack.png'
    },
    {
        id: 47,
        name: 'Strapi',
        url: './images/brands/strapi.png'
    },
    {
        id: 48,
        name: 'Stripe',
        url: './images/brands/stripe.png'
    },
    {
        id: 49,
        name: 'Symfony',
        url: './images/brands/symfony.png'
    },
    {
        id: 50,
        name: 'Teams',
        url: './images/brands/teams.png'
    },
    {
        id: 51,
        name: 'Terminal',
        url: './images/brands/terminal.png'
    },
    {
        id: 52,
        name: 'Three',
        url: './images/brands/three.png'
    },
    {
        id: 53,
        name: 'TypeScript',
        url: './images/brands/typescript.png'
    },
    {
        id: 54,
        name: 'Vercel',
        url: './images/brands/vercel.png'
    },
    {
        id: 55,
        name: 'Vite',
        url: './images/brands/vite.png'
    },
    {
        id: 56,
        name: 'Vue',
        url: './images/brands/vue.png'
    },
    {
        id: 57,
        name: 'WebPack',
        url: './images/brands/webpack.png'
    },
    {
        id: 58,
        name: 'WebStorm',
        url: './images/brands/webstorm.png'
    },
    {
        id: 59,
        name: 'Xcode',
        url: './images/brands/xcode.png'
    },
]

const brands1 = [...brands]
const brands2 = [...brands]
const brands3 = [...brands]
const brands4 = [...brands]
const brands5 = [...brands]
const brands6 = [...brands]
const brands7 = [...brands]
const brands8 = [...brands]
const brands9 = [...brands]
const brands10 = [...brands]
const brands11 = [...brands]
const brands12 = [...brands]
const brands13= [...brands]
const brands14 = [...brands]
const brands15 = [...brands]
const brands16 = [...brands]
const brands17 = [...brands]
const brands18= [...brands]
const brands19= [...brands]
const brands20= [...brands]
const brands21= [...brands]
const brands22= [...brands]
const brands23= [...brands]
const brands24= [...brands]
const brands25= [...brands]
const brands26= [...brands]
const brands27= [...brands]
const brands28= [...brands]
const brands29= [...brands]
const brands30= [...brands]
const brands31= [...brands]
const brands32= [...brands]
const brands33= [...brands]
const brands34= [...brands]
const brands35= [...brands]
const brands36= [...brands]
const brands37= [...brands]
const brands38= [...brands]
const brands39= [...brands]
const brands40= [...brands]
const brands41= [...brands]
const brands42= [...brands]
const brands43= [...brands]
const brands44= [...brands]
const brands45= [...brands]
const brands46= [...brands]
const brands47= [...brands]
const brands48= [...brands]
const brands49= [...brands]
const brands50= [...brands]

shuffle(brands1)
shuffle(brands2)
shuffle(brands3)
shuffle(brands4)
shuffle(brands5)
shuffle(brands6)
shuffle(brands7)
shuffle(brands8)
shuffle(brands9)
shuffle(brands10)
shuffle(brands11)
shuffle(brands12)
shuffle(brands13)
shuffle(brands14)
shuffle(brands15)
shuffle(brands16)
shuffle(brands17)
shuffle(brands18)
shuffle(brands19)
shuffle(brands20)
shuffle(brands21)
shuffle(brands22)
shuffle(brands23)
shuffle(brands24)
shuffle(brands25)
shuffle(brands26)
shuffle(brands27)
shuffle(brands28)
shuffle(brands29)
shuffle(brands30)
shuffle(brands31)
shuffle(brands32)
shuffle(brands33)
shuffle(brands34)
shuffle(brands35)
shuffle(brands36)
shuffle(brands37)
shuffle(brands38)
shuffle(brands39)
shuffle(brands40)
shuffle(brands41)
shuffle(brands42)
shuffle(brands43)
shuffle(brands44)
shuffle(brands45)
shuffle(brands46)
shuffle(brands47)
shuffle(brands48)
shuffle(brands49)
shuffle(brands50)

export const logos = [
    ...brands1,
    ...brands2,
    ...brands3,
    ...brands4,
    ...brands5,
    ...brands6,
    ...brands7,
    ...brands8,
    ...brands9,
    ...brands10,
    ...brands11,
    ...brands12,
    ...brands13,
    ...brands14,
    ...brands15,
    ...brands16,
    ...brands17,
    ...brands18,
    ...brands19,
    ...brands20,
    ...brands21,
    ...brands22,
    ...brands23,
    ...brands24,
    ...brands25,
    ...brands26,
    ...brands27,
    ...brands28,
    ...brands29,
    ...brands30,
    ...brands31,
    ...brands32,
    ...brands33,
    ...brands34,
    ...brands35,
    ...brands36,
    ...brands37,
    ...brands38,
    ...brands39,
    ...brands40,
    ...brands41,
    ...brands42,
    ...brands43,
    ...brands44,
    ...brands45,
    ...brands46,
    ...brands47,
    ...brands48,
    ...brands49,
    ...brands50
]