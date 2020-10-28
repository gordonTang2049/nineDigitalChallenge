
import { Validator } from 'jsonschema'
import { type } from 'os'


export const tvJsonProcessor = (tvShowsDetails: Object[]) => {

    
    const tvShowsBrief = tvShowsDetails
        .filter((tvShow: any) => {
            return (tvShow.drm && tvShow.episodeCount)
        })
        .map((tvShow: any) => {

            const title = tvShow.title
            const slug = tvShow.slug
            const image = tvShow.image.showImage

            const entries = new Map([
                ["title", title],
                ["slug", slug],
                ["image", image]
            ])

            const entriesObj = Object.fromEntries(entries)

            return entriesObj
        })

        const jsonEntries = new Map([
            ["response", tvShowsBrief]
        ])

        const respJson = Object.fromEntries(jsonEntries)

    return respJson

}

export const errorHandlingJson = () => {
    const entries = new Map([
        ["error", "Could not decode request: JSON parsing failed"]
    ])

    const entriesObj = Object.fromEntries(entries)

    return entriesObj

}


export const validateIncJson = (incJsonVal: Object[]): boolean => {

    const validatorKeys = ["drm", "episodeCount", "image", "slug", "title"]

    let isValid: boolean = false

    if (typeof incJsonVal[0] === 'object') {

        incJsonVal.forEach(jsonVal => {

            const validator: boolean[] = []

            validatorKeys.forEach(key => {

                const hasProp = jsonVal.hasOwnProperty(key)

                hasProp && validator.push(true)

                validator.length === 5 && (isValid = true)

            })

        })

    }

    return isValid

}


//  T extends string ? string : never) :void 
// type TvShowJson = {
//     country: string
//     description: string
//     drm: boolean
//     episodeCount: number
//     genre: string
//     image: {
//         showImage: string
//     }
//     language : string 
//     nextEpisode : string
//     primaryColour : string 
//     seasons : string 
//     slug : string 
//     title : string 
//     tvChannel : string 
// }

// = Parameters<typeof A>

// {
//     "slug": "show/seapatrol",
//         "title": "Sea Patrol",
//             "tvChannel": "Channel 9"
// }