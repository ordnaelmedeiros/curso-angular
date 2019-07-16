import Usuario from './usuario.model';
import * as firebase from 'firebase';

export class Autenticacao {

    public cadastrarUsuario(usuario: Usuario) {
        
        firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta:any) => {
                
                console.log(resposta);
                
                delete usuario.senha;

                firebase.database()
                    .ref(`usuarios_detalhe/${btoa(usuario.email)}`)
                    .set(usuario);
                
            })
            .catch((error:Error) => {
                console.log(error);
            });
    }

    public autenticar(email:string, senha:string): Promise<any> {

        return firebase.auth().signInWithEmailAndPassword(email, senha);

    }

}