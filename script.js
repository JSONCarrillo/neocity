setVersion = () => {
     let version = document.getElementById('version')
     version.innerHTML += "1.2"
};
setVersion();
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

function onSubmit(token) {
  document.getElementById("guestbook-form").submit();
}

