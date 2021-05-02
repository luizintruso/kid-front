import { Pessoa } from "./pessoa";
import { Tipoendereco } from "./tipoendereco";
import { Uf } from "./uf";

export class Endereco {

    public id:Number;
    public tipoEndereco:Tipoendereco;
    public uf:Uf;
    public pessoa:Pessoa;
    public cep:Number;
    public cidade:String;
    public sigla:String;
    public bairro:String;
    public descEndereco:String;
    public numero:number;
    public descComplemento:String;
    public dataHoraInicio:Date;
    public dddTelefone:String;
    public telefone:String;
    public ddCelular:String;

   // @Column(name = "celular") -- TODO: arrumar no banco o tipo
    //public String celular;

}
