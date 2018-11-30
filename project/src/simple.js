import React, { Component } from 'react'

const allowedTimes = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']

const Rooms = [{
        id: 1,
        title: '',
        description: ''
    }, {
        id: 2,
        title: '',
        description: ''
    }, {
        id: 3,
        title: '',
        description: ''
    }, {
        id: 4,
        title: '',
        description: ''
    }
]

class Simple extends Component {
    state = {
        currentMonth: '',        // С момента месяц тянем
        currentWeek: '',         // С момента неделю тянем
        mainList: [
            {
                lineId: 4,      // идентефикатор кликнутой линии из массива линий
                timeId: 0,      // идентефикатор елемента из массива времени
                status: true,   // занято или свободно
                day: ''         // С момента день тянем
            }
        ]
    }

    changeCurrentWeek = increment => {
        if(increment) {
            // добавляем к currentMonth и\или currentWeek рбочую неделю
        } else {
            // отнимаем от currentMonth и\или currentWeek рбочую неделю
        }
    }

    setActiveRoom = (lineId, timeId, status, day) => {
        if(status) {
            // найти в mainList обьект с этими данными и обновить со статусом false
        } else {
            // найти в mainList обьект дльше по примеру с каждым из параметров 
            // если нашли то апдейтим если нет то пушим в mainList { lineId, timeId, status, day }
        }
    }

    render() {
        return {
            
        }
    }
}

export default Simple