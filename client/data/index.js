import avatar from '../public/static/assets/avatar.png';
import Soumit from '../public/static/assets/srimany.jpg';
import Abhraneel from '../public/static/assets/AbhraneelKarm.png';
import Neelakshi from '../public/static/assets/neel.jpg';
import RohitC from '../public/static/assets/rohit.jpg';
import Moulendu from '../public/static/assets/moulendu.png';
import Nabajit from '../public/static/assets/nabajitb.jpg';
import Aratrik from '../public/static/assets/convAratrik2.jpg';
import diptanshu from '../public/static/assets/diptanshu.webp';
import sayan from '../public/static/assets/sayan.webp';
import sampurna from '../public/static/assets/sampurna.webp';
import pratyush from '../public/static/assets/pratyushM.png';
import sayandas from '../public/static/assets/sayanDass.jpg'
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
    'techquisitive5':{
        img: '/static/assets/techsmalllogo.jpg',
        bannerImgUrl: '/static/assets/techlogo.png',
        heading: 'Techquisitive',
        content: '<div style="margin-bottom: 0.2rem;"><b style="font-size: 1.1em;">Coding,Gaming,Quizes</b></div><div style="font-size: 0.9rem;filter: brightness(70%);">Continuing the legacy of previous seasons of Techquisitive SCCSE is back with Techquisitive season five with lots of events coding swags and many more</div>',
        date: new Date(2024, 3, 19), // Retard
        category: 'upcoming',
        registrationLink: "https://forms.gle/M5vL3sqn6HJ1AaRM9",
        pageUrl: '/events/techquisitive',
        sponsors: [
            {
                name: 'Girls Track',
                logoUrl: '/static/assets/sponsors/grid_reputation.jpg',
                href: 'https://gridreputation.com/'
            },
            {
                name: 'Most Versatile Track',
                logoUrl: '/static/assets/sponsors/gdg_kolkata.jpg',
                href: 'https://gdgcloud.kolkata.dev/ccd2023/'
            },
            {
                name: 'Freshers Track',
                logoUrl: '/static/assets/sponsors/flutter_kolkata.jpg',
                href: 'https://in.linkedin.com/company/flutter-kolkata'
            },
           
        ]
        
    },
    'interhacktive0': {
        img: '/static/assets/ih_logo.png',
        bannerImgUrl: '/static/assets/ih_1.png',
        heading: 'InterHacktive',
        content: '<div style="margin-bottom: 0.2rem;"><b style="font-size: 1.1em;">"Code, Collab, Conquer"</b></div><div style="font-size: 0.9rem;filter: brightness(70%);">First Intra-College Hackathon of AOT</div>',
        date: new Date(2023, 8, 26), // Retard
        category: 'past',
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
        img: '/static/assets/avatar.png',
        heading: 'Digital Water Solutions',
        content: 'Navigating the Future of Sustainable Resource Management ',
        date: new Date(),
        category: 'past',
        pageUrl: '/downloads/SpecialSession_banner.pdf'
    }
}



