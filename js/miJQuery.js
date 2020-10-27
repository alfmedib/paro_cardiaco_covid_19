$(document).ready(() => {

		$('div#ppe').click(() => {
        
            $('div#ppe').toggleClass('ppe1');
        });	
        
        $('div.inicioRCP').click(() => {
            $('div.inicioRCP').toggleClass('inicioRCP1');
        });	

        $('div.hexagono').click(() => {
            $('div.hexagono').toggleClass('hexagono1');
        });	

        $('div.ritmoFV').click(() => {
            $('div.ritmoFV').toggleClass('ritmoFV1');
            $('div.desfibrilable').toggleClass('desfibrilable1');
            
        });

        $('div.ritmoAsistolia').click(() => {
            $('div.ritmoAsistolia').toggleClass('ritmoAsistolia1');
            $('div.noDesfibrilable').toggleClass('noDesfibrilable1');
            
        });

        $('div.rayo_1').click(() => {
            $('div.rayo_1').toggleClass('rayo_1lg');
            $('div.energiaDescarga').toggleClass('energiaDescarga1');
        });

        $('div.pririzarIntubacion').click(() => {
            $('div.pririzarIntubacion').toggleClass('pririzarIntubacion1');
           
        });

        $('div.rcp_1').click(() => {
            $('div.rcp_1').toggleClass('rcp_1Lg');
           
        })

        $('div.hexagono_2').click(() => {
            $('div.hexagono_2').toggleClass('hexagono2');
        });	

        $('div.rayo_2').click(() => {
            $('div.rayo_2').toggleClass('rayo2');
            $('div.energiaDescarga').toggleClass('energiaDescarga1');
        });

        $('div.adrenalina_1').click(() => {
            $('div.adrenalina_1').toggleClass('adrenalina1');
        });	

        $('div.hexagono_3').click(() => {
            $('div.hexagono_3').toggleClass('hexagono3');
        });	

        $('div.rayo_3').click(() => {
            $('div.rayo_3').toggleClass('rayo3');
            $('div.energiaDescarga').toggleClass('energiaDescarga1');
        });

        $('div.amiodarona_1').click(() => {
            $('div.amiodarona_1').toggleClass('amiodarona1');
            $('div.dosisAmiodarona').toggleClass('dosisAmiodarona1');
        });

        $('div.adrenalina_2').click(() => {
            $('div.adrenalina_2').toggleClass('adrenalina2');
        });	

        $('div.hexagono_4').click(() => {
            $('div.hexagono_4').toggleClass('hexagono4');
        });	

        $('div.causasReversibles').click(() => {
            $('div.causasReversibles').toggleClass('causasReversiblesLg');
        });

        $('div.hexagono_5').click(() => {
            $('div.hexagono_5').toggleClass('hexagono5');
        });	

        $('div.rce').click(() => {
            $('div.rce').toggleClass('rceLg');
        });	

        $('div.esDesfibrilable').click(() => {
            $('div.esDesfibrilable').toggleClass('esDesfibrilableLg');
        });



        
});