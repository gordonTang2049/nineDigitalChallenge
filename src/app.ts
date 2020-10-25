// 
import express, {
    Application,
    Request,
    Response,
    NextFunction
} from 'express'

import axios from 'axios'
import { tvJsonProcessor } from './jsonProcessor'

// express.Application
const app: Application = express()
// const port = process.env.port || 9999

// middle ware
app.get('/', (
    req: Request,
    res: Response
    // next: NextFunction
) => {
    res.send('Hello world')
})

app.get('/test', async (
    req: Request,
    res: Response
) => {

    try {
        const nineResp = await axios.get('http://codingchallenge.nine.com.au/sample_request.json')

        const results = tvJsonProcessor(nineResp.data)

        console.log(results)

        res.send(results)
        

    } catch (e) {

        res.send(e)

    }

})


app.listen(80, () => console.log('Server running'))

// res.send(JSON.stringify(nineResp.data, null, 10))  JSON.stringify(results, null, 2) + '\n'
        // res.json(nineResp.data)