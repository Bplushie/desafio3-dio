class DefineHeroi {
    constructor(nomeHeroi, idadeHeroi, tipoHeroi) {
        this.nomeHeroi = nomeHeroi;
        this.idadeHeroi = idadeHeroi;
        this.tipoHeroi = tipoHeroi;
    }
    
    tipoAtaque() {
        let ataqueTipo = "";
        if (this.tipoHeroi === "Guerreiro") {
            ataqueTipo = "espada";
        } else if (this.tipoHeroi === "Mago") {
            ataqueTipo = "magia";
        } else if (this.tipoHeroi === "Monge") {
            ataqueTipo = "artes marciais";
        } else if (this.tipoHeroi === "Ninja") {
            ataqueTipo = "shuriken";
        }
        
        return ataqueTipo;
    }
    
    atacar() {
        const ataque = this.tipoAtaque();
        console.log(`O herói de classe ${this.tipoHeroi} atacou usando ${ataque}!`);
    }
}

let heroi = new DefineHeroi("Tifa", "21", "Monge");
heroi.atacar();
