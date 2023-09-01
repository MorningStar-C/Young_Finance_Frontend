import axios from "axios";

// 设置默认值
axios.defaults.baseURL = "http://localhost:8000/api"
axios.defaults.timeout = 50000

/**
 *  get请求
 * @param url 请求的地址，是去掉了baseURL之外的部分
 * @param params json对象，表示请求对象
 * @returns {Promise<AxiosResponse<any>> | *}
 */
function doGet(url, params) {
    return axios({
        url: url,
        method: 'get',
        params: params
    })
}

/**
 * post请求, 传递Json数据，请求报文中是json格式
 * @param url 请求的地址，是去掉了baseURL之外的部分
 * @param params
 * @returns {Promise<AxiosResponse<any>> | *}
 */
function doPostJson(url, params) {
    return axios({
        url: url,
        method: 'post',
        params: params
    })
}

// 导出，暴露此函数
export { doGet, doPostJson }