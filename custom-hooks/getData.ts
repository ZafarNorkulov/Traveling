import { useQuery,useQueryClient, UseQueryOptions } from "@tanstack/react-query";
import getAll from "../service/client.request";

const useGetData = <T = any>({ queryKey, url, options }: { queryKey: string[], url: string, options?: UseQueryOptions<T>, urlParams?: Record<string | number, any> }) => {
    const queryClient = useQueryClient();
    const response = useQuery<T>({
        queryKey,
        queryFn: ()=>getAll({url}),
        ...options
    });
    
    if (!response.data && !response.isLoading && !response.error ) {
        queryClient.prefetchQuery(queryKey, () => getAll({url}))
    }else{
        return { ...response }
    }
}

export default useGetData;