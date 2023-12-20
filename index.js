class Hero {
    constructor(name, years, type) {
        this.name = name;
        this.years = years;
        this.type = type;
    }

    attack() {
        console.log(`O ${this.type} atacou usando shuriken:`);
    }
}

const MyHero = new Hero('Batatão', 25, 'ninja');

switch (MyHero.type) {
    case 'ninja':
        console.log(`O ninja de nome ${MyHero.name} fez um ataque furtivo usando shuriken.`);
        MyHero.attack(); // Chamando o método attack() para exibir a mensagem de ataque
        break;
    default:
        console.log('Tipo de herói não reconhecido.');
}
