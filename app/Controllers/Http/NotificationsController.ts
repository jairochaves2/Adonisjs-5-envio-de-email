import Mail from '@ioc:Adonis/Addons/Mail'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'

enum States {
  ENVIADO = 'enviado',
  EXTRAVIADO = 'extraviado',
  EM_TRANSITO = 'em_transito',
  ENTREGUE = 'entregue',
}
export default class NotificationsController {
  public async sendNotification({ params, response }: HttpContextContract) {
    const { email, status } = params
    let messageUser: string
    switch (status) {
      case States.ENVIADO:
        messageUser = 'O Seu produto acada de ser enviado, logo estará em suas mãos'
        break
      case States.EXTRAVIADO:
        messageUser =
          'Infelizmente o seu produto foi extraviado, entre em contato com o vendedor para mais informações'
        break
      case States.EM_TRANSITO:
        messageUser = 'Seu produto está em trânsito, e logo estará em suas mãos'
        break
      case States.ENTREGUE:
        messageUser = 'Seu produto foi entregue'
        break
      default:
        messageUser = ''
    }
    if (messageUser) {
      await Mail.send((message) => {
        message
          .subject('Atualização da sua encomenda')
          .from(Env.get('EMAIL'))
          .to(email)
          .htmlView('emails/update_status', { status, message: messageUser })
      })
    } else {
      return response.badRequest()
    }
  }
}
