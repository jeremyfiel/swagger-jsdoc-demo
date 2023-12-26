import express from 'express'
import swaggerUI from 'swagger-ui-express'
import OASdescription from './utils/openapi.util.js'

const app = express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 3000

app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(OASdescription))

app.listen(PORT, () => console.log(`listening on port ${PORT}`))