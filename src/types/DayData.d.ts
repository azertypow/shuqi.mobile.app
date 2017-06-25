/// <reference path="./RegisteredObject.d.ts" />

interface DayData {
    date: Date,
    dayId: number,
    listOfRegisteredObjects: Array<RegisteredObject>,
}
