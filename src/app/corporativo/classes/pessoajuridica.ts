import { Pessoa } from "./pessoa";

export class Pessoajuridica {

    public id:number;
    public pessoa:Pessoa;
    public nomeContratoSocial:String;
    public nomeFantasia:String;
    public valorCapitalSocial:Number;
    public numInscricaoEstadual:String;
    public numRegistroJuntaComercial:String;
    public dataRegistroJuntaComercial:Date;
    public numUltimaAlteracaoContratoSocial:String;
    public dataUltimaAlteracaoContratoSocial:Date;
    public numRegistroRepresentacao:String;
    public dataRegistroRepresentacao:Date;
    public contratoSocial:String;
    public numInscricaoMunicipal:String;
    public codNacionalidade:Number;
    public bolMei:Boolean;

}