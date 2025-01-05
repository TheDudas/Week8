class Boxer {
    constructor(name, weight, height, hometown) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.hometown = hometown;
    }
    describe() {
        return "Weighing in at ${this.weight} and ${this.height} from ${this.hometown} welcome ${this.name}. ";
    }

}
class Rank {
    constructor(amatuer, junior, pro) {
        this.amatuer = amatuer;
        this.junior = junior;
        this.pro = pro;
    }
}

class Match {
    constructor(name) {
        this.name = name;
        this.rank = [];
    }
    addBoxer(boxer)  {
        if (boxer instanceof boxer) {
            this.boxer.push(boxer);
        } else {
            throw new Error('You can only add an instance of boxer. Argument is not a boxer: ${boxer}');
        }
    }
    describe() {
        return '${this.rank} has ${this.boxer.length} boxers.';
}
}

class Menu {
    constructor() {
        this.rank = [];
        this.selected.boxer = null;   
    }
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch(selection) {
                case '1':
                    this.createBoxer();
                
            }
        }  
    }

}
//Select boxer then complete constructor details. 
// Add boxer
// Select Rank, or enter rank
// enter Boxer information, weight, height, hometown
// display boxers 
// add boxers, 
//.delete boxers
// 

