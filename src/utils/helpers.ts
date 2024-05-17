
export function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }

  export function timeAgo(date: Date): string {
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
    };

    let counter;
    for (const interval in intervals) {
        counter = Math.floor(seconds / intervals[interval]);
        if (counter > 0) {
            if (counter === 1) {
                return "1 " + interval + " ago";
            } else {
                return counter + " " + interval + "s ago";
            }
        }
    }
    return date.toDateString(); // return normal date if none of the conditions match
}


