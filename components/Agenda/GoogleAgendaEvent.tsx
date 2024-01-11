import React, { useCallback } from "react";

import styles from "./Agenda.module.css";
import { CalendarItem } from "./types";
import { getDayLabel, getShortMonthLabel } from "../../utils/days";
import { useRouter } from "next/router";
import {
  dateRenderOptions,
  localTime,
  timeRenderOptions,
} from "./dateRenderOptions";
import Link from "next/link";

interface Props {
  event: CalendarItem;
  preview?: boolean;
  link?: string;
}

const CalendarEvent: React.FC<Props> = ({ event, link, preview = false }) => {
  const { push } = useRouter();
  const start = new Date(Date.parse(event.start.dateTime ?? event.start.date));
  const end = new Date(Date.parse(event.end.dateTime ?? event.end.date));

  const navigateToEvent = useCallback(() => {
    push(`/agenda/event?eventId=${event.id}`);
  }, [event.id, push]);

  return (
    <div className={styles.event} onClick={navigateToEvent}>
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
        <Link
          href={`/agenda/event?eventId=${event.id}`}
          className={styles.smallLink}
        >
          plus d&apos;infos
        </Link>
        <div className={styles.eventTime}>
          {start.toLocaleTimeString(localTime, timeRenderOptions)} -{" "}
          {end.toLocaleTimeString(localTime, timeRenderOptions)}
        </div>
      </div>
    </div>
  );
};

export default CalendarEvent;
