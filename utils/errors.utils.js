module.exports.signUpErrors= (err) => {
    let errors = {pseudo : '', email:'', password:'' }

    if(err.message.includes('pseudo'))
        errors.pseudo="Pseudo incorrect ou deja pris"
    if(err.message.includes('email'))
        errors.email="Email incorect"
    if(err.message.includes('password'))
        errors.password="le mot de passe doit faire 6 caracteres miniuml "
    if(err.code === 11000 && Object.keys(err.keyValue)[0].includes('pseudo') )
        errors.pseudo= "Cet pseudo est déjà pris"
    
        if(err.code === 11000 && Object.keys(err.keyValue)[0].includes('email') )
        errors.email= "Cet email est déjà enregistré"
   
    
        return errors
}

module.exports.signInErrors =(err) =>{
 let errors ={email:'',password:''}

    if (err.message.includes("email")) errors.email ="Email inconnu"

    if(err.message.includes("password")) errors.password="Le mot de passe ne correspond pas "


 return errors

}

module.exports.uploadErrors = (err)=>{
    let errors ={ file:'', format :'', maxSize :''}
    if(err.message.includes("invalide file"))
    errors.format =" Format incompatabile"
    if(err.message.includes("file invalid"))
    errors.file ="invalid file"
    if(err.message.includes("file not found "))
    errors.maxSize ="Le fichier dépasse 500ko"

    return errors
}