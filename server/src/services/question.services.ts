import database from "../utils/db";
export const getQuestionByIdSQL = async(id:number) => {
    const [question] = await database.execute("select * from question where questionId = ?", [id]);
    return question
};
export const getQuestionByAnswerSQL = async(id:number) => {
    const [question] = await database.execute("select question.content , answer.content FROM question INNER JOIN answer ON question.questionId=answer.questionId where question.questionId = ?", [id]);
    return question
};
export const getAllQuestion = async () => {
    const [category] = await database.execute("select * from question ");
    return category
}
export const addQuestionSQL = async (categoryId:number,content:string,level:number) => {        
    const [category] = await database.execute("insert into question (categoryId,content,level) values (?,?,?)",[categoryId,content,level]);
    return category
}