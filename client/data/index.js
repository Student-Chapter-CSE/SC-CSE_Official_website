import avatar from '../public/static/assets/avatar.png';
import Soumit from '../public/static/assets/srimany.jpg';
import Abhraneel from '../public/static/assets/AbhraneelKarm.png';
import Neelakshi from '../public/static/assets/neel.jpg';
import RohitC from '../public/static/assets/rohitc.webp';
import Moulendu from '../public/static/assets/moulendu.png';
import Nabajit from '../public/static/assets/nabajitb.jpg';
import Aratrik from '../public/static/assets/convAratrik2.jpg';
import diptanshu from '../public/static/assets/diptanshu.webp';
import sayan from '../public/static/assets/sayan.webp';
import sampurna from '../public/static/assets/sampurna.webp';
import pratyush from '../public/static/assets/pratyush.webp';
import sayandas from '../public/static/assets/sayandas.webp'
import heya from '../public/static/assets/heyaban.jpg'
import surendra from '../public/static/assets/surendranath.png'
import ssc from '../public/static/assets/SSC.png'
import abhi from '../public/static/assets/abhi.jpg'
import suvoneel from '../public/static/assets/suvoneel.jpg'
import Kaushik from '../public/static/assets/kaushik.jpg';
import Rohan from '../public/static/assets/rohan.jpg';
import Ashis from '../public/static/assets/ashis.jpg';
import Jishnu from '../public/static/assets/jisnu.jpg';
import Sayantan from '../public/static/assets/sayantan.png';
import Indrani from '../public/static/assets/indrani.jpg';

export const EVENTS = {
    'interhacktive0': {
        img: '/static/assets/ih_logo.png',
        bannerImgUrl: '/static/assets/ih_1.png',
        heading: 'InterHacktive',
        content: '<div style="margin-bottom: 0.2rem;"><b style="font-size: 1.1em;">"Code, Collab, Conquer"</b></div><div style="font-size: 0.9rem;filter: brightness(70%);">First Intra-College Hackathon of AOT</div>',
        date: new Date(2023, 8, 26), // Retard
        category: 'recent',
        registrationLink: "https://forms.gle/1v6a6KyMENJUbCG69",
        pageUrl: '/events/interhacktive',
        sponsors: [
            {
                name: 'Grid Reputation',
                logoUrl: '/static/assets/sponsors/grid_reputation.jpg',
                href: 'https://gridreputation.com/'
            },
            {
                name: 'Google Cloud Kolkata',
                logoUrl: '/static/assets/sponsors/gdg_kolkata.jpg',
                href: 'https://gdgcloud.kolkata.dev/ccd2023/'
            },
            {
                name: 'Flutter Kolkata',
                logoUrl: '/static/assets/sponsors/flutter_kolkata.jpg',
                href: 'https://in.linkedin.com/company/flutter-kolkata'
            },
            {
                name: 'Dimension Labs',
                logoUrl: '/static/assets/sponsors/dim_labs.png',
                href: 'https://www.dimensionlabs.in/'
            }
        ]
    },
    'CFP': {
        img: '',
        heading: '',
        content: '',
        date: new Date(),
        category: 'upcoming',
        pageUrl: '/downloads/SpecialSession_banner.pdf'
    }
}



export const eventsData = [
    {
        img: '/static/assets/avatar.png',
        heading: 'Technocruise',
        content: '<b>Where Tomorrow\'s Tech Trends Begin Today!</b>',
        date: new Date(),
        category: 'past'
    },
    {
        img: '/static/assets/avatar.png',
        heading: 'Stride',
        content: '<b>Alumnus & industry experts, took part in a 10-day streak of webinar-seminar, to provide their valuable experience!</b>',
        date: new Date(),
        category: 'past'
    },
    {
        img: '/static/assets/avatar.png',
        heading: 'One Day Symposium',
        content: '<b>"Where innovation and intelligence converge"</b><div style="font-size: 0.8rem;filter: brightness(70%);">A session on Soft Computing and Machine Learning</div>',
        date: new Date(2023, 10, 5),
        category: 'recent',
    },
    {
        ...EVENTS.interhacktive0
    },
    {
        ...EVENTS.CFP
    }
];

export const getUpcomingEvents = () => {
    return eventsData.filter(event => event.category === 'upcoming')
}

