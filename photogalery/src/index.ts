import app from './app';
import { startConnection } from './database'

const main = async () => {
    startConnection();
    await app.listen(app.get('port'))
    console.log('Listening port ', app.get('port'));
}

main()
