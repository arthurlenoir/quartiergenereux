import React, { useState } from "react";
import { GoogleAgenda } from "./GoogleAgenda";
import { Period } from "./types";

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
        <h2>Prochainement au Quartier Généreux</h2>
        <GoogleAgenda calendarId={calendarId} period={period} preview />
    </>
}
