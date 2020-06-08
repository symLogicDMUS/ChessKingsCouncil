
export async function getDataDict() {

    let response = await fetch('/get_data_dict')
    let dataDict = await response.json();
    return dataDict
}

export async function getDefs() {
    let response = await fetch('/get_defs')
    let defs = await response.json();
    return defs
}

export function getData() {
    return Promise.all([getDataDict(), getDefs()])
}

