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
                    break;
                case '2':
                    this.viewBoxer();
                    break;
                case '3':
                    this.deleteBoxer();
                    break; 
                case '4':
                    this.displayBoxer();
                    break;
                default:
                    selection=0;
        }  
        selection = this.showMainMenuOptions();
        }
        alert("Goodbye!");
    }
    showMainMenuOptions() {
        return prompt('0 exit, 1 Create New Boxer, 2 View Boxer, 3 Delete Boxer, 4 Display Boxer');

    }
    showBoxerMenuOptions(boxerInfo) {
        return prompt('0 back, 1 create rank, 2 delete rank');

    }
}
displayBoxer() {
    let boxerString = '';
    for (let i = 0; i <this.boxer.length; i++) {
        boxerString += i + ') ' + this.boxer[i].name + '\n';
    }
    alert(boxerString);
}

createBoxer() {
    let name = prompt('Enter name for new Boxer:');
    this.boxer.push(new Boxer(name));
    }

viewBoxer() {
    let index = prompt('Enter the index of the Boxer you wish to view');
    if (index > -1 && index < this.boxer.length) {
        this.selectedBoxer = this.boxer[index];
        let description = 'Boxer Name: ' + this.selectedBoxer + '\n';
    }
}
    let selection = this.showBoxerMenuOptions(description);
    switch (selection) {
        case '1':
            this.createBoxer();
        case '2':
            this.deleteBoxer();
    }
    deleteBoxer() {
        let index = prompt('Enter the index of the Boxer you wish to delete');
        if (index > -1 && index < this.boxer.length) {
            this.boxer.splice(index, 1);
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

let menu = new Menu();
menu.start();
