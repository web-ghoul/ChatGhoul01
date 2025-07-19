// utils/formatChatDate.ts
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);
dayjs.extend(isToday);
dayjs.extend(isYesterday);
dayjs.extend(localizedFormat);

export const handleDate = (dateInput: string | Date) => {
    const date = dayjs(dateInput);

    if (date.isToday()) {
        return date.format('hh:mm A');
    }

    if (date.isYesterday()) {
        return 'Yesterday';
    }

    if (dayjs().isSame(date, 'week')) {
        return date.format('dddd');
    }

    return date.format('DD/MM/YYYY');
}
