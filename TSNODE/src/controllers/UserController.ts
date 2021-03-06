import { Request, Response } from 'express'
import User from '../models/UserModel'

class UserController {
  public async index (req: Request, res: Response): Promise<Response> {
    try {
      const users = await User.findAll()
      return res.json(users)
    } catch (err) {
      return res.json({ erro: err })
    }
  }

  public async store (req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.create(req.body)
      return res.json(user)
    } catch (err) {
      return res.json({ erro: err })
    }
  }

  public async update (req: Request, res: Response): Promise<Response> {
    try {
      const user = await User.update(req.body, { where: { id: req.params.id } })
      return res.json(user)
    } catch (err) {
      return res.json({ erro: err })
    }
  }
}

export default new UserController()
