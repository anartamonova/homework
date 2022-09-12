function parseCount(parse) {
    if(isNaN(Number.parseInt(parse))){
       throw new Error("Невалидное значение");
    }
    else {
       return Number.parseInt(parse)
    }
   }
   
   function validateCount(parse) {
       try {
           return parseCount(parse);
       } catch(error) {
           return(error);
       }
   
   }
   
   
class Triangle {
  constructor (a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
   
    let sumAb = a+b;
    let sumAc = a+c;
    let sumBc = b+c;
   
     if((sumAb < this.c) || (sumAc < this.b) || (sumBc < a)) {
      throw new Error ("Треугольник с такими сторонами не существует")
     }
    }
   
  getPerimeter(){
    return this.a+this.b+this.c;
    };
   
  getArea(){
    let p = this.getPerimeter()/2;
    let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    return +area.toFixed(3);
    };
}
   
function getTriangle(...args) {
  try{
    return new Triangle(...args);
    } catch (e){
      return {
        getPerimeter() {
          return "Ошибка! Треугольник не существует"
        },
           
        getArea() {
          return "Ошибка! Треугольник не существует"
        }
      }
     }
}
   