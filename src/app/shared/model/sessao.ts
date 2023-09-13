export class sessao {
    ativa: boolean = false;
    nome: string;
    email: string | null;
    id:number

    public map(json: any) {
        this.nome = json?.nome;
        this.email = json?.email;
        this.ativa = json?.ativa;
        this.id = json?.id;
    }
}