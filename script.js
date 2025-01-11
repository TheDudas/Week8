//Boxer and Boxer Rankings 

class Boxer {
    constructor(name, weight, height, hometown) {  // array of boxer attributes
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.hometown = hometown;
    }
    describe() {
        return "Weighing in at ${this.weight} and ${this.height} from ${this.hometown} welcome ${this.name}. "; 
    }  // Announces the Boxer and includes Height, Weight and hometown.  

}
class Rank {     // sets Ranking of the Boxer to combine with similar rankings
    constructor(amatuer, junior, pro) {    // array of rankings
        this.amatuer = amatuer;
        this.junior = junior;
        this.pro = pro;
        this.boxers = [];
    }
    addBoxer(boxer)  {
        if (boxer instanceof Boxer) {
            this.boxers.push(boxer);
        } else {
            throw new Error('You can only add an instance of boxer. Argument is not a boxer: ${boxer}');
        }
    }

    describe() {
        return '${this.rank} has ${this.boxer.length} boxers.';
    }
}


class Menu { //starts the application and our choices
    constructor() {
        this.boxers = []; 
        this.selectedBoxer = null;   // manage one boxer at a time. 
    }

    start() {  // entry of application data. select options. 
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch(selection) {
                case '1':
                    this.createBoxer();  // create a boxer 
                    break;
                case '2':
                    this.viewBoxer();  // view
                    break;
                case '3':
                    this.deleteBoxer();  // delete
                    break; 
                case '4':
                    this.displayBoxers();  //display all>?
                    break;
                default:
                    selection=0;
                 }  
        selection = this.showMainMenuOptions();
        }
        alert("Goodbye!");
    }

    showMainMenuOptions() {
        return prompt('0 exit, 1 Create New Boxer, 2 View Boxer, 3 Delete Boxer, 4 Display all Boxers' );  // prompts as explained in video did not work on this version. 
           }

    showBoxerMenuOptions(_boxerInfo) {
        return prompt('0 back, 1 create rank, 2 delete rank, ${boxerInfo} ');
            }

    displayBoxers() {   //display boxers does not run. displays an error that it is not defined. 
            let boxerString = ' ';
                for (let i = 0; i < this.boxers.length; i++) {
                boxerString += i + ') ' + this.boxers[i].name + '\n';
                    }
                alert(boxerString);
                }

    createBoxer()   {//create Boxer information.
        let name = prompt('Enter Name for a new Boxer:');
        let hometown = prompt('Enter Hometown for new Boxer: ');
        let weight = prompt('Enter Weight for new Boxer: ');
        let height = prompt('Enter Height of new Boxer: ');
            this.boxers.push(new Boxer(name));
            this.boxers.push(new Boxer(hometown));
            this.boxers.push(new Boxer(weight));
            this.boxers.push(new Boxer(height));
        }

    viewBoxer()  {   // view Boxer 
        let index = prompt('Enter the index of the Boxer you wish to view');
        if (index > -1 && index < this.boxers.length) {
            this.selectedBoxer = this.boxers[index];
            let description = 'Boxer Name: ' + this.selectedBoxer.name + '\n';
            description += ' ' + this.selectedBoxer.describe() + '\n';
            for (let i = 0; i < this.selectedBoxer.ranks.length; i++) {
                description += i + ') ' + this.selectedBoxer.ranks[i].describe() + '\n';
            }
            let selection1 = this.showBoxerMenuOptions(description);  // boxer options menu to create rank or delete rank.  
            switch (selection1) {
                case '1' :
                this.createRank();
                break;
                case '2' : 
                this.deleteRank();
               }
             }    
         }  

    deleteBoxer() {
            let index = prompt('Enter the index of the Boxer you wish to Delete: ');  // Delete the Boxer by index
            if (index > -1 && index < this.boxers.length) {
            this.boxers.splice(index,1);
            }

    createRank(); {  // create a ranking for the boxer to be compared to other boxers
        let rankings = prompt('Enter amatuer, junior or pro for the ranking of the new Boxer: ');
        this.ranks.push(new Rank(rankings));
             }
  
    deleteRank(); {   // delete the ranking of the boxer.
        let index = prompt('Enter the index of the Ranking you wish to delete');
        if (index > -1 && index < this.selectedBoxer.ranks.length) {
            this.boxer.ranks.splice(index, 1);
            }
        }

    }    
}

let menu = new Menu();
menu.start();
