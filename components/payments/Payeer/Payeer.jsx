import React from 'react';
import CryptoJS from 'crypto-js';

function b64EncodeUnicode(str) {
    const wordArray = CryptoJS.enc.Utf8.parse(str);
    return CryptoJS.enc.Base64.stringify(wordArray);;
}

const M_SHOP = '1541476691';
const M_ORDERID = 1;
const M_AMMOUNT = '0.01';
const M_CURR = 'RUB'
const M_DESC = b64EncodeUnicode('test');
const M_KEY = 'borCX5hr8XAS2651';

const AR_HASH = [M_SHOP, M_ORDERID, M_AMMOUNT, M_CURR, M_DESC,  M_KEY]
const SIGN = CryptoJS.SHA256(AR_HASH.join(':'));


const Payeer = () => {
    return (
        <form method="post" action="https://payeer.com/merchant/">
            <input type="hidden" name="m_shop" value={M_SHOP} />
            <input type="hidden" name="m_orderid" value={M_ORDERID}/>
            <input type="hidden" name="m_amount" value={M_AMMOUNT} />
            <input type="hidden" name="m_curr" value={M_CURR} />
            <input type="hidden" name="m_desc" value={M_DESC} />
            <input type="hidden" name="m_sign" value={SIGN}/>
            <input type="submit" name="m_process" value="send" />
        </form>
    )
}

export default Payeer;