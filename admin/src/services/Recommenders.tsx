import http from "../http-common";
import IRecommenderData  from "../Types/recommender";
const getAll = () => {
  return http.get<Array<IRecommenderData>>("/sellers");
};
const get = (id: any) => {
  return http.get<IRecommenderData>(`/sellers/${id}`);
};
const create = (data: IRecommenderData) => {
  return http.post<IRecommenderData>("/sellers", data);
};
const update = (id: any, data: IRecommenderData) => {
  return http.put<any>(`/sellers/${id}`, data);
};
const remove = (id: any) => {
  return http.delete<any>(`/sellers/${id}`);
};
const removeAll = () => {
  return http.delete<any>(`/sellers`);
};
const findByTitle = (title: string) => {
  return http.get<Array<IRecommenderData>>(`/sellers?title=${title}`);
};
const RecommenderService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};
export default RecommenderService;