export const teams = [
    {
        title: 'Convener',
        members: [
            {
                img: Aratrik,
                name: 'Aratrik Bandyopadhay',
                desg: 'Convener',
                socials: [
                    '',
                    'https://www.linkedin.com/in/aratrik-bandyopadhyay-14755a222',
                    'https://www.instagram.com/in_dealing_dead_03/',
                ],
                quotes:'" Lack Of Communication,Transparency and initiative degrades a community "',//socials are updated
            },
           
        ],
    },
    {
        title: 'Tech Team',
        members: [
            {
                img: abhi,
                name: 'Abhirup Saha',
                desg: 'Tech Associate',
                socials: [
                    'https://github.com/arnab2001',
                    'https://www.linkedin.com/in/arnab-chatterjee-9a0253187',
                    'https://instagram.com/arnab.chatterjee.0?igshid=MzNlNGNkZWQ4Mg==',//socials are not updated
                ],
                quotes:'" Do whatever you want, but do it with complete focus. "',
            },
            {
                img: diptanshu,
                name: 'Diptanshu Mhaish',
                desg: 'Tech Associate',
                socials: [
                    'https://github.com/bishakhne0gi',
                    'https://www.linkedin.com/in/bishakh-neogi-387815205/',
                    'https://www.instagram.com/bishakh.neogi/',//socials are not updated
                ],
                quotes:'" Check out the productivity of the things you are learning, on a daily basis. "',
            },
            {
                img: Sayantan,
                name: 'Sayantan Sen',
                desg: 'Tech Associate',
                socials: [
                    'https://github.com/bishakhne0gi',
                    'https://www.linkedin.com/in/bishakh-neogi-387815205/',
                    'https://www.instagram.com/bishakh.neogi/',//socials are not updated
                ],
                quotes:'" Work Hard, to achieve perfection in any aspect of life. "',

            },
            {
                img:Nabajit,
                name: 'Nabajit Bhadury',
                desg: 'Tech Associate',
                socials: [
                    'https://github.com/IRSHIT033',
                    'https://www.linkedin.com/in/irshit-mukherjee-693a99219/',
                    'https://www.instagram.com/irshit_mukerjee_10/',//socials are not updated
                ],
                quotes:'" Follow your dreams, but donot forget your duty towards yourself ! "',
            },
            {
                img: Rohan,
                name: 'Rohan Mitra',
                desg: 'Tech-Team',
                socials: [
                    'https://github.com/Rohan-450',
                    'https://www.linkedin.com/in/rohan-mitra-63b7a1245/',
                    'https://www.instagram.com/_rohan._.mitra_/',//socials are not updated
                ],
                quotes:'" Being jovial and funny doesnot mean you arent serious, it means you care more for the people around you. "',
            },
            {
                img: Indrani,
                name: 'Indrani Som',
                desg: 'Tech-Team',
                socials: [
                    'https://github.com/bishakhne0gi',
                    'https://www.linkedin.com/in/bishakh-neogi-387815205/',
                    'https://www.instagram.com/bishakh.neogi/',//socials are not updated
                ],
                quotes:'" Intelligence doesnot matter unless you work smart with proper timemanagement! "',
            },
            {
                img: Ashis,
                name: 'Ashish Gupta',
                desg: 'Most Contributions',
                socials: [
                    'https://github.com/SlicePoh',
                    'https://www.linkedin.com/in/shanit-paul-746026205/',
                    'https://www.instagram.com/_s_h_a_n_i_t_/',//socials are not updated
                ],
                quotes:'" Smart work is always rewarded with knowledge. "',
            },
            
        ],
    },
    {
        title: 'Design Team',
        members: [
            {
                img: sayandas,
                name: 'Sayan Das',
                desg: 'Design Associate',
                socials: [
                    'https://github.com/Mayukh-Ghosh',
                    'https://www.linkedin.com/in/mayukh-ghosh-7ab511200/ ',
                    'https://www.instagram.com/mr._.mayukh1011/',
                ],
                quotes:'" Peace of mind is achieved only by enjoying the work you do. "',
            },
            {
                img: suvoneel,
                name: 'Subhroneel Basu Roychowdhury',
                desg: 'Design Associate',
                socials: [
                    '',
                    'https://www.linkedin.com/in/debdeep-maitra-b66552220/',
                    'https://www.instagram.com/its_wrishi/',
                ],
                quotes:'" Enjoy whatever you do, never regret the path you chose in! "',
            },
            {
                img: Jishnu,
                name: 'Jisnu Hazra',
                desg: 'Design Associate',
                socials: [
                    'https://github.com/arnab-028',
                    'https://www.linkedin.com/in/arnab-kumar-ghosh-3318a520b',
                    'https://instagram.com/arnab_ghosh04?igshid=NGExMmI2YTkyZg==',
                ],
                quotes:'" A wonderful design gives a soothing sensation to your mind. "',
            },
            {
                img: ssc,
                name: 'Sankha Subhro Chakraborty',
                desg: 'Most Contributions',
                socials: [
                    '',
                    'https://www.linkedin.com/in/srijan-mukherjee-6342a321b/',
                    'https://www.instagram.com/srijan_mukherjee/',
                ],
                quotes:'" Learn to balance your work and friendships together, as this time wont come back ! "',
            },
            
        ],
    },
    {
        title: 'PR Team',
        members: [
            {
                img: sayan,
                name: 'Sayan Mukherjee',
                desg: 'Marketing Associate',
                socials: [
                    'https://github.com/DhritiSundarSaha',
                    'https://www.linkedin.com/in/dhriti-sundar-saha-90403b1b4',
                    'https://instagram.com/dhritisundarsaha?igshid=MzRlODBiNWFlZA==',
                ],
                quotes:'" A perfect life is impossible, but stay true to your conscience always ! "',
            },
            {
                img: RohitC,
                name: 'Rohit Chakrabarti',
                desg: 'Designer',
                socials: [
                    'https://www.github.com/soumit-s',
                    'https://www.linkedin.com/in/moulendu',
                    'https://instagram.com/moulendu.dev',
                ],
                quotes:'" Sincerity to your work will help you gain a valuable virtue in future. "',
            },
            {
                img: heya,
                name: 'Heya Banerjee',
                desg: 'Marketing Associate',
                socials: [
                    'https://github.com/abhraneel2004',
                    'https://www.linkedin.com/in/abhraneel-karmakar-1b51971ba/',
                    'https://www.instagram.com/abhraneel.karmakar/',
                ],
                quotes:'" Self-confidence and seriousness is very much necessary to form a perfect community. "',
            },
            {
                img: Abhraneel,
                name: 'Abhraneel Karmakar ',
                desg: 'Most Contributions',
                socials: [
                    'https://github.com/rohitcodism',
                    'https://www.linkedin.com/in/rohit-paul-bba868251',
                    'https://instagram.com/rohitpaul332?igshid=MzNlNGNkZWQ4Mg==',
                ],
                quotes:'" Love your art. Everyone will leave you, but your passion won\'t ! "',
            },

            
        ],
    },
    {
        title:'Notable Contributors',
        members:[
            {
                img: Aratrik,
                name: 'Aratrik Bandyopadhay',
                desg: 'Convener',
                socials: [
                    '',
                    'https://www.linkedin.com/in/aratrik-bandyopadhyay-14755a222',
                    'https://www.instagram.com/in_dealing_dead_03/'
                ],
            },
            {
                img: Sayantan,
                name: 'Sayantan Sen',
                desg: 'Management Team',
                socials: [
                    'https://github.com/bishakhne0gi',
                    'https://www.linkedin.com/in/bishakh-neogi-387815205/',
                    'https://www.instagram.com/bishakh.neogi/',//socials are not updated
                ],

            },
            {
                img:Nabajit,
                name: 'Nabajit Bhadury',
                desg: 'Management Team',
                socials: [
                    'https://github.com/IRSHIT033',
                    'https://www.linkedin.com/in/irshit-mukherjee-693a99219/',
                    'https://www.instagram.com/irshit_mukerjee_10/',//socials are not updated
                ],
            },
            {
                img: sayan,
                name: 'Sayan Mukherjee',
                desg: 'Management Team',
                socials: [
                    'https://github.com/DhritiSundarSaha',
                    'https://www.linkedin.com/in/dhriti-sundar-saha-90403b1b4',
                    'https://instagram.com/dhritisundarsaha?igshid=MzRlODBiNWFlZA==',
                ],
            },
            {
                img: pratyush,
                name: 'Pratyush Mahapatra',
                desg: 'Contributor and Advisor',
                socials: [
                    '',
                    'https://www.linkedin.com/in/aratrik-bandyopadhyay-14755a222',
                    'https://www.instagram.com/in_dealing_dead_03/'
                ],

            },
            {
                img: Soumit,
                name: 'Soumit Srimany',
                desg: 'Tech Team',
                socials: [
                    '',
                    'https://www.linkedin.com/in/aratrik-bandyopadhyay-14755a222',
                    'https://www.instagram.com/in_dealing_dead_03/'
                ],

            },
            {
                img: Kaushik,
                name: 'Kaushik Chowdhury',
                desg: 'Tech Team',
                socials: [
                    '',
                    'https://www.linkedin.com/in/aratrik-bandyopadhyay-14755a222',
                    'https://www.instagram.com/in_dealing_dead_03/'
                ],

            },
            {
                img: Neelakshi,
                name: 'Neelakshi Das',
                desg: 'Tech Team',
                socials: [
                    '',
                    'https://www.linkedin.com/in/aratrik-bandyopadhyay-14755a222',
                    'https://www.instagram.com/in_dealing_dead_03/'
                ],

            },
            {
                img: sampurna,
                name: 'Sampurna Dan',
                desg: 'Contributor and Advisor',
                socials: [
                    '',
                    'https://www.linkedin.com/in/aratrik-bandyopadhyay-14755a222',
                    'https://www.instagram.com/in_dealing_dead_03/'
                ],

            },
            {
                img: Moulendu,
                name: 'Moulendu Chowley',
                desg: 'Design Team',
                socials: [
                    '',
                    'https://www.linkedin.com/in/aratrik-bandyopadhyay-14755a222',
                    'https://www.instagram.com/in_dealing_dead_03/'
                ],

            },
            {
                img: surendra,
                name: 'Surendra Nath Chakraborty',
                desg: 'Design Team',
                socials: [
                    '',
                    'https://www.linkedin.com/in/aratrik-bandyopadhyay-14755a222',
                    'https://www.instagram.com/in_dealing_dead_03/'
                ],

            },


        ]

    },
];
