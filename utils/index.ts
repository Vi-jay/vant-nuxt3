export function sleep(ttl:number) {
    return new Promise(resolve => setTimeout(resolve,ttl*1000))
}