


//call center//



let usuarioV = prompt("si ya tienes un usuario creado escribe la palabra  SI. De lo contrario si quieres crear una cuenta escribe la palabra NO");
let  conU = "SI";
let contraU = "CONTRASEÑA";
let contraI = "NO"


if(usuarioV === conU){
    create_password=prompt("Si quieres cambiar tu contraseña escribe la palabra  CONTRASEÑA. Si quieres que siga siendo la misma escribe la palabra NO")

    if(contraU===create_password){
        let new_password=prompt("Ingresa tu nueva contraseña");
    }else{
        alert("Perfecto, tu contraseña seguira siendo la misma")
        let new_user= prompt("SI quieres cambiar tu nombre de usuario escribe la palabra SI. De lo contrario si quieres que tu nombre siga siendo el mismo escribe la palabra NO")

        if(new_user === contraI){
            alert("perfecto, tu nombre de usuario seguira siendo el mismo")
        }else if(new_user === conU){
            let new_username = prompt("Escribe tu nuevo nombre de usuario")
            
        }
    }

}else if(usuarioV === contraI){
    let re_user=prompt("escribe el nombre de usuario que quieras")
    let re_pass=prompt("escribe la contraseña que quieras")

    alert("CUENTA CREADA CON EXITO")
}




