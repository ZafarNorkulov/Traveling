import instance from "../configs/axios";

const getAll = async ({
  url,
}:{url:string}) => {
  const response = await instance({ url, method: "GET" });
  return response.data;
};



export default getAll;