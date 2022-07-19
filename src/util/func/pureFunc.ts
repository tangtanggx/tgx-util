/** 生成随机字符串 */
export function getRandomStr(num: number) {
    // 转为36进制（10个数字26个字母）    随机10~11位
    const str = Math.random()
        .toString(36)
        .substring(2);
    // if (num > 0 && num <= 11) {
    //   str.substring(0, num);
    // }
    return;
}

/** 金钱格式化  1,000,000 */
export function formatMoney(str: string) {
    // ?= 前瞻   \B 非边界
    return str.replace(/\B(?=(\d{3})+$)/g, ",");
}

/** 防抖 */
export function debounce(fn, delay: number) {
    return () => {
        let timer;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...fn.arguments);
        }, delay);
    };
}
