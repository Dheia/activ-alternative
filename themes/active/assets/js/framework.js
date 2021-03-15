class AjaxFramework {
    async _getData(url = '', headers, data = {}) {
        const response = await fetch(url, {
            method: 'POST',
            headers,
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`Could not fetch ${url}, received ${response.status}`);
        }

        return await response.json();
    }

    update(props = {}) {
        const { serverHandler, serverPartial, clientContainer,
            data, beforeRequest, afterUpdate, onError } = props;

        const headers = {
            'X-OCTOBER-REQUEST-HANDLER': serverHandler,
            'Content-Type': 'application/json;charset=UTF-8',
            'X-Requested-With': 'XMLHttpRequest',
            'X-OCTOBER-REQUEST-PARTIALS': serverPartial
        };

        beforeRequest();

        this._getData('', headers, data)
            .then(result => {
                this.renderPartial(serverPartial, clientContainer, result);
                afterUpdate();
            })
            .catch(err => {
                console.log(err);
                onError();
            });
    }

    renderPartial(partial, container, result) {
        const containerElem = document.querySelector(container);
        containerElem.innerHTML = result[partial];
    }
}
