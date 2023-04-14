import React from "react";
import { GoogleAgenda } from "./GoogleAgenda";
import { Period } from "./types";
import Link from "next/link";

import styles from "./Agenda.module.css";

interface Props {
    calendarId: string;
}

const getNextWeekPeriod = (): Period => {
    const from = new Date();
    from.setHours(0);
    from.setMinutes(0);
    from.setSeconds(0);
    from.setMilliseconds(0);
    const to = new Date(from.getTime());
    to.setDate(to.getDate() + (15 - to.getDay()))
    return {
        from,
        to,
    }
}

export const GoogleAgendaPreview: React.FC<Props> = ({ calendarId }) => {
    const period = getNextWeekPeriod();
    return <>
        <h2 className={styles.agendaTitle}>Prochainement au Quartier Généreux</h2>
        <GoogleAgenda calendarId={calendarId} period={period} preview />
        <div className={styles.agendaFooter}><Link href="/agenda/" className={styles.linkButton}>Voir plus d&apos;événements</Link></div>
    </>
}
