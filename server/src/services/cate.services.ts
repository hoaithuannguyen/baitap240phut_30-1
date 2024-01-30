import database from "../utils/db";
export const getCateByIdSQL = async(id:number) => {
    const [category] = await database.execute("select * from category where categoryId = ?", [id]);
    return category
};

export const getAllCateSQL = async () => {
    const [category] = await database.execute("select * from category ");
    return category
}
export const addCateSQL = async (name:string) => {    
    const [category] = await database.execute("insert into category (nameCategory) values (?)",[name]);
    return category
}