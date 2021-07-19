const popup = ({ selectorsShow, selectorsHide}) => {
    const triggersShow = document.querySelectorAll(selectorsShow),
        triggersHide = document.querySelectorAll(selectorsHide),
        popupElem = document.querySelector('.popup');

    const isTrigger = (array, obj) => {
        array = Array.from(array);
        return array.filter(elem => elem === obj)[0];
    }

    const bindTrigger = (action) => {
        return (trigger, index, array) => {
            trigger.addEventListener('click', e => {
                if (isTrigger(array, e.target)) {
                    popupElem.classList[action]('popup--active');
                }
            });
        }
    }

    triggersShow.forEach(bindTrigger('add'));
    triggersHide.forEach(bindTrigger('remove'));
}

export default popup;