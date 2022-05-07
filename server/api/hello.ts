export default defineEventHandler((event) => {
    // const query = useQuery(event); 可以做请求拿参数
    // const body = useBody(event);
    return {
        api: 'works'
    }
})