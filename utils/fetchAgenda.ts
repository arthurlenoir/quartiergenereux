const ical = require('cal-parser');

type CalEventDateParams = {
    tzid: string;
}

type CalEventDate = {
    params: CalEventDateParams;
    value: Date;
}

type CalEventValue = {
    value: string;
}

type CalEventData = {
    dtend: CalEventDate;
    dtstamp: Date;
    dtstart: CalEventDate;
    location?: CalEventValue;
    sequence: CalEventValue;
    status: CalEventValue;
    summary: CalEventValue;
    description?: CalEventValue;
    uid: CalEventValue;
}

export type CalEvent = {
    uuid: string;
    title: string;
    location?: string;
    description?: string;
    start: Date;
    end: Date;
}
const parseCalEvent = (eventData: CalEventData): CalEvent => {
    return {
        uuid: eventData.uid.value,
        title: eventData.summary.value,
        location: eventData.location?.value,
        description: eventData.description?.value,
        start: eventData.dtstart.value,
        end: eventData.dtend.value
    }
}


export const fetchAgenda = async (): Promise<CalEvent[]> => {
    const res = await fetch("https://calendar.proton.me/api/calendar/v1/url/1XW3RIttYcIbYiJXBV7ekxsF3KR3j1Z3wap_W0ssEMSu1LINAzHmD08MI3sxCEEW_t4lGBrYHcFSmlqz7oeN_g==/calendar.ics?CacheKey=jk8svzWFwidn-yZTcM-IYQ%3D%3D&PassphraseKey=Afhv0uTA0GEt1fKOP1k45Rzh64xTrHS937IYdO692cs%3D");
    const data = await res.text();
    var parsedCal = ical.parseString(data);
    return parsedCal.events.map(parseCalEvent);
}