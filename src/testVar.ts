import axios from 'axios'

export const validJson = {
    "payload": [
        {
            "country": "UK",
            "description": "What's life like when you have enough children to field your own football team?",
            "drm": true,
            "episodeCount": 3,
            "genre": "Reality",
            "image": {
                "showImage": "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg"
            },
            "language": "English",
            "nextEpisode": null,
            "primaryColour": "#ff7800",
            "seasons": [
                {
                    "slug": "show/16kidsandcounting/season/1"
                }
            ],
            "slug": "show/16kidsandcounting",
            "title": "16 Kids and Counting",
            "tvChannel": "GEM"
        },
        {
            "slug": "show/seapatrol",
            "title": "Sea Patrol",
            "tvChannel": "Channel 9"
        },
        {
            "country": " USA",
            "description": "The Taste puts 16 culinary competitors in the kitchen, where four of the World's most notable culinary masters of the food world judges their creations based on a blind taste. Join judges Anthony Bourdain, Nigella Lawson, Ludovic Lefebvre and Brian Malarkey in this pressure-packed contest where a single spoonful can catapult a contender to the top or send them packing.",
            "drm": true,
            "episodeCount": 2,
            "genre": "Reality",
            "image": {
                "showImage": "http://mybeautifulcatchupservice.com/img/shows/TheTaste1280.jpg"
            },
            "language": "English",
            "nextEpisode": {
                "channel": null,
                "channelLogo": "http://mybeautifulcatchupservice.com/img/player/logo_go.gif",
                "date": null,
                "html": "<br><span class=\"visit\">Visit the Official Website</span></span>",
                "url": "http://go.ninemsn.com.au/"
            },
            "primaryColour": "#df0000",
            "seasons": [
                {
                    "slug": "show/thetaste/season/1"
                }
            ],
            "slug": "show/thetaste",
            "title": "The Taste",
            "tvChannel": "GEM"
        },
        {
            "country": "UK",
            "description": "The series follows the adventures of International Rescue, an organisation created to help those in grave danger using technically advanced equipment and machinery. The series focuses on the head of the organisation, ex-astronaut Jeff Tracy, and his five sons who piloted the \"Thunderbird\" machines.",
            "drm": true,
            "episodeCount": 24,
            "genre": "Action",
            "image": {
                "showImage": "http://mybeautifulcatchupservice.com/img/shows/Thunderbirds_1280.jpg"
            },
            "language": "English",
            "nextEpisode": null,
            "primaryColour": "#0084da",
            "seasons": [
                {
                    "slug": "show/thunderbirds/season/1"
                },
                {
                    "slug": "show/thunderbirds/season/3"
                },
                {
                    "slug": "show/thunderbirds/season/4"
                },
                {
                    "slug": "show/thunderbirds/season/5"
                },
                {
                    "slug": "show/thunderbirds/season/6"
                },
                {
                    "slug": "show/thunderbirds/season/8"
                }
            ],
            "slug": "show/thunderbirds",
            "title": "Thunderbirds",
            "tvChannel": "Channel 9"
        },
        {
            "country": "USA",
            "description": "A sleepy little village, Crystal Cove boasts a long history of ghost sightings, poltergeists, demon possessions, phantoms and other paranormal occurrences. The renowned sleuthing team of Fred, Daphne, Velma, Shaggy and Scooby-Doo prove all of this simply isn't real, and along the way, uncover a larger, season-long mystery that will change everything.",
            "drm": true,
            "episodeCount": 4,
            "genre": "Kids",
            "image": {
                "showImage": "http://mybeautifulcatchupservice.com/img/shows/ScoobyDoo1280.jpg"
            },
            "language": "English",
            "nextEpisode": null,
            "primaryColour": "#1b9e00",
            "seasons": [
                {
                    "slug": "show/scoobydoomysteryincorporated/season/1"
                }
            ],
            "slug": "show/scoobydoomysteryincorporated",
            "title": "Scooby-Doo! Mystery Incorporated",
            "tvChannel": "GO!"
        },
        {
            "country": "USA",
            "description": "Toy Hunter follows toy and collectibles expert and dealer Jordan Hembrough as he scours the U.S. for hidden treasures to sell to buyers around the world. In each episode, he travels from city to city, strategically manoeuvring around reluctant sellers, abating budgets, and avoiding unforeseen roadblocks.",
            "drm": true,
            "episodeCount": 2,
            "genre": "Reality",
            "image": {
                "showImage": "http://mybeautifulcatchupservice.com/img/shows/ToyHunter1280.jpg"
            },
            "language": "English",
            "nextEpisode": null,
            "primaryColour": "#0084da",
            "seasons": [
                {
                    "slug": "show/toyhunter/season/1"
                }
            ],
            "slug": "show/toyhunter",
            "title": "Toy Hunter",
            "tvChannel": "GO!"
        },
        {
            "country": "AUS",
            "description": "A series of documentary specials featuring some of the world's most frightening moments, greatest daredevils and craziest weddings.",
            "drm": true,
            "episodeCount": 1,
            "genre": "Documentary",
            "image": {
                "showImage": "http://mybeautifulcatchupservice.com/img/shows/Worlds1280.jpg"
            },
            "language": "English",
            "nextEpisode": null,
            "primaryColour": "#ff7800",
            "seasons": [
                {
                    "slug": "show/worlds/season/1"
                }
            ],
            "slug": "show/worlds",
            "title": "World's...",
            "tvChannel": "Channel 9"
        },
        {
            "country": "USA",
            "description": "Another year of bachelorhood brought many new adventures for roommates Walden Schmidt and Alan Harper. After his girlfriend turned down his marriage proposal, Walden was thrown back into the dating world in a serious way. The guys may have thought things were going to slow down once Jake got transferred to Japan, but they're about to be proven wrong when a niece of Alan's, who shares more than a few characteristics with her father, shows up at the beach house.",
            "drm": true,
            "episodeCount": 0,
            "genre": "Comedy",
            "image": {
                "showImage": "http://mybeautifulcatchupservice.com/img/shows/TwoandahHalfMen_V2.jpg"
            },
            "language": "English",
            "nextEpisode": {
                "channel": null,
                "channelLogo": "http://mybeautifulcatchupservice.com/img/player/Ch9_new_logo.gif",
                "date": null,
                "html": "Next episode airs: <span> 10:00pm Monday on<br><span class=\"visit\">Visit the Official Website</span></span>",
                "url": "http://channelnine.ninemsn.com.au/twoandahalfmen/"
            },
            "primaryColour": "#ff7800",
            "seasons": null,
            "slug": "show/twoandahalfmen",
            "title": "Two and a Half Men",
            "tvChannel": "Channel 9"
        },
        {
            "country": "USA",
            "description": "Simmering with supernatural elements and featuring familiar and fan-favourite characters from the immensely popular drama The Vampire Diaries, it's The Originals. This sexy new series centres on the Original vampire family and the dangerous vampire/werewolf hybrid, Klaus, who returns to the magical melting pot that is the French Quarter of New Orleans, a town he helped build centuries ago.",
            "drm": true,
            "episodeCount": 1,
            "genre": "Action",
            "image": {
                "showImage": "http://mybeautifulcatchupservice.com/img/shows/TheOriginals1280.jpg"
            },
            "language": "English",
            "nextEpisode": {
                "channel": null,
                "channelLogo": "http://mybeautifulcatchupservice.com/img/player/logo_go.gif",
                "date": null,
                "html": "<br><span class=\"visit\">Visit the Official Website</span></span>",
                "url": "http://go.ninemsn.com.au/"
            },
            "primaryColour": "#df0000",
            "seasons": [
                {
                    "slug": "show/theoriginals/season/1"
                }
            ],
            "slug": "show/theoriginals",
            "title": "The Originals",
            "tvChannel": "GO!"
        },
        {
            "country": "AUS",
            "description": "Join the most dynamic TV judging panel Australia has ever seen as they uncover the next breed of superstars every Sunday night. UK comedy royalty Dawn French, international pop superstar Geri Halliwell, (in) famous Aussie straight-talking radio jock Kyle Sandilands, and chart -topping former AGT alumni Timomatic.",
            "drm": false,
            "episodeCount": 0,
            "genre": "Reality",
            "image": {
                "showImage": "http://mybeautifulcatchupservice.com/img/shows/AGT.jpg"
            },
            "language": "English",
            "nextEpisode": {
                "channel": null,
                "channelLogo": "http://mybeautifulcatchupservice.com/img/player/Ch9_new_logo.gif",
                "date": null,
                "html": "Next episode airs:<span>6:30pm Sunday on<br><span class=\"visit\">Visit the Official Website</span></span>",
                "url": "http://agt.ninemsn.com.au"
            },
            "primaryColour": "#df0000",
            "seasons": null,
            "slug": "show/australiasgottalent",
            "title": "Australia's Got Talent",
            "tvChannel": "Channel 9"
        }
    ],
    "skip": 0,
    "take": 10,
    "totalRecords": 75
}

export const invalidInput = "I am invalid Text"

export const illegalJson = {

    "firstname": "Gordon",
    "lastname": "Tang",
    "isGoingToHire": true,
    "bestCandidate": true,
    "expectedSalary": "as Much as you can"

}



export async function postRequest(json: any) {

    try {
        const response = await axios.post('http://localhost:5000/', json)
        
        return response

    } catch (e) {

        return e

    }


}