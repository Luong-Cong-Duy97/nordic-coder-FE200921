/*
  let arrayData = [];
  
   const arrayDemo = dogList.forEach((item,index,array) => {

    let priceOfDog = 2
    if(item.age <2 ){
        priceOfDog = 10
    } else if (item.age < 5) {
        priceOfDog = 5
    }else {
        priceOfDog = 2
    }

    if(item.isSpecial === true){
        priceOfDog *= 2
    }
    arrayData.push(priceOfDog)
  })

  console(arrayData)
  */

const listStudent = [
  { name: 'Mary', point: 9.224, exercise: 5, isPoor: false },
  { name: 'Aboli', point: 2.1, exercise: 4, isPoor: false },
  { name: 'Adele', point: 4.9, exercise: 8, isPoor: false },
  { name: 'Alana', point: 5, exercise: 2, isPoor: true },
  { name: 'Amary', point: 10, exercise: 2, isPoor: false },
  { name: 'Angel', point: 11, exercise: 4, isPoor: false },
  { name: 'Athena', point: 8.5, exercise: 9, isPoor: true },
  { name: 'Briona', point: 9, exercise: 5, isPoor: true },
  { name: 'Yan', point: 5, exercise: 9, isPoor: false },
  { name: 'Ryan', point: 9, exercise: 5, isPoor: true },
  { name: 'Blella', point: 1, exercise: 3, isPoor: false },
  { name: 'Catarina', point: 2, exercise: 10, isPoor: false },
  { name: 'Catherine', point: 8, exercise: 4, isPoor: true },
]

let arrayGioi =[]

const array = listStudent.map((item,index,array) => {
    if(item.exercise >= 8){
        item.point = item.point + 1
    }
    if(item.isPoor === true){
        item.point = item.point + 0.5
    }
/* if ( item.point <= 10 && item.point >=9){
    
             return{ type:'Gioi', name: item.name }
        }
         if(item.point >= 7 && item.point <9){
            return{ type:'Kha', name: item.name }
        }
         if(item.point >= 5 && item.point <7){
            return{ type:'TrungBinh', name: item.name }
        }
        if(item.point <5){
            return{ type:'Kem', name: item.name }
        }
        if(item.point >10){
            return{ type:'KhongHopLe', name: item.name }

        }
*/
        
item.point <= 10 && item.point >=9 ? { type:'Gioi', name: item.name }
        : (item.point >=7 ? {type:'Kha', name: item.name}
            :(item.point >= 5 ? {type:'TrungBinh', name: item.name}
                :(item.point <5 ?  {type:'Kem', name: item.name}
                    : {type:'KhongHopLe', name: item.name})))


    

})
console.log(array)
let Gioi = []
let Kha = []
let TB = []
let Kem = []
let KhongHopLe = []
Gioi = array.filter((item,index,array) => {
    if(item.type === 'Gioi'){
        return true
    }else {
        return false
    }
}
)
console.log(Gioi,Gioi.length)
Kha = array.filter((item,index,array) => {
    if(item.type === 'Kha'){
        return true
    }else {
        return false
    }
}
)
console.log(Kha,Kha.length)
TB = array.filter((item,index,array) => {
    if(item.type === 'TrungBinh'){
        return true
    }else {
        return false
    }
}
)
console.log(TB,TB.length)
Kem = array.filter((item,index,array) => {
    if(item.type === 'Kem'){
        return true
    }else {
        return false
    }
}
)
console.log(Kem,Kem.length)
KhongHopLe = array.filter((item,index,array) => {
    if(item.type === 'KhongHopLe'){
        return true
    }else {
        return false
    }
}
)
console.log(KhongHopLe,KhongHopLe.length)


