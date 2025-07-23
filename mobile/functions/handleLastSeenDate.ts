export const handleLastSeenDate = (date: Date): string => {
    const now = new Date();

    const isToday = date.toDateString() === now.toDateString();

    const yesterday = new Date();
    yesterday.setDate(now.getDate() - 1);
    const isYesterday = date.toDateString() === yesterday.toDateString();

    const time = date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
    });

    if (isToday) {
        return `Last seen today at ${time}`;
    } else if (isYesterday) {
        return `Last seen yesterday at ${time}`;
    } else {
        const day = date.toLocaleDateString([], {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });
        return `Last seen on ${day} at ${time}`;
    }
}