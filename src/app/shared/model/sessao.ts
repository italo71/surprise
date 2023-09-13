export class sessao {
    ativa: boolean = false;
    nome: string;
    email: string;
    nivel_atual: number;
    obs: string;

    public map(json: any) {
        this.nome = json?.nome;
        this.email = json?.email;
        this.nivel_atual = json?.nivel_atual;
        this.obs = json?.obs;
        this.ativa = json?.ativa;
    }
}