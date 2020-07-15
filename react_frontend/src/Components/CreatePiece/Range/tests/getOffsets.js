function getOffsets() {
    return JSON.parse(JSON.stringify(this.props.offsets));
}

if (require.main === module) {
    console.log(getOffsets())
}
