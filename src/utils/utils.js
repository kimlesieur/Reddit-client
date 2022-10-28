
export function arrayFilter(array, value) {
    const term = value.toLowerCase();
    return array.filter(elem => {
        return elem.title.toLowerCase().match(new RegExp(term, 'g'));
    })
};

export function debounceInput(func, timeout=5000) {
    let timer;
    return (...args) => {
        console.log(timeout);
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args) }, timeout);
    };
};