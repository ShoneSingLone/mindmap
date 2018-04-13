export function save(id, key, value) {
    let seller = window.localStorage.__seller__;
    if (!seller) {
        seller = {};
    } else {
        seller = JSON.parse(seller);
    }
    seller[id] = {};
    seller[id][key] = value;
    window.localStorage.__seller__ = JSON.stringify(seller);
}
export function load(id, key, def) {
    let seller = window.localStorage.__seller__;
    if (!seller) {
        return def;
    } else {
        seller = JSON.parse(seller);
        let ret = seller[id][key];
        return ret || def;
    }
}
