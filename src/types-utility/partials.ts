interface Point {
    x:number;
    y:number;
}

let pointPart : Partial<Point>= {
    x:10
};

pointPart.x

interface Starship {
    name:string;
    enableHyperjump: boolean;
}

const updateStarship = (id: number, starship: Partial<Starship>) => {

}

updateStarship(10, {
    name:'toto',
//   enableHyperjump:false
})

type MyStarShip = Record<string, Starship>

const starship = {
    Explorer1 :{
        name:'toto',
        enableHyperjump:true
    },
    Explorer2 :{
        name:'tata',
        enableHyperjump:false
    },

} satisfies MyStarShip