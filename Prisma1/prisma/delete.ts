import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()
async function deleteEntreprise() {
  const deleteEntreprise= await prisma.entreprise.delete({
    where:{
        idEntreprise:'65ae80cdf7062c6e7d02968a'
    }
  })
  console.dir(deleteEntreprise,{depth:null})
}
deleteEntreprise()
.catch(async(e)=>{
    console.error(e)
    process.exit(1)
})
.finally(async()=>{
    prisma.$disconnect()
})