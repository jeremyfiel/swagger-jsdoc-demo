import { Router } from 'express'

const router = Router()


/**
* @openapi
* '/user':
*   get:
*     description: my hosted api docs
*     summary: api docs
*     responses:
*       '200':
*         description: OK
*         content:
*           'application/json':
*             schema:
*               type: object
*               properties:
*                 thing:
*                   $ref: '#/components/schemas/UserAccount'
* components:
*   schemas:
*     UserAccount:
*       type: object
*       required:
*         - username
*       properties:
*         username:
*           type: string
*/
router.get('/user', (req, res) => {

    res.status('200').json({ "username": "test" })
})

export default router