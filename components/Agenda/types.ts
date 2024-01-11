export interface CalendarTime {
  dateTime?: string;
  date: string;
  timeZone?: string;
}

interface Attachment {
  fileId: string;
  fileUrl: string;
  iconLink: string;
  mimeType: string;
  title: string;
}

export interface CalendarItem {
  id: string;
  description: string;
  summary: string;
  location: string;
  end: CalendarTime;
  start: CalendarTime;
  status: string;
  attachments?: Attachment[];
}

export interface Period {
  from: Date;
  to: Date;
}
