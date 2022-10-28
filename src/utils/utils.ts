
export function arrayFilter(array: any, value: string) {
    const term = value.toLowerCase();
    return array.filter((elem: Post) => {
        return elem.title.toLowerCase().match(new RegExp(term, 'g'));
    })
};
