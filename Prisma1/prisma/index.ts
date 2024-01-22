import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient();
async function main() {
    await prisma.entreprise.create({
        data:{
            nomEntreprise:'RidellelleEntreprise',
            Conctact:'784523',
            Adresse:'azertyuio'
            }
        
    })
    const allEntreprise= await prisma.entreprise.findMany()
    console.dir(allEntreprise,{depth:null})
}
main()
.catch(async (e)=>{
    console.error(e)
    process.exit(1)
})
.finally(async ()=>{
    await prisma.$disconnect()
})