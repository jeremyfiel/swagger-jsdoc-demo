import swaggerJsdoc from 'swagger-jsdoc'

const options = {
    definition: {

        openapi: '3.0.3',
        info: {
            title: 'test',
            version: '1.0.0'
        },
        servers: [
            { url: 'https://www.example.com/v1' }
        ]
    },
    apis: [
        'src/routes/user.route.js'
    ]
}

const OASDescription = swaggerJsdoc(options)

export default OASDescription