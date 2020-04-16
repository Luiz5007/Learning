import app from './app'
import sequelize from './sequelize'

(async (): Promise<void> => {
  await sequelize.sync({ force: true })

  app.listen(3333, () => {
    console.log('Server ON\nhttp://localhost:3333')
  }
  )
})()
