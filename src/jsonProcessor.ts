
// type Valueof <T extends Record<>, K>= {       
// T extends Record<T, T[]>
/*
type DistributiveValues<T extends Record<string, T[]>> = T extends T ? T[keyof T] : never;

type InnerValues<
K extends keyof T,
T extends Record<K, T[]>
> = DistributiveValues<T[K]>;

T, K extends keyof T

constraints to check an object key exists
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

            (tvShow.drm && tvShow.episodeCount) && {

            }



            // console.log(tvShow.drm)
    // if(tvShow.episodeCount){
    //     console.log(tvShow.episodeCount) 
    // }
    // (tvShow.drm && tvShow.episodeCount) && tvShow.image.showImage
    // return tvShowsBrief

type test<T extends Record<string, T[]>> = {}

// type Valueof<T extends Record<>> = {}


type TvShow <T, K extends keyof T> = {
    K : T[K]
}

type tvShowKey <T> = keyof typeof T

<K extends keyof any, T>
{[P in K] : T}
// (type parameter) T in <T, P extends keyof T>(tvShow: Record<T, T[P]>): void

type MyMappedEntireType<T> = {

    [P in keyof T]: T[P]
}


// const wrapEntries = new Map([
            //     ["response", entriesObj]
            // ])

            // const tvShowsBriefObj = Object.fromEntries(entriesObj)

            .hasOwnProperty
*/
// How to type in better form 


// .map((tvShow: any) => {


//     console.log(tvShow.drm)
//     console.log(tvShow.episodeCount)

//     if (tvShow.drm && tvShow.episodeCount) {

//         console.log(entriesObj)

//         return entriesObj

//     }

// })

export const tvJsonProcessor = (incomingJson: Object) => {

    const tvShowsDetails = Object.values(incomingJson)[0]

    console.log(tvShowsDetails.length)

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


    return tvShowsBrief

}



