const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

sessionWhatsaapInit = () => {
    try {
        let client;
        client = new Client({
            authStrategy: new LocalAuth()
        });
        client.on('qr', qr => {
            console.log('QR');
            qrcode.generate(qr, {small: true});
        });
        client.on('ready', () => {
            console.log('Whatsapp en linea!!!!!!!');
            messages(client);
        });
        client.initialize();
    }
    catch (err) {
        Console.log('Intenta nuevamente');
        Console.error(err);
    }
}

messages = (client) => {
    client.on('message', msg => {
        switch(msg.body) 
        {
            case 'Hola':
                msg.reply('¡Hola! Soy Ali 🤖🎀, la asistente virtual de la Alcaldía de Cochabamba. Estoy aquí para ayudarte, empecemos 👇🏻 \n\n *¿Deseas realizar una consulta?* \n\n 📲_Escribe la opción de tu consulta:_ \n 0️⃣ Hablar con agente 🗣👮‍♀️ y/o Hacer una Denuncia \n 1️⃣ Números de emergencia 🚨☎️ \n 2️⃣ Descuentos en impuestos 💲💸 \n 3️⃣ Información sobre el COVID-19 😷🏥 \n 4️⃣ Disposiciones vigentes de circulación y atención 🚶🏻‍♂️🛒 \n 5️⃣ Para pagar impuestos de vehículos con QR 🔳📱')
                break;
            case '0':
                msg.reply('Cuando gustes estamos para ayudarte, cualquier otra consulta no dudes en escribirnos, solo no olvides escribir la palabra ¨agente¨ para que se derive con un agente. Gracias por haberte contactado con la Alcaldía de Cochabamba ¡Saludos!🙂')
                break;
            case '1':
                msg.reply('Puedes llamar a los siguientes números: \n - Radio Patrulla 800 14 0348. \n - Radio Patrulla 911 - 110. \n - PAC (Patrulla de Auxilio Ciudadano) 4 - 4524625. \n - Brigada Familiar 4 - 4233133.')
                break;
            case '2':
                msg.reply('La Secretaría de Recaudaciones y Atención al Contribuyente informó que está vigente un descuento del 15% en el pago de todos los impuestos de la gestión 2021, beneficio disponible hasta el 30 de junio.')
                break;
            case '3':
                msg.reply('Puntos de vacinación en Cercado son: \n - Hospital Cochabamba \n - Hospital del Norte \n - Hospital de Sur \n - Coliseo de la Coronilla \n - Terminal de Buses \n\n  Horario de Atención: 08:00 a 19:00 \n Mayor Información: 4 4221889')
                break;
            case '4':
                msg.reply('La circulación es 24 horas de lunes a domingo, levantando así la restricción de horario. \n\n  También se aprobó el aforo del 100% en todas las actividades económicas, culturales, religiosas, deportivas y sociales. Sin embargo, aquellas aglomeraciones que no consideren las medidas de bioseguridad establecidas y los protocolos de funcionamiento están prohibidas.')
                break;	
            case '5':
                msg.reply('Puedes acceder al siguiente enlace para verificar deudas de muebles e inmuebles: \n https://www.ruat.gob.bo/vehiculos/consultageneral/InicioBusquedaVehiculo.jsf')
                break;
            default:
                msg.reply('Lo siento, no comprendo a que te refieres. 😕')
                break;
                        
        }
    });
}


module.exports = {
    sessionWhatsaapInit
}
