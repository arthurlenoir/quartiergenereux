import { CalendarItem, Period } from "./types";

declare global {
  interface Window {
    gapi: {
      load: (resource: string, callback: () => void) => void;
      auth: {
        authorize: (
          data: unknown,
          callback: (authResult: unknown) => void
        ) => void;
      };
      client: {
        setApiKey: (key: string) => void;
        load: (
          resource: string,
          verson: string,
          callback: (res: unknown) => void
        ) => void;
        calendar: {
          events: {
            list: (request: unknown) => Promise<CalendarEvents>;
            get: (request: unknown) => Promise<CalendarEvent>;
          };
        };
      };
    };
  }
}

interface CalendarEvents {
  result: CalendarEventsResult;
}

interface CalendarEvent {
  result: CalendarItem;
}

interface CalendarEventsResult {
  items: CalendarItem[];
}

const loadCalendar = (googleApiKey: string): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    window.gapi.load("client", () => {
      window.gapi.client.setApiKey(googleApiKey);
      loadCalendarApi(resolve, reject);
    });
  });
};

const loadCalendarApi = (
  resolve: (value: boolean | PromiseLike<boolean>) => void,
  reject: (reason?: any) => void
) => {
  window.gapi.client.load("calendar", "v3", () => {
    resolve(true);
  });
};

const getToday = () => {
  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);
  return today;
};

export const listUpcomingEvents = (calendarId: string, limit: number) => {
  return window.gapi.client.calendar.events.list({
    calendarId,
    showDeleted: false,
    singleEvents: true,
    maxResults: limit,
    orderBy: "startTime",
    timeMin: getToday().toISOString(),
  });
};

export const listEventsFromPeriod = (
  calendarId: string,
  period: Period,
  limit: number
) => {
  return window.gapi.client.calendar.events.list({
    calendarId,
    showDeleted: false,
    singleEvents: true,
    maxResults: limit,
    orderBy: "startTime",
    timeMin: period.from.toISOString(),
    timeMax: period.to.toISOString(),
  });
};

export const getEvent = (calendarId: string, eventId: string) => {
  return window.gapi.client.calendar.events.get({
    calendarId,
    eventId,
  });
};

export const loadGoogleApi = (googleApiKey: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("SCRIPT");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("async", "true");
    script.setAttribute("defer", "true");
    script.setAttribute("src", "https://apis.google.com/js/api.js");
    script.addEventListener("load", async () => {
      const success = await loadCalendar(googleApiKey);
      if (success) {
        resolve();
      } else {
        reject("unable to load calendar");
      }
    });
    document.head.appendChild(script);
  });
};
