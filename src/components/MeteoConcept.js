import React from 'react';
import axios from "axios";
import { messaging } from "../init-fcm";

export default class MeteoConcept extends React.Component
{
    constructor () {
        super ();
        this.state = {
            weather: []
        }
    }

    async componentDidMount() {
        axios
            .get('https://api.meteo-concept.com/api/forecast/daily/periods?token=7120454f05fa343effe5b52e286fc08d107b8573040ec3aa8627d6d8e0bb3687&insee=87001')
            .then(
                response => response.data
            )
            .then((data) => {
                this.setState({weather: data.forecast})
                console.log('weather : ', this.state.weather, typeof data)
            })
        messaging.requestPermission()
            .catch(function(err) {
                console.log('Unable to get permission to notify.', err);
            });

        navigator.serviceWorker.addEventListener('message', (message) => console.log(message));
    }
    
    render () {
        const timeCode = []
            timeCode[0] = 'Soleil'
            timeCode[1] = 'Peu nuageux'
            timeCode[2] = 'Ciel voilé'
            timeCode[3] = 'Nuageux'
            timeCode[4] = 'Très nuageux'
            timeCode[5] = 'Couvert'
            timeCode[6] = 'Brouillard'
            timeCode[7] = 'Brouillard givrant'
            timeCode[10] = 'Pluie faible'
            timeCode[11] = 'Pluie modérée'
            timeCode[12] = 'Pluie forte'
            timeCode[13] = 'Pluie faible verglaçante'
            timeCode[14] = 'Pluie modérée verglaçante'
            timeCode[15] = 'Pluie forte verglaçante'
            timeCode[16] = 'Bruine'
            timeCode[20] = 'Neige faible'
            timeCode[21] = 'Neige modérée'
            timeCode[22] = 'Neige forte'
            timeCode[30] = 'Pluie et neige mêlées faibles'
            timeCode[31] = 'Pluie et neige mêlées modérées'
            timeCode[32] = 'Pluie et neige mêlées fortes'
            timeCode[40] = 'Averses de pluie locales et faibles'
            timeCode[41] = 'Averses de pluie locales'
            timeCode[42] = 'Averses locales et fortes'
            timeCode[43] = 'Averses de pluie faibles'
            timeCode[44] = 'Averses de pluie'
            timeCode[45] = 'Averses de pluie fortes'
            timeCode[46] = 'Averses de pluie faibles et fréquentes'
            timeCode[47] = 'Averses de pluie fréquentes'
            timeCode[48] = 'Averses de pluie fortes et fréquentes'
            timeCode[60] = 'Averses de neige localisées et faibles'
            timeCode[61] = 'Averses de neige localisées'
            timeCode[62] = 'Averses de neige localisées et fortes'
            timeCode[63] = 'Averses de neige faibles'
            timeCode[64] = 'Averses de neige'
            timeCode[65] = 'Averses de neige fortes'
            timeCode[66] = 'Averses de neige faibles et fréquentes'
            timeCode[67] = 'Averses de neige fréquentes'
            timeCode[68] = 'Averses de neige fortes et fréquentes'
            timeCode[70] = 'Averses de pluie et neige mêlées localisées et faibles'
            timeCode[71] = 'Averses de pluie et neige mêlées localisées'
            timeCode[72] = 'Averses de pluie et neige mêlées localisées et fortes'
            timeCode[73] = 'Averses de pluie et neige mêlées faibles'
            timeCode[74] = 'Averses de pluie et neige mêlées'
            timeCode[75] = 'Averses de pluie et neige mêlées fortes'
            timeCode[76] = 'Averses de pluie et neige mêlées faibles et nombreuses'
            timeCode[77] = 'Averses de pluie et neige mêlées fréquentes'
            timeCode[78] = 'Averses de pluie et neige mêlées fortes et fréquentes'
            timeCode[100] = 'Orages faibles et locaux'
            timeCode[101] = 'Orages locaux'
            timeCode[102] = 'Orages fort et locaux'
            timeCode[103] = 'Orages faibles'
            timeCode[104] = 'Orages'
            timeCode[105] = 'Orages forts'
            timeCode[106] = 'Orages faibles et fréquents'
            timeCode[107] = 'Orages fréquents'
            timeCode[108] = 'Orages forts et fréquents'
            timeCode[120] = 'Orages faibles et locaux de neige ou grésil'
            timeCode[121] = 'Orages locaux de neige ou grésil'
            timeCode[122] = 'Orages locaux de neige ou grésil'
            timeCode[123] = 'Orages faibles de neige ou grésil'
            timeCode[124] = 'Orages de neige ou grésil'
            timeCode[125] = 'Orages de neige ou grésil'
            timeCode[126] = 'Orages faibles et fréquents de neige ou grésil'
            timeCode[127] = 'Orages fréquents de neige ou grésil'
            timeCode[128] = 'Orages fréquents de neige ou grésil'
            timeCode[130] = 'Orages faibles et locaux de pluie et neige mêlées ou grésil'
            timeCode[131] = 'Orages locaux de pluie et neige mêlées ou grésil'
            timeCode[132] = 'Orages fort et locaux de pluie et neige mêlées ou grésil'
            timeCode[133] = 'Orages faibles de pluie et neige mêlées ou grésil'
            timeCode[134] = 'Orages de pluie et neige mêlées ou grésil'
            timeCode[135] = 'Orages forts de pluie et neige mêlées ou grésil'
            timeCode[136] = 'Orages faibles et fréquents de pluie et neige mêlées ou grésil'
            timeCode[137] = 'Orages fréquents de pluie et neige mêlées ou grésil'
            timeCode[138] = 'Orages forts et fréquents de pluie et neige mêlées ou grésil'
            timeCode[140] = 'Pluies orageuses'
            timeCode[141] = 'Pluie et neige mêlées à caractère orageux'
            timeCode[142] = 'Neige à caractère orageux'
            timeCode[210] = 'Pluie faible intermittente'
            timeCode[211] = 'Pluie modérée intermittente'
            timeCode[212] = 'Pluie forte intermittente'
            timeCode[220] = 'Neige faible intermittente'
            timeCode[221] = 'Neige modérée intermittente'
            timeCode[222] = 'Neige forte intermittente'
            timeCode[230] = 'Pluie et neige mêlées'
            timeCode[231] = 'Pluie et neige mêlées'
            timeCode[232] = 'Pluie et neige mêlées'
            timeCode[235] = 'Averses de grêle'
        const city = this.state.weather || {}
        console.log('render : ', city, timeCode)
        return (
            <div>
                { city.map((day, index) => (
                    <div key={index}>
                        { day.map((period) => (
                            <div key={period.period}> moment : { period.period } météo : {timeCode[period.weather]} heure : { period.datetime } température : { period.temp2m } °C risque de pluie : { period.probarain } %</div>
                        )) }
                    </div>
                )) }
            </div>
        )
    }
}