export class P2P {
    checkToken() {
        // при инициализации класса проверяем токен
        return new Promise((resolve, reject) => {
            var $this = this;

            function updateToken() {
                $this.GetToken().then((response) => {
                    P2PClient.prototype._saveToken(response.data);
                    resolve("success");
                }).catch((error) => {

                    reject(error);
                });
            }

            // если токен есть и он невалидный - обновляем
            if (P2PClient.prototype.token) {
                if (!this._validateToken(P2PClient.prototype.token)) {
                    updateToken();
                } else {
                    resolve("success");
                }
            } else {
                updateToken();
            }
        });
    }

    _validateToken(token) {
        const minutes = 60000 * 14;
        return Date.now() - token.date < minutes;
    }

    /**
     *
     * @returns {Promise}
     * @constructor
     */
    GetToken() {
        this.logger('P2P:GetToken');
       // .... send Axios
    }

    GetListCards(data, options) {
        this.logger('P2PClient:GetListCards');
        return new Promise((resolve, reject) => {
            this.checkToken().then(() => {
                new P2PClient().GetCards(data).then(resolve).catch(reject);
            }).catch(reject);
        });
    }

    logger(text, data) {
        if (this.isLogger) {
            let textForLog = text;
            if (data) {
                console.log(textForLog, data);
            } else {
                console.log(textForLog);
            }
        }
    }
}

export class P2PClient {
    _config(options) {
        this.ip = '79.110.130.177';

    }

    _saveToken(data) {
        this.token = {
            value: data.token,
            lookup: data.tokenlookup,
            referenceNo: data.req_ref_no,
            date: Date.now(),
        };
    }

    /**
     * Get list cards
     * @param data - {Object} [object]
     * @param data.mobile
     * @param data.referenceNo
     * @param data.sendSms
     * @returns {Promise}
     * @constructor
     */
    GetCards(data) {
        // .... send Axios
    }
}