import { usuarios } from "./user.js";

const ver=document.querySelector('.in')
const usuario= document.getElementById('usuario')
const contraseña=document.getElementById('password')
const login=document.getElementById('login')
const error= document.getElementById('parrafo')

// ver.addEventListener('mouseenter',()=>{
//     if(input.type=="text"){
//         input.type="password"
//     }else{
//         input.type=="password"
//     }
// })



login.addEventListener('click',(evento)=>{
    let existe=false
    evento.preventDefault()
    usuarios.forEach((item)=>{
        // if(usuario.value===item.username && contraseña.value===item.userpass){
        //     console.log("bienvenido")
        // }else if(usuario.value===item.username && contraseña.value!=item.userpass ){
        //     console.log("error de usuario o contraseña")
        // }else if(usuario.value!=item.username && contraseña.value===item.userpass ){
        //     console.log("error de usuario o contraseña")
        // }
        if(usuario.value==item.username){
            if(contraseña.value==item.userpass){
                existe=true
            }
        }
    })
    if(existe==true){
        location.assign("../html/principal.html")
    }else{
        error.textContent = "el usuario o la contraseña son incorrectos"

        // document.querySelector('.error').style.opacity=1;
        // setTimeout(funcion(){
        //     document.querySelector('.error').style.opacity=0
        // },3000)
    }
})
