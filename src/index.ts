import { create, Whatsapp } from 'venom-bot';

create({
  session: 'ixoye',
  multidevice: true,
})
  .then((client) => start(client))
  .catch((error) => console.log(error));

function start(client: Whatsapp) {
  client.onMessage((message) => {
    if (message.body === 'Hi' && !message.isGroupMsg) {
      client
        .sendText(message.from, 'Welcome Venom 🕷')
        .then((result) => console.log('Result: ', result))
        .catch((error) => {
          console.error('Error when sending: ', error);
        });
    }
  });
}
