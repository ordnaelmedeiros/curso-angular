import { ConcessionariaDao } from './ConcessionariaDao';
import Concessionaria from './Concessionaria';
import { PessoaDao } from './PessoaDao';
import Pessoa from './Pessoa';

let daoConcessionaria = new ConcessionariaDao();
let concessionaria = new Concessionaria('', []);

daoConcessionaria.inserir(concessionaria);

let daoPessoa = new PessoaDao();
let pessoa = new Pessoa('', '');

daoPessoa.atualizar(pessoa);