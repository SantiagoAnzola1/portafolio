import {z} from 'astro:content'

const projectSchema=z.object({
    title:z.string(),
    small:z.string(),
    featured:z.boolean(),
    images:z.array(z.string()),
    description:z.string(),
    technologies:z.array(z.string()),
    type:z.array(z.string()),
    github:z.string(),
    link:z.string(),
    status:z.string(),
    date:z.string()||z.undefined()

})

export default async function getProjects () {

    const document=await fetch("https://docs.google.com/spreadsheets/d/18PtCm5LO9I4cwEryTbHbXX69qrLK5ScUOCED6jiswZ0/pub?output=tsv").then(res=>res.text())

const rows=document.split("\n").slice(1).map(row=>row.trim().split("\t"))

return rows.map(([title, small, featured, images,description, technologies,type,github,link,status,date])=>projectSchema.parse({
    title, small,
    featured:featured==="true",
    images:images.split(',').map(image=>image.trim()),
    description, 
    technologies:technologies.split(',').map(image=>image.trim()),
    type:type.split(',').map(image=>image.trim()),
    github, link, status, date

})
)
}