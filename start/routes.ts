import Route from '@ioc:Adonis/Core/Route'

Route.get('/update-status/email/:email/status/:status', 'NotificationsController.sendNotification')
