var express = require('express');  
var router = express.Router();  
/* GET home page. */  
router.get('/', function(req, res, next) {   
    res.status(200).json({     
        msn: "Hola mundo"   
    });  
}); 

//servico test
router.post('/test', function(req, res, next) {   
    req.body["msn"]="Por el servidor";
    var data = req.body    
    res.status(200).json(data);  
  });  

//servicio de divisa
  router.post('/divisa', function(req, res, next) {   
    var data = req.body
    var moneda = req.body.moneda;
    var cantidad = req.body.cantidad;
    var mc = req.body.mc;
    var divisas = {
        CAD: 1.3256384622,
 HKD: 7.8401345088,
 ISK: 124.6932654731,
 PHP: 52.1294192493,
 DKK: 6.7855130419,
 HUF: 304.6169226575,
 CZK: 23.5135872035,
 GBP: 0.8011724075,
 RON: 4.3155503045,
 SEK: 9.7030809779,
 IDR: 14112.4965918386,
 INR: 70.9474688721,
 BRL: 4.1587748796,
 RUB: 63.6425520313,
 HRK: 6.7290738889,
 JPY: 107.6524584204,
 THB: 30.5643915296,
 CHF: 0.988639462,
 EUR: 0.9088430428,
 MYR: 4.1814959556,
 BGN: 1.7775152231,
 TRY: 5.6850858857,
 CNY: 7.1070617104,
 NOK: 9.0179950922,
 NZD: 1.583931655,
 ZAR: 14.868581296,
 USD: 1,
 MXN: 19.4398800327,
 SGD: 1.3764427883,
 AUD: 1.471326002,
 ILS: 3.5040443515,
 KRW: 1193.9107516132,
 PLN: 3.9819140234,
 BO: 6.96
        
    };
    var tip_cambio=(cantidad/divisas[moneda])*divisas[mc];
    res.status(200).json({Cantidad_de_tipo_de_cambio: tip_cambio, moneda: mc});   
  });  

//servicio de interes

  router.post('/interes', function(req, res, next) {   
    var i_c=0;  
    var monto= req.body.monto;
    var interes= req.body.interes;
    var tiempo= req.body.tiempo;

      i_c=monto*(Math.pow((1+(interes/100)),tiempo)-1)
    res.status(200).json({interes_Compuesto_es: i_c});  
  });
  //zanzarah MGR;
 module.exports = router