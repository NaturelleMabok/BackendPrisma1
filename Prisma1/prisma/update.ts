import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient()
async function updateEntreprise() {
    const updateEntreprise=await prisma.entreprise.update({
        where:{
            idEntreprise:'65ae80cdf7062c6e7d02968a'
        },
        data:{
nomEntreprise:'DanielleEntreprise'
        }
    })
    console.dir(updateEntreprise,{depth:null})
}

updateEntreprise()
.catch(async(e)=>{
    console.error(e)
    process.exit(1)
})
.finally(async()=>{
    prisma.$disconnect()
})