/**
 * Created by azertypow on 24/06/2017.
 */

export default class DaysWeek {
    private list: Array<string> = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    public getDayName(index: number): string{
        return this.list[index];
    }
}