export const eventsData = [
    {
        img: '/static/assets/avatar.png',
        heading: 'One Day Symposium',
        content: '<b>"Where innovation and intelligence converge"</b><div style="font-size: 0.8rem;filter: brightness(70%);">A session on Soft Computing and Machine Learning</div>',
        date: new Date(2023, 10, 5),
        category: 'past',
    },
    {
        ...EVENTS.interhacktive0
    },
    {
        img: '/static/assets/webmaster.jpg',
        heading: 'Web Master',
        content: '<b>"An online competition on website building"</b><div style="font-size: 0.8rem;filter: brightness(70%);">participants showcased their website designing skills and got cool prizes.</div>',
        date: new Date(),
        category: 'past'
    },
    {
        img: '/static/assets/avatar.png',
        heading: 'Techquisitive 4.0',
        content: '<b>The fourth edition of our fabled tech quiz, encouraged by enthusiatic competitors from freshers to final years all over the college.</b>',
        date: new Date(),
        category: 'past'
    },
    {
        img: '/static/assets/avatar.png',
        heading: 'Technocruise',
        content: '<b>"Where Tomorrow\'s Tech Trends Begin Today!"</b><div style="font-size: 0.8rem;filter: brightness(70%);">An Ethical Hacking and IOT workshop conducted by IIT Kanpur</div>',
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
        img: '/static/assets/kuruk.jpg',
        heading: 'Kurukshetra',
        content: '<b>Crack your brains and find the power within! An ultimate online chess tournament to prove your worth.</b>',
        date: new Date(2023,11,21),
        category: 'recent'
    },
    {
        img: '/static/assets/sportiac.jpg',
        heading: 'Sportiac',
        content: '<b>Buzz the buzzer to show your power. Bonus event for getting swags, it was an online sports quiz where hundreds of students competed!</b>',
        date: new Date(2023,11,20),
        category: 'recent'
    },
    {
        ...EVENTS.CFP
    },
    {
        ...EVENTS.techquisitive5
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
                    'https://github.com/Aratrik123',
                    'https://www.linkedin.com/in/aratrik-bandyopadhyay-14755a222',
                    'https://www.instagram.com/in_dealing_dead_03/',
                ],
                quotes:'" Lack Of Communication,Transparency and Initiative degrades a community "',//socials are updated
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
                    'https://github.com/Abhirup-02',
                    'https://www.linkedin.com/in/abhirup-saha-9605b0228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                    'https://instagram.com/lead_u_to_reason?igshid=OGQ5ZDc2ODk2ZA==',//socials are updated
                ],
                quotes:'" Do whatever you want, but do it with complete focus. "',
            },
            {
                img: diptanshu,
                name: 'Diptanshu Mahish',
                desg: 'Tech Associate',
                socials: [
                    'https://github.com/diptanshumahish',
                    'https://in.linkedin.com/in/diptanshumahish',
                    'https://instagram.com/_diptanshuu_',//socials are updated
                ],
                quotes:'" Check out the productivity of the things you are learning, on a daily basis. "',
            },
            {
                img: Sayantan,
                name: 'Sayantan Sen',
                desg: 'Tech Associate',
                socials: [
                    'http://github.com/sencrypt',
                    '',
                    '',//socials are updated
                ],
                quotes:'" Work Hard, to achieve perfection in any aspect of life. "',

            },
            {
                img:Nabajit,
                name: 'Nabajit Bhadury',
                desg: 'Tech Associate',
                socials: [
                    'https://github.com/NabajitBhadury',
                    'https://www.linkedin.com/in/nabajit-bhadury-5a123b24a/',
                    'https://www.instagram.com/dh__eu/',//socials are not updated
                ],
                quotes:'" Follow your dreams, but do not forget your duty towards yourself ! "',
            },
            {
                img: Rohan,
                name: 'Rohan Mitra',
                desg: 'Tech-Team',
                socials: [
                    'https://github.com/Rohan-450',
                    'https://www.linkedin.com/in/rohan-mitra-63b7a1245/',
                    'https://www.instagram.com/_rohan._.mitra_/',//socials are updated
                ],
                quotes:'" Being jovial and funny doesnot mean you aren\'t serious, it means you care more for the people around you. "',
            },
            {
                img: Indrani,
                name: 'Indrani Som',
                desg: 'Tech-Team',
                socials: [
                    'https://github.com/IndraniSom',
                    'https://www.linkedin.com/in/indrani-som-258498248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                    'https://instagram.com/404_coder_not_found?igshid=MXNiczM3ZzJpMW1taA==',//socials are updated
                ],
                quotes:'" Intelligence does not matter unless you work smart with proper time management ! "',
            },
            {
                img: Ashis,
                name: 'Ashish Gupta',
                desg: 'Most Contributions',
                socials: [
                    'https://github.com/ASHISH26940',
                    'https://www.linkedin.com/in/ashish-gupta-1a75ba253/',
                    'https://www.instagram.com/just_ashish__/',//socials are updated
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
                    'https://github.com/Sayan67',
                    'https://www.linkedin.com/in/sayan-daas/',
                    'https://instagram.com/flute_buddy?igshid=OGQ5ZDc2ODk2ZA',
                ],
                quotes:'" Peace of mind is achieved only by enjoying the work you do. "',
            },
            {
                img: suvoneel,
                name: 'Suvoneel Basu Roychowdhury',
                desg: 'Design Associate',
                socials: [
                    '',
                    '',
                    '',
                ],
                quotes:'" Enjoy whatever you do, never regret the path you chose in! "',
            },
            {
                img: Jishnu,
                name: 'Jisnu Hazra',
                desg: 'Design Associate',
                socials: [
                    'https://github.com/Jisnu3',
                    'https://www.linkedin.com/in/jisnu-hazra-a26220261',
                    'https://instagram.com/ilon.ilon.3998?igshid=ZDdkNTZiNTM=',
                ],
                quotes:'" A wonderful design gives a soothing sensation to your mind. "',
            },
            {
                img: ssc,
                name: 'Sankha Subhro Chakraborty',
                desg: 'Most Contributions',
                socials: [
                    '',
                    'https://www.linkedin.com/in/sankha-subhra-chakraborty-119598273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                    'https://www.instagram.com/honour_in_blood?igshid=MzMyNGUyNmU2YQ%3D%3D',
                ],
                quotes:'" Learn to balance your work and friendships together, as this time won\'t come back ! "',
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
                    'https://github.com/Sayan044',
                    'https://www.linkedin.com/in/sayan-mukherjee-975175229/',
                    'https://www.instagram.com/1010_sayhack/',
                ],
                quotes:'" A perfect life is impossible, but stay true to your conscience always ! "',
            },
            {
                img: RohitC,
                name: 'Rohit Chakrabarti',
                desg: 'Designer',
                socials: [
                    'https://github.com/rohit32999',
                    'https://www.linkedin.com/in/rohit-chakrabarti-04b981230/',
                    'https://www.instagram.com/_.rohit.2002/',
                ],
                quotes:'" Sincerity to your work will help you gain a valuable virtue in future. "',
            },
            {
                img: heya,
                name: 'Heya Banerjee',
                desg: 'Marketing Associate',
                socials: [
                    '',
                    'https://www.linkedin.com/in/heya-banerjee-963801280/',
                    'https://www.instagram.com/_.__heya__._/',
                ],
                quotes:'" Self-confidence and seriousness is very much necessary to form a perfect community. "',
            },
            {
                img: Abhraneel,
                name: 'Abhraneel Karmakar ',
                desg: 'Most Contributions',
                socials: [
                    'https://github.com/abhraneel2004',
                    'https://www.linkedin.com/in/abhraneel-karmakar-1b51971ba/',
                    'https://www.instagram.com/abhraneel.karmakar/',
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
                    'https://github.com/Aratrik123',
                    'https://www.linkedin.com/in/aratrik-bandyopadhyay-14755a222',
                    'https://www.instagram.com/in_dealing_dead_03/'
                ],
                quotes:'" Lack Of Communication,Transparency and Initiative degrades a community "',
            },
            {
                img: Sayantan,
                name: 'Sayantan Sen',
                desg: 'Management Team',
                socials: [
                    'http://github.com/sencrypt',
                    '',
                    '',
                ],
                quotes:'" Work Hard, to achieve perfection in any aspect of life. "',

            },
            {
                img:Nabajit,
                name: 'Nabajit Bhadury',
                desg: 'Management Team',
                socials: [
                    'https://github.com/NabajitBhadury',
                    'https://www.linkedin.com/in/nabajit-bhadury-5a123b24a/',
                    'https://www.instagram.com/dh__eu/',//socials are updated
                ],
                quotes:'" Follow your dreams, but do not forget your duty towards yourself ! "',
            },
            {
                img: sayan,
                name: 'Sayan Mukherjee',
                desg: 'Management Team',
                socials: [
                    'https://github.com/Sayan044',
                    'https://www.linkedin.com/in/sayan-mukherjee-975175229/',
                    'https://www.instagram.com/1010_sayhack/',
                ],
                quotes:'" A perfect life is impossible, but stay true to your conscience always ! "',
            },
            {
                img: pratyush,
                name: 'Pratyush Mahapatra',
                desg: 'Contributor and Advisor',
                socials: [
                    'https://github.com/Pratyush-0',
                    'https://www.linkedin.com/in/pratyush-mahapatra-715a39258/',
                    'https://www.instagram.com/the_desi_bengali/'
                ],

            },
            {
                img: Soumit,
                name: 'Soumit Srimany',
                desg: 'Tech Team',
                socials: [
                    'https://github.com/soumit-s',
                    'https://www.linkedin.com/in/soumit-srimany-4bb443241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                    'https://www.instagram.com/in_dealing_dead_03/'
                ],

            },
            {
                img: Kaushik,
                name: 'Kaushik Chowdhury',
                desg: 'Tech Team',
                socials: [
                    'https://github.com/darkard2003',
                    'https://www.linkedin.com/in/kaushik-chowdhury-379146266/',
                    'https://www.instagram.com/_.code._.life._/'
                ],

            },
            {
                img: Neelakshi,
                name: 'Neelakshi Das',
                desg: 'Tech Team',
                socials: [
                    'https://github.com/bluecoder2003',
                    'https://www.linkedin.com/in/neelakshi-das-b0ba68244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
                    'https://instagram.com/_crimson_2003?igshid=bXpxMmQ1b2RnamRh'
                ],

            },
            {
                img: sampurna,
                name: 'Sampurna Dan',
                desg: 'Contributor and Advisor',
                socials: [
                    '',
                    '',
                    'https://www.instagram.com/sampurna__18/'
                ],

            },
            {
                img: Moulendu,
                name: 'Moulendu Chowley',
                desg: 'Design Team',
                socials: [
                    'https://github.com/Moulendu-Chowley',
                    'https://www.linkedin.com/in/moulendu',
                    'https://instagram.com/moulendu.dev?igshid=cGg4ZjBkbjV2cWls'
                ],

            },
            {
                img: surendra,
                name: 'Surendra Nath Chakraborty',
                desg: 'Design Team',
                socials: [
                    'https://github.com/surendra4you',
                    'https://www.linkedin.com/in/surendranath-chakraborty-740925260/',
                    ''
                ],

            },


        ]

    },
];
