import { useCallback, useEffect, useState } from "react";
import { CalendarItem, Period } from "./types";
import { listEventsFromPeriod, listUpcomingEvents, loadGoogleApi } from "./GoogleCalendar";
import GoogleAgendaEvent from "./GoogleAgendaEvent";

import styles from "./Agenda.module.css";

const API_KEY = 'AIzaSyDL4YMF0baYwuwdsZVlB-DHSEXkfIpR4hQ';

interface Props {
    calendarId: string;
    limit?: number;
    preview?: boolean;
    period?: Period;
}

export const GoogleAgenda: React.FC<Props> = ({
    calendarId,
    preview = false,
    period,
    limit = 100,
}) => {
    const [events, setEvents] = useState<CalendarItem[]>();
    useEffect(() => {
        loadGoogleApi(API_KEY).then(async () => {
            const calendarEvents = await (period ? listEventsFromPeriod(calendarId, period, limit) : listUpcomingEvents(calendarId, limit));
            setEvents(calendarEvents.result.items);
        });
    }, [setEvents, calendarId, limit, period]);

    const renderCalendarEvent = useCallback(
        (event: CalendarItem, i: number) => (
            <GoogleAgendaEvent
                key={i}
                event={event}
                preview={preview}
            />
        ),
        [preview]
    );

    if (!events) return <div>Chargement en cours...</div>;
    if (events.length === 0) return <div>Aucun évènements à venir.</div>;

    return <div className={styles.agenda}>{events.map(renderCalendarEvent)}</div>;
};