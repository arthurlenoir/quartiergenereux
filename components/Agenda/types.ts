export interface CalendarTime {
    dateTime: string;
    timeZone?: string;
}

export interface CalendarItem {
    description: string;
    summary: string;
    location: string;
    end: CalendarTime;
    start: CalendarTime;
    status: string;
}