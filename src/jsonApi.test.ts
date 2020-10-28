//  Note the test is working when server build first, and then create the test

// it is only working for once. it won't work if you reload the test 
// not sure why


import {
    validJson,
    invalidInput,
    illegalJson,
    postRequest
} from "./testVar"


test('Post a valid legal Json', async () => {

    expect.assertions(1)

    const response = await postRequest(validJson)

    const data = response.data

    expect(data).toEqual({
        "response": [
            {
                "image": "http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg",
                "slug": "show/16kidsandcounting",
                "title": "16 Kids and Counting"
            },
            {
                "image": "http://mybeautifulcatchupservice.com/img/shows/TheTaste1280.jpg",
                "slug": "show/thetaste",
                "title": "The Taste"
            },
            {
                "image": "http://mybeautifulcatchupservice.com/img/shows/Thunderbirds_1280.jpg",
                "slug": "show/thunderbirds",
                "title": "Thunderbirds"
            },
            {
                "image": "http://mybeautifulcatchupservice.com/img/shows/ScoobyDoo1280.jpg",
                "slug": "show/scoobydoomysteryincorporated",
                "title": "Scooby-Doo! Mystery Incorporated"
            },
            {
                "image": "http://mybeautifulcatchupservice.com/img/shows/ToyHunter1280.jpg",
                "slug": "show/toyhunter",
                "title": "Toy Hunter"
            },
            {
                "image": "http://mybeautifulcatchupservice.com/img/shows/Worlds1280.jpg",
                "slug": "show/worlds",
                "title": "World's..."
            },
            {
                "image": "http://mybeautifulcatchupservice.com/img/shows/TheOriginals1280.jpg",
                "slug": "show/theoriginals",
                "title": "The Originals"
            }
        ]
    })

})


it('Post a invalid Input', async () => {

    expect.assertions(1)
    
    const response = await postRequest(invalidInput)
    const data = response.response.data

    expect(data).toEqual({
        "error": "Could not decode request: JSON parsing failed"
    })


})


test('Post illegal Json', async () => {
    expect.assertions(1)

    const response = await postRequest(illegalJson)
    const data = response.response.data
    
    expect(data).toEqual({
        "error": "Could not decode request: JSON parsing failed"
    })

})

/*
postRequest(validJson)
const count = await Service.count();
await request(app).post('/api/services').send(service)
const newCount = await Service.count()
expect(newCount).toBe(count + 1);
*/