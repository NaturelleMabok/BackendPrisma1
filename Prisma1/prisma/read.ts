import {PrismaClient} from "@prisma/client"
const prisma= new PrismaClient()
async function main() {
  const readEntreprise = await prisma.entreprise.findUnique({
    where:{
      idEntreprise:'65ae80cdf7062c6e7d02968a'
    
    },
    select:{
      nomEntreprise:true,
      Conctact:true,
      Adresse:true
    },
    
 }

 )
 //const readEntreprise= await prisma.entreprise.findUnique()
 console.dir(readEntreprise,{depth:null})
}

  main()
  .catch(async (e)=>{
    console.error(e)
    process.exit(1)
  }) 
  .finally(async ()=>{
    prisma.$disconnect()
  }) 
