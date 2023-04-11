import React, { useEffect, useState } from "react";
import { CalEvent, fetchAgenda } from "../../utils/fetchAgenda";
import { AgendaEvent } from "./AgendaEvent";

import styles from "./Agenda.module.css";

const renderEvent = (event: CalEvent) => (
    <AgendaEvent event={event} key={event.uuid} />
)

const getTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0);
    tomorrow.setMinutes(0);
    tomorrow.setSeconds(0);
    tomorrow.setMilliseconds(0);
    return tomorrow;
}

const sortEventByDate = (e1: CalEvent, e2: CalEvent) => e1.start.getTime() - e2.start.getTime()
const isEventInPassed = (event: CalEvent) => event.start.getTime() > getTomorrow().getTime();

const sortEvents = (events: CalEvent[]) => events.sort(sortEventByDate);
const excludePassedEvents = (events: CalEvent[]) => events.filter(isEventInPassed);

export const Agenda: React.FC = () => {
    const [events, setEvents] = useState<CalEvent[]>();

    useEffect(() => {
        fetchAgenda().then(excludePassedEvents).then(sortEvents).then(setEvents);
    }, []);

    if (!events) {
        return <div>chargement...</div>
    }
    if (events.length === 0) {
        return <div>Aucun évènements à venir</div>
    }

    return <div className={styles.agenda}>{events.map(renderEvent)}</div>

}