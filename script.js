let guestbook_info = {
     name : '',
     siteURL : '',
     Message : ''
}

let guestbook_form = {
     name : Document.getElementbyID('guestbook_name'),
     siteURL : Document.getElementbyID('guestbook_url'),
     message : Document.getElementbyID('guestbook_message')
}

function collect_form_info(){
     console.log("test");
}

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