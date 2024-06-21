// Easter Egg
const tux = `
         _nnnn_
        dGGGGMMb
       @p~qp~~qMb
       M|@||@) M|
       @,----.JM|
      JS^\__/  qKL
     dZP        qKRb
    dZP          qKKb
   fZP            SMMb
   HZM            MMMM
   FqM            MMMM
 __| ".        |\\dS"qML
 |    \`.       | \`' \\Zq
_)      \.___.,|       .'
\____   )MMMMMP|     .'
     \`-'       \`--' Hey there!
`
console.log(tux)

// Message
const messages = [
    "I still use an iPod",
    "Old man yells at cloud",
    "My daughter threw up on me",
    "Why are we here? Just to suffer",
    "Probably playing Halo 3",
    "Probably playing Burnout 3",
    "Have you tried Insignia?",
    "I use Arch BTW!",
    "Hi, Mom!",
    "Working on it!",
    "Best Dad Ever!",
    "I miss the old internet",
    "Made with Javascript",
    "Neocities Rules!",
    "Inspect the Console!",
    "Certified Halo Nerd",
    "Source Code on Github!",
    ""
]


function randomizeMessage(){
    let number = 0;
    
    number = Math.floor(Math.random() * messages.length);

    return number
}

document.getElementById("message-text").innerHTML = messages[randomizeMessage()]
console.log(message)