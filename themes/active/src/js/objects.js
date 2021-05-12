import popup from './modules/popup'
import validate from './modules/validate'
import sliderSwipe from './modules/sliderSwipe'

window.addEventListener('DOMContentLoaded', function(){
    sliderSwipe();
    popup();
    validate();
});