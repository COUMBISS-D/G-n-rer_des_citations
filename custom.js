const quotes = [{
    quote: '"Le succès est la somme de petits efforts, répétés jour après jour."',
    writer: 'Leo Robert Collier'
}, {
    quote: '" Le succès n’est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez."',
    writer: '-Albert Schweitzer'
}, {
    quote: '"Les conditions essentielles pour réussir sont la patience et la certitude du succès."',
    writer: '-John D.Rockefeller'
}, {
    quote: '"L\'ignorance mène à la peur, la peur mène à la haine et la haine conduit à la violence. Voilà l\'équation"',
    writer: '-Averroès'
}, {
    quote: '" Le courage n\'est pas l\'absence de peur, mais la capacité de la vaincre” Nelson"',
    writer: '- Mandela '
}, {
    quote: '"  Si vous mettez votre cœur dans la réalisation de vos projets, si la passion vous dévore et que rien ne vous arrête succès il y aura."',
    writer: '-Mathieu Thomas'
}, {
    quote: '" C\'est peut-être de la peur qu\'on a le plus souvent besoin pour se tirer d\'affaire dans la vie"',
    writer: '-Louis-Ferdinand Céline'
}, {
    quote: '" Impossible de faire la lumière sur sa vie sans éclairer, ici ou là, celle des autres."',
    writer: '-Simone de Beauvoir'
}, {
    quote: '"Une période d’échec est un moment rêvé pour semer les graines du succès."',
    writer: '-Emmeline Raymond '
}, {
    quote: '"Le succès c’est d’aller d’échec en échec sans perdre son enthousiasme."',
    writer: '-Philippe Arnaud'
}, {
    quote: '" Offrir l\'amitié à qui veut l\'amour, c\'est donner du pain à qui meurt de soif"',
    writer: '-Proverbe espagnol'
},]



let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;

    writer.innerHTML = quotes[random].writer;
})