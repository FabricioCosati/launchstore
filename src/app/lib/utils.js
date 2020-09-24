var moment = require('moment');
const { format } = require('date-fns');

module.exports = {
    formatedTime(data){
        return format(data, 'dd/MM/yyyy')
    },
    formatedTimeHour(data){
        return {
            day: format(data, 'dd'),
            month: format(data, 'MM'),
            hour: format(data, 'HH'),
            minutes: format(data, 'mm')
        }
    },
    dates(timestamp){
        const date = new Date(timestamp)

        const year = date.getFullYear()
        const month = `0${date.getMonth() + 1}`.slice(-2)
        const day = `0${date.getDate()}`.slice(-2)
        const hour = date.getHours()
        const minutes   = date.getMinutes()

        return {
            day,
            month,
            year,
            hour,
            minutes,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}/${month}`,
            format: `${day}/${month}/${year}`
        }

    },
    formatPrice(price){
         return new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL'
        }).format(price/100).replace(".", ",")
        
    }
}