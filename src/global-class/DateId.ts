/**
 * Created by azertypow on 25/06/2017.
 */

export default class DateId{
    public generate(date: Date): number{
        const fullYearToString: string = date.getFullYear().toString();
        const monthNormalise: string = ( date.getMonth().toString().length < 2 ? "0"+date.getMonth().toString() : date.getMonth().toString() );
        const dateNormalise: string = ( date.getDate().toString().length < 2 ? "0"+date.getDate().toString() : date.getDate().toString() );
        return Number(fullYearToString+monthNormalise+dateNormalise);
    }
}