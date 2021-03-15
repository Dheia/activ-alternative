class Catalog {
    constructor() {
        this.clientContainer = '.catalog-container';
        this.serverHandler = 'onCatalogUpdate';
        this.serverPartial = 'catalog';
        this.el = null;
        this.loadingIndicator = null;
        this.errorIndicator = null;
        this.page = 1;
        this.framework = new AjaxFramework();
    }

    gotoPage(page) {
        this.page = page;
        this.update();        
    }

    hideLoadngIndicator() {
        this.loadingIndicator.classList.remove('show');
    }

    showLoadngIndicator() {
        this.hideError();
        this.loadingIndicator.classList.add('show');
    }

    showError() {
        this.hideLoadngIndicator();
        this.errorIndicator.classList.add('show');
    }

    hideError() {
        this.errorIndicator.classList.remove('show');
    }

    update() {
        this.framework.update({
            serverHandler: 'onCatalogUpdate',
            serverPartial: 'catalog',
            clientContainer: '.catalog-container',
            data: {
                page: this.page
            },
            beforeRequest: this.showLoadngIndicator.bind(this),
            afterUpdate: this.hideLoadngIndicator.bind(this),
            onError: this.showError.bind(this)
        });
    }

    bindEvents() {
        this.el.addEventListener('click', e => {
            if (e.target.tagName === 'BUTTON') {
                const page = e.target.getAttribute('data-page');
                this.gotoPage(page);
            }
        });
    }

    init() {
        this.el = document.querySelector(this.clientContainer);
        this.loadingIndicator = document.querySelector('.catalog-loading');
        this.errorIndicator = document.querySelector('.catalog-error');
        this.bindEvents();
    }
}

const catalog = new Catalog().init();