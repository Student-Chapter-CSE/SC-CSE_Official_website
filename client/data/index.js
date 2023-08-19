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


export const EVENTS = {
    'interhacktive0': {
        img: '/static/assets/ih_logo.png',
        bannerImgUrl: '/static/assets/ih_1.png',
        heading: 'InterHacktive',
        content: '<div style="margin-bottom: 0.2rem;"><b style="font-size: 1.1em;">"Code, Collab, Conquer"</b></div><div style="font-size: 0.9rem;filter: brightness(70%);">First Intra-College Hackathon of AOT</div>',
        date: new Date(2023, 8, 26), // Retard
        category: 'upcoming',
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
}



export const eventsData = [
    {
        id: 1,
        img: '/static/assets/avatar.png',
        heading: 'Stride',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        date: new Date(),
        category: 'past'
    },
    {
        id: 2,
        img: '/static/assets/avatar.png',
        heading: 'Technocruise',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
        date: new Date(),
        category: 'past'
    },
    {
        id: 3, ...EVENTS.interhacktive0
    }
];

export const getUpcomingEvents = () => {
    return eventsData.filter(event => event.category === 'upcoming')
}

export const teams = [
    {
        title: 'Executive Team',
        members: [
            {
                img: Prasun,
                name: 'Prasun kr Mondal',
                desg: 'Convener',
                socials: [
                    'https://github.com/obito038',
                    'https://www.linkedin.com/in/prasun-kr-mondal-b25320214/',
                    'https://www.instagram.com/subodh_chele/',
                ],
            },
            {
                img: dhriti,
                name: 'Dhriti Sundar Saha',
                desg: 'Asst. Convener',
                socials: [
                    'https://github.com/DhritiSundarSaha',
                    'https://www.linkedin.com/in/dhriti-sundar-saha-90403b1b4',
                    'https://instagram.com/dhritisundarsaha?igshid=MzRlODBiNWFlZA==',
                ],
            },
            {
                img: Mayukh,
                name: 'Mayukh Ghosh',
                desg: 'PR Lead',
                socials: [
                    'https://github.com/Mayukh-Ghosh',
                    'https://www.linkedin.com/in/mayukh-ghosh-7ab511200/ ',
                    'https://www.instagram.com/mr._.mayukh1011/',
                ],
            },
            {
                img: debdeep,
                name: 'Debdeep Maitra',
                desg: 'PR Co-Lead',
                socials: [
                    '',
                    'https://www.linkedin.com/in/debdeep-maitra-b66552220/',
                    'https://www.instagram.com/its_wrishi/',
                ],
            },
        ],
    },
    {
        title: 'Tech Team',
        members: [
            {
                img: Arnab,
                name: 'Arnab Chatterjee',
                desg: 'Tech Lead',
                socials: [
                    'https://github.com/arnab2001',
                    'https://www.linkedin.com/in/arnab-chatterjee-9a0253187',
                    'https://instagram.com/arnab.chatterjee.0?igshid=MzNlNGNkZWQ4Mg==',
                ],
            },
            {
                img: Bishakh,
                name: 'Bishakh Neogi',
                desg: 'Tech Co-Lead',
                socials: [
                    'https://github.com/bishakhne0gi',
                    'https://www.linkedin.com/in/bishakh-neogi-387815205/',
                    'https://www.instagram.com/bishakh.neogi/',
                ],
            },
            {
                img: Irshit,
                name: 'Irshit Mukherjee',
                desg: 'Tech Co-Lead',
                socials: [
                    'https://github.com/IRSHIT033',
                    'https://www.linkedin.com/in/irshit-mukherjee-693a99219/',
                    'https://www.instagram.com/irshit_mukerjee_10/',
                ],
            },
            {
                img: avatar,
                name: 'Abhirup Saha',
                desg: 'Upcoming Tech Lead',
                socials: [
                    'https://github.com/Abhirup-02',
                    'https://www.linkedin.com/in/abhirup-saha-9605b0228',
                    'https://www.instagram.com/lead_u_to_reason/',
                ],
            },
            {
                img: Soumit,
                name: 'Soumit Srimany',
                desg: 'Upcoming Tech Co-Lead',
                socials: [
                    'https://www.github.com/soumit-s',
                    'https://www.linkedin.com/in/soumit-srimany-4bb443241',
                    'https://www.instagram.com/_._soumit_._/',
                ],
            },
            {
                img: diptanshu,
                name: 'Diptanshu Mahish',
                desg: 'Upcoming Tech Co-Lead',
                socials: [
                    'https://github.com/diptanshumahish',
                    'https://www.linkedin.com/in/diptanshumahish/',
                    'https://www.instagram.com/_diptanshuu_/',
                ],
            },
            {
                img: Nabajit,
                name: 'Nabajit Bhadury',
                desg: 'Member',
                socials: [
                    'https://github.com/NabajitBhadury',
                    'https://www.linkedin.com/in/nabajit-bhadury-5a123b24a',
                    'https://instagram.com/rohitpaul332?igshid=MzNlNGNkZWQ4Mg==',
                ],
            },
        ],
    },
    {
        title: 'PR Team',
        members: [
            {
                img: Mayukh,
                name: 'Mayukh Ghosh',
                desg: 'PR Lead',
                socials: [
                    'https://github.com/Mayukh-Ghosh',
                    'https://www.linkedin.com/in/mayukh-ghosh-7ab511200/ ',
                    'https://www.instagram.com/mr._.mayukh1011/',
                ],
            },
            {
                img: debdeep,
                name: 'Debdeep Maitra',
                desg: 'PR Co-Lead',
                socials: [
                    '',
                    'https://www.linkedin.com/in/debdeep-maitra-b66552220/',
                    'https://www.instagram.com/its_wrishi/',
                ],
            },
            {
                img: ArnabKr,
                name: 'Arnab Ghosh',
                desg: 'Content Lead',
                socials: [
                    'https://github.com/arnab-028',
                    'https://www.linkedin.com/in/arnab-kumar-ghosh-3318a520b',
                    'https://instagram.com/arnab_ghosh04?igshid=NGExMmI2YTkyZg==',
                ],
            },
            {
                img: sampurna,
                name: 'Sampurna Dan',
                desg: 'PR Team',
                socials: [
                    'https://github.com/SampurnaDan23',
                    'https://www.linkedin.com/in/sampurna-dan-a91423222',
                    'https://instagram.com/sampurna__18?igshid=MzNlNGNkZWQ4Mg=='
                ]
            },
            {
                img: pratyush,
                name: 'Pratyush Mohapatra',
                desg: 'PR Team',
                socials: [
                    'https://github.com/Pratyush-0',
                    'https://www.linkedin.com/in/pratyush-mahapatra-715a39258',
                    'https://instagram.com/the_desi_bengali?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'
                ]
            },
            {
                img: shinjini_bose,
                name: 'Shinjini Bose',
                desg: 'PR Team',
                socials: [
                    'https://github.com/shinjini-bose',
                    'https://www.linkedin.com/in/shinjini-bose-9aa57b23a/',
                    'https://www.instagram.com/shinjineeeeee/'
                ]
            },
            {
                img: sayandas,
                name: 'Sayan Das',
                desg: 'PR Team',
                socials: [
                    'https://github.com/Sayan67',
                    'https://www.linkedin.com/in/sayan-das-435b1721a',
                    'https://www.instagram.com/flute_buddy/'
                ]
            },
            {
                img: Aratrik,
                name: 'Aratrik Bandhopadhyay',
                desg: 'Marketing Lead',
                socials: [
                    '',
                    'https://www.linkedin.com/in/aratrik-bandyopadhyay-14755a222',
                    'https://www.instagram.com/in_dealing_dead_03/',
                ],
            },
            {
                img: sayan,
                name: 'Sayan Mukherjee',
                desg: 'Marketing Co-Lead',
                socials: [
                    'https://github.com/Sayan044',
                    'https://www.linkedin.com/in/sayan-mukherjee-975175229',
                    'https://instagram.com/1010_sayhack?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D'
                ]
            },
            {
                img: RohitC,
                name: 'Rohit Chakrabarti',
                desg: 'Social-Media Team',
                socials: [
                    'https://github.com/rohit32999',
                    'https://www.linkedin.com/in/rohit-chakrabarti-04b981230/',
                    'https://instagram.com/dr3am3r_2002?utm_source=qr&igshid=NGExMmI2YTkyZg%3D%3D',
                ],
            },
            {
                img: pritanshu,
                name: 'Pritanshu Samanta ',
                desg: 'Social-Media Team',
                socials: [
                    'https://github.com/Pritanshu69',
                    'https://www.linkedin.com/in/pritanshu-samanta-956450260/',
                    'https://instagram.com/__pritfloyd__?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D',
                ],
            },
            {
                img: joydeep,
                name: 'Joydip Rakshit',
                desg: 'Social-Media Team',
                socials: [
                    'https://github.com/0ShinChane',
                    'https://www.linkedin.com/in/joydip-rakshit-157740271/',
                    'https://www.instagram.com/joydip_rakshit/',
                ],
            },
        ],
    },
    {
        title: 'Design Team',
        members: [
            {
                img: dhriti,
                name: 'Dhriti Sundar Saha',
                desg: 'Asst. Convener',
                socials: [
                    'https://github.com/DhritiSundarSaha',
                    'https://www.linkedin.com/in/dhriti-sundar-saha-90403b1b4',
                    'https://instagram.com/dhritisundarsaha?igshid=MzRlODBiNWFlZA==',
                ],
            },
            {
                img: Moulendu,
                name: 'Moulendu Chowley',
                desg: 'Designer',
                socials: [
                    'https://www.github.com/soumit-s',
                    'https://www.linkedin.com/in/moulendu',
                    'https://instagram.com/moulendu.dev',
                ],
            },
            {
                img: Abhraneel,
                name: 'Abhraneel Karmakar',
                desg: 'Designer',
                socials: [
                    'https://github.com/abhraneel2004',
                    'https://www.linkedin.com/in/abhraneel-karmakar-1b51971ba/',
                    'https://www.instagram.com/abhraneel.karmakar/',
                ],
            },
            {
                img: rohitp,
                name: 'Rohit Paul ',
                desg: 'Designer',
                socials: [
                    'https://github.com/rohitcodism',
                    'https://www.linkedin.com/in/rohit-paul-bba868251',
                    'https://instagram.com/rohitpaul332?igshid=MzNlNGNkZWQ4Mg==',
                ],
            },

            {
                img: Neelakshi,
                name: 'Neelakshi Das',
                desg: 'Designer',
                socials: [
                    'https://github.com/bluecoder2003',
                    'https://www.linkedin.com/in/neelakshi-das-b0ba68244',
                    'https://instagram.com/_crimson_2003?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
                ],
            },
        ],
    },
];
