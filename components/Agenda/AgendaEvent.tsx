import React from 'react';
import { CalEvent } from '../../utils/fetchAgenda';

import styles from "./Agenda.module.css";
import { getDayLabel, getShortMonthLabel } from '../../utils/days';

interface Props {
    event: CalEvent;
}

const localTime = 'fr-FR';
const dateRenderOptions: Intl.DateTimeFormatOptions = { day: '2-digit' }
const timeRenderOptions: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' }

export const AgendaEvent: React.FC<Props> = ({ event }) => {
    return <div className={styles.event}>
        <div className={styles.eventDate}>
            <div className={styles.eventDateWeekday}>{getDayLabel(event.start)}</div>
            <div className={styles.eventDateDay}>{event.start.toLocaleDateString(localTime, dateRenderOptions)}</div>
            <div className={styles.eventDateMonth}>{getShortMonthLabel(event.start)}</div>
        </div>
        <div className={styles.eventContent}>
            <div className={styles.eventTitle}>{event.title}</div>
            <div className={styles.eventDescription}>{event.description}</div>
            <div className={styles.eventTime}>{event.start.toLocaleTimeString(localTime, timeRenderOptions)} - {event.end.toLocaleTimeString(localTime, timeRenderOptions)}</div>
        </div>
    </div>
}