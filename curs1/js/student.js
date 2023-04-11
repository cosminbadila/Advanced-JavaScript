class Student{
    constructor(id, nume, varsta, nota1,nota2,){
        this.id=id;
        this.nume=nume;
        this.varsta=varsta;
        this.nota1=nota1;
        this.nota2=nota2;
    }

}

const student=new Student('1', 'Mihai', 19,8, 10,)
console.log(student);