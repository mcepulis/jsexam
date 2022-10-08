/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(a,b) {
    this.avalue = a
    this.bvalue = b
    this.sum = function() {
      return this.avalue + this.bvalue
    }
    this.subtraction = function (a, b) {
      return this.avalue - this.bvalue
    }
    this.multiplication = function (a, b) {
      return this.avalue * this.bvalue
    }
    this.division = function (a, b) {
      return this.avalue / this.bvalue
    }
  }
  
  let result = new Calculator(8, 8)
  console.log(result.sum())
  console.log(result.subtraction())
  console.log(result.multiplication())
  console.log(result.division())
  
  