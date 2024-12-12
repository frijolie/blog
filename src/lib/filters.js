import { DateTime } from "luxon";

const addOrdinal = (i) => {
    const s = ["th", "st", "nd", "rd"];
    const v = i % 100;
    return i + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const dateShort = (i) => {
    // 10/14/2021
    return DateTime.fromJSDate(i).toISODate().toString();
};

export const dateLong = (i) => {
    // January 2nd 2024
    const getDay = DateTime.fromJSDate(i).toFormat("d").toString();
    const getDayWithOrdinal = addOrdinal(getDay);
    const getMonth = DateTime.fromJSDate(i).toFormat("LLLL").toString();
    const getYear = DateTime.fromJSDate(i).toFormat("y").toString();
    return `${getMonth} ${getDayWithOrdinal}, ${getYear}`;
};

export const dateYMD = (i) => {
    // 2024-09-27
    const getDay = DateTime.fromJSDate(i).toFormat("dd").toString();
    const getMonth = DateTime.fromJSDate(i).toFormat("LL").toString();
    const getYear = DateTime.fromJSDate(i).toFormat("y").toString();
    return `${getYear}-${getMonth}-${getDay}`;
};

export const dateYear = (i) => {
    // 2024
    return DateTime.fromJSDate(i).toFormat("y").toString();
};

export const dateMonthShort = (i) => {
    // Jan
    return DateTime.fromJSDate(i).toFormat("LLL").toString();
};

export const dateMonthLong = (i) => {
    // January
    return DateTime.fromJSDate(i).toFormat("LLLL").toString();
};
