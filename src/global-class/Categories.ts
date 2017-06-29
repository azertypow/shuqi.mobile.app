/**
 * Created by azertypow on 26/06/2017.
 */

export default class Categories {
    private static categories: Array<string> = [
        "Books",
        "Clothing",
        "Everyday",
        "Cosmetics",
        "Sport stuff",
        "Work Documents"
    ];

    public static get(): Array<string>{
        return this.categories;
    }
}