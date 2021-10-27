import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

enum States {
  CRIADO = 'criado',
  ENVIADO = 'enviado',
  EXTRAVIADO = 'extraviado',
  EM_TRANSITO = 'em_transito',
  ENTREGUE = 'entregue',
}
export default class NotificationsController {
  public async sendNotification({ params }: HttpContextContract) {
    const { email, status } = params
    let message: string
    switch (status) {
      case States.CRIADO:
        message = 'Obrigado pela compra'
        break
      case States.ENVIADO:
        message = 'O Seu produto acada de ser enviado, logo estará em suas mãos'
        break
      case States.EXTRAVIADO:
        message =
          'Infelizmente o seu produto foi extraviado, entre em contato com o vendedor para mais informações'
        break
      case States.EM_TRANSITO:
        message = 'Seu produto está em trânsito, e logo estará em suas mãos'
        break
      case States.ENTREGUE:
        message = 'Seu produto foi entregue'
        break
      default:
        message = ''
    }
    if (message) {
    }
  }
}
