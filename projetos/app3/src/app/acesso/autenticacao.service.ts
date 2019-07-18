import Usuario from './usuario.model';
import * as firebase from 'firebase';
import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class Autenticacao {

    public token_id: string;

    constructor(
        private router: Router
    ) {

        this.token_id = localStorage.getItem('idToken');
        
    }

    public cadastrarUsuario(usuario: Usuario): Promise<any> {
        
        return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
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

        return firebase.auth().signInWithEmailAndPassword(email, senha)
            .then((resposta:any) => {
                firebase.auth().currentUser.getIdToken()
                    .then((idToken) => {
                        this.token_id = idToken;
                        localStorage.setItem('idToken', idToken);
                        this.router.navigate(['/home']);
                    })
            });

    }

    public autenticado():boolean {
        if (this.token_id !== undefined && this.token_id !== null) {
            return true;
        } else {
            this.router.navigate(["/"]);
            return false;
        }
    }

    public sair():void {
        firebase.auth().signOut()
            .then(() => {
                localStorage.removeItem('idToken');
                this.token_id = null;
                this.router.navigate(["/"]);
            });
        
    }

}