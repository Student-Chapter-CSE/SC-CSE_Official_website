import avatar from '../public/static/assets/avatar.png';
import Bishakh from '../public/static/assets/neogi.webp';
import Irshit from '../public/static/assets/irshit.webp';
import Soumit from '../public/static/assets/soumit.webp';
import Abhraneel from '../public/static/assets/abhraneel.webp';
import Prasun from '../public/static/assets/prasun.webp';
import Mayukh from '../public/static/assets/mayukh.webp';
import Neelakshi from '../public/static/assets/neelakshi.webp';
import RohitC from '../public/static/assets/rohitc.webp';
import Moulendu from '../public/static/assets/moulendu.webp';
import ArnabKr from '../public/static/assets/ArnabKr.webp';
import Nabajit from '../public/static/assets/nabajit.webp';
import Aratrik from '../public/static/assets/Aratrik.webp';
import Arnab from '../public/static/assets/Arnab.webp';
import pritanshu from '../public/static/assets/prit.webp';
import joydeep from '../public/static/assets/joydeep.webp';
import dhriti from '../public/static/assets/Dhriti.webp';
import rohitp from '../public/static/assets/rohitP.webp';
import diptanshu from '../public/static/assets/diptanshu.webp';
import debdeep from '../public/static/assets/debdeep.webp';
import sayan from '../public/static/assets/sayan.webp';
import sampurna from '../public/static/assets/sampurna.webp';
import pratyush from '../public/static/assets/pratyush.webp';
import shinjini_bose from '../public/static/assets/shinjini_bose.webp';
import sayandas from '../public/static/assets/sayandas.webp'
import shanit from '../public/static/assets/shanit.webp'
import rayoti from '../public/static/assets/rayoti.webp'
import koustav from '../public/static/assets/koustav.webp'
import sulagna from '../public/static/assets/sulagna.webp'
import heya from '../public/static/assets/heya.webp'
import srijan from '../public/static/assets/srijan.webp'


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
                img: avatar,//picture of abhirup da is needed
                name: 'Abhirup Saha',
                desg: 'Tech Associate',
                socials: [
                    'https://github.com/arnab2001',
                    'https://www.linkedin.com/in/arnab-chatterjee-9a0253187',
                    'https://instagram.com/arnab.chatterjee.0?igshid=MzNlNGNkZWQ4Mg==',//socials are not updated
                ],
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
            },
            {
                img: avatar,
                name: 'Sayantan Sen',
                desg: 'Tech Associate',
                socials: [
                    'https://github.com/bishakhne0gi',
                    'https://www.linkedin.com/in/bishakh-neogi-387815205/',
                    'https://www.instagram.com/bishakh.neogi/',//socials are not updated
                ],

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
            },
            {
                img: avatar,
                name: 'Ashish Gupta',
                desg: 'Most Contributors',
                socials: [
                    'https://github.com/SlicePoh',
                    'https://www.linkedin.com/in/shanit-paul-746026205/',
                    'https://www.instagram.com/_s_h_a_n_i_t_/',//socials are not updated
                ],
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
            },
            {
                img: avatar,
                name: 'Subhroneel Basu Roychowdhury',
                desg: 'Design Associate',
                socials: [
                    '',
                    'https://www.linkedin.com/in/debdeep-maitra-b66552220/',
                    'https://www.instagram.com/its_wrishi/',
                ],
            },
            {
                img: avatar,
                name: 'Jisnu Hazra',
                desg: 'Design Associate',
                socials: [
                    'https://github.com/arnab-028',
                    'https://www.linkedin.com/in/arnab-kumar-ghosh-3318a520b',
                    'https://instagram.com/arnab_ghosh04?igshid=NGExMmI2YTkyZg==',
                ],
            },
            {
                img: avatar,
                name: 'Sankha Subhro Chakraborty',
                desg: 'Most Contributors',
                socials: [
                    '',
                    'https://www.linkedin.com/in/srijan-mukherjee-6342a321b/',
                    'https://www.instagram.com/srijan_mukherjee/',
                ],
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
                img: diptanshu,
                name: 'Sayantan Sen',
                desg: 'Tech Associate',
                socials: [
                    'https://github.com/bishakhne0gi',
                    'https://www.linkedin.com/in/bishakh-neogi-387815205/',
                    'https://www.instagram.com/bishakh.neogi/',//socials are not updated
                ],

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
            },
            {
                img: sayan,
                name: 'Sayan Mukherjee',
                desg: 'Marketing Associate',
                socials: [
                    'https://github.com/DhritiSundarSaha',
                    'https://www.linkedin.com/in/dhriti-sundar-saha-90403b1b4',
                    'https://instagram.com/dhritisundarsaha?igshid=MzRlODBiNWFlZA==',
                ],
            },
            {
                img: avatar,
                name: 'Pratyush Mahapatra',
                desg: 'Convener',
                socials: [
                    '',
                    'https://www.linkedin.com/in/aratrik-bandyopadhyay-14755a222',
                    'https://www.instagram.com/in_dealing_dead_03/'
                ],

            },
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
                img: Aratrik,
                name: 'Aratrik Bandyopadhay',
                desg: 'Convener',
                socials: [
                    '',
                    'https://www.linkedin.com/in/aratrik-bandyopadhyay-14755a222',
                    'https://www.instagram.com/in_dealing_dead_03/'
                ],

            },


        ]

    },
];
