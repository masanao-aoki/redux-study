export function increment() {
    return {
        type: 'INCREMENT'
    }
}

export function textChange(setText) {
    return {
        type: 'TEXT',
        text: setText
    }
}
