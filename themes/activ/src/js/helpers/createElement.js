const createElement = ({ tagName, classList }) => {
    const elem = document.createElement(tagName);
    if (classList) {
        elem.className = classList;
    }
    return elem;
}

export default createElement;
