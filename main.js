
// CENSURATORE
//  - Il software riceve in input un lungo testo e una serie di parole
// da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un "badword index" calcolato come il numero di
// parole censurate su il numero di parole totali


var testoLoremDaCensurare = produciTestoIniziale();

var arrayParoleDaCensurare = ['ipsum', 'bacon', 'prosciutto', 'amet', 'sausage'];

document.writeln('Le parole rimosse saranno: ' + arrayParoleDaCensurare + '<br><br>');

testoLoremDaCensurare = censura(arrayParoleDaCensurare, 'xxx', testoLoremDaCensurare);

document.writeln('Il testo censurato è:<br>' + testoLoremDaCensurare);

// FUNZIONI

function censura(paroleProibite, testoSostitutivo, testoIniziale) {
  for (var i = 0; i < paroleProibite.length; i++) {

    while (esisteRegolareOConPrimaMaiuscolaMinuscola(paroleProibite[i], testoIniziale)) {

      var tuttaMinuscola = paroleProibite[i].toLowerCase();
      var conPrimaMaiuscola = conPrimaLetteraMaiuscola(paroleProibite[i]);

      testoIniziale = testoIniziale.replace(paroleProibite[i], testoSostitutivo);
      testoIniziale = testoIniziale.replace(tuttaMinuscola, testoSostitutivo);
      testoIniziale = testoIniziale.replace(conPrimaMaiuscola, testoSostitutivo);
    }
  }

  console.log('testo censurato ok');
  return testoIniziale;
}

function esisteRegolareOConPrimaMaiuscolaMinuscola(parola, testo) {

  var tuttoMinuscolo = parola.toLowerCase();
  var primaMaiuscola = conPrimaLetteraMaiuscola(parola);

  if (testo.includes(parola) || testo.includes(tuttoMinuscolo) || testo.includes(primaMaiuscola)) {
    return true;
  }
  return false;
}

function conPrimaLetteraMaiuscola(previousWord) {
  var newWord = previousWord[0].toUpperCase().concat(previousWord.slice(1));
  return newWord;
}

function produciTestoIniziale() {
  var testoIniziale =  'Bacon ipsum dolor amet landjaeger fatback burgdoggen pork chop, sausage ball tip sirloin boudin pastrami venison pork kevin. Sausage burgdoggen porchetta tail ribeye shoulder, jowl venison. Fatback boudin ham hock ball tip ground round jerky, pork brisket pastrami biltong beef ribs shank turducken salami short ribs. Chicken salami boudin, buffalo ground round pastrami fatback. Doner pancetta pig filet mignon pork loin brisket. Pig meatball jerky boudin andouille. Prosciutto pig shoulder beef sirloin buffalo. Sausage buffalo venison hamburger spare ribs kielbasa, burgdoggen filet mignon brisket. Picanha ham prosciutto shoulder, biltong frankfurter boudin. Short loin pork belly jowl turkey meatloaf pork loin. Landjaeger spare ribs hamburger ham hock tri-tip doner bacon corned beef tongue. Ribeye tongue sirloin, pig pastrami andouille chuck kevin drumstick hamburger landjaeger shank burgdoggen pork. Capicola chuck ribeye, sausage cow sirloin swine flank ground round. Salami short ribs sirloin biltong pork chop chuck andouille drumstick jerky beef ribs tri-tip. Pork loin pancetta ribeye salami sausage, leberkas pork belly kevin hamburger t-bone brisket flank beef ribs pastrami. Ham hock turkey buffalo shank short ribs, pork loin strip steak andouille boudin hamburger. Tri-tip prosciutto bresaola shoulder andouille burgdoggen swine ball tip tongue leberkas.Bacon ipsum dolor amet landjaeger fatback burgdoggen pork chop, sausage ball tip sirloin boudin pastrami venison pork kevin. Sausage burgdoggen porchetta tail ribeye shoulder, jowl venison. Fatback boudin ham hock ball tip ground round jerky, pork brisket pastrami biltong beef ribs shank turducken salami short ribs. Chicken salami boudin, buffalo ground round pastrami fatback. Doner pancetta pig filet mignon pork loin brisket. Pig meatball jerky boudin andouille. Prosciutto pig shoulder beef sirloin buffalo. Sausage buffalo venison hamburger spare ribs kielbasa, burgdoggen filet mignon brisket. Picanha ham prosciutto shoulder, biltong frankfurter boudin. Short loin pork belly jowl turkey meatloaf pork loin. Landjaeger spare ribs hamburger ham hock tri-tip doner bacon corned beef tongue. Ribeye tongue sirloin, pig pastrami andouille chuck kevin drumstick hamburger landjaeger shank burgdoggen pork. Capicola chuck ribeye, sausage cow sirloin swine flank ground round. Salami short ribs sirloin biltong pork chop chuck andouille drumstick jerky beef ribs tri-tip. Pork loin pancetta ribeye salami sausage, leberkas pork belly kevin hamburger t-bone brisket flank beef ribs pastrami. Ham hock turkey buffalo shank short ribs, pork loin strip steak andouille boudin hamburger. Tri-tip prosciutto bresaola shoulder andouille burgdoggen swine ball tip tongue leberkas.';
  document.writeln('Il testo da censurare è:<br>' + testoIniziale + '<br><br>');
  return testoIniziale;
}
