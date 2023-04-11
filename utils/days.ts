enum DAY {
    SUNDAY = 0,
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6
}

const DaysLabels: Record<DAY, string> = {
    [DAY.MONDAY]: "lundi",
    [DAY.TUESDAY]: "mardi",
    [DAY.WEDNESDAY]: "mercredi",
    [DAY.THURSDAY]: "jeudi",
    [DAY.FRIDAY]: "vendredi",
    [DAY.SATURDAY]: "samedi",
    [DAY.SUNDAY]: "dimanche",
}

export const getDayLabel = (date: Date) => DaysLabels[date.getDay() as DAY];

enum MONTH {
    JANUARY = 0,
    FEBRUARY = 1,
    MARCH = 2,
    APRIL = 3,
    MAY = 4,
    JUNE = 5,
    JULY = 6,
    AUGUST = 7,
    SEPTEMBER = 8,
    OCTOBER = 9,
    NOVEMBER = 10,
    DECEMBER = 11
};

const ShortMonthsLabels: Record<MONTH, string> = {
    [MONTH.JANUARY]: "janv",
    [MONTH.FEBRUARY]: "fev",
    [MONTH.MARCH]: "mars",
    [MONTH.APRIL]: "avril",
    [MONTH.MAY]: "mai",
    [MONTH.JUNE]: "juin",
    [MONTH.JULY]: "juil",
    [MONTH.AUGUST]: "août",
    [MONTH.SEPTEMBER]: "sept",
    [MONTH.OCTOBER]: "oct",
    [MONTH.NOVEMBER]: "nov",
    [MONTH.DECEMBER]: "dec",
}

export const getShortMonthLabel = (date: Date) => ShortMonthsLabels[date.getMonth() as MONTH];
