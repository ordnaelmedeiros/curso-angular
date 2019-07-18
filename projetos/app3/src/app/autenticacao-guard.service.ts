import { CanActivate } from '@angular/router';
import { Autenticacao } from './acesso/autenticacao.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AutenticacaoGuard implements CanActivate {

    constructor(
        private autenticacao: Autenticacao
    ) {}

    canActivate(): boolean {
        return this.autenticacao.autenticado();
    }
    
}