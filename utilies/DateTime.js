import moment from 'moment'
export const convertDateTimeToString = (dateTime) => {
    return moment(dateTime).format('YYYY-MM-DD')
}