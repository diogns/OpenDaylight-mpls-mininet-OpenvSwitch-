/*
*Dev: RAUL MORALES
* */
const express = require('express')
const app = express()

const axios = require('axios').default;
const SW1 = require('./sw1Conf')
const SW2 = require('./sw2Conf')
const SW3 = require('./sw3Conf')

const port = 3001

function requestODL(data,url){
    axios({
        method: 'put',
        url:url,
        data: data,
        auth: {
            username: 'admin',
            password: 'admin'
        },
    })
        .then(function (response) {
            console.log(response.status+'  ',response.statusText);
        })
        .catch(function (error) {
            console.log(error);
        });
}
app.get('/', (req, res) => {

    /*
    * CONFIGURACION DEL SW1
    * */
    let sw1Conf1=SW1.config_1
    let sw1Conf2=SW1.config_2

    let sw1Url1='http://192.168.240.130:8181/restconf/config/opendaylight-inventory:nodes/node/openflow:1/flow-node-inventory:table/0/flow/100'
    let sw1Url2='http://192.168.240.130:8181/restconf/config/opendaylight-inventory:nodes/node/openflow:1/flow-node-inventory:table/0/flow/11'

    requestODL(sw1Conf1,sw1Url1)
    requestODL(sw1Conf2,sw1Url2)
    /*
    * CONFIGURACION DEL SW2
    * */

    let sw2Conf1=SW2.config_1
    let sw2Conf2=SW2.config_2

    let sw2Url1='http://192.168.240.130:8181/restconf/config/opendaylight-inventory:nodes/node/openflow:2/flow-node-inventory:table/0/flow/101'
    let sw2Url2='http://192.168.240.130:8181/restconf/config/opendaylight-inventory:nodes/node/openflow:2/flow-node-inventory:table/0/flow/110'

    requestODL(sw2Conf1,sw2Url1)
    requestODL(sw2Conf2,sw2Url2)

    /*
    * CONFIGURACION DEL SW3
    * */

    let sw3Conf1=SW3.config_1
    let sw3Conf2=SW3.config_2

    let sw3Url1='http://192.168.240.130:8181/restconf/config/opendaylight-inventory:nodes/node/openflow:3/flow-node-inventory:table/0/flow/11'
    let sw3Url2='http://192.168.240.130:8181/restconf/config/opendaylight-inventory:nodes/node/openflow:3/flow-node-inventory:table/0/flow/100'

    requestODL(sw3Conf1,sw3Url1)
    requestODL(sw3Conf2,sw3Url2)
    res.send('SW1 & SW2 & SW3 configurados ')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
