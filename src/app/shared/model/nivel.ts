export class nivelAtual {
    nivel_atual: number;
    obs: String | null;

    public map(json: any) {
        this.nivel_atual = json?.nivel_atual;
        this.obs = json?.obs;
    }
}