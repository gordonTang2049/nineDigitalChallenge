//  tested production quality code. 
//  
import cors from 'cors'
import express, {
    Application,
    Request,
    Response,
    NextFunction,
    ErrorRequestHandler
} from 'express'

import bodyParser from 'body-parser'
import {
    errorHandlingJson,
    tvJsonProcessor,
    validateIncJson
} from './jsonProcessor'

// express.Application

const app: Application = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(bodyParser.json())

app.use((
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
) => {

    if (err && err.name === 'SyntaxError') {

        console.log(req.body)

        res.status(400)
        res.json(errorHandlingJson())

    } else {

        next()

    }


});

app.post('/', (req: Request, res: Response) => {

    const isJson = req.is('json')
    
    if (isJson) {
        const incJson = req.body

        const incJsonKey: string = Object.keys(incJson)[0]
        const incJsonVal = Object.values(incJson)[0]

        // console.log(incJsonVal)


        if (incJsonKey === "payload" && Array.isArray(incJsonVal)) {

            const isValidJson = validateIncJson(incJsonVal)

            if (isValidJson) {

                const tvShowBriefs = tvJsonProcessor(incJsonVal)
                res.json(tvShowBriefs)
            } else {

                res.status(400)
                res.json(errorHandlingJson())
            }


        } else {

            res.status(400)
            res.json(errorHandlingJson())

        }

    } else {

        res.status(400)
        res.json(errorHandlingJson())
    }


})





app.listen(PORT, () => console.log('Server running'))



