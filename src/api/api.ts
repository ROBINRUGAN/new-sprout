import { service } from "@/utils/request";

export const LoginApi = (data: any) => {
    return service.request({
        method: "post",
        url: `/api/new-sprout/admin/v1/admin/login`,
        data
    });
};

export const GetURLApi = (data:any) => {
    return service.request({
        method: "post",
        url: `/api/new-sprout/project/v1/file/upload`,
        data,
        headers:{
            "Content-Type": "multipart/form-data",
        }
    });
}

export const CreateFatherApi = (data:any) => {
    return service.request({
        method: "post",
        url: `/api/new-sprout/admin/v1/task/create-parent`,
        data,
        
    });
}

export const getFacultyApi = () => {
    return service.request({
        method: "get",
        url: `/api/new-sprout/admin/v1/faculty`,
        
    });
}

export const getMajorApi = (id: string) => {
    return service.request({
        method: "get",
        url: `/api/new-sprout/admin/v1/major/faculty/${id}`,
    });
}

export const getPastApi = (data: any) => {
    return service.request({
        method: "post",
        url: `/api/new-sprout/admin/v1/task/page`,
        data,
    });
}
export const getPastChildApi = (data: any) => {
    return service.request({
        method: "post",
        url: `/api/new-sprout/admin/v1/task`,
        data,
    });
}
export const putAdApi = (data: any) => {
    return service.request({
        method: "post",
        url: `/api/new-sprout/admin/v1/ad/put`,
        data,
    });
}

