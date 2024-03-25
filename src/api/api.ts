import { service } from "@/utils/request";

// 使用箭头函数
export function LoginApi (data: any) {
    return service.request({
        method: "post",
        url: `/api/new-sprout/admin/v1/admin/login`,
        data
    });
};
