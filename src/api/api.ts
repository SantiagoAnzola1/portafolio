import {z} from 'astro:content'

const projectSchema=z.object({
    title:z.string(),
    small:z.string(),
    featured:z.boolean(),
    images:z.array(z.string()),
    imagePosition:z.array(z.string()),
    infoPosition:z.string(),
    description:z.string(),
    // technologies:z.array(z.string()),
    technologies:(z.string()),
    type:z.array(z.string()),
    github:z.string(),
    link:z.string(),
    status:z.string(),
    date:z.string()||z.undefined()

})

export default async function getProjects () {


    const document=await fetch(import.meta.env.DATABASE_API_URL).then(res=>res.text())

const rows=document.split("\n").slice(1).map(row=>row.trim().split("\t"))

return rows.map(([title, small, featured, images,imagePosition, infoPosition, description, technologies,type,github,link,status,date])=>projectSchema.parse({
    title, small,
    featured:featured==="TRUE",
    images:images.split(';').map(image=>image.trim()),
    imagePosition:imagePosition.split(',').map(image=>image.trim()),
    infoPosition,
    description, 
    // technologies:technologies.split(',').map(image=>image.trim()),
    technologies,
    type:type.split(',').map(image=>image.trim()),
    github, link, status, date

})
)
}