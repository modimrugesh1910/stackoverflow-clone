import * as moment from 'moment';
export const convertDate = (date): string => {
    return moment(date).format('DD-MMM-YYYY');
};

export const getTime = (time): string => {
    return moment(time).startOf('day').fromNow();
};
