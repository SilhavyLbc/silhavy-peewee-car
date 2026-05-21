//rozšíření - neopixel, motorbit
//pohybu vpřed, otáčení, aktivace LED pásku.

let strip = neopixel.create(DigitalPin.P0, 6, NeoPixelMode.RGB) //nastavení LED
let svetla: boolean = false //v defaultu jsou svetla vypnuta


basic.forever(function(){
    if (input.buttonIsPressed(Button.AB)){  //ovládání řízení
    motorbit.forward(80)
    } 
    else if (input.buttonIsPressed(Button.A)){
        motorbit.turnleft(50)
    } 
    else if (input.buttonIsPressed(Button.B)){
        motorbit.turnright(50)
    } 
    else {
    motorbit.brake() //pokud na nic neklikam, vypni motory
    }


    if (input.logoIsPressed() && svetla === false){ //ovladani svetel
        svetla = true
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(100)    //CHYBA na 100ms se program zastavi aby se tlacitko nemátlo - nejak tu pauzu dat jen na svetla
    } 
    else if (input.logoIsPressed() && svetla === true){
        svetla = false
        strip.clear()
        basic.pause(100)
    }



    //udelat nejakej vypocet co prevede tu positivni cisla na rychlost levehe motoru a obracene
    //pridat nejakou funkci aby to melo odpich
    console.log(input.acceleration(Dimension.X))    //[-900 -left, 1000 -right](je započítaná odchylka)
})