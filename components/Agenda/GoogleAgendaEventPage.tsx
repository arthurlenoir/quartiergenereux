import { useEffect, useState } from "react";
import { CalendarItem } from "./types";
import { getEvent, loadGoogleApi } from "./GoogleCalendar";

import styles from "./Agenda.module.css";
import { useRouter } from "next/router";
import {
  dateRenderOptions,
  localTime,
  timeRenderOptions,
} from "./dateRenderOptions";
import { getDayLabel, getShortMonthLabel } from "../../utils/days";
import Link from "next/link";

const API_KEY = "AIzaSyDL4YMF0baYwuwdsZVlB-DHSEXkfIpR4hQ";

interface Props {
  calendarId: string;
  eventId: string;
}

export const GoogleAgendaEventPage: React.FC<Props> = ({
  calendarId,
  eventId,
}) => {
  const { replace } = useRouter();
  const [event, setEvent] = useState<CalendarItem>();
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    if (hasError) {
      replace("/agenda");
    }
  }, [hasError, replace]);

  useEffect(() => {
    loadGoogleApi(API_KEY).then(async () => {
      try {
        const event = await getEvent(calendarId, eventId);
        setEvent(event.result);
      } catch (e) {
        console.log("CATCh ERROR", e);
        setHasError(true);
      }
    });
  }, [setEvent, calendarId, eventId]);

  if (!event) return <div>Chargement en cours...</div>;

  const start = new Date(Date.parse(event.start.dateTime ?? event.start.date));
  const end = new Date(Date.parse(event.end.dateTime ?? event.end.date));

  return (
    <>
      <h1>{event.summary}</h1>
      <h2>
        {getDayLabel(start)}{" "}
        {start.toLocaleDateString(localTime, dateRenderOptions)}{" "}
        {getShortMonthLabel(start)} {start.getFullYear()}
        {" de "}
        {start
          .toLocaleTimeString(localTime, timeRenderOptions)
          .replace(":", "h")}{" "}
        {" à "}
        {end.toLocaleTimeString(localTime, timeRenderOptions).replace(":", "h")}
      </h2>
      <main
        className={styles.eventFullDescription}
        dangerouslySetInnerHTML={{ __html: event.description }}
      />
      <div className={styles.agendaFooter}>
        <Link href="/agenda/" className={styles.linkButton}>
          Retour à l&apos;agenda
        </Link>
      </div>
    </>
  );
};
