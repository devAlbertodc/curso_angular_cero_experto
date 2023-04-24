//Create an array of string:
const skills: string[] = ['Bash','Counter','Healing'];

//Apply strict datatype to attributes of object. (Hometown is an optional property)
interface Character{
    name: string;
    hp: number;
    skills: string[];
    hometown?: string
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
}

//Assign value to property of object:
strider.hometown = 'Rivendell';

console.table(strider);
export {}