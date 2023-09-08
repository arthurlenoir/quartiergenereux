import React from "react";

import styles from "./Agenda.module.css";
import { CalendarItem } from "./types";
import { getDayLabel, getShortMonthLabel } from "../../utils/days";

interface Props {
  event: CalendarItem;
  preview?: boolean;
  link?: string;
}

const localTime = "fr-FR";
const dateRenderOptions: Intl.DateTimeFormatOptions = { day: "2-digit" };
const timeRenderOptions: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
};

const CalendarEvent: React.FC<Props> = ({ event, link, preview = false }) => {
  const start = new Date(Date.parse(event.start.dateTime ?? event.start.date));
  const end = new Date(Date.parse(event.end.dateTime ?? event.end.date));

  return (
    <div className={styles.event}>
      <div className={styles.eventDate}>
        <div className={styles.eventDateWeekday}>{getDayLabel(start)}</div>
        <div className={styles.eventDateDay}>
          {start.toLocaleDateString(localTime, dateRenderOptions)}
        </div>
        <div className={styles.eventDateMonth}>{getShortMonthLabel(start)}</div>
      </div>
      <div className={styles.eventContent}>
        <div className={styles.eventTitle}>{event.summary}</div>
        <div
          className={styles.eventDescription}
          dangerouslySetInnerHTML={{ __html: event.description }}
        />
        <div className={styles.eventTime}>
          {start.toLocaleTimeString(localTime, timeRenderOptions)} -{" "}
          {end.toLocaleTimeString(localTime, timeRenderOptions)}
        </div>
      </div>
    </div>
  );
};

export default CalendarEvent